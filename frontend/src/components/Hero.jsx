import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Wifi, 
  Bed, 
  Sparkles, 
  Users,
  MapPin,
  Calendar,
  ChevronDown,
  MessageCircle,
  Phone,
  Heart,
  CheckCircle,
  Star
} from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // Simple Color palette
  const colors = {
    primary: '#FF6B9D',
    primaryLight: '#FFE4EC',
    primaryDark: '#D14D7F',
    secondary: '#9D4EDD',
    success: '#38B2AC',
    white: '#FFFFFF',
    overlay: 'rgba(255, 255, 255, 0.9)',
    darkOverlay: 'rgba(0, 0, 0, 0.6)',
  };

  // Hero images
  const heroImages = [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2070&q=80',
  ];

  // Main features - Clean and simple
  const mainFeatures = [
    { icon: <Bed size={20} />, text: 'Fully Furnished' },
    { icon: <Wifi size={20} />, text: 'High-Speed WiFi' },
    { icon: <Shield size={20} />, text: '24/7 Security' },
    { icon: <Sparkles size={20} />, text: 'Daily Cleaning' },
  ];

  // Stats - Simple display
  const stats = [
    { value: '50+', label: 'Happy Girls' },
    { value: '4.8★', label: 'Rating' },
    { value: '100%', label: 'Safe' },
    { value: '24/7', label: 'Support' },
  ];

  // Auto slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Show content with delay
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${img})`,
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-5">
          <div className={`mx-auto transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Side - Hero Content */}
              <div className="space-y-8">
                {/* Location Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <MapPin size={16} className="text-white" />
                  <span className="text-sm font-medium text-white">
                    Durgapura, Jaipur
                  </span>
                </div>

                {/* Main Heading - Simplified */}
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Safe & Comfortable
                  </h1>
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
                      PG for Girls
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-lg">
                      Your perfect home away from home in Jaipur
                    </p>
                  </div>
                </div>

                {/* Features Row - Simple */}
                <div className="flex flex-wrap gap-3">
                  {mainFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20"
                    >
                      <div className="text-white">
                        {feature.icon}
                      </div>
                      <span className="text-sm font-medium text-white">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats - Minimal */}
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/80 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons - Clean */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/contact"
                    className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
                  >
                    <Calendar size={20} />
                    <span>Book a Visit</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="https://wa.me/916377964494"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white text-gray-800 font-semibold border-2 border-emerald-500 transition-all hover:scale-105"
                  >
                    <MessageCircle size={20} className="text-emerald-600" />
                    <span>WhatsApp Now</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Why Choose Us Card - Transparent */}
              <div className="relative">
                <div className=" rounded-2xl p-6 border-2  border-white/50  shadow-xl">
                  {/* Card Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center  gap-2 px-4 py-1 rounded-full  mb-4">
                      <Users size={16} className="text-white" />
                      <span className="text-sm font-bold text-white">
                        Girls Only Community
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      Why Choose RC HOMES?
                    </h2>
                    <p className="mt-2 text-white/80">
                      Safe, comfortable, and welcoming environment
                    </p>
                  </div>

                  {/* Features List - Simple */}
                  <div className="space-y-2">
                    {[
                      { icon: <Shield size={18} />, text: '24/7 Security & CCTV' },
                      { icon: <Wifi size={18} />, text: 'High-Speed WiFi' },
                      { icon: <Bed size={18} />, text: 'Fully Furnished Rooms' },
                      { icon: <Sparkles size={18} />, text: 'Daily Housekeeping' },
                      { icon: <Users size={18} />, text: 'All Girls Community' },
                      { icon: <CheckCircle size={18} />, text: 'Attached Washrooms' },
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="p-2 rounded-full ">
                          <div className="text-white">{item.icon}</div>
                        </div>
                        <span className="text-white font-medium">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-25 h-8 rounded-full bg-pink-500/60 " />
                <div className="absolute -bottom-4 -left-4 w-25 h-8 rounded-full bg-purple-500/60  " />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="flex flex-col items-center gap-2"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium text-white">
            Explore More
          </span>
          <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <ChevronDown size={20} className="text-white" />
          </div>
        </button>
      </div>

      {/* Image Navigation */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex ? 'scale-125 bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Simple Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;