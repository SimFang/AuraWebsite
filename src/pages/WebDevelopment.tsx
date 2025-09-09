import React from "react";
import Navbar from "@/components/Navbar";
import WebDevelopmentHero from "@/components/WebDevelopmentHero";
import WebDevelopmentHowItWorks from "@/components/WebDevelopmentHowItWorks";
import WebDevelopmentPromise from "@/components/WebDevelopmentPromise";
import WebDevelopmentWhoItsFor from "@/components/WebDevelopmentWhoItsFor";
import WebDevelopmentPricing from "@/components/WebDevelopmentPricing";
import WebDevelopmentTestimonials from "@/components/WebDevelopmentTestimonials";
import WebDevelopmentCTA from "@/components/WebDevelopmentCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4 sm:space-y-8">
        <WebDevelopmentHero />
        <WebDevelopmentHowItWorks />
        <WebDevelopmentPromise />
        <WebDevelopmentWhoItsFor />
        <WebDevelopmentPricing />
        <WebDevelopmentTestimonials />
        <WebDevelopmentCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;