import React from 'react'
import { DashedSeparator } from './dashed-separator'
import Image from 'next/image'
import { MaxWidthWrapper } from '../layout/max-width'

export const Gallery = () => {
  return (
    <MaxWidthWrapper>
      <div className='py-16 lg:py-24'>
        {/* Header Section */}
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16'>
          {/* Left Side - Title */}
          <div className='flex-shrink-0 text-center lg:text-left lg:w-80'>
            <div className="flex flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <DashedSeparator />
              <h3 className='text-[#EC7754] text-2xl md:text-3xl font-medium whitespace-nowrap'>Photos</h3>
              <DashedSeparator />
            </div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-[#333333] leading-tight'>
              Our Gallery
            </h2>
          </div>

          {/* Right Side - Gallery Image */}
          <div className='flex-1 w-full'>
            <div className='relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group'>
              <div className='aspect-[4/3] lg:aspect-[3/2] relative'>
                <Image
                  src='/gallery.png'
                  alt='Gallery of spa treatments and wellness services'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-700'
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 60vw"
                  priority
                />

                {/* Subtle overlay for better image enhancement */}
                <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
