import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Star, Users, Clock, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import Navigation from "../components/Navigation";

// Mock data - would come from API in real app
const mockTools = [
  {
    id: "1",
    name: "Zapier",
    description: "Connect 5,000+ apps instantly. Automate workflows in 60 seconds without coding. Used by 2.2 million professionals to eliminate manual tasks and boost productivity by 300%.",
    longDescription: "Zapier connects your favorite apps and automates workflows with no-code simplicity. Create powerful automations that trigger actions across thousands of apps, eliminating manual work and boosting productivity.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center",
    category: "Workflow Automation",
    pricing: "$19.99/mo",
    rating: 4.9,
    users: "2.2M+ users",
    trialAvailable: true,
    setupTime: "5 min setup",
    website: "https://zapier.com",
    features: [
      "Connect 5,000+ apps",
      "No-code automation",
      "Multi-step workflows",
      "Advanced filtering",
      "Team collaboration",
      "Custom webhooks"
    ],
    benefits: [
      "Save 20+ hours weekly",
      "Eliminate manual tasks",
      "Reduce human errors",
      "Scale your business",
      "Improve team productivity"
    ]
  },
  {
    id: "2", 
    name: "HubSpot",
    description: "All-in-one CRM that automates marketing, sales, and customer service. Generate 40% more leads with AI-powered automation tools trusted by 135,000+ customers.",
    longDescription: "HubSpot provides a complete platform for marketing, sales, and customer service automation. With powerful AI features and integrations, it helps businesses grow better.",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center",
    category: "Marketing Automation",
    pricing: "Free",
    rating: 4.8,
    users: "135K+ customers",
    trialAvailable: true,
    setupTime: "10 min setup",
    website: "https://hubspot.com",
    features: [
      "Free CRM",
      "Email marketing",
      "Lead scoring",
      "Marketing automation",
      "Sales pipeline",
      "Customer service tools"
    ],
    benefits: [
      "Generate 40% more leads",
      "Close deals faster",
      "Improve customer satisfaction",
      "Scale your marketing",
      "Unified customer data"
    ]
  }
];

const ToolDetail = () => {
  const { id } = useParams();
  const tool = mockTools.find(t => t.id === id);

  if (!tool) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Tool Not Found</h1>
          <Link to="/tools" className="text-primary hover:underline">
            ← Back to Tools
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Breadcrumb */}
      <nav className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">AutomationAIHub</Link>
            <span>/</span>
            <Link to="/tools" className="hover:text-foreground">Tools</Link>
            <span>/</span>
            <span className="text-foreground">{tool.category}</span>
            <span>/</span>
            <span className="text-foreground font-medium">{tool.name}</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/tools" 
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Tools</span>
        </Link>

        {/* Tool Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-start space-x-6 mb-6">
              <div className="h-20 w-20 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`} 
                  className="h-16 w-16 rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold">{tool.name}</h1>
                  {tool.trialAvailable && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Free Trial
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="font-medium">{tool.rating}</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{tool.category}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{tool.users}</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {tool.longDescription}
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-card rounded-xl border p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tool.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-card rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tool.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-card rounded-xl border p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">{tool.pricing}</div>
                <p className="text-muted-foreground">Starting price</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Users</span>
                  </div>
                  <span className="text-sm font-medium">{tool.users}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Setup Time</span>
                  </div>
                  <span className="text-sm font-medium">{tool.setupTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Rating</span>
                  </div>
                  <span className="text-sm font-medium">{tool.rating}/5</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full btn-hero" size="lg">
                  Try {tool.name} Free
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full btn-secondary-hero"
                  onClick={() => window.open(tool.website, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                ✅ Free trial available • No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;