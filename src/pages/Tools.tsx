import { useState } from "react";
import Navigation from "../components/Navigation";
import SearchSection from "../components/SearchSection";
import CategoryTabs from "../components/CategoryTabs";
import ToolGrid from "../components/ToolGrid";

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Tools Directory
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the best AI automation tools to eliminate manual work and boost your productivity by 300%
          </p>
        </div>
      </section>

      <SearchSection />
      <CategoryTabs onCategoryChange={setActiveCategory} />
      
      {/* Tools Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">
              {activeCategory === "popular" ? "Most Popular Tools" : "Tools"}
            </h2>
            <p className="text-muted-foreground">
              {/* Tool count would go here */}
            </p>
          </div>
          
          <ToolGrid category={activeCategory} searchQuery={searchQuery} />
        </div>
      </section>
    </div>
  );
};

export default Tools;