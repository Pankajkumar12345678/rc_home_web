import React, { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Facebook, Instagram, 
  Twitter, Youtube, MessageCircle, Heart, 
  ChevronUp, ChevronRight, Home, Shield, 
  Wifi, Users, Clock, ArrowUpRight,
  Star
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/', icon: <Home size={16} /> },
      { name: 'Rooms', path: '/rooms', icon: <Home size={16} /> },
      { name: 'Facilities', path: '/facilities', icon: <Wifi size={16} /> },
      { name: 'Gallery', path: '/gallery', icon: <Star size={16} /> },
      { name: 'Rules', path: '/rules', icon: <Shield size={16} /> },
      { name: 'Location', path: '/location', icon: <MapPin size={16} /> },
      { name: 'Contact', path: '/contact', icon: <Phone size={16} /> },
    ],
    'Amenities': [
      'Attached Washrooms',
      '24/7 Security & CCTV',
      'High-Speed WiFi',
      'Daily Cleaning',
      'RO Drinking Water',
      'Modular Kitchen',
      'Tiffin Service',
    ],
    'Contact Info': [
      {
        icon: <MapPin size={18} />,
        text: '215, Arjun Nagar, Behind Dalda Factory, Durgapura, Jaipur - 302018',
        link: 'https://maps.google.com/?q=215+Arjun+Nagar+Durgapura+Jaipur'
      },
      {
        icon: <Phone size={18} />,
        text: '63779 64494 | 83878 99080',
        link: 'tel:6377964494'
      },
      {
        icon: <Mail size={18} />,
        text: 'rchomespg@gmail.com',
        link: 'mailto:rchomespg@gmail.com'
      },
      {
        icon: <Clock size={18} />,
        text: 'Visit Timing: 10 AM - 7 PM',
        link: null
      }
    ]
  };

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      label: 'Facebook',
      color: 'hover:bg-blue-600 hover:border-blue-600',
      iconColor: 'group-hover:text-white text-blue-500',
      link: 'https://facebook.com'
    },
    {
      icon: <Instagram size={20} />,
      label: 'Instagram',
      color: 'hover:bg-pink-600 hover:border-pink-600',
      iconColor: 'group-hover:text-white text-pink-500',
      link: 'https://instagram.com'
    },
    {
      icon: <Twitter size={20} />,
      label: 'Twitter',
      color: 'hover:bg-blue-400 hover:border-blue-400',
      iconColor: 'group-hover:text-white text-blue-400',
      link: 'https://twitter.com'
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      color: 'hover:bg-green-500 hover:border-green-500',
      iconColor: 'group-hover:text-white text-green-500',
      link: 'https://wa.me/916377964494'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-pink-400/20"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 20, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
        
        {/* Gradient Blobs */}
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <Home size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">RC HOMES</h2>
                  <p className="text-sm text-gray-300">PG FOR GIRLS</p>
                </div>
              </div>
              
              {/* Tagline */}
              <p className="text-gray-300">
                Your perfect home away from home. Safe, comfortable, and welcoming environment for girls.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '50+', label: 'Happy Girls' },
                  { value: '4.9★', label: 'Rating' },
                  { value: '24/7', label: 'Security' },
                  { value: '100%', label: 'Safe' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], colIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: colIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                {category}
              </h3>
              
              <ul className="space-y-3">
                {links.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 5 }}
                    onHoverStart={() => setActiveLink(`${category}-${idx}`)}
                    onHoverEnd={() => setActiveLink(null)}
                    className="group"
                  >
                    {typeof item === 'string' ? (
                      <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                        <div className={`w-1.5 h-1.5 rounded-full ${activeLink === `${category}-${idx}` ? 'bg-pink-500' : 'bg-gray-600'} transition-colors`} />
                        <span className="text-sm">{item}</span>
                      </div>
                    ) : item.path ? (
                      <a
                        href={item.path}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                      >
                        <div className={`transition-transform ${activeLink === `${category}-${idx}` ? 'scale-110' : ''}`}>
                          <div className="text-gray-400 group-hover:text-pink-500">{item.icon}</div>
                        </div>
                        <span className="text-sm">{item.name}</span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </a>
                    ) : (
                      <a
                        href={item.link || '#'}
                        target={item.link ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 text-gray-300 hover:text-white transition-colors ${item.link ? 'group' : ''}`}
                      >
                        <div className="text-gray-400 group-hover:text-pink-500">
                          {item.icon}
                        </div>
                        <span className="text-sm">{item.text}</span>
                        {item.link && (
                          <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                        )}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            <h3 className="text-lg font-bold flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
              Stay Updated
            </h3>
            
            <p className="text-gray-300 text-sm">
              Subscribe to get updates about new rooms, offers, and special announcements.
            </p>
            
            {/* Subscription Form */}
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50 transition-all placeholder-gray-500"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-2 px-4 py-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-medium text-sm"
                >
                  Subscribe
                </motion.button>
              </div>
              
              {/* Subscription Success Message */}
              <AnimatePresence>
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-xl p-3"
                  >
                    <div className="flex items-center gap-2 text-green-400">
                      <Heart size={16} />
                      <span className="text-sm">Thank you for subscribing!</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm text-gray-300">Follow us on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative p-3 rounded-xl border border-gray-700 ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <div className={social.iconColor}>
                      {social.icon}
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.label}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700/50" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RC HOMES PG FOR GIRLS. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Designed with ❤️ for girls' comfort and safety
            </p>
          </motion.div>

          {/* Quick Actions */}
          <div className="flex items-center gap-4">
            {/* WhatsApp Quick Action */}
            <motion.a
              href="https://wa.me/916377964494"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-sm font-medium"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Now</span>
            </motion.a>
            
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/5 border border-gray-700 rounded-xl hover:border-pink-500 transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp size={20} />
            </motion.button>
          </div>
        </div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 pt-6 border-t border-gray-700/30"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Shield size={18} />, text: '24/7 Security' },
              { icon: <Users size={18} />, text: 'Girls Only' },
              { icon: <Wifi size={18} />, text: 'WiFi Enabled' },
              { icon: <Clock size={18} />, text: 'Flexible Timings' },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-400">
                <div className="text-pink-500">{badge.icon}</div>
                <span className="text-xs">{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/916377964494"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} className="text-white" />
        {/* Ping Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </motion.a>
    </footer>
  );
};

export default Footer;