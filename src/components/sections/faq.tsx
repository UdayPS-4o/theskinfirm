"use client";

import React from "react";
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
      <div ref={ref} className="py-20 lg:py-28 mx-6 lg:mx-24">
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
              className="py-6 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
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
              className="py-6 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
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
              className="py-6 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
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
            <AccordionItem
              value="4"
              className="py-6 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
            >
              <AccordionTrigger className="text-[#1F2937] text-2xl font-medium">
                Are your treatments safe for all skin types?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-2xl">
                Absolutely. All our procedures are performed using FDA-approved
                technology and dermatologist-supervised protocols, making them
                safe and effective across various Indian skin types and tones.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="5"
              className="py-6 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
            >
              <AccordionTrigger className="text-[#1F2937] text-2xl font-medium">
                Will I need multiple sessions?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-2xl">
                That depends on your concern and the treatment chosen. While
                some procedures offer visible results in a single session,
                others (like laser or hair restoration) require a series of
                sessions for long-term results. We&apos;ll guide you every step
                of the way.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="6"
              className="py-6 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
            >
              <AccordionTrigger className="text-[#1F2937] text-2xl font-medium">
                Do you offer treatments for men as well?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-2xl">
                Yes, we provide specialised skin and hair treatments for men,
                too, including beard shaping, hair loss therapy, skin
                rejuvenation, and acne control.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="7"
              className="py-6 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
            >
              <AccordionTrigger className="text-[#1F2937] text-2xl font-medium">
                Where is The Skin Firm located?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-2xl">
                We&apos;re located in NIBM, Pune, easily accessible from all
                parts of the city. You can find our address and contact details
                on the Contact Us page or simply reach out to book your visit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="8"
              className="py-6 px-6 lg:px-24 data-[state=open]:shadow-2xl rounded-lg"
            >
              <AccordionTrigger className="text-[#1F2937] text-2xl font-medium">
                How do I book an appointment?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-2xl">
                You can call or WhatsApp us directly, or fill out the booking
                form on our website. Our team will get in touch to schedule your
                consultation at a time convenient for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};
