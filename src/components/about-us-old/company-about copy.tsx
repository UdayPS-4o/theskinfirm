"use client";

import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../layout/max-width";

export default function CompanyAboutSection() {


  return (
    <section className="relative bg-gradient-to-br from-[#FBEDE4] via-white to-[#F9F1EC] py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#ec7754]/20 to-[#d4a380]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#d4a380]/20 to-[#ec7754]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-[#ec7754]/10 to-[#d4a380]/10 rounded-full blur-2xl"></div>
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
                delayChildren: 0.2
              }
            }
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
                  ease: "easeOut"
                }
              }
            }}
          >
            <motion.h3 
               className="text-sm sm:text-base md:text-lg lg:text-[22px] leading-tight lg:leading-[28px] text-transparent bg-gradient-to-r from-[#ec7754] to-[#d4a380] bg-clip-text font-semibold text-center tracking-wider"
               variants={{
                 hidden: { opacity: 0, y: 30 },
                 visible: {
                   opacity: 1,
                   y: 0,
                   transition: {
                     duration: 0.8,
                     ease: "easeOut"
                   }
                 }
               }}
             >
               ✦ ────── About ────── ✦
             </motion.h3>
            
            <motion.h1 
               className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] leading-tight lg:leading-[60px] text-[#2C2C2C] font-bold text-center tracking-tight"
               variants={{
                 hidden: { opacity: 0, y: 30 },
                 visible: {
                   opacity: 1,
                   y: 0,
                   transition: {
                     duration: 0.8,
                     ease: "easeOut"
                   }
                 }
               }}
             >
               <span className="bg-gradient-to-r from-[#2C2C2C] via-[#4A4A4A] to-[#2C2C2C] bg-clip-text text-transparent">
                 The Skin Firm
               </span>
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
                  ease: "easeOut"
                }
              }
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
                     ease: "easeOut"
                   }
                 }
               }}
               whileHover={{ scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300 }}
             >
               <div className="absolute inset-0 bg-gradient-to-r from-[#ec7754]/10 via-[#d4a380]/5 to-[#ec7754]/10 rounded-2xl backdrop-blur-sm"></div>
               <motion.h4 
                 className="relative text-xl sm:text-2xl md:text-3xl lg:text-3xl leading-relaxed text-center font-medium italic"
               >
                 <span className="text-transparent bg-gradient-to-r from-[#d4a380] via-[#ec7754] to-[#d4a380] bg-clip-text">
                   &ldquo;Where Skin Meets Science, and Self-Care Feels Like Home&rdquo;
                 </span>
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
                    ease: "easeOut"
                  }
                }
              }}
            >
              <motion.p 
                 className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-[#4A4A4A] font-medium"
                 variants={{
                   hidden: { opacity: 0, y: 30 },
                   visible: {
                     opacity: 1,
                     y: 0,
                     transition: {
                       duration: 0.8,
                       ease: "easeOut"
                     }
                   }
                 }}
               >
                 <span className="text-[#4A4A4A]">At</span>
                 <span className="text-transparent bg-gradient-to-r from-[#ec7754] to-[#d4a380] bg-clip-text font-bold"> The Skin Firm,</span>
                 <span className="text-[#4A4A4A]">
                   {" "}we believe that great skin isn&apos;t just about looking good—it&apos;s about feeling deeply confident in your skin.
                 </span>
               </motion.p>
              
              <motion.p 
                 className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-[#555555]"
                 variants={{
                   hidden: { opacity: 0, y: 30 },
                   visible: {
                     opacity: 1,
                     y: 0,
                     transition: {
                       duration: 0.8,
                       ease: "easeOut"
                     }
                   }
                 }}
               >
                 Founded in Pune by <span className="font-semibold text-[#ec7754]">Dr. Karishma Singh</span>, The Skin Firm is a modern dermatology and aesthetic clinic rooted in precision care, ethical practices, and personalised results. Every treatment here is designed to go beyond the surface, addressing not just the symptom, but the story behind your skin.
               </motion.p>
              
              <motion.p 
                 className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-[#555555]"
                 variants={{
                   hidden: { opacity: 0, y: 30 },
                   visible: {
                     opacity: 1,
                     y: 0,
                     transition: {
                       duration: 0.8,
                       ease: "easeOut"
                     }
                   }
                 }}
               >
                 We combine <span className="font-semibold text-[#d4a380]">cutting-edge technology</span> with a warm, welcoming environment where every client feels heard, valued, and cared for. From advanced laser treatments to gentle skincare solutions, we&apos;re here to help you achieve the <span className="font-semibold text-[#ec7754]">healthy, radiant skin</span> you deserve.
               </motion.p>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-lg leading-5 sm:leading-6 md:leading-6 lg:leading-6 text-[#333333]"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <span className="text-[#333333] font-medium">
                  We specialise in advanced dermatological and aesthetic treatments including laser therapies, skin rejuvenation, anti-ageing solutions, acne and pigmentation correction, and hair restoration. Our clinic blends medical-grade technology with an artistic understanding of beauty, ensuring your results look natural, not overdone.
                </span>
              </motion.p>
            </motion.div>
            
            {/* Highlight Box */}
            <motion.div 
              className="rounded-[10px] px-4 sm:px-5 md:px-6 lg:px-6 py-4 sm:py-4 md:py-5 lg:py-5 flex gap-2.5 justify-center items-center bg-[#f9efe7] w-full"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(236, 119, 84, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-lg leading-4 sm:leading-5 md:leading-5 lg:leading-5 uppercase text-[#333333] text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <span className="text-[#333333] font-semibold">
                  But what truly sets us apart is the way we treat people
                </span>
              </motion.p>
            </motion.div>
            
            {/* Second Content Block */}
            <motion.div 
              className="space-y-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight font-bold text-center mb-6"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <span className="text-transparent bg-gradient-to-r from-[#ec7754] via-[#d4a380] to-[#ec7754] bg-clip-text">
                  Our Mission
                </span>
              </motion.h3>
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-[#555555] text-center max-w-4xl mx-auto"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                To provide <span className="font-semibold text-[#ec7754]">exceptional dermatological care</span> that empowers individuals to feel confident and comfortable in their own skin. We are committed to using the latest advancements in skincare technology while maintaining the highest standards of <span className="font-semibold text-[#d4a380]">safety and ethics</span>.
              </motion.p>
            </motion.div>
            

            
            {/* Final Highlight Section */}
            <motion.div 
              className="relative bg-gradient-to-br from-[#FBEDE4] via-[#F8E6D8] to-[#F5DCC9] p-8 rounded-2xl shadow-lg border border-[#ec7754]/20 overflow-hidden"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(236, 119, 84, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ec7754]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#d4a380]/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              <motion.h3 
                className="relative text-xl sm:text-2xl md:text-3xl lg:text-3xl leading-tight font-bold text-center mb-6"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <span className="text-transparent bg-gradient-to-r from-[#2C2C2C] via-[#ec7754] to-[#2C2C2C] bg-clip-text">
                  Your Skin, Our Science, Your Confidence.
                </span>
              </motion.h3>
              <motion.p 
                className="relative text-lg sm:text-xl md:text-2xl lg:text-2xl leading-relaxed text-[#4A4A4A] text-center font-medium italic"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                Because when you feel good in your skin, you feel good everywhere.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}