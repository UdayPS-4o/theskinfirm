"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../layout/max-width";

export default function DrKarishmaSection() {

  return (
    <section id="dr_karishma" className="relative bg-[color:var(--color-light-background-alt)] mb-14 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-18 lg:py-20 overflow-hidden rounded-bl-[75px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[color:var(--color-primary-orange)]/30 to-[color:var(--color-primary-brown)]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-[color:var(--color-primary-brown)]/20 to-[color:var(--color-primary-orange)]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-[color:var(--color-primary-orange)]/15 to-[color:var(--color-primary-brown)]/15 rounded-full blur-2xl"></div>
      </div>
      <MaxWidthWrapper>
        <motion.div 
          className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-8 xl:gap-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image */}
          <motion.div 
            className="w-full lg:w-[42%] flex justify-center mb-6 md:mb-8 lg:mb-0"
            variants={{
              hidden: { opacity: 0, scale: 0.8, x: -50 },
              visible: {
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut"
                }
              }
            }}
          >
            <div className="relative max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] w-full aspect-[3/4]">
              <Image
                src="/Dr-Karishma-Singh-The-Skin-Firm-Pune3.png"
                alt="Dr. Karishma Singh"
                fill
                sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>

          {/* Dr. Karishma Singh Content */}
          <motion.div 
            className="w-full lg:w-[58%] lg:pl-4 xl:pl-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }
            }}
          >
            <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-5 xl:gap-6 items-center lg:items-start text-center lg:text-left relative w-full">
              {/* Header Section */}
              <motion.div 
                className="flex flex-col gap-2 sm:gap-3 md:gap-4 items-center lg:items-start relative"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
              >
                <motion.h3 
                  className="text-sm sm:text-base md:text-lg lg:text-[22px] leading-tight lg:leading-[28px] text-transparent bg-gradient-to-r from-[color:var(--color-primary-orange)] to-[color:var(--color-primary-brown)] bg-clip-text font-semibold tracking-wider"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.8,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  ---------- About ----------
                </motion.h3>
                
                <motion.h1 
                  className="text-lg sm:text-xl md:text-2xl lg:text-[42px] leading-tight lg:leading-[50px] text-[color:var(--color-dark-text)] font-bold"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    color: "var(--color-primary-orange)",
                    transition: { duration: 0.3 }
                  }}
                >
                  Dr. Karishma Singh
                </motion.h1>
              </motion.div>
              
              {/* Credentials Section */}
              <motion.div 
                className="flex flex-col gap-2 sm:gap-3 items-center lg:items-start w-full"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
              >
                <motion.h5 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-[color:var(--color-dark-text)] font-semibold"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    }
                  }}
                >
                  MBBS, MD Dermatology
                </motion.h5>
                <motion.p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    }
                  }}
                >
                  <span className="text-[color:var(--color-light-text)] font-medium">
                    Co-Founder & Medical Director, 
                  </span>
                  <span className="text-transparent bg-gradient-to-r from-[color:var(--color-primary-orange)] to-[color:var(--color-primary-brown)] bg-clip-text font-bold">
                    The Skin Firm
                  </span>
                </motion.p>
              </motion.div>
              
              {/* Main Description */}
              <motion.div 
                className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center lg:items-start w-full"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
              >
                <div className="space-y-3 sm:space-y-4 md:space-y-4">
                  <motion.p 
                    className="text-xs sm:text-sm md:text-sm lg:text-[14px] leading-relaxed md:leading-[20px] lg:leading-[22px] text-[color:var(--color-text-dark-blue)] font-medium"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }
                    }}
                  >
                    <span className="text-[color:var(--color-text-dark-blue)]">Dr. Karishma Singh is a renowned dermatologist and aesthetic physician based in NIBM, Pune, and the visionary co-founder of </span>
                    <span className="text-transparent bg-gradient-to-r from-[color:var(--color-primary-orange)] to-[color:var(--color-primary-brown)] bg-clip-text font-bold">The Skin Firm</span>
                    <span className="text-[#1c1e53]">. With over five years of focused experience in dermatology and cosmetology, she has helped hundreds of individuals transform their skin and hair with results that are not just visible, but lasting.</span>
                  </motion.p>
                  
                  <motion.p 
                    className="text-xs sm:text-sm md:text-sm lg:text-[14px] leading-relaxed md:leading-[20px] lg:leading-[22px] text-[color:var(--color-text-dark-blue)] font-medium"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }
                    }}
                  >
                                        Known for her <span className="text-[color:var(--color-primary-orange)] font-semibold">gentle precision</span> and deep understanding of her patients&apos; unique needs, Dr. Karishma blends                     <span className="font-semibold text-[color:var(--color-primary-brown)]">clinical expertise</span> with an artist&apos;s eye, delivering customised treatments that enhance natural beauty and restore skin health from within.
                  </motion.p>
                  
                  <motion.p 
                    className="text-xs sm:text-sm md:text-sm lg:text-[14px] leading-relaxed md:leading-[20px] lg:leading-[22px] text-[color:var(--color-text-dark-blue)] font-medium"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }
                    }}
                  >
                    She specialises in <span className="text-[color:var(--color-primary-orange)] font-semibold">advanced laser procedures</span>, <span className="text-[#d4a380] font-semibold">anti-ageing treatments</span>, and <span className="text-[#ec7754] font-semibold">                    <span className="text-[color:var(--color-primary-orange)] font-semibold">hair restoration therapies</span></span>, always staying at the forefront of aesthetic innovation. Her calm demeanour, patient-first approach, and commitment to ethical dermatology have made her one of the most trusted skin doctors in Pune.
                  </motion.p>
                  
                  <motion.p 
                    className="text-xs sm:text-sm md:text-sm lg:text-[14px] leading-relaxed md:leading-[20px] lg:leading-[22px] text-[color:var(--color-text-dark-blue)] font-medium"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }
                    }}
                  >
                    At <span className="text-transparent bg-gradient-to-r from-[#ec7754] to-[#d4a380] bg-clip-text font-bold">The Skin Firm</span>, Dr. Karishma leads a team that shares her vision to offer honest, effective, and personalised care in a space where clients feel seen, heard, and supported. Every treatment under her guidance is built on the foundation of <span className="text-[#ec7754] font-semibold">science</span>, <span className="text-[#d4a380] font-semibold">empathy</span>, and <span className="text-[#ec7754] font-semibold">long-term well-being</span>.
                  </motion.p>
                </div>
              </motion.div>
              
              {/* Quote Section */}
              <motion.div 
                className="rounded-[10px] border border-[#f9efe7] px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 flex flex-col items-center lg:items-start w-full bg-gradient-to-r from-[#fdf9f5] to-[#f9efe7]"
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 20px rgba(236, 119, 84, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.p 
                  className="text-xs sm:text-xs md:text-xs lg:text-[12px] leading-relaxed md:leading-5 text-black font-medium italic"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    }
                  }}
                >
                  <span className="text-[#333333]">Whether you&apos;re beginning your skincare journey or seeking expert solutions for advanced concerns, </span>
                  <span className="text-transparent bg-gradient-to-r from-[color:var(--color-primary-orange)] to-[color:var(--color-primary-brown)] bg-clip-text font-bold">Dr. Karishma&apos;s expertise and holistic approach</span>
                  <span className="text-[#333333]"> make her the partner your skin has been waiting for.</span>
                </motion.p>
              </motion.div>
              
              {/* CTA Button */}
              {/* <button className="rounded-[5px] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-3 flex gap-[8px] justify-center items-center bg-[#d4a380] hover:bg-[#c88d5c] transition-colors duration-200 w-full sm:w-auto mx-auto lg:mx-0">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg leading-[24px] text-white font-semibold">
                  Book a free consultation
                </span>
              </button> */}
            </div>
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
