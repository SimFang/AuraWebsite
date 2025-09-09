import React from "react";
import { Phone, Settings, Users, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

const CallAnswererHowItWorks = () => {
  const { t } = useLocale();
  
  const steps = [
    {
      step: "01",
      title: t('callAnswerer.howItWorks.steps.setup.title'),
      description: t('callAnswerer.howItWorks.steps.setup.description'),
      icon: Settings,
      details: [
        t('callAnswerer.howItWorks.steps.setup.details.hours'),
        t('callAnswerer.howItWorks.steps.setup.details.inquiries'),
        t('callAnswerer.howItWorks.steps.setup.details.booking'),
        t('callAnswerer.howItWorks.steps.setup.details.protocols')
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02",
      title: t('callAnswerer.howItWorks.steps.training.title'),
      description: t('callAnswerer.howItWorks.steps.training.description'),
      icon: Phone,
      details: [
        t('callAnswerer.howItWorks.steps.training.details.custom'),
        t('callAnswerer.howItWorks.steps.training.details.tone'),
        t('callAnswerer.howItWorks.steps.training.details.integration'),
        t('callAnswerer.howItWorks.steps.training.details.protocols')
      ],
      color: "from-aura-500 to-aura-600"
    },
    {
      step: "03",
      title: t('callAnswerer.howItWorks.steps.integration.title'),
      description: t('callAnswerer.howItWorks.steps.integration.description'),
      icon: Users,
      details: [
        t('callAnswerer.howItWorks.steps.integration.details.phone'),
        t('callAnswerer.howItWorks.steps.integration.details.calendar'),
        t('callAnswerer.howItWorks.steps.integration.details.testing'),
        t('callAnswerer.howItWorks.steps.integration.details.optimization')
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "04",
      title: t('callAnswerer.howItWorks.steps.launch.title'),
      description: t('callAnswerer.howItWorks.steps.launch.description'),
      icon: Rocket,
      details: [
        t('callAnswerer.howItWorks.steps.launch.details.rollout'),
        t('callAnswerer.howItWorks.steps.launch.details.tracking'),
        t('callAnswerer.howItWorks.steps.launch.details.learning'),
        t('callAnswerer.howItWorks.steps.launch.details.updates')
      ],
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <motion.section 
      id="how-it-works" 
      className="py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
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
            {t('callAnswerer.howItWorks.badge')}
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8" 
            style={{fontFamily: 'Brockmann, sans-serif'}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('callAnswerer.howItWorks.title')}
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('callAnswerer.howItWorks.titleHighlight')}
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('callAnswerer.howItWorks.subtitle')}
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-aura-100 to-aura-200 mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl font-bold text-aura-700">{step.step}</span>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-3xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
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
                        <ArrowRight className="w-4 h-4 text-aura-600 mr-3 flex-shrink-0" />
                        <span>{detail}</span>
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
                    <div className={`w-80 h-80 rounded-3xl bg-gradient-to-br ${step.color} p-1 shadow-2xl`}>
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
            {t('callAnswerer.howItWorks.cta.title')}
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
            {t('callAnswerer.howItWorks.cta.button')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallAnswererHowItWorks;