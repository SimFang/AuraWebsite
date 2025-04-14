
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Code, Globe } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10" />,
      title: "Fill Out Form",
      description:
        "Provide your business info, upload images, text, and any branding materials. The more details you provide, the better your site will be.",
      color: "bg-blue-50 text-brand-blue",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "We Build Your Site",
      description:
        "Our team gets to work and builds your custom website within 7 days. No calls or meetings - we work efficiently with what you provide.",
      color: "bg-teal-50 text-brand-teal",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Site Goes Live",
      description:
        "Receive your live, ready-to-use website! It's yours forever. Simple handover with all access details and basic usage instructions.",
      color: "bg-gray-50 text-brand-dark",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">
            How It Works — <span className="gradient-text">Simple & Streamlined</span>
          </h2>
          <p className="text-xl text-gray-600">
            No calls, no meetings, no friction. Just an easy process to get your website up and running fast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border border-gray-200 overflow-visible">
              <CardContent className="p-6 pt-12 relative">
                <div className={`absolute -top-6 left-6 w-12 h-12 rounded-full ${step.color} flex items-center justify-center`}>
                  {step.icon}
                </div>
                <span className="text-sm font-semibold text-gray-400">Step {index + 1}</span>
                <h3 className="text-xl font-bold mt-1 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-4">
            Average time from form submission to live website:
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-5xl font-bold gradient-text">7</div>
            <div className="text-left">
              <p className="text-2xl font-bold">Days</p>
              <p className="text-gray-500">From start to finish</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
