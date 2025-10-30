"use client";

import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../layout/max-width";

export default function CompanyAboutSection() {
  return (
    <section className="relative bg-gradient-to-br from-[color:var(--color-light-background-alt)] via-white to-[color:var(--color-light-background)] py-4 sm:py-20 md:py-4 lg:py-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[color:var(--color-primary-orange)]/20 to-[color:var(--color-primary-brown)]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[color:var(--color-primary-brown)]/20 to-[color:var(--color-primary-orange)]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-[color:var(--color-primary-orange)]/10 to-[color:var(--color-primary-brown)]/10 rounded-full blur-2xl"></div>
      </div>
      <MaxWidthWrapper>
        <motion.div
          className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] justify-center items-center w-full"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header Section */}
          <motion.div
            className="flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-[29px] items-center w-full max-w-[1240px]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] leading-tight lg:leading-[60px] text-black text-center tracking-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
            >
              The Skin Firm
            </motion.h1>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] items-center w-full max-w-[1000px]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
          >
            {/* Quote Section */}
            <motion.div
              className="relative px-6 py-4 mx-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-primary-orange)]/10 via-[color:var(--color-primary-brown)]/5 to-[color:var(--color-primary-orange)]/10 rounded-2xl backdrop-blur-sm"></div>
              <motion.h4
                className="relative text-xl sm:text-2xl md:text-3xl lg:text-3xl leading-relaxed text-center text-black italic"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                &ldquo;Where Skin Meets Science, and Self-Care Feels Like
                Home&rdquo;
              </motion.h4>
            </motion.div>

            {/* First Content Block */}
            <motion.div
              className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] items-start w-full"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-black"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                At
                <span className="text-black">
                  {" "}
                  The Skin Firm,
                </span>
                we believe that great skin isn&apos;t just about looking
                good—it&apos;s about feeling deeply confident in your skin.
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
                      ease: "easeOut",
                    },
                  },
                }}
              >
                Founded in Pune by{" "}
                <span className="text-black">
                  Dr. Karishma Singh
                </span>
                , The Skin Firm is a modern dermatology and aesthetic clinic
                rooted in precision care, ethical practices, and personalised
                results. Every treatment here is designed to go beyond the
                surface, addressing not just the symptom, but the story behind
                your skin.
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
                      ease: "easeOut",
                    },
                  },
                }}
              >
                We combine{" "}
                <span className="text-black">
                  cutting-edge technology
                </span>{" "}
                with a warm, welcoming environment where every client feels
                heard, valued, and cared for. From advanced laser treatments to
                gentle skincare solutions, we&apos;re here to help you achieve
                the{" "}
                <span className="text-black">
                  healthy, radiant skin
                </span>{" "}
                you deserve.
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
                      ease: "easeOut",
                    },
                  },
                }}
              >
                We specialise in advanced dermatological and aesthetic
                treatments including laser therapies, skin rejuvenation,
                anti-ageing solutions, acne and pigmentation correction, and
                hair restoration. Our clinic blends medical-grade technology
                with an artistic understanding of beauty, ensuring your results
                look natural, not overdone.
              </motion.p>
            </motion.div>

            {/* Highlight Box */}
            <motion.div
              className="rounded-[10px] px-4 sm:px-5 md:px-6 lg:px-6 py-4 sm:py-4 md:py-5 lg:py-5 flex gap-2.5 justify-center items-center bg-[color:var(--color-light-background)] w-full"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(236, 119, 84, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-lg leading-4 sm:leading-5 md:leading-5 lg:leading-5 uppercase text-black text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                But what truly sets us apart is the way we treat people
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
