"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MaxWidthWrapper } from "@/components/layout/max-width";

import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type ViewMode = "grid" | "masonry";
type FilterCategory =
  | "all"
  | "acne"
  | "pigmentation"
  | "aging"
  | "hair"
  | "facial"
  | "cosmetic"
  | "clinic";

interface GalleryImage {
  id: number;
  src: string;
  category: FilterCategory;
}

const GalleryPageClient = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [viewMode] = useState<ViewMode>("grid");
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced gallery data with correct treatment names and categories
  const galleryImages: GalleryImage[] = useMemo(
    () => [
      { id: 2, src: "/gallery/2.png", category: "acne" },
      { id: 3, src: "/gallery/3.png", category: "pigmentation" },
      { id: 4, src: "/gallery/4.png", category: "acne" },
      { id: 5, src: "/gallery/5.png", category: "aging" },
      { id: 6, src: "/gallery/6.png", category: "pigmentation" },
      { id: 7, src: "/gallery/7.png", category: "pigmentation" },
      { id: 8, src: "/gallery/8.png", category: "facial" },
      { id: 9, src: "/gallery/9.png", category: "acne" },
      { id: 10, src: "/gallery/10.png", category: "facial" },
      { id: 11, src: "/gallery/11.png", category: "facial" },
      { id: 12, src: "/gallery/12.png", category: "facial" },
      { id: 13, src: "/gallery/13.png", category: "facial" },
      { id: 14, src: "/gallery/14.png", category: "facial" },
      { id: 15, src: "/gallery/15.png", category: "facial" },
      { id: 16, src: "/gallery/16.png", category: "facial" },
      { id: 17, src: "/gallery/17.png", category: "facial" },
      { id: 18, src: "/gallery/18.png", category: "hair" },
      { id: 19, src: "/gallery/19.png", category: "hair" },
      { id: 20, src: "/gallery/20.png", category: "hair" },
      { id: 21, src: "/gallery/21.png", category: "hair" },
      { id: 22, src: "/gallery/22.png", category: "hair" },
      { id: 23, src: "/gallery/23.png", category: "hair" },
      { id: 24, src: "/clinic/The Skin Firm Pune.jpg", category: "clinic" },
      {
        id: 25,
        src: "/clinic/sitting-theskinfirm-pune.jpg",
        category: "clinic",
      },
      {
        id: 26,
        src: "/clinic/reception-theskinfirm-pune.jpg",
        category: "clinic",
      },
      {
        id: 27,
        src: "/clinic/procedureroom-theskinfirm-pune.jpg",
        category: "clinic",
      },
      {
        id: 28,
        src: "/clinic/procedureroom mirror-theskinfirm-pune.jpg",
        category: "clinic",
      },
      {
        id: 29,
        src: "/clinic/machinery-theskinfirm-pune.jpg",
        category: "clinic",
      },
      {
        id: 30,
        src: "/clinic/mirrortagline-theskinfirm-pune.jpg",
        category: "clinic",
      },
      {
        id: 31,
        src: "/clinic/machinery2-theskinfirm-pune.jpg.jpg",
        category: "clinic",
      },
      {
        id: 33,
        src: "/clinic/laserroom2-theskinfirm-pune.jpg",
        category: "clinic",
      },
      { id: 34, src: "/clinic/hall-theskinfirm-pune.jpg", category: "clinic" },
      {
        id: 35,
        src: "/clinic/doctor_s cabin-theskinfirm-pune.jpg",
        category: "clinic",
      },
    ],
    []
  );

  const filterCategories = [
    {
      key: "all" as FilterCategory,
      label: "All Treatments",
      count: galleryImages.length,
    },
    {
      key: "acne" as FilterCategory,
      label: "Acne & Scars",
      count: galleryImages.filter((img) => img.category === "acne").length,
    },
    {
      key: "pigmentation" as FilterCategory,
      label: "Pigmentation",
      count: galleryImages.filter((img) => img.category === "pigmentation")
        .length,
    },
    {
      key: "aging" as FilterCategory,
      label: "Anti-Aging",
      count: galleryImages.filter((img) => img.category === "aging").length,
    },
    {
      key: "facial" as FilterCategory,
      label: "Facial Treatments",
      count: galleryImages.filter((img) => img.category === "facial").length,
    },
    {
      key: "hair" as FilterCategory,
      label: "Hair Treatments",
      count: galleryImages.filter((img) => img.category === "hair").length,
    },
    {
      key: "clinic" as FilterCategory,
      label: "Clinic",
      count: galleryImages.filter((img) => img.category === "clinic").length,
    },
  ];

  const filteredImages = useMemo(() => {
    return activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);
  }, [galleryImages, activeFilter]);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(
      filteredImages.findIndex((img) => img.id === image.id)
    );
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % filteredImages.length
        : (currentImageIndex - 1 + filteredImages.length) %
        filteredImages.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleFilterChange = (filter: FilterCategory) => {
    setIsLoading(true);
    setActiveFilter(filter);
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-gallery-background-from)] via-[var(--color-gallery-background-via)] to-[var(--color-gallery-background-to)]">
      <div className="py-16 lg:py-24">
        <MaxWidthWrapper>
          {/* Enhanced Header Section */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex flex-row items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              <motion.h3
                className="text-[color:var(--color-primary-orange)] text-2xl md:text-3xl font-medium whitespace-nowrap bg-gradient-to-r from-[color:var(--color-primary-orange)] to-[color:var(--color-primary-brown)] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Transformation Gallery
              </motion.h3>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[color:var(--color-dark-text)] leading-tight mb-8 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Real Results,{" "}
              </motion.span>
              <motion.span
                className="inline-block bg-gradient-to-r from-[#EC7754] to-[#D4A380] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Real Stories
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-[color:var(--color-light-text)] max-w-4xl mx-auto text-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Witness the incredible transformations achieved through our
              advanced treatments. Each image tells a story of renewed
              confidence and radiant skin.
            </motion.p>
          </motion.div>

          {/* Filter and View Controls */}
          <motion.div
            className="mb-12 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {/* Category Filters */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              {filterCategories.map((category, index) => (
                <motion.button
                  key={category.key}
                  onClick={() => handleFilterChange(category.key)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2 ${activeFilter === category.key
                      ? "bg-gradient-to-r from-[var(--color-primary-orange)] to-[var(--color-primary-brown)] text-white border-[var(--color-primary-orange)] shadow-lg shadow-[var(--color-primary-orange)]/25"
                      : "bg-white/80 text-[color:var(--color-light-text)] border-[var(--color-border-light)] hover:border-[var(--color-primary-orange)] hover:text-[color:var(--color-primary-orange)] hover:shadow-md"
                    }`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(236, 119, 84, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0 + index * 0.1 }}
                  >
                    {category.label}
                  </motion.span>
                  <motion.span
                    className="ml-2 px-2 py-1 text-xs rounded-full bg-black/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 2.2 + index * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    {category.count}
                  </motion.span>
                </motion.button>
              ))}
            </motion.div>

            {/* View Mode Toggle and Stats */}
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.6 }}
              >
                <motion.span
                  className="text-[#8A7B70] font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8 }}
                >
                  Showing {filteredImages.length}{" "}
                  {filteredImages.length === 1 ? "result" : "results"}
                </motion.span>
                <AnimatePresence>
                  {isLoading && (
                    <motion.div
                      className="w-5 h-5 border-2 border-[color:var(--color-primary-orange)] border-t-transparent rounded-full animate-spin"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>

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
            </motion.div>
          </motion.div>

          {/* Enhanced Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className={`${viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-white ${viewMode === "masonry"
                      ? "break-inside-avoid mb-6"
                      : "aspect-square"
                    }`}
                  initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: 15 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 3.0 + index * 0.15,
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                  }}
                  onClick={() => openModal(image)}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    rotateY: -2,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  whileTap={{ scale: 0.97, rotateY: 1 }}
                >
                  <div
                    className={`relative ${viewMode === "masonry" ? "aspect-[4/5]" : "aspect-square"}`}
                  >
                    <Image
                      src={image.src}
                      alt={`Treatment ${image.id}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Enhanced Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-black-80)] via-[color:var(--color-black-20)] to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <motion.div
                            className="flex items-center gap-2 text-white"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <ZoomIn size={16} />
                            </motion.div>
                            <span className="text-sm font-medium">
                              View Details
                            </span>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1 bg-[color:var(--color-white-90)] backdrop-blur-sm rounded-full text-xs font-medium text-[color:var(--color-light-text)] capitalize"
                      initial={{ opacity: 0, scale: 0, x: -10 }}
                      whileHover={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.1,
                      }}
                    >
                      {image.category}
                    </motion.div>
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
              <h3 className="text-2xl font-semibold text-[color:var(--color-dark-text)] mb-2">
                No results found
              </h3>
              <p className="text-[color:var(--color-light-text)]">
                Try adjusting your filter to see more results.
              </p>
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
                  onClick={() => navigateImage("prev")}
                  disabled={currentImageIndex === 0}
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                >
                  <ChevronLeft size={20} className="text-[#333333]" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-4 flex items-center">
                <button
                  onClick={() => navigateImage("next")}
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
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/40 hover:bg-white/60"
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

export default GalleryPageClient;
