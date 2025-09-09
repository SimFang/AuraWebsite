import React from "react";
import { FileSearch, Palette, Code, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from '@/contexts/LocaleContext';

const WebDevelopmentHowItWorks = () => {
  const { t } = useLocale();
  const steps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We dive deep into your business goals, target audience, and requirements to create a comprehensive project roadmap and technical specifications.",
      icon: FileSearch,
      details: [
        "Business goals and target audience analysis",
        "Competitor research and market positioning",
        "Technical requirements and feature planning",
        "Project timeline and milestone definition"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our design team creates stunning, user-focused designs that reflect your brand identity and provide exceptional user experiences across all devices.",
      icon: Palette,
      details: [
        "Custom UI/UX design and wireframing",
        "Brand identity integration and styling",
        "Responsive design for all screen sizes",
        "Interactive prototypes and user testing"
      ],
      color: "from-aura-500 to-aura-600"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your website using modern technologies and best practices, with rigorous testing to ensure optimal performance and security.",
      icon: Code,
      details: [
        "Clean, scalable code with modern frameworks",
        "Database design and API development",
        "Comprehensive testing and quality assurance",
        "Performance optimization and security hardening"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Your website goes live with full deployment support, ongoing maintenance, and continuous optimization to ensure peak performance.",
      icon: Rocket,
      details: [
        "Seamless deployment and domain setup",
        "SEO optimization and analytics integration",
        "Staff training and documentation",
        "Ongoing maintenance and feature updates"
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
            <Code className="w-4 h-4 mr-2" />
            {t('webDevelopment.howItWorks.badge')}
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8" 
            style={{fontFamily: 'Brockmann, sans-serif'}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('webDevelopment.howItWorks.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('webDevelopment.howItWorks.subtitle')}
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <motion.div 
                key={index} 
                className="relative mb-16 last:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 top-32 w-px h-16 bg-gradient-to-b from-aura-300 to-transparent hidden lg:block"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  ></motion.div>
                )}
                
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                  isEven ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <motion.div 
                    className={`${isEven ? 'lg:col-start-2' : ''}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  >
                    <motion.div 
                      className="flex items-center mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    >
                      <motion.div 
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white mr-4`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="w-8 h-8" />
                      </motion.div>
                      <div>
                        <motion.div 
                          className="text-sm font-semibold text-aura-600 mb-1"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                        >
                          Step {step.step}
                        </motion.div>
                        <motion.h3 
                          className="text-2xl font-bold text-gray-900" 
                          style={{fontFamily: 'Brockmann, sans-serif'}}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                        >
                          {t(`webDevelopment.howItWorks.steps.${index}.title`)}
                        </motion.h3>
                      </div>
                    </motion.div>
                    
                    <motion.p 
                      className="text-lg text-gray-600 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
                    >
                      {t(`webDevelopment.howItWorks.steps.${index}.description`)}
                    </motion.p>
                    
                    <motion.ul 
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 1.0 }}
                    >
                      {step.details.map((detail, detailIndex) => (
                        <motion.li 
                          key={detailIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 1.1 + detailIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <ArrowRight className="w-5 h-5 text-aura-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{t(`webDevelopment.howItWorks.steps.${index}.details.${detailIndex}`)}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                  
                  {/* Visual */}
                  <motion.div 
                    className={`${isEven ? 'lg:col-start-1' : ''}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  >
                    <div className="relative">
                      {/* Step-specific visuals */}
                      {index === 0 && (
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
                              <div className="w-3/4 h-3 bg-gray-200 rounded mb-2"></div>
                              <div className="w-1/2 h-3 bg-blue-300 rounded"></div>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
                              <div className="w-2/3 h-3 bg-gray-200 rounded mb-2"></div>
                              <div className="w-3/4 h-3 bg-blue-300 rounded"></div>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm col-span-2">
                              <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
                              <div className="w-5/6 h-3 bg-blue-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="bg-gradient-to-br from-aura-50 to-aura-100 rounded-2xl p-8">
                          <div className="space-y-4">
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <div className="flex items-center justify-between mb-3">
                                <div className="w-16 h-3 bg-aura-300 rounded"></div>
                                <div className="w-8 h-8 bg-aura-500 rounded-full"></div>
                              </div>
                              <div className="space-y-2">
                                <div className="w-full h-20 bg-gradient-to-r from-aura-200 to-purple-200 rounded"></div>
                                <div className="flex gap-2">
                                  <div className="w-1/3 h-12 bg-gray-200 rounded"></div>
                                  <div className="w-1/3 h-12 bg-gray-200 rounded"></div>
                                  <div className="w-1/3 h-12 bg-gray-200 rounded"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {index === 2 && (
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                              <span className="text-sm text-gray-600">Frontend Development</span>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                              <span className="text-sm text-gray-600">Backend API</span>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                              <span className="text-sm text-gray-600">Testing Suite</span>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                              <span className="text-sm text-gray-600">Performance Optimization</span>
                              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {index === 3 && (
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                              <Rocket className="w-8 h-8 text-white" />
                            </div>
                            <div className="grid grid-cols-3 gap-2 mb-4">
                              <div className="bg-white rounded p-2 text-center">
                                <div className="text-lg font-bold text-green-600">99.9%</div>
                                <div className="text-xs text-gray-500">Uptime</div>
                              </div>
                              <div className="bg-white rounded p-2 text-center">
                                <div className="text-lg font-bold text-green-600">A+</div>
                                <div className="text-xs text-gray-500">Performance</div>
                              </div>
                              <div className="bg-white rounded p-2 text-center">
                                <div className="text-lg font-bold text-green-600">Live</div>
                                <div className="text-xs text-gray-500">Status</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Decorative elements */}
                      <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full opacity-20 animate-pulse`}></div>
                      <div className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r ${step.color} rounded-full opacity-30 animate-pulse`} style={{animationDelay: '1s'}}></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Summary */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-aura-50 to-purple-50 rounded-2xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6" 
              style={{fontFamily: 'Brockmann, sans-serif'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('webDevelopment.howItWorks.timeline.title')}
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('webDevelopment.howItWorks.timeline.description')}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { value: "4-8", label: "Weeks to Launch" },
                { value: "24/7", label: "Ongoing Support" },
                { value: "∞", label: "Future Updates" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl font-bold text-aura-600">{t(`webDevelopment.howItWorks.timeline.stats.${index}.value`)}</div>
                  <div className="text-sm text-gray-600">{t(`webDevelopment.howItWorks.timeline.stats.${index}.label`)}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebDevelopmentHowItWorks;