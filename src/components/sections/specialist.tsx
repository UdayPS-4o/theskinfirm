import React from 'react'
import { DashedSeparator } from './dashed-separator'
import Image from 'next/image'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { Button } from '../ui/button'

export const Specialist = () => {
  return (
    <div className='py-12 md:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto flex items-center justify-center max-w-xs gap-x-2'>
          <DashedSeparator />
          <h3 className='text-[#EC7754] text-2xl md:text-3xl font-medium whitespace-nowrap'>Specialist</h3>
          <DashedSeparator />
        </div>
        <h2 className="mt-5 text-center font-semibold text-4xl md:text-5xl text-[#333333]">Specialist in Pune</h2>
        <Image alt='' src={'/specialist-hello.svg'} width={122} height={61} className='mt-6 mx-auto' loading='lazy' />
        
        <div className='relative mt-8 text-center'>
          <h2 className='text-5xl md:text-7xl lg:text-8xl text-[#171717] text-center font-bold leading-tight'>
            I&apos;m <span className='text-[#FD853A]'>Dr. Karishma</span>, <br /> <span className='text-[#FD853A]'>Skin</span> Specialist
          </h2>
          
          <div className='relative mt-[-20px] md:mt-[-40px] lg:mt-[-60px] flex justify-center items-end'>
            <div className='hidden md:block absolute left-0 bottom-20'>
              <Quote fill='#344054' className='text-[#344054] rotate-180' />
              <p className='mt-6 max-w-[280px] text-[#6C6C6C] text-left'>
                Led by Dr. Karishma Singh, our clinic offers comprehensive skin assessment, evidence-based treatments, and ongoing support.
              </p>
            </div>
            
            <div className='z-10 mt-8'>
              <Image alt='Skin Specialist' src={'/skin-specialist.svg.png'} width={500} height={400} className='mx-auto' loading='lazy' />
            </div>

            <div className='hidden md:block absolute right-0 bottom-20 text-right'>
              <div className='flex items-center justify-end'>
                <Star className='text-[#FD853A] p-0.5' fill='#FD853A' />
                <Star className='text-[#FD853A] p-0.5' fill='#FD853A' />
                <Star className='text-[#FD853A] p-0.5' fill='#FD853A' />
                <Star className='text-[#FD853A] p-0.5' fill='#FD853A' />
                <Star className='text-[#FD853A] p-0.5' fill='#FD853A' />
              </div>
              <h4 className="mt-5 text-4xl md:text-5xl font-bold text-[#171717]">5 Years</h4>
              <h5 className="mt-1 text-xl text-[#171717]">Experience</h5>
            </div>
          </div>

          <div className="mt-8 w-full flex justify-center">
            <Button className='bg-[#D4A380] text-white rounded-full gap-x-2' size={'lg'}>
              Book Consultation
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}