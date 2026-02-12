import { useEffect, useState } from 'react';
import {
  Shield,
  Wifi,
  Sparkles,
  MapPin,
  Droplet,
  Bath,
  Star,
  Check,
  Zap,
  Lock,
  Home,
  Users,
  Bell,
  Camera,
  Cloud,
  Battery,
  Clock,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';

const QuickHighlights = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Highlights data with enhanced properties
  const highlights = [
    {
      id: 1,
      icon: <Bath size={24} />,
      title: 'Attached Washrooms',
      subtitle: 'Private & Hygienic',
      description: 'Each room has its own private bathroom with 24/7 hot water',
      color: '#06B6D4', // Cyan
      gradient: 'from-cyan-500 to-blue-500',
      stats: { value: '100%', label: 'Privacy' },
      features: ['Hot Water', 'Ventilation', 'Geyser'],
      delay: 0
    },
    {
      id: 2,
      icon: <Shield size={24} />,
      title: '24/7 Security',
      subtitle: 'CCTV & Guard',
      description: 'Round-the-clock security with CCTV surveillance',
      color: '#EF4444', // Red
      gradient: 'from-red-500 to-pink-500',
      stats: { value: '24/7', label: 'Monitoring' },
      features: ['CCTV', 'Security Guard', 'Entry Log'],
      delay: 100
    },
    {
      id: 3,
      icon: <Wifi size={24} />,
      title: 'High-Speed WiFi',
      subtitle: 'Unlimited Internet',
      description: 'Blazing fast internet for work, study & entertainment',
      color: '#8B5CF6', // Purple
      gradient: 'from-purple-500 to-violet-500',
      stats: { value: '100 Mbps', label: 'Speed' },
      features: ['Unlimited', '5GHz', 'No FUP'],
      delay: 200
    },
    {
      id: 4,
      icon: <Sparkles size={24} />,
      title: 'Daily Cleaning',
      subtitle: 'Professional Service',
      description: 'Daily housekeeping and weekly deep cleaning',
      color: '#F59E0B', // Amber
      gradient: 'from-amber-500 to-orange-500',
      stats: { value: 'Daily', label: 'Service' },
      features: ['Mopping', 'Dusting', 'Sanitization'],
      delay: 300
    },
    {
      id: 5,
      icon: <Droplet size={24} />,
      title: 'RO Water',
      subtitle: 'Pure & Safe',
      description: 'RO purified drinking water available 24/7',
      color: '#10B981', // Emerald
      gradient: 'from-emerald-500 to-teal-500',
      stats: { value: 'RO+UV', label: 'Purification' },
      features: ['RO System', 'UV Filter', 'Mineralizer'],
      delay: 400
    },
    {
      id: 6,
      icon: <MapPin size={24} />,
      title: 'Prime Location',
      subtitle: 'Durgapura, Jaipur',
      description: 'Central location with easy access to all amenities',
      color: '#3B82F6', // Blue
      gradient: 'from-blue-500 to-indigo-500',
      stats: { value: '5 min', label: 'Market' },
      features: ['Transport', 'Market', 'College'],
      delay: 500
    }
  ];

  // Rotate active card every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
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

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <section className="relative py-10 bg-gradient-to-b from-white via-pink-50/20 to-white overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Animated Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 shadow-sm mb-6"
          >
            <div className="relative">
              <Star size={18} className="text-pink-500 fill-pink-500" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-pink-200 border-t-transparent"
              />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Premium Amenities
            </span>
            <Check size={16} className="text-emerald-500" />
          </motion.div>

          {/* Main Heading with Typing Effect */}
          <div className="relative">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="block text-gray-800">Experience Premium</span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent bg-size-200 animate-gradient"
              >
                Living Standards
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8"
            >
              Everything you need for a comfortable, safe, and productive stay
            </motion.p>
          </div>
        </motion.div>

        {/* Interactive Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group cursor-pointer ${activeIndex === index ? 'ring-2 ring-pink-500/20' : ''
                }`}
              style={{ animationDelay: `${item.delay}ms` }}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">

                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Glowing Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                </div>

                {/* Content Layout */}
                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient}/10 border border-${item.color.replace('#', '')}/20`}>
                      <div
                        className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                        style={{ color: item.color }}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Live Indicator */}
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs font-medium text-gray-500">Live</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Stats & Features */}
                  <div className="space-y-4">
                    {/* Quick Stats */}
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100">
                      <div>
                        <div className="text-2xl font-bold" style={{ color: item.color }}>
                          {item.stats.value}
                        </div>
                        <div className="text-xs text-gray-500">{item.stats.label}</div>
                      </div>
                      <Zap size={16} className="text-gray-400" />
                    </div>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1.5 text-xs font-medium rounded-full border ${hoveredCard === item.id
                              ? 'border-white bg-gradient-to-r from-white to-gray-50 text-gray-700'
                              : 'border-gray-200 bg-white text-gray-600'
                            }`}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-40px, -40px);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }
        
        .bg-size-200 {
          background-size: 200% auto;
        }
        
        .shadow-lg {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), 0 5px 20px rgba(255, 107, 157, 0.1);
        }
        
        .hover\:shadow-2xl:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(255, 107, 157, 0.15);
        }
      `}</style>
    </section>
  );
};

export default QuickHighlights;