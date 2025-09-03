import { Star, CheckCircle, Zap, Target, Flame } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        {/* Trust Badge */}
        <div className="trust-badge mb-8">
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span>Trusted by 25,000+ businesses</span>
          </div>
        </div>

        {/* Main Hook */}
        <h1 className="hero-title mb-8 max-w-4xl mx-auto">
          Stop Wasting 20+ Hours on Manual Tasks Every Week
        </h1>

        {/* Value Proposition */}
        <p className="hero-subtitle mb-12 max-w-3xl mx-auto">
          Join 25,000+ business owners using AI automation tools that eliminate busywork 
          and boost productivity by 300% - without technical skills
        </p>

        {/* Benefit Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-sm md:text-base">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Save $50,000+ yearly on labor costs</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-sm md:text-base">
            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Setup in under 5 minutes</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-sm md:text-base">
            <Target className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Works even if you're not tech-savvy</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-sm md:text-base">
            <Flame className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Free trials on 200+ tools</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="btn-hero text-lg px-8 py-4">
            Start Saving Time Today
          </Button>
          <Button className="btn-secondary-hero text-lg px-8 py-4">
            See How It Works
          </Button>
        </div>

        {/* Social Proof Testimonial */}
        <div className="bg-card/50 border border-border/50 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-semibold">S</span>
            </div>
            <div className="text-left">
              <p className="text-foreground font-medium">
                "Saved our company 30 hours per week"
              </p>
              <p className="text-sm text-muted-foreground">
                Sarah, CEO at TechStartup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;