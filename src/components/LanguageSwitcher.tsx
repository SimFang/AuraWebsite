
import React from "react";
import { Globe } from "lucide-react";
import { useLocale, Locale } from "@/contexts/LocaleContext";

const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useLocale();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "fr" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-gray-600 hover:text-aura-500 transition-colors"
      aria-label={locale === "en" ? "Switch to French" : "Passer à l'anglais"}
    >
      <Globe size={18} />
      <span className="text-sm font-medium">
        {locale === "en" ? t("language.fr") : t("language.en")}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
