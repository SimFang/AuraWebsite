import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MessageCircle, Send, CheckCircle, MessageSquare, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';

const Contact: React.FC = () => {
  const { t } = useLocale();
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: searchParams.get('service') || '',
    message: ''
  });

  const services = [
    { value: 'webDevelopment', label: t('contact.services.webDevelopment') },
    { value: 'aiChatbot', label: t('contact.services.aiChatbot') },
    { value: 'callAnswerer', label: t('contact.services.callAnswerer') },
    { value: 'other', label: t('contact.services.other') }
  ];

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(t('contact.email.subject'));
    const body = encodeURIComponent(
      `${t('contact.email.name')}: ${formData.name || t('contact.email.notProvided')}\n` +
      `${t('contact.email.email')}: ${formData.email || t('contact.email.notProvided')}\n` +
      `${t('contact.email.company')}: ${formData.company || t('contact.email.notProvided')}\n` +
      `${t('contact.email.service')}: ${formData.service ? services.find(s => s.value === formData.service)?.label : t('contact.email.notSpecified')}\n\n` +
      `${t('contact.email.message')}:\n${formData.message || t('contact.email.generalInquiry')}`
    );
    
    window.location.href = `mailto:contact.websora@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Navbar />
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <div className="container px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4"
              >
                {t('contact.success.title')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-lg text-gray-600 mb-8"
              >
                {t('contact.success.message')}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('contact.success.sendAnother')}
              </motion.button>
            </motion.div>
          </div>
        </motion.main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 overflow-hidden">
      {/* Background decorations matching final CTA */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl" />
      </div>
      
      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative pt-20 pb-16"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white mr-2 text-xs font-bold">04</span>
              <span className="text-white/80">{t('contact.header.breadcrumb')}</span>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-tight px-4"
              style={{fontFamily: 'Brockmann, sans-serif'}}
            >
              <span className="font-extralight">{t('contact.header.title.part1')}</span>
              <br />
              <span className="font-medium bg-gradient-to-r from-blue-200 via-aura-200 to-purple-200 bg-clip-text text-transparent">
                {t('contact.header.title.part2')}
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 sm:mb-16 max-w-3xl mx-auto font-light leading-relaxed px-4"
            >
              {t('contact.header.subtitle')}
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 md:p-10"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {t('contact.form.title')}
                  </h2>
                </motion.div>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        {t('contact.form.fullName')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.form.fullNamePlaceholder')}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/20 bg-white/10 text-white placeholder-white/60 rounded-xl focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        {t('contact.form.emailAddress')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.form.emailPlaceholder')}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/20 bg-white/10 text-white placeholder-white/60 rounded-xl focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('contact.form.companyPlaceholder')}
                      className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/60 rounded-xl focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      {t('contact.form.serviceLabel')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200 backdrop-blur-sm rounded-xl text-sm sm:text-base"
                      style={{colorScheme: 'dark'}}
                    >
                      <option value="" className="bg-slate-800 text-white">{t('contact.form.serviceSelect')}</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value} className="bg-slate-800 text-white">
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/20 bg-white/10 text-white placeholder-white/60 rounded-xl focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200 backdrop-blur-sm resize-none text-sm sm:text-base"
                      required
                    />
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    type="submit"
                    className="w-full bg-white text-slate-900 hover:bg-slate-50 disabled:bg-white/60 disabled:text-slate-500 py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Send className="w-5 h-5" />
                    {t('contact.form.sendMessage')}
                  </motion.button>
                </form>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="space-y-6 sm:space-y-8"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-aura-500 to-aura-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {t('contact.info.emailTitle')}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 mb-3 sm:mb-4">{t('contact.info.emailDescription')}</p>
                  <a 
                    href="mailto:contact.websora@gmail.com" 
                    className="text-blue-300 hover:text-blue-200 font-semibold transition-colors duration-200"
                  >
                    contact.websora@gmail.com
                  </a>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-aura-500 to-aura-600 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {t('contact.info.responseTimeTitle')}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">{t('contact.info.responseTime')}</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-aura-500 to-aura-600 rounded-xl flex items-center justify-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {t('contact.whyChoose.title')}
                    </h3>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-300">
                    <li className="flex items-center gap-2">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-aura-500 flex-shrink-0" />
                      {t('contact.whyChoose.professional')}
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-aura-500 flex-shrink-0" />
                      {t('contact.whyChoose.dedicated')}
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-aura-500 flex-shrink-0" />
                      {t('contact.whyChoose.fastResponse')}
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Contact;