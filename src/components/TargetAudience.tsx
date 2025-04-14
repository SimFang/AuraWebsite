
import React from "react";
import { Store, Users, UserCheck, Rocket, Clock } from "lucide-react";

const TargetAudience = () => {
  const audienceTypes = [
    {
      icon: <Store className="h-8 w-8" />,
      title: "Local Businesses",
      description: "Get your local business online with a professional web presence that attracts customers.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Startups",
      description: "Launch your startup with a sleek website that helps you build credibility from day one.",
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Freelancers & Creators",
      description: "Showcase your portfolio and services with a site that reflects your professional skills.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Small Teams",
      description: "Present your team and services with a clean, modern website that engages potential clients.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time-Conscious Entrepreneurs",
      description: "Perfect for those who need a quality website but don't have time for a lengthy design process.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">
            Who It's <span className="gradient-text">For</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our service is designed specifically for businesses and individuals who need a professional website without the hassle and high costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audienceTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="text-brand-blue mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
