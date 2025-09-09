import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Construction, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocale } from "@/contexts/LocaleContext";

const Portfolio = () => {
  const navigate = useNavigate();
  const { t } = useLocale();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const handleBackToWebDev = () => {
    navigate('/web-development');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-aura-50/50 via-blue-50/30 to-purple-50/50" />
        
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-aura-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-6xl mx-auto text-center"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.button
            onClick={handleBackToWebDev}
            className="inline-flex items-center px-4 py-2 rounded-full bg-aura-100 text-aura-700 text-sm font-medium mb-8 hover:bg-aura-200 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('portfolio.backButton')}
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h1 
               className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-tight leading-[0.9]"
               style={{ fontFamily: 'Brockmann, sans-serif' }}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
             >
               <span className="font-extralight">{t('portfolio.title').split(' ')[0]}</span>
               <br />
               <span className="font-medium bg-gradient-to-r from-aura-600 to-purple-600 bg-clip-text text-transparent">
                 {t('portfolio.title').split(' ')[1]}
               </span>
             </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {t('portfolio.subtitle')}
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Under Construction Section */}
      <motion.section 
        className="py-32 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
             className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-aura-100 to-purple-100 rounded-full mb-12"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ 
               opacity: 1, 
               scale: 1,
               rotate: [0, 360]
             }}
             transition={{ 
               opacity: { duration: 0.6, delay: 0.8 },
               scale: { duration: 0.6, delay: 0.8 },
               rotate: { duration: 10, repeat: Infinity, ease: "linear" }
             }}
           >
            <Construction className="w-16 h-16 text-aura-600" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {t('portfolio.underConstruction.title').split(' ').slice(0, 1).join(' ')} 
            <span className="bg-gradient-to-r from-aura-600 to-purple-600 bg-clip-text text-transparent">
              {t('portfolio.underConstruction.title').split(' ').slice(1).join(' ')}
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {t('portfolio.underConstruction.description')}
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center gap-4 text-aura-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Wrench className="w-6 h-6" />
            <span className="text-lg font-medium">{t('portfolio.underConstruction.buildingText')}</span>
            <Wrench className="w-6 h-6" />
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-r from-aura-50 to-purple-50 rounded-2xl p-8 border border-aura-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('portfolio.underConstruction.whatToExpect.title')}</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <div className="font-medium text-aura-600 mb-2">{t('portfolio.underConstruction.whatToExpect.latestProjects.title')}</div>
                <p>{t('portfolio.underConstruction.whatToExpect.latestProjects.description')}</p>
              </div>
              <div>
                <div className="font-medium text-aura-600 mb-2">{t('portfolio.underConstruction.whatToExpect.caseStudies.title')}</div>
                <p>{t('portfolio.underConstruction.whatToExpect.caseStudies.description')}</p>
              </div>
              <div>
                <div className="font-medium text-aura-600 mb-2">{t('portfolio.underConstruction.whatToExpect.designShowcase.title')}</div>
                <p>{t('portfolio.underConstruction.whatToExpect.designShowcase.description')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Portfolio;