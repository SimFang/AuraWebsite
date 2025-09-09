import React from "react";
import { Zap, TrendingUp, Shield, Smartphone, Search, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from '@/contexts/LocaleContext';

const WebDevelopmentPromise = () => {
  const { t } = useLocale();
  const promises = [
    {
      icon: Zap,
      title: t('webDevelopment.promise.promises.0.title'),
      description: t('webDevelopment.promise.promises.0.description'),
      metric: t('webDevelopment.promise.promises.0.metric'),
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Smartphone,
      title: t('webDevelopment.promise.promises.1.title'),
      description: t('webDevelopment.promise.promises.1.description'),
      metric: t('webDevelopment.promise.promises.1.metric'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Search,
      title: t('webDevelopment.promise.promises.2.title'),
      description: t('webDevelopment.promise.promises.2.description'),
      metric: t('webDevelopment.promise.promises.2.metric'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: t('webDevelopment.promise.promises.3.title'),
      description: t('webDevelopment.promise.promises.3.description'),
      metric: t('webDevelopment.promise.promises.3.metric'),
      color: "from-aura-500 to-aura-600"
    },
    {
      icon: Shield,
      title: t('webDevelopment.promise.promises.4.title'),
      description: t('webDevelopment.promise.promises.4.description'),
      metric: t('webDevelopment.promise.promises.4.metric'),
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: t('webDevelopment.promise.promises.5.title'),
      description: t('webDevelopment.promise.promises.5.description'),
      metric: t('webDevelopment.promise.promises.5.metric'),
      color: "from-purple-500 to-purple-600"
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
            {t('webDevelopment.promise.badge')}
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8" 
            style={{ fontFamily: 'Brockmann, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('webDevelopment.promise.title')}
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('webDevelopment.promise.titleHighlight')}
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('webDevelopment.promise.subtitle')}
          </motion.p>
        </motion.div>

        {/* Main Promises Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {promises.map((promise, index) => {
            const IconComponent = promise.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${promise.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-aura-700 transition-colors duration-300" 
                  style={{ fontFamily: 'Brockmann, sans-serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {promise.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  {promise.description}
                </motion.p>
                
                {/* Metric */}
                <motion.div 
                  className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${promise.color} bg-opacity-10 text-sm font-semibold`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={`bg-gradient-to-r ${promise.color} bg-clip-text text-transparent`}>
                    {promise.metric}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Guarantee */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white mb-6"
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Shield className="w-10 h-10" />
          </motion.div>
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-6" 
            style={{ fontFamily: 'Brockmann, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('webDevelopment.promise.guarantee.title')}
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t('webDevelopment.promise.guarantee.description')}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebDevelopmentPromise;