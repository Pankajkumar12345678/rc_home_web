// // import { useState, useEffect } from 'react';
// // import { Menu, X, Phone, MapPin, Home, Calendar, ChevronRight } from 'lucide-react';

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [activeSection, setActiveSection] = useState('home');
// //   const [roomsAvailable] = useState(3);

// //   const menuItems = [
// //     { name: 'Home', href: '#home', icon: '🏠' },
// //     { name: 'Rooms', href: '#rooms', icon: '🛏️' },
// //     { name: 'Facilities', href: '#facilities', icon: '🌟' },
// //     { name: 'Gallery', href: '#gallery', icon: '📸' },
// //     { name: 'Contact', href: '#contact', icon: '📞' },
// //   ];

// //   // Premium Pink-Purple Gradient Theme for Girls PG
// //   const colors = {
// //     // Primary Gradient Colors
// //     gradientStart: '#FF6B9D', // Vibrant Pink
// //     gradientMid: '#D45EFF', // Bright Purple
// //     gradientEnd: '#FF8E53', // Coral Orange
// //     // Background Colors
// //     bgPrimary: '#FFF5F8', // Soft Pink Background
// //     bgSecondary: '#F8F0FF', // Light Purple Background
// //     bgDark: '#1A1A2E', // Dark Navy for contrast
// //     // Text Colors
// //     textPrimary: '#4A154B', // Deep Purple
// //     textSecondary: '#FF4081', // Hot Pink
// //     textLight: '#8884B0', // Light Purple Gray
// //     textWhite: '#FFFFFF',
// //     // Accent Colors
// //     accentGold: '#FFD166', // Golden Yellow
// //     accentTeal: '#06D6A0', // Mint Green
// //     accentBlue: '#118AB2', // Ocean Blue
// //     // State Colors
// //     hover: '#FF4081', // Bright Pink
// //     active: '#9C27B0', // Purple
// //     success: '#4CAF50', // Green
// //   };

// //   // Handle scroll to detect active section
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const sections = menuItems.map(item => item.href.substring(1));
// //       const current = sections.find(section => {
// //         const element = document.getElementById(section);
// //         if (element) {
// //           const rect = element.getBoundingClientRect();
// //           return rect.top <= 100 && rect.bottom >= 100;
// //         }
// //         return false;
// //       });
// //       if (current) setActiveSection(current);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const handleMenuItemClick = (href, name) => {
// //     setActiveSection(href.substring(1));
// //     setIsMenuOpen(false);

// //     // Smooth scroll to section
// //     const element = document.getElementById(href.substring(1));
// //     if (element) {
// //       window.scrollTo({
// //         top: element.offsetTop - 80,
// //         behavior: 'smooth'
// //       });
// //     }
// //   };

// //   return (
// //     <header className="sticky top-0 z-50 shadow-lg backdrop-blur-md bg-white/90" 
// //             style={{ backgroundColor: colors.bgPrimary }}>
// //       {/* Animated Top Gradient Bar */}
// //       <div className="hidden md:block relative overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-x"></div>
// //         <div className="container mx-auto px-4 relative">
// //           <div className="flex items-center justify-between py-2 text-sm">
// //             <div className="flex items-center space-x-6 text-white">
// //               <div className="flex items-center gap-2 hover:scale-105 transition-transform">
// //                 <div className="p-1 rounded-full bg-white/20">
// //                   <Phone size={14} className="animate-pulse" />
// //                 </div>
// //                 <span className="font-medium">6377964494</span>
// //               </div>
// //               <div className="flex items-center gap-2 hover:scale-105 transition-transform">
// //                 <div className="p-1 rounded-full bg-white/20">
// //                   <MapPin size={14} />
// //                 </div>
// //                 <span className="font-medium">Durgapura, Jaipur</span>
// //               </div>
// //             </div>

// //             <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
// //               <Home size={14} className="text-white" />
// //               <span className="text-white font-medium">
// //                 Rooms Available: 
// //                 <span className="ml-1 font-bold animate-pulse" style={{ color: colors.accentGold }}>
// //                   {roomsAvailable}
// //                 </span>
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Header */}
// //       <div className="container mx-auto px-4 py-3">
// //         <div className="flex items-center justify-between">
// //           {/* Logo Section with Gradient */}
// //           <div className="flex items-center space-x-3 group cursor-pointer">
// //             <div className="relative">
// //               <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="relative flex items-center justify-center rounded-xl p-3 shadow-lg"
// //                    style={{ 
// //                      background: `linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientMid})`,
// //                      border: '2px solid transparent',
// //                      backgroundClip: 'padding-box',
// //                      boxShadow: '0 8px 32px rgba(255, 107, 157, 0.2)'
// //                    }}>
// //                 <div className="text-center">
// //                   <h1 className="text-xl font-bold text-white leading-tight drop-shadow-lg">RC HOMES</h1>
// //                   <p className="text-xs text-white/90 font-medium">PG FOR GIRLS</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Logo Text with Animation */}
// //             <div className="group-hover:translate-x-1 transition-transform">
// //               <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
// //                 RC HOMES
// //               </h1>
// //               <p className="text-sm font-medium" style={{ color: colors.textLight }}>
// //                 Safe & Comfortable PG for Girls
// //               </p>
// //             </div>
// //           </div>

// //           {/* Desktop Navigation with Active Indicator */}
// //           <nav className="hidden md:flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
// //             {menuItems.map((item) => {
// //               const isActive = activeSection === item.href.substring(1);
// //               return (
// //                 <a
// //                   key={item.name}
// //                   href={item.href}
// //                   onClick={(e) => {
// //                     e.preventDefault();
// //                     handleMenuItemClick(item.href, item.name);
// //                   }}
// //                   className="relative px-5 py-2 rounded-xl font-medium transition-all duration-300 group"
// //                   style={{ 
// //                     color: isActive ? colors.textWhite : colors.textPrimary,
// //                     backgroundColor: isActive ? colors.gradientMid : 'transparent'
// //                   }}
// //                 >
// //                   <div className="flex items-center gap-2">
// //                     <span className="text-sm">{item.icon}</span>
// //                     <span className="relative z-10">{item.name}</span>
// //                   </div>

// //                   {/* Active Indicator Line */}
// //                   {isActive && (
// //                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 rounded-t-full"
// //                          style={{ 
// //                            background: `linear-gradient(to right, ${colors.accentGold}, ${colors.gradientEnd})`,
// //                            boxShadow: `0 -2px 8px ${colors.accentGold}`
// //                          }} />
// //                   )}

// //                   {/* Hover Effect */}
// //                   {!isActive && (
// //                     <>
// //                       <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                       <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full group-hover:w-3/4 transition-all duration-300"></div>
// //                     </>
// //                   )}
// //                 </a>
// //               );
// //             })}
// //           </nav>

// //           {/* CTA Buttons */}
// //           <div className="flex items-center space-x-3">
// //             <button
// //               className="hidden md:flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition-all duration-300 group relative overflow-hidden"
// //               style={{ 
// //                 background: `linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientMid}, ${colors.gradientEnd})`,
// //                 backgroundSize: '200% 200%'
// //               }}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.backgroundPosition = 'right center';
// //                 e.currentTarget.style.transform = 'translateY(-2px)';
// //                 e.currentTarget.style.boxShadow = `0 12px 30px ${colors.gradientMid}80`;
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.backgroundPosition = 'left center';
// //                 e.currentTarget.style.transform = 'translateY(0)';
// //                 e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 157, 0.3)';
// //               }}
// //             >
// //               <span className="relative z-10 flex items-center gap-2">
// //                 <Calendar size={18} className="animate-bounce" />
// //                 Book Now
// //               </span>
// //               <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
// //             </button>

// //             {/* Mobile Menu Button with Gradient */}
// //             <button
// //               className="md:hidden rounded-xl p-3 relative overflow-hidden group"
// //               style={{ 
// //                 background: `linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientMid})`,
// //                 boxShadow: `0 4px 15px ${colors.gradientStart}40`
// //               }}
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               aria-label="Toggle menu"
// //             >
// //               <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
// //               {isMenuOpen ? (
// //                 <X size={22} className="relative z-10 text-white" />
// //               ) : (
// //                 <Menu size={22} className="relative z-10 text-white" />
// //               )}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Menu with Gradient Background */}
// //         {isMenuOpen && (
// //           <div className="md:hidden mt-4 rounded-2xl overflow-hidden shadow-2xl animate-slideDown"
// //                style={{ 
// //                  background: `linear-gradient(135deg, ${colors.bgSecondary}, ${colors.bgPrimary})`,
// //                  border: `2px solid ${colors.gradientStart}20`
// //                }}>
// //             <div className="p-4 space-y-1">
// //               {menuItems.map((item) => {
// //                 const isActive = activeSection === item.href.substring(1);
// //                 return (
// //                   <a
// //                     key={item.name}
// //                     href={item.href}
// //                     onClick={(e) => {
// //                       e.preventDefault();
// //                       handleMenuItemClick(item.href, item.name);
// //                     }}
// //                     className="flex items-center justify-between rounded-xl p-4 font-medium transition-all group"
// //                     style={{ 
// //                       backgroundColor: isActive ? `${colors.gradientMid}20` : 'transparent',
// //                       borderLeft: `4px solid ${isActive ? colors.gradientMid : 'transparent'}`,
// //                       color: isActive ? colors.textSecondary : colors.textPrimary
// //                     }}
// //                   >
// //                     <div className="flex items-center gap-3">
// //                       <span className="text-lg">{item.icon}</span>
// //                       <span>{item.name}</span>
// //                     </div>
// //                     <div className="flex items-center gap-2">
// //                       {isActive && (
// //                         <div className="w-2 h-2 rounded-full animate-pulse"
// //                              style={{ backgroundColor: colors.gradientEnd }} />
// //                       )}
// //                       <ChevronRight size={16} className={isActive ? 'text-pink-500' : 'text-gray-400'} />
// //                     </div>

// //                     {/* Mobile Active Line */}
// //                     {isActive && (
// //                       <div className="absolute left-0 bottom-0 w-full h-1 rounded-b-xl"
// //                            style={{ 
// //                              background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`
// //                            }} />
// //                     )}
// //                   </a>
// //                 );
// //               })}

// //               {/* Mobile Book Now Button */}
// //               <button
// //                 className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl py-4 font-bold text-white transition-all active:scale-95"
// //                 style={{ 
// //                   background: `linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientMid})`,
// //                   boxShadow: `0 6px 20px ${colors.gradientStart}60`
// //                 }}
// //                 onClick={() => setIsMenuOpen(false)}
// //               >
// //                 <Calendar size={20} />
// //                 Book Your Room Now!
// //               </button>

// //               {/* Mobile Contact Info with Icons */}
// //               <div className="mt-6 pt-4 border-t space-y-3"
// //                    style={{ borderColor: `${colors.gradientStart}30` }}>
// //                 <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors">
// //                   <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.accentBlue}20` }}>
// //                     <Phone size={16} style={{ color: colors.accentBlue }} />
// //                   </div>
// //                   <span style={{ color: colors.textPrimary }} className="font-medium">6377964494</span>
// //                 </div>
// //                 <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors">
// //                   <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.accentTeal}20` }}>
// //                     <MapPin size={16} style={{ color: colors.accentTeal }} />
// //                   </div>
// //                   <span style={{ color: colors.textPrimary }} className="font-medium">Durgapura, Jaipur</span>
// //                 </div>
// //                 <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors">
// //                   <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.accentGold}20` }}>
// //                     <Home size={16} style={{ color: colors.accentGold }} />
// //                   </div>
// //                   <span style={{ color: colors.textPrimary }} className="font-medium">
// //                     Available Rooms: 
// //                     <span className="ml-2 font-bold animate-pulse" style={{ color: colors.success }}>
// //                       {roomsAvailable} Spots Left!
// //                     </span>
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Custom CSS for Animations */}
// //       <style jsx>{`
// //         @keyframes gradient-x {
// //           0%, 100% { background-position: 0% 50%; }
// //           50% { background-position: 100% 50%; }
// //         }
// //         @keyframes slideDown {
// //           from { opacity: 0; transform: translateY(-10px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
// //         .animate-gradient-x {
// //           animation: gradient-x 3s ease infinite;
// //           background-size: 200% 200%;
// //         }
// //         .animate-slideDown {
// //           animation: slideDown 0.3s ease-out;
// //         }
// //       `}</style>
// //     </header>
// //   );
// // };

// // export default Header;





// import { useState, useEffect } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import {
//   Menu,
//   X,
//   Phone,
//   MapPin,
//   Home as HomeIcon,
//   Calendar,
//   Bed,
//   Wifi,
//   Images,
//   Mail
// } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState('/');
//   const [roomsAvailable] = useState(3);
//   const location = useLocation();
//   const scrollToSection = (id) => {
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ 
//       behavior: "smooth",
//       block: "start"
//     });
//   }
// };

//   // Update active menu based on route
//   useEffect(() => {
//     setActiveMenu(location.pathname);
//   }, [location]);

//   const menuItems = [
//   { name: 'Home', id: 'home', icon: <HomeIcon size={18}/> },
//   { name: 'Rooms', id: 'rooms', icon: <Bed size={18}/> },
//   { name: 'Facilities', id: 'food', icon: <Wifi size={18}/> },
//   { name: 'Gallery', id: 'gallery', icon: <Images size={18}/> },
//   { name: 'Contact', id: 'contact', icon: <Mail size={18}/> },
// ];

//   // Enhanced Color Palette - More Vibrant & Feminine
//   const colors = {
//     primary: '#FF6B9D', // Vibrant Pink
//     primaryLight: '#FFE4EC', // Soft Pink
//     primaryDark: '#D14D7F', // Dark Pink
//     secondary: '#9D4EDD', // Purple
//     tertiary: '#FF8E53', // Coral/Orange
//     background: '#FFF9FB', // Very Light Pink
//     text: '#2D3748', // Dark Gray
//     textLight: '#718096', // Medium Gray
//     white: '#FFFFFF',
//     success: '#38B2AC', // Teal
//     highlight: '#FFD166', // Gold/Yellow
//     gradientStart: '#FF6B9D',
//     gradientEnd: '#9D4EDD',
//   };

//   return (
//     <header className="sticky top-0 z-50 shadow-lg" style={{
//       backgroundColor: colors.background,
//       boxShadow: `0 4px 20px rgba(${colors.primary}, 0.1)`
//     }}>
//       {/* Top Bar Strip */}
//       <div className="hidden md:block" style={{
//         background: `linear-gradient(90deg, ${colors.primaryDark} 0%, ${colors.secondary} 100%)`
//       }}>
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-2 text-sm">
//             <div className="flex items-center space-x-6 text-white">
//               <a
//                 href="tel:6377964494"
//                 className="flex items-center gap-2 transition-all hover:scale-105"
//               >
//                 <Phone size={14} />
//                 <span>6377964494</span>
//               </a>
//               <div className="flex items-center gap-2">
//                 <MapPin size={14} />
//                 <span>Durgapura, Jaipur</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <HomeIcon size={14} className="text-white" />
//               <span className="text-white">
//                 Rooms Available:
//                 <span className="ml-1 font-bold" style={{ color: colors.highlight }}>
//                   {roomsAvailable}
//                 </span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           {/* Logo Section */}
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div
//               className="flex items-center justify-center rounded-xl p-3 shadow-lg transition-all duration-300 group-hover:scale-105"
//               style={{
//                 backgroundColor: colors.primary,
//                 background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`
//               }}
//             >
//               <div className="text-center">
//                 <h1 className="text-xl font-bold text-white leading-tight">RC HOMES</h1>
//                 <p className="text-xs text-white opacity-90">PG FOR GIRLS</p>
//               </div>
//             </div>

//             {/* Logo Text */}
//             <div>
//               <h1 className="text-2xl font-bold transition-all duration-300 group-hover:scale-105"
//                 style={{
//                   color: colors.primaryDark,
//                   textShadow: `2px 2px 4px rgba(0,0,0,0.1)`
//                 }}>
//                 RC HOMES
//               </h1>
//               <p className="text-sm font-medium" style={{ color: colors.textLight }}>
//                 Your Home Away From Home
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-1">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="relative px-4 py-2 font-medium transition-all duration-300"
//                 style={{
//                   color: activeMenu === item.path ? colors.primary : colors.text,
//                   margin: '0 4px'
//                 }}
//                 onClick={() => setActiveMenu(item.path)}
//                 onMouseEnter={(e) => {
//                   if (activeMenu !== item.path) {
//                     e.currentTarget.style.color = colors.primary;
//                     e.currentTarget.style.transform = 'translateY(-2px)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (activeMenu !== item.path) {
//                     e.currentTarget.style.color = colors.text;
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }
//                 }}
//               >
//                 <div className="flex items-center gap-2">
//                   {item.icon}
//                   <span>{item.name}</span>
//                 </div>

//                 {/* Active Indicator Line */}
//                 {activeMenu === item.path && (
//                   <div
//                     className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 rounded-full transition-all duration-300"
//                     style={{
//                       backgroundColor: colors.primary,
//                       boxShadow: `0 0 10px ${colors.primary}`
//                     }}
//                   />
//                 )}

//                 {/* Hover Effect */}
//                 <div
//                   className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 rounded-full transition-all duration-300 group-hover:w-3/4"
//                   style={{ backgroundColor: colors.primaryLight }}
//                 />
//               </Link>
//             ))}
//           </nav>

//           {/* CTA Buttons */}
//           <div className="flex items-center space-x-4">
//             <a
//               href="https://wa.me/916377964494?text=Hi%20I%20want%20to%20book%20a%20room%20at%20RC%20Homes%20PG"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hidden md:flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//               style={{
//                 background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
//               }}
//             >
//               <Calendar size={18} />
//               Book Now
//             </a>


//             {/* Mobile Menu Button */}
//             <button
//               className="rounded-xl p-2 transition-all duration-300 md:hidden hover:scale-110"
//               style={{
//                 backgroundColor: colors.primaryLight,
//                 boxShadow: `0 4px 12px rgba(${colors.primary}, 0.2)`
//               }}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X size={24} style={{ color: colors.primaryDark }} />
//               ) : (
//                 <Menu size={24} style={{ color: colors.primaryDark }} />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div
//             className="mt-4 rounded-2xl md:hidden animate-fadeIn"
//             style={{
//               backgroundColor: colors.white,
//               boxShadow: `0 20px 40px rgba(${colors.primary}, 0.15)`,
//               border: `2px solid ${colors.primaryLight}`
//             }}
//           >
//             <div className="flex flex-col space-y-1 p-4">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all ${activeMenu === item.path ? 'scale-105' : ''
//                     }`}
//                   style={{
//                     color: activeMenu === item.path ? colors.primaryDark : colors.text,
//                     backgroundColor: activeMenu === item.path ? colors.primaryLight : colors.background,
//                     borderLeft: activeMenu === item.path ? `4px solid ${colors.primary}` : '4px solid transparent'
//                   }}
//                   onClick={() => {
//                     setActiveMenu(item.path);
//                     setIsMenuOpen(false);
//                   }}
//                   onMouseEnter={(e) => {
//                     if (activeMenu !== item.path) {
//                       e.currentTarget.style.backgroundColor = colors.primaryLight;
//                       e.currentTarget.style.color = colors.primaryDark;
//                       e.currentTarget.style.transform = 'translateX(8px)';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (activeMenu !== item.path) {
//                       e.currentTarget.style.backgroundColor = colors.background;
//                       e.currentTarget.style.color = colors.text;
//                       e.currentTarget.style.transform = 'translateX(0)';
//                     }
//                   }}
//                 >
//                   <div style={{ color: activeMenu === item.path ? colors.primary : colors.textLight }}>
//                     {item.icon}
//                   </div>
//                   <span className="font-medium">{item.name}</span>

//                   {/* Active indicator for mobile */}
//                   {activeMenu === item.path && (
//                     <div className="ml-auto w-2 h-2 rounded-full"
//                       style={{ backgroundColor: colors.primary }} />
//                   )}
//                 </Link>
//               ))}

//               {/* Mobile Book Now Button */}
//               <a
//                 href="https://wa.me/916377964494?text=Hi%20I%20want%20to%20book%20a%20room%20at%20RC%20Homes%20PG"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hidden md:flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                 style={{
//                   background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
//                 }}
//               >
//                 <Calendar size={18} />
//                 Book Now
//               </a>


//               {/* Mobile Contact Info */}
//               <div className="mt-6 space-y-4 pt-6 border-t" style={{ borderColor: colors.primaryLight }}>
//                 <a
//                   href="tel:6377964494"
//                   className="flex items-center gap-3 transition-all hover:scale-105"
//                 >
//                   <div className="rounded-full p-2" style={{ backgroundColor: colors.primaryLight }}>
//                     <Phone size={16} style={{ color: colors.primary }} />
//                   </div>
//                   <span style={{ color: colors.text }}>6377964494</span>
//                 </a>
//                 <div className="flex items-center gap-3">
//                   <div className="rounded-full p-2" style={{ backgroundColor: colors.primaryLight }}>
//                     <MapPin size={16} style={{ color: colors.primary }} />
//                   </div>
//                   <span style={{ color: colors.text }}>Durgapura, Jaipur</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="rounded-full p-2" style={{ backgroundColor: colors.primaryLight }}>
//                     <HomeIcon size={16} style={{ color: colors.primary }} />
//                   </div>
//                   <span style={{ color: colors.text }}>
//                     Rooms Available:
//                     <span className="ml-2 font-bold" style={{ color: colors.success }}>
//                       {roomsAvailable}
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* CSS Animation */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;


import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  MapPin,
  Home as HomeIcon,
  Calendar,
  Bed,
  Wifi,
  Images,
  Mail
} from 'lucide-react';
import { assets } from '../assets/assets';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('/');
  const [roomsAvailable] = useState(3);
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Update active menu based on route
  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  const menuItems = [
    { name: 'Home', id: 'home', icon: <HomeIcon size={18} /> },
    { name: 'Rooms', id: 'rooms', icon: <Bed size={18} /> },
    { name: 'Facilities', id: 'food', icon: <Wifi size={18} /> },
    { name: 'Gallery', id: 'gallery', icon: <Images size={18} /> },
    { name: 'Contact', id: 'contact', icon: <Mail size={18} /> },
  ];

  // Enhanced Color Palette - More Vibrant & Feminine
  const colors = {
    primary: '#FF6B9D', // Vibrant Pink
    primaryLight: '#FFE4EC', // Soft Pink
    primaryDark: '#D14D7F', // Dark Pink
    secondary: '#9D4EDD', // Purple
    tertiary: '#FF8E53', // Coral/Orange
    background: '#FFF9FB', // Very Light Pink
    text: '#2D3748', // Dark Gray
    textLight: '#718096', // Medium Gray
    white: '#FFFFFF',
    success: '#38B2AC', // Teal
    highlight: '#FFD166', // Gold/Yellow
    gradientStart: '#FF6B9D',
    gradientEnd: '#9D4EDD',
  };

  // Handle menu item click
  const handleMenuItemClick = (e, item) => {
    e.preventDefault();

    // Check if we're on the home page
    if (location.pathname === '/') {
      // On home page, scroll to section
      scrollToSection(item.id);
    } else {
      // On other pages, navigate to home page with section hash
      window.location.href = `/#${item.id}`;
    }

    setActiveMenu(`/${item.id}`);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg" style={{
      backgroundColor: colors.background,
      boxShadow: `0 4px 20px rgba(255, 107, 157, 0.1)`
    }}>
      {/* Top Bar Strip */}
      <div className="hidden md:block" style={{
        background: `linear-gradient(90deg, ${colors.primaryDark} 0%, ${colors.secondary} 100%)`
      }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-white">
              <a
                href="tel:6377964494"
                className="flex items-center gap-2 transition-all hover:scale-105"
              >
                <Phone size={14} />
                <span>6377964494</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Durgapura, Jaipur</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <HomeIcon size={14} className="text-white" />
              <span className="text-white">
                Rooms Available:
                <span className="ml-1 font-bold" style={{ color: colors.highlight }}>
                  {roomsAvailable}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          {/* <Link to="/" className="flex items-center space-x-3 group" onClick={() => {
            if (location.pathname === '/') {
              scrollToSection('home');
            }
            setIsMenuOpen(false);
          }}>
            <div
              className="flex items-center justify-center rounded-xl p-3 shadow-lg transition-all duration-300 group-hover:scale-105"
              style={{
                backgroundColor: colors.primary,
                background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`
              }}
            >
              <div className="text-center">
                <h1 className="text-xl font-bold text-white leading-tight">RC HOMES</h1>
                <p className="text-xs text-white opacity-90">PG FOR GIRLS</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold transition-all duration-300 group-hover:scale-105"
                style={{
                  color: colors.primaryDark,
                  textShadow: `2px 2px 4px rgba(0,0,0,0.1)`
                }}>
                RC HOMES
              </h1>
              <p className="text-sm font-medium" style={{ color: colors.textLight }}>
                Your Home Away From Home
              </p>
            </div>
          </Link> */}
          {/* Logo Section */}

          {/* Logo Section - Fixed */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                scrollToSection('home');
              }
              setIsMenuOpen(false);
            }}
            className="flex items-center"
          >
            <div className="relative h-14 w-auto flex items-center">
              <img
                src={assets.rc_logo}
                alt="RC Homes Logo"
                className="h-full w-auto max-h-14 object-contain"
                onError={(e) => {
                  console.error('Logo failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="relative px-4 py-2 font-medium transition-all duration-300 cursor-pointer font-bold"
                style={{
                  color: activeMenu === `/${item.id}` ? colors.primary : colors.text,
                  margin: '0 4px'
                }}
                onClick={(e) => handleMenuItemClick(e, item)}
                onMouseEnter={(e) => {
                  if (activeMenu !== `/${item.id}`) {
                    e.currentTarget.style.color = colors.primary;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeMenu !== `/${item.id}`) {
                    e.currentTarget.style.color = colors.text;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <div className="flex items-center gap-2 font-semibold">
                  {item.icon}
                  <span>{item.name}</span>
                </div>

                {/* Active Indicator Line */}
                {activeMenu === `/${item.id}` && (
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: colors.primary,
                      boxShadow: `0 0 10px ${colors.primary}`
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/916377964494?text=Hi%20I%20want%20to%20book%20a%20room%20at%20RC%20Homes%20PG"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
              }}
            >
              <Calendar size={18} />
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              className="rounded-xl p-2 transition-all duration-300 md:hidden hover:scale-110"
              style={{
                backgroundColor: colors.primaryLight,
                boxShadow: `0 4px 12px rgba(255, 107, 157, 0.2)`
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} style={{ color: colors.primaryDark }} />
              ) : (
                <Menu size={24} style={{ color: colors.primaryDark }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="mt-4 rounded-2xl md:hidden animate-fadeIn"
            style={{
              backgroundColor: colors.white,
              boxShadow: `0 20px 40px rgba(255, 107, 157, 0.15)`,
              border: `2px solid ${colors.primaryLight}`
            }}
          >
            <div className="flex flex-col space-y-1 p-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all ${activeMenu === `/${item.id}` ? 'scale-105' : ''
                    }`}
                  style={{
                    color: activeMenu === `/${item.id}` ? colors.primaryDark : colors.text,
                    backgroundColor: activeMenu === `/${item.id}` ? colors.primaryLight : colors.background,
                    borderLeft: activeMenu === `/${item.id}` ? `4px solid ${colors.primary}` : '4px solid transparent'
                  }}
                  onClick={(e) => handleMenuItemClick(e, item)}
                  onMouseEnter={(e) => {
                    if (activeMenu !== `/${item.id}`) {
                      e.currentTarget.style.backgroundColor = colors.primaryLight;
                      e.currentTarget.style.color = colors.primaryDark;
                      e.currentTarget.style.transform = 'translateX(8px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeMenu !== `/${item.id}`) {
                      e.currentTarget.style.backgroundColor = colors.background;
                      e.currentTarget.style.color = colors.text;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <div style={{ color: activeMenu === `/${item.id}` ? colors.primary : colors.textLight }}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>

                  {/* Active indicator for mobile */}
                  {activeMenu === `/${item.id}` && (
                    <div className="ml-auto w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.primary }} />
                  )}
                </a>
              ))}

              {/* Mobile Contact Info */}
              <div className="mt-6 space-y-4 pt-6 border-t" style={{ borderColor: colors.primaryLight }}>
                <a
                  href="tel:6377964494"
                  className="flex items-center gap-3 transition-all hover:scale-105"
                >
                  <div className="rounded-full p-2" style={{ backgroundColor: colors.primaryLight }}>
                    <Phone size={16} style={{ color: colors.primary }} />
                  </div>
                  <span style={{ color: colors.text }}>6377964494</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="rounded-full p-2" style={{ backgroundColor: colors.primaryLight }}>
                    <MapPin size={16} style={{ color: colors.primary }} />
                  </div>
                  <span style={{ color: colors.text }}>Durgapura, Jaipur</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full p-2" style={{ backgroundColor: colors.primaryLight }}>
                    <HomeIcon size={16} style={{ color: colors.primary }} />
                  </div>
                  <span style={{ color: colors.text }}>
                    Rooms Available:
                    <span className="ml-2 font-bold" style={{ color: colors.success }}>
                      {roomsAvailable}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;