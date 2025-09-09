import React from "react";
import { Button } from "@/components/ui/button";
import { Code, Palette, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

const WebDevelopmentHero = () => {
  const navigate = useNavigate();
  const { t } = useLocale();

  const handleContactClick = () => {
    navigate('/contact?service=web-development');
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
              <Code className="w-4 h-4 mr-2" />
              {t('webDevelopment.hero.badge')}
            </div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight" 
              style={{fontFamily: 'Brockmann, sans-serif'}}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t('webDevelopment.hero.title')}
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {t('webDevelopment.hero.titleHighlight')}
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {t('webDevelopment.hero.description')}
            </motion.p>

            {/* Features */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mb-10 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { icon: Code, text: t('webDevelopment.hero.features.0') },
                { icon: Palette, text: t('webDevelopment.hero.features.1') },
                { icon: Zap, text: t('webDevelopment.hero.features.2') }
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
                {t('webDevelopment.hero.getStarted')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleContactClick}
                className="border-2 border-aura-600 text-aura-600 hover:bg-aura-50 px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                {t('webDevelopment.hero.viewPortfolio')}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-10 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">{t('webDevelopment.hero.trustedBy')}</p>
              <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400">200+</div>
                <div className="text-sm text-gray-500">{t('webDevelopment.hero.stats.websitesBuilt')}</div>
                <div className="text-2xl font-bold text-gray-400">99%</div>
                <div className="text-sm text-gray-500">{t('webDevelopment.hero.stats.clientSatisfaction')}</div>
                <div className="text-2xl font-bold text-gray-400">24/7</div>
                <div className="text-sm text-gray-500">{t('webDevelopment.hero.stats.support')}</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative z-10">
              {/* Main Website Preview */}
              <motion.div 
                className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Browser Header */}
                <motion.div 
                  className="flex items-center mb-4 pb-3 border-b border-gray-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-500">yourwebsite.com</div>
                  </div>
                </motion.div>
                
                {/* Website Content */}
                <div className="space-y-4">
                  <motion.div 
                    className="h-20 bg-gradient-to-r from-aura-500 to-purple-500 rounded-lg flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <div className="text-white font-bold text-lg">Your Brand</div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </motion.div>
                  
                  <motion.div 
                    className="grid grid-cols-2 gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    <div className="h-16 bg-gray-100 rounded-lg"></div>
                    <div className="h-16 bg-gray-100 rounded-lg"></div>
                  </motion.div>
                  
                  <motion.div 
                    className="h-8 bg-aura-500 rounded-lg flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-white text-sm font-semibold">Get Started</div>
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

export default WebDevelopmentHero;