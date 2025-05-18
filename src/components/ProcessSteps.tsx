
import React from "react";
import { File, Code, Globe } from "lucide-react";

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step = ({ number, title, description, icon }: StepProps) => {
  return (
    <div className="relative">
      <div className="flex">
        <div className="flex flex-col items-center mr-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-aura-500 text-white font-bold text-lg">
            {number}
          </div>
          {number !== "3" && (
            <div className="w-px bg-gray-300 flex-grow my-2"></div>
          )}
        </div>
        <div className="pt-1.5">
          <div className="mb-2 bg-aura-100 text-aura-500 p-3 inline-flex rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 max-w-md">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ProcessSteps = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="aura-chip mx-auto mb-4">
            <span>Simple Process</span>
          </div>
          <h2 className="section-title mb-4">How It Works — Simple & Streamlined</h2>
          <p className="section-subtitle mx-auto">
            No calls, no meetings, no friction. Just an easy process to get your website up and running fast.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          <Step 
            number="1" 
            title="Fill Out Form" 
            description="Provide your business info, upload images, text, and any branding materials. The more details you provide, the better your site will be."
            icon={<File size={24} />}
          />
          
          <Step 
            number="2" 
            title="We Build Your Site" 
            description="Our team gets to work and builds your custom website within 7 days. No calls or meetings - we work efficiently with what you provide."
            icon={<Code size={24} />}
          />
          
          <Step 
            number="3" 
            title="Site Goes Live" 
            description="Receive your live, ready-to-use website! It's yours forever. Simple handover with all access details and basic usage instructions."
            icon={<Globe size={24} />}
          />
        </div>
        
        <div className="mt-16 text-center">
          <a href="#get-started" className="button-primary inline-flex items-center">
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
