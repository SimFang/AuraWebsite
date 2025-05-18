
import React from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  backgroundImage: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Aura Solutions delivered exactly what we needed - a professional website at an affordable price. The process was quick and simple!",
    author: "Sarah Chen",
    role: "Boutique Owner",
    backgroundImage: "/background-section1.png"
  }, 
  {
    content: "I was amazed at how smooth the process was. In just a week, I had a beautiful website that perfectly represented my business.",
    author: "Michael Rodriguez",
    role: "Independent Consultant",
    backgroundImage: "/background-section2.png"
  }, 
  {
    content: "As a startup founder, I needed a website quickly without breaking the bank. Aura Solutions delivered beyond my expectations.",
    author: "Dr. Amara Patel",
    role: "Health Tech Startup",
    backgroundImage: "/background-section3.png"
  }, 
  {
    content: "The website they built for my small business looks like I paid thousands for it. Great value and professional service.",
    author: "Jason Lee",
    role: "Restaurant Owner",
    backgroundImage: "/background-section1.png"
  }
];

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
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-8">
          <div className="aura-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-aura-500 text-white mr-2">5</span>
            <span>What Our Clients Say</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Here's what businesses like yours have to say about their experience working with Aura Solutions.
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
