'use client';

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const PremiumServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className='w-full mt-10 pt-5 lg:pt-10 pb-10 lg:pb-20'>
      <div className='max-w-7xl mx-auto px-5 lg:px-10'>
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className='text-center text-[#D4A380] text-5xl font-bold mb-10'
        >
          Our Premium Services
        </motion.h2>
        <div className='flex flex-row items-stretch justify-center flex-wrap gap-5'>
        <Service 
          title='Mesotherapy' 
          description='Advanced rejuvenation therapy that delivers nutrients directly to the skin for enhanced radiance and texture.'
          coverImageUrl='/mesotherapy.png'
          isInView={isInView}
          delay={0.1}
        />
        <Service 
        coverImageUrl='/prp.png'
        title='PRP Therapy'
        description="Harness your body's natural healing abilities to stimulate collagen production and hair growth."
        isInView={isInView}
        delay={0.2}
        />
        <Service 
          coverImageUrl='/laser.png'
          description='State-of-the-art laser technology for permanent reduction of unwanted hair with minimal discomfort..'
          title='Laser Hair Removal'
          isInView={isInView}
          delay={0.3}
        />
        
        </div>
      </div>
    </div>
  )
}

function Service({coverImageUrl, description, title, isInView, delay}:{coverImageUrl: string, title: string, description: string, isInView: boolean, delay: number}){
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className='p-4 shadow-sm rounded-xl w-fit max-w-sm'
    >
          <Image src={coverImageUrl} alt='' width={355} height={159} className='w-full' />
          <h4 className='py-2 text-center text-[#333333] font-semibold text-lg'>{title}</h4>
          <div className="relative border-x border-b rounded-b-lg border-neutral-300 flex-1">
          <p className='text-[17px]/[30px] text-[#333333] text-center text-wrap'>{description}</p>
          <Link href="">
            <ArrowRight className='absolute bottom-1 right-5 text-[#D4A380]' />
          </Link>
          </div>
        </motion.div>
  )
}