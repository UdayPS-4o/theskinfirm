'use client';

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MaxWidthWrapper } from '../layout/max-width'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export const PremiumServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });



  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            staggerChildren: 0.2
          }
        }
      }}
      className='w-full mt-10 pt-5 lg:pt-10 pb-10 lg:pb-20'
    >
      <MaxWidthWrapper>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10'>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 }
              }
            }}
            className='text-center text-[#D4A380] text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-10'
          >
            Our Premium Services
          </motion.h2>
          
          <motion.div variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 }
            }
          }}>
            <Carousel
              plugins={[Autoplay({ delay: 4000 })]}
              className='w-full'
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className='flex -ml-2 sm:-ml-4'>
                <CarouselItem className='pl-2 sm:pl-4 basis-full sm:basis-4/5 md:basis-1/2 lg:basis-1/3'>
                  <Service
                    title='Mesotherapy'
                    description='Advanced rejuvenation therapy that delivers nutrients directly to the skin for enhanced radiance and texture.'
                    coverImageUrl='/mesotherapy.png'
                  />
                </CarouselItem>
                <CarouselItem className='pl-2 sm:pl-4 basis-full sm:basis-4/5 md:basis-1/2 lg:basis-1/3'>
                  <Service
                    coverImageUrl='/prp.png'
                    title='PRP Therapy'
                    description="Harness your body's natural healing abilities to stimulate collagen production and hair growth."
                  />
                </CarouselItem>
                <CarouselItem className='pl-2 sm:pl-4 basis-full sm:basis-4/5 md:basis-1/2 lg:basis-1/3'>
                  <Service
                    coverImageUrl='/laser.png'
                    description='State-of-the-art laser technology for permanent reduction of unwanted hair with minimal discomfort.'
                    title='Laser Hair Removal'
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </motion.div>
  )
}

function Service({coverImageUrl, description, title}: {coverImageUrl: string, title: string, description: string}){
  return (
    <div className='w-full h-full'>
      <div className='p-3 sm:p-4 shadow-lg rounded-xl bg-white h-full flex flex-col max-w-sm mx-auto'>
        <div className='flex-shrink-0'>
          <Image 
            src={coverImageUrl} 
            alt={title} 
            width={355} 
            height={159} 
            className='w-full h-32 sm:h-40 object-cover rounded-lg' 
            loading='lazy'
          />
        </div>
        <div className='flex-1 flex flex-col justify-between pt-3 sm:pt-4'>
          <div>
            <h4 className='text-center text-[#333333] font-semibold text-base sm:text-lg mb-2 sm:mb-3'>{title}</h4>
            <p className='text-sm sm:text-[15px] leading-relaxed text-[#333333] text-center px-1 sm:px-2'>{description}</p>
          </div>
          <div className="relative mt-4 pt-3 border-t border-neutral-200">
            <Link href="" className='flex items-center justify-center text-[#D4A380] hover:text-[#C19660] transition-colors duration-200'>
              <span className='text-sm font-medium mr-2'>Learn More</span>
              <ArrowRight className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
