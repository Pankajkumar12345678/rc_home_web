// components/Rules.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Users, 
  Shield, 
  Bell, 
  Home, 
  AlertCircle,
  Check,
  X,
  Lock,
  Camera,
  Moon,
  Sun,
  UserPlus,
  DoorOpen,
  Phone,
  Flame,
  Ban,
  Volume2,
  Sparkles,
  Heart,
  ThumbsUp,
  Info
} from 'lucide-react';

const Rules = () => {
  const [expandedRule, setExpandedRule] = useState(null);
  const [agreed, setAgreed] = useState(false);

  const rules = [
    {
      id: 1,
      title: "Timings",
      icon: <Clock size={24} />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      stats: { value: "6 AM - 10 PM", label: "Entry Time" },
      items: [
        { text: "Entry: 6:00 AM - 10:00 PM", strict: true, icon: <DoorOpen size={14} /> },
        { text: "Exit: 6:00 AM - 9:00 PM", strict: true, icon: <DoorOpen size={14} /> },
        { text: "Late entry allowed with prior info", strict: false, icon: <Moon size={14} /> },
        { text: "Night out requires parental consent", strict: true, icon: <AlertCircle size={14} /> }
      ],
      description: "Timings are strictly enforced for everyone's safety. Late entry can be arranged with prior notice.",
      penalty: "Repeated late entry may lead to warning",
      emergency: "Emergency exits available 24/7"
    },
    {
      id: 2,
      title: "Guest Policy",
      icon: <Users size={24} />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      stats: { value: "Register", label: "Mandatory" },
      items: [
        { text: "Family allowed in common area", strict: false, icon: <Heart size={14} /> },
        { text: "Male guests not allowed in rooms", strict: true, icon: <Ban size={14} /> },
        { text: "Guest entry register mandatory", strict: true, icon: <UserPlus size={14} /> },
        { text: "No overnight guests", strict: true, icon: <Moon size={14} /> }
      ],
      description: "Guest policy ensures privacy and security for all residents.",
      penalty: "Unregistered guests will not be allowed entry",
      emergency: "Emergency contact for guest issues: +91 63779 64494"
    },
    {
      id: 3,
      title: "Safety & Security",
      icon: <Shield size={24} />,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      stats: { value: "24/7", label: "Surveillance" },
      items: [
        { text: "CCTV surveillance 24/7", strict: true, icon: <Camera size={14} /> },
        { text: "Visitor log mandatory", strict: true, icon: <Users size={14} /> },
        { text: "Emergency contact available", strict: false, icon: <Phone size={14} /> },
        { text: "Fire safety equipment installed", strict: true, icon: <Flame size={14} /> }
      ],
      description: "Multi-layer security system for complete peace of mind.",
      penalty: "Security violations may lead to immediate termination",
      emergency: "Emergency: Dial 100 (Police) or 101 (Fire)"
    },
    {
      id: 4,
      title: "House Rules",
      icon: <Home size={24} />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      stats: { value: "Clean", label: "Environment" },
      items: [
        { text: "No smoking or alcohol", strict: true, icon: <Ban size={14} /> },
        { text: "No loud music after 10 PM", strict: true, icon: <Volume2 size={14} /> },
        { text: "Common area cleanliness", strict: false, icon: <Sparkles size={14} /> },
        { text: "No cooking in rooms", strict: true, icon: <Flame size={14} /> }
      ],
      description: "Maintain a peaceful and clean living environment.",
      penalty: "Fine of ₹500 for damaging property",
      emergency: "Maintenance request: +91 63779 964494"
    }
  ];

  const quickStats = [
    { icon: <Shield size={20} />, value: "24/7", label: "Security", color: "from-red-500 to-pink-500" },
    { icon: <Camera size={20} />, value: "32+", label: "CCTV Cameras", color: "from-blue-500 to-cyan-500" },
    { icon: <Users size={20} />, value: "50+", label: "Happy Residents", color: "from-green-500 to-emerald-500" },
    { icon: <Clock size={20} />, value: "3+", label: "Years of Trust", color: "from-purple-500 to-violet-500" }
  ];

  const doList = [
    "Maintain cleanliness",
    "Respect others' privacy",
    "Inform warden about visitors",
    "Save emergency contacts",
    "Use common areas responsibly"
  ];

  const dontList = [
    "No loud noise after 10 PM",
    "No outside food in rooms",
    "No pets allowed",
    "No illegal activities",
    "No room sharing without permission"
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
    <section id="rules" className="relative py-6 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      
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

        {/* Rules-specific floating elements */}
        <div className="absolute top-2/3 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-100 to-slate-100 border border-gray-200 shadow-sm mb-6"
          >
            <div className="relative">
              <Lock size={18} className="text-gray-700" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-gray-300 border-t-transparent"
              />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-slate-700 bg-clip-text text-transparent">
              PG Guidelines & Rules
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block text-gray-800">Rules for a</span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="block mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500  bg-clip-text text-transparent bg-size-200 animate-gradient"
            >
              Safe & Happy Stay
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Clear guidelines for comfortable living and mutual respect
          </motion.p>
        </motion.div>

        {/* ===== QUICK STATS ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-gray-100 shadow-lg text-center"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== RULES GRID ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12"
        >
          {rules.map((rule, index) => (
            <motion.div
              key={rule.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div 
                className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 ${
                  expandedRule === index 
                    ? `border-${rule.color.split('-')[1]}-500 shadow-2xl ring-2 ring-${rule.color.split('-')[1]}-200` 
                    : 'border-gray-100 hover:border-gray-300 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setExpandedRule(expandedRule === index ? null : index)}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${rule.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${rule.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <div className="text-white">{rule.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{rule.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${rule.color.split('-')[1]}-100 text-${rule.color.split('-')[1]}-700`}>
                          {rule.stats.value}
                        </span>
                        <span className="text-xs text-gray-500">{rule.stats.label}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Indicator */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    expandedRule === index 
                      ? `bg-gradient-to-r ${rule.color} text-white rotate-180` 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {expandedRule === index ? <X size={16} /> : <Info size={16} />}
                  </div>
                </div>

                {/* Rules List */}
                <div className="space-y-3 mb-4">
                  {rule.items.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0.8 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        item.strict 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-green-100 text-green-600'
                      }`}>
                        {item.strict ? <X size={12} /> : <Check size={12} />}
                      </div>
                      <div className="flex-1 flex items-center gap-2">
                        <span className={`text-gray-700 text-sm ${item.strict ? 'font-medium' : ''}`}>
                          {item.text}
                        </span>
                        {item.strict && (
                          <span className="text-[10px] px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
                            Strict
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedRule === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
                        <p className="text-sm text-gray-600">
                          {rule.description}
                        </p>
                        <div className="bg-amber-50 rounded-lg p-3">
                          <p className="text-xs font-medium text-amber-800 flex items-center gap-2">
                            <AlertCircle size={14} />
                            {rule.penalty}
                          </p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-xs font-medium text-blue-800 flex items-center gap-2">
                            <Phone size={14} />
                            {rule.emergency}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click for {expandedRule === index ? 'less' : 'more'} info
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== DO'S AND DON'TS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Do's Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <ThumbsUp size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Do's ✅</h3>
              </div>
              <div className="space-y-3">
                {doList.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Don'ts Card */}
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-100 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center">
                  <Ban size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Don'ts ❌</h3>
              </div>
              <div className="space-y-3">
                {dontList.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <X size={14} className="text-red-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== AGREEMENT CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <AlertCircle size={28} className="text-white" />
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== CONTACT FOR RULES ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
            <Heart size={14} className="text-pink-500 fill-pink-500" />
            <span className="text-sm text-gray-600">For any queries about rules, contact warden: </span>
            <a href="tel:+916377964494" className="text-sm font-bold text-blue-600 hover:underline">
              +91 63779 64494
            </a>
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
      `}</style>
    </section>
  );
};

export default Rules;