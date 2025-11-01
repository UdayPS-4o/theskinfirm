"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MaxWidthWrapper } from "../layout/max-width";
import { InstantSkeletonLink } from "@/components/shared/InstantSkeletonLink";

export default function HeroSection() {
  return (
    <section className="w-full px-6 lg:px-20 bg-[#FBEDE4] min-h-screen">
      <MaxWidthWrapper className="h-full">
        <div className="flex flex-col items-center justify-center text-center min-h-screen py-8 lg:py-12">
          <motion.div 
            className="max-w-5xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-7xl lg:text-8xl font-black text-[#1e1e1e] leading-tight font-roboto mb-8 tracking-tight">
                <motion.span
                  className="inline-block bg-gradient-to-r from-[#1e1e1e] to-[#4a4a4a] bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Your Glow.
                </motion.span>{" "}
                <motion.span 
                  className="inline-block bg-gradient-to-r from-[#cb997e] via-[#d4a380] to-[#e6b896] bg-clip-text text-transparent font-extrabold"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Our Firm.
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-[#1C1E53] font-inter font-medium text-xl lg:text-2xl mt-8 leading-relaxed max-w-4xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              At{" "}
              <motion.span 
                className="font-bold text-[#cb997e]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                The Skin Firm
              </motion.span>
              , we blend{" "}
              <motion.span 
                className="font-semibold text-[#1e1e1e] underline decoration-[#cb997e] decoration-2 underline-offset-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                medical-grade technology
              </motion.span>{" "}
              with an{" "}
              <motion.span 
                className="font-semibold text-[#1e1e1e] italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                artistic understanding of beauty
              </motion.span>
              . We are Pune&apos;s trusted, modern dermatology clinic, dedicated to precision care and results that feel as good as they look.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12"
            >
              <InstantSkeletonLink href="/services">
                <motion.button 
                  className="relative px-12 py-5 bg-gradient-to-r from-[#D4A380] to-[#cb997e] text-white text-lg font-semibold rounded-full shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(203, 153, 126, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2, type: "spring", stiffness: 200 }}
                >
                  <motion.span 
                    className="relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    ✨ Explore Our Treatments
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#cb997e] to-[#b8865a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </InstantSkeletonLink>
            </motion.div>
            
            <motion.div
              className="mt-16 flex justify-center space-x-8 opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-5xl font-bold text-[#cb997e]">5+</div>
                <div className="text-lg text-[#1C1E53]">YEARS</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-5xl font-bold text-[#cb997e]">60+</div>
                <div className="text-lg text-[#1C1E53]">TREATMENTS OFFERED</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-5xl font-bold text-[#cb997e]">3513</div>
                <div className="text-lg text-[#1C1E53]">HAPPY PATIENTS</div>
              </motion.div>
              <Link href="https://www.google.com/search?sca_esv=61e5b843f2feed17&biw=1470&bih=832&sxsrf=AE3TifOMDsKPx7Kh6vF6AuOgmfyuc9Q8sQ:1755975431469&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_gaOLO0JJWs-odF0VvwJ8iCcPj735or90ztUaiok022kMxywU7rNHPilhW4K8hWZRCzL7ixLz2mh1vaqmzGHAcTSo2Dan_5E4MeiAARO1IB-ciambyzMFA-whJhPwFjWireW6fnOnA-Cc7q9v3nD645cxpQ&q=The+Skin+Firm+%7C+Laser+Skin+%26+Hair+Clinic+NIBM+Mohammed+Wadi+Reviews&sa=X&ved=2ahUKEwiq186ezqGPAxXnTmwGHYFmN9IQ0bkNegQIKhAE&cshid=1755975435279699" target="_blank" rel="noopener noreferrer">
              <motion.div 
                className="text-center cursor-pointer"
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-5xl font-bold text-[#cb997e]">4.9</div>
                <div className="text-lg text-[#1C1E53] underline">RATING ON GOOGLE</div>
              </motion.div>
            </Link>
           </motion.div>
         </motion.div>
       </div>
      </MaxWidthWrapper>
    </section>
  );
}
