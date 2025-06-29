"use client";
import React from 'react'
import { DashedSeparator } from './dashed-separator'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MaxWidthWrapper } from '../layout/max-width';

export const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })



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
      className='my-20 py-20 px-4 sm:px-6 lg:px-32 bg-[#F8F4EB]'
    >
      <MaxWidthWrapper>
        <motion.div variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
          }
        }} className='grid grid-cols-1 lg:grid-cols-2 items-end gap-6 lg:gap-8'>
          <div className='w-full'>
            <div className="mx-auto flex items-center justify-center max-w-md w-full gap-x-0.5">
              <DashedSeparator />
              <h3 className='text-[#EC7754] text-base sm:text-lg font-medium w-full text-center'>Our services</h3>
              <DashedSeparator />
            </div>
            <h2 className="mt-2 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#333333] font-semibold leading-tight">What services we Offer</h2>
          </div>
          <div>
            <p className='text-sm sm:text-base leading-relaxed text-[#EC7754] text-center lg:text-start'>Our clinic offers a sanctuary for those seeking transformative care. With a commitment to excellence and a passion for personalized </p>
          </div>
        </motion.div>

        <motion.div variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
          }
        }}>
          <Carousel
            plugins={[Autoplay({ delay: 3000 })]}
            className='w-full pt-8 sm:pt-10'
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className='flex -ml-2 sm:-ml-4'>
              <CarouselItem className='pl-2 sm:pl-4 basis-4/5 sm:basis-3/4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3'>
                <Service
                  title='Hip Augmentation'
                  description='is simply dummy text of the printing and typesetting industry.'
                  coverImageUrl='/hip-aug.png'
                />
              </CarouselItem>
              <CarouselItem className='pl-2 sm:pl-4 basis-4/5 sm:basis-3/4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3'>
                <Service
                  coverImageUrl='/botox.png'
                  description='is simply dummy text of the printing and typesetting industry.'
                  title='Botox Injection'
                />
              </CarouselItem>
              <CarouselItem className='pl-2 sm:pl-4 basis-4/5 sm:basis-3/4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3'>
                <Service
                  coverImageUrl='/implant.png'
                  description='is simply dummy text of the printing and typesetting industry.'
                  title='Breast Implant'
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 }
            }
          }}
          className='flex flex-row justify-center sm:justify-end mt-12 sm:mt-16'
        >
          <Button className='bg-[#D4A380] hover:bg-[#C19660] text-white transition-colors duration-200' size={'lg'}>
            <p>See More</p>
            <ArrowRight className='ml-2' />
          </Button>
        </motion.div>
      </MaxWidthWrapper>
    </motion.div>
  )
}

function Service({ coverImageUrl, description, title }: { coverImageUrl: string, title: string, description: string }) {
  return (
    <div className='relative pb-20 sm:pb-24'>
      <Image
        alt={title}
        src={coverImageUrl}
        width={384}
        height={453}
        className='mx-auto w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[384px] h-auto object-cover rounded-lg'
        loading='lazy'
      />
      <div className='absolute bottom-0 w-full px-2'>
        <div className='py-4 sm:py-5 px-4 sm:px-5 bg-white w-full max-w-[280px] sm:max-w-xs mx-auto rounded-lg shadow-lg'>
          <div className="flex flex-row justify-start items-start gap-3">
            <Image
              alt=''
              src={"/service.svg"}
              height={60}
              width={60}
              className='flex-shrink-0 w-12 h-12 sm:w-15 sm:h-15'
              loading='lazy'
            />
            <div className='flex flex-col items-start justify-start space-y-3 sm:space-y-4 flex-1'>
              <h3 className='text-lg sm:text-xl font-medium text-[#5E6282] leading-tight'>{title}</h3>
              <p className='text-xs sm:text-sm text-[#5E6282] leading-relaxed'>{description}</p>
              <Link href={""} className='text-[#D4A380] hover:text-[#C19660] flex flex-row items-center justify-start space-x-1.5 transition-colors duration-200'>
                <h4 className='text-sm'>See more</h4>
                <ArrowRight className='w-4 h-4' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
