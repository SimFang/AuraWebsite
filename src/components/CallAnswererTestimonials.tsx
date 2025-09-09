import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Quote, TrendingUp, Clock, DollarSign, Users, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const CallAnswererTestimonials = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact?service=call-answerer');
  };
  
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      company: "Golden Dragon Bistro",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Our AI call answerer handles reservations perfectly, even during our busiest hours. We never miss a booking anymore, and customers love the instant response. It's like having a dedicated receptionist 24/7.",
      metrics: {
        improvement: "95% of calls answered instantly",
        roi: "$25k additional bookings monthly",
        satisfaction: "4.9/5 customer satisfaction"
      },
      industry: "Restaurant",
      rating: 5
    },
    {
      name: "Dr. Sarah Martinez",
      role: "Practice Manager",
      company: "HealthFirst Medical Center",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      content: "The AI handles appointment scheduling, prescription refills, and basic inquiries flawlessly. Our staff can focus on patient care while the system manages routine calls with medical-grade accuracy.",
      metrics: {
        improvement: "80% reduction in missed calls",
        roi: "$40k annual staff savings",
        satisfaction: "98% appointment accuracy"
      },
      industry: "Healthcare",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Service Manager",
      company: "ProFix Home Services",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Emergency calls are handled immediately, even at 3 AM. The AI schedules service appointments, provides quotes, and handles customer inquiries. Our response time has improved dramatically.",
      metrics: {
        improvement: "24/7 emergency response",
        roi: "60% increase in bookings",
        satisfaction: "4.8/5 service rating"
      },
      industry: "Home Services",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Salon Owner",
      company: "Elegance Beauty Spa",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Booking appointments has never been easier for our clients. The AI knows our services, pricing, and availability perfectly. We've eliminated double bookings and our schedule is always optimized.",
      metrics: {
        improvement: "Zero double bookings",
        roi: "$18k monthly revenue increase",
        satisfaction: "4.9/5 booking experience"
      },
      industry: "Beauty & Wellness",
      rating: 5
    },
    {
      name: "Robert Davis",
      role: "Property Manager",
      company: "Elite Real Estate",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "Property inquiries are handled instantly, viewings are scheduled automatically, and tenant requests are processed efficiently. Our conversion rate has increased significantly since implementation.",
      metrics: {
        improvement: "50% faster response time",
        roi: "$75k additional sales",
        satisfaction: "4.7/5 client satisfaction"
      },
      industry: "Real Estate",
      rating: 5
    },
    {
      name: "Amanda Foster",
      role: "Clinic Director",
      company: "VetCare Animal Hospital",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Pet emergencies require immediate attention. Our AI call answerer triages calls perfectly, schedules appointments, and provides basic care guidance. Pet owners feel heard and cared for instantly.",
      metrics: {
        improvement: "100% emergency call coverage",
        roi: "$30k cost reduction",
        satisfaction: "4.8/5 owner satisfaction"
      },
      industry: "Veterinary",
      rating: 5
    }
  ];

  const stats = [
    {
      number: "5,000+",
      label: "Businesses Served",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "2M+",
      label: "Calls Answered",
      icon: Phone,
      color: "from-green-500 to-green-600"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: Clock,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "$50M+",
      label: "Revenue Generated",
      icon: DollarSign,
      color: "from-aura-500 to-aura-600"
    }
  ];

  return (
    <motion.section 
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-aura-100 text-aura-700 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Star className="w-4 h-4 mr-2" />
            Customer Success Stories
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8" 
            style={{ fontFamily: 'Brockmann, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-600 to-purple-600">
              Real Results from Real Businesses
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover how businesses across industries have transformed their customer service and boosted revenue with our AI call answering solution.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-4`}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-aura-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Metrics */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">{testimonial.metrics.improvement}</span>
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">{testimonial.metrics.roi}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-gray-600">{testimonial.metrics.satisfaction}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-aura-600">{testimonial.company}</div>
                </div>
              </div>

              {/* Industry Badge */}
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-aura-100 text-aura-700 text-xs font-medium">
                  {testimonial.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-gray-900 mb-8" 
            style={{ fontFamily: 'Brockmann, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join Thousands of Businesses Never Missing a Call
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">99%</div>
              <div className="text-sm text-gray-600">Call Answer Rate</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">2hrs</div>
              <div className="text-sm text-gray-600">Average Setup Time</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-2xl font-bold text-aura-600 mb-1">250%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-aura-500 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Start Answering Every Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            <motion.button 
              onClick={handleContactClick}
              className="border-2 border-aura-500 text-aura-600 px-10 py-5 rounded-xl font-semibold hover:bg-aura-50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Read More Success Stories
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallAnswererTestimonials;