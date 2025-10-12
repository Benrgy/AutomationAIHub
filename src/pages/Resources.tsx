import Navigation from "../components/Navigation";
import { ExternalLink, Download, BookOpen, Video, FileText, CheckCircle, TrendingUp, Users, Zap, Calculator, List, Workflow } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const resources = [
  {
    title: "AI Automation ROI Calculator",
    description: "Calculate exactly how much time and money you'll save with AI automation. Input your team size, hourly rates, and tasks to get instant ROI projections.",
    type: "Excel Template",
    icon: <Calculator className="h-6 w-6" />,
    benefits: ["Instant ROI calculations", "Customizable for your business", "Track multiple automation projects"],
    downloadUrl: "#"
  },
  {
    title: "100+ Automation Opportunities Checklist",
    description: "Department-by-department checklist of tasks you can automate today. From HR to sales, identify quick wins and major time-savers.",
    type: "PDF Guide",
    icon: <List className="h-6 w-6" />,
    benefits: ["Organized by department", "Quick-win opportunities", "Priority ranking system"],
    downloadUrl: "#"
  },
  {
    title: "Workflow Automation Templates Library",
    description: "50+ ready-to-use automation workflows for Zapier, Make, and other platforms. Copy, customize, and deploy in minutes.",
    type: "Template Pack",
    icon: <Workflow className="h-6 w-6" />,
    benefits: ["Zapier & Make compatible", "Step-by-step setup guides", "Industry-specific workflows"],
    downloadUrl: "#"
  }
];

const guides = [
  {
    title: "The Complete Guide to Business Automation (2025)",
    description: "Everything you need to know about automating your business processes. From strategy to implementation, this comprehensive guide covers it all.",
    readTime: "20 min read",
    category: "Getting Started",
    keyTakeaways: ["Automation framework", "Tool selection process", "Implementation roadmap"],
    url: "/blog/complete-guide-business-automation"
  },
  {
    title: "How to Save $50K+ Yearly with AI Automation",
    description: "Real case studies showing exactly how businesses cut costs and boosted productivity. Includes ROI calculations and implementation timelines.",
    readTime: "12 min read",
    category: "Case Studies",
    keyTakeaways: ["5 real business examples", "Cost breakdown analysis", "Timeline to ROI"],
    url: "/blog/save-50k-ai-automation"
  },
  {
    title: "Automation for Non-Technical Teams",
    description: "No coding required! Learn how non-technical teams implement powerful automation using no-code tools. Perfect for small business owners.",
    readTime: "15 min read",
    category: "How-To",
    keyTakeaways: ["No-code tool comparison", "Beginner-friendly workflows", "Common pitfalls to avoid"],
    url: "/blog/automation-non-technical"
  },
  {
    title: "Measuring Automation Success: KPIs That Matter",
    description: "Track the right metrics to prove ROI and optimize your automation strategy. Includes dashboard templates and benchmarks.",
    readTime: "10 min read",
    category: "Strategy",
    keyTakeaways: ["Essential KPI framework", "Dashboard templates", "Industry benchmarks"],
    url: "/blog/measuring-automation-success"
  },
  {
    title: "AI Tool Integration: Best Practices 2025",
    description: "Connect your entire tech stack seamlessly. Learn integration patterns, common challenges, and solutions from experts.",
    readTime: "18 min read",
    category: "Technical",
    keyTakeaways: ["Integration patterns", "API best practices", "Troubleshooting guide"],
    url: "/blog/ai-tool-integration"
  },
  {
    title: "From Manual to Automated: 30-Day Transformation Plan",
    description: "Step-by-step plan to automate your first business process in 30 days. Includes weekly milestones and success criteria.",
    readTime: "8 min read",
    category: "Action Plan",
    keyTakeaways: ["Week-by-week roadmap", "Success checkpoints", "Quick wins first"],
    url: "/blog/30-day-automation-plan"
  }
];

const webinars = [
  {
    title: "AI Automation Masterclass: From Zero to Automated",
    description: "Live 90-minute deep dive where we automate a real business process from scratch. Watch us save 15+ hours per week using free and paid tools.",
    duration: "90 minutes",
    date: "Every Tuesday at 2 PM EST",
    spots: "23 spots left",
    url: "#",
    isLive: true,
    highlights: ["Live Q&A with experts", "Real-world implementation", "Free tool recommendations"]
  },
  {
    title: "Tool Selection Workshop: Find Your Perfect Stack",
    description: "Interactive session helping you choose the right tools for YOUR business. Bring your use case, get expert recommendations.",
    duration: "60 minutes",
    date: "Weekly Thursdays",
    spots: "Open enrollment",
    url: "#",
    isLive: false,
    highlights: ["Personalized recommendations", "Cost comparison analysis", "Integration planning"]
  },
  {
    title: "ROI Optimization: Maximize Your Automation Investment",
    description: "Learn how to squeeze every dollar of value from your automation tools. Advanced strategies for scaling your automation.",
    duration: "75 minutes",
    date: "Monthly - First Monday",
    spots: "45 spots left",
    url: "#",
    isLive: false,
    highlights: ["Advanced automation patterns", "Cost optimization tactics", "Scaling strategies"]
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            100% Free Resources
          </Badge>
          <h1 className="hero-title mb-6 max-w-4xl mx-auto">
            Everything You Need to Automate Your Business Successfully
          </h1>
          <p className="hero-subtitle mb-8 max-w-3xl mx-auto">
            Free templates, calculators, guides, and training to help you save 20+ hours weekly 
            and boost productivity by 300%. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>ROI Calculator Included</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>50+ Ready Templates</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Expert Training</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Free Downloads */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Free Tools & Templates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download our most popular resources and start automating today
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="tool-card">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center text-primary mb-4">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-base">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {resource.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                    {resource.type}
                  </Badge>
                  <Button className="w-full btn-hero" size="lg">
                    <Download className="h-5 w-5 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Guides & Articles */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Expert Guides & Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from real examples and proven strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="tool-card group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-primary border-primary/30">
                      {guide.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-sm font-medium mb-3">Key Takeaways:</p>
                    <div className="space-y-2">
                      {guide.keyTakeaways.map((takeaway, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Full Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Webinars & Training */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Live Training & Webinars</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join live sessions with automation experts and get your questions answered
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="tool-card">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center text-primary">
                      <Video className="h-7 w-7" />
                    </div>
                    {webinar.isLive && (
                      <Badge className="bg-red-500 text-white border-0 animate-pulse">
                        LIVE NOW
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{webinar.title}</CardTitle>
                  <CardDescription className="text-base">
                    {webinar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Duration</p>
                      <p className="text-sm font-medium">{webinar.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Next Session</p>
                      <p className="text-sm font-medium">{webinar.date}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-medium mb-3">What You'll Learn:</p>
                    <div className="space-y-2">
                      {webinar.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{webinar.spots}</span>
                    </div>
                  </div>

                  <Button className="w-full btn-hero" size="lg">
                    {webinar.isLive ? (
                      <>
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Join Live Session
                      </>
                    ) : (
                      <>
                        <Video className="h-5 w-5 mr-2" />
                        Register Free
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Automating?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our directory of 200+ AI automation tools and find the perfect solution for your business
          </p>
          <Button size="lg" className="btn-hero text-lg px-10 py-6">
            Explore All Tools →
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Resources;