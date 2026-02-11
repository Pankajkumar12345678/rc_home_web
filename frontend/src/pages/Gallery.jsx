import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Home, Bath, Users, Utensils, Bed, DoorOpen, Star } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    // Single Rooms
    {
      id: 1,
      category: 'single',
      title: 'Single Room',
      description: 'Private single occupancy with all amenities',
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800',
      tags: ['AC', 'Attached Bathroom', 'Study Table', 'Wardrobe']
    },
    {
      id: 2,
      category: 'single',
      title: 'Single Room Interior',
      description: 'Cozy and comfortable single room setup',
      url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800',
      tags: ['AC', 'Modern Furniture', 'Storage', 'Lighting']
    },
    // Twin Sharing
    {
      id: 3,
      category: 'twin',
      title: 'Twin Sharing Room',
      description: 'Spacious twin sharing with separate beds',
      url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800',
      tags: ['AC', '2 Beds', '2 Wardrobes', '2 Study Tables']
    },
    {
      id: 4,
      category: 'twin',
      title: 'Twin Sharing Setup',
      description: 'Perfect for friends or colleagues',
      url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800',
      tags: ['Shared Space', 'Storage', 'Comfortable', 'Organized']
    },
    // Triple Sharing
    {
      id: 5,
      category: 'triple',
      title: 'Triple Sharing Room',
      description: 'Budget-friendly triple sharing option',
      url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800',
      tags: ['AC', '3 Beds', '3 Wardrobes', 'Spacious']
    },
    {
      id: 6,
      category: 'triple',
      title: 'Triple Room Interior',
      description: 'Comfortable living for three',
      url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800',
      tags: ['3 Beds', 'Study Area', 'Storage', 'Ventilated']
    },
    // Common Areas
    {
      id: 7,
      category: 'common',
      title: 'Common Living Area',
      description: 'Spacious common area for relaxation',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800',
      tags: ['Sofa', 'TV', 'Entertainment', 'Social']
    },
    {
      id: 8,
      category: 'common',
      title: 'Study Area',
      description: 'Quiet study space for residents',
      url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800',
      tags: ['Study Table', 'Chair', 'Lighting', 'Quiet']
    },
    {
      id: 9,
      category: 'common',
      title: 'Common Balcony',
      description: 'Fresh air and relaxation space',
      url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800',
      tags: ['Balcony', 'Ventilation', 'Relax', 'View']
    },
    // Kitchen
    {
      id: 10,
      category: 'kitchen',
      title: 'Modular Kitchen',
      description: 'Fully equipped modern kitchen',
      url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      tags: ['Stove', 'Refrigerator', 'Storage', 'Clean']
    },
    {
      id: 11,
      category: 'kitchen',
      title: 'Kitchen Appliances',
      description: 'Modern appliances for cooking',
      url: 'https://images.unsplash.com/photo-1588524383516-a983d4a03d23?auto=format&fit=crop&w=800',
      tags: ['RO System', 'Geyser', 'Utensils', 'Hygienic']
    },
    {
      id: 12,
      category: 'kitchen',
      title: 'Kitchen Storage',
      description: 'Ample storage space',
      url: 'https://images.unsplash.com/photo-1559314809-2b99056a8c4a?auto=format&fit=crop&w=800',
      tags: ['Cabinets', 'Shelves', 'Organized', 'Spacious']
    },
    // Bathrooms
    {
      id: 13,
      category: 'bathrooms',
      title: 'Attached Bathroom',
      description: 'Clean and modern attached bathroom',
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800',
      tags: ['Geyser', 'Hot Water', 'Clean', 'Ventilated']
    },
    {
      id: 14,
      category: 'bathrooms',
      title: 'Bathroom Interior',
      description: 'Well-maintained bathroom facilities',
      url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800',
      tags: ['Shower', 'Mirror', 'Storage', 'Tiles']
    },
    {
      id: 15,
      category: 'bathrooms',
      title: 'Bathroom Fixtures',
      description: 'Modern fixtures and fittings',
      url: 'https://images.unsplash.com/photo-1587855042158-7c820b3e82d6?auto=format&fit=crop&w=800',
      tags: ['Modern', 'Clean', 'Maintained', 'Functional']
    },
    // Additional Common Areas
    {
      id: 16,
      category: 'common',
      title: 'Laundry Area',
      description: 'Clean laundry facility',
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      tags: ['Washing', 'Drying', 'Ironing', 'Utility']
    },
    {
      id: 17,
      category: 'common',
      title: 'Entryway',
      description: 'Beautiful entrance area',
      url: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800',
      tags: ['Entrance', 'Welcome', 'Clean', 'Safe']
    },
    {
      id: 18,
      category: 'common',
      title: 'Corridor',
      description: 'Well-lit and clean corridors',
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800',
      tags: ['Clean', 'Lighting', 'Safe', 'Spacious']
    }
  ];

  const categories = [
    { 
      id: 'all', 
      label: 'All Photos', 
      icon: <DoorOpen size={18} />, 
      count: galleryImages.length 
    },
    { 
      id: 'single', 
      label: 'Single Rooms', 
      icon: <Bed size={18} />, 
      count: galleryImages.filter(img => img.category === 'single').length 
    },
    { 
      id: 'twin', 
      label: 'Twin Sharing', 
      icon: <Bed size={18} />, 
      count: galleryImages.filter(img => img.category === 'twin').length 
    },
    { 
      id: 'triple', 
      label: 'Triple Sharing', 
      icon: <Bed size={18} />, 
      count: galleryImages.filter(img => img.category === 'triple').length 
    },
    { 
      id: 'common', 
      label: 'Common Areas', 
      icon: <Users size={18} />, 
      count: galleryImages.filter(img => img.category === 'common').length 
    },
    { 
      id: 'kitchen', 
      label: 'Kitchen', 
      icon: <Utensils size={18} />, 
      count: galleryImages.filter(img => img.category === 'kitchen').length 
    },
    { 
      id: 'bathrooms', 
      label: 'Bathrooms', 
      icon: <Bath size={18} />, 
      count: galleryImages.filter(img => img.category === 'bathrooms').length 
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

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

      {/* Hero Section - Content should be above background */}
      <section className="py-4 relative z-10">
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
                Visual Tour
              </span>
            </motion.div>

            {/* Main Heading with Typing Effect */}
            <div className="relative">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="block text-gray-800">Explore Our</span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-200 animate-gradient"
                >
                  Beautiful Spaces
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8"
              >
                Browse through photos of our rooms, kitchen, bathrooms, and common areas
              </motion.p>
            </div>
          </motion.div>

          {/* Category Filters - Make sure this is clickable */}
          <div className="flex flex-wrap gap-3 justify-center mb-8 relative z-20">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setSelectedCategory(category.id);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-pink-200 hover:shadow-md'
                }`}
              >
                <span className={selectedCategory === category.id ? 'text-white' : 'text-gray-600'}>
                  {category.icon}
                </span>
                <span className="font-medium">{category.label}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Category Description */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8 relative z-20"
          >
            <p className="text-gray-600">
              Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'} 
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto relative z-20">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  openLightbox(image);
                }}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                {/* Image Container */}
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full pointer-events-none">
                  <span className="text-xs font-medium text-white">
                    {categories.find(c => c.id === image.category)?.label}
                  </span>
                </div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-auto">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{image.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {image.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs pointer-events-none">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Click Indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md pointer-events-none">
                  <span className="text-lg">👁️</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 relative z-20"
            >
              <div className="text-5xl mb-4">📷</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Photos Found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors md:left-8"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors md:right-8"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Content */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 text-white rounded-b-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {categories.find(c => c.id === selectedImage.category)?.label}
                  </div>
                  <div className="text-sm opacity-75">
                    {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-lg opacity-90 mb-3">{selectedImage.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;