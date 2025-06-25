'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Success Stories', href: '#stories' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='py-4 lg:py-8 w-full bg-[#FBEDE4]'>
      <div className='max-w-7xl mx-auto px-6 lg:px-24 flex items-center justify-between'>
        {/* Logo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          className="flex-shrink-0"
        >
          <Image 
            src='/logo.svg' 
            alt='dermaeleganceLogo' 
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
            <motion.div key={item.label} variants={navItemVariants}>
              <Link
                href={item.href}
                className="transition-colors"
              >
                {item.label}
              </Link>
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='max-w-7xl mx-auto px-6 lg:px-24 overflow-hidden'
          >
            <div className='md:hidden mt-4 pb-4 border-t border-[#D4A380]/20'>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={navContainerVariants}
                className='flex flex-col space-y-3 pt-4'
              >
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.label} variants={navItemVariants}>
                    <Link
                      href={item.href}
                      className='text-[#374151] hover:text-[#374151]/80 transition-colors py-2 block'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}