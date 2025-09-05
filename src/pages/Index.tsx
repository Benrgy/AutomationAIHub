import { useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import CategoryTabs from "../components/CategoryTabs";
import ToolGrid from "../components/ToolGrid";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("popular");

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SearchSection />
      <CategoryTabs onCategoryChange={setActiveCategory} />
      
      {/* Featured Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Featured AI Tools That Save 20+ Hours Weekly
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked automation tools trusted by 25,000+ businesses worldwide
            </p>
          </div>
          
          <ToolGrid category={activeCategory} />
          
          <div className="text-center mt-12">
            <a 
              href="/AutomationAIHub/tools" 
              className="btn-hero inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:transform hover:-translate-y-1"
            >
              View All 200+ Tools
            </a>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
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
    </div>
  );
};

export default Index;
