import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Globe, Rocket, Crown, Users, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

const WebDevelopmentPricing = () => {
  const navigate = useNavigate();
  const { t } = useLocale();

  const handleContactClick = () => {
    navigate('/contact?service=web-development');
  };

  const plans = [
    {
      name: t('webDevelopment.pricing.plans.essential.name'),
      price: t('webDevelopment.pricing.plans.essential.price'),
      period: t('webDevelopment.pricing.plans.essential.period'),
      description: t('webDevelopment.pricing.plans.essential.description'),
      features: t('webDevelopment.pricing.plans.essential.features'),
      icon: Globe,
      gradient: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      name: t('webDevelopment.pricing.plans.professional.name'),
      price: t('webDevelopment.pricing.plans.professional.price'),
      period: t('webDevelopment.pricing.plans.professional.period'),
      description: t('webDevelopment.pricing.plans.professional.description'),
      features: t('webDevelopment.pricing.plans.professional.features'),
      icon: Rocket,
      gradient: "from-aura-500 to-aura-600",
      popular: true
    },
    {
      name: t('webDevelopment.pricing.plans.enterprise.name'),
      price: t('webDevelopment.pricing.plans.enterprise.price'),
      period: t('webDevelopment.pricing.plans.enterprise.period'),
      description: t('webDevelopment.pricing.plans.enterprise.description'),
      features: t('webDevelopment.pricing.plans.enterprise.features'),
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
            <BarChart3 className="w-4 h-4 mr-2" />
            {t('webDevelopment.pricing.badge')}
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8" 
            style={{fontFamily: 'Brockmann, sans-serif'}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('webDevelopment.pricing.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600">
              {t('webDevelopment.pricing.titleHighlight')}
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('webDevelopment.pricing.subtitle')}
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto"
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
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-aura-500 to-aura-600 text-white shadow-2xl scale-105'
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
                      {t('webDevelopment.pricing.mostPopular')}
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
                  className={`text-2xl font-bold mb-2 ${
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
                  {plan.price === 'Custom' ? (
                    <div className={`text-3xl font-bold ${
                      plan.popular ? 'text-white' : 'text-gray-900'
                    }`}>
                      {t('webDevelopment.pricing.customPricing')}
                    </div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className={`text-4xl font-bold ${
                        plan.popular ? 'text-white' : 'text-gray-900'
                      }`}>
                        ${plan.price}
                      </span>
                      <span className={`text-lg ml-1 ${
                        plan.popular ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        /{plan.period}
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Description */}
                <motion.p 
                  className={`mb-6 ${
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
                  className="space-y-3 mb-8"
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
                      <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-white' : 'text-aura-500'
                      }`} />
                      <span className={`text-sm ${
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
                    className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-white text-aura-600 hover:bg-gray-100 shadow-lg'
                        : 'bg-gradient-to-r from-aura-500 to-aura-600 text-white hover:from-aura-600 hover:to-aura-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {plan.price === t('webDevelopment.pricing.plans.enterprise.price') ? t('webDevelopment.pricing.contactSales') : t('webDevelopment.pricing.getStarted')}
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t('webDevelopment.pricing.additionalInfo').map((item, index) => {
               const iconMap = { Shield, Users, Rocket };
               const IconComponent = iconMap[item.iconName] || Shield;
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
                    className="font-semibold text-gray-900 mb-3" 
                    style={{fontFamily: 'Brockmann, sans-serif'}}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p 
                    className="text-sm text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                  >
                    {item.description}
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
            {t('webDevelopment.pricing.faqNote.text')} <a href="#contact" className="text-aura-600 hover:text-aura-700 font-medium">{t('webDevelopment.pricing.faqNote.linkText')}</a> {t('webDevelopment.pricing.faqNote.suffix')}.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebDevelopmentPricing;