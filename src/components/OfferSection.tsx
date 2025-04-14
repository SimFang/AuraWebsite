
import React from "react";
import { Check, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OfferSection = () => {
  const includedFeatures = [
    "Custom homepage + up to 3 other pages",
    "Mobile & tablet responsive design",
    "Fast loading speed optimization",
    "Basic SEO setup (meta titles, descriptions)",
    "Simple content integration (images/text provided by client)",
    "Hosting setup assistance (if needed)",
    "Delivered within 7 days (once all materials are received)",
  ];

  const additionalFeatures = [
    "E-commerce setup (+€199)",
    "Additional pages (+€49/page)",
    "Copywriting services (+€149)",
    "Logo or branding help (+€99)",
  ];

  return (
    <section id="offer" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">What You Get for <span className="gradient-text">€299</span></h2>
          <p className="text-xl text-gray-600">
            Everything you need to get your business online quickly, without sacrificing quality or breaking the bank.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-brand-blue/30 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Included in the Package</h3>
              <ul className="space-y-3">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full bg-brand-blue/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-blue" />
                      </div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Optional Upgrades</h3>
              <ul className="space-y-3">
                {additionalFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center">
                        <Plus className="h-3 w-3 text-gray-500" />
                      </div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
