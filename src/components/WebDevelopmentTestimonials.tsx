import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Quote, TrendingUp, Clock, DollarSign, Users, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from '../contexts/LocaleContext';

const WebDevelopmentTestimonials = () => {
  const navigate = useNavigate();
  const { t } = useLocale();

  const handleContactClick = () => {
    navigate('/contact?service=web-development');
  };

  const testimonials = [
    {
      name: t('webDevelopment.testimonials.clients.michael.name'),
      role: t('webDevelopment.testimonials.clients.michael.role'),
      company: t('webDevelopment.testimonials.clients.michael.company'),
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: t('webDevelopment.testimonials.clients.michael.content'),
      metrics: {
        improvement: t('webDevelopment.testimonials.clients.michael.metrics.improvement'),
        roi: t('webDevelopment.testimonials.clients.michael.metrics.roi'),
        satisfaction: t('webDevelopment.testimonials.clients.michael.metrics.satisfaction')
      },
      industry: t('webDevelopment.testimonials.clients.michael.industry'),
      rating: 5
    },
    {
      name: t('webDevelopment.testimonials.clients.sarah.name'),
      role: t('webDevelopment.testimonials.clients.sarah.role'),
      company: t('webDevelopment.testimonials.clients.sarah.company'),
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: t('webDevelopment.testimonials.clients.sarah.content'),
      metrics: {
        improvement: t('webDevelopment.testimonials.clients.sarah.metrics.improvement'),
        roi: t('webDevelopment.testimonials.clients.sarah.metrics.roi'),
        satisfaction: t('webDevelopment.testimonials.clients.sarah.metrics.satisfaction')
      },
      industry: t('webDevelopment.testimonials.clients.sarah.industry'),
      rating: 5
    },
    {
      name: t('webDevelopment.testimonials.clients.david.name'),
      role: t('webDevelopment.testimonials.clients.david.role'),
      company: t('webDevelopment.testimonials.clients.david.company'),
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: t('webDevelopment.testimonials.clients.david.content'),
      metrics: {
        improvement: t('webDevelopment.testimonials.clients.david.metrics.improvement'),
        roi: t('webDevelopment.testimonials.clients.david.metrics.roi'),
        satisfaction: t('webDevelopment.testimonials.clients.david.metrics.satisfaction')
      },
      industry: t('webDevelopment.testimonials.clients.david.industry'),
      rating: 5
    },
    {
      name: t('webDevelopment.testimonials.clients.jennifer.name'),
      role: t('webDevelopment.testimonials.clients.jennifer.role'),
      company: t('webDevelopment.testimonials.clients.jennifer.company'),
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: t('webDevelopment.testimonials.clients.jennifer.content'),
      metrics: {
        improvement: t('webDevelopment.testimonials.clients.jennifer.metrics.improvement'),
        roi: t('webDevelopment.testimonials.clients.jennifer.metrics.roi'),
        satisfaction: t('webDevelopment.testimonials.clients.jennifer.metrics.satisfaction')
      },
      industry: t('webDevelopment.testimonials.clients.jennifer.industry'),
      rating: 5
    },
    {
      name: t('webDevelopment.testimonials.clients.robert.name'),
      role: t('webDevelopment.testimonials.clients.robert.role'),
      company: t('webDevelopment.testimonials.clients.robert.company'),
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: t('webDevelopment.testimonials.clients.robert.content'),
      metrics: {
        improvement: t('webDevelopment.testimonials.clients.robert.metrics.improvement'),
        roi: t('webDevelopment.testimonials.clients.robert.metrics.roi'),
        satisfaction: t('webDevelopment.testimonials.clients.robert.metrics.satisfaction')
      },
      industry: t('webDevelopment.testimonials.clients.robert.industry'),
      rating: 5
    },
    {
      name: t('webDevelopment.testimonials.clients.amanda.name'),
      role: t('webDevelopment.testimonials.clients.amanda.role'),
      company: t('webDevelopment.testimonials.clients.amanda.company'),
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: t('webDevelopment.testimonials.clients.amanda.content'),
      metrics: {
        improvement: t('webDevelopment.testimonials.clients.amanda.metrics.improvement'),
        roi: t('webDevelopment.testimonials.clients.amanda.metrics.roi'),
        satisfaction: t('webDevelopment.testimonials.clients.amanda.metrics.satisfaction')
      },
      industry: t('webDevelopment.testimonials.clients.amanda.industry'),
      rating: 5
    }
  ];

  const stats = [
    {
      number: t('webDevelopment.testimonials.stats.websites.number'),
      label: t('webDevelopment.testimonials.stats.websites.label'),
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: t('webDevelopment.testimonials.stats.satisfaction.number'),
      label: t('webDevelopment.testimonials.stats.satisfaction.label'),
      icon: Star,
      color: "from-green-500 to-green-600"
    },
    {
      number: t('webDevelopment.testimonials.stats.delivery.number'),
      label: t('webDevelopment.testimonials.stats.delivery.label'),
      icon: Clock,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: t('webDevelopment.testimonials.stats.revenue.number'),
      label: t('webDevelopment.testimonials.stats.revenue.label'),
      icon: DollarSign,
      color: "from-aura-500 to-aura-600"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-aura-100 text-aura-700 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Star className="w-4 h-4 mr-2" />
            {t('webDevelopment.testimonials.badge')}
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8" 
            style={{ fontFamily: 'Brockmann, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600">
              {t('webDevelopment.testimonials.title')}
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('webDevelopment.testimonials.subtitle')}
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-4`}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-aura-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Metrics */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">{testimonial.metrics.improvement}</span>
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">{testimonial.metrics.roi}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-gray-600">{testimonial.metrics.satisfaction}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-aura-600">{testimonial.company}</div>
                </div>
              </div>

              {/* Industry Badge */}
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-aura-100 text-aura-700 text-xs font-medium">
                  {testimonial.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-gray-900 mb-8" 
            style={{ fontFamily: 'Brockmann, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('webDevelopment.testimonials.socialProof.title')}
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">{t('webDevelopment.testimonials.socialProof.rating.number')}</div>
              <div className="text-sm text-gray-600">{t('webDevelopment.testimonials.socialProof.rating.label')}</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">{t('webDevelopment.testimonials.socialProof.completion.number')}</div>
              <div className="text-sm text-gray-600">{t('webDevelopment.testimonials.socialProof.completion.label')}</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">{t('webDevelopment.testimonials.socialProof.deliveryTime.number')}</div>
              <div className="text-sm text-gray-600">{t('webDevelopment.testimonials.socialProof.deliveryTime.label')}</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">{t('webDevelopment.testimonials.socialProof.roi.number')}</div>
              <div className="text-sm text-gray-600">{t('webDevelopment.testimonials.socialProof.roi.label')}</div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-aura-500 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {t('webDevelopment.testimonials.cta.primary')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            <motion.button 
              onClick={handleContactClick}
              className="border-2 border-aura-500 text-aura-600 px-10 py-5 rounded-xl font-semibold hover:bg-aura-50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {t('webDevelopment.testimonials.cta.secondary')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebDevelopmentTestimonials;