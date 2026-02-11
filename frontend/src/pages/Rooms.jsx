import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Users, Check, Wifi, Bath, Home, Shield, Star } from 'lucide-react';

const Rooms = () => {
  const roomTypes = [
    {
      id: 1,
      type: 'Single Room',
      price: '₹8,500 / month',
      description: 'Perfect for students who need privacy and personal space',
      features: [
        'Single Occupancy',
        'Attached Washroom',
        'Study Table & Chair',
        'Wardrobe',
        'AC',
        'High-speed WiFi'
      ],
      icon: <Users size={24} />,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      available: 2
    },
    {
      id: 2,
      type: 'Double Sharing',
      price: '₹6,500 / month',
      description: 'Comfortable sharing for friends or colleagues',
      features: [
        'Double Occupancy',
        'Attached Washroom',
        '2 Study Tables',
        '2 Wardrobes',
        'AC',
        'High-speed WiFi'
      ],
      icon: <Users size={24} />,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      available: 3
    },
    {
      id: 3,
      type: 'Triple Sharing',
      price: '₹5,500 / month',
      description: 'Budget-friendly option for students',
      features: [
        'Triple Occupancy',
        'Attached Washroom',
        '3 Study Tables',
        '3 Wardrobes',
        'AC',
        'High-speed WiFi'
      ],
      icon: <Users size={24} />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      available: 1
    }
  ];

  const amenities = [
    { icon: <Bed size={20} />, text: 'Comfortable Box Beds' },
    { icon: <Bath size={20} />, text: 'Attached Washrooms' },
    { icon: <Wifi size={20} />, text: 'High-speed WiFi' },
    { icon: <Home size={20} />, text: 'Fully Furnished' },
    { icon: <Shield size={20} />, text: '24/7 Security' },
    { icon: <Check size={20} />, text: 'Daily Cleaning' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/20 pt-8 relative overflow-hidden">
       {/* FIXED: Animated Background Elements with pointer-events-none */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles - Responsive sizes */}
        <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}></div>
        </div>

        {/* Animated Gradient Orbs - Responsive sizes */}
        <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

        {/* Additional floating elements - Responsive positioning */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-full opacity-10 animate-float pointer-events-none" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-[#0b234a] to-[#E22213] rounded-full opacity-15 animate-float pointer-events-none" style={{ animationDelay: '3s' }}></div>
      </div>
      {/* Hero Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">

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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 shadow-sm mb-2"
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
                Choose Your Space
              </span>
            </motion.div>

            {/* Main Heading with Typing Effect */}
            <div className="relative">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="block text-gray-800">Comfortable Rooms for</span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-200 animate-gradient"
                >
                  Every Budget
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8"
              >
                 Select from our range of fully furnished rooms with all modern amenities
              </motion.p>
            </div>
          </motion.div>

          {/* Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative group ${room.bgColor} rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Availability Badge */}
                {room.available > 0 ? (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                    {room.available} Available
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gray-500 text-white text-xs font-bold rounded-full">
                    Waitlist
                  </div>
                )}

                {/* Room Type & Price */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${room.color} flex items-center justify-center mb-4`}>
                    <div className="text-white">{room.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {room.type}
                  </h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {room.price}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {room.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <Check size={14} className="text-green-500" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                  Book This Room
                </button>
              </motion.div>
            ))}
          </div>

          {/* Included Amenities */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              All Rooms Include
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mx-auto mb-3">
                    <div className="text-pink-500">{amenity.icon}</div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{amenity.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;