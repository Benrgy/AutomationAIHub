import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are AI automation tools and how can they benefit my business?",
    answer: "AI automation tools are software solutions that use artificial intelligence to automate repetitive business tasks. They can save your business 20+ hours weekly, reduce labor costs by $50,000+ annually, and boost productivity by 300%. These tools work across marketing, sales, HR, finance, and operations without requiring technical expertise."
  },
  {
    question: "How much do AI automation tools cost?",
    answer: "AI automation tools range from free plans to enterprise solutions. Most tools offer free trials to test before committing. Pricing typically starts at $10-50/month for small businesses and scales based on features, users, and automation volume. The average business sees ROI within 2-3 months through time savings and increased productivity."
  },
  {
    question: "Do I need technical skills to use automation tools?",
    answer: "No! Most modern AI automation tools are designed for non-technical users with drag-and-drop interfaces and pre-built templates. You can set up most automations in under 5 minutes without coding knowledge. Many tools also offer free onboarding support and tutorials to help you get started."
  },
  {
    question: "Which AI automation tools are best for small businesses?",
    answer: "For small businesses, we recommend starting with Zapier for workflow automation, Notion for productivity and project management, and HubSpot for marketing automation. These tools offer free tiers or trials, require no technical skills, and can save 15-20 hours weekly even with basic implementations."
  },
  {
    question: "How do I choose the right automation tool for my needs?",
    answer: "Start by identifying your biggest time-consuming tasks. Use our category filters to find tools specific to your department (Marketing, Sales, HR, etc.). Check user reviews, compare pricing, and always try the free trial before committing. Look for tools with good customer support and integration capabilities with your existing software."
  },
  {
    question: "Are AI automation tools secure and compliant?",
    answer: "Reputable AI automation tools are built with enterprise-grade security including data encryption, GDPR compliance, and SOC 2 certification. Always review a tool's security documentation and data handling policies. Most tools listed on AutomationAIHub are used by Fortune 500 companies and meet strict security standards."
  },
  {
    question: "Can automation tools integrate with my existing software?",
    answer: "Yes! Most modern automation tools offer extensive integration capabilities. Tools like Zapier connect 5,000+ apps, while others provide native integrations with popular platforms like Slack, Google Workspace, Microsoft 365, Salesforce, and more. Check each tool's integration page for specific compatibility."
  },
  {
    question: "How quickly can I see results from automation?",
    answer: "Most businesses see immediate time savings within the first week of implementation. Simple automations can be set up in 5-15 minutes and start working immediately. Complex workflow automations may take 1-2 weeks to fully optimize, but the average business saves 20+ hours weekly within the first month."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Everything you need to know about AI automation tools
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;