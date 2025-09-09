import React from "react";
import { motion } from "framer-motion";
import { Construction, Wrench } from "lucide-react";


const WebDevelopmentPortfolio = () => {

  return (
    <motion.section 
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-aura-100 text-aura-700 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nos Réalisations
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Projets en Vedette
          </h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explorez nos derniers projets de développement web mettant en avant un design moderne, une technologie de pointe et des expériences utilisateur exceptionnelles.
          </motion.p>
        </motion.div>

        {/* Building/Updating Message */}
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-aura-100 to-purple-100 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            animate={{ 
              rotate: [0, 360],
              transition: { 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
          >
            <Construction className="w-12 h-12 text-aura-600" />
          </motion.div>
          
          <motion.h3 
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Portfolio en Construction
          </motion.h3>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Nous mettons actuellement à jour notre portfolio avec de nouveaux projets passionnants. Revenez bientôt pour voir nos dernières réalisations en développement web !
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center gap-3 text-aura-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Wrench className="w-5 h-5" />
            <span className="font-medium">Construction de quelque chose d'extraordinaire...</span>
            <Wrench className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebDevelopmentPortfolio;