import { useGeolocation } from '@/hooks/useGeolocation';
import { getRegionalConfig } from '@/utils/regionalContent';
import { Clock, Phone, Globe, Info } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

export const RegionalBusinessInfo = () => {
  const { location, loading } = useGeolocation();
  
  if (loading) {
    return null;
  }

  const region = location?.region || 'US';
  const config = getRegionalConfig(region);

  return (
    <div className="bg-secondary/10 border-y border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Business Hours</p>
              <p className="text-sm text-muted-foreground">{config.businessHours}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Contact Us</p>
              <p className="text-sm text-muted-foreground">{config.phoneNumber}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Your Region</p>
              <p className="text-sm text-muted-foreground">{location?.country}</p>
            </div>
          </div>
        </div>

        {config.pricingNote && region !== 'US' && (
          <Alert className="mt-6 bg-background/60">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-sm">
              {config.pricingNote}. Exchange rates are approximate and may vary.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};
