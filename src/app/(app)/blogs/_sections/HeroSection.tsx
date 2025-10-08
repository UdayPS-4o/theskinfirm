"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface FeaturedBlogProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const featuredBlogs: FeaturedBlogProps[] = [
  {
    title: "10 Must-Have Skincare Products for Radiant Skin",
    description:
      "Explore the essential skincare products that can transform your daily routine. From hydrating serums to powerful antioxidants, discover the secrets to achieving radiant and healthy skin.",
    image: "/blogs/hero-image.png",
    href: "/blogs/skincare-products",
  },
  {
    title: "The Ultimate Guide to Anti-Aging Treatments",
    description:
      "Discover the most effective anti-aging treatments and techniques that can help you maintain youthful, glowing skin. Learn about the latest innovations in skincare technology.",
    image: "/blogs/hero-image.png",
    href: "/blogs/anti-aging-guide",
  },
  {
    title: "Natural Beauty: Organic Skincare Solutions",
    description:
      "Embrace the power of nature with organic skincare solutions. Learn how natural ingredients can transform your beauty routine and provide lasting results for healthy skin.",
    image: "/blogs/hero-image.png",
    href: "/blogs/organic-skincare",
  },
];

export function HeroSection() {
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
      {/* Container with exact Figma width */}
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Navigation Arrows - Fixed position outside carousel, 8px gap */}
        <div className="absolute left-4 sm:left-8 lg:left-20 top-12 lg:top-[99px] z-20 flex gap-2">
          {/* Arrow Left - 10px padding, 40% opacity */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            className="p-2.5"
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
                fill="rgba(51, 51, 51, 0.6)"
              />
            </svg>
          </motion.button>

          {/* Arrow Right */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            className="p-2.5"
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
                fill="rgba(51, 51, 51, 0.6)"
              />
            </svg>
          </motion.button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute left-4 sm:left-8 lg:left-20 bottom-8 lg:bottom-12 z-20 flex gap-2">
          {featuredBlogs.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
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
            {featuredBlogs.map((blog, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative w-full h-[500px] lg:h-[702px]">
                  {/* Hero Image - Absolute positioned */}
                  <div className="absolute right-0 top-0 w-full sm:w-[70%] md:w-[60%] lg:w-[600px] h-full rounded-sm overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 600px"
                    />
                  </div>

                  {/* Text Wrapper - Absolute positioned at x:80, y:99.17 */}
                  <div className="absolute left-4 sm:left-8 lg:left-20 top-[140px] lg:top-[180px] z-10 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-[630px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`content-${index}-${selectedIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col gap-8"
                      >
                        {/* Text Content with 8px gap */}
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
                          <h1
                            className="text-[#333333] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1em] tracking-[-0.01em] w-full lg:w-[604px]"
                            style={{ fontFamily: "Nunito Sans, sans-serif" }}
                          >
                            {blog.title}
                          </h1>

                          {/* Description */}
                          <p
                            className="text-[rgba(51,51,51,0.8)] text-base sm:text-lg lg:text-[21px] leading-[1.364em] w-full lg:w-[511px] mt-6"
                            style={{ fontFamily: "Nunito Sans, sans-serif" }}
                          >
                            {blog.description}
                          </p>
                        </div>

                        {/* CTA Button */}
                        <Link href={blog.href} className="inline-flex">
                          <motion.button
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 4px 12px rgba(212, 163, 128, 0.4)",
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#D4A380] hover:bg-[#C19660] text-white px-6 py-2 rounded transition-all duration-200 shadow-md"
                            style={{
                              fontFamily: "Nunito Sans, sans-serif",
                              fontSize: "16px",
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
