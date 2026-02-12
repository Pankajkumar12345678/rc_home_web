// components/FoodSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Utensils, 
  Coffee, 
  Sun, 
  Moon, 
  CheckCircle, 
  Heart, 
  Sparkles,
  Clock,
  ChefHat,
  Leaf,
  Award,
  ThumbsUp,
  Star,
  Bell,
  Calendar,
  Cherry
} from 'lucide-react';

const FoodSection = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [hoveredHighlight, setHoveredHighlight] = useState(null);

  const meals = [
    {
      name: "Breakfast",
      time: "8:00 - 9:30 AM",
      items: ["Paratha with Butter", "Poha with Sev", "Sandwich", "Tea/Coffee/Milk"],
      icon: <Coffee size={24} />,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      description: "Start your day with fresh, healthy breakfast",
      popular: "Aloo Paratha",
      calories: "450-550 cal"
    },
    {
      name: "Lunch",
      time: "1:00 - 2:30 PM",
      items: ["Roti/Paratha", "Seasonal Sabzi", "Dal Tadka", "Steamed Rice", "Green Salad", "Papad"],
      icon: <Sun size={24} />,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      description: "Complete balanced meal for your day",
      popular: "Dal Makhani",
      calories: "600-700 cal"
    },
    {
      name: "Dinner",
      time: "8:00 - 9:30 PM",
      items: ["Roti/Paratha", "Sabzi", "Dal", "Rice", "Salad", "Papad", "Sweet Dish"],
      icon: <Moon size={24} />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      description: "Light yet fulfilling dinner",
      popular: "Veg Biryani",
      calories: "550-650 cal"
    }
  ];

  const highlights = [
    { text: "Pure Vegetarian", icon: <Leaf size={16} />, color: "from-green-500 to-emerald-500" },
    { text: "RO Water", icon: <CheckCircle size={16} />, color: "from-blue-500 to-cyan-500" },
    { text: "Hygienic Kitchen", icon: <ChefHat size={16} />, color: "from-red-500 to-pink-500" },
    { text: "Weekly Menu", icon: <Calendar size={16} />, color: "from-purple-500 to-violet-500" },
    { text: "Snacks Available", icon: <Coffee size={16} />, color: "from-amber-500 to-orange-500" },
    { text: "Festival Specials", icon: <Sparkles size={16} />, color: "from-pink-500 to-rose-500" },
    { text: "Homemade Style", icon: <Heart size={16} />, color: "from-red-500 to-rose-500" },
    { text: "No Preservatives", icon: <Award size={16} />, color: "from-indigo-500 to-blue-500" },
    { text: "Timely Service", icon: <Clock size={16} />, color: "from-cyan-500 to-teal-500" }
  ];

  const weeklyMenu = [
    { day: "Monday", special: "Kadhi Chawal" },
    { day: "Tuesday", special: "Chole Bhature" },
    { day: "Wednesday", special: "Rajma Chawal" },
    { day: "Thursday", special: "Veg Pulao" },
    { day: "Friday", special: "Aloo Paratha" },
    { day: "Saturday", special: "Pav Bhaji" },
    { day: "Sunday", special: "Veg Biryani" }
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
    <section className="relative py-6 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">
      
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

        {/* Food-specific floating elements */}
        <div className="absolute top-1/2 right-1/3 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 shadow-sm mb-6"
          >
            <div className="relative">
              <Utensils size={18} className="text-orange-500" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-orange-200 border-t-transparent"
              />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Home-Like Food
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block text-gray-800">Tasty & Healthy</span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="block mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent bg-size-200 animate-gradient"
            >
              Vegetarian Meals
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Freshly prepared vegetarian meals in a hygienic kitchen, just like home
          </motion.p>
        </motion.div>

        {/* ===== MEAL CARDS ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12"
        >
          {meals.map((meal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
              className={`relative group cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 ${
                selectedMeal === index 
                  ? `border-${meal.color.split('-')[1]}-500 shadow-2xl ring-2 ring-${meal.color.split('-')[1]}-200` 
                  : 'border-gray-100 hover:border-orange-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${meal.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Popular Badge */}
              {index === 1 && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-md"></div>
                    <div className="relative bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-lg">
                      <Star size={12} className="fill-white" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Meal Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${meal.color} flex items-center justify-center mb-5 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <div className="text-white">{meal.icon}</div>
              </div>

              {/* Meal Info */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{meal.name}</h3>
              <div className="flex items-center gap-2 text-gray-500 mb-3">
                <Clock size={16} />
                <span className="text-sm font-medium">{meal.time}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{meal.description}</p>

              {/* Popular Item */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Today's Popular</span>
                  <span className="text-sm font-bold text-orange-600">{meal.popular}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-500">Calories</span>
                  <span className="text-xs font-semibold text-gray-700">{meal.calories}</span>
                </div>
              </div>

              {/* Menu Items */}
              <div className="space-y-2.5 mb-4">
                {meal.items.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0.8 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* View Details Indicator */}
              <div className="flex items-center justify-between text-xs text-gray-400 mt-4 pt-3 border-t border-gray-100">
                <span>{selectedMeal === index ? 'Tap to close' : 'Tap for details'}</span>
                <ChefHat size={14} className={selectedMeal === index ? 'text-orange-500' : 'text-gray-400'} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== KITCHEN HIGHLIGHTS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-gray-100 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-200/20 to-rose-200/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                  <ChefHat size={24} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Kitchen <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Highlights</span>
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    onMouseEnter={() => setHoveredHighlight(index)}
                    onMouseLeave={() => setHoveredHighlight(null)}
                    className="relative group"
                  >
                    <div className={`flex items-center gap-2 p-3 rounded-xl transition-all duration-300 ${
                      hoveredHighlight === index 
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg` 
                        : 'bg-gray-50 hover:bg-orange-50'
                    }`}>
                      <div className={`${hoveredHighlight === index ? 'text-white' : `bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}`}>
                        {item.icon}
                      </div>
                      <span className={`text-sm font-medium ${
                        hoveredHighlight === index ? 'text-white' : 'text-gray-700'
                      }`}>
                        {item.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== WEEKLY SPECIAL MENU ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-orange-500 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={32} className="text-white" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Weekly Special Menu
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                {weeklyMenu.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    <span className="text-xs font-semibold text-white/90 block mb-1">
                      {item.day.slice(0, 3)}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {item.special}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-white/80 text-sm mt-6 text-center"
              >
                *Menu rotates weekly with seasonal specials
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* ===== CUSTOMER SATISFACTION BADGE ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg">
            <ThumbsUp size={18} className="text-orange-500" />
            <span className="text-sm font-medium text-gray-700">95% residents love our food</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
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

export default FoodSection;