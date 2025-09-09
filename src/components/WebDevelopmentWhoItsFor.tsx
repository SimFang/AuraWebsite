import React from "react";
import { Store, Building2, Heart, GraduationCap, Briefcase, Home, Users, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from '../contexts/LocaleContext';

const WebDevelopmentWhoItsFor = () => {
  const navigate = useNavigate();
  const { t } = useLocale();

  const handleContactClick = () => {
    navigate('/contact?service=web-development');
  };

  const industries = [
    {
      icon: Store,
      title: t('webDevelopment.whoItsFor.industries.0.title'),
      description: t('webDevelopment.whoItsFor.industries.0.description'),
      useCases: t('webDevelopment.whoItsFor.industries.0.useCases'),
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      icon: Heart,
      title: t('webDevelopment.whoItsFor.industries.1.title'),
      description: t('webDevelopment.whoItsFor.industries.1.description'),
      useCases: t('webDevelopment.whoItsFor.industries.1.useCases'),
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700"
    },
    {
      icon: Building2,
      title: t('webDevelopment.whoItsFor.industries.2.title'),
      description: t('webDevelopment.whoItsFor.industries.2.description'),
      useCases: t('webDevelopment.whoItsFor.industries.2.useCases'),
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      icon: GraduationCap,
      title: t('webDevelopment.whoItsFor.industries.3.title'),
      description: t('webDevelopment.whoItsFor.industries.3.description'),
      useCases: t('webDevelopment.whoItsFor.industries.3.useCases'),
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      icon: Briefcase,
      title: t('webDevelopment.whoItsFor.industries.4.title'),
      description: t('webDevelopment.whoItsFor.industries.4.description'),
      useCases: t('webDevelopment.whoItsFor.industries.4.useCases'),
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    },
    {
      icon: Home,
      title: t('webDevelopment.whoItsFor.industries.5.title'),
      description: t('webDevelopment.whoItsFor.industries.5.description'),
      useCases: t('webDevelopment.whoItsFor.industries.5.useCases'),
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700"
    }
  ];

  const businessSizes = [
    {
      title: t('webDevelopment.whoItsFor.businessSizes.0.title'),
      description: t('webDevelopment.whoItsFor.businessSizes.0.description'),
      features: t('webDevelopment.whoItsFor.businessSizes.0.features'),
      icon: Users,
      gradient: "from-aura-500 to-purple-600"
    },
    {
      title: t('webDevelopment.whoItsFor.businessSizes.1.title'),
      description: t('webDevelopment.whoItsFor.businessSizes.1.description'),
      features: t('webDevelopment.whoItsFor.businessSizes.1.features'),
      icon: Briefcase,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: t('webDevelopment.whoItsFor.businessSizes.2.title'),
      description: t('webDevelopment.whoItsFor.businessSizes.2.description'),
      features: t('webDevelopment.whoItsFor.businessSizes.2.features'),
      icon: Building2,
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const painPoints = [
    {
      problem: t('webDevelopment.whoItsFor.painPoints.0.problem'),
      solution: t('webDevelopment.whoItsFor.painPoints.0.solution'),
      icon: "🌐"
    },
    {
      problem: t('webDevelopment.whoItsFor.painPoints.1.problem'),
      solution: t('webDevelopment.whoItsFor.painPoints.1.solution'),
      icon: "⚡"
    },
    {
      problem: t('webDevelopment.whoItsFor.painPoints.2.problem'),
      solution: t('webDevelopment.whoItsFor.painPoints.2.solution'),
      icon: "🔍"
    },
    {
      problem: t('webDevelopment.whoItsFor.painPoints.3.problem'),
      solution: t('webDevelopment.whoItsFor.painPoints.3.solution'),
      icon: "📱"
    },
    {
      problem: t('webDevelopment.whoItsFor.painPoints.4.problem'),
      solution: t('webDevelopment.whoItsFor.painPoints.4.solution'),
      icon: "✏️"
    },
    {
      problem: t('webDevelopment.whoItsFor.painPoints.5.problem'),
      solution: t('webDevelopment.whoItsFor.painPoints.5.solution'),
      icon: "🔒"
    }
  ];

  return (
    <motion.section 
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
            <Users className="w-4 h-4 mr-2" />
            {t('webDevelopment.whoItsFor.badge')}
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8" 
            style={{fontFamily: 'Brockmann, sans-serif'}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('webDevelopment.whoItsFor.title')}
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('webDevelopment.whoItsFor.titleHighlight')}
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('webDevelopment.whoItsFor.subtitle')}
          </motion.p>
        </motion.div>

        {/* Pain Points Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 mb-6" 
              style={{fontFamily: 'Brockmann, sans-serif'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('webDevelopment.whoItsFor.painPointsTitle')}
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('webDevelopment.whoItsFor.painPointsSubtitle')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {painPoints.map((point, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div 
                  className="text-3xl mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  {point.icon}
                </motion.div>
                <motion.h4 
                  className="font-semibold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  {point.problem}
                </motion.h4>
                <motion.p 
                  className="text-sm text-aura-600 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                >
                  {point.solution}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Industries Grid */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 mb-6" 
              style={{fontFamily: 'Brockmann, sans-serif'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tailored Solutions for Your Industry
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our web development expertise spans across industries with specialized features and functionality
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div 
                  key={index} 
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
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
                    className="text-xl font-bold text-gray-900 mb-4" 
                    style={{fontFamily: 'Brockmann, sans-serif'}}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {industry.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    {industry.description}
                  </motion.p>
                  
                  {/* Use Cases */}
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {industry.useCases.map((useCase, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.6 + idx * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{useCase}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Business Sizes */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 mb-6" 
              style={{fontFamily: 'Brockmann, sans-serif'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Solutions That Scale With Your Business
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From startups to enterprises, we have the right web development approach for your business size
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {businessSizes.map((size, index) => {
              const IconComponent = size.icon;
              return (
                <motion.div 
                  key={index} 
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${size.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8" />
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-4" 
                    style={{fontFamily: 'Brockmann, sans-serif'}}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    {size.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  >
                    {size.description}
                  </motion.p>
                  
                  {/* Features */}
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    {size.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.6 + idx * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-4 h-4 text-aura-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-aura-50 to-purple-50 rounded-2xl p-8 lg:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 mb-6" 
              style={{fontFamily: 'Brockmann, sans-serif'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('webDevelopment.whoItsFor.cta.title')}
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('webDevelopment.whoItsFor.cta.description')}
            </motion.p>
            <motion.button
              onClick={handleContactClick}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-aura-600 to-purple-600 text-white font-semibold rounded-xl hover:from-aura-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('webDevelopment.whoItsFor.cta.button')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebDevelopmentWhoItsFor;