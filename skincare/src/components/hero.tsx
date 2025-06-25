'use client';
import React from 'react'

import { Button } from '../ui/button'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link';

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className='w-full bg-[#FBEDE4] pb-8 lg:pb-14 pt-4 lg:pt-8'>
      <div className='max-w-7xl mx-auto px-6 lg:px-24'>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 h-full'
        >
          <div className='col-span-1 lg:col-span-2 order-2 lg:order-1'>
            <div className='max-w-2xl'>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-[#8A7B70] text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-normal font-medium'
              >
                Reveal your most radiant self with personalized skincare
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 lg:gap-6"
              >
                <Link href="#contact">
                  <Button
                    size={'lg'}
                    className='w-full sm:w-auto flex flex-row items-center justify-center gap-x-3.5 text-white hover:bg-[#D4A380]/90 rounded-[48px] bg-[#d4a380] py-[14px] px-[30px] !px-[30px] !py-[14px] h-[54px] min-h-[54px]'
                    style={{ paddingLeft: 30, paddingRight: 30, height: 54, minHeight: 54 }}
                  >
                    <p className='text-base leading-7'>
                      Book Consultation
                    </p>
                    <ArrowRight className='size-6' />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    size={'lg'}
                    className='w-full sm:w-auto flex flex-row items-center justify-center gap-x-3.5 bg-transparent text-[#8A8A8A] hover:bg-transparent border-[#808080] border rounded-full !px-[30px] !py-[14px] h-[54px] min-h-[54px]'
                    style={{ paddingLeft: 30, paddingRight: 30, height: 54, minHeight: 54 }}
                  >
                    <p className='text-base leading-7'>
                      Explore Services
                    </p>
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='mt-8 lg:mt-14 grid grid-cols-1 md:grid-cols-5 gap-4 items-end'
            >
              <div className='col-span-1 md:col-span-3 rounded-2xl min-h-[280px] lg:min-h-[320px] w-full bg-cover bg-center p-4 lg:p-6 flex flex-col justify-between' style={{backgroundImage: 'url(hero-offer-bg.png)'}}>
                <div className='flex flex-row items-center justify-between w-full'>
                  <Button size={'lg'} className='py-3 lg:py-4 px-5 lg:px-7 rounded-full flex flex-row items-center gap-x-3.5 bg-transparent text-[#151515] hover:bg-transparent border-[#151515] border text-sm lg:text-base'>
                    <p className='leading-6 lg:leading-7'>
                      Special Offer
                    </p>
                  </Button>
                  <Button className='rounded-full bg-white hover:bg-white p-2 lg:p-3'>
                    <ArrowUpRight className='text-[#D4A380] w-6 lg:w-8 h-auto' />
                  </Button>
                </div>
                <div className='w-full flex flex-col items-start justify-end gap-y-1.5'>
                  <h2 className='text-2xl lg:text-[40px] leading-tight lg:leading-normal text-[#151515] font-semibold'>Upto <br /> 20% OFF</h2>
                  <p className='text-[#151515] text-sm lg:text-base max-w-full lg:max-w-8/12 leading-relaxed'>Experience transformative skincare solutions tailored to your unique needs by certified specialists</p>
                </div>
              </div>
              <div className='col-span-1 md:col-span-2 flex justify-center'>
                <Image src={'/hero-graphic-1.png'} width={334} height={430} alt='Skincare treatment' className='w-full max-w-[280px] lg:max-w-[334px] h-auto object-contain' />
              </div>
            </motion.div>
          </div>
          <div className='hidden lg:flex lg:flex-col col-span-1 order-1 lg:order-2'>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-[#A89689] text-sm lg:text-base mb-6 lg:mb-10 text-center lg:text-left'
            >
              Experience transformative skincare solutions tailored to your unique needs by certified specialists
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex justify-center lg:justify-start h-full'
            >
              <Image className='w-full max-w-[300px] lg:max-w-none lg:w-full h-full object-cover rounded-2xl' src={'/hero-graphic-2.png'} width={457} height={598} alt='Beautiful woman with clear skin' />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
