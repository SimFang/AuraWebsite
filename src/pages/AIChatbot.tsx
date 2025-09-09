import React from "react";
import Navbar from "@/components/Navbar";
import AIChatbotHero from "@/components/AIChatbotHero";
import AIChatbotTestimonials from "@/components/AIChatbotTestimonials";
import AIChatbotPromise from "@/components/AIChatbotPromise";
import AIChatbotCTA from "@/components/AIChatbotCTA";
import AIChatbotHowItWorks from "@/components/AIChatbotHowItWorks";
import AIChatbotWhoItsFor from "@/components/AIChatbotWhoItsFor";
import AIChatbotPricing from "@/components/AIChatbotPricing";
import Footer from "@/components/Footer";

const AIChatbot = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4 sm:space-y-8">
        <AIChatbotHero />
        <AIChatbotTestimonials />
        <AIChatbotPromise />
        <AIChatbotCTA />
        <AIChatbotHowItWorks />
        <AIChatbotWhoItsFor />
        <AIChatbotPricing />
        <AIChatbotCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AIChatbot;