import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import CategoryTabs from "../components/CategoryTabs";
import ToolGrid from "../components/ToolGrid";
import TrustSignals from "../components/TrustSignals";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Breadcrumbs from "../components/Breadcrumbs";

const Index = () => {
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
      <HeroSection />
      <SearchSection 
        onSearchChange={setSearchQuery} 
        suggestions={suggestions}
        resultsCount={resultsCount}
        showCount={searchQuery.length > 0}
      />
      <CategoryTabs onCategoryChange={setActiveCategory} />
      
      {/* Featured Tools Section */}
      <section id="featured-tools" className="py-16" aria-labelledby="featured-heading">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 id="featured-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Top-Rated AI Automation Tools That Save 20+ Hours Weekly
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked automation tools trusted by 25,000+ businesses worldwide. Compare features, pricing & reviews.
            </p>
          </header>
          
          <ToolGrid 
            category={activeCategory} 
            searchQuery={searchQuery} 
            limit={6}
            onResultsChange={handleResultsChange}
          />
          
          <div className="text-center mt-12">
            <Link 
              to="/tools" 
              className="btn-hero inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:transform hover:-translate-y-1"
            >
              View All 200+ Tools →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-card/50 border-y border-border" aria-labelledby="stats-heading">
        <div className="container mx-auto px-4">
          <h2 id="stats-heading" className="sr-only">Platform Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">AI Tools Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25K+</div>
              <div className="text-muted-foreground">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$50K+</div>
              <div className="text-muted-foreground">Average Yearly Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Hours Saved Weekly</div>
            </div>
          </div>
        </div>
      </section>
      
      <TrustSignals />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
