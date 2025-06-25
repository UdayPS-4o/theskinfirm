import React from 'react'
import { DashedSeparator } from './dashed-separator'
import Image from 'next/image'

export const Gallery = () => {
  return (
    <div className='mt-24 mx-5 md:mx-24 shadow-sm grid grid-cols-1 lg:grid-cols-3 bg-white lg:max-h-full'>
      <div className='flex flex-col items-center justify-center pb-20 lg:pb-0 lg:pr-5 lg:pl-20 gap-5 max-w-xs mx-auto'>
        <div className="flex flex-row items-center w-full">
          <DashedSeparator />
          <h3 className='text-[#EC7754] text-3xl font-medium'>Photos</h3>
          <DashedSeparator />
        </div>
        <h2 className='mt-5 text-center font-semibold text-5xl text-[#333333]'>Our Gallery</h2>
      </div>
      <div className='lg:col-span-2 w-full p-4'>
        <div className='aspect-square relative'>
          <Image 
            src={'/gallery.png'} 
            alt='Gallery of treatments' 
            layout='fill' 
            objectFit='cover' 
            className='rounded-lg' 
          />
        </div>
      </div>
    </div>
  )
}
