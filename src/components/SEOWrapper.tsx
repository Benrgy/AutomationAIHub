import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { seoConfigs, getDefaultSEO, getToolSEO } from "@/utils/seoConfig";
import { useEffect } from "react";

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
  
  const getSEOConfig = () => {
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
        <link rel="canonical" href={`https://benrgy.github.io/AutomationAIHub${location.pathname}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:url" content={`https://benrgy.github.io/AutomationAIHub${location.pathname}`} />
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
      </Helmet>
      {children}
    </>
  );
};