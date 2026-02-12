// components/ContactCTA.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  Clock, 
  ChevronRight,
  Heart,
  Home,
  Users,
  Star,
  CheckCircle,
  Copy,
  ExternalLink,
  ArrowRight,
  Send,
  Bell,
  AlertCircle,
  Navigation,
  Share2,
  Gift,
  Shield,
  Sparkles,
  ThumbsUp,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  const [copied, setCopied] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { icon: <Users size={20} />, value: '50+', label: 'Happy Girls' },
    { icon: <Star size={20} />, value: '4.9/5', label: 'Rating' },
    { icon: <Shield size={20} />, value: '100%', label: 'Safe Stay' },
    { icon: <Clock size={20} />, value: '24/7', label: 'Support' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="relative py-6 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 overflow-hidden">
      
      {/* ===== ANIMATED BACKGROUND ELEMENTS (EXACTLY AS PROVIDED) ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles - Responsive sizes */}
        <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px),
                        linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}></div>
        </div>

        {/* Animated Gradient Orbs - Responsive sizes */}
        <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

        {/* Additional floating elements - Responsive positioning */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-yellow-200 to-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-pink-200 to-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-particle ${8 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* ===== HEADER BADGE ===== */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg mb-6"
            >
              <div className="relative">
                <Sparkles size={18} className="text-white" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-full border-2 border-white/30 border-t-transparent"
                />
              </div>
              <span className="text-sm font-semibold text-white">
                Limited Time Offer
              </span>
              <Gift size={16} className="text-white" />
            </motion.div>
          </motion.div>

          {/* ===== STATS CARDS ===== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-3">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/80 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* ===== MAIN CTA GRID ===== */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                <Heart size={16} className="text-white fill-white" />
                <span className="text-sm font-semibold text-white">Limited Rooms Available</span>
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                  3 left
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Book Your 
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-white">
                  New Home?
                </span>
              </h2>
              
              <p className="text-white/90 text-lg">
                Only <span className="font-bold text-yellow-200">3 rooms</span> left for this month. 
                Book a visit now and get <span className="font-bold text-yellow-200">₹1000 off</span> on first month!
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <span className="text-white/90">Durgapura, Jaipur (Near Railway Station)</span>
                  <button 
                    onClick={() => handleCopy('Durgapura, Jaipur')}
                    className="ml-auto text-white/60 hover:text-white transition-colors"
                  >
                    {copied ? <CheckCircle size={16} className="text-green-300" /> : <Copy size={16} />}
                  </button>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Clock size={18} className="text-white" />
                  </div>
                  <span className="text-white/90">Visit anytime: 10:00 AM - 7:00 PM</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Users size={18} className="text-white" />
                  </div>
                  <span className="text-white/90">All girls community • Safe & secure</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3 pt-6">
                <a
                  href="https://maps.app.goo.gl/RxQ24kmjrVZh8F4LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/30 transition-all hover:scale-105"
                >
                  <Navigation size={16} />
                  <span className="text-sm">Directions</span>
                </a>
                <button
                  onClick={() => handleCopy('+916377964494')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/30 transition-all hover:scale-105"
                >
                  {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                  <span className="text-sm">{copied ? 'Copied!' : 'Copy Number'}</span>
                </button>
              </div>
            </motion.div>

            {/* Right Side - Contact Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Call Card */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <Phone size={26} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Call Now</p>
                      <h4 className="text-xl font-bold text-gray-800">+91 63779 64494</h4>
                      <p className="text-xs text-gray-500 mt-1">📞 24/7 Available</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopy('+916377964494')}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Copy size={18} />
                    </button>
                    <a 
                      href="tel:+916377964494"
                      className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                      <MessageCircle size={26} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
                      <h4 className="text-xl font-bold text-gray-800">Quick Response</h4>
                      <p className="text-xs text-gray-500 mt-1">⚡ Replies in 5 minutes</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopy('916377964494')}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Copy size={18} />
                    </button>
                    <a 
                      href="https://wa.me/916377964494?text=Hi!%20I'm%20interested%20in%20PG%20booking"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm flex items-center gap-2"
                    >
                      <Send size={14} />
                      Chat
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Book Visit Card */}
              {/* <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center shadow-lg">
                        <Calendar size={26} className="text-white" />
                      </div>
                      <div className="text-white">
                        <p className="text-xs opacity-90 font-medium">Limited Slots</p>
                        <h4 className="text-xl font-bold">Book Free Visit</h4>
                        <p className="text-xs opacity-90 mt-1">Get ₹1000 off</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowBookingForm(true)}
                      className="group flex items-center gap-2 px-5 py-2.5 bg-white text-orange-600 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <span>Book Now</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div> */}

              {/* Share Card */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Share2 size={18} className="text-white" />
                    <span className="text-sm text-white">Share this PG with friends</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                      <Heart size={16} className="text-white" />
                    </button>
                    <button className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                      <ThumbsUp size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ===== TRUST BADGES ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-4 mt-16"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Shield size={16} className="text-white" />
              <span className="text-xs text-white">Secure Booking</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <CheckCircle size={16} className="text-white" />
              <span className="text-xs text-white">No Advance Payment</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Users size={16} className="text-white" />
              <span className="text-xs text-white">50+ Happy Girls</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Star size={16} className="text-white" />
              <span className="text-xs text-white">4.9 ★ Rating</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== BOOKING FORM MODAL ===== */}
      {/* <AnimatePresence>
        {showBookingForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowBookingForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Book Free Visit</h3>
                    <p className="text-sm text-gray-500">Get ₹1000 off on first month</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visit Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visit Time
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                      <option value="">Select time</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Confirm Booking
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By booking, you agree to our terms and privacy policy
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* ===== COPY TOAST NOTIFICATION ===== */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50"
          >
            <CheckCircle size={18} className="text-green-400" />
            <span className="text-sm font-medium">Copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== CSS ANIMATIONS ===== */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(8px);
          }
          50% {
            transform: translateY(-25px) translateX(15px);
          }
          75% {
            transform: translateY(-10px) translateX(5px);
          }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
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
      `}</style>
    </section>
  );
};

export default ContactCTA;