
import React, { createContext, useContext, ReactNode } from "react";

// Type for the context
type LocaleContextType = {
  t: (key: string) => any;
};

// Create context with default values
const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// French translations data
import { fr } from "@/translations/fr";

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Translation function - always uses French
  const t = (key: string): any => {
    // Get nested keys like "navbar.home"
    const keys = key.split(".");
    let result = fr;
    
    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Fallback to the key itself
      }
    }
    
    return result;
  };

  return (
    <LocaleContext.Provider value={{ t }}>
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
