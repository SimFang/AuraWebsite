import React from 'react';
import AIChatbotHero from './AIChatbotHero';
import AIChatbotPricing from './AIChatbotPricing';
import AIChatbotHowItWorks from './AIChatbotHowItWorks';
import AIChatbotPromise from './AIChatbotPromise';
import AIChatbotWhoItsFor from './AIChatbotWhoItsFor';
import AIChatbotTestimonials from './AIChatbotTestimonials';
import AIChatbotCTA from './AIChatbotCTA';

const AIChatbot = () => {
  return (
    <div className="min-h-screen bg-white">
      <AIChatbotHero />
      <AIChatbotHowItWorks />
      <AIChatbotPromise />
      <AIChatbotWhoItsFor />
      <AIChatbotPricing />
      <AIChatbotTestimonials />
      <AIChatbotCTA />
    </div>
  );
};

export default AIChatbot;