
import React from "react";

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
  const testimonials = [
    {
      content: "Aura Web a transformé notre présence en ligne. Leur équipe professionnelle a livré un site web exceptionnel qui dépasse nos attentes.",
      author: "Marie Dubois",
      role: "Directrice Marketing",
      backgroundImage: "/background-section1.png"
    },
    {
      content: "Service client remarquable et expertise technique impressionnante. Je recommande vivement Aura Web pour tous vos projets digitaux.",
      author: "Pierre Martin",
      role: "CEO, TechStart",
      backgroundImage: "/background-section2.png"
    }
  ];
  
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-8">
          <div className="aura-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-aura-500 text-white mr-2">5</span>
            <span>Ce que disent nos clients</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
Des clients satisfaits, notre meilleure récompense
          </h2>
          <p className="text-lg text-gray-600">
Découvrez les témoignages de nos clients qui nous font confiance pour leurs projets digitaux.
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
