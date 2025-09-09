import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Quote, TrendingUp, Clock, DollarSign, Users, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";


const CallAnswererTestimonials = () => {
  const navigate = useNavigate();


  const handleContactClick = () => {
    navigate('/contact?service=call-answerer');
  };
  
  const testimonials = [
    {
      name: "Marc Dubois",
      role: "Directeur Général",
      company: "TechStart Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Depuis l'implémentation du répondeur IA d'Aura, nous n'avons plus jamais manqué un appel important. Le système comprend parfaitement nos clients et les dirige vers le bon service. C'est révolutionnaire !",
      metrics: {
        improvement: "+85% d'appels traités",
        roi: "300% de ROI",
        satisfaction: "96% de satisfaction client"
      },
      industry: "Technologie",
      rating: 5
    },
    {
      name: "Sophie Martin",
      role: "Responsable Service Client",
      company: "MediCare Plus",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      content: "L'IA d'Aura a transformé notre service client. Elle gère les urgences 24/7 et transfère intelligemment les cas complexes. Nos patients sont ravis de la réactivité !",
      metrics: {
        improvement: "+70% de disponibilité",
        roi: "250% de ROI",
        satisfaction: "94% de satisfaction patient"
      },
      industry: "Santé",
      rating: 5
    },
    {
      name: "Pierre Leroy",
      role: "Fondateur",
      company: "Immobilier Pro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Grâce au répondeur IA, nous capturons tous les prospects, même en dehors des heures d'ouverture. Il qualifie automatiquement les demandes et programme les visites. Un vrai game-changer !",
      metrics: {
        improvement: "+120% de leads capturés",
        roi: "400% de ROI",
        satisfaction: "92% de satisfaction prospect"
      },
      industry: "Immobilier",
      rating: 5
    },
    {
      name: "Julie Moreau",
      role: "Directrice Marketing",
      company: "Fashion Boutique",
      avatar: "/placeholder.svg",
      content: "L'IA d'Aura gère parfaitement nos commandes téléphoniques et les demandes de renseignements. Elle connaît tous nos produits et peut même prendre des réservations. Impressionnant !",
      metrics: {
        improvement: "+60% de commandes téléphoniques",
        roi: "280% de ROI",
        satisfaction: "95% de satisfaction client"
      },
      industry: "Commerce",
      rating: 5
    },
    {
      name: "Antoine Rousseau",
      role: "Gérant",
      company: "Restaurant Le Gourmet",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "Notre répondeur IA prend les réservations 24/7, gère les annulations et informe sur nos menus. Plus jamais de table vide par manque de disponibilité téléphonique !",
      metrics: {
        improvement: "+45% de réservations",
        roi: "220% de ROI",
        satisfaction: "98% de satisfaction client"
      },
      industry: "Restauration",
      rating: 5
    },
    {
      name: "Camille Dubois",
      role: "Directrice",
      company: "Cabinet Juridique Dubois",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "L'IA filtre intelligemment les appels urgents et programme les consultations. Elle respecte parfaitement la confidentialité et dirige chaque client vers le bon avocat spécialisé.",
      metrics: {
        improvement: "+75% d'efficacité",
        roi: "350% de ROI",
        satisfaction: "97% de satisfaction client"
      },
      industry: "Juridique",
      rating: 5
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Entreprises Satisfaites",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "1M+",
      label: "Appels Traités",
      icon: Phone,
      color: "from-green-500 to-green-600"
    },
    {
      number: "99.9%",
      label: "Disponibilité",
      icon: Clock,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "€2M+",
      label: "Revenus Générés",
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
            Découvrez comment notre répondeur IA a transformé la communication de centaines d'entreprises à travers la France.
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
              <div className="mt-3 sm:mt-4">
                <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-aura-100 text-aura-700 text-xs font-medium">
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
            Rejoignez Plus de 500 Entreprises Satisfaites
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
              <div className="text-sm text-gray-600">Average Rating</div>
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
              <div className="text-2xl font-bold text-aura-600 mb-1">99%</div>
              <div className="text-sm text-gray-600">Call Answer Rate</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">2hrs</div>
              <div className="text-sm text-gray-600">Average Setup Time</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">250%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
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
              Commencer Maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            <motion.button 
              onClick={handleContactClick}
              className="border-2 border-aura-500 text-aura-600 px-10 py-5 rounded-xl font-semibold hover:bg-aura-50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Voir une Démo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallAnswererTestimonials;