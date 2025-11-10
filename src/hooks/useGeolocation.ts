import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type Region = 'US' | 'UK' | 'CA';

export interface GeolocationData {
  region: Region;
  country: string;
  country_code: string;
  city?: string;
  state?: string;
  timezone?: string;
  ip?: string;
}

const GEOLOCATION_CACHE_KEY = 'user_geolocation';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const useGeolocation = () => {
  const [location, setLocation] = useState<GeolocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Check cache first
        const cached = localStorage.getItem(GEOLOCATION_CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          const age = Date.now() - timestamp;
          
          if (age < CACHE_DURATION) {
            console.log('Using cached geolocation data');
            setLocation(data);
            setLoading(false);
            return;
          }
        }

        // Fetch fresh location data
        console.log('Fetching geolocation data...');
        const { data, error: functionError } = await supabase.functions.invoke('detect-location', {
          method: 'GET'
        });

        if (functionError) {
          throw functionError;
        }

        if (data) {
          const locationData: GeolocationData = {
            region: data.region || 'US',
            country: data.country || 'United States',
            country_code: data.country_code || 'US',
            city: data.city,
            state: data.state,
            timezone: data.timezone,
            ip: data.ip
          };

          setLocation(locationData);
          
          // Cache the result
          localStorage.setItem(GEOLOCATION_CACHE_KEY, JSON.stringify({
            data: locationData,
            timestamp: Date.now()
          }));
        }
      } catch (err) {
        console.error('Error detecting location:', err);
        setError(err instanceof Error ? err.message : 'Failed to detect location');
        
        // Set default to US on error
        setLocation({
          region: 'US',
          country: 'United States',
          country_code: 'US'
        });
      } finally {
        setLoading(false);
      }
    };

    detectLocation();
  }, []);

  return { location, loading, error };
};
