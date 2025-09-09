
import React from "react";
import { Code, Smartphone, Bot, Globe, Zap, Shield } from "lucide-react";

const Footer = () => {
  
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 to-gray-800 py-12 text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold text-white">Websora</h3>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Solutions technologiques innovantes pour transformer votre présence numérique. Spécialisés dans le développement web, les chatbots IA et l'automatisation.
            </p>
            
            {/* Tech Tools */}
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-aura-400 text-sm flex items-center transition-colors"><Globe className="w-4 h-4 mr-2" />Développement Web</a></li>
              <li><a href="/ai-chatbot" className="text-gray-300 hover:text-aura-400 text-sm flex items-center transition-colors"><Bot className="w-4 h-4 mr-2" />Chatbots IA</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-aura-400 text-sm flex items-center transition-colors"><Smartphone className="w-4 h-4 mr-2" />Applications Mobile</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-aura-400 text-sm flex items-center transition-colors"><Zap className="w-4 h-4 mr-2" />Automatisation</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="text-gray-300 text-sm">
                <span className="block mb-1">Email</span>
                <a href="mailto:contact.websora@gmail.com" className="text-aura-400 hover:text-aura-300 transition-colors">contact.websora@gmail.com</a>
              </div>
              <div className="text-gray-300 text-sm">
                <span className="block mb-1">Expertise</span>
                <span className="text-gray-400">Solutions Technologiques & Innovation Numérique</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Websora. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
