'use client';

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const Cta2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className='mt-24 py-10 bg-radial flex items-center justify-center' style={{backgroundImage: 'url(/cta2.png)'}}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6 }}
        className='px-2 backdrop-blur-md bg-white/30 py-5 max-w-4xl'
      >
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='font-semibold text-3xl/snug text-center text-wrap text-white'
        >
          Ready for a transformation? Reserve your session with an expert skin specialist.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mt-5 flex flex-row items-center justify-center'
        >

        <Link href={""} className='max-w-lg w-full bg-white rounded-lg flex items-center justify-center gap-x-5 py-4 text-[#D4A380]'>
        <p className='text-lg'>
          Book appointment
        </p>
        <ArrowRight className='size-6' />
        </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
