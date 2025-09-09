import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Globe, Rocket, Crown, Users, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const WebDevelopmentPricing = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact?service=web-development');
  };

  const plans = [
    {
      name: "Essentiel",
      price: "1 999€",
      period: "projet",
      description: "Parfait pour les petites entreprises qui démarrent leur présence en ligne.",
      features: [
        "Site web responsive (5 pages)",
        "Design moderne et professionnel",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "Hébergement 1 an inclus",
        "Support technique 3 mois",
        "Formation à la gestion du site"
      ],
      icon: Globe,
      gradient: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      name: "Professionnel",
      price: "3 999€",
      period: "projet",
      description: "Idéal pour les entreprises établies qui veulent une présence web complète.",
      features: [
        "Site web responsive (10 pages)",
        "Design sur mesure et animations",
        "Optimisation SEO avancée",
        "Blog intégré",
        "Système de gestion de contenu",
        "Intégrations tierces (CRM, Analytics)",
        "Hébergement 1 an inclus",
        "Support technique 6 mois",
        "Formation complète",
        "Maintenance mensuelle"
      ],
      icon: Rocket,
      gradient: "from-aura-500 to-aura-600",
      popular: true
    },
    {
      name: "Entreprise",
      price: "Sur Devis",
      period: "projet",
      description: "Solution complète pour les grandes entreprises avec des besoins spécifiques.",
      features: [
        "Site web illimité",
        "Architecture sur mesure",
        "Développement d'applications web",
        "Intégrations complexes",
        "Sécurité renforcée",
        "Performance optimisée",
        "Support dédié 24/7",
        "Maintenance continue",
        "Formation équipe",
        "Consulting stratégique"
      ],
      icon: Crown,
      gradient: "from-purple-500 to-purple-600",
      popular: false
    }
  ];

  return (
    <motion.section 
      id="pricing" 
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-aura-100 text-aura-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Tarifs Transparents
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 px-2" 
            style={{fontFamily: 'Brockmann, sans-serif'}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Des Solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600">
              Adaptées à Vos Besoins
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Choisissez le plan qui correspond parfaitement à votre projet et à votre budget. Tous nos plans incluent un support premium et une garantie satisfaction.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={index}
                className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-aura-500 to-aura-600 text-white shadow-2xl sm:scale-105'
                    : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: plan.popular ? 1.05 : 1.03, y: -10 }}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Le Plus Populaire
                    </div>
                  </motion.div>
                )}

                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                    plan.popular ? 'bg-white/20' : `bg-gradient-to-r ${plan.gradient}`
                  }`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconComponent className={`w-6 h-6 ${
                    plan.popular ? 'text-white' : 'text-white'
                  }`} />
                </motion.div>

                {/* Plan Name */}
                <motion.h3 
                  className={`text-xl sm:text-2xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                >
                  {plan.name}
                </motion.h3>

                {/* Price */}
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                >
                  {plan.price === 'Sur Devis' ? (
                    <div className={`text-2xl sm:text-3xl font-bold ${
                      plan.popular ? 'text-white' : 'text-gray-900'
                    }`}>
                      Tarif Sur Mesure
                    </div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className={`text-3xl sm:text-4xl font-bold ${
                        plan.popular ? 'text-white' : 'text-gray-900'
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-base sm:text-lg ml-1 ${
                        plan.popular ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        /{plan.period}
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Description */}
                <motion.p 
                  className={`mb-4 sm:mb-6 text-sm sm:text-base ${
                    plan.popular ? 'text-white/90' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                >
                  {plan.description}
                </motion.p>

                {/* Features */}
                <motion.ul 
                  className="space-y-2 sm:space-y-3 mb-6 sm:mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.9 + featureIndex * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <Check className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-white' : 'text-aura-500'
                      }`} />
                      <span className={`text-xs sm:text-sm ${
                        plan.popular ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 1.2 }}
                >
                  <Button
                    onClick={handleContactClick}
                    className={`w-full py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-white text-aura-600 hover:bg-gray-100 shadow-lg'
                        : 'bg-gradient-to-r from-aura-500 to-aura-600 text-white hover:from-aura-600 hover:to-aura-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {plan.price === 'Sur Devis' ? 'Contacter l\'Équipe' : 'Commencer'}
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              "Tous les prix sont hors taxes",
              "Paiement en plusieurs fois possible",
              "Devis gratuit sous 24h",
              "Garantie satisfaction 30 jours"
            ].map((item, index) => {
               const icons = [Shield, Users, Rocket, BarChart3];
               const IconComponent = icons[index] || Shield;
              return (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 text-aura-500 mb-4" />
                  </motion.div>
                  <motion.h4 
                    className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3" 
                    style={{fontFamily: 'Brockmann, sans-serif'}}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
                  >
                    {index === 0 ? "Prix Transparents" : index === 1 ? "Paiement Flexible" : index === 2 ? "Devis Rapide" : "Garantie Qualité"}
                  </motion.h4>
                  <motion.p 
                    className="text-xs sm:text-sm text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                  >
                    {item}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* FAQ Note */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            Des questions sur nos tarifs ? <a href="#contact" className="text-aura-600 hover:text-aura-700 font-medium">Contactez-nous</a> pour un devis personnalisé.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebDevelopmentPricing;