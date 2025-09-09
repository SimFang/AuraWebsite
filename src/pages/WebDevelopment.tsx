import React from "react";
import Navbar from "@/components/Navbar";
import WebDevelopmentHero from "@/components/WebDevelopmentHero";
import WebDevelopmentTestimonials from "@/components/WebDevelopmentTestimonials";
import WebDevelopmentPromise from "@/components/WebDevelopmentPromise";
import WebDevelopmentCTA from "@/components/WebDevelopmentCTA";
import WebDevelopmentHowItWorks from "@/components/WebDevelopmentHowItWorks";
import WebDevelopmentWhoItsFor from "@/components/WebDevelopmentWhoItsFor";
import WebDevelopmentPricing from "@/components/WebDevelopmentPricing";
import WebDevelopmentPortfolio from "@/components/WebDevelopmentPortfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4 sm:space-y-8">
        <WebDevelopmentHero />
        <WebDevelopmentTestimonials />
        <WebDevelopmentPromise />
        <WebDevelopmentCTA />
        <WebDevelopmentHowItWorks />
        <WebDevelopmentWhoItsFor />
        <WebDevelopmentPortfolio />
        <WebDevelopmentPricing />
        <WebDevelopmentCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;