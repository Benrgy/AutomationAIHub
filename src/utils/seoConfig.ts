export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'AutomationAIHub - Save 20+ Hours Weekly with Best AI Automation Tools',
    description: 'Discover 200+ AI automation tools to eliminate manual work and boost productivity by 300%. Free trials available. Used by 25,000+ businesses worldwide.',
    keywords: 'AI automation tools, business automation, workflow automation, productivity tools, AI tools directory, automation software',
    ogTitle: 'AutomationAIHub - Stop Wasting Time on Manual Tasks',
    ogDescription: 'Join 25,000+ businesses saving 20+ hours weekly with AI automation tools. Browse 200+ tools with free trials.',
    twitterTitle: 'AutomationAIHub - AI Automation Tools Directory',
    twitterDescription: 'Save 20+ hours weekly with 200+ AI automation tools. Free trials available.'
  },
  '/tools': {
    title: 'AI Tools Directory - 200+ Automation Tools to Boost Productivity 300%',
    description: 'Browse the complete directory of 200+ AI automation tools. Compare features, pricing, and reviews. Find the perfect tool to eliminate manual work.',
    keywords: 'AI tools directory, automation tools list, business automation software, workflow tools, productivity apps',
    ogTitle: 'Complete AI Tools Directory - 200+ Automation Solutions',
    ogDescription: 'Find the perfect AI automation tool from 200+ options. Compare features, pricing, and user reviews.',
    twitterTitle: 'AI Tools Directory - 200+ Automation Tools',
    twitterDescription: 'Browse 200+ AI automation tools with reviews, pricing, and free trials.'
  },
  '/categories': {
    title: 'AI Automation Categories - Find Tools by Department & Function',
    description: 'Explore AI automation tools by category: Marketing, Sales, HR, Finance, Operations. Find department-specific tools in 60 seconds.',
    keywords: 'automation categories, marketing automation, sales automation, HR automation, finance automation, operations automation',
    ogTitle: 'AI Automation Tools by Category - Find Perfect Solutions',
    ogDescription: 'Browse AI automation tools by department: Marketing, Sales, HR, Finance, Operations. Perfect solutions for every team.',
    twitterTitle: 'AI Automation Categories - Tools by Department',
    twitterDescription: 'Find AI automation tools for Marketing, Sales, HR, Finance, and Operations teams.'
  },
  '/blog': {
    title: 'AI Automation Guides & Business Efficiency Strategies - AutomationAIHub',
    description: 'Learn how to implement AI automation in your business. Expert guides, case studies, and strategies to save 20+ hours weekly.',
    keywords: 'automation guides, AI implementation, business efficiency, workflow optimization, automation strategies',
    ogTitle: 'AI Automation Guides - Business Efficiency Strategies',
    ogDescription: 'Expert guides on implementing AI automation to save time and boost productivity. Real case studies and strategies.',
    twitterTitle: 'AI Automation Guides & Strategies',
    twitterDescription: 'Learn to implement AI automation with expert guides and real case studies.'
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
  title: `${toolName} Review: ${toolDescription.slice(0, 40)}... - Free Trial 2025`,
  description: `${toolName} review: ${toolDescription.slice(0, 120)}. Compare features, pricing, and user reviews. Free trial available.`,
  keywords: `${toolName.toLowerCase()}, ${toolName.toLowerCase()} review, ${toolCategory.toLowerCase()} automation, ${toolName.toLowerCase()} pricing, ${toolName.toLowerCase()} features`,
  ogTitle: `${toolName} - ${toolCategory} Automation Tool Review`,
  ogDescription: `Detailed review of ${toolName}: ${toolDescription.slice(0, 100)}. Features, pricing, and user feedback.`,
  twitterTitle: `${toolName} Review - ${toolCategory} Automation`,
  twitterDescription: `${toolName} review: ${toolDescription.slice(0, 120)}. Free trial available.`
});

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];