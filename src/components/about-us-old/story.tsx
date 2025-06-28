"use client";

import Image from "next/image";
import { MaxWidthWrapper } from "../layout/max-width";

export default function DrKarishmaSection() {
  return (
    <section className="relative bg-[#FBEDE4] mb-14 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-18 lg:py-20 mt-14 overflow-hidden rounded-bl-[75px] rounded-tr-[75px]">
      <MaxWidthWrapper>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-8 xl:gap-12">
          {/* Image */}
          <div className="w-full lg:w-[42%] flex justify-center mb-6 md:mb-8 lg:mb-0">
            <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] w-full">
              <Image
                src="/about-us-images/Karishma2.png"
                alt="Dr. Karishma Singh"
                width={488}
                height={673}
                className="w-full h-auto object-cover mx-auto"
              />
            </div>
          </div>

          {/* Dr. Karishma Singh Content */}
          <div className="w-full lg:w-[58%] lg:pl-4 xl:pl-6">
            <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-5 xl:gap-6 items-center lg:items-start text-center lg:text-left relative w-full">
              {/* Header Section */}
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 items-center lg:items-start relative">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-[22px] leading-tight lg:leading-[28px] text-[#ec7754] font-medium">
                  ---------- About ----------
                </h3>
                
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[42px] leading-tight lg:leading-[50px] text-[#333333] font-semibold">
                  Dr. Karishma Singh
                </h1>
              </div>
              
              {/* Credentials Card */}
              <div className="shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] rounded-lg border border-[#e9d7c7] px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-4 md:py-5 lg:py-5 flex flex-col gap-1 sm:gap-1.5 md:gap-2 items-center lg:items-start relative bg-white w-full">
                <h5 className="text-sm sm:text-base md:text-base lg:text-lg leading-5 text-[#333333] font-medium">
                  MBBS, MD Dermatology
                </h5>
                <p className="text-xs sm:text-sm md:text-sm leading-4 md:leading-5">
                  <span className="text-[#8a7b70] font-medium">
                    Co-Founder & Medical Director, 
                  </span>
                  <span className="text-[#ec7754] font-semibold">
                    The Skin Firm
                  </span>
                </p>
              </div>
              
              {/* Main Description */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center lg:items-start w-full">
                <div className="space-y-3 sm:space-y-4 md:space-y-4">
                  <p className="text-xs sm:text-sm md:text-sm lg:text-[14px] leading-relaxed md:leading-[20px] lg:leading-[22px] text-[#1c1e53] font-medium">
                    Dr. Karishma Singh is a renowned dermatologist and aesthetic physician based in NIBM, Pune, and the visionary co-founder of The Skin Firm. With over five years of focused experience in dermatology and cosmetology, she has helped hundreds of individuals transform their skin and hair with results that are not just visible, but lasting.
                  </p>
                  
                  <p className="text-xs sm:text-sm md:text-sm lg:text-[14px] leading-relaxed md:leading-[20px] lg:leading-[22px] text-[#1c1e53] font-medium">
                    Known for her gentle precision and deep understanding of her patients&apos; unique needs, Dr. Karishma blends clinical expertise with an artist&apos;s eye, delivering customised treatments that enhance natural beauty and restore skin health from within.
                  </p>
                  
                  <p className="text-xs sm:text-sm md:text-sm lg:text-[14px] leading-relaxed md:leading-[20px] lg:leading-[22px] text-[#1c1e53] font-medium">
                    She specialises in advanced laser procedures, anti-ageing treatments, and hair restoration therapies, always staying at the forefront of aesthetic innovation. Her calm demeanour, patient-first approach, and commitment to ethical dermatology have made her one of the most trusted skin doctors in Pune.
                  </p>
                  
                  <p className="text-xs sm:text-sm md:text-sm lg:text-[14px] leading-relaxed md:leading-[20px] lg:leading-[22px] text-[#1c1e53] font-medium">
                    At The Skin Firm, Dr. Karishma leads a team that shares her vision to offer honest, effective, and personalised care in a space where clients feel seen, heard, and supported. Every treatment under her guidance is built on the foundation of science, empathy, and long-term well-being.
                  </p>
                </div>
              </div>
              
              {/* Quote Section */}
              <div className="rounded-[10px] border border-[#f9efe7] px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 flex flex-col items-center lg:items-start w-full bg-[#fdf9f5]">
                <p className="text-xs sm:text-xs md:text-xs lg:text-[12px] leading-relaxed md:leading-5 text-black font-medium">
                  Whether you&apos;re beginning your skincare journey or seeking expert solutions for advanced concerns, Dr. Karishma&apos;s expertise and holistic approach make her the partner your skin has been waiting for.
                </p>
              </div>
              
              {/* CTA Button */}
              {/* <button className="rounded-[5px] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-3 flex gap-[8px] justify-center items-center bg-[#d4a380] hover:bg-[#c88d5c] transition-colors duration-200 w-full sm:w-auto mx-auto lg:mx-0">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg leading-[24px] text-white font-semibold">
                  Book a free consultation
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
