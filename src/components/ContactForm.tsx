
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    websiteType: "basic",
    message: "",
    acceptTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, acceptTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast({
        title: "Please accept the terms",
        description: "You must accept the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form submitted successfully!",
        description: "We'll review your requirements and get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        businessName: "",
        websiteType: "basic",
        message: "",
        acceptTerms: false
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="get-started" className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="aura-chip mx-auto mb-4">
            <span>Get Started</span>
          </div>
          <h2 className="section-title mb-4">Ready to Get Your Website?</h2>
          <p className="section-subtitle mx-auto">
            Fill out the form below and we'll have your website ready within 7 days.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-elegant p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="Your Business Name"
                />
              </div>
              
              <div>
                <Label htmlFor="websiteType">Website Type *</Label>
                <select
                  id="websiteType"
                  name="websiteType"
                  value={formData.websiteType}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                >
                  <option value="basic">Basic Website (€299)</option>
                  <option value="ecommerce">E-commerce Website (€498)</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="message">Project Details</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  placeholder="Tell us about your business and what you need for your website."
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={handleCheckboxChange}
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  I understand that I'll only pay after approving the final website.
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="button-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              We'll review your requirements and get back to you within 24 hours.<br />
              For questions, email us at: aurasolutionagency@outlook.com
            </p>
          </form>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            We're happy to help with any questions you might have about our service.
          </p>
          <a 
            href="mailto:aurasolutionagency@outlook.com" 
            className="button-secondary inline-flex"
          >
            Email Us: aurasolutionagency@outlook.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
