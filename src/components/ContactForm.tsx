
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Mail } from "lucide-react";

const ContactForm = () => {
  const handleDownload = () => {
    // Direct link to the Dropbox file with download parameter
    window.open("https://www.dropbox.com/scl/fi/5wxa2uos5i63tybo7old9/AuraSolution_IntakeForm_2025.docx?rlkey=dw8kqm2cwstyh28d2go4ypv0t&e=1&st=biu1sc7t&dl=1", "_blank");
    
    toast({
      title: "Download Started",
      description: "Please fill out the form and email it to aurasolutionagency@outlook.com",
    });
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
            Download our intake form, fill it out, and email it to us to get started.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-elegant p-6 sm:p-10 text-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">How to Get Started:</h3>
              <ol className="text-left list-decimal pl-5 space-y-4">
                <li><span className="font-medium">Download</span> the intake form by clicking the button below</li>
                <li><span className="font-medium">Fill out</span> all required information about your business and website needs</li>
                <li><span className="font-medium">Email</span> the completed form to <a href="mailto:aurasolutionagency@outlook.com" className="text-aura-500 hover:underline">aurasolutionagency@outlook.com</a></li>
              </ol>
            </div>
            
            <button
              type="button"
              onClick={handleDownload}
              className="button-primary inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download Intake Form
            </button>
            
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600 mb-4">
                Once we receive your completed form, we'll review your requirements and get back to you within 24 hours.
              </p>
              
              <div className="inline-flex items-center gap-2 text-aura-500">
                <Mail size={18} />
                <a href="mailto:aurasolutionagency@outlook.com" className="hover:underline">
                  aurasolutionagency@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            We're happy to help with any questions you might have about our service.
          </p>
          <a 
            href="mailto:aurasolutionagency@outlook.com" 
            className="button-secondary inline-flex items-center gap-2"
          >
            <Mail size={18} />
            Email Us: aurasolutionagency@outlook.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
