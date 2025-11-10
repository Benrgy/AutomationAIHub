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
import { ArrowRight, DollarSign, MapPin, Globe } from "lucide-react";

const CaLanding = () => {
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
      
      {/* Canada-Specific Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-2xl">🇨🇦</span>
              <span className="text-sm font-medium text-primary">Trusted by 2,500+ Canadian Businesses</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-glow">
              Canada's Premier AI Automation Platform
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join Canadian innovators saving C$65K+ annually with AI automation. 
              Coast-to-coast support from Vancouver to Toronto and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Discover Solutions
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

      {/* Canada-Specific Benefits */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Canadian Companies Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/60 backdrop-blur p-8 rounded-lg border border-border">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">CAD Pricing</h3>
              <p className="text-muted-foreground">
                All prices in Canadian Dollars. Fair and transparent pricing for Canadian businesses.
              </p>
            </div>
            <div className="bg-background/60 backdrop-blur p-8 rounded-lg border border-border">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Bilingual Support</h3>
              <p className="text-muted-foreground">
                English and French support available. Serving businesses across all provinces.
              </p>
            </div>
            <div className="bg-background/60 backdrop-blur p-8 rounded-lg border border-border">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Coast-to-Coast Coverage</h3>
              <p className="text-muted-foreground">
                EST/PST support hours. We understand Canada's unique time zones and business needs.
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
              Trusted Across Canadian Provinces
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, helping Canadian businesses automate and grow
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

export default CaLanding;
