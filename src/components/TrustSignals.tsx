import { Shield, Zap, Award, Users } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption & SOC 2 compliant tools"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "5-minute onboarding, no coding required"
    },
    {
      icon: Award,
      title: "Verified Results",
      description: "Real user reviews from 25,000+ businesses"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Free consultation from automation specialists"
    }
  ];

  return (
    <section className="py-16 border-y border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Why 25,000+ Businesses Trust AutomationAIHub
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've helped thousands save an average of $50,000 yearly and 20+ hours weekly
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{signal.title}</h3>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
