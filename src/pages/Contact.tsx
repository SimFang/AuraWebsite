import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const Contact = () => {
  const { t } = useLocale();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { value: "web-development", label: t('contact.services.webDevelopment') },
    { value: "ai-chatbot", label: t('contact.services.aiChatbot') },
    { value: "call-answerer", label: t('contact.services.callAnswerer') },
    { value: "other", label: t('contact.services.other') }
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `${t('contact.email.subject')} - ${formData.service ? services.find(s => s.value === formData.service)?.label : t('contact.email.generalInquiry')}`;
    const body = `${t('contact.email.name')}: ${formData.name}\n${t('contact.email.email')}: ${formData.email}\n${t('contact.email.company')}: ${formData.company || t('contact.email.notProvided')}\n${t('contact.email.service')}: ${formData.service ? services.find(s => s.value === formData.service)?.label : t('contact.email.notSpecified')}\n\n${t('contact.email.message')}:\n${formData.message}`;
    
    // Open email client
    window.location.href = `mailto:contact.websora@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold mb-4">{t('contact.success.title')}</h1>
              <p className="text-gray-600 mb-6">
                {t('contact.success.message')}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                {t('contact.success.fallback')}
                <a href="mailto:contact.websora@gmail.com" className="text-aura-500 hover:underline ml-1">
                  contact.websora@gmail.com
                </a>
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-aura-500 hover:bg-aura-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                {t('contact.success.sendAnother')}
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 mt-32">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'Brockmann, sans-serif' }}>
              {t('contact.header.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('contact.header.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fullName')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aura-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.form.fullNamePlaceholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.emailAddress')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aura-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aura-500 focus:border-transparent transition-colors"
                      placeholder={t('contact.form.companyPlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.serviceOfInterest')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aura-500 focus:border-transparent transition-colors"
                    >
                      <option value="">{t('contact.form.selectService')}</option>
                      {services.map(service => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aura-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-aura-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.form.sendMessage')}
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-aura-500 to-purple-600 text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{t('contact.info.email')}</h4>
                        <a href="mailto:contact.websora@gmail.com" className="text-white/90 hover:text-white transition-colors">
                          contact.websora@gmail.com
                        </a>
                        <p className="text-white/70 text-sm mt-1">{t('contact.info.responseTime')}</p>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">{t('contact.whyChoose.title')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{t('contact.whyChoose.fastResponse')}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{t('contact.whyChoose.professional')}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{t('contact.whyChoose.transparent')}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{t('contact.whyChoose.dedicated')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;