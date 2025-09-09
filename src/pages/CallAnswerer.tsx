import React from "react";
import Navbar from "@/components/Navbar";
import CallAnswererHero from "@/components/CallAnswererHero";
import CallAnswererTestimonials from "@/components/CallAnswererTestimonials";
import CallAnswererPromise from "@/components/CallAnswererPromise";
import CallAnswererCTA from "@/components/CallAnswererCTA";
import CallAnswererHowItWorks from "@/components/CallAnswererHowItWorks";
import CallAnswererWhoItsFor from "@/components/CallAnswererWhoItsFor";
import CallAnswererPricing from "@/components/CallAnswererPricing";
import Footer from "@/components/Footer";

const CallAnswerer = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4 sm:space-y-8">
        <CallAnswererHero />
        <CallAnswererTestimonials />
        <CallAnswererPromise />
        <CallAnswererCTA />
        <CallAnswererHowItWorks />
        <CallAnswererWhoItsFor />
        <CallAnswererPricing />
        <CallAnswererCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CallAnswerer;