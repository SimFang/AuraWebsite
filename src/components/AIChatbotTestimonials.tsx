import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Quote, TrendingUp, Clock, DollarSign, Users, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";


const AIChatbotTestimonials = () => {
  const navigate = useNavigate();


  const handleContactClick = () => {
    navigate('/contact?service=ai-chatbot');
  };
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow Solutions",
      avatar: "/placeholder.svg",
      content: "Our AI chatbot has been a game-changer. We've reduced support tickets by 75% while improving customer satisfaction scores. The ROI was evident within the first month.",
      metrics: {
        improvement: "75% reduction in support tickets",
        roi: "300% ROI in first quarter",
        satisfaction: "4.8/5 customer satisfaction"
      },
      industry: "SaaS",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Operations Director",
      company: "HealthCare Plus",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The AI chatbot handles appointment scheduling flawlessly. Our staff can now focus on patient care instead of administrative tasks. It's like having a 24/7 receptionist.",
      metrics: {
        improvement: "90% of appointments automated",
        roi: "$45k annual savings",
        satisfaction: "95% patient satisfaction"
      },
      industry: "Healthcare",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "E-commerce Manager",
      company: "StyleHub Retail",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Our conversion rate increased by 40% after implementing the AI chatbot. It provides personalized product recommendations that our customers love. Sales have never been better.",
      metrics: {
        improvement: "40% increase in conversions",
        roi: "$120k additional revenue",
        satisfaction: "4.9/5 shopping experience"
      },
      industry: "E-commerce",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Customer Success Lead",
      company: "FinanceFirst Bank",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Security was our biggest concern, but the AI chatbot exceeded all expectations. It handles sensitive financial queries while maintaining bank-level security standards.",
      metrics: {
        improvement: "80% faster query resolution",
        roi: "$200k cost reduction",
        satisfaction: "99.5% accuracy rate"
      },
      industry: "Financial Services",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Head of Customer Experience",
      company: "EduLearn Academy",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "Students get instant answers to their questions 24/7. The AI chatbot has dramatically improved student satisfaction and reduced our support workload during peak enrollment periods.",
      metrics: {
        improvement: "24/7 student support",
        roi: "60% reduction in support costs",
        satisfaction: "4.7/5 student satisfaction"
      },
      industry: "Education",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Founder",
      company: "AutoCare Services",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "The AI chatbot handles service bookings and provides maintenance reminders automatically. Our customers love the convenience, and we've seen a 50% increase in repeat business.",
      metrics: {
        improvement: "50% increase in repeat business",
        roi: "$80k additional revenue",
        satisfaction: "4.8/5 service rating"
      },
      industry: "Automotive",
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
      number: "2M+",
      label: "Conversations Traitées",
      icon: Quote,
      color: "from-green-500 to-green-600"
    },
    {
      number: "99.9%",
      label: "Temps de Disponibilité",
      icon: Clock,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "€2M+",
      label: "Économies Générées",
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
            Découvrez comment nos chatbots IA transforment les entreprises avec des résultats mesurables et une satisfaction client exceptionnelle.
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
            Preuves Sociales & Résultats
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
              <div className="text-sm text-gray-600">Taux de Rétention</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">24hrs</div>
              <div className="text-sm text-gray-600">Temps de Configuration</div>
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
              Demander une Démo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AIChatbotTestimonials;