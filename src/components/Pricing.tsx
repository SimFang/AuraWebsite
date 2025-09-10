
import React from "react";
import { Check } from "lucide-react";

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
  
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="aura-chip mx-auto mb-4">
            <span>Tarification transparente</span>
          </div>
          <h2 className="section-title mb-4">Choisissez votre forfait</h2>
          <p className="section-subtitle mx-auto">
            Des prix clairs et transparents pour tous vos besoins de développement web.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Site Web Basique"
            price="€1,500"
            description="Parfait pour les petites entreprises qui veulent établir leur présence en ligne."
            features={["Design responsive", "Jusqu'à 5 pages", "Optimisation SEO de base", "Formulaire de contact", "Support 3 mois"]}
            isPrimary={true}
            getStartedText="Commencer"
            mostPopularText="Le plus populaire"
          />
          
          <PricingCard
            title="Projet Sur Mesure"
            price="Sur devis"
            description="Solutions personnalisées pour des besoins spécifiques et des projets complexes."
            features={["Développement personnalisé", "Intégrations avancées", "Fonctionnalités sur mesure", "Support prioritaire", "Maintenance incluse"]}
            getStartedText="Commencer"
            mostPopularText="Le plus populaire"
          />
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-center">Améliorations optionnelles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center p-3 border border-gray-100 rounded-lg">
              <div className="mr-3 p-2 bg-aura-100 rounded-full">
                <Check className="w-4 h-4 text-aura-500" />
              </div>
              <div>
                <p className="font-medium">Pages supplémentaires</p>
                <p className="text-sm text-gray-500">€200 par page</p>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 rounded-lg">
              <div className="mr-3 p-2 bg-aura-100 rounded-full">
                <Check className="w-4 h-4 text-aura-500" />
              </div>
              <div>
                <p className="font-medium">Rédaction de contenu</p>
                <p className="text-sm text-gray-500">€300 par page</p>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-100 rounded-lg">
              <div className="mr-3 p-2 bg-aura-100 rounded-full">
                <Check className="w-4 h-4 text-aura-500" />
              </div>
              <div>
                <p className="font-medium">Création de logo</p>
                <p className="text-sm text-gray-500">€400</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
