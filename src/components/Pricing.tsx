
import React from "react";
import { Check } from "lucide-react";

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPrimary = false 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  isPrimary?: boolean;
}) => {
  return (
    <div className={`rounded-2xl p-6 sm:p-8 ${isPrimary ? 'bg-aura-50 border-2 border-aura-500 shadow-lg relative' : 'bg-white border border-gray-200'}`}>
      {isPrimary && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-aura-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-3xl sm:text-4xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-gray-500 ml-1">/one-time</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-aura-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href="#get-started" 
        className={`block text-center py-3 px-4 rounded-full font-medium transition-all ${
          isPrimary 
            ? 'bg-aura-500 text-white hover:bg-aura-600' 
            : 'border border-aura-500 text-aura-500 hover:bg-aura-50'
        }`}
      >
        Get Started
      </a>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="aura-chip mx-auto mb-4">
            <span>Transparent Pricing</span>
          </div>
          <h2 className="section-title mb-4">Simple, Affordable Website Packages</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to get your business online quickly, without sacrificing quality or breaking the bank.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Basic Website"
            price="€299"
            description="Perfect for small businesses just getting started online."
            features={[
              "Custom homepage + up to 3 other pages",
              "Mobile & tablet responsive design",
              "Fast loading speed optimization",
              "Basic SEO setup",
              "Simple content integration",
              "Hosting setup assistance",
              "Delivered within 7 days"
            ]}
          />
          
          <PricingCard
            title="E-commerce"
            price="€498"
            description="Everything in Basic plus online shop functionality."
            features={[
              "All Basic Website features",
              "E-commerce functionality",
              "Product catalog (up to 20 products)",
              "Secure payment processing",
              "Shopping cart & checkout",
              "Order management",
              "Basic inventory tracking"
            ]}
            isPrimary={true}
          />
          
          <PricingCard
            title="Custom Project"
            price="Custom"
            description="For businesses with specific needs and requirements."
            features={[
              "All E-commerce features",
              "Additional pages as needed",
              "Custom functionality",
              "Premium copywriting",
              "Logo & branding design",
              "Advanced SEO setup",
              "Priority support"
            ]}
          />
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-center">Optional Upgrades</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center p-3 border border-gray-100 rounded-lg">
              <div className="mr-3 p-2 bg-aura-100 rounded-full">
                <Check className="w-4 h-4 text-aura-500" />
              </div>
              <div>
                <p className="font-medium">E-commerce setup</p>
                <p className="text-sm text-gray-500">+€199</p>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 rounded-lg">
              <div className="mr-3 p-2 bg-aura-100 rounded-full">
                <Check className="w-4 h-4 text-aura-500" />
              </div>
              <div>
                <p className="font-medium">Additional pages</p>
                <p className="text-sm text-gray-500">+€49/page</p>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 rounded-lg">
              <div className="mr-3 p-2 bg-aura-100 rounded-full">
                <Check className="w-4 h-4 text-aura-500" />
              </div>
              <div>
                <p className="font-medium">Copywriting services</p>
                <p className="text-sm text-gray-500">+€149</p>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 rounded-lg">
              <div className="mr-3 p-2 bg-aura-100 rounded-full">
                <Check className="w-4 h-4 text-aura-500" />
              </div>
              <div>
                <p className="font-medium">Logo & branding help</p>
                <p className="text-sm text-gray-500">+€99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
