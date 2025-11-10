import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import SearchSection from "../components/SearchSection";
import CategoryTabs from "../components/CategoryTabs";
import ToolGrid from "../components/ToolGrid";
import TrustSignals from "../components/TrustSignals";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Breadcrumbs from "../components/Breadcrumbs";
import { RegionalTestimonials } from "../components/RegionalTestimonials";
import { RegionalBusinessInfo } from "../components/RegionalBusinessInfo";
import { Button } from "../components/ui/button";
import { ArrowRight, DollarSign, TrendingUp, Award } from "lucide-react";

const UsLanding = () => {
  const [activeCategory, setActiveCategory] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");
  const [resultsCount, setResultsCount] = useState(0);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleResultsChange = (count: number, newSuggestions: string[]) => {
    setResultsCount(count);
    setSuggestions(newSuggestions);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs />
      
      {/* US-Specific Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-2xl">🇺🇸</span>
              <span className="text-sm font-medium text-primary">Trusted by 15,000+ US Businesses</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-glow">
              #1 AI Automation Platform for American Businesses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join leading US companies saving $50K+ annually with AI-powered automation. 
              Compare 200+ tools tailored for American market needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Start Saving Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/tools">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Browse All Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* US-Specific Benefits */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why US Companies Choose AutomationAIHub
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/60 backdrop-blur p-8 rounded-lg border border-border">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">US Dollar Pricing</h3>
              <p className="text-muted-foreground">
                All prices in USD with transparent pricing. No conversion fees or hidden costs.
              </p>
            </div>
            <div className="bg-background/60 backdrop-blur p-8 rounded-lg border border-border">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">US Market Focus</h3>
              <p className="text-muted-foreground">
                Tools vetted for US compliance, including SOC 2, HIPAA, and GDPR compatibility.
              </p>
            </div>
            <div className="bg-background/60 backdrop-blur p-8 rounded-lg border border-border">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">US Time Zone Support</h3>
              <p className="text-muted-foreground">
                Monday-Friday, 9 AM - 6 PM EST support. We're here when you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SearchSection 
        onSearchChange={setSearchQuery} 
        suggestions={suggestions}
        resultsCount={resultsCount}
        showCount={searchQuery.length > 0}
      />
      <CategoryTabs onCategoryChange={setActiveCategory} />
      
      {/* Featured Tools Section */}
      <section id="featured-tools" className="py-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top-Rated by US Companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked automation tools saving American businesses 20+ hours weekly
            </p>
          </header>
          
          <ToolGrid 
            category={activeCategory} 
            searchQuery={searchQuery} 
            limit={6}
            onResultsChange={handleResultsChange}
          />
          
          <div className="text-center mt-12">
            <Link to="/tools">
              <Button size="lg" className="text-lg">
                View All 200+ Tools →
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <RegionalBusinessInfo />
      <RegionalTestimonials />
      <TrustSignals />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default UsLanding;
