'use client';

import React from 'react'
import { DashedSeparator } from './dashed-separator'
import { Accordion, AccordionContent, AccordionTrigger } from '../ui/accordion'
import { AccordionItem } from '@radix-ui/react-accordion'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className='mt-24 mx-6 lg:mx-24 mb-22'>
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className='mx-auto flex items-center justify-center max-w-xs gap-x-2'
      >
        <DashedSeparator />
        <h3 className='text-[#EC7754] text-3xl font-medium'>FAQ</h3>
        <DashedSeparator />
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-2 text-[#333333] text-3xl lg:text-5xl font-semibold text-center"
      >
        Frequently Asked Questions
      </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <Accordion type='single' collapsible className='mt-10'>
          <AccordionItem value='1' className='py-12 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg'>
            <AccordionTrigger className='text-[#1F2937] text-2xl font-medium' >
              What treatments are available for acne?
            </AccordionTrigger>
            <AccordionContent className='text-[#4B5563] text-2xl'>
              We offer a variety of effective acne treatments including chemical peels, laser therapy, microdermabrasion, and customized skincare regimens tailored to your specific skin type and concerns.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='2' className='py-12 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg'>
            <AccordionTrigger className='text-[#1F2937] text-2xl font-medium'>
              How many sessions of laser hair reduction will I need?
            </AccordionTrigger>
            <AccordionContent className='text-[#4B5563] text-2xl'>
              We offer a variety of effective acne treatments including chemical peels, laser therapy, microdermabrasion, and customized skincare regimens tailored to your specific skin type and concerns.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='3' className='py-12 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg'>
            <AccordionTrigger className='text-[#1F2937] text-2xl font-medium'>
              What causes hyperpigmentation and how is it treated?
            </AccordionTrigger>
            <AccordionContent className='text-[#4B5563] text-2xl'>
              We offer a variety of effective acne treatments including chemical peels, laser therapy, microdermabrasion, and customized skincare regimens tailored to your specific skin type and concerns.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </motion.div>
    </div>
  )
}
