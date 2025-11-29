"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../layout/max-width";

export default function DrKarishmaSection() {
  return (
    <section className="py-12 md:py-20 bg-[#FDFBF7]">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/2 sticky top-24">
            <div className="relative w-full max-w-[280px] md:max-w-sm mx-auto">
              <div className="absolute inset-0 border-2 border-[#D4A373] transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"></div>
              <div className="relative aspect-[3/4] bg-gray-200">
                <Image
                  src="/Dr-Karishma-Singh-The-Skin-Firm-Pune3.png"
                  alt="Dr. Karishma Singh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-[#D4A373] rounded-full -z-10 opacity-20"></div>
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-[#E0C097] rounded-full -z-10 opacity-20"></div>
          </div>
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <div className="border-b border-[#D4A373] pb-4 md:pb-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-2">Dr. Karishma Singh</h2>
              <p className="text-base md:text-lg text-[#666]">Skin Specialist | Co-Founder & Owner, The Skin Firm</p>
            </div>
            <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                Dr. Karishma Singh, owner and co-founder of <span className="text-black font-medium">The Skin Firm</span>, NIBM Pune, is a highly regarded skin specialist celebrated for her refined approach to skin and hair care. With over five years of specialised expertise, she has helped hundreds achieve radiant, youthful skin and healthy hair through treatments that deliver visible, lasting results.
              </p>
              <p>
                Renowned for her <span className="text-black font-medium">gentle precision</span> and patient-centric philosophy, Dr. Karishma combines medical excellence with an artistic eye, offering luxury skin treatments, <span className="text-black font-medium">advanced laser procedures</span>, <span className="text-black font-medium">anti-ageing solutions</span>, and <span className="text-black font-medium">hair restoration therapies</span>. Her calm demeanour and ethical approach have established her as one of the most trusted dermatologists in Pune.
              </p>
              <p>
                At <span className="text-black font-medium">The Skin Firm</span>, Dr. Karishma leads a team committed to delivering premium, personalised care in an elegant, welcoming environment. Every treatment reflects her vision merging cutting-edge <span className="text-black font-medium">science</span> with <span className="text-black font-medium">empathy</span> to enhance natural beauty while restoring <span className="text-black font-medium">long-term skin health</span>.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-[#D4A373] shadow-sm">
              <p className="italic text-gray-700 text-sm md:text-base">
                Whether you&apos;re beginning your skincare journey or seeking expert solutions for advanced concerns, Dr. Karishma&apos;s expertise and holistic approach make her the partner your skin has been waiting for.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
