"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../layout/max-width";

export default function DrKarishmaSection() {
  return (
    <section
      id="dr_karishma"
      className="relative bg-[color:var(--color-light-background-alt)] mb-14 px-4 sm:px-6 md:px-8 lg:px-16 pt-12 sm:pt-16 md:pt-18 lg:pt-20 overflow-hidden rounded-bl-[75px]"
    >
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
                delayChildren: 0.1,
              },
            },
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
                  ease: "easeOut",
                },
              },
            }}
          >
            <div className="relative max-w-[375px] sm:max-w-[437px] md:max-w-[500px] lg:max-w-[562px] w-full aspect-[3/4]">
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
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
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
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
              >
                <motion.h1
                  className="text-lg sm:text-xl md:text-2xl lg:text-[42px] leading-tight lg:leading-[50px] text-[color:var(--color-dark-text)] font-bold"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    color: "var(--color-primary-orange)",
                    transition: { duration: 0.3 },
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
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
              >
                <motion.h5
                  className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-black"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    },
                  }}
                >
                  Skin Specialist
                </motion.h5>
                <motion.p
                  className="text-sm sm:text-base md:text-lg leading-relaxed text-black"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    },
                  }}
                >
                  <span className="text-[color:var(--color-light-text)] font-medium">
                    Co-Founder & Owner, &nbsp;
                  </span>
                  <span className="text-black">
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
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
              >
                <div className="space-y-3 sm:space-y-4 md:space-y-4">
                  <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-black"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      },
                    }}
                  >
                    Dr. Karishma Singh, owner and co-founder of{" "}
                    <span className="text-black">
                      The Skin Firm
                    </span>
                    , NIBM Pune, is a highly regarded skin specialist celebrated
                    for her refined approach to skin and hair care. With over
                    five years of specialised expertise, she has helped hundreds
                    achieve radiant, youthful skin and healthy hair through
                    treatments that deliver visible, lasting results.
                  </motion.p>

                  <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-black"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      },
                    }}
                  >
                    Renowned for her{" "}
                    <span className="text-black">
                      gentle precision
                    </span>{" "}
                    and patient-centric philosophy, Dr. Karishma combines
                    medical excellence with an artistic eye, offering luxury
                    skin treatments,{" "}
                    <span className="text-black">
                      advanced laser procedures
                    </span>
                    ,{" "}
                    <span className="text-black">
                      anti-ageing solutions
                    </span>
                    , and{" "}
                    <span className="text-black">
                      hair restoration therapies
                    </span>
                    . Her calm demeanour and ethical approach have established
                    her as one of the most trusted dermatologists in Pune.
                  </motion.p>

                  <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-black"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      },
                    }}
                  >
                    At{" "}
                    <span className="text-black">
                      The Skin Firm
                    </span>
                    , Dr. Karishma leads a team committed to delivering premium,
                    personalised care in an elegant, welcoming environment.
                    Every treatment reflects her vision merging cutting-edge{" "}
                    <span className="text-black">
                      science
                    </span>{" "}
                    with{" "}
                    <span className="text-black">
                      empathy
                    </span>{" "}
                    to enhance natural beauty while restoring{" "}
                    <span className="text-black">
                      long-term&nbsp;skin&nbsp;health.
                    </span>
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
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 20px rgba(236, 119, 84, 0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.p
                  className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed md:leading-5 text-black"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    },
                  }}
                >
                  Whether you&apos;re beginning your skincare journey or seeking
                  expert solutions for advanced concerns, Dr. Karishma&apos;s
                  expertise and holistic approach make her the partner your skin
                  has been waiting for.
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
