import React from 'react'
import { DashedSeparator } from './dashed-separator'
import Image from 'next/image'

export const About = () => {
  return (
    <div className='w-full mt-20 bg-[#F8F4EB] py-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-20'>
        <div className='mx-auto flex items-center justify-center max-w-xs gap-x-2'>
        <DashedSeparator />
        <h3 className='text-[#EC7754] text-lg font-medium'>About</h3>
        <DashedSeparator />
      </div>
      <h2 className="mt-5 text-center font-semibold text-4xl text-[#333333]">About Skinfirm</h2>
      <div className="mt-28 flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className='flex flex-row items-center lg:items-start justify-center gap-x-6 max-w-sm'>
          <Image src={"/rocket.svg"} width={52} height={52} alt='Rooted in Vision' loading='lazy' />
          <div>
            <h3 className='font-semibold text-xl text-[#333333] mb-2'>Rooted in Vision</h3>
            <p className='text-start text-wrap text-lg'>We&apos;re more than a clinic, we&apos;re a growing movement in skin health. With a clear vision to redefine dermatology in Pune and beyond, The Skin Firm is committed to raising the standards of care, one confident client at a time. Our growth is guided by purpose, not just progress.</p>
          </div>
        </div>
        <div className='flex flex-row items-center lg:items-start justify-center gap-x-6 max-w-sm'>
          <Image src={"/bulb.svg"} width={42} height={52} alt='Driven by Innovation' loading='lazy' />
          <div>
            <h3 className='font-semibold text-xl text-[#333333] mb-2'>Driven by Innovation</h3>
            <p className='text-start text-wrap text-lg'>At the heart of The Skin Firm is a constant evolution. We invest in the latest technologies, research-backed treatments, and artistic techniques not to follow trends, but to deliver results that are effective, safe, and uniquely tailored to modern Indian skin.</p>
          </div>
        </div>
        <div className='flex flex-row items-center lg:items-start justify-center gap-x-6 max-w-sm'>
         <Image src={"/360.svg"} width={52} height={26} alt='Care from Every Angle' loading='lazy' />
          <div>
            <h3 className='font-semibold text-xl text-[#333333] mb-2'>Care, from Every Angle</h3>
            <p className='text-start text-wrap text-lg'>We take a 360° approach to your skin and hair, treating concerns from their root, with a holistic blend of dermatology, aesthetics, nutrition, and lifestyle support. Because true beauty isn&apos;t just skin deep, and neither is our care.</p>
          </div>
        </div>
      </div>
      {/* <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-[52px] px-4 lg:px-[52px]">
        <Image src={'/about.png'} alt='about' width={495} height={495} className='w-full h-full' />
        <p className='py-14 text-lg lg:text-2xl text-center lg:text-start'>Lorem Ipsum is simply dummy text of
the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s, when an unknown printer took
a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
also the leap into electronic
typesetting, remaining essentially unchanged.</p>
        </div> */}
      </div>
    </div>
  )
}