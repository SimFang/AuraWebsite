import React from "react";
import { Clock, DollarSign, Users, TrendingUp, Shield, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

const CallAnswererPromise = () => {
  const { t } = useLocale();
  const promises = [
    {
      icon: Clock,
      title: t('callAnswerer.promise.promises.availability.title'),
      description: t('callAnswerer.promise.promises.availability.description'),
      metric: t('callAnswerer.promise.promises.availability.metric'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: DollarSign,
      title: t('callAnswerer.promise.promises.costs.title'),
      description: t('callAnswerer.promise.promises.costs.description'),
      metric: t('callAnswerer.promise.promises.costs.metric'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: t('callAnswerer.promise.promises.scale.title'),
      description: t('callAnswerer.promise.promises.scale.description'),
      metric: t('callAnswerer.promise.promises.scale.metric'),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: t('callAnswerer.promise.promises.bookings.title'),
      description: t('callAnswerer.promise.promises.bookings.description'),
      metric: t('callAnswerer.promise.promises.bookings.metric'),
      color: "from-aura-500 to-aura-600"
    },
    {
      icon: Phone,
      title: t('callAnswerer.promise.promises.quality.title'),
      description: t('callAnswerer.promise.promises.quality.description'),
      metric: t('callAnswerer.promise.promises.quality.metric'),
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: t('callAnswerer.promise.promises.security.title'),
      description: t('callAnswerer.promise.promises.security.description'),
      metric: t('callAnswerer.promise.promises.security.metric'),
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <motion.section 
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
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
            <Shield className="w-4 h-4 mr-2" />
            {t('callAnswerer.promise.badge')}
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8" 
            style={{ fontFamily: 'Brockmann, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('callAnswerer.promise.title')}
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('callAnswerer.promise.titleHighlight')}
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('callAnswerer.promise.subtitle')}
          </motion.p>
        </motion.div>

        {/* Promises Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => {
            const IconComponent = promise.icon;
            
            return (
              <motion.div 
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-aura-200">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${promise.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${promise.color} mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-4 group-hover:text-aura-700 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {promise.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {promise.description}
                  </motion.p>
                  
                  {/* Metric */}
                  <motion.div 
                    className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${promise.color} text-white text-sm font-semibold shadow-md`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {promise.metric}
                  </motion.div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-aura-400/0 to-purple-400/0 group-hover:from-aura-400/5 group-hover:to-purple-400/5 transition-all duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-aura-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t('callAnswerer.promise.cta.title')}
              </motion.h3>
              <motion.p 
                className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {t('callAnswerer.promise.cta.subtitle')}
              </motion.p>
              <motion.button 
                className="bg-white text-aura-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('callAnswerer.promise.cta.button')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallAnswererPromise;