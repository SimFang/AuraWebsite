
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-8 border-t border-gray-200">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-gray-600 text-sm">
              Professional websites for €299. Fast, affordable, and high-quality web design for small businesses.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="#pricing" className="text-gray-600 hover:text-aura-500 text-sm">Basic Website</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-aura-500 text-sm">Custom Project</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-aura-500 text-sm">Optional Upgrades</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Email: <a href="mailto:aurasolutionagency@outlook.com" className="text-aura-500 hover:underline">aurasolutionagency@outlook.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Aura Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
