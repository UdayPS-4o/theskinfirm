'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MaxWidthWrapper } from '@/components/layout/max-width';
import { DashedSeparator } from '@/components/sections/dashed-separator';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

type ViewMode = 'grid' | 'masonry';
type FilterCategory = 'all' | 'acne' | 'pigmentation' | 'aging' | 'hair' | 'facial' | 'cosmetic';

interface GalleryImage {
  id: number;
  src: string;
  category: FilterCategory;
}

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [viewMode] = useState<ViewMode>('grid');
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced gallery data with correct treatment names and categories
  const galleryImages: GalleryImage[] = useMemo(() => [
    { id: 2, src: '/gallery/2.png', category: 'acne' },
    { id: 3, src: '/gallery/3.png', category: 'pigmentation' },
    { id: 4, src: '/gallery/4.png', category: 'acne' },
    { id: 5, src: '/gallery/5.png', category: 'aging' },
    { id: 6, src: '/gallery/6.png', category: 'pigmentation' },
    { id: 7, src: '/gallery/7.png', category: 'pigmentation' },
    { id: 8, src: '/gallery/8.png', category: 'facial' },
    { id: 9, src: '/gallery/9.png', category: 'acne' },
    { id: 10, src: '/gallery/10.png', category: 'facial' },
    { id: 11, src: '/gallery/11.png', category: 'facial' },
    { id: 12, src: '/gallery/12.png', category: 'facial' },
    { id: 13, src: '/gallery/13.png', category: 'facial' },
    { id: 14, src: '/gallery/14.png', category: 'facial' },
    { id: 15, src: '/gallery/15.png', category: 'facial' },
    { id: 16, src: '/gallery/16.png', category: 'facial' },
    { id: 17, src: '/gallery/17.png', category: 'facial' },
    { id: 18, src: '/gallery/18.png', category: 'hair' },
    { id: 19, src: '/gallery/19.png', category: 'hair' },
    { id: 20, src: '/gallery/20.png', category: 'hair' },
    { id: 21, src: '/gallery/21.png', category: 'hair' },
    { id: 22, src: '/gallery/22.png', category: 'hair' },
    { id: 23, src: '/gallery/23.png', category: 'hair' },
  ], []);

  const filterCategories = [
    { key: 'all' as FilterCategory, label: 'All Treatments', count: galleryImages.length },
    { key: 'acne' as FilterCategory, label: 'Acne & Scars', count: galleryImages.filter(img => img.category === 'acne').length },
    { key: 'pigmentation' as FilterCategory, label: 'Pigmentation', count: galleryImages.filter(img => img.category === 'pigmentation').length },
    { key: 'aging' as FilterCategory, label: 'Anti-Aging', count: galleryImages.filter(img => img.category === 'aging').length },
    { key: 'facial' as FilterCategory, label: 'Facial Treatments', count: galleryImages.filter(img => img.category === 'facial').length },
    { key: 'hair' as FilterCategory, label: 'Hair Treatments', count: galleryImages.filter(img => img.category === 'hair').length },
  ];

  const filteredImages = useMemo(() => {
    return activeFilter === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === activeFilter);
  }, [galleryImages, activeFilter]);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % filteredImages.length
      : (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleFilterChange = (filter: FilterCategory) => {
    setIsLoading(true);
    setActiveFilter(filter);
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFBF7] via-[#FBF8F3] to-[#F8F4EF]">
      <div className="py-16 lg:py-24">
        <MaxWidthWrapper>
          {/* Enhanced Header Section */}
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-row items-center justify-center gap-4 mb-8">
              <DashedSeparator />
              <h3 className="text-[#EC7754] text-2xl md:text-3xl font-medium whitespace-nowrap bg-gradient-to-r from-[#EC7754] to-[#D4A380] bg-clip-text text-transparent">
                Transformation Gallery
              </h3>
              <DashedSeparator />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#333333] leading-tight mb-8 tracking-tight">
              Real Results,{' '}
              <span className="bg-gradient-to-r from-[#EC7754] to-[#D4A380] bg-clip-text text-transparent">
                Real Stories
              </span>
            </h1>
            <p className="text-[#8A7B70] max-w-4xl mx-auto text-xl leading-relaxed">
              Witness the incredible transformations achieved through our advanced treatments. 
              Each image tells a story of renewed confidence and radiant skin.
            </p>
          </motion.div>

          {/* Filter and View Controls */}
          <motion.div 
            className="mb-12 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {filterCategories.map((category) => (
                <motion.button
                  key={category.key}
                  onClick={() => handleFilterChange(category.key)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                    activeFilter === category.key
                      ? 'bg-gradient-to-r from-[#EC7754] to-[#D4A380] text-white border-[#EC7754] shadow-lg shadow-[#EC7754]/25'
                      : 'bg-white/80 text-[#8A7B70] border-[#E5E5E5] hover:border-[#EC7754] hover:text-[#EC7754] hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-black/10">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle and Stats */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[#8A7B70] font-medium">
                  Showing {filteredImages.length} {filteredImages.length === 1 ? 'result' : 'results'}
                </span>
                {isLoading && (
                  <div className="w-5 h-5 border-2 border-[#EC7754] border-t-transparent rounded-full animate-spin" />
                )}
              </div>
              
              {/* <div className="flex items-center gap-2 bg-white/80 rounded-full p-1 border border-[#E5E5E5]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-[#EC7754] text-white shadow-md'
                      : 'text-[#8A7B70] hover:text-[#EC7754]'
                  }`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    viewMode === 'masonry'
                      ? 'bg-[#EC7754] text-white shadow-md'
                      : 'text-[#8A7B70] hover:text-[#EC7754]'
                  }`}
                >
                  <LayoutGrid size={18} />
                </button>
              </div> */}
            </div>
          </motion.div>

          {/* Enhanced Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className={`${
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-white ${
                    viewMode === 'masonry' ? 'break-inside-avoid mb-6' : 'aspect-square'
                  }`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  onClick={() => openModal(image)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`relative ${viewMode === 'masonry' ? 'aspect-[4/5]' : 'aspect-square'}`}>
                    <Image
                      src={image.src}
                      alt={`Treatment ${image.id}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center gap-2 text-white">
                            <ZoomIn size={16} />
                            <span className="text-sm font-medium">View Details</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#8A7B70] capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-[#333333] mb-2">No results found</h3>
              <p className="text-[#8A7B70]">Try adjusting your filter to see more results.</p>
            </motion.div>
          )}
        </MaxWidthWrapper>
      </div>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-6xl max-h-[90vh] mx-4 bg-white rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
                <div className="flex justify-between items-start">
                  <div className="text-white">
                    <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium capitalize">
                      {selectedImage.category}
                    </span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative h-[70vh] bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={selectedImage.src}
                  alt={`Treatment ${selectedImage.id}`}
                  fill
                  className="object-contain p-4"
                  sizes="90vw"
                />
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-y-0 left-4 flex items-center">
                <button
                  onClick={() => navigateImage('prev')}
                  disabled={currentImageIndex === 0}
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                >
                  <ChevronLeft size={20} className="text-[#333333]" />
                </button>
              </div>
              
              <div className="absolute inset-y-0 right-4 flex items-center">
                <button
                  onClick={() => navigateImage('next')}
                  disabled={currentImageIndex === filteredImages.length - 1}
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                >
                  <ChevronRight size={20} className="text-[#333333]" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex justify-between items-center text-white">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">
                      {currentImageIndex + 1} of {filteredImages.length}
                    </span>
                    <div className="flex gap-1">
                      {filteredImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentImageIndex(index);
                            setSelectedImage(filteredImages[index]);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200">
                      <ZoomIn size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;