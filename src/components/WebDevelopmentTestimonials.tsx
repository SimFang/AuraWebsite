import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Quote, TrendingUp, Clock, DollarSign, Users, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WebDevelopmentTestimonials = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact?service=web-development');
  };

  const handlePortfolioClick = () => {
    navigate('/portfolio');
  };

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Directeur Marketing",
      company: "TechStart Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "L'équipe de Websora a transformé notre vision en un site web exceptionnel. Leur attention aux détails et leur expertise technique sont remarquables.",
      metrics: {
        improvement: "+150% de trafic",
        roi: "300% ROI",
        satisfaction: "98% satisfaction"
      },
      industry: "Technologie",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      role: "Fondatrice",
      company: "Boutique Élégance",
      avatar: "/placeholder.svg",
      content: "Notre nouveau site e-commerce a dépassé toutes nos attentes. Les ventes ont augmenté de 200% depuis le lancement.",
      metrics: {
        improvement: "+200% de ventes",
        roi: "250% ROI",
        satisfaction: "100% satisfaction"
      },
      industry: "E-commerce",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "PDG",
      company: "Innovations Médicales",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Le professionnalisme et l'expertise de Websora nous ont permis de créer une plateforme qui révolutionne notre secteur.",
      metrics: {
        improvement: "+180% d'engagement",
        roi: "400% ROI",
        satisfaction: "99% satisfaction"
      },
      industry: "Santé",
      rating: 5
    },
    {
      name: "Jennifer Dubois",
      role: "Directrice E-commerce",
      company: "Mode & Style",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Websora a créé pour nous une boutique en ligne qui dépasse nos espérances. L'interface est intuitive et nos clients adorent naviguer sur le site.",
      metrics: {
        improvement: "+220% de conversions",
        roi: "350% ROI",
        satisfaction: "97% satisfaction"
      },
      industry: "Mode",
      rating: 5
    },
    {
      name: "Robert Lefevre",
      role: "Directeur Général",
      company: "Consulting Pro",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "L'équipe de Websora a su comprendre nos besoins spécifiques et créer une plateforme qui améliore considérablement notre efficacité.",
      metrics: {
        improvement: "+160% de leads",
        roi: "280% ROI",
        satisfaction: "100% satisfaction"
      },
      industry: "Conseil",
      rating: 5
    },
    {
      name: "Amanda Rodriguez",
      role: "Responsable Marketing",
      company: "Fitness Plus",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "Notre nouveau site web a révolutionné notre approche marketing. Les résultats ont dépassé toutes nos projections initiales.",
      metrics: {
        improvement: "+190% d'inscriptions",
        roi: "320% ROI",
        satisfaction: "99% satisfaction"
      },
      industry: "Sport & Fitness",
      rating: 5
    }
  ];

  const stats = [
    {
      number: "200+",
      label: "Sites Web Créés",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "98%",
      label: "Satisfaction Client",
      icon: Star,
      color: "from-green-500 to-green-600"
    },
    {
      number: "2-4",
      label: "Semaines de Livraison",
      icon: Clock,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "+300%",
      label: "Augmentation du CA",
      icon: DollarSign,
      color: "from-aura-500 to-aura-600"
    }
  ];

  return (
    <motion.section 
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
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
            Témoignages Clients
          </motion.div>
          <motion.h2 
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8" 
            style={{ fontFamily: 'Brockmann, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600">
              Ce Que Disent Nos Clients
            </span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Découvrez comment nous avons aidé nos clients à transformer leur présence en ligne et à atteindre leurs objectifs commerciaux.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-24"
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
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-3 sm:mb-4`}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.div>
                <motion.div 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-sm sm:text-base text-gray-600"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Rating */}
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-4 sm:mb-6">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 text-aura-200" />
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-4 sm:pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Metrics */}
              <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center text-xs sm:text-sm">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2" />
                  <span className="text-gray-600">{testimonial.metrics.improvement}</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm">
                  <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2" />
                  <span className="text-gray-600">{testimonial.metrics.roi}</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 mr-1 sm:mr-2" />
                  <span className="text-gray-600">{testimonial.metrics.satisfaction}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                />
                <div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs sm:text-sm text-aura-600">{testimonial.company}</div>
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
            Rejoignez Nos Clients Satisfaits
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
              <div className="text-2xl font-bold text-aura-600 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Note Moyenne</div>
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
              <div className="text-2xl font-bold text-aura-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Taux de Réussite</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">2-4</div>
              <div className="text-sm text-gray-600">Semaines de Livraison</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">300%</div>
              <div className="text-sm text-gray-600">ROI Moyen</div>
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
              Commencer Votre Projet
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            <motion.button 
              onClick={handlePortfolioClick}
              className="border-2 border-aura-500 text-aura-600 px-10 py-5 rounded-xl font-semibold hover:bg-aura-50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Voir Notre Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebDevelopmentTestimonials;