'use client';

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { MaxWidthWrapper } from './max-width';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Gallery', href: '/gallery' },
  // { label: 'Success Stories', href: '#stories' },
  // { label: 'Blog', href: '#news' },
  { label: 'Contact', href: '/#contact' },
];

// Skin service groups/categories that redirect to services page
const SKIN_SERVICE_GROUPS = [
  "Acne and Acne Scars",
  "Pigmentation",
  "Skin Discoloration",
  "Aging and Wrinkles",
  "Skin Texture",
  "Other Skin Concerns",
  "Facials",
  "Chemical Peel",
  "Advanced Skin Treatment",
  "Lifting and Tightening",
  "Trending Services",
  "Specialty Treatment"
];

// Mapping skin service groups to their section IDs for scrolling
const SKIN_GROUP_TO_SECTION = {
  "Acne and Acne Scars": "acne-and-acne-scars",
  "Pigmentation": "pigmentation",
  "Skin Discoloration": "skin-discoloration",
  "Aging and Wrinkles": "aging-and-wrinkles",
  "Skin Texture": "skin-texture",
  "Other Skin Concerns": "other-skin-concerns",
  "Facials": "facials",
  "Chemical Peel": "chemical-peel",
  "Advanced Skin Treatment": "advanced-skin-treatment",
  "Lifting and Tightening": "lifting-and-tightening",
  "Trending Services": "trending-services",
  "Specialty Treatment": "specialty-treatment"
};

const HAIR_SERVICES = [
  "PRP Hair Treatment",
  "Hair Loss Treatment",
  "Hair Mesotherapy",
  "QR678 Treatment",
  "Hair Density Improvement",
  "Hair Regrowth",
  "Postnatal Hair Loss Treatment",
  "Alopecia Areata Treatment",
  "Hair Loss Treatment for Men"
];

const LASER_SERVICES = [
  "Laser Hair Removal",
  "Leg Hair Removal",
  "Bikini Hair Removal",
  "Laser Beard Shaping",
  "Diode Laser Hair Removal",
  "CO2 Laser for Skin",
  "QSwitch ND YAG Laser",
  "Carbon Laser Facial",
  "Tattoo Removal"
];

// Service name to slug mapping for exact URL generation
const SERVICE_TO_SLUG_MAP: Record<string, string> = {
  "PRP Hair Treatment": "prp-hair-treatment",
  "Hair Loss Treatment": "hair-loss-treatment",
  "Hair Mesotherapy": "hair-mesotherapy",
  "QR678 Treatment": "qr678-treatment",
  "Hair Density Improvement": "hair-density-improvement",
  "Hair Regrowth": "hair-regrowth",
  "Postnatal Hair Loss Treatment": "postnatal-hair-loss-treatment",
  "Alopecia Areata Treatment": "alopecia-areata-treatment",
  "Hair Loss Treatment for Men": "hair-loss-treatment-for-men",
  "Laser Hair Removal": "laser-hair-removal",
  "Leg Hair Removal": "leg-hair-removal",
  "Bikini Hair Removal": "bikini-hair-removal",
  "Laser Beard Shaping": "laser-beard-shaping",
  "Diode Laser Hair Removal": "diode-laser-hair-removal",
  "CO2 Laser for Skin": "co2-laser-for-skin",
  "QSwitch ND YAG Laser": "qswitch-nd-yag-laser",
  "Carbon Laser Facial": "carbon-laser-facial",
  "Tattoo Removal": "tattoo-removal"
};

// Helper function to convert service name to slug
const getServiceSlug = (serviceName: string): string => {
  return SERVICE_TO_SLUG_MAP[serviceName] || serviceName.toLowerCase().replace(/\s+/g, '-');
};

// Mobile Service Categories Component - Collapsible
const MobileServiceCategories = ({ onLinkClick }: { onLinkClick: () => void }) => {
  const [skinOpen, setSkinOpen] = useState(false);
  const [hairOpen, setHairOpen] = useState(false);
  const [laserOpen, setLaserOpen] = useState(false);

  const handleLinkClick = () => {
    // Reset body overflow when navigating
    document.body.style.overflow = 'unset';
    onLinkClick();
  };

  return (
    <div className="space-y-4">
      {/* Skin Services */}
      <div>
        <button
          onClick={() => setSkinOpen(!skinOpen)}
          className="flex items-center justify-between w-full mb-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-[#D4A380] to-[#B8956A] rounded-full"></div>
            <h3 className="font-semibold text-[#374151] text-base">Skin Services</h3>
          </div>
          <ChevronDown className={`w-4 h-4 text-[#374151] transition-transform duration-200 ${skinOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {skinOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-1 pl-4 overflow-hidden"
            >
              {SKIN_SERVICE_GROUPS.map((group, index) => (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={`/services#_${SKIN_GROUP_TO_SECTION[group as keyof typeof SKIN_GROUP_TO_SECTION]}`}
                    className="block text-sm text-[#374151] hover:text-[#D4A380] py-1.5 transition-all duration-200"
                    onClick={handleLinkClick}
                  >
                    {group}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Hair Services */}
      <div>
        <button
          onClick={() => setHairOpen(!hairOpen)}
          className="flex items-center justify-between w-full mb-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-[#D4A380] to-[#B8956A] rounded-full"></div>
            <h3 className="font-semibold text-[#374151] text-base">Hair Services</h3>
          </div>
          <ChevronDown className={`w-4 h-4 text-[#374151] transition-transform duration-200 ${hairOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {hairOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-1 pl-4 overflow-hidden"
            >
              {HAIR_SERVICES.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={`/services/${getServiceSlug(service)}`}
                    className="block text-sm text-[#374151] hover:text-[#D4A380] py-1.5 transition-all duration-200"
                    onClick={handleLinkClick}
                  >
                    {service}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Laser Services */}
      <div>
        <button
          onClick={() => setLaserOpen(!laserOpen)}
          className="flex items-center justify-between w-full mb-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-[#D4A380] to-[#B8956A] rounded-full"></div>
            <h3 className="font-semibold text-[#374151] text-base">Laser Services</h3>
          </div>
          <ChevronDown className={`w-4 h-4 text-[#374151] transition-transform duration-200 ${laserOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {laserOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-1 pl-4 overflow-hidden"
            >
              {LASER_SERVICES.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={`/services/${getServiceSlug(service)}`}
                    className="block text-sm text-[#374151] hover:text-[#D4A380] py-1.5 transition-all duration-200"
                    onClick={handleLinkClick}
                  >
                    {service}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const logoVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const navContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const closeDropdown = () => setIsDropdownOpen(false);
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };
  
  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // Prevent background scrolling when mobile menu is open
    if (newMenuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Clean up body overflow on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`py-4 lg:py-4 w-full bg-[#FBEDE4] sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg backdrop-blur-sm bg-[#FBEDE4]/95' : ''
    }`}>
      <MaxWidthWrapper className='flex items-center justify-between'>
        {/* Logo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          className="flex-shrink-0"
        >
          <Image
            src='/logo.svg'
            alt='The Skin FirmLogo'
            width={120}
            height={57}
            className='h-10 lg:h-14 w-auto'
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navContainerVariants}
          className='hidden md:flex md:justify-center gap-x-7 *:text-[#374151] *:hover:text-[#374151]/80 *:transition-colors'
        >
          {NAV_ITEMS.map((item) => (
            <motion.div key={item.label} variants={navItemVariants} className="relative">
              {item.hasDropdown ? (
                <div
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="transition-colors flex items-center gap-1 py-1"
                    onClick={closeDropdown}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ 
                          duration: 0.4, 
                          ease: [0.25, 0.46, 0.45, 0.94],
                          staggerChildren: 0.1,
                          delayChildren: 0.1
                        }}
                        className="absolute top-full left-[-550px] max-lg:left-[-550px] md:max-lg:left-[-500px] pt-1 z-50"
                      >
                        <div className="bg-gradient-to-br from-[#FBEDE4] to-[#F5E6D3] backdrop-blur-xl rounded-2xl shadow-2xl border border-[#D4A380]/20 p-8 w-[min(800px,calc(100vw-4rem))] max-w-[800px]">
                        <div className="grid grid-cols-3 gap-8">
                          {/* Skin Services */}
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="group relative"
                          >
                            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#D4A380]/20">
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.3, type: "spring" }}
                                className="w-2.5 h-2.5 bg-gradient-to-r from-[#D4A380] to-[#B8956A] rounded-full shadow-sm"
                              ></motion.div>
                              <h3 className="font-bold text-[#374151] text-lg tracking-tight">Skin Services</h3>
                            </div>
                            <div className="space-y-1">
                              {SKIN_SERVICE_GROUPS.map((group, index) => (
                                <motion.div
                                  key={group}
                                  initial={{ opacity: 0, y: -20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + (index * 0.03), duration: 0.2 }}
                                >
                                  <Link
                                    href={`/services#_${SKIN_GROUP_TO_SECTION[group as keyof typeof SKIN_GROUP_TO_SECTION]}`}
                                    className="text-sm text-[#374151] hover:text-[#D4A380] hover:bg-white/40 transition-all duration-200 block py-2 px-3 rounded-lg hover:translate-x-1 font-medium border border-transparent hover:border-[#D4A380]/20 hover:shadow-sm"
                                    onClick={closeDropdown}
                                  >
                                    {group}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                          
                          {/* Hair Services */}
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                            className="group relative"
                          >
                            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#D4A380]/20">
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.25, duration: 0.3, type: "spring" }}
                                className="w-2.5 h-2.5 bg-gradient-to-r from-[#D4A380] to-[#B8956A] rounded-full shadow-sm"
                              ></motion.div>
                              <h3 className="font-bold text-[#374151] text-lg tracking-tight">Hair Services</h3>
                            </div>
                            <div className="space-y-1">
                              {HAIR_SERVICES.map((service, index) => (
                                <motion.div
                                  key={service}
                                  initial={{ opacity: 0, y: -20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.25 + (index * 0.03), duration: 0.2 }}
                                >
                                  <Link
                                    href={`/services/${getServiceSlug(service)}`}
                                    className="text-sm text-[#374151] hover:text-[#D4A380] hover:bg-white/40 transition-all duration-200 block py-2 px-3 rounded-lg hover:translate-x-1 font-medium border border-transparent hover:border-[#D4A380]/20 hover:shadow-sm"
                                    onClick={closeDropdown}
                                  >
                                    {service}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                          
                          {/* Laser Services */}
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className="group relative"
                          >
                            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#D4A380]/20">
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.3, type: "spring" }}
                                className="w-2.5 h-2.5 bg-gradient-to-r from-[#D4A380] to-[#B8956A] rounded-full shadow-sm"
                              ></motion.div>
                              <h3 className="font-bold text-[#374151] text-lg tracking-tight">Laser Services</h3>
                            </div>
                            <div className="space-y-1">
                              {LASER_SERVICES.map((service, index) => (
                                <motion.div
                                  key={service}
                                  initial={{ opacity: 0, y: -20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + (index * 0.03), duration: 0.2 }}
                                >
                                  <Link
                                    href={`/services/${getServiceSlug(service)}`}
                                    className="text-sm text-[#374151] hover:text-[#D4A380] hover:bg-white/40 transition-all duration-200 block py-2 px-3 rounded-lg hover:translate-x-1 font-medium border border-transparent hover:border-[#D4A380]/20 hover:shadow-sm"
                                    onClick={closeDropdown}
                                  >
                                    {service}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors flex items-center py-1"
                  onClick={closeDropdown}
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden p-2 rounded-md text-[#374151] hover:text-[#374151]/80 focus:outline-none focus:ring-2 focus:ring-[#D4A380]'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </MaxWidthWrapper>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='fixed inset-x-0 top-[72px] bg-[#FBEDE4] border-t border-[#D4A380]/20 shadow-lg z-40 overflow-y-auto'
            style={{ maxHeight: 'calc(100vh - 72px)' }}
          >
            <div className='max-w-7xl mx-auto px-6 lg:px-24 pb-8'>
              <div className='md:hidden py-4'>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={navContainerVariants}
                  className='flex flex-col space-y-1'
                >
                  {NAV_ITEMS.map((item) => (
                    <motion.div key={item.label} variants={navItemVariants}>
                      {item.hasDropdown ? (
                        <div>
                          <Link
                            href={item.href}
                            className='text-[#374151] hover:text-[#374151]/80 transition-colors py-3 block font-medium mb-3'
                            onClick={closeMobileMenu}
                          >
                            {item.label}
                          </Link>
                          
                          {/* Always show services - no toggle needed */}
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="bg-gradient-to-br from-[#FBEDE4] to-[#F5E6D3] rounded-xl p-5 border border-[#D4A380]/20"
                          >
                            <MobileServiceCategories onLinkClick={closeMobileMenu} />
                          </motion.div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className='text-[#374151] hover:text-[#374151]/80 transition-colors py-3 block font-medium'
                          onClick={closeMobileMenu}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
