import { useState } from "react";
import { Flame, Zap, Building2, TrendingUp, Users, DollarSign, BarChart3, Settings } from "lucide-react";

const categories = [
  { id: "popular", name: "Most Popular", subtitle: "Save 20+ Hours Weekly", icon: Flame },
  { id: "workflow", name: "Workflow Automation", subtitle: "Eliminate Manual Tasks", icon: Zap },
  { id: "business", name: "Business Operations", subtitle: "Cut Costs by 80%", icon: Building2 },
  { id: "marketing", name: "Marketing Automation", subtitle: "40% More Leads", icon: TrendingUp },
  { id: "hr", name: "HR Automation", subtitle: "Streamline Team Management", icon: Users },
  { id: "sales", name: "Sales Automation", subtitle: "Close More Deals", icon: DollarSign },
  { id: "analytics", name: "Data & Analytics", subtitle: "Smart Insights", icon: BarChart3 },
  { id: "integration", name: "Integration Platforms", subtitle: "Connect Everything", icon: Settings },
];

interface CategoryTabsProps {
  onCategoryChange?: (categoryId: string) => void;
}

const CategoryTabs = ({ onCategoryChange }: CategoryTabsProps) => {
  const [activeCategory, setActiveCategory] = useState("popular");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  return (
    <section className="py-8 border-b border-border" aria-label="Tool categories">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">
          <div className="flex space-x-1 md:space-x-2 min-w-max md:justify-center pb-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`category-tab flex-shrink-0 ${isActive ? 'active' : ''}`}
                  aria-label={`Filter by ${category.name}`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent className="h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium text-sm md:text-base">
                        {category.name}
                      </div>
                      <div className="text-xs opacity-75 hidden md:block">
                        {category.subtitle}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;