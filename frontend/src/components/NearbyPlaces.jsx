// components/NearbyPlaces.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Hospital, 
  ShoppingBag, 
  Bus, 
  Coffee, 
  Landmark,
  MapPin,
  Navigation,
  Clock,
  ExternalLink,
  Star,
  Heart,
  Target,
  Car,
  Bike,
  Footprints,
  AlertCircle
} from 'lucide-react';

const NearbyPlaces = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const places = [
    {
      icon: <GraduationCap size={24} />,
      name: "Rajasthan University",
      distance: "2.5 km",
      time: "10 min",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      direction: "North-East",
      transport: ["Bus", "Auto", "Cab"],
      lat: 26.9124,
      lng: 75.7873
    },
    {
      icon: <Hospital size={24} />,
      name: "SMS Hospital",
      distance: "3 km",
      time: "12 min",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      direction: "South",
      transport: ["Bus", "Auto", "Ambulance"],
      lat: 26.9239,
      lng: 75.8245
    },
    {
      icon: <ShoppingBag size={24} />,
      name: "Durgapura Market",
      distance: "500 m",
      time: "2 min",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      direction: "Walking",
      transport: ["Walk", "Auto", "Rickshaw"],
      lat: 26.9021,
      lng: 75.7934
    },
    {
      icon: <Bus size={24} />,
      name: "Bus Stand",
      distance: "1 km",
      time: "4 min",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      direction: "West",
      transport: ["Walk", "Auto", "Bus"],
      lat: 26.8987,
      lng: 75.7889
    },
    {
      icon: <Coffee size={24} />,
      name: "Cafes & Restaurants",
      distance: "600 m",
      time: "3 min",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      direction: "South-West",
      transport: ["Walk", "Auto", "Zomato/Swiggy"],
      lat: 26.9012,
      lng: 75.7912
    },
    {
      icon: <Landmark size={24} />,
      name: "Bank & ATM",
      distance: "400 m",
      time: "2 min",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      direction: "North",
      transport: ["Walk", "ATM", "Bank"],
      lat: 26.9034,
      lng: 75.7921
    }
  ];

  // PG Location (from your Google Maps link)
  const pgLocation = {
    name: "RC HOMES PG FOR GIRLS",
    address: "Durgapura, Jaipur, Rajasthan",
    lat: 26.9028,
    lng: 75.7928,
    placeId: "RxQ24kmjrVZh8F4LA"
  };

  // Google Maps embed URL with your specific location
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5!2d${pgLocation.lng}!3d${pgLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzEwLjEiTiA3NcKwNDcnMzQuNCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin`;

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
    <section className="relative py-6 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      
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

        {/* Location-specific floating elements */}
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm mb-6"
          >
            <div className="relative">
              <MapPin size={18} className="text-blue-500" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-blue-200 border-t-transparent"
              />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Prime Location in Durgapura
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block text-gray-800">Everything You Need,</span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="block mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent bg-size-200 animate-gradient"
            >
              Just Minutes Away
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Centrally located in Durgapura - everything is within walking distance
          </motion.p>
        </motion.div>

        {/* ===== LOCATION STATS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-100 shadow-lg flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Target size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Central Location</p>
              <p className="text-lg font-bold text-gray-800">Durgapura, Jaipur</p>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-100 shadow-lg flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Navigation size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Walking Score</p>
              <p className="text-lg font-bold text-gray-800">85/100 ⭐</p>
            </div>
          </div>
        </motion.div>

        {/* ===== NEARBY PLACES GRID ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-w-7xl mx-auto mb-12"
        >
          {places.map((place, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              onClick={() => setSelectedPlace(selectedPlace === index ? null : index)}
              className={`relative group cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl p-5 border-2 transition-all duration-300 ${
                selectedPlace === index 
                  ? `border-${place.color.split('-')[1]}-500 shadow-2xl ring-2 ring-${place.color.split('-')[1]}-200` 
                  : 'border-gray-100 hover:border-blue-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${place.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${place.color} flex items-center justify-center mx-auto mb-3 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <div className="text-white">{place.icon}</div>
              </div>
              
              {/* Place Name */}
              <h3 className="font-bold text-gray-800 text-sm text-center mb-2 line-clamp-2 min-h-[40px]">
                {place.name}
              </h3>
              
              {/* Distance & Time */}
              <div className="text-center space-y-1">
                <p className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {place.distance}
                </p>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <Clock size={12} />
                  <span>{place.time}</span>
                  <span className="text-gray-400">•</span>
                  <Footprints size={12} />
                  <span>{place.direction}</span>
                </div>
              </div>

              {/* Transport Options */}
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                {place.transport.slice(0, 2).map((mode, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-[10px] font-medium text-gray-600">
                    {mode}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== REAL GOOGLE MAP EMBED ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-gray-100 shadow-2xl relative overflow-hidden">
            
            {/* Map Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 px-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500  flex items-center justify-center shadow-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    {pgLocation.name}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <span>{pgLocation.address}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      <Heart size={10} className="fill-green-700" />
                      Verified
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Google Maps Button */}
              <a
                href="https://maps.app.goo.gl/RxQ24kmjrVZh8F4LA?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500  text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <ExternalLink size={16} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Real Google Map Embed */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-gray-200 shadow-inner">
              {/* Map Loading State */}
              {!mapLoaded && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading map...</p>
                  </div>
                </div>
              )}
              
              {/* Google Maps iframe */}
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
                className="w-full h-[300px] md:h-[400px] lg:h-[450px]"
                title="RC HOMES PG for Girls Location"
              />
            </div>

            {/* Map Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-4 px-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-700">4.9</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-gray-500" />
                  <span className="text-sm text-gray-600">Open 7:00 AM - 11:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-gray-500">Updated 1 week ago</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== DIRECTIONS CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-8"
        >
          <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500  rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <Navigation size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Need Directions?</h4>
                  <p className="text-white/90 text-sm">Get live directions from your location</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${pgLocation.lat},${pgLocation.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Car size={18} />
                  <span>Drive</span>
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${pgLocation.lat},${pgLocation.lng}&travelmode=walking`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur text-white border-2 border-white/50 font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300"
                >
                  <Footprints size={18} />
                  <span>Walk</span>
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${pgLocation.lat},${pgLocation.lng}&travelmode=transit`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur text-white border-2 border-white/50 font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300"
                >
                  <Bus size={18} />
                  <span>Transit</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== VISIT CTA ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://maps.app.goo.gl/RxQ24kmjrVZh8F4LA?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MapPin size={18} className="text-red-500" />
            <span className="font-semibold text-gray-700">View RC HOMES on Google Maps</span>
            <ExternalLink size={14} className="text-gray-500" />
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default NearbyPlaces;