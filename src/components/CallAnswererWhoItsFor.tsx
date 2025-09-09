import React from "react";
import { Store, Building2, Heart, GraduationCap, Car, Home, Briefcase, Users, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const CallAnswererWhoItsFor = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact?service=call-answerer');
  };

  const industries = [
    {
      icon: Store,
      title: "Retail & E-commerce",
      description: "Handle customer inquiries, order confirmations, delivery updates, and return requests professionally.",
      useCases: ["Order status inquiries", "Product availability", "Return & exchange requests", "Store hours & locations"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      icon: Heart,
      title: "Healthcare & Medical",
      description: "Manage appointment bookings, prescription refills, insurance inquiries, and emergency protocols.",
      useCases: ["Appointment scheduling", "Prescription refills", "Insurance verification", "Emergency routing"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700"
    },
    {
      icon: Building2,
      title: "Professional Services",
      description: "Handle client consultations, service bookings, billing inquiries, and project updates.",
      useCases: ["Consultation booking", "Service inquiries", "Billing questions", "Project status updates"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Manage enrollment inquiries, class schedules, tuition questions, and student support.",
      useCases: ["Course enrollment", "Schedule information", "Tuition inquiries", "Student support"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      icon: Car,
      title: "Automotive & Repair",
      description: "Schedule service appointments, provide repair estimates, handle warranty claims, and maintenance reminders.",
      useCases: ["Service appointments", "Repair estimates", "Warranty claims", "Maintenance reminders"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    },
    {
      icon: Home,
      title: "Real Estate & Property",
      description: "Handle property inquiries, viewing appointments, rental applications, and maintenance requests.",
      useCases: ["Property inquiries", "Viewing appointments", "Rental applications", "Maintenance requests"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700"
    }
  ];

  const businessSizes = [
    {
      title: "Small Businesses & Startups",
      description: "Professional call handling without the overhead. Perfect for businesses with 1-20 employees who need reliable phone coverage.",
      features: ["24/7 call coverage", "Professional greeting", "Message taking", "Appointment booking"],
      icon: Users,
      gradient: "from-aura-500 to-purple-600"
    },
    {
      title: "Growing Companies",
      description: "Scale your call handling as you grow. Ideal for 20-100 employees who need advanced call management and routing.",
      features: ["Call routing & transfer", "CRM integration", "Detailed call logs", "Multi-location support"],
      icon: Briefcase,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Enterprise Organizations",
      description: "Sophisticated call answering for complex business needs. Perfect for 100+ employees with high call volumes.",
      features: ["Custom call scripts", "Advanced analytics", "API integrations", "Dedicated account manager"],
      icon: Building2,
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const painPoints = [
    {
      problem: "Appels manqués qui font perdre des clients",
      solution: "Répondeur automatique 24/7 qui capture chaque opportunité",
      icon: "📞"
    },
    {
      problem: "Coûts élevés de personnel de réception",
      solution: "Solution automatisée qui réduit vos coûts opérationnels",
      icon: "💰"
    },
    {
      problem: "Service client incohérent en dehors des heures",
      solution: "Réponses professionnelles et cohérentes 24h/24",
      icon: "⭐"
    },
    {
      problem: "Difficulté à gérer les pics d'appels",
      solution: "Capacité illimitée pour gérer tous vos appels simultanément",
      icon: "📈"
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
            Pour Qui ?
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8" 
            style={{ fontFamily: 'Brockmann, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Qui Peut Bénéficier
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              de Notre Répondeur Automatique
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Notre solution de répondeur automatique s'adapte à tous types d'entreprises, des petites entreprises aux grandes corporations, pour ne jamais manquer un appel important.
          </motion.p>
        </motion.div>

        {/* Pain Points */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Problèmes Courants Que Nous Résolvons
            </h3>
            <p className="text-lg text-gray-600">
              Identifiez-vous dans l'une de ces situations ? Nous avons la solution.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{point.problem}</h3>
                <p className="text-sm text-aura-600 font-medium">{point.solution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Secteurs d'Activité Idéaux
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              
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
                  <div className={`relative h-full ${industry.bgColor} rounded-2xl p-8 border border-gray-100 group-hover:shadow-xl transition-all duration-500`}>
                    {/* Icon */}
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <h4 className={`text-xl font-bold ${industry.textColor} mb-4`}>
                      {industry.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    {/* Use Cases */}
                    <ul className="space-y-2">
                      {industry.useCases.map((useCase, ucIndex) => (
                        <li key={ucIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className={`w-4 h-4 ${industry.textColor} mr-2 flex-shrink-0`} />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Business Sizes */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Adapté à Toutes les Tailles d'Entreprise
          </motion.h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {businessSizes.map((size, index) => {
              const IconComponent = size.icon;
              
              return (
                <motion.div 
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${size.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${size.gradient} mb-6 shadow-lg relative z-10`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-aura-700 transition-colors duration-300">
                        {size.title}
                      </h4>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {size.description}
                      </p>
                      
                      {/* Features */}
                      <ul className="space-y-3">
                        {size.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center text-gray-700">
                            <ArrowRight className="w-4 h-4 text-aura-600 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
                Prêt à Transformer Votre Service Client ?
              </motion.h3>
              <motion.p 
                className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Rejoignez des centaines d'entreprises qui font confiance à notre solution de répondeur automatique pour ne jamais manquer un appel important.
              </motion.p>
              <motion.button 
                onClick={handleContactClick}
                className="bg-white text-aura-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Commencer Maintenant
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallAnswererWhoItsFor;