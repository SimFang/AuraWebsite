import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Brain, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AIChatbotHero = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact?service=ai-chatbot');
  };
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-aura-50 via-white to-aura-100 py-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-aura-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-aura-100 text-aura-700 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              IA Conversationnelle
            </div>

            {/* Headline */}
            <motion.h1 
              className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-medium text-gray-900 mb-6 sm:mb-8" 
              style={{fontFamily: 'Brockmann, sans-serif'}}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Révolutionnez Votre
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Service Client avec l'IA
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Créez un chatbot IA intelligent qui comprend vos clients et répond à leurs questions 24h/24, 7j/7 avec une précision remarquable.
            </motion.p>

            {/* Features */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { icon: MessageCircle, text: "Support 24/7" },
                { icon: Brain, text: "IA Intelligente" },
                { icon: Zap, text: "Réponses Instantanées" }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-center text-gray-700 text-sm sm:text-base"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-aura-600 mr-2 flex-shrink-0" />
                    <span>{feature.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-4 sm:px-0">
              <Button 
                size="lg" 
                onClick={handleContactClick}
                className="bg-gradient-to-r from-aura-500 to-purple-600 hover:from-aura-600 hover:to-purple-700 text-white px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Créer Mon Chatbot
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleContactClick}
                className="border-2 border-aura-600 text-aura-600 hover:bg-aura-50 px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                Voir une Démo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4 text-center lg:text-left">Ils nous font confiance</p>
              <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-8 opacity-60">
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-gray-400">500+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Chatbots Actifs</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-gray-400">99.9%</div>
                  <div className="text-xs sm:text-sm text-gray-500">Disponibilité</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-gray-400">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <motion.div 
            className="relative mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative z-10">
              {/* Main Chatbot Interface */}
              <motion.div 
                className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 max-w-sm sm:max-w-md mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-r from-aura-500 to-purple-500 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Assistant IA</h3>
                    <motion.p 
                      className="text-sm text-green-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                    >
                      ● En ligne
                    </motion.p>
                  </div>
                </motion.div>
                
                {/* Chat Messages */}
                <div className="space-y-4">
                  <motion.div 
                    className="flex"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-gray-800">Bonjour ! Comment puis-je vous aider aujourd'hui ?</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                  >
                    <div className="bg-aura-500 text-white rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Quels sont vos horaires d'ouverture ?</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                  >
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-gray-800">Nous sommes ouverts du lundi au vendredi de 9h à 18h. Puis-je vous aider avec autre chose ?</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center text-gray-400 text-xs"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.4 }}
                  >
                    <div className="flex space-x-1">
                      <motion.div 
                        className="w-2 h-2 bg-gray-300 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      ></motion.div>
                      <motion.div 
                        className="w-2 h-2 bg-gray-300 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                      ></motion.div>
                      <motion.div 
                        className="w-2 h-2 bg-gray-300 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      ></motion.div>
                    </div>
                    <span className="ml-2">AI is typing...</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-aura-400 to-purple-400 rounded-full opacity-20"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-aura-400 rounded-full opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIChatbotHero;