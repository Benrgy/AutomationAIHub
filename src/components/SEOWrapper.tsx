import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { seoConfigs, getDefaultSEO, getToolSEO } from "@/utils/seoConfig";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  title: string;
  excerpt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  category: string | null;
  featured_image: string | null;
  slug: string;
  published_at: string | null;
  updated_at: string;
}

// Mock tool data for SEO - would come from API in real app
const mockToolData: Record<string, { name: string; description: string; category: string }> = {
  "zapier": {
    name: "Zapier",
    description: "Connect 5,000+ apps to automate workflows without coding. Save 10+ hours weekly on repetitive tasks.",
    category: "Workflow Automation"
  },
  "notion": {
    name: "Notion",
    description: "All-in-one workspace for notes, docs, and project management. Replace 10+ tools with one platform.",
    category: "Productivity"
  },
  "airtable": {
    name: "Airtable",
    description: "Database platform that combines spreadsheet simplicity with database power for team collaboration.",
    category: "Database"
  }
};

export const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loadingBlogPost, setLoadingBlogPost] = useState(false);
  
  // Handle GitHub Pages SPA redirects from 404.html
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirect');
    if (redirectPath) {
      console.log('SEOWrapper: Handling redirect to:', redirectPath);
      sessionStorage.removeItem('redirect');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  // Fetch blog post data for dynamic SEO
  useEffect(() => {
    const fetchBlogPostSEO = async () => {
      if (location.pathname.startsWith('/blog/') && !location.pathname.endsWith('/blog/')) {
        const slug = location.pathname.replace('/blog/', '');
        setLoadingBlogPost(true);
        
        try {
          const { data, error } = await supabase
            .from("posts")
            .select("title, excerpt, meta_title, meta_description, category, featured_image, slug, published_at, updated_at")
            .eq("slug", slug)
            .eq("status", "published")
            .single();

          if (!error && data) {
            setBlogPost(data);
          }
        } catch (error) {
          console.error("Error fetching blog post SEO:", error);
        } finally {
          setLoadingBlogPost(false);
        }
      } else {
        setBlogPost(null);
      }
    };

    fetchBlogPostSEO();
  }, [location.pathname]);
  
  const getSEOConfig = () => {
    // Handle dynamic blog post pages
    if (blogPost) {
      const title = blogPost.meta_title || `${blogPost.title} - AutomationAIHub`;
      const description = blogPost.meta_description || blogPost.excerpt || `Read "${blogPost.title}" on AutomationAIHub`;
      
      return {
        title,
        description,
        keywords: `${blogPost.category ? blogPost.category + ", " : ""}AI automation, blog, ${blogPost.title}`,
        ogTitle: title,
        ogDescription: description,
        twitterTitle: title,
        twitterDescription: description,
      };
    }
    
    // Handle dynamic tool pages
    if (location.pathname.startsWith('/tools/') && params.id) {
      const toolData = mockToolData[params.id];
      if (toolData) {
        return getToolSEO(toolData.name, toolData.description, toolData.category);
      }
    }
    
    // Handle static pages
    return seoConfigs[location.pathname] || getDefaultSEO();
  };

  const seoConfig = getSEOConfig();

  // Update document title immediately for better UX
  useEffect(() => {
    document.title = seoConfig.title;
  }, [seoConfig.title]);

  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://automationaihub.com${location.pathname}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:url" content={`https://automationaihub.com${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://automationaihub.com/og-image.png" />
        <meta property="og:site_name" content="AutomationAIHub" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={seoConfig.twitterTitle} />
        <meta name="twitter:description" content={seoConfig.twitterDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AutomationAIHub" />
        <meta name="twitter:image" content="https://automationaihub.com/og-image.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="AutomationAIHub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* Structured Data for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AutomationAIHub",
            "url": "https://automationaihub.com",
            "logo": "https://automationaihub.com/logo.png",
            "description": "The ultimate directory of AI automation tools for businesses",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "hello@automationaihub.com"
            }
          })}
        </script>
        
        {/* Structured Data for Website */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AutomationAIHub",
            "url": "https://automationaihub.com",
            "description": "Directory of 200+ AI automation tools for business productivity",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://automationaihub.com/tools?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Blog Post Structured Data */}
        {blogPost && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": blogPost.title,
              "description": blogPost.excerpt || "",
              "image": blogPost.featured_image || "",
              "url": `https://automationaihub.com/blog/${blogPost.slug}`,
              "datePublished": blogPost.published_at || blogPost.updated_at,
              "dateModified": blogPost.updated_at,
              "author": {
                "@type": "Organization",
                "name": "AutomationAIHub"
              },
              "publisher": {
                "@type": "Organization",
                "name": "AutomationAIHub",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://automationaihub.com/favicon.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://automationaihub.com/blog/${blogPost.slug}`
              }
            })}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
};