
import React from "react";
import { Phone, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AuraSolution</h3>
            <p className="text-gray-300">
              Professional websites for $299.<br />
              Delivered in 7 days. No calls needed.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#offer" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.whatYouGet")}
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.howItWorks")}
                </a>
              </li>
              <li>
                <a href="#compare" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.whyChooseUs")}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.faq")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.startWebsite")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:aurasolutionagency@outlook.com" className="text-gray-300 hover:text-white transition-colors">
                  aurasolutionagency@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {currentYear} AuraSolution. {t("footer.copyright")}</p>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-white mx-2 text-sm">{t("footer.privacyPolicy")}</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2 text-sm">{t("footer.termsOfService")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
