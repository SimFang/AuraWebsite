
import React from "react";
import { File, Code, Globe } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

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
  const { t } = useLocale();
  
  const steps = [
    {
      number: "1",
      title: t("howItWorks.steps.0.title"),
      description: t("howItWorks.steps.0.description"),
      icon: <File size={24} />
    },
    {
      number: "2",
      title: t("howItWorks.steps.1.title"),
      description: t("howItWorks.steps.1.description"),
      icon: <Code size={24} />
    },
    {
      number: "3",
      title: t("howItWorks.steps.2.title"),
      description: t("howItWorks.steps.2.description"),
      icon: <Globe size={24} />
    }
  ];
  
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="aura-chip mx-auto mb-4">
            <span>{t("howItWorks.simpleProcess")}</span>
          </div>
          <h2 className="section-title mb-4">{t("howItWorks.title")}</h2>
          <p className="section-subtitle mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step) => (
            <Step 
              key={step.number}
              number={step.number} 
              title={step.title} 
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#get-started" className="button-primary inline-flex items-center">
            {t("howItWorks.getStarted")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
