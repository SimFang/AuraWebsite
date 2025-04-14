
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.whatYouGet": "What You Get",
    "nav.howItWorks": "How It Works",
    "nav.whyChooseUs": "Why Choose Us",
    "nav.faq": "FAQ",
    "nav.startWebsite": "Start Your Website",
    
    // Hero Section
    "hero.title": "Your Website. €299. Delivered in 7 Days.",
    "hero.subtitle": "No calls. No meetings. Just results.",
    "hero.description": "A real solution for emerging businesses that need to get online fast.",
    "hero.cta": "Start Your Website Now",
    "hero.seeIncluded": "See What's Included",
    
    // Contact Form
    "contact.title": "Ready to",
    "contact.titleHighlight": "Get Started?",
    "contact.description": "Fill out the form below and we'll have your website ready within 7 days.",
    "contact.downloadFormTitle": "Step 1: Download the Requirements Form",
    "contact.downloadFormDescription": "Please download our requirements form to provide all the necessary details for your website.",
    "contact.downloadForm": "Download Form",
    "contact.submitFormTitle": "Step 2: Submit Your Completed Form",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.businessName": "Business Name",
    "contact.businessType": "Business Type",
    "contact.additionalInfo": "Additional Information",
    "contact.attachForm": "Attach Completed Form",
    "contact.sendForm": "Send Form & Start My €299 Website",
    "contact.emailNotice": "By submitting this form, your information and attached document will be sent to aurasolutionagency@outlook.com",
    "contact.formDownloaded": "Form downloaded successfully!",
    "contact.onlyin2steps": "Only in two steps!",
    "contact.noFileError": "Please attach the completed form",
    "contact.selectBusinessType": "Select your business type",
    "contact.localBusiness": "Local Business",
    "contact.startup": "Startup",
    "contact.freelancer": "Freelancer/Creator",
    "contact.onlineStore": "Online Store (E-commerce)",
    "contact.other": "Other",
    "contact.messagePlaceholder": "Add any specific details or questions about your website needs",
    "contact.chooseFile": "Choose File",
    "contact.acceptedFileTypes": "Accepted file types: PDF, DOC, DOCX, JPG, PNG",
    "contact.sending": "Sending...",
    "contact.timelineNotice": "Once we receive all your materials, your website will be ready within 7 days.",
    "contact.subDescription": "We'll review your requirements and get back to you within 7 days. You only pay after approving the final website.",
    
    // Footer
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.copyright": "All rights reserved.",
    
    // FAQ
    "faq.title": "Frequently Asked Questions"
  },
  fr: {
    // Navigation
    "nav.whatYouGet": "Ce Que Vous Obtenez",
    "nav.howItWorks": "Comment Ça Marche",
    "nav.whyChooseUs": "Pourquoi Nous Choisir",
    "nav.faq": "FAQ",
    "nav.startWebsite": "Commencer Votre Site",
    
    // Hero Section
    "hero.title": "Votre Site Web. 299€. Livré en 7 Jours.",
    "hero.subtitle": "Pas d'appels. Pas de réunions. Juste des résultats.",
    "hero.description": "Une solution réelle pour les entreprises émergentes qui ont besoin d'être en ligne rapidement.",
    "hero.cta": "Commencer Votre Site Maintenant",
    "hero.seeIncluded": "Voir Ce Qui Est Inclus",
    
    // Contact Form
    "contact.title": "Prêt à",
    "contact.titleHighlight": "Commencer?",
    "contact.description": "Remplissez le formulaire ci-dessous et nous aurons votre site web prêt dans les 7 jours.",
    "contact.downloadFormTitle": "Étape 1: Télécharger le Formulaire de Besoins",
    "contact.downloadFormDescription": "Veuillez télécharger notre formulaire de besoins pour fournir tous les détails nécessaires pour votre site web.",
    "contact.downloadForm": "Télécharger le Formulaire",
    "contact.submitFormTitle": "Étape 2: Soumettre Votre Formulaire Complété",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.businessName": "Nom de l'Entreprise",
    "contact.businessType": "Type d'Entreprise",
    "contact.additionalInfo": "Informations Supplémentaires",
    "contact.attachForm": "Joindre le Formulaire Complété",
    "contact.sendForm": "Envoyer le Formulaire & Commencer Mon Site Web à 299€",
    "contact.emailNotice": "En soumettant ce formulaire, vos informations et le document joint seront envoyés à aurasolutionagency@outlook.com",
    "contact.formDownloaded": "Formulaire téléchargé avec succès!",
    "contact.onlyin2steps": "En deux étapes seulement!",
    "contact.noFileError": "Veuillez joindre le formulaire complété",
    "contact.selectBusinessType": "Sélectionnez votre type d'entreprise",
    "contact.localBusiness": "Entreprise Locale",
    "contact.startup": "Startup",
    "contact.freelancer": "Freelance/Créateur",
    "contact.onlineStore": "Boutique en Ligne (E-commerce)",
    "contact.other": "Autre",
    "contact.messagePlaceholder": "Ajoutez des détails spécifiques ou des questions sur vos besoins en matière de site web",
    "contact.chooseFile": "Choisir un Fichier",
    "contact.acceptedFileTypes": "Types de fichiers acceptés : PDF, DOC, DOCX, JPG, PNG",
    "contact.sending": "Envoi en cours...",
    "contact.timelineNotice": "Une fois que nous aurons reçu tous vos documents, votre site web sera prêt dans les 7 jours.",
    "contact.subDescription": "Nous examinerons vos besoins et vous répondrons dans les 7 jours. Vous ne payez qu'après avoir approuvé le site web final.",
    
    // Footer
    "footer.privacyPolicy": "Politique de Confidentialité",
    "footer.termsOfService": "Conditions d'Utilisation",
    "footer.copyright": "Tous droits réservés.",
    
    // FAQ
    "faq.title": "Questions Fréquemment Posées"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
