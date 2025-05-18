
import React from "react";
import { useLocale } from "@/contexts/LocaleContext";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  backgroundImage: string;
}

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage
}: TestimonialProps) => {
  return (
    <div 
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" 
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="relative z-10">
        <p className="text-xl mb-8 font-medium leading-relaxed">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useLocale();
  
  const testimonials = t("testimonials.clients").map((client, index) => {
    return {
      content: client.content,
      author: client.author,
      role: client.role,
      backgroundImage: `/background-section${(index % 3) + 1}.png`
    };
  });
  
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-8">
          <div className="aura-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-aura-500 text-white mr-2">5</span>
            <span>{t("testimonials.whatOurClientsSay")}</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("testimonials.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role} 
              backgroundImage={testimonial.backgroundImage} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
