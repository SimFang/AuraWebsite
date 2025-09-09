import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import AIChatbotHero from "@/components/AIChatbotHero";
import AIChatbotHowItWorks from "@/components/AIChatbotHowItWorks";
import AIChatbotPromise from "@/components/AIChatbotPromise";
import AIChatbotWhoItsFor from "@/components/AIChatbotWhoItsFor";
import AIChatbotPricing from "@/components/AIChatbotPricing";
import AIChatbotTestimonials from "@/components/AIChatbotTestimonials";
import AIChatbotCTA from "@/components/AIChatbotCTA";
import Footer from "@/components/Footer";

const AIChatbot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AIChatbotHero />
        <AIChatbotHowItWorks />
        <AIChatbotPromise />
        <AIChatbotWhoItsFor />
        <AIChatbotPricing />
        <AIChatbotTestimonials />
        <AIChatbotCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AIChatbot;