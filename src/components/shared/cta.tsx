'use client';

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const Cta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className='w-full mt-10 bg-[#e3caab] py-4 lg:py-10'>
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className='max-w-7xl mx-auto px-5 lg:px-20 text-lg lg:text-2xl/snug text-center font-bold text-white rounded-lg'
      >
        Our clinic offers a sanctuary for those seeking transformative care. With a commitment to excellence and a passion for personalized reversing the signs of aging, or revitalizing hair growth, our diverse range of treatments is designed to meet your unique needs. 
      </motion.div>
    </div>
  )
}
