import React from 'react'
import { DashedSeparator } from './dashed-separator'
import Image from 'next/image'

export const About = () => {
  return (
    <div className='w-full mt-20 bg-[#F8F4EB] py-10'>
      <div className='max-w-7xl mx-auto px-6 lg:px-20'>
        <div className='mx-auto flex items-center justify-center max-w-xs gap-x-2'>
        <DashedSeparator />
        <h3 className='text-[#EC7754] text-lg font-medium'>About</h3>
        <DashedSeparator />
      </div>
      <h2 className="mt-5 text-center font-semibold text-4xl text-[#333333]">About Skinfirm</h2>
      <div className="mt-28 flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className='flex flex-row items-center lg:items-start justify-center gap-x-6 max-w-sm'>
          <Image src={"/rocket.svg"} width={52} height={52} alt='' />
          <p className='text-start text-wrap text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s,</p>
        </div>
        <div className='flex flex-row items-center lg:items-start justify-center gap-x-6 max-w-sm'>
          <Image src={"/bulb.svg"} width={42} height={52} alt='' />
          <p className='text-start text-wrap text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s,</p>
        </div>
        <div className='flex flex-row items-center lg:items-start justify-center gap-x-6 max-w-sm'>
         <Image src={"/360.svg"} width={52} height={26} alt='' />
          <p className='text-start text-wrap text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s,</p>
        </div>
      </div>
      <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-[52px] px-4 lg:px-[52px]">
        <Image src={'/about.png'} alt='about' width={495} height={495} className='w-full h-full' />
        <p className='py-14 text-lg lg:text-2xl text-center lg:text-start'>Lorem Ipsum is simply dummy text of
the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s, when an unknown printer took
a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
also the leap into electronic
typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
    </div>
  )
}