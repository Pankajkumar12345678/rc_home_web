// components/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Heart, 
  ThumbsUp,
  MessageCircle,
  ExternalLink,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Neha Verma",
    qualification: "B.Sc Nursing, RUHS Jaipur",
    text: "RC Homes has given me a safe and peaceful environment to focus on my studies. The cleanliness and security here are truly impressive. My parents feel relaxed knowing I stay here.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    stayDuration: "7+ months",
    verified: true
  },
  {
    id: 2,
    name: "Ishita Mehta",
    qualification: "MBA, JECRC University",
    text: "The best part about RC Homes is the friendly and homely atmosphere. The rooms are well-maintained and the WiFi speed is great for online classes and projects.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    stayDuration: "9+ months",
    verified: true
  },
  {
    id: 3,
    name: "Pooja Yadav",
    qualification: "BCA, Poornima University",
    text: "I shifted here from another PG and the difference is huge. Daily cleaning, attached washrooms, and safety measures make this place totally worth it.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    stayDuration: "5+ months",
    verified: true
  },
  {
    id: 4,
    name: "Simran Kaur",
    qualification: "IELTS Student",
    text: "Very calm and study-friendly environment. I especially like the security and the supportive management. It really feels like a second home.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    stayDuration: "6+ months",
    verified: true
  },
  {
    id: 5,
    name: "Ananya Sharma",
    qualification: "Working Professional (IT)",
    text: "Perfect place for working girls. Power backup, fast internet, and prime location make daily life very convenient. Highly recommended.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    stayDuration: "11+ months",
    verified: true
  }
];


  // Stats data
  const stats = [
    { icon: <Users size={24} />, value: '200+', label: 'Happy Residents' },
    { icon: <Star size={24} />, value: '4.9/5', label: 'Rating' },
    { icon: <MessageCircle size={24} />, value: '275+', label: 'Reviews' }
  ];

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    })
  };

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
              <Heart size={18} className="text-pink-500 fill-pink-500" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-pink-200 border-t-transparent"
              />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              What Our Happy Residents Say
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block text-gray-800">Don't just take our word for it.</span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="block mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500  bg-clip-text text-transparent bg-size-200 animate-gradient"
            >
              Here's what our satisfied residents say
            </motion.span>
          </h1>
        </motion.div>

        {/* ===== STATS CARDS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 md:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== MAIN TESTIMONIAL SLIDER ===== */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
            <button
              onClick={prevTestimonial}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl items-center justify-center text-gray-600 hover:text-pink-600 transition-all duration-300 z-20 border border-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl items-center justify-center text-gray-600 hover:text-pink-600 transition-all duration-300 z-20 border border-gray-100"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial Card */}
            <div className="relative overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100"
                >
                  <div className="grid lg:grid-cols-5 gap-6 md:gap-8 items-start">
                    
                    {/* Left Column - User Info */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                      <div className="relative inline-block">
                        {/* Profile Image */}
                        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto lg:mx-0">
                          <img
                            src={testimonials[activeIndex].image}
                            alt={testimonials[activeIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Verified Badge */}
                        {testimonials[activeIndex].verified && (
                          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-1.5 shadow-lg">
                            <CheckCircle size={18} className="text-white fill-white" />
                          </div>
                        )}
                        
                        {/* Rating Badge */}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full px-2.5 py-1 shadow-lg">
                          <div className="flex items-center gap-1">
                            <Star size={12} className="text-white fill-white" />
                            <span className="text-xs font-bold text-white">5.0</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 lg:mt-6">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                          {testimonials[activeIndex].name}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 mt-1">
                          {testimonials[activeIndex].qualification}
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 mt-3">
                          <Heart size={14} className="text-pink-500 fill-pink-500" />
                          <span className="text-xs font-medium text-pink-600">
                            Staying {testimonials[activeIndex].stayDuration}
                          </span>
                        </div>
                      </div>

                      {/* Rating Stars - Mobile */}
                      <div className="flex justify-center lg:justify-start gap-1 mt-4 lg:hidden">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Testimonial Content */}
                    <div className="lg:col-span-3">
                      {/* Quote Icon */}
                      <Quote size={40} className="text-pink-200 mb-4" />
                      
                      {/* Rating Stars - Desktop */}
                      <div className="hidden lg:flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        "{testimonials[activeIndex].text}"
                      </p>

                      {/* Verified Badge Text */}
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Verified Google Review</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Navigation - Mobile & Desktop */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                    setAutoplay(false);
                  }}
                  className={`transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 h-2.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full' 
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 rounded-full'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>


        {/* ===== BOOK NOW CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
  href="https://wa.me/916377964494"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
>
  <ThumbsUp size={20} />
  <span>Book Online Now</span>
  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
</a>

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
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;