
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "When will I get charged?",
      answer:
        "You only pay after you've validated and approved the website. This ensures you're completely satisfied with our work before making any payment. The full €299 is only due once you're happy with the final result.",
    },
    {
      question: "What if I don't like the website you deliver?",
      answer:
        "We include one revision round with your €299 package. After delivery, you can request changes to ensure you're happy with your site. For significant redesigns beyond the revision, additional charges may apply.",
    },
    {
      question: "What if I don't have images or content ready?",
      answer:
        "We can help! We offer content creation as an add-on service. For €149, our copywriters can create professional text for your website. We also have resources for stock photos or can guide you on what content to prepare.",
    },
    {
      question: "Do I need to arrange hosting myself?",
      answer:
        "We can help set up hosting for you. We'll recommend affordable hosting options and can handle the technical setup. The hosting costs themselves are separate from our €299 fee and paid directly to the hosting provider.",
    },
    {
      question: "Can I update the website myself after it's built?",
      answer:
        "Yes! We build your site with user-friendly content management systems that allow you to make basic updates yourself. We also provide simple instructions to help you make common changes.",
    },
    {
      question: "How do I send you my materials for the website?",
      answer:
        "Simply download our requirements form and email it to aurasolutionagency@outlook.com along with your website materials. We'll start the development process once we receive your form and reach out within 7 days.",
    },
    {
      question: "What exactly is included in the €299 price?",
      answer:
        "The €299 package includes a custom homepage plus up to 3 additional pages, mobile-responsive design, basic SEO setup, content integration, and hosting assistance. The site will be delivered within 7 days of receiving your complete materials.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our website service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="max-w-xl mx-auto mt-12 text-center">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            We're happy to help with any questions you might have about our service.
          </p>
          <a
            href="mailto:aurasolutionagency@outlook.com"
            className="text-brand-blue hover:text-brand-teal transition-colors"
          >
            Email Us: aurasolutionagency@outlook.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
