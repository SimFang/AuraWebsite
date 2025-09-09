import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

const CallAnswererHero = () => {
  const navigate = useNavigate();
  const { t } = useLocale();

  const handleContactClick = () => {
    navigate('/contact?service=call-answerer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-aura-50 via-white to-aura-100 py-20">
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
              <Phone className="w-4 h-4 mr-2" />
              {t('callAnswerer.hero.badge')}
            </div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight" 
              style={{fontFamily: 'Brockmann, sans-serif'}}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t('callAnswerer.hero.title')}
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {t('callAnswerer.hero.titleHighlight')}
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {t('callAnswerer.hero.subtitle')}
            </motion.p>

            {/* Features */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mb-10 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { icon: Phone, text: t('callAnswerer.hero.features.professional') },
                { icon: Clock, text: t('callAnswerer.hero.features.availability') },
                { icon: Users, text: t('callAnswerer.hero.features.excellence') }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <IconComponent className="w-5 h-5 text-aura-600 mr-2" />
                    <span>{feature.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={handleContactClick}
                className="bg-gradient-to-r from-aura-600 to-aura-700 hover:from-aura-700 hover:to-aura-800 text-white px-10 py-5 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {t('callAnswerer.hero.cta.primary')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-aura-300 text-aura-700 hover:bg-aura-50 px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                {t('callAnswerer.hero.cta.secondary')}
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Phone Icon with Animation */}
              <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-aura-400 to-purple-500 rounded-full opacity-20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="relative z-10 bg-white rounded-full p-16 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone className="w-32 h-32 text-aura-600" />
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-8 right-8 bg-green-100 rounded-full p-3"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Clock className="w-6 h-6 text-green-600" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-8 left-8 bg-blue-100 rounded-full p-3"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Users className="w-6 h-6 text-blue-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallAnswererHero;