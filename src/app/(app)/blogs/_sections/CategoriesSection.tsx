"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const categories = [
  {
    id: 1,
    name: "Skincare",
    image: "/blogs/categories/skincare.png",
    href: "/blogs/category/skincare",
    width: 303,
  },
  {
    id: 2,
    name: "Haircare",
    image: "/blogs/categories/haircare.png",
    href: "/blogs/category/haircare",
    width: 307,
  },
  {
    id: 3,
    name: "Laser",
    image: "/blogs/categories/laser.png",
    href: "/blogs/category/laser",
    width: 303,
  },
];

export function CategoriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-white">
      <div className="w-full py-20">
        {/* Container with exact Figma width: 1249.6px */}
        <div className="relative w-full max-w-[1249.6px] mx-auto px-4 sm:px-6 lg:px-0">
          {/* Navigation Arrows - Absolute positioned at x:0, y:0 relative to container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 top-0 z-10 flex gap-2"
          >
            {/* Arrow Left */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              className="p-2.5 hover:bg-gray-50 rounded transition-colors"
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
              onClick={scrollRight}
              className="p-2.5 hover:bg-gray-50 rounded transition-colors"
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
          </motion.div>
          {/* Main flex container with 228px gap */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12 lg:gap-[228px]">
            {/* Text Wrapper - Left side with 48px gap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-12"
            >
              {/* Text Content with 8px gap */}
              <div className="flex flex-col gap-2">
                <span
                  className="text-[#B76E79] text-sm font-semibold uppercase tracking-wide"
                  style={{
                    fontFamily: "Nunito Sans, sans-serif",
                    lineHeight: "1.364em",
                  }}
                >
                  CATEGORIES
                </span>
                <h2
                  className="text-[#333333] text-[48px] font-semibold leading-[1em] tracking-[-0.01em] w-[195px]"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Dive into Beauty
                </h2>
              </div>

              {/* See More Button */}
              <Link href="/blogs/categories" className="inline-flex self-start">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-[rgba(51,51,51,0.4)] text-[#333333] px-6 py-2 rounded hover:bg-gray-50 transition-all duration-200"
                  style={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontSize: "16px",
                    lineHeight: "1.364em",
                  }}
                >
                  See More
                </motion.button>
              </Link>
            </motion.div>

            {/* Card Wrapper - Right side with 8px gap */}
            <div
              ref={scrollContainerRef}
              className="flex flex-col sm:flex-row gap-2 overflow-x-auto pb-4 lg:pb-0 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0"
      style={{ width: `${category.width}px` }}
    >
      <Link
        href={category.href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="border border-[rgba(51,51,51,0.4)] rounded p-2 pb-4 hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image - 416px height */}
          <div className="relative w-full h-[416px] mb-4 overflow-hidden rounded-sm border border-[rgba(51,51,51,0.4)]">
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 307px"
              />
            </motion.div>
          </div>

          {/* Headline Wrapper - padding 0px 16px */}
          <div className="flex justify-between items-center px-4">
            <h3
              className="text-[#333333] text-2xl font-normal leading-[1em] tracking-[-0.01em] flex-1"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {category.name}
            </h3>
            <motion.svg
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
              width="21"
              height="7"
              viewBox="0 0 21 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M20.3 3.5L15.3 0.613249V6.38675L20.3 3.5ZM0 4H15.8V3H0V4Z"
                fill="rgba(51, 51, 51, 0.6)"
              />
            </motion.svg>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
