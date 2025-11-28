"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Blog } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

export function HeroSection({ featuredBlogs }: { featuredBlogs: Blog[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full bg-[#FBEDE4] overflow-hidden">
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
        <div className="hidden sm:flex absolute left-8 lg:left-20 top-12 lg:top-[99px] z-20 gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            className="p-2.5 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Scroll left"
          >
            <svg
              width="21"
              height="7"
              viewBox="0 0 21 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.7 3.5L5.7 6.38675V0.613249L0.7 3.5ZM21 3H6.2V4H21V3Z"
                fill="rgba(51, 31, 41, 0.6)"
              />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            className="p-2.5 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Scroll right"
          >
            <svg
              width="21"
              height="7"
              viewBox="0 0 21 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3 3.5L15.3 0.613249V6.38675L20.3 3.5ZM0 4H15.8V3H0V4Z"
                fill="rgba(51, 31, 41, 0.6)"
              />
            </svg>
          </motion.button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 lg:left-20 bottom-4 sm:bottom-8 lg:bottom-12 z-20 flex gap-2">
          {featuredBlogs.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex
                ? "w-8 bg-[#D4A380]"
                : "w-1.5 bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {featuredBlogs.map((blog, index) => {
              // Safely get SEO data
              // const seoData = blog.seo?.find((b) => b.blockType === "seo");
              // const metaTitle = seoData?.metaTitle || "Untitled";
              // const metaDescription = seoData?.metaDescription || "";

              return (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  {/* Mobile Layout - Stack vertically */}
                  <div className="block sm:hidden">
                    <div className="relative w-full">
                      {/* Image on top for mobile */}
                      <div className="relative w-full h-[280px] overflow-hidden">
                        <Image
                          src={
                            typeof blog.heroImage === "string"
                              ? blog.heroImage
                              : (blog.heroImage?.url ?? "/placeholder.jpg")
                          }
                          alt={
                            typeof blog.heroImage === "string"
                              ? "Blog Hero Image"
                              : (blog.heroImage?.alt ?? "Blog Hero Image")
                          }
                          fill
                          className="object-cover"
                          priority={index === 0}
                          sizes="100vw"
                        />
                      </div>

                      {/* Text below image for mobile */}
                      <div className="px-6 py-8 bg-[#FBEDE4]">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`content-mobile-${index}-${selectedIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col gap-5"
                          >
                            {/* Tagline */}
                            <span
                              className="text-[#B76E79] text-xs font-semibold uppercase tracking-wide"
                              style={{
                                fontFamily: "Nunito Sans, sans-serif",
                                lineHeight: "1.364em",
                              }}
                            >
                              FEATURED
                            </span>

                            {/* Headline */}
                            <div
                              className="text-[#333333] text-2xl font-semibold leading-[1.2em] tracking-[-0.01em]"
                              style={{ fontFamily: "Nunito Sans, sans-serif" }}
                            >
                              {/* @ts-ignore */}
                              <RichText data={blog.heroTitle} />
                            </div>

                            {/* Description */}
                            <div
                              className="text-[rgba(51,51,51,0.8)] text-sm leading-[1.6em]"
                              style={{ fontFamily: "Nunito Sans, sans-serif" }}
                            >
                              {/* @ts-ignore */}
                              <RichText data={blog.heroDescription} />
                            </div>

                            {/* CTA Button */}
                            <Link
                              href={`/blogs/${blog.slug}`}
                              className="inline-flex"
                            >
                              <motion.button
                                whileHover={{
                                  scale: 1.05,
                                  boxShadow:
                                    "0 4px 12px rgba(212, 163, 128, 0.4)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#D4A380] hover:bg-[#C19660] text-white px-6 py-2.5 rounded transition-all duration-200 shadow-md text-sm font-medium"
                                style={{
                                  fontFamily: "Nunito Sans, sans-serif",
                                  lineHeight: "1.364em",
                                }}
                              >
                                Read more
                              </motion.button>
                            </Link>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Tablet & Desktop Layout - Original side-by-side */}
                  <div className="hidden sm:block relative w-full h-[600px] lg:h-[702px]">
                    {/* Hero Image - Absolute positioned */}
                    <div className="absolute right-0 top-0 w-[70%] md:w-[60%] lg:w-[600px] h-full rounded-sm overflow-hidden">
                      <Image
                        src={
                          typeof blog.heroImage === "string"
                            ? blog.heroImage
                            : (blog.heroImage?.url ?? "/placeholder.jpg")
                        }
                        alt={
                          typeof blog.heroImage === "string"
                            ? "Blog Hero Image"
                            : (blog.heroImage?.alt ?? "Blog Hero Image")
                        }
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority={index === 0}
                        sizes="(max-width: 1024px) 60vw, 600px"
                      />
                    </div>

                    {/* Text Wrapper - Absolute positioned */}
                    <div className="absolute left-8 lg:left-20 top-[140px] lg:top-[180px] z-10 w-[calc(100%-4rem)] lg:w-[630px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`content-${index}-${selectedIndex}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="flex flex-col gap-8"
                        >
                          {/* Text Content */}
                          <div className="flex flex-col gap-2">
                            {/* Tagline */}
                            <span
                              className="text-[#B76E79] text-sm font-semibold uppercase tracking-wide"
                              style={{
                                fontFamily: "Nunito Sans, sans-serif",
                                lineHeight: "1.364em",
                              }}
                            >
                              FEATURED
                            </span>

                            {/* Headline */}
                            <div
                              className="text-[#333333] text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-semibold leading-[1em] tracking-[-0.01em] w-full lg:w-[604px]"
                              style={{ fontFamily: "Nunito Sans, sans-serif" }}
                            >
                              {/* @ts-ignore */}
                              <RichText data={blog.heroTitle} />
                            </div>

                            {/* Description */}
                            <div
                              className="text-[rgba(51,51,51,0.8)] text-base lg:text-[21px] leading-[1.364em] w-full lg:w-[511px] mt-4 lg:mt-6"
                              style={{ fontFamily: "Nunito Sans, sans-serif" }}
                            >
                              {/* @ts-ignore */}
                              <RichText data={blog.heroDescription} />
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Link
                            href={`/blogs/${blog.slug}`}
                            className="inline-flex"
                          >
                            <motion.button
                              whileHover={{
                                scale: 1.05,
                                boxShadow:
                                  "0 4px 12px rgba(212, 163, 128, 0.4)",
                              }}
                              whileTap={{ scale: 0.98 }}
                              className="bg-[#D4A380] hover:bg-[#C19660] text-white px-6 py-2.5 rounded transition-all duration-200 shadow-md text-base"
                              style={{
                                fontFamily: "Nunito Sans, sans-serif",
                                lineHeight: "1.364em",
                              }}
                            >
                              Read more
                            </motion.button>
                          </Link>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
