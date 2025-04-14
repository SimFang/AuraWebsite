
import React from "react";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    {
      name: "Price",
      us: "€299",
      agency: "€1000+",
      diy: '"Free" but time-consuming',
    },
    {
      name: "Time to Launch",
      us: "7 Days",
      agency: "2-4 weeks",
      diy: "Depends on you",
    },
    {
      name: "Technical Hassle",
      us: "None",
      agency: "Medium",
      diy: "High",
    },
    {
      name: "Custom Design",
      us: <Check className="h-5 w-5 mx-auto text-green-500" />,
      agency: <Check className="h-5 w-5 mx-auto text-green-500" />,
      diy: <X className="h-5 w-5 mx-auto text-red-500" />,
    },
    {
      name: "Strategy Calls",
      us: <X className="h-5 w-5 mx-auto text-gray-400" />,
      agency: <Check className="h-5 w-5 mx-auto text-green-500" />,
      diy: <X className="h-5 w-5 mx-auto text-gray-400" />,
    },
  ];

  return (
    <section id="compare" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">
            Why We're <span className="gradient-text">Better</span>
          </h2>
          <p className="text-xl text-gray-600">
            See how we compare to other options and why we're the smartest choice for your business.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 font-medium text-gray-900">Feature</th>
                <th className="py-4 px-6 font-medium text-center bg-brand-blue/10 text-brand-blue border-b-2 border-brand-blue">Us</th>
                <th className="py-4 px-6 font-medium text-center text-gray-900">Traditional Agency</th>
                <th className="py-4 px-6 font-medium text-center text-gray-900">DIY Website Builders</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map((feature, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">{feature.name}</td>
                  <td className="py-4 px-6 text-center bg-brand-blue/5">{feature.us}</td>
                  <td className="py-4 px-6 text-center">{feature.agency}</td>
                  <td className="py-4 px-6 text-center">{feature.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 p-6 rounded-lg">
          <p className="text-lg font-medium text-center">
            Our approach is simple: We deliver high-quality websites at an affordable price by being efficient with our process. No unnecessary calls or meetings—just results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
