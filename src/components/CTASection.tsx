import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-background border border-primary/20 p-12">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Save 20+ Hours Every Week?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 25,000+ business owners who've already automated their workflows. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tools">
                <Button className="btn-hero text-lg px-8 py-4">
                  Browse AI Tools Now
                </Button>
              </Link>
              <Link to="/submit">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/10">
                  Submit Your Tool
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Free trials available on 200+ tools • No technical skills needed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
