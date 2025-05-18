
import React from "react";
import { Briefcase, Rocket, Pen, Users, Clock } from "lucide-react";

interface TargetAudienceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TargetAudience = ({ icon, title, description }: TargetAudienceProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
      <div className="w-12 h-12 bg-aura-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhoItsFor = () => {
  return (
    <section className="w-full py-16 bg-gray-50" id="who-its-for">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="aura-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-aura-500 text-white mr-2">4</span>
              <span>Who It's For</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Who It's For
          </h2>
          <p className="text-lg text-gray-600">
            Our service is designed specifically for businesses and individuals who need a professional website without the hassle and high costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <TargetAudience 
            icon={<Briefcase className="w-6 h-6 text-aura-500" />}
            title="Local Businesses"
            description="Get your local business online with a professional web presence that attracts customers."
          />
          
          <TargetAudience 
            icon={<Rocket className="w-6 h-6 text-aura-500" />}
            title="Startups"
            description="Launch your startup with a sleek website that helps you build credibility from day one."
          />
          
          <TargetAudience 
            icon={<Pen className="w-6 h-6 text-aura-500" />}
            title="Freelancers & Creators"
            description="Showcase your portfolio and services with a site that reflects your professional skills."
          />
          
          <TargetAudience 
            icon={<Users className="w-6 h-6 text-aura-500" />}
            title="Small Teams"
            description="Present your team and services with a clean, modern website that engages potential clients."
          />
          
          <TargetAudience 
            icon={<Clock className="w-6 h-6 text-aura-500" />}
            title="Time-Conscious Entrepreneurs"
            description="Perfect for those who need a quality website but don't have time for a lengthy design process."
          />
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
