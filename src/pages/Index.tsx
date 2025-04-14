
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OfferSection from "@/components/OfferSection";
import ProcessSection from "@/components/ProcessSection";
import ComparisonTable from "@/components/ComparisonTable";
import TargetAudience from "@/components/TargetAudience";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <OfferSection />
      <ProcessSection />
      <ComparisonTable />
      <TargetAudience />
      <Testimonials />
      
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">
              {t("contact.title") || "Get Started"} <span className="gradient-text">{t("contact.titleHighlight") || "Today"}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              {t("contact.description") || "Download our requirements form, fill it out, and send it back to us."}
            </p>
            <p className="text-lg text-gray-600">
              {t("contact.subDescription") || "We'll handle the rest and deliver your website within 7 days."}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
