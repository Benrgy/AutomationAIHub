import Navigation from "../components/Navigation";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

// Mock blog posts data
const featuredPost = {
  id: "1",
  title: "How to Automate Business Processes in 2025 (Complete Guide)",
  excerpt: "Learn how to eliminate 20+ hours of manual work weekly with AI automation. Step-by-step guide with real examples and ROI calculations.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  category: "Getting Started",
  author: "Sarah Johnson",
  date: "March 1, 2025",
  readTime: "12 min read"
};

const blogPosts = [
  {
    id: "2",
    title: "15 Business Automation Examples That Save $50K+ Yearly",
    excerpt: "Real automation examples from companies that eliminated manual work and saved thousands. See the exact tools and workflows they used.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    category: "Case Studies",
    author: "Mike Chen",
    date: "February 28, 2025",
    readTime: "8 min read"
  },
  {
    id: "3", 
    title: "AI vs Traditional Automation: Which Saves More Time?",
    excerpt: "Compare AI-powered automation vs traditional tools. Discover which approach delivers better ROI and faster implementation.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
    category: "Tool Comparisons",
    author: "Lisa Rodriguez",
    date: "February 25, 2025",
    readTime: "10 min read"
  },
  {
    id: "4",
    title: "Best AI Automation Tools for Small Business (2025 Guide)",
    excerpt: "Curated list of affordable AI tools that small businesses can implement in under 30 minutes. No technical skills required.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
    category: "Getting Started",
    author: "David Park",
    date: "February 22, 2025",
    readTime: "15 min read"
  },
  {
    id: "5",
    title: "AI Workflow Automation for Marketing Teams: Complete Setup Guide",
    excerpt: "Turn your marketing team into a productivity powerhouse. Automate lead generation, email campaigns, and social media management.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
    category: "Industry Guides",
    author: "Emma Wilson",
    date: "February 20, 2025",
    readTime: "11 min read"
  },
  {
    id: "6",
    title: "Business Process Automation Benefits: ROI Analysis 2025",
    excerpt: "Data-driven analysis of automation ROI across 500+ companies. See the exact savings and productivity gains by industry.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    category: "Automation Strategies",
    author: "Alex Thompson",
    date: "February 18, 2025",
    readTime: "9 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Blog Hero */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Automation Guides & Strategies
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn how to eliminate busywork and boost productivity with AI automation
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">Featured Article</h2>
          
          <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {featuredPost.category}
                  </Badge>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 hover:text-primary transition-colors cursor-pointer">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  </div>
                  
                  <Button className="btn-hero">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">Latest Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors group">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="btn-secondary-hero">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;