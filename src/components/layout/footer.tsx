'use client';

import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className='pt-16 pb-10 px-4 lg:px-12 bg-[#F8F4EB] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className='md:col-span-2 lg:col-span-1 flex flex-col justify-start gap-y-5 items-start'
      >
        <h3 className='text-[#8A7B70] text-xl/relaxed text-start'>The Skin Firm</h3>
        <p className='text-base/relaxed text-[#A89689] text-start'>Providing exceptional skincare services to help you achieve your most radiant, healthy skin.</p>
        <div className='flex flex-row items-center justify-start gap-x-5'>
          <Link href={""} className='p-3 rounded-full bg-[#F9EEE7]'>
          <Instagram className='size-5' color='#D4A380' />
          </Link>
          <Link href={""} className='p-3 rounded-full bg-[#F9EEE7]'>
          <Facebook className='size-5' color='#D4A380' />
          </Link>
          <Link href={""} className='p-3 rounded-full bg-[#F9EEE7]'>
          <Twitter className='size-5' color='#D4A380' />
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col justify-start gap-y-5 items-start"
      >
        <h3 className='text-[#8A7B70] text-xl/relaxed text-start'>Quick links</h3>
        <div className='flex flex-col items-start justify-start gap-y-4 *:text-[#A89689] *:text-base/relaxed *:hover:opacity-80'>
          <Link href={"#home"}>Home</Link>
          <Link href={"#about"}>About us</Link>
          <Link href={"#services"}>Services</Link>
          <Link href={"#services"}>Treatments</Link>
          <Link href={"#contact"}>Contact</Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col justify-start gap-y-5 items-start"
      >
        <h3 className='text-[#8A7B70] text-xl/relaxed text-start'>Contact Us</h3>
        <div className='flex flex-col items-start justify-start gap-y-4 *:text-[#A89689] *:text-base/relaxed *:hover:opacity-80'>
          <div className='inline-flex items-center gap-x-4'>
            <Link href={""} className='p-3 rounded-full bg-[#F9EEE7]'>
          <Phone className='size-5' color='#D4A380' />
          </Link>
            <p>+91 98765 43210</p>
          </div>
          <div className='inline-flex items-center gap-x-4'>
            <Link href={"mailto:info@theskinfirm.com"} target='_blank' className='p-3 rounded-full bg-[#F9EEE7]'>
          <Mail className='size-5' color='#D4A380' />
          </Link>
            <p>info@theskinfirm.com</p>
          </div>
          <div className='inline-flex items-center gap-x-4'>
            <Link href={"mailto:info@theskinfirm.com"} target='_blank' className='p-3 rounded-full bg-[#F9EEE7]'>
          <MapPin className='size-5' color='#D4A380' />
          </Link>
            <p className='w-fit text-start'>123 Skin Care Avenue, Pune, Maharashtra, 411001</p>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="md:col-span-2 lg:col-span-1 flex flex-col justify-start gap-y-5 items-start"
      >
        <h3 className='text-[#8A7B70] text-xl/relaxed text-start'>Opening Hours</h3>
        <div className='w-full'>
          <div className='flex flex-row items-center justify-between'>
            <p className='text-[#A89689] text-base/relaxed'>Monday - Friday</p>
            <p className='text-[#8A7B70] text-base/relaxed'>9:00 AM - 7:00 PM</p>
          </div>
          <div className='mt-4 flex flex-row items-center justify-between'>
            <p className='text-[#A89689] text-base/relaxed'>Saturday</p>
            <p className='text-[#8A7B70] text-base/relaxed'>9:00 AM - 5:00 PM</p>
          </div>
          <div className='mt-4 flex flex-row items-center justify-between'>
            <p className='text-[#A89689] text-base/relaxed'>Sunday</p>
            <p className='text-[#8A7B70] text-base/relaxed'>Closed</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}