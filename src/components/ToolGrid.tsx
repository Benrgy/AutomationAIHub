import { useState, useEffect } from "react";
import ToolCard from "./ToolCard";

// Mock data for tools
const mockTools = [
  {
    id: "1",
    name: "Zapier",
    description: "Connect 5,000+ apps instantly. Automate workflows in 60 seconds without coding. Used by 2.2 million professionals to eliminate manual tasks and boost productivity by 300%.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center",
    category: "Workflow Automation",
    pricing: "$19.99/mo",
    rating: 4.9,
    users: "2.2M+ users",
    trialAvailable: true,
    setupTime: "5 min setup",
    website: "https://zapier.com"
  },
  {
    id: "2",
    name: "HubSpot",
    description: "All-in-one CRM that automates marketing, sales, and customer service. Generate 40% more leads with AI-powered automation tools trusted by 135,000+ customers.",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center",
    category: "Marketing Automation",
    pricing: "Free",
    rating: 4.8,
    users: "135K+ customers",
    trialAvailable: true,
    setupTime: "10 min setup",
    website: "https://hubspot.com"
  },
  {
    id: "3",
    name: "Monday.com",
    description: "Visual project management that cuts project chaos by 90%. Streamline workflows, track progress, and eliminate bottlenecks with AI-powered automation.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center",
    category: "Business Operations",
    pricing: "$8/user/mo",
    rating: 4.7,
    users: "180K+ companies",
    trialAvailable: true,
    setupTime: "15 min setup",
    website: "https://monday.com"
  },
  {
    id: "4",
    name: "Calendly",
    description: "Eliminate back-and-forth scheduling emails. Automate appointment booking and save 8+ hours weekly with smart scheduling automation.",
    logo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=80&fit=crop&crop=center",
    category: "Workflow Automation",
    pricing: "$8/user/mo",
    rating: 4.9,
    users: "20M+ users",
    trialAvailable: true,
    setupTime: "3 min setup",
    website: "https://calendly.com"
  },
  {
    id: "5",
    name: "Mailchimp",
    description: "Email marketing automation that generates 40% more opens. AI-powered campaigns, audience segmentation, and automated customer journeys.",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=80&h=80&fit=crop&crop=center",
    category: "Marketing Automation",
    pricing: "Free",
    rating: 4.6,
    users: "12M+ customers",
    trialAvailable: true,
    setupTime: "5 min setup",
    website: "https://mailchimp.com"
  },
  {
    id: "6",
    name: "Slack",
    description: "Team communication automation that reduces meetings by 25%. AI-powered channels, workflow automation, and seamless app integrations.",
    logo: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=80&h=80&fit=crop&crop=center",
    category: "HR Automation",
    pricing: "$7.25/user/mo",
    rating: 4.8,
    users: "18M+ users",
    trialAvailable: true,
    setupTime: "2 min setup",
    website: "https://slack.com"
  },
  {
    id: "7",
    name: "Salesforce",
    description: "CRM automation that closes 30% more deals. AI-powered lead scoring, automated follow-ups, and intelligent sales forecasting.",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop&crop=center",
    category: "Sales Automation",
    pricing: "$25/user/mo",
    rating: 4.5,
    users: "150K+ companies",
    trialAvailable: true,
    setupTime: "30 min setup",
    website: "https://salesforce.com"
  },
  {
    id: "8",
    name: "Tableau",
    description: "Data visualization automation that reveals insights 5x faster. AI-powered analytics, automated reporting, and smart data discovery.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center",
    category: "Data & Analytics",
    pricing: "$70/user/mo",
    rating: 4.7,
    users: "86K+ companies",
    trialAvailable: true,
    setupTime: "45 min setup",
    website: "https://tableau.com"
  }
];

interface ToolGridProps {
  category?: string;
  searchQuery?: string;
}

const ToolGrid = ({ category = "popular", searchQuery = "" }: ToolGridProps) => {
  const [filteredTools, setFilteredTools] = useState(mockTools);

  useEffect(() => {
    let filtered = mockTools;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (category !== "popular") {
      const categoryMap: { [key: string]: string } = {
        workflow: "Workflow Automation",
        business: "Business Operations",
        marketing: "Marketing Automation",
        hr: "HR Automation",
        sales: "Sales Automation",
        analytics: "Data & Analytics",
        integration: "Integration Platforms"
      };
      
      const categoryName = categoryMap[category];
      if (categoryName) {
        filtered = filtered.filter(tool => tool.category === categoryName);
      }
    }

    setFilteredTools(filtered);
  }, [category, searchQuery]);

  if (filteredTools.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No tools found matching your criteria.</p>
        <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or category filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredTools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default ToolGrid;