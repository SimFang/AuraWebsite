
import React from "react";
import { Briefcase, Rocket, Pen, Users, Clock } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

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
  const { t } = useLocale();

  const targets = [
    {
      icon: <Briefcase className="w-6 h-6 text-aura-500" />,
      title: t("whoItsFor.targets.0.title"),
      description: t("whoItsFor.targets.0.description")
    },
    {
      icon: <Rocket className="w-6 h-6 text-aura-500" />,
      title: t("whoItsFor.targets.1.title"),
      description: t("whoItsFor.targets.1.description")
    },
    {
      icon: <Pen className="w-6 h-6 text-aura-500" />,
      title: t("whoItsFor.targets.2.title"),
      description: t("whoItsFor.targets.2.description")
    },
    {
      icon: <Users className="w-6 h-6 text-aura-500" />,
      title: t("whoItsFor.targets.3.title"),
      description: t("whoItsFor.targets.3.description")
    },
    {
      icon: <Clock className="w-6 h-6 text-aura-500" />,
      title: t("whoItsFor.targets.4.title"),
      description: t("whoItsFor.targets.4.description")
    }
  ];
  
  return (
    <section className="w-full py-16 bg-gray-50" id="who-its-for">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="aura-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-aura-500 text-white mr-2">4</span>
              <span>{t("whoItsFor.title")}</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
            {t("whoItsFor.title")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("whoItsFor.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {targets.map((target, index) => (
            <TargetAudience 
              key={index}
              icon={target.icon}
              title={target.title}
              description={target.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
