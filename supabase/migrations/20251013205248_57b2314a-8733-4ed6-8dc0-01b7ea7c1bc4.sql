-- Create tools table
CREATE TABLE public.tools (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  logo TEXT NOT NULL,
  category TEXT NOT NULL,
  pricing TEXT NOT NULL,
  rating NUMERIC(2,1) NOT NULL CHECK (rating >= 0 AND rating <= 5),
  users TEXT NOT NULL,
  trial_available BOOLEAN NOT NULL DEFAULT true,
  setup_time TEXT NOT NULL,
  website TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tools ENABLE ROW LEVEL SECURITY;

-- Create policies - tools are public, anyone can view
CREATE POLICY "Tools are viewable by everyone" 
ON public.tools 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_tools_updated_at
BEFORE UPDATE ON public.tools
FOR EACH ROW
EXECUTE FUNCTION public.update_posts_updated_at();

-- Create index on category for faster filtering
CREATE INDEX idx_tools_category ON public.tools(category);

-- Create index on name for faster searching
CREATE INDEX idx_tools_name ON public.tools USING gin(to_tsvector('english', name));

-- Create index on description for faster searching
CREATE INDEX idx_tools_description ON public.tools USING gin(to_tsvector('english', description));

-- Insert all mock data
INSERT INTO public.tools (name, description, logo, category, pricing, rating, users, trial_available, setup_time, website) VALUES
-- Workflow Automation Tools
('Zapier', 'Connect 5,000+ apps instantly. Automate workflows in 60 seconds without coding. Used by 2.2 million professionals to eliminate manual tasks and boost productivity by 300%.', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center', 'Workflow Automation', '$19.99/mo', 4.9, '2.2M+ users', true, '5 min setup', 'https://zapier.com'),
('Calendly', 'Eliminate back-and-forth scheduling emails. Automate appointment booking and save 8+ hours weekly with smart scheduling automation.', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=80&fit=crop&crop=center', 'Workflow Automation', '$8/user/mo', 4.9, '20M+ users', true, '3 min setup', 'https://calendly.com'),
('Microsoft Power Automate', 'Enterprise workflow automation integrated with Microsoft 365. Automate repetitive tasks across 400+ data sources and apps.', 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop&crop=center', 'Workflow Automation', '$15/user/mo', 4.5, '5M+ users', true, '20 min setup', 'https://powerautomate.microsoft.com'),
('IFTTT', 'If This Then That - Simple automation for everyday tasks. Connect smart home devices, social media, and apps with trigger-based automation.', 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=80&h=80&fit=crop&crop=center', 'Workflow Automation', 'Free', 4.3, '25M+ users', true, '2 min setup', 'https://ifttt.com'),
('Make (Integromat)', 'Visual automation platform for complex workflows. Build sophisticated integrations with 1000+ apps using a drag-and-drop interface.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center', 'Workflow Automation', '$9/mo', 4.6, '500K+ users', true, '15 min setup', 'https://make.com'),
('n8n', 'Self-hosted workflow automation with 350+ integrations. Fair-code licensing with complete data control and unlimited executions.', 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=80&h=80&fit=crop&crop=center', 'Workflow Automation', 'Free/Open Source', 4.7, '100K+ developers', true, '30 min setup', 'https://n8n.io'),

-- Marketing Automation Tools
('HubSpot', 'All-in-one CRM that automates marketing, sales, and customer service. Generate 40% more leads with AI-powered automation tools trusted by 135,000+ customers.', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center', 'Marketing Automation', 'Free', 4.8, '135K+ customers', true, '10 min setup', 'https://hubspot.com'),
('Mailchimp', 'Email marketing automation that generates 40% more opens. AI-powered campaigns, audience segmentation, and automated customer journeys.', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=80&h=80&fit=crop&crop=center', 'Marketing Automation', 'Free', 4.6, '12M+ customers', true, '5 min setup', 'https://mailchimp.com'),
('ActiveCampaign', 'Customer experience automation platform. Combine email marketing, marketing automation, sales automation, and CRM for powerful customer journeys.', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=80&h=80&fit=crop&crop=center', 'Marketing Automation', '$29/mo', 4.7, '180K+ customers', true, '20 min setup', 'https://activecampaign.com'),
('ConvertKit', 'Email marketing automation for creators. Grow your audience with landing pages, forms, and automated email sequences designed for creators.', 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=80&h=80&fit=crop&crop=center', 'Marketing Automation', '$29/mo', 4.5, '600K+ creators', true, '10 min setup', 'https://convertkit.com'),
('Klaviyo', 'E-commerce marketing automation platform. Increase revenue by 95% with personalized email and SMS campaigns powered by customer data.', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop&crop=center', 'Marketing Automation', 'Free', 4.6, '143K+ brands', true, '15 min setup', 'https://klaviyo.com'),
('Pardot', 'B2B marketing automation by Salesforce. Generate high-quality leads with AI-powered lead scoring, nurturing campaigns, and ROI reporting.', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center', 'Marketing Automation', '$1,250/mo', 4.4, '10K+ companies', true, '60 min setup', 'https://pardot.com'),

-- Business Operations Tools
('Monday.com', 'Visual project management that cuts project chaos by 90%. Streamline workflows, track progress, and eliminate bottlenecks with AI-powered automation.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center', 'Business Operations', '$8/user/mo', 4.7, '180K+ companies', true, '15 min setup', 'https://monday.com'),
('Notion', 'All-in-one workspace that combines notes, docs, wikis, and project management. Replace dozens of tools with one connected workspace.', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center', 'Business Operations', 'Free', 4.8, '30M+ users', true, '5 min setup', 'https://notion.so'),
('Airtable', 'App-building platform that democratizes software creation. Build custom apps and workflows without coding, connecting teams and data.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center', 'Business Operations', 'Free', 4.6, '300K+ organizations', true, '10 min setup', 'https://airtable.com'),
('Asana', 'Work management platform that helps teams orchestrate work, from daily tasks to strategic initiatives. Track progress and hit deadlines.', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center', 'Business Operations', 'Free', 4.5, '100K+ organizations', true, '10 min setup', 'https://asana.com'),
('ClickUp', 'One app to replace them all. Project management, docs, goals, and chat in one platform. Save one day a week with unified productivity.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center', 'Business Operations', 'Free', 4.7, '2M+ teams', true, '15 min setup', 'https://clickup.com'),
('Trello', 'Visual collaboration tool that creates a shared perspective on any project. Organize anything with boards, lists, and cards.', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center', 'Business Operations', 'Free', 4.4, '50M+ users', true, '2 min setup', 'https://trello.com'),

-- HR Automation Tools
('Slack', 'Team communication automation that reduces meetings by 25%. AI-powered channels, workflow automation, and seamless app integrations.', 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=80&h=80&fit=crop&crop=center', 'HR Automation', '$7.25/user/mo', 4.8, '18M+ users', true, '2 min setup', 'https://slack.com'),
('BambooHR', 'HR software that makes people management easy. Automate onboarding, time tracking, performance reviews, and employee data management.', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center', 'HR Automation', '$6.19/employee/mo', 4.5, '25K+ companies', true, '30 min setup', 'https://bamboohr.com'),
('Workday', 'Enterprise cloud applications for finance and HR. Automate payroll, benefits, talent management, and workforce planning.', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop&crop=center', 'HR Automation', 'Contact Sales', 4.3, '9,500+ customers', false, '90+ days setup', 'https://workday.com'),
('ADP Workforce Now', 'Comprehensive HR platform that automates payroll, benefits, talent management, and compliance for mid-market companies.', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center', 'HR Automation', 'Contact Sales', 4.2, '40M+ employees', true, '60 min setup', 'https://adp.com'),
('Greenhouse', 'Hiring software that helps companies recruit top talent. Automate interview scheduling, candidate communication, and hiring workflows.', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=80&h=80&fit=crop&crop=center', 'HR Automation', 'Contact Sales', 4.6, '4K+ companies', true, '45 min setup', 'https://greenhouse.io'),
('Lattice', 'People management platform that automates performance reviews, goal tracking, and employee engagement surveys.', 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=80&h=80&fit=crop&crop=center', 'HR Automation', '$11/employee/mo', 4.7, '3K+ companies', true, '20 min setup', 'https://lattice.com'),

-- Sales Automation Tools
('Salesforce', 'CRM automation that closes 30% more deals. AI-powered lead scoring, automated follow-ups, and intelligent sales forecasting.', 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop&crop=center', 'Sales Automation', '$25/user/mo', 4.5, '150K+ companies', true, '30 min setup', 'https://salesforce.com'),
('Pipedrive', 'Sales CRM designed for small teams. Visual pipeline management with automated follow-ups, email integration, and activity reminders.', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop&crop=center', 'Sales Automation', '$14.90/user/mo', 4.6, '100K+ companies', true, '15 min setup', 'https://pipedrive.com'),
('Copper', 'CRM that automatically captures leads from Gmail and Google Workspace. Zero-input CRM that works with your existing Google tools.', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=80&h=80&fit=crop&crop=center', 'Sales Automation', '$25/user/mo', 4.4, '25K+ companies', true, '10 min setup', 'https://copper.com'),
('Zoho CRM', 'AI-powered sales automation platform. Automate lead capture, contact management, and sales processes with Zia AI assistant.', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center', 'Sales Automation', '$14/user/mo', 4.3, '250K+ businesses', true, '20 min setup', 'https://zoho.com/crm'),
('HubSpot CRM', 'Free CRM with automated deal tracking, contact management, and email templates. Scale your sales process without complexity.', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center', 'Sales Automation', 'Free', 4.7, '100K+ companies', true, '5 min setup', 'https://hubspot.com/products/crm'),
('Outreach', 'Sales engagement platform that automates personalized outreach. Increase reply rates by 40% with AI-powered email sequences.', 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=80&h=80&fit=crop&crop=center', 'Sales Automation', '$100/user/mo', 4.5, '6K+ companies', true, '45 min setup', 'https://outreach.io'),

-- Data & Analytics Tools
('Tableau', 'Data visualization automation that reveals insights 5x faster. AI-powered analytics, automated reporting, and smart data discovery.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center', 'Data & Analytics', '$70/user/mo', 4.7, '86K+ companies', true, '45 min setup', 'https://tableau.com'),
('Google Analytics', 'Web analytics platform that automatically tracks website performance. Understand your audience with AI-powered insights and reports.', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center', 'Data & Analytics', 'Free', 4.5, '50M+ websites', true, '10 min setup', 'https://analytics.google.com'),
('Mixpanel', 'Product analytics platform that tracks user behavior automatically. Increase retention by 25% with behavioral data and cohort analysis.', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop&crop=center', 'Data & Analytics', 'Free', 4.6, '26K+ companies', true, '15 min setup', 'https://mixpanel.com'),
('Power BI', 'Business intelligence platform that automates data analysis. Create interactive dashboards and reports from multiple data sources.', 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop&crop=center', 'Data & Analytics', '$10/user/mo', 4.4, '97% Fortune 500', true, '30 min setup', 'https://powerbi.microsoft.com'),
('Looker', 'Modern BI platform that democratizes data access. Automated insights, embedded analytics, and self-service data exploration.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center', 'Data & Analytics', 'Contact Sales', 4.6, '2K+ companies', true, '60 min setup', 'https://looker.com');
