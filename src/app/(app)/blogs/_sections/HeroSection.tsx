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

  if (!featuredBlogs || featuredBlogs.length === 0) return null;

  return (
    <section className="relative w-full bg-[#FBEDE4] overflow-hidden">
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Navigation Arrows - Only visible if more than 1 featured blog */}
        {featuredBlogs.length > 1 && (
          <div className="hidden sm:flex absolute left-4 sm:left-6 lg:left-20 top-1/2 -translate-y-1/2 sm:top-12 sm:translate-y-0 z-20 gap-2">
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
        )}

        {/* Slide Indicators - Only visible if more than 1 featured blog */}
        {featuredBlogs.length > 1 && (
          <div className="absolute left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 lg:left-20 bottom-4 sm:bottom-8 lg:bottom-12 z-20 flex gap-2">
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
        )}

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {featuredBlogs.map((blog, index) => {
              return (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div className="flex flex-col sm:flex-row w-full min-h-[auto] sm:min-h-[600px] lg:min-h-[702px]">

                    {/* Text Content Column */}
                    <div className="order-2 sm:order-1 flex-1 flex flex-col justify-center px-6 py-8 sm:pl-8 sm:pr-4 lg:pl-20 lg:pr-10 z-10">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`content-${index}-${selectedIndex}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="flex flex-col gap-6 lg:gap-8 mt-8 sm:mt-0"
                        >
                          <div className="flex flex-col gap-3">
                            <span
                              className="text-[#B76E79] text-xs sm:text-sm font-semibold uppercase tracking-wide"
                              style={{
                                fontFamily: "Nunito Sans, sans-serif",
                                lineHeight: "1.364em",
                              }}
                            >
                              FEATURED
                            </span>

                            <div
                              className="text-[#333333] text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-semibold leading-[1.1em] tracking-[-0.01em] max-w-2xl [&_*]:!text-[inherit] [&_*]:!leading-[inherit] [&_*]:!tracking-[inherit]"
                              style={{ fontFamily: "Nunito Sans, sans-serif" }}
                            >
                              {/* @ts-ignore */}
                              <RichText data={blog.heroTitle} />
                            </div>

                            <div
                              className="text-[rgba(51,51,51,0.8)] text-sm sm:text-base lg:text-[21px] leading-[1.6em] max-w-xl mt-2"
                              style={{ fontFamily: "Nunito Sans, sans-serif" }}
                            >
                              {/* @ts-ignore */}
                              <RichText data={blog.heroDescription} />
                            </div>
                          </div>

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
                              className="bg-[#D4A380] hover:bg-[#C19660] text-white px-6 py-3 rounded transition-all duration-200 shadow-md text-sm sm:text-base font-medium"
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

                    {/* Image Column */}
                    <div className="order-1 sm:order-2 w-full sm:w-[50%] lg:w-[600px] h-[280px] sm:h-auto relative">
                      <div className="absolute inset-0 sm:relative sm:h-full w-full">
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
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                        />
                      </div>
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
