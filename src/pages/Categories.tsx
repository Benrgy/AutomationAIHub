import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star } from "lucide-react";

const categories = [
  {
    name: "Workflow Automation",
    slug: "workflow",
    description: "Automate repetitive tasks and eliminate manual work",
    toolCount: 45,
    popularityScore: 98,
    icon: "⚡"
  },
  {
    name: "Marketing Automation", 
    slug: "marketing",
    description: "Generate more leads and automate marketing campaigns",
    toolCount: 32,
    popularityScore: 95,
    icon: "📈"
  },
  {
    name: "Business Operations",
    slug: "business", 
    description: "Streamline operations and cut costs by 80%",
    toolCount: 28,
    popularityScore: 92,
    icon: "🏢"
  },
  {
    name: "HR Automation",
    slug: "hr",
    description: "Streamline team management and hiring processes", 
    toolCount: 18,
    popularityScore: 88,
    icon: "👥"
  },
  {
    name: "Sales Automation",
    slug: "sales",
    description: "Close more deals with automated sales processes",
    toolCount: 24,
    popularityScore: 90,
    icon: "💰"
  },
  {
    name: "Data & Analytics",
    slug: "analytics", 
    description: "Get smart insights from your business data",
    toolCount: 21,
    popularityScore: 85,
    icon: "📊"
  },
  {
    name: "Integration Platforms",
    slug: "integration",
    description: "Connect all your business tools seamlessly",
    toolCount: 15,
    popularityScore: 82,
    icon: "🛠️"
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Tool Categories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse tools by category to find the perfect automation solution for your business needs
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/tools?category=${category.slug}`}
                className="group bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{category.toolCount} tools</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{category.popularityScore}% popular</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">Explore tools</span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;