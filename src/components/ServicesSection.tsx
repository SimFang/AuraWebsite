import React from "react";
import { useNavigate } from "react-router-dom";

interface ServicesSectionProps {
  activeService?: string;
}

const ServicesSection = ({ activeService = "web-development" }: ServicesSectionProps) => {
  const navigate = useNavigate();

  const services = [
    {
      id: "web-development",
      title: "Développement Web",
      description: "Sites web modernes, rapides et optimisés pour convertir vos visiteurs en clients.",
      route: "/",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M3.5 12.5a8.38 8.38 0 0 0 .9 3.8 8.5 8.5 0 0 0 7.6 4.7 8.38 8.38 0 0 0 3.8-.9l-12.3-7.6z"/>
          <path d="M3.5 12.5a8.38 8.38 0 0 0 .9 3.8 8.5 8.5 0 0 0 7.6 4.7 8.38 8.38 0 0 0 3.8-.9l-12.3-7.6z"/>
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      gradient: "from-aura-400 to-aura-600"
    },
    {
      id: "ai-chatbot",
      title: "Chatbot IA",
      description: "Automatisez votre service client avec des chatbots intelligents disponibles 24/7.",
      route: "/ai-chatbot",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <circle cx="8.5" cy="10.5" r="1.5"/>
          <circle cx="15.5" cy="10.5" r="1.5"/>
          <path d="M8 15s1.5 2 4 2 4-2 4-2"/>
          <path d="M7 4h10v2H7zM5 6h14v2H5zM6 8h12v2H6z"/>
        </svg>
      ),
      gradient: "from-aura-500 to-aura-700"
    },
    {
      id: "call-answerer",
      title: "Répondeur Automatique",
      description: "Solutions d'appels automatisées pour ne jamais manquer un client potentiel.",
      route: "/call-answerer",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      gradient: "from-aura-600 to-aura-800"
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-aura-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour transformer votre présence digitale et automatiser vos processus métier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isActive = activeService === service.id;
            return (
              <div
                key={index}
                onClick={() => handleServiceClick(service.route)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                  isActive 
                    ? 'bg-gradient-to-br ' + service.gradient + ' shadow-elegant-hover transform -translate-y-1' 
                    : 'bg-white shadow-elegant hover:shadow-elegant-hover'
                }`}
              >
                {/* Gradient Background for non-active cards */}
                {!isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                )}
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-900 group-hover:text-aura-700'
                }`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className={`leading-relaxed ${
                  isActive ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
                
                {/* Action Text */}
                <div className={`mt-6 flex items-center transition-all duration-300 ${
                  isActive 
                    ? 'text-white opacity-100' 
                    : 'text-aura-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2'
                }`}>
                  <span className="text-sm font-semibold">
                    {isActive ? "Service actuel" : "En savoir plus"}
                  </span>
                  {!isActive && (
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className={`absolute top-4 right-4 w-20 h-20 rounded-full transition-transform duration-700 ${
                isActive 
                  ? 'bg-white/20 opacity-30' 
                  : 'bg-aura-100 opacity-20 group-hover:scale-150'
              }`}></div>
              <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full transition-transform duration-500 ${
                isActive 
                  ? 'bg-white/30 opacity-40' 
                  : 'bg-aura-200 opacity-30 group-hover:scale-125'
              }`}></div>
            </div>
            );
          })}
        </div>
      
      </div>
    </section>
  );
};

export default ServicesSection;