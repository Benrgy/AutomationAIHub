import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GeoData {
  country: string;
  country_code: string;
  region: string;
  city: string;
  timezone: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP from headers (Deno Deploy provides this)
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    const clientIp = forwardedFor?.split(',')[0] || realIp || 'unknown';

    console.log('Detecting location for IP:', clientIp);

    // Use ipapi.co for geolocation (free tier: 1000 requests/day)
    let geoData: GeoData;
    
    if (clientIp === 'unknown' || clientIp.startsWith('127.') || clientIp.startsWith('192.168.')) {
      // Default to US for local/unknown IPs
      console.log('Local or unknown IP, defaulting to US');
      geoData = {
        country: 'United States',
        country_code: 'US',
        region: 'New York',
        city: 'New York',
        timezone: 'America/New_York'
      };
    } else {
      try {
        const response = await fetch(`https://ipapi.co/${clientIp}/json/`);
        
        if (!response.ok) {
          throw new Error(`Geolocation API error: ${response.status}`);
        }

        const data = await response.json();
        
        geoData = {
          country: data.country_name || 'United States',
          country_code: data.country_code || 'US',
          region: data.region || '',
          city: data.city || '',
          timezone: data.timezone || 'America/New_York'
        };

        console.log('Geolocation detected:', geoData);
      } catch (error) {
        console.error('Error fetching geolocation:', error);
        // Fallback to US
        geoData = {
          country: 'United States',
          country_code: 'US',
          region: 'New York',
          city: 'New York',
          timezone: 'America/New_York'
        };
      }
    }

    // Determine region (US, UK, CA, or Other)
    let detectedRegion = 'US';
    if (geoData.country_code === 'GB') {
      detectedRegion = 'UK';
    } else if (geoData.country_code === 'CA') {
      detectedRegion = 'CA';
    } else if (geoData.country_code === 'US') {
      detectedRegion = 'US';
    }

    return new Response(
      JSON.stringify({
        region: detectedRegion,
        country: geoData.country,
        country_code: geoData.country_code,
        city: geoData.city,
        state: geoData.region,
        timezone: geoData.timezone,
        ip: clientIp
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in detect-location function:', error);
    
    return new Response(
      JSON.stringify({
        error: error.message,
        region: 'US', // Default fallback
        country: 'United States',
        country_code: 'US'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200, // Return 200 even on error with fallback data
      }
    );
  }
});
