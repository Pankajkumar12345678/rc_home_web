import React from 'react';
import { motion } from 'framer-motion';
import { 
   Wifi, Shield, Sparkles, Droplet, 
  Home, Users, Coffee, Bell, Heart, 
  Calendar, ChefHat, Clock, Zap, Wind
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      category: 'Kitchen & Dining',
      items: [
        {
          icon: <ChefHat size={28} />,
          title: 'Modular Kitchen',
          description: 'Fully equipped with stove, cylinder, refrigerator, RO purifier, and geyser',
          features: ['Stove', 'Cylinder (refill included)', 'Refrigerator', 'RO Water Purifier', 'Geyser'],
          color: 'text-orange-500',
          bgColor: 'bg-orange-50'
        },
        {
          icon: <ChefHat size={28} />,
          title: 'Tiffin Service',
          description: 'Optional home-style meals at just ₹60 per meal',
          features: ['Lunch & Dinner', 'Room/Office delivery', 'No fixed charges', 'Pay per meal'],
          color: 'text-emerald-500',
          bgColor: 'bg-emerald-50'
        }
      ]
    },
    {
      category: 'Safety & Security',
      items: [
        {
          icon: <Shield size={28} />,
          title: '24/7 Security',
          description: 'Round-the-clock security with CCTV surveillance',
          features: ['CCTV Cameras', 'Security Guards', 'Entry/Exit Logs', 'Emergency Response'],
          color: 'text-red-500',
          bgColor: 'bg-red-50'
        },
        {
          icon: <Bell size={28} />,
          title: 'Emergency Support',
          description: 'Immediate assistance available anytime',
          features: ['24/7 Helpline', 'First Aid', 'Emergency Contacts', 'Quick Response'],
          color: 'text-pink-500',
          bgColor: 'bg-pink-50'
        }
      ]
    },
    {
      category: 'Comfort & Convenience',
      items: [
        {
          icon: <Wifi size={28} />,
          title: 'High-Speed Internet',
          description: 'Unlimited high-speed WiFi for work and entertainment',
          features: ['100 Mbps Speed', 'No Data Limits', '24/7 Uptime', 'Multiple Devices'],
          color: 'text-purple-500',
          bgColor: 'bg-purple-50'
        },
        {
          icon: <Droplet size={28} />,
          title: 'RO Water Supply',
          description: 'Pure drinking water available 24/7',
          features: ['RO+UV Purification', 'Hot & Cold Water', 'Mineral Enriched', 'Regular Testing'],
          color: 'text-blue-500',
          bgColor: 'bg-blue-50'
        },
        {
          icon: <Sparkles size={28} />,
          title: 'Daily Cleaning',
          description: 'Professional housekeeping services',
          features: ['Daily Room Cleaning', 'Weekly Deep Clean', 'Common Area Maintenance', 'Laundry Area'],
          color: 'text-amber-500',
          bgColor: 'bg-amber-50'
        },
        {
          icon: <Wind size={28} />,
          title: 'Ventilation',
          description: 'Well-ventilated rooms with windows',
          features: ['Cross Ventilation', 'Natural Light', 'Air Circulation', 'Balcony Access'],
          color: 'text-cyan-500',
          bgColor: 'bg-cyan-50'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/20 pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-pink-600">
                Premium Facilities
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Experience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Modern Living
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              All the amenities you need for a comfortable and productive stay
            </p>
          </motion.div>

          {/* Facilities Grid */}
          <div className="max-w-7xl mx-auto space-y-16">
            {facilities.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                  {category.category}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      whileHover={{ y: -5 }}
                      className={`${item.bgColor} rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${item.bgColor.replace('bg-', 'bg-')} border ${item.color.replace('text-', 'border-')}/20`}>
                        <div className={item.color}>{item.icon}</div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {item.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                              <Heart size={12} className={item.color} />
                            </div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tiffin Service Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl p-8 border border-pink-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    🍱 Tiffin Service Available
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Don't feel like cooking? Enjoy delicious, home-style meals prepared by our in-house service
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-emerald-500" />
                      <span className="text-gray-700">Lunch & Dinner available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Home size={18} className="text-emerald-500" />
                      <span className="text-gray-700">Delivery to room or office</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap size={18} className="text-emerald-500" />
                      <span className="text-gray-700">Just ₹60 per meal - no fixed charges!</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-2">₹60</div>
                  <div className="text-sm text-gray-600">per meal</div>
                  <button className="mt-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;