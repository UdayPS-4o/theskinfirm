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
    <nav className='py-3 sm:py-4 lg:py-8 w-full bg-[#FBEDE4]'>
      <div className='max-w-7xl mx-auto px-3 sm:px-6 lg:px-24 flex items-center justify-between'>
        {/* Logo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          className="flex-shrink-0"
        >
          <Image 
            src='/logo.svg' 
            alt='The Skin Firm Logo' 
            width={100} 
            height={48} 
            className='h-8 sm:h-10 lg:h-14 w-auto'
            priority
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navContainerVariants}
          className='hidden md:flex md:justify-center gap-x-5 lg:gap-x-7 *:text-[#374151] *:hover:text-[#374151]/80 *:transition-colors'
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
          className='md:hidden p-2 rounded-md text-[#374151] hover:text-[#374151]/80 focus:outline-none focus:ring-2 focus:ring-[#D4A380] ml-2'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            className='w-full bg-[#FBEDE4] md:hidden shadow-lg z-50 fixed left-0 top-0 pt-20 pb-6 px-4 min-h-screen'
            style={{maxWidth:'100vw'}}
          >
            <div className='flex flex-col space-y-4 pt-2'>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className='text-lg text-[#374151] hover:text-[#374151]/80 transition-colors py-3 px-2 block rounded-lg text-center font-medium'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
