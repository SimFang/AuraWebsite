
import React from "react";
import { useLocale } from "@/contexts/LocaleContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const { t } = useLocale();
  
  return (
    <footer className="w-full bg-gray-100 py-8 border-t border-gray-200">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-gray-600 text-sm">
              {t("footer.description")}
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li><a href="#pricing" className="text-gray-600 hover:text-aura-500 text-sm">{t("footer.servicesLinks.basicWebsite")}</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-aura-500 text-sm">{t("footer.servicesLinks.customProject")}</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-aura-500 text-sm">{t("footer.servicesLinks.optionalUpgrades")}</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">{t("footer.contact")}</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">{t("footer.email")} <a href="mailto:contact.websora@gmail.com" className="text-aura-500 hover:underline">contact.websora@gmail.com</a></li>
            </ul>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            {t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
