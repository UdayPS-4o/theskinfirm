'use client';
import React from 'react'

import { Button } from '../ui/button'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link';
import { MaxWidthWrapper } from '../layout/max-width';

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className='w-full bg-[#FBEDE4] pb-8 lg:pb-14 pt-8 lg:pt-8'>
      <MaxWidthWrapper>
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
                  style={{ willChange: 'transform, opacity' }}
                >
                  Reveal your most radiant self with<br />personalized skincare
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 lg:gap-6"
                >
                  <Link href="#contact" className="w-full sm:w-auto" aria-label="Book a consultation with our skincare specialists">
                    <Button
                      size={'lg'}
                      className='w-full sm:w-auto lg:w-fit flex flex-row items-center justify-center gap-x-3.5 text-white hover:bg-[#D4A380]/90 rounded-[48px] bg-[#d4a380] py-[14px] px-[30px] !px-[30px] !py-[14px] h-[54px] min-h-[54px] text-center'
                      style={{ paddingLeft: 30, paddingRight: 30, height: 54, minHeight: 54 }}
                      aria-label="Book Consultation"
                    >
                      <span className='text-base leading-7 text-center'>
                        Book Consultation
                      </span>
                      <ArrowRight className='size-6' aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href="/services" className="w-full sm:w-auto" aria-label="Explore our skincare services and treatments">
                    <Button
                      size={'lg'}
                      className='w-full sm:w-auto lg:w-fit flex flex-row items-center justify-center gap-x-3.5 bg-transparent text-[#4A4A4A] hover:bg-gray-100 border-[#606060] border rounded-full !px-[30px] !py-[14px] h-[54px] min-h-[54px] text-center'
                      style={{ paddingLeft: 30, paddingRight: 30, height: 54, minHeight: 54 }}
                      aria-label="Explore Services"
                    >
                      <span className='text-base leading-7 text-center'>
                        Explore Services
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='mt-8 lg:mt-14 grid grid-cols-1 sm:grid-cols-5 gap-4 items-end'
              >
                <div className='relative col-span-1 sm:col-span-3 rounded-2xl min-h-[280px] lg:min-h-[355px] w-full max-w-[400px] mx-auto lg:max-w-none lg:mx-0 bg-cover bg-center p-4 lg:p-6 flex flex-col justify-between overflow-hidden'>
                  <Image src="/hero-offer-bg.png" alt="Special offer background with skincare treatment imagery" fill className="object-cover rounded-2xl" loading="lazy" style={{zIndex: 0}}/>
                  <div className='flex flex-row items-center justify-between w-full relative z-10'>
                    <Link href="/#contact">
                      <Button size={'lg'} className='py-3 lg:py-4 px-5 lg:px-7 rounded-full flex flex-row items-center gap-x-3.5 bg-transparent text-[#151515] hover:bg-gray-100 border-[#151515] border text-sm lg:text-base' aria-label="View special offer details">
                        <span className='leading-6 lg:leading-7'>
                          Special Offer
                        </span>
                      </Button>
                    </Link>
                    <Link href="/#contact">
                      <Button className='rounded-full bg-white hover:bg-gray-100 p-2 lg:p-3' aria-label="Learn more about special offer">
                        <ArrowUpRight className='text-[#D4A380] w-6 lg:w-8 h-auto' aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                  <div className='w-full flex flex-col items-start justify-end gap-y-1.5 relative z-10'>
                    <h2 className='text-2xl lg:text-[40px] leading-tight lg:leading-normal text-[#151515] font-semibold'>Upto <br /> 20% OFF</h2>
                    <p className='text-[#151515] text-sm lg:text-base max-w-full lg:max-w-8/12 leading-relaxed'>On pre-bridal & custom treatment packages curated uniquely for your skin, hair, and glow goals.</p>
                  </div>
                </div>
                <div className='col-span-1 sm:col-span-2 flex justify-center'>
                  <Image src={'/hero-graphic-1.png'} width={334} height={430} alt='Professional skincare treatment being performed by certified specialist' className='w-full max-w-[380px] h-auto object-contain' loading='lazy' />
                </div>
              </motion.div>
            </div>
            <div className='hidden lg:flex lg:flex-col col-span-1 order-1 lg:order-2'>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-[#A89689] text-sm lg:text-base mb-6 lg:mb-10 text-center lg:text-left lg:pt-3'
              >
                Experience transformative skincare solutions tailored to your unique needs by certified specialists
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex justify-center lg:justify-start h-full'
              >
                <Image className='w-full max-w-[300px] max-h-[490px] lg:max-w-none lg:w-full h-full object-cover rounded-2xl' src={'/home/hero-right.png'} width={457} height={490} alt='Woman with radiant, healthy skin after professional skincare treatment' priority />
              </motion.div>
            </div>
          </motion.div>
      </MaxWidthWrapper>
    </div>
  )
}
