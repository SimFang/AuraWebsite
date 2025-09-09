import React from "react";
import Navbar from "@/components/Navbar";
import CallAnswererHero from "@/components/CallAnswererHero";
import CallAnswererHowItWorks from "@/components/CallAnswererHowItWorks";
import CallAnswererPromise from "@/components/CallAnswererPromise";
import CallAnswererWhoItsFor from "@/components/CallAnswererWhoItsFor";
import CallAnswererPricing from "@/components/CallAnswererPricing";
import CallAnswererTestimonials from "@/components/CallAnswererTestimonials";
import CallAnswererCTA from "@/components/CallAnswererCTA";
import Footer from "@/components/Footer";

const CallAnswerer = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4 sm:space-y-8">
        <CallAnswererHero />
        <CallAnswererHowItWorks />
        <CallAnswererPromise />
        <CallAnswererWhoItsFor />
        <CallAnswererPricing />
        <CallAnswererTestimonials />
        <CallAnswererCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CallAnswerer;