import React from "react";
import { Phone, Settings, Users, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


const CallAnswererHowItWorks = () => {

  
  const steps = [
    {
      step: "01",
      title: "Configuration Initiale",
      description: "Personnalisez votre répondeur selon vos besoins spécifiques",
      icon: Settings,
      details: [
        "Définition des heures d'ouverture",
        "Types de demandes à traiter",
        "Système de prise de rendez-vous",
        "Protocoles de transfert d'appels"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02",
      title: "Formation de l'IA",
      description: "Entraînement personnalisé selon votre secteur d'activité",
      icon: Phone,
      details: [
        "Scripts personnalisés",
        "Ton et style de communication",
        "Intégration avec vos systèmes",
         "Protocoles de sécurité"
      ],
      color: "from-aura-500 to-aura-600"
    },
    {
      step: "03",
      title: "Intégration Système",
       description: "Connexion avec vos outils existants",
       icon: Users,
       details: [
         "Configuration du système téléphonique",
         "Synchronisation calendrier",
         "Tests et validation",
         "Optimisation des performances"
       ],
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "04",
      title: "Mise en Service",
       description: "Déploiement et suivi continu",
       icon: Rocket,
       details: [
         "Déploiement progressif",
         "Suivi des performances",
         "Apprentissage continu",
         "Mises à jour régulières"
       ],
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <motion.section 
      id="how-it-works" 
      className="py-12 sm:py-16 lg:py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-aura-100 text-aura-700 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Comment Ça Marche
          </motion.div>
          <motion.h2 
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8" 
            style={{fontFamily: 'Brockmann, sans-serif'}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mise en Place
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Simple et Rapide
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            En seulement quelques étapes, votre assistant IA sera opérationnel et prêt à répondre aux appels de vos clients 24h/24, 7j/7.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-12 lg:gap-20`}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left px-4 sm:px-0">
                  <motion.div 
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-aura-100 to-aura-200 mb-4 sm:mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-lg sm:text-2xl font-bold text-aura-700">{step.step}</span>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6"
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {step.description}
                  </motion.p>
                  
                  <motion.ul 
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    {step.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 + detailIndex * 0.1 }}
                      >
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-aura-600 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{detail}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br ${step.color} p-1 shadow-2xl`}>
                      <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-600"></div>
                          <div className="absolute inset-4 border-2 border-gray-300 rounded-2xl"></div>
                          <div className="absolute inset-8 border border-gray-200 rounded-xl"></div>
                        </div>
                        
                        {/* Icon */}
                        <motion.div
                          className={`relative z-10 w-32 h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <IconComponent className="w-16 h-16 text-white" />
                        </motion.div>
                        
                        {/* Floating Elements */}
                        <motion.div 
                          className="absolute top-8 right-8 w-4 h-4 bg-aura-400 rounded-full"
                          animate={{ y: [-10, 10, -10] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                          className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400 rounded-full"
                          animate={{ y: [10, -10, 10] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                        <motion.div 
                          className="absolute top-1/2 left-8 w-2 h-2 bg-blue-400 rounded-full"
                          animate={{ x: [-5, 5, -5] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Prêt à automatiser votre service client ? Commencez dès maintenant !
          </motion.p>
          <motion.button 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-aura-600 to-aura-700 text-white font-semibold rounded-xl hover:from-aura-700 hover:to-aura-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Démarrer Maintenant
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallAnswererHowItWorks;