import React from "react";
import { Store, Building2, Heart, GraduationCap, Car, Home, Briefcase, Users, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const AIChatbotWhoItsFor = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact?service=ai-chatbot');
  };
  const industries = [
    {
      icon: Store,
      title: "E-commerce & Retail",
      description: "Améliorez l'expérience client avec un support instantané 24/7",
      useCases: [
        "Support produit en temps réel",
        "Suivi des commandes automatisé",
        "Recommandations personnalisées",
        "Gestion des retours simplifiée"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      icon: Heart,
      title: "Santé & Bien-être",
      description: "Fournissez des informations médicales fiables et un support patient",
      useCases: [
        "Prise de rendez-vous automatisée",
        "Informations sur les symptômes",
        "Rappels de médicaments",
        "Support post-consultation"
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700"
    },
    {
      icon: Building2,
      title: "Services Financiers",
      description: "Automatisez les demandes clients et améliorez la satisfaction",
      useCases: [
        "Informations sur les comptes",
        "Demandes de prêt pré-qualifiées",
        "Support pour les transactions",
        "Conseils financiers de base"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      icon: GraduationCap,
      title: "Éducation & Formation",
      description: "Supportez étudiants et parents avec des réponses instantanées",
      useCases: [
        "Informations sur les cours",
        "Assistance aux devoirs",
        "Processus d'inscription",
        "Support technique e-learning"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      icon: Car,
      title: "Automobile & Transport",
      description: "Améliorez l'expérience client dans le secteur automobile",
      useCases: [
        "Informations sur les véhicules",
        "Prise de rendez-vous service",
        "Support après-vente",
        "Devis et financements"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    },
    {
      icon: Home,
      title: "Immobilier & Construction",
      description: "Automatisez les demandes et qualifiez les prospects",
      useCases: [
        "Recherche de propriétés",
        "Planification de visites",
        "Évaluation de biens",
        "Informations de quartier"
      ],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700"
    }
  ];

  const businessSizes = [
    {
      title: "Petites Entreprises",
      description: "Solutions abordables pour les startups et PME qui veulent automatiser leur service client sans gros investissement.",
      features: [
        "Support client 24/7 automatisé",
        "Réduction des coûts opérationnels",
        "Amélioration de la satisfaction client",
        "Intégration facile avec vos outils existants"
      ],
      icon: Users,
      gradient: "from-aura-500 to-purple-600"
    },
    {
      title: "Entreprises Moyennes",
      description: "Chatbots avancés pour les entreprises en croissance qui ont besoin de gérer un volume important de demandes clients.",
      features: [
        "Gestion multi-canal (web, mobile, réseaux sociaux)",
        "Analytics et rapports détaillés",
        "Personnalisation avancée des réponses",
        "Intégration CRM et outils métier"
      ],
      icon: Briefcase,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Grandes Entreprises",
      description: "Solutions enterprise avec IA avancée pour les corporations qui gèrent des milliers d'interactions quotidiennes.",
      features: [
        "IA conversationnelle de pointe",
        "Scalabilité illimitée",
        "Sécurité et conformité enterprise",
        "Support dédié et formation équipe"
      ],
      icon: Building2,
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const painPoints = [
    {
      problem: "Votre équipe est submergée par les demandes clients répétitives",
      solution: "Notre chatbot IA gère automatiquement 80% des questions courantes, libérant votre équipe pour les tâches à forte valeur ajoutée",
      icon: "📞"
    },
    {
      problem: "Les coûts de support client explosent avec la croissance",
      solution: "Réduisez vos coûts de support de 60% tout en améliorant la satisfaction client avec des réponses instantanées 24/7",
      icon: "💰"
    },
    {
      problem: "Vos clients attendent trop longtemps pour obtenir des réponses",
      solution: "Réponses instantanées à toute heure, réduisant le temps d'attente de plusieurs heures à quelques secondes",
      icon: "⏰"
    },
    {
      problem: "La qualité du service varie selon l'agent disponible",
      solution: "Garantissez une expérience client cohérente et professionnelle avec des réponses standardisées et personnalisées",
      icon: "✅"
    },
    {
      problem: "Vous perdez des ventes car personne ne répond aux prospects",
      solution: "Capturez et qualifiez automatiquement chaque lead, même en dehors des heures d'ouverture",
      icon: "🎯"
    },
    {
      problem: "Difficile de faire évoluer votre support avec votre croissance",
      solution: "Scalabilité illimitée : gérez 1000x plus de conversations sans embaucher proportionnellement",
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
            Perfect For Your Business
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8" 
            style={{fontFamily: 'Brockmann, sans-serif'}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Qui Peut Bénéficier de
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Nos Chatbots IA ?
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Découvrez comment notre technologie de chatbot IA peut transformer votre service client, réduire vos coûts et améliorer l'expérience de vos clients, quelle que soit la taille de votre entreprise.
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
              Problèmes Que Nous Résolvons
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Identifiez-vous à l'un de ces défis ? Notre chatbot IA est la solution.
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
              Secteurs d'Activité
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Nos chatbots IA s'adaptent parfaitement à votre secteur d'activité avec des solutions personnalisées.
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
              Adapté à Toutes les Tailles d'Entreprise
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              De la startup à la multinationale, nos solutions s'adaptent à vos besoins et votre budget.
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
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${size.gradient} text-white mb-6`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
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
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-aura-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-3xl font-bold mb-6" 
            style={{fontFamily: 'Brockmann, sans-serif'}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Prêt à Transformer Votre Service Client ?
          </motion.h3>
          <motion.p 
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Rejoignez des centaines d'entreprises qui ont déjà révolutionné leur relation client avec nos chatbots IA.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button 
              onClick={handleContactClick} 
              className="bg-white text-aura-600 px-10 py-5 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Commencer Maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            <motion.button 
              onClick={handleContactClick} 
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold hover:bg-white hover:text-aura-600 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander une Démo
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Garantie satisfait ou remboursé 30 jours
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Support technique inclus et formation équipe
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.1 }}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Déploiement en moins de 14 jours
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AIChatbotWhoItsFor;