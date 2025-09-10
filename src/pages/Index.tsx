
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Users, Clock, Shield, Globe, Zap, Star, CheckCircle, Code, Bot, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-aura-50/50 via-blue-50/30 to-purple-50/50" />
        <motion.div 
          className="relative z-10 max-w-6xl mx-auto text-center px-4"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight leading-[0.95] sm:leading-[0.9]"
              style={{ fontFamily: 'Brockmann, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="font-extralight">Transformez votre vision.</span>
              <br />
              <span className="font-medium bg-gradient-to-r from-aura-600 to-purple-600 bg-clip-text text-transparent">
                Créez l'extraordinaire.
              </span>
              <br />
              <span className="font-light text-aura-700">
                Ensemble.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-12 sm:mb-16 max-w-3xl mx-auto font-light leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Des solutions digitales sur mesure qui propulsent votre entreprise vers de nouveaux sommets d'innovation et de performance.
            </motion.p>
            
            <motion.div 
              className="flex justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => {
                  const servicesSection = document.getElementById('services-section');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                En savoir plus
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Subtle background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aura-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      </section>

      {/* Outcomes Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-aura-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight px-4" style={{ fontFamily: 'Brockmann, sans-serif' }}>
              <span className="font-extralight">Résultats qui</span>
              <br />
              <span className="font-medium bg-gradient-to-r from-aura-600 to-purple-600 bg-clip-text text-transparent">
                comptent vraiment
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Nous créons des solutions qui génèrent un impact mesurable et durable pour votre entreprise.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                icon: Users,
                title: "Expérience Utilisateur Exceptionnelle",
                description: "Des interfaces intuitives qui captivent vos utilisateurs et augmentent l'engagement de 300%.",
                gradient: 'from-blue-500/10 to-indigo-500/10'
              },
              {
                icon: Clock,
                title: "Livraison Rapide et Fiable",
                description: "Développement agile avec des délais respectés et une qualité irréprochable à chaque étape.",
                gradient: 'from-indigo-500/10 to-purple-500/10'
              },
              {
                icon: Shield,
                title: "Sécurité et Performance",
                description: "Solutions robustes avec sécurité renforcée et performances optimisées pour une croissance durable.",
                gradient: 'from-purple-500/10 to-pink-500/10'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`group text-center p-10 rounded-3xl bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50`}
                >
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-6 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                  <motion.div
                    className="mt-6 w-12 h-0.5 bg-gradient-to-r from-slate-300 to-slate-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-section" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight px-4" style={{ fontFamily: 'Brockmann, sans-serif' }}>
              <span className="font-extralight">Nos</span>
              <br />
              <span className="font-medium bg-gradient-to-r from-aura-600 to-purple-600 bg-clip-text text-transparent">
                Services Experts
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Des solutions technologiques innovantes adaptées à vos besoins spécifiques.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 rounded-3xl border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/30 overflow-hidden cursor-pointer"
              onClick={() => navigate('/web-development')}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-2xl transform translate-x-6 -translate-y-6" />
              
              <motion.div 
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                >
                  <Globe className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                  Développement Web
                </h3>
                
                <p className="text-slate-600 mb-6 font-light leading-relaxed">
                  Sites web modernes, applications performantes et expériences utilisateur exceptionnelles.
                </p>
                
                <Button className="w-full bg-aura-600 hover:bg-aura-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-aura-600/20">
                  Découvrir
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
            
            {/* AI Chatbot */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-8 rounded-3xl border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-200/30 overflow-hidden cursor-pointer"
              onClick={() => navigate('/ai-chatbot')}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full blur-2xl transform translate-x-6 -translate-y-6" />
              
              <motion.div 
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                >
                  <Bot className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                  Chatbot IA
                </h3>
                
                <p className="text-slate-600 mb-6 font-light leading-relaxed">
                  Assistants virtuels intelligents pour automatiser votre service client 24/7.
                </p>
                
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-indigo-600/20">
                  Explorer
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Auto Caller */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-to-br from-purple-50/50 to-pink-50/50 p-8 rounded-3xl border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/30 overflow-hidden cursor-pointer"
              onClick={() => navigate('/call-answerer')}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-2xl transform translate-x-6 -translate-y-6" />
              
              <motion.div 
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                >
                  <Phone className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                  Répondeur Automatique
                </h3>
                
                <p className="text-slate-600 mb-6 font-light leading-relaxed">
                  Solutions d'appels automatisées pour ne jamais manquer un client potentiel.
                </p>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-purple-600/20">
                  Commencer
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Final Call-to-Action */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-tight px-4"
              style={{ fontFamily: 'Brockmann, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="font-extralight">Prêt à</span>
              <br />
              <span className="font-medium bg-gradient-to-r from-blue-200 via-aura-200 to-purple-200 bg-clip-text text-transparent">
                transformer votre vision?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 sm:mb-16 max-w-3xl mx-auto font-light leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-white text-aura-900 hover:bg-aura-50 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20 group w-full sm:w-auto max-w-xs sm:max-w-none"
              >
Commencer maintenant
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="ghost"
                onClick={() => navigate('/services')}
                className="text-white hover:text-aura-200 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5 backdrop-blur-sm group w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                En savoir plus
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 opacity-60 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-light text-white mb-1">500+</div>
                <div className="text-xs sm:text-sm text-slate-400 font-light">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-light text-white mb-1">98%</div>
                <div className="text-xs sm:text-sm text-slate-400 font-light">Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-light text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-slate-400 font-light">Support disponible</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
