"use client";
import React from 'react'

import { DashedSeparator } from './dashed-separator'
import Image from 'next/image';
import { MaxWidthWrapper } from '../layout/max-width';

export const SuccessStories = () => {
  return (
    <MaxWidthWrapper>
      <div className='mx-4 lg:mx-24 mt-24'>
        <div className='mx-auto flex items-center justify-center max-w-xs gap-x-2'>
          <DashedSeparator />
          <h3 className='text-[#EC7754] text-3xl font-medium'>Stories</h3>
          <DashedSeparator />
        </div>
        <h2 className="mt-5 text-center font-semibold text-5xl text-[#333333]">Success Stories</h2>
        <div className='w-full h-full bg-no-repeat pb-7' style={{ backgroundImage: "url(/success-stories-bg.svg)", backgroundPosition: 'center' }}>
          <div className="mt-20 flex flex-col items-center justify-start gap-y-3">
            <div className='w-full max-w-3xl p-6 bg-white shadow-2xl'>
              <div className='bg-white/20 pt-10 pb-14 px-5 lg:px-20 text-center w-full shadow-md'>
                <p className='text-[#1B1C1E]'>Dr. Reed truly listens and develops a treatment plan that works for your specific needs. My rosacea is finally under control after years of struggling.</p>
                <h4 className="mt-5 text-[#1B1C1E] text-lg font-medium">Emily Rodriguez</h4>
              </div>
            </div>
            <Image width={84} height={84} alt='emily' src={'/emily.png'} />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10'>
          <div className='shadow-lg pt-5 px-3 pb-12'>
            <div className="py-2 mb-5 text-center shadow-lg text-[#8A7B70] text-xl">
              Before & After
            </div>
            <div className='grid grid-cols-2 gap-2 lg:gap-16'>
              <div>
                <div className="bg-[#FFFBF9] text-[#A89689] py-2.5 mb-3 text-center shadow-md">
                  Before
                </div>
                <Image src={'/before-treatment.png'} alt='before treatment' height={224} width={250} className='h-56 w-full' />
              </div>
              <div>
                <div className="bg-[#FFFBF9] text-[#A89689] py-2.5 mb-3 text-center shadow-md">
                  After
                </div>
                <Image src={'/after-treatment.png'} alt='after treatment' height={224} width={250} className='h-56 w-full' />
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="py-2 mb-5 text-center shadow-lg text-[#8A7B70] text-xl">
              Client Results
            </div>
            <Image src={"/client-result.svg"} width={322} height={322} alt='' className='mx-auto' />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
