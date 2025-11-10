export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  canonical?: string;
  alternates?: { hreflang: string; href: string }[];
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'Best AI Automation Tools 2025 - Save 20+ Hours Weekly | AutomationAIHub',
    description: 'Discover 200+ AI automation tools trusted by 25,000+ businesses. Eliminate manual tasks, boost productivity 300%, save $50K+ yearly. Free trials & expert reviews.',
    keywords: 'AI automation tools 2025, business automation software, workflow automation, productivity tools, no-code automation, AI tools directory, automation software reviews',
    ogTitle: 'Stop Wasting 20+ Hours Weekly - Best AI Automation Tools 2025',
    ogDescription: '25,000+ businesses save time with our curated AI automation tools. Compare features, pricing & reviews. Free trials available.',
    twitterTitle: 'Best AI Automation Tools Directory 2025',
    twitterDescription: 'Save 20+ hours weekly with 200+ AI automation tools. Trusted by 25,000+ businesses.',
    canonical: 'https://automationaihub.com',
    alternates: [
      { hreflang: 'en-US', href: 'https://automationaihub.com' },
      { hreflang: 'en-GB', href: 'https://automationaihub.com/uk' },
      { hreflang: 'en-CA', href: 'https://automationaihub.com/ca' },
      { hreflang: 'x-default', href: 'https://automationaihub.com' }
    ]
  },
  '/tools': {
    title: 'AI Tools Directory 2025 - Compare 200+ Automation Tools | AutomationAIHub',
    description: 'Browse 200+ AI automation tools with verified reviews, pricing comparisons & free trials. Filter by category, budget & features. Save 20+ hours weekly.',
    keywords: 'AI tools directory 2025, automation tools comparison, business automation software, workflow tools, productivity apps, automation tools list, AI software reviews',
    ogTitle: 'Compare 200+ AI Automation Tools - Complete Directory 2025',
    ogDescription: 'Find the perfect AI automation tool. Compare features, pricing, reviews & free trials from 200+ verified solutions.',
    twitterTitle: 'AI Tools Directory - 200+ Automation Solutions Compared',
    twitterDescription: 'Browse & compare 200+ AI automation tools with reviews, pricing & free trials.',
    canonical: 'https://automationaihub.com/tools',
    alternates: [
      { hreflang: 'en-US', href: 'https://automationaihub.com/tools' },
      { hreflang: 'en-GB', href: 'https://automationaihub.com/uk/tools' },
      { hreflang: 'en-CA', href: 'https://automationaihub.com/ca/tools' },
      { hreflang: 'x-default', href: 'https://automationaihub.com/tools' }
    ]
  },
  '/categories': {
    title: 'AI Automation Tools by Category 2025 - Marketing, Sales, HR & More',
    description: 'Explore AI automation tools by category: Marketing, Sales, HR, Finance, Operations. Find department-specific solutions in 60 seconds. Free trials available.',
    keywords: 'automation categories, marketing automation tools, sales automation software, HR automation, finance automation, operations automation, department-specific AI tools',
    ogTitle: 'AI Automation Tools by Category - Perfect Solutions for Every Team',
    ogDescription: 'Browse curated AI automation tools by department: Marketing, Sales, HR, Finance, Operations. Find your perfect solution fast.',
    twitterTitle: 'AI Automation Categories - Tools by Department 2025',
    twitterDescription: 'Explore AI automation tools for Marketing, Sales, HR, Finance & Operations teams.'
  },
  '/blog': {
    title: 'AI Automation Guides & Business Efficiency Strategies - AutomationAIHub',
    description: 'Learn how to implement AI automation in your business. Expert guides, case studies, and strategies to save 20+ hours weekly.',
    keywords: 'automation guides, AI implementation, business efficiency, workflow optimization, automation strategies',
    ogTitle: 'AI Automation Guides - Business Efficiency Strategies',
    ogDescription: 'Expert guides on implementing AI automation to save time and boost productivity. Real case studies and strategies.',
    twitterTitle: 'AI Automation Guides & Strategies',
    twitterDescription: 'Learn to implement AI automation with expert guides and real case studies.',
    canonical: 'https://automationaihub.com/blog',
    alternates: [
      { hreflang: 'en-US', href: 'https://automationaihub.com/blog' },
      { hreflang: 'en-GB', href: 'https://automationaihub.com/uk/blog' },
      { hreflang: 'en-CA', href: 'https://automationaihub.com/ca/blog' },
      { hreflang: 'x-default', href: 'https://automationaihub.com/blog' }
    ]
  },
  '/resources': {
    title: 'Free Business Automation Resources & Downloads - Templates & Guides',
    description: 'Download free automation templates, workflow guides, and productivity resources. ROI calculators, checklists, and implementation guides.',
    keywords: 'automation resources, free templates, workflow guides, productivity downloads, automation checklist',
    ogTitle: 'Free Automation Resources - Templates & Guides',
    ogDescription: 'Free download: Automation templates, workflow guides, ROI calculators, and implementation checklists.',
    twitterTitle: 'Free Automation Resources & Templates',
    twitterDescription: 'Download free automation templates, guides, and productivity resources.'
  },
  '/submit': {
    title: 'Submit Your AI Tool - Get Listed in AutomationAIHub Directory',
    description: 'List your AI automation tool in our directory. Reach 25,000+ potential customers. Free submission with premium listing options available.',
    keywords: 'submit AI tool, list automation tool, AI tool directory submission, promote AI software',
    ogTitle: 'Submit Your AI Tool - Reach 25,000+ Potential Customers',
    ogDescription: 'Get your AI automation tool listed in our directory. Reach thousands of potential customers actively looking for solutions.',
    twitterTitle: 'Submit Your AI Tool to AutomationAIHub',
    twitterDescription: 'List your AI automation tool and reach 25,000+ potential customers.'
  }
};

export const getToolSEO = (toolName: string, toolDescription: string, toolCategory: string): SEOConfig => ({
  title: `${toolName} Review 2025: Features, Pricing & Free Trial | AutomationAIHub`,
  description: `${toolName} review: ${toolDescription.slice(0, 120)}... Compare features, pricing & user reviews. Start free trial today.`,
  keywords: `${toolName.toLowerCase()}, ${toolName.toLowerCase()} review 2025, ${toolCategory.toLowerCase()} automation, ${toolName.toLowerCase()} pricing, ${toolName.toLowerCase()} features, ${toolName.toLowerCase()} free trial, best ${toolCategory.toLowerCase()} tools`,
  ogTitle: `${toolName} - ${toolCategory} Automation Tool Review 2025`,
  ogDescription: `Detailed ${toolName} review: Features, pricing & user feedback. ${toolDescription.slice(0, 100)}`,
  twitterTitle: `${toolName} Review 2025 - ${toolCategory} Automation`,
  twitterDescription: `${toolName}: ${toolDescription.slice(0, 120)}... Free trial available.`
});

export const getCategorySEO = (categoryName: string, categoryDescription: string): SEOConfig => ({
  title: `Best ${categoryName} Tools 2025 - Top Automation Software Reviewed`,
  description: `Compare the best ${categoryName} tools. ${categoryDescription}. Expert reviews, pricing comparisons & free trials.`,
  keywords: `${categoryName.toLowerCase()} tools, ${categoryName.toLowerCase()} automation, best ${categoryName.toLowerCase()} software 2025, ${categoryName.toLowerCase()} productivity tools`,
  ogTitle: `Top ${categoryName} Automation Tools 2025`,
  ogDescription: `Discover the best ${categoryName} tools. ${categoryDescription}`,
  twitterTitle: `Best ${categoryName} Tools 2025`,
  twitterDescription: `Compare top ${categoryName} automation tools with reviews & pricing.`
});

export const getBlogSEO = (blogTitle: string, blogExcerpt: string, blogCategory?: string): SEOConfig => ({
  title: `${blogTitle} | AutomationAIHub Blog`,
  description: blogExcerpt.slice(0, 155),
  keywords: `${blogCategory ? blogCategory + ', ' : ''}AI automation, automation guide, ${blogTitle.toLowerCase()}, business automation tips`,
  ogTitle: blogTitle,
  ogDescription: blogExcerpt.slice(0, 155),
  twitterTitle: blogTitle,
  twitterDescription: blogExcerpt.slice(0, 155)
});

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];