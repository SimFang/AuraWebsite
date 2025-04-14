
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I sent the form on Monday, my website was online by Friday — and it looks amazing!",
      name: "Sarah Johnson",
      business: "Freelance Photographer",
      stars: 5,
    },
    {
      quote: "No fuss, no meetings, just a clean professional website delivered within a week. Exactly what I needed.",
      name: "Michael Chen",
      business: "Local Restaurant Owner",
      stars: 5,
    },
    {
      quote: "After comparing many options, this was by far the best value for money. Quality work without breaking the bank.",
      name: "Emma Williams",
      business: "Startup Founder",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it — here's what businesses like yours say about our service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-6">
                  <p className="italic text-gray-700">"{testimonial.quote}"</p>
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
