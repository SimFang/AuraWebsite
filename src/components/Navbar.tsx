
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold gradient-text">AuraSolution</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#offer" className="text-gray-600 hover:text-brand-blue transition-colors">{t("nav.whatYouGet")}</a>
            <a href="#process" className="text-gray-600 hover:text-brand-blue transition-colors">{t("nav.howItWorks")}</a>
            <a href="#compare" className="text-gray-600 hover:text-brand-blue transition-colors">{t("nav.whyChooseUs")}</a>
            <a href="#faq" className="text-gray-600 hover:text-brand-blue transition-colors">{t("nav.faq")}</a>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue transition-colors">
                <Globe className="h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("fr")} className={language === "fr" ? "bg-muted" : ""}>
                  Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild>
              <a href="#contact">{t("nav.startWebsite")}</a>
            </Button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center justify-center p-2 rounded-md text-gray-700">
                <Globe className="h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("fr")} className={language === "fr" ? "bg-muted" : ""}>
                  Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a
              href="#offer"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue"
              onClick={toggleMenu}
            >
              {t("nav.whatYouGet")}
            </a>
            <a
              href="#process"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue"
              onClick={toggleMenu}
            >
              {t("nav.howItWorks")}
            </a>
            <a
              href="#compare"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue"
              onClick={toggleMenu}
            >
              {t("nav.whyChooseUs")}
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue"
              onClick={toggleMenu}
            >
              {t("nav.faq")}
            </a>
            <Button asChild className="w-full mt-3">
              <a href="#contact" onClick={toggleMenu}>{t("nav.startWebsite")}</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
