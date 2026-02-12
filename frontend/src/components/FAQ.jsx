// components/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  MessageCircle, 
  ChevronDown,
  Home,
  Shield,
  Utensils,
  IndianRupee,
  Calendar,
  MapPin,
  Wifi,
  Clock,
  Eye,
  Building2
} from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What are the rent charges for girls PG in Jagatpura Jaipur?",
      answer: "Our rent starts from ₹5,500/month for triple sharing, ₹6,500/month for double sharing, and ₹8,500/month for single occupancy. This includes all basic amenities like WiFi, electricity, water, and maintenance. Special discounts available for long-term stays and group bookings.",
      icon: <IndianRupee size={20} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      question: "Is Anand Luxury Girls Home safe and secure?",
      answer: "Yes, absolutely! We have 24/7 CCTV surveillance, biometric entry system, security guard at entrance, and separate access control. Each floor has fire safety equipment. We also maintain a strict visitor log and have emergency contact available 24/7. Parents can visit anytime without prior appointment.",
      icon: <Shield size={20} />,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      question: "What food arrangements are available?",
      answer: "We offer flexible food arrangements. You can choose between:\n\n• **Full Mess**: Breakfast, Lunch, Evening Snacks & Dinner - ₹2,800/month\n• **Half Mess**: Lunch & Dinner only - ₹2,200/month\n• **Self Cooking**: Fully equipped modular kitchen with RO water, gas, and utensils provided\n\nWeekly menu is shared every Sunday. Pure vegetarian food prepared in hygienic kitchen.",
      icon: <Utensils size={20} />,
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 4,
      question: "Are there any additional charges apart from rent?",
      answer: "No hidden charges! The rent includes:\n\n✅ High-speed WiFi\n✅ Electricity (up to reasonable usage)\n✅ Water & RO drinking water\n✅ Daily housekeeping\n✅ Maintenance\n✅ Geyser in all washrooms\n\nOnly extra charges: Food mess (optional), AC usage (metered, ₹3/unit), and personal laundry.",
      icon: <Home size={20} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 5,
      question: "What is the notice period and lock-in period?",
      answer: "• **Lock-in period**: 3 months minimum\n• **Notice period**: 1 month (30 days) before vacating\n• **Security deposit**: ₹5,000 (refundable after notice period)\n\nIf you need to leave before lock-in period, security deposit is adjusted with notice period amount. Early exit allowed in case of medical emergency.",
      icon: <Calendar size={20} />,
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 6,
      question: "Which colleges are near Anand Luxury Girls Home?",
      answer: "Our PG is centrally located in Jagatpura, near:\n\n• JECRC University - 2.5 km (10 min)\n• VIT Jaipur - 3 km (12 min)\n• University of Rajasthan - 4 km (15 min)\n• Jaipur National University - 3.5 km (12 min)\n• Poornima University - 4 km (15 min)\n• IIHMR University - 5 km (18 min)\n\nAuto-rickshaw and bus facility available 24/7.",
      icon: <Building2 size={20} />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 7,
      question: "What amenities are included in the rent?",
      answer: "Following amenities are included:\n\n✓ Fully furnished rooms with box bed & mattress\n✓ Wardrobe with mirror\n✓ Study table & chair\n✓ High-speed WiFi (100 Mbps)\n✓ RO drinking water\n✓ Daily housekeeping\n✓ 24/7 CCTV security\n✓ Geyser in all bathrooms\n✓ Power backup\n✓ Common TV area\n✓ Library/study room",
      icon: <Home size={20} />,
      color: "from-teal-500 to-green-500"
    },
    {
      id: 8,
      question: "Can I visit the PG before booking?",
      answer: "Yes, absolutely! We encourage all prospective residents to visit before booking. Visit timings: 10:00 AM to 7:00 PM (Monday to Saturday). Sunday visits by appointment only.\n\nTo schedule a visit: Call/WhatsApp at +91 63779 64494. Our caretaker will give you a complete tour of rooms, common areas, kitchen, and all facilities. Parents are most welcome to accompany.",
      icon: <Eye size={20} />,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 9,
      question: "Is WiFi included and how fast is it?",
      answer: "Yes, high-speed WiFi is included in the rent! We provide:\n\n• 100 Mbps fiber internet\n• Unlimited data (no FUP)\n• 24/7 connectivity\n• Dedicated router per floor\n• Backup connection also available\n\nPerfect for online classes, video calls, streaming, and downloads. WiFi password changed monthly for security.",
      icon: <Wifi size={20} />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 10,
      question: "Are there any restrictions on timings?",
      answer: "Yes, for safety and security:\n\n🚪 **Entry Time**: 6:00 AM to 10:30 PM\n🚪 **Exit Time**: 6:00 AM to 9:00 PM\n\n**Late Entry**: Allowed with prior information to warden (till 11:30 PM)\n**Night Out**: Requires written parental consent 24 hours in advance\n**Overnight Guests**: Not allowed\n\nThese rules are for everyone's safety and are strictly followed.",
      icon: <Clock size={20} />,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Category wise grouping for quick navigation
  const categories = [
    { name: "Pricing", icon: <IndianRupee size={16} />, color: "bg-green-100 text-green-600" },
    { name: "Safety", icon: <Shield size={16} />, color: "bg-red-100 text-red-600" },
    { name: "Food", icon: <Utensils size={16} />, color: "bg-orange-100 text-orange-600" },
    { name: "Amenities", icon: <Home size={16} />, color: "bg-blue-100 text-blue-600" },
    { name: "Location", icon: <MapPin size={16} />, color: "bg-purple-100 text-purple-600" }
  ];

  return (
    <section className="relative py-6 bg-gradient-to-b from-white via-pink-50/30 to-white overflow-hidden">
      
      {/* ===== ANIMATED BACKGROUND ELEMENTS (EXACTLY AS PROVIDED) ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles - Responsive sizes */}
        <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}></div>
        </div>

        {/* Animated Gradient Orbs - Responsive sizes */}
        <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

        {/* Additional floating elements - Responsive positioning */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-[#0b234a] to-[#E22213] rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ===== HEADER SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Animated Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 shadow-sm mb-6"
          >
            <div className="relative">
              <HelpCircle size={18} className="text-pink-500" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-pink-200 border-t-transparent"
              />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block text-gray-800">Got Questions?</span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="block mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-200 animate-gradient"
            >
              We've Got Answers
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Get answers to all your questions about our Girls PG in Jagatpura Jaipur
          </motion.p>
        </motion.div>

        {/* ===== QUICK CATEGORIES ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${category.color} border border-white/50 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              {category.icon}
              <span className="text-sm font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* ===== FAQ ACCORDION ===== */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div
                className={`bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  openIndex === index ? 'ring-2 ring-pink-500/20' : ''
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Icon with Gradient */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${faq.color} bg-opacity-10 flex items-center justify-center`}>
                      <div className="text-white">{faq.icon}</div>
                    </div>
                    
                    {/* Question Text */}
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 pr-4 flex-1">
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white rotate-180' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Answer Panel */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 md:px-8 md:pb-6 pt-2">
                        <div className="border-t border-gray-100 pt-4">
                          <div className="flex gap-4">
                            {/* Decorative Line */}
                            <div className={`flex-shrink-0 w-1 rounded-full bg-gradient-to-b ${faq.color}`}></div>
                            
                            {/* Answer Content */}
                            <div className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== STILL HAVE QUESTIONS? CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <MessageCircle size={40} className="text-white mx-auto mb-4 opacity-90" />
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Still Have Questions?
              </h3>
              
              <p className="text-white/90 text-base md:text-lg mb-6 max-w-xl mx-auto">
                Can't find what you're looking for? We're here to help!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/916377964494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-gray-800 font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle size={20} className="text-emerald-600" />
                  <span>WhatsApp Now</span>
                  <ChevronDown size={18} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="tel:+916377964494"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full text-white font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300"
                >
                  <span>Call: +91 63779 64494</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== QUICK SUPPORT BADGE ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-600">Typically replies within 5 minutes</span>
          </span>
        </motion.div>
      </div>

      {/* ===== CSS ANIMATIONS ===== */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
          75% {
            transform: translateY(-5px) translateX(5px);
          }
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.1);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .bg-size-200 {
          background-size: 200% auto;
        }
        
        .whitespace-pre-line {
          white-space: pre-line;
        }
      `}</style>
    </section>
  );
};

export default FAQ;