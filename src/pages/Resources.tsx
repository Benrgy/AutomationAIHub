import Navigation from "../components/Navigation";
import { ExternalLink, Download, BookOpen, Video, FileText } from "lucide-react";
import { Button } from "../components/ui/button";

const resources = [
  {
    title: "Business Automation Checklist",
    description: "A comprehensive checklist to identify automation opportunities in your business",
    type: "PDF Guide",
    icon: <FileText className="h-6 w-6" />,
    downloadUrl: "#"
  },
  {
    title: "ROI Calculator for AI Tools",
    description: "Calculate the return on investment for implementing AI automation tools",
    type: "Excel Template", 
    icon: <Download className="h-6 w-6" />,
    downloadUrl: "#"
  },
  {
    title: "Workflow Automation Templates",
    description: "Ready-to-use templates for common business automation workflows",
    type: "Template Pack",
    icon: <FileText className="h-6 w-6" />,
    downloadUrl: "#"
  }
];

const guides = [
  {
    title: "Getting Started with Business Automation",
    description: "Learn the fundamentals of automating your business processes",
    readTime: "10 min read",
    url: "#"
  },
  {
    title: "Choosing the Right AI Tools for Your Business",
    description: "A complete guide to selecting automation tools that fit your needs",
    readTime: "15 min read", 
    url: "#"
  },
  {
    title: "Measuring Automation Success",
    description: "Key metrics and KPIs to track your automation initiatives",
    readTime: "8 min read",
    url: "#"
  }
];

const webinars = [
  {
    title: "AI Automation Masterclass",
    description: "90-minute deep dive into implementing AI automation in your business",
    duration: "90 minutes",
    url: "#",
    isLive: false
  },
  {
    title: "Tool Integration Workshop", 
    description: "Hands-on workshop for connecting your business tools",
    duration: "60 minutes",
    url: "#",
    isLive: true
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Business Automation Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Templates, guides, and tools to help you implement AI automation successfully
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Free Downloads */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Free Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-card border rounded-xl p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <Button className="w-full btn-hero">
                  <Download className="h-4 w-4 mr-2" />
                  Download Free
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Guides & Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Guides & Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-card border rounded-xl p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{guide.description}</p>
                    <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Read Guide
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Webinars & Training */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Webinars & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-card border rounded-xl p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Video className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-lg">{webinar.title}</h3>
                      {webinar.isLive && (
                        <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-md">
                          LIVE
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{webinar.description}</p>
                    <span className="text-xs text-muted-foreground">{webinar.duration}</span>
                  </div>
                </div>
                <Button className="w-full btn-hero">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {webinar.isLive ? "Join Live" : "Watch Recording"}
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;