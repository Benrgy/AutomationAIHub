import { useState } from "react";
import Navigation from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { CheckCircle } from "lucide-react";

const SubmitTool = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">Tool Submitted Successfully!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for submitting your tool. Our team will review it and get back to you within 2-3 business days.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Submit Another Tool
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Submit Your AI Tool
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your AI automation tool featured in our directory and reach 25,000+ business owners
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="bg-card border rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="toolName">Tool Name *</Label>
                    <Input id="toolName" placeholder="e.g., Zapier" required />
                  </div>
                  <div>
                    <Label htmlFor="website">Website URL *</Label>
                    <Input id="website" type="url" placeholder="https://yourtool.com" required />
                  </div>
                </div>

                <div className="mb-4">
                  <Label htmlFor="category">Category *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="workflow">Workflow Automation</SelectItem>
                      <SelectItem value="marketing">Marketing Automation</SelectItem>
                      <SelectItem value="business">Business Operations</SelectItem>
                      <SelectItem value="hr">HR Automation</SelectItem>
                      <SelectItem value="sales">Sales Automation</SelectItem>
                      <SelectItem value="analytics">Data & Analytics</SelectItem>
                      <SelectItem value="integration">Integration Platforms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <Label htmlFor="shortDescription">Short Description *</Label>
                  <Textarea 
                    id="shortDescription" 
                    placeholder="Brief description of what your tool does (max 160 characters)"
                    maxLength={160}
                    required 
                  />
                </div>

                <div>
                  <Label htmlFor="longDescription">Detailed Description *</Label>
                  <Textarea 
                    id="longDescription" 
                    placeholder="Detailed explanation of features, benefits, and use cases"
                    rows={5}
                    required 
                  />
                </div>
              </div>

              {/* Pricing & Features */}
              <div className="bg-card border rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Pricing & Features</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="pricingModel">Pricing Model *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pricing model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="free">Free</SelectItem>
                        <SelectItem value="freemium">Freemium</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="startingPrice">Starting Price</Label>
                    <Input id="startingPrice" placeholder="e.g., $19.99/mo" />
                  </div>
                </div>

                <div className="mb-4">
                  <Label htmlFor="features">Key Features</Label>
                  <Textarea 
                    id="features" 
                    placeholder="List the main features (one per line)"
                    rows={4}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="freeTrial" />
                  <Label htmlFor="freeTrial">Free trial available</Label>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-card border rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="contactName">Your Name *</Label>
                    <Input id="contactName" placeholder="John Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail">Email Address *</Label>
                    <Input id="contactEmail" type="email" placeholder="john@yourtool.com" required />
                  </div>
                </div>

                <div className="mb-4">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" placeholder="Your Company Inc." />
                </div>

                <div>
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea 
                    id="additionalInfo" 
                    placeholder="Any additional information you'd like to share about your tool"
                    rows={3}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <Button type="submit" size="lg" className="btn-hero min-w-48">
                  Submit Tool for Review
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll review your submission within 2-3 business days
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmitTool;