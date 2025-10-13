import { useEffect } from "react";
import ToolCard from "./ToolCard";
import { useToolSearch } from "@/hooks/useToolSearch";

// Mock data for tools
const mockTools = [
  // Workflow Automation Tools
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
    id: "9",
    name: "Microsoft Power Automate",
    description: "Enterprise workflow automation integrated with Microsoft 365. Automate repetitive tasks across 400+ data sources and apps.",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop&crop=center",
    category: "Workflow Automation",
    pricing: "$15/user/mo",
    rating: 4.5,
    users: "5M+ users",
    trialAvailable: true,
    setupTime: "20 min setup",
    website: "https://powerautomate.microsoft.com"
  },
  {
    id: "10",
    name: "IFTTT",
    description: "If This Then That - Simple automation for everyday tasks. Connect smart home devices, social media, and apps with trigger-based automation.",
    logo: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=80&h=80&fit=crop&crop=center",
    category: "Workflow Automation",
    pricing: "Free",
    rating: 4.3,
    users: "25M+ users",
    trialAvailable: true,
    setupTime: "2 min setup",
    website: "https://ifttt.com"
  },
  {
    id: "11",
    name: "Make (Integromat)",
    description: "Visual automation platform for complex workflows. Build sophisticated integrations with 1000+ apps using a drag-and-drop interface.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center",
    category: "Workflow Automation",
    pricing: "$9/mo",
    rating: 4.6,
    users: "500K+ users",
    trialAvailable: true,
    setupTime: "15 min setup",
    website: "https://make.com"
  },
  {
    id: "12",
    name: "n8n",
    description: "Self-hosted workflow automation with 350+ integrations. Fair-code licensing with complete data control and unlimited executions.",
    logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=80&h=80&fit=crop&crop=center",
    category: "Workflow Automation",
    pricing: "Free/Open Source",
    rating: 4.7,
    users: "100K+ developers",
    trialAvailable: true,
    setupTime: "30 min setup",
    website: "https://n8n.io"
  },

  // Marketing Automation Tools
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
    id: "13",
    name: "ActiveCampaign",
    description: "Customer experience automation platform. Combine email marketing, marketing automation, sales automation, and CRM for powerful customer journeys.",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=80&h=80&fit=crop&crop=center",
    category: "Marketing Automation",
    pricing: "$29/mo",
    rating: 4.7,
    users: "180K+ customers",
    trialAvailable: true,
    setupTime: "20 min setup",
    website: "https://activecampaign.com"
  },
  {
    id: "14",
    name: "ConvertKit",
    description: "Email marketing automation for creators. Grow your audience with landing pages, forms, and automated email sequences designed for creators.",
    logo: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=80&h=80&fit=crop&crop=center",
    category: "Marketing Automation",
    pricing: "$29/mo",
    rating: 4.5,
    users: "600K+ creators",
    trialAvailable: true,
    setupTime: "10 min setup",
    website: "https://convertkit.com"
  },
  {
    id: "15",
    name: "Klaviyo",
    description: "E-commerce marketing automation platform. Increase revenue by 95% with personalized email and SMS campaigns powered by customer data.",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop&crop=center",
    category: "Marketing Automation",
    pricing: "Free",
    rating: 4.6,
    users: "143K+ brands",
    trialAvailable: true,
    setupTime: "15 min setup",
    website: "https://klaviyo.com"
  },
  {
    id: "16",
    name: "Pardot",
    description: "B2B marketing automation by Salesforce. Generate high-quality leads with AI-powered lead scoring, nurturing campaigns, and ROI reporting.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center",
    category: "Marketing Automation",
    pricing: "$1,250/mo",
    rating: 4.4,
    users: "10K+ companies",
    trialAvailable: true,
    setupTime: "60 min setup",
    website: "https://pardot.com"
  },

  // Business Operations Tools
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
    id: "17",
    name: "Notion",
    description: "All-in-one workspace that combines notes, docs, wikis, and project management. Replace dozens of tools with one connected workspace.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center",
    category: "Business Operations",
    pricing: "Free",
    rating: 4.8,
    users: "30M+ users",
    trialAvailable: true,
    setupTime: "5 min setup",
    website: "https://notion.so"
  },
  {
    id: "18",
    name: "Airtable",
    description: "App-building platform that democratizes software creation. Build custom apps and workflows without coding, connecting teams and data.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center",
    category: "Business Operations",
    pricing: "Free",
    rating: 4.6,
    users: "300K+ organizations",
    trialAvailable: true,
    setupTime: "10 min setup",
    website: "https://airtable.com"
  },
  {
    id: "19",
    name: "Asana",
    description: "Work management platform that helps teams orchestrate work, from daily tasks to strategic initiatives. Track progress and hit deadlines.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center",
    category: "Business Operations",
    pricing: "Free",
    rating: 4.5,
    users: "100K+ organizations",
    trialAvailable: true,
    setupTime: "10 min setup",
    website: "https://asana.com"
  },
  {
    id: "20",
    name: "ClickUp",
    description: "One app to replace them all. Project management, docs, goals, and chat in one platform. Save one day a week with unified productivity.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center",
    category: "Business Operations",
    pricing: "Free",
    rating: 4.7,
    users: "2M+ teams",
    trialAvailable: true,
    setupTime: "15 min setup",
    website: "https://clickup.com"
  },
  {
    id: "21",
    name: "Trello",
    description: "Visual collaboration tool that creates a shared perspective on any project. Organize anything with boards, lists, and cards.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center",
    category: "Business Operations",
    pricing: "Free",
    rating: 4.4,
    users: "50M+ users",
    trialAvailable: true,
    setupTime: "2 min setup",
    website: "https://trello.com"
  },

  // HR Automation Tools
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
    id: "22",
    name: "BambooHR",
    description: "HR software that makes people management easy. Automate onboarding, time tracking, performance reviews, and employee data management.",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center",
    category: "HR Automation",
    pricing: "$6.19/employee/mo",
    rating: 4.5,
    users: "25K+ companies",
    trialAvailable: true,
    setupTime: "30 min setup",
    website: "https://bamboohr.com"
  },
  {
    id: "23",
    name: "Workday",
    description: "Enterprise cloud applications for finance and HR. Automate payroll, benefits, talent management, and workforce planning.",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop&crop=center",
    category: "HR Automation",
    pricing: "Contact Sales",
    rating: 4.3,
    users: "9,500+ customers",
    trialAvailable: false,
    setupTime: "90+ days setup",
    website: "https://workday.com"
  },
  {
    id: "24",
    name: "ADP Workforce Now",
    description: "Comprehensive HR platform that automates payroll, benefits, talent management, and compliance for mid-market companies.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center",
    category: "HR Automation",
    pricing: "Contact Sales",
    rating: 4.2,
    users: "40M+ employees",
    trialAvailable: true,
    setupTime: "60 min setup",
    website: "https://adp.com"
  },
  {
    id: "25",
    name: "Greenhouse",
    description: "Hiring software that helps companies recruit top talent. Automate interview scheduling, candidate communication, and hiring workflows.",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=80&h=80&fit=crop&crop=center",
    category: "HR Automation",
    pricing: "Contact Sales",
    rating: 4.6,
    users: "4K+ companies",
    trialAvailable: true,
    setupTime: "45 min setup",
    website: "https://greenhouse.io"
  },
  {
    id: "26",
    name: "Lattice",
    description: "People management platform that automates performance reviews, goal tracking, and employee engagement surveys.",
    logo: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=80&h=80&fit=crop&crop=center",
    category: "HR Automation",
    pricing: "$11/employee/mo",
    rating: 4.7,
    users: "3K+ companies",
    trialAvailable: true,
    setupTime: "20 min setup",
    website: "https://lattice.com"
  },

  // Sales Automation Tools
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
    id: "27",
    name: "Pipedrive",
    description: "Sales CRM designed for small teams. Visual pipeline management with automated follow-ups, email integration, and activity reminders.",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop&crop=center",
    category: "Sales Automation",
    pricing: "$14.90/user/mo",
    rating: 4.6,
    users: "100K+ companies",
    trialAvailable: true,
    setupTime: "15 min setup",
    website: "https://pipedrive.com"
  },
  {
    id: "28",
    name: "Copper",
    description: "CRM that automatically captures leads from Gmail and Google Workspace. Zero-input CRM that works with your existing Google tools.",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=80&h=80&fit=crop&crop=center",
    category: "Sales Automation",
    pricing: "$25/user/mo",
    rating: 4.4,
    users: "25K+ companies",
    trialAvailable: true,
    setupTime: "10 min setup",
    website: "https://copper.com"
  },
  {
    id: "29",
    name: "Zoho CRM",
    description: "AI-powered sales automation platform. Automate lead capture, contact management, and sales processes with Zia AI assistant.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center",
    category: "Sales Automation",
    pricing: "$14/user/mo",
    rating: 4.3,
    users: "250K+ businesses",
    trialAvailable: true,
    setupTime: "20 min setup",
    website: "https://zoho.com/crm"
  },
  {
    id: "30",
    name: "HubSpot CRM",
    description: "Free CRM with automated deal tracking, contact management, and email templates. Scale your sales process without complexity.",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center",
    category: "Sales Automation",
    pricing: "Free",
    rating: 4.7,
    users: "100K+ companies",
    trialAvailable: true,
    setupTime: "5 min setup",
    website: "https://hubspot.com/products/crm"
  },
  {
    id: "31",
    name: "Outreach",
    description: "Sales engagement platform that automates personalized outreach. Increase reply rates by 40% with AI-powered email sequences.",
    logo: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=80&h=80&fit=crop&crop=center",
    category: "Sales Automation",
    pricing: "$100/user/mo",
    rating: 4.5,
    users: "6K+ companies",
    trialAvailable: true,
    setupTime: "45 min setup",
    website: "https://outreach.io"
  },

  // Data & Analytics Tools
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
  },
  {
    id: "32",
    name: "Google Analytics",
    description: "Web analytics platform that automatically tracks website performance. Understand your audience with AI-powered insights and reports.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center",
    category: "Data & Analytics",
    pricing: "Free",
    rating: 4.5,
    users: "50M+ websites",
    trialAvailable: true,
    setupTime: "10 min setup",
    website: "https://analytics.google.com"
  },
  {
    id: "33",
    name: "Mixpanel",
    description: "Product analytics platform that tracks user behavior automatically. Increase retention by 25% with behavioral data and cohort analysis.",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop&crop=center",
    category: "Data & Analytics",
    pricing: "Free",
    rating: 4.6,
    users: "26K+ companies",
    trialAvailable: true,
    setupTime: "15 min setup",
    website: "https://mixpanel.com"
  },
  {
    id: "34",
    name: "Power BI",
    description: "Business intelligence platform that automates data analysis. Create interactive dashboards and reports from multiple data sources.",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop&crop=center",
    category: "Data & Analytics",
    pricing: "$10/user/mo",
    rating: 4.4,
    users: "97% Fortune 500",
    trialAvailable: true,
    setupTime: "30 min setup",
    website: "https://powerbi.microsoft.com"
  },
  {
    id: "35",
    name: "Looker",
    description: "Modern BI platform that democratizes data access. Automated insights, embedded analytics, and self-service data exploration.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center",
    category: "Data & Analytics",
    pricing: "Contact Sales",
    rating: 4.5,
    users: "2K+ companies",
    trialAvailable: true,
    setupTime: "60 min setup",
    website: "https://looker.com"
  },
  {
    id: "36",
    name: "Amplitude",
    description: "Digital analytics platform that automatically tracks user journeys. Optimize product experiences with behavioral cohort analysis.",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=80&h=80&fit=crop&crop=center",
    category: "Data & Analytics",
    pricing: "Free",
    rating: 4.6,
    users: "1.5K+ companies",
    trialAvailable: true,
    setupTime: "20 min setup",
    website: "https://amplitude.com"
  },

  // Integration Platforms
  {
    id: "37",
    name: "MuleSoft",
    description: "API-led connectivity platform that connects applications, data, and devices. Enterprise integration with pre-built connectors.",
    logo: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=80&h=80&fit=crop&crop=center",
    category: "Integration Platforms",
    pricing: "Contact Sales",
    rating: 4.3,
    users: "1.6K+ customers",
    trialAvailable: true,
    setupTime: "120 min setup",
    website: "https://mulesoft.com"
  },
  {
    id: "38",
    name: "Dell Boomi",
    description: "Cloud-native integration platform as a service. Connect on-premise and cloud applications with drag-and-drop simplicity.",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop&crop=center",
    category: "Integration Platforms",
    pricing: "$550/mo",
    rating: 4.4,
    users: "20K+ customers",
    trialAvailable: true,
    setupTime: "90 min setup",
    website: "https://boomi.com"
  },
  {
    id: "39",
    name: "Microsoft Logic Apps",
    description: "Serverless cloud service that automates workflows. Connect hundreds of services with minimal code in the Azure ecosystem.",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop&crop=center",
    category: "Integration Platforms",
    pricing: "$0.000025/action",
    rating: 4.2,
    users: "200K+ organizations",
    trialAvailable: true,
    setupTime: "30 min setup",
    website: "https://azure.microsoft.com/en-us/services/logic-apps"
  },
  {
    id: "40",
    name: "AWS Step Functions",
    description: "Serverless workflow orchestration service. Coordinate distributed applications and microservices using visual workflows.",
    logo: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=80&h=80&fit=crop&crop=center",
    category: "Integration Platforms",
    pricing: "$0.025/state transition",
    rating: 4.3,
    users: "Millions of developers",
    trialAvailable: true,
    setupTime: "45 min setup",
    website: "https://aws.amazon.com/step-functions"
  },
  {
    id: "41",
    name: "Apache Airflow",
    description: "Open-source platform to programmatically author, schedule, and monitor workflows. Build complex data pipelines with Python.",
    logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=80&h=80&fit=crop&crop=center",
    category: "Integration Platforms",
    pricing: "Free/Open Source",
    rating: 4.5,
    users: "10K+ companies",
    trialAvailable: true,
    setupTime: "60 min setup",
    website: "https://airflow.apache.org"
  },
  {
    id: "42",
    name: "Workato",
    description: "Enterprise automation platform that connects apps and automates business workflows. AI-powered recipes for complex integrations.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center",
    category: "Integration Platforms",
    pricing: "Contact Sales",
    rating: 4.6,
    users: "7K+ customers",
    trialAvailable: true,
    setupTime: "30 min setup",
    website: "https://workato.com"
  }
];

export interface ToolGridProps {
  category?: string;
  searchQuery?: string;
  limit?: number;
  onResultsChange?: (count: number, suggestions: string[]) => void;
}

const ToolGrid = ({ category = "popular", searchQuery = "", limit, onResultsChange }: ToolGridProps) => {
  // Map category slugs to full category names
  const categoryMap: { [key: string]: string } = {
    workflow: "Workflow Automation",
    business: "Business Operations",
    marketing: "Marketing Automation",
    hr: "HR Automation",
    sales: "Sales Automation",
    analytics: "Data & Analytics",
    integration: "Integration Platforms"
  };
  
  const fullCategoryName = category !== "popular" && category !== "all" 
    ? categoryMap[category] || category 
    : category;

  const { filteredTools, suggestions, totalCount } = useToolSearch({
    tools: mockTools,
    category: fullCategoryName,
    searchQuery,
    limit,
  });

  // Notify parent of results changes
  useEffect(() => {
    onResultsChange?.(totalCount, suggestions);
  }, [totalCount, suggestions, onResultsChange]);

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