
import React from "react";
import { Check } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPrimary = false,
  getStartedText,
  mostPopularText
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  isPrimary?: boolean;
  getStartedText: string;
  mostPopularText: string;
}) => {
  return (
    <div className={`rounded-2xl p-6 sm:p-8 ${isPrimary ? 'bg-aura-50 border-2 border-aura-500 shadow-lg relative' : 'bg-white border border-gray-200'}`}>
      {isPrimary && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-aura-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          {mostPopularText}
        </div>
      )}
      
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-3xl sm:text-4xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-gray-500 ml-1">/one-time</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span className="text-sm text-gray-600">{feature}</span>
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
        {getStartedText}
      </a>
    </div>
  );
};

const Pricing = () => {
  const { t } = useLocale();
  
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="aura-chip mx-auto mb-4">
            <span>{t("pricing.transparentPricing")}</span>
          </div>
          <h2 className="section-title mb-4">{t("pricing.title")}</h2>
          <p className="section-subtitle mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <PricingCard
            title={t("pricing.basicWebsite.title")}
            price={t("pricing.basicWebsite.price")}
            description={t("pricing.basicWebsite.description")}
            features={t("pricing.basicWebsite.features") as unknown as string[]}
            isPrimary={true}
            getStartedText={t("pricing.getStarted")}
            mostPopularText={t("pricing.mostPopular")}
          />
          
          <PricingCard
            title={t("pricing.customProject.title")}
            price={t("pricing.customProject.price")}
            description={t("pricing.customProject.description")}
            features={t("pricing.customProject.features") as unknown as string[]}
            getStartedText={t("pricing.getStarted")}
            mostPopularText={t("pricing.mostPopular")}
          />
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-center">{t("pricing.optionalUpgrades.title")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center p-3 border border-gray-100 rounded-lg">
              <div className="mr-3 p-2 bg-aura-100 rounded-full">
                <Check className="w-4 h-4 text-aura-500" />
              </div>
              <div>
                <p className="font-medium">{t("pricing.optionalUpgrades.additionalPages")}</p>
                <p className="text-sm text-gray-500">{t("pricing.optionalUpgrades.additionalPagesPrice")}</p>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 rounded-lg">
              <div className="mr-3 p-2 bg-aura-100 rounded-full">
                <Check className="w-4 h-4 text-aura-500" />
              </div>
              <div>
                <p className="font-medium">{t("pricing.optionalUpgrades.copywriting")}</p>
                <p className="text-sm text-gray-500">{t("pricing.optionalUpgrades.copywritingPrice")}</p>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 rounded-lg">
              <div className="mr-3 p-2 bg-aura-100 rounded-full">
                <Check className="w-4 h-4 text-aura-500" />
              </div>
              <div>
                <p className="font-medium">{t("pricing.optionalUpgrades.logo")}</p>
                <p className="text-sm text-gray-500">{t("pricing.optionalUpgrades.logoPrice")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
