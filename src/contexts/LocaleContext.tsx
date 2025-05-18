
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define available languages
export type Locale = "en" | "fr";

// Type for the context
type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

// Create context with default values
const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// Translations data
import { translations } from "@/translations";

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Get saved preference or default to English
  const [locale, setLocaleState] = useState<Locale>(() => {
    const savedLocale = localStorage.getItem("locale") as Locale;
    return savedLocale || "en";
  });

  // Save locale preference when it changes
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  // Function to set locale
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  // Translation function
  const t = (key: string): string => {
    // Get nested keys like "navbar.home"
    const keys = key.split(".");
    let result = translations[locale];
    
    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key} for locale: ${locale}`);
        return key; // Fallback to the key itself
      }
    }
    
    return result as string;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

// Custom hook to use the locale context
export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
