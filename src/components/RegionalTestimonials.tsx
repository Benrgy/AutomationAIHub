import { useGeolocation } from '@/hooks/useGeolocation';
import { getRegionalConfig } from '@/utils/regionalContent';
import { Card, CardContent } from './ui/card';
import { Quote, MapPin } from 'lucide-react';

export const RegionalTestimonials = () => {
  const { location, loading } = useGeolocation();
  
  if (loading) {
    return (
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse h-8 bg-muted w-64 mx-auto mb-4 rounded"></div>
            <div className="animate-pulse h-4 bg-muted w-96 mx-auto rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  const region = location?.region || 'US';
  const config = getRegionalConfig(region);
  const regionName = location?.country || 'United States';

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Businesses in {regionName}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how companies in your region are transforming their operations with AI automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {config.testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm text-primary">
                    <MapPin className="w-4 h-4" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-background/60 backdrop-blur p-6 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">{config.stats.businesses}</div>
            <div className="text-muted-foreground">Businesses in {regionName}</div>
          </div>
          <div className="bg-background/60 backdrop-blur p-6 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">{config.stats.timeSaved} Hours</div>
            <div className="text-muted-foreground">Saved Weekly on Average</div>
          </div>
          <div className="bg-background/60 backdrop-blur p-6 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">{config.stats.costSaved}</div>
            <div className="text-muted-foreground">Average Annual Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
};
