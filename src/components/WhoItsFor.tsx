
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
  const targets = [
    {
      icon: <Briefcase className="w-6 h-6 text-aura-500" />,
      title: "Entreprises établies",
      description: "Modernisez votre présence en ligne avec des solutions web professionnelles."
    },
    {
      icon: <Rocket className="w-6 h-6 text-aura-500" />,
      title: "Startups",
      description: "Lancez votre entreprise avec une plateforme web robuste et évolutive."
    },
    {
      icon: <Pen className="w-6 h-6 text-aura-500" />,
      title: "Créateurs de contenu",
      description: "Présentez votre travail avec un portfolio web élégant et professionnel."
    },
    {
      icon: <Users className="w-6 h-6 text-aura-500" />,
      title: "Organisations",
      description: "Connectez-vous avec votre communauté grâce à des solutions web sur mesure."
    },
    {
      icon: <Clock className="w-6 h-6 text-aura-500" />,
      title: "Projets urgents",
      description: "Livraison rapide sans compromis sur la qualité pour vos besoins urgents."
    }
  ];
  
  return (
    <section className="w-full py-16 bg-gray-50" id="who-its-for">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="aura-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-aura-500 text-white mr-2">4</span>
              <span>Pour qui ?</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Pour qui c'est fait ?
          </h2>
          <p className="text-lg text-gray-600">
            Nos solutions s'adaptent à tous types d'entreprises et de projets, quelle que soit leur taille ou leur secteur d'activité.
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
