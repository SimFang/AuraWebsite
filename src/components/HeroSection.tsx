
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-4 leading-tight">
              Your Website.{" "}
              <span className="gradient-text">$299.</span>
              <br /> Delivered in 7 Days.
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              No calls. No meetings. Just results.
              <br />
              A real solution for emerging businesses that need to get online fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <a href="#contact">
                  Start Your Website Now{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#offer">{t("hero.seeIncluded")}</a>
              </Button>
            </div>
            <div className="flex items-center mt-8 bg-white/70 backdrop-blur-sm rounded-lg p-3 w-fit">
              <div className="bg-brand-blue/10 p-2 rounded-full">
                <Clock className="h-5 w-5 text-brand-blue" />
              </div>
              <p className="ml-3 text-sm font-medium">
                Next available delivery:{" "}
                <span className="font-bold">{getDeliveryDate()}</span>
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-xl overflow-hidden p-1 rotate-2 transform hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full overflow-hidden rounded-md bg-gray-100">
                {/* Mockup browser header */}
                <div className="h-6 bg-gray-200 flex items-center px-2 space-x-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                  <div className="ml-2 bg-white rounded h-3.5 w-40"></div>
                </div>
                <div className="p-4">
                  {/* Mockup website content */}
                  <div className="h-10 bg-brand-blue/20 rounded-md w-1/3 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded-md w-2/3 mb-6"></div>
                  <div className="h-8 bg-brand-blue rounded-md w-40 mb-8"></div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="aspect-square bg-gray-200 rounded-md"></div>
                    <div className="aspect-square bg-gray-200 rounded-md"></div>
                    <div className="aspect-square bg-gray-200 rounded-md"></div>
                  </div>
                  
                  <div className="h-4 bg-gray-200 rounded-md w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-5/6 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-4/6 mb-2"></div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-[9/16] bg-white rounded-lg shadow-xl overflow-hidden border-4 border-white -rotate-5 transform hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full overflow-hidden rounded-md bg-gray-100">
                {/* Mobile mockup header */}
                <div className="h-4 bg-gray-200 w-1/3 mx-auto rounded-b-md"></div>
                
                <div className="p-2">
                  {/* Mobile content */}
                  <div className="h-6 bg-brand-blue/20 rounded-md w-1/2 mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded-md w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded-md w-2/3 mb-3"></div>
                  <div className="h-6 bg-brand-blue rounded-md w-20 mb-4"></div>
                  
                  <div className="h-20 bg-gray-200 rounded-md mb-3"></div>
                  
                  <div className="h-3 bg-gray-200 rounded-md w-full mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded-md w-5/6 mb-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to calculate delivery date (7 days from now)
function getDeliveryDate() {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return date.toLocaleDateString('en-GB', { weekday: 'long', month: 'short', day: 'numeric' });
}

export default HeroSection;
