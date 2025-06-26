"use client";

import React from "react";
import { DashedSeparator } from "./dashed-separator";
import { Accordion, AccordionContent, AccordionTrigger } from "../ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MaxWidthWrapper } from "../layout/max-width";

export const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <MaxWidthWrapper>
      <div className="mt-24 mx-6 lg:mx-24 mb-22">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex items-center justify-center max-w-xs gap-x-2"
        >
          <DashedSeparator />
          <h3 className="text-[#EC7754] text-3xl font-medium">FAQ</h3>
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
          <Accordion type="single" collapsible className="mt-10">
            <AccordionItem
              value="1"
              className="py-12 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
            >
              <AccordionTrigger className="text-[#1F2937] text-2xl font-medium">
                What treatments does The Skin Firm offer?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-2xl">
                We offer a wide range of advanced skin and hair treatments,
                including laser procedures, facials, acne solutions,
                pigmentation correction, anti-ageing treatments, hair
                restoration therapies, and more. All treatments are personalised
                based on your skin type and concerns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="2"
              className="py-12 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
            >
              <AccordionTrigger className="text-[#1F2937] text-2xl font-medium">
                How do I know which treatment is right for me?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-2xl">
                Your journey begins with a one-on-one consultation. Our
                dermatologist will assess your skin or hair condition,
                understand your goals, and recommend a custom treatment plan
                tailored specifically for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="3"
              className="py-12 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
            >
              <AccordionTrigger className="text-[#1F2937] text-2xl font-medium">
                Is there a consultation fee?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-2xl">
                Yes, we charge a nominal consultation fee that ensures dedicated
                time and expert attention from our dermatologist. This fee is
                adjusted in certain cases if you choose to go ahead with the
                treatment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};
