import { Region } from '@/hooks/useGeolocation';

export interface RegionalConfig {
  currency: string;
  currencySymbol: string;
  timezone: string;
  businessHours: string;
  phoneNumber: string;
  testimonials: {
    name: string;
    company: string;
    role: string;
    content: string;
    location: string;
  }[];
  stats: {
    businesses: string;
    timeSaved: string;
    costSaved: string;
  };
  pricingNote?: string;
}

export const regionalContent: Record<Region, RegionalConfig> = {
  US: {
    currency: 'USD',
    currencySymbol: '$',
    timezone: 'EST',
    businessHours: 'Monday-Friday, 9 AM - 6 PM EST',
    phoneNumber: '+1 (800) AUTOMATE',
    pricingNote: 'All prices shown in USD',
    stats: {
      businesses: '15,000+',
      timeSaved: '20+',
      costSaved: '$50K+'
    },
    testimonials: [
      {
        name: 'Sarah Johnson',
        company: 'TechStart Inc.',
        role: 'CEO',
        content: 'AutomationAIHub helped us cut operational costs by 40% and saved our team 25 hours weekly. Game-changing for our startup!',
        location: 'San Francisco, CA'
      },
      {
        name: 'Michael Chen',
        company: 'GrowthLabs',
        role: 'Operations Director',
        content: 'We automated our entire customer onboarding process. What took 2 days now takes 2 hours. ROI in the first month!',
        location: 'Austin, TX'
      },
      {
        name: 'Jennifer Martinez',
        company: 'Digital Solutions Co.',
        role: 'Marketing Manager',
        content: 'The AI automation tools we found here increased our lead generation by 300%. Highly recommend!',
        location: 'New York, NY'
      }
    ]
  },
  UK: {
    currency: 'GBP',
    currencySymbol: '£',
    timezone: 'GMT',
    businessHours: 'Monday-Friday, 9 AM - 5 PM GMT',
    phoneNumber: '+44 20 AUTOMATE',
    pricingNote: 'Prices converted to GBP at current exchange rates',
    stats: {
      businesses: '7,500+',
      timeSaved: '20+',
      costSaved: '£40K+'
    },
    testimonials: [
      {
        name: 'Oliver Thompson',
        company: 'London FinTech',
        role: 'CTO',
        content: 'Brilliant platform! We discovered automation tools that reduced our compliance workload by 60%. Absolutely transformative.',
        location: 'London, UK'
      },
      {
        name: 'Emma Wilson',
        company: 'Manchester Digital',
        role: 'Managing Director',
        content: 'The curated selection of AI tools helped us scale from 5 to 50 clients without hiring additional staff. Outstanding value!',
        location: 'Manchester, UK'
      },
      {
        name: 'James Anderson',
        company: 'Edinburgh Innovations',
        role: 'Operations Lead',
        content: 'We saved over £35,000 in the first year by implementing tools from this directory. Couldn\'t be happier!',
        location: 'Edinburgh, UK'
      }
    ]
  },
  CA: {
    currency: 'CAD',
    currencySymbol: 'C$',
    timezone: 'EST/PST',
    businessHours: 'Monday-Friday, 9 AM - 6 PM EST/PST',
    phoneNumber: '+1 (800) AUTOMATE',
    pricingNote: 'Prices converted to CAD at current exchange rates',
    stats: {
      businesses: '2,500+',
      timeSaved: '20+',
      costSaved: 'C$65K+'
    },
    testimonials: [
      {
        name: 'Sophie Tremblay',
        company: 'Montreal Tech Hub',
        role: 'Founder',
        content: 'Incroyable! We automated our bilingual customer support and saved C$45K annually. Perfect for Canadian businesses!',
        location: 'Montreal, QC'
      },
      {
        name: 'David Kim',
        company: 'Vancouver Growth Co.',
        role: 'VP Operations',
        content: 'The automation tools we implemented through this platform helped us expand across provinces seamlessly. Highly efficient!',
        location: 'Vancouver, BC'
      },
      {
        name: 'Rachel Brown',
        company: 'Toronto Solutions',
        role: 'Business Owner',
        content: 'As a small business in Toronto, these AI tools leveled the playing field. We compete with enterprises now!',
        location: 'Toronto, ON'
      }
    ]
  }
};

export const getRegionalConfig = (region: Region): RegionalConfig => {
  return regionalContent[region] || regionalContent.US;
};

export const convertPrice = (priceUSD: number, targetRegion: Region): string => {
  const config = getRegionalConfig(targetRegion);
  
  // Approximate conversion rates (in production, use a real API)
  const conversionRates: Record<Region, number> = {
    US: 1.0,
    UK: 0.79,
    CA: 1.35
  };
  
  const rate = conversionRates[targetRegion] || 1.0;
  const convertedPrice = priceUSD * rate;
  
  return `${config.currencySymbol}${convertedPrice.toFixed(2)}`;
};

export const formatPricing = (pricing: string, region: Region): string => {
  // If pricing is "Free" or "Contact Sales", return as is
  if (!pricing.includes('$') && !pricing.includes('£')) {
    return pricing;
  }
  
  // Extract numeric value from pricing string like "$19.99/mo"
  const match = pricing.match(/\$?(\d+\.?\d*)/);
  if (!match) return pricing;
  
  const value = parseFloat(match[1]);
  const config = getRegionalConfig(region);
  
  // Approximate conversion
  const conversionRates: Record<Region, number> = {
    US: 1.0,
    UK: 0.79,
    CA: 1.35
  };
  
  const rate = conversionRates[region] || 1.0;
  const convertedValue = value * rate;
  
  // Preserve the format (e.g., "/mo", "/user/mo")
  const suffix = pricing.substring(match[0].length);
  
  return `${config.currencySymbol}${convertedValue.toFixed(2)}${suffix}`;
};
