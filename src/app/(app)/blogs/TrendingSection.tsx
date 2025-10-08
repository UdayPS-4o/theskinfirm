"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Seasonal Makeup Trends: Fall Edition",
    description:
      "Dive into the enchanting world of fall-inspired makeup trends. From warm hues to bold lip colors, discover the latest beauty trends that will elevate your autumn beauty routine.",
    image: "/blogs/trending/article-1.png",
    author: "Jane Doe",
    readTime: "5min read",
    href: "/blogs/seasonal-makeup-trends",
  },
  {
    id: 2,
    title: "Reviewing the Latest Beauty Innovations in 2023",
    description:
      "Stay on the cutting edge of beauty with a comprehensive review of the latest innovations in the industry. From skincare breakthroughs to high-tech beauty gadgets, explore what's new in 2023.",
    image: "/blogs/trending/article-2.png",
    author: "Jane Doe",
    readTime: "5min read",
    href: "/blogs/beauty-innovations-2023",
  },
  {
    id: 3,
    title: "Reader Spotlight: Transformation Stories",
    description:
      "Witness the incredible transformations of our valued customers. Read real stories of beauty journeys, complete with before-and-after photos, and be inspired by the power of self-care.",
    image: "/blogs/trending/article-3.png",
    author: "Jane Doe",
    readTime: "5min read",
    href: "/blogs/transformation-stories",
  },
  {
    id: 4,
    title: "Inside BB: Product Development Journey",
    description:
      "Take an exclusive behind-the-scenes look at the creation of beauty products. Learn about commitment to quality, innovation, and the meticulous process that goes into each product.",
    image: "/blogs/trending/article-4.png",
    author: "Jane Doe",
    readTime: "5min read",
    href: "/blogs/product-development",
  },
  {
    id: 5,
    title: "Exclusive Interview with Jenna Milhouse @missyb",
    description:
      "Gain insights from a renowned beauty influencer or expert in an exclusive interview. Discover their favorite beauty tips, product recommendations, and the secrets behind their success in the industry.",
    image: "/blogs/trending/article-5.png",
    author: "Jane Doe",
    readTime: "5min read",
    href: "/blogs/interview-jenna-milhouse",
  },
  {
    id: 6,
    title: "Step-by-Step Guide: Achieving the Perfect Smokey Eye",
    description:
      "Witness the incredible transformations of our valued customers. Read real stories of beauty journeys, complete with before-and-after photos, and be inspired by the power of self-care.",
    image: "/blogs/trending/article-6.png",
    author: "Jane Doe",
    readTime: "5min read",
    href: "/blogs/smokey-eye-guide",
  },
];

export function TrendingSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {/* Heading Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6"
          >
            {/* Text Wrapper */}
            <div className="flex flex-col gap-2">
              <span
                className="text-[#B76E79] text-sm font-semibold uppercase tracking-wide"
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  lineHeight: "1.364em",
                }}
              >
                Trending Topics
              </span>
              <h2
                className="text-[#333333] text-[48px] font-semibold leading-[1em] tracking-[-0.01em] max-w-[511px]"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Stay Trendy with Our Latest Insights
              </h2>
            </div>

            {/* See More Button */}
            <Link href="/blogs/trending" className="inline-flex">
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

          {/* Posts Grid */}
          <div className="flex flex-col gap-8">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.slice(0, 3).map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.slice(3, 6).map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  index={index + 3}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="w-full"
    >
      <Link
        href={article.href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded p-2 w-full max-w-[405px] mx-auto hover:shadow-xl transition-shadow duration-300"
          style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
        >
          {/* Image */}
          <div className="relative w-full h-[240px] mb-2 overflow-hidden rounded-sm border border-[rgba(51,51,51,0.4)]">
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 405px"
              />
            </motion.div>
          </div>

          {/* Text Wrapper */}
          <div className="flex flex-col gap-4 px-2 py-2">
            {/* Title */}
            <h3
              className="text-[#333333] text-2xl font-normal leading-[1em] tracking-[-0.01em]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {article.title}
            </h3>

            {/* Description */}
            <p
              className="text-[rgba(51,51,51,0.8)] text-base font-light leading-[1.4em] tracking-[0.01em]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {article.description}
            </p>

            {/* Author and Arrow */}
            <div className="flex justify-between items-center pt-3 border-t border-[rgba(51,51,51,0.16)]">
              <div className="flex items-center gap-4">
                <span
                  className="text-[#333333] text-sm font-normal leading-[1em] tracking-[-0.01em]"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  {article.author}
                </span>
                <span
                  className="text-[#333333] text-sm font-normal leading-[1em] tracking-[-0.01em]"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  {article.readTime}
                </span>
              </div>

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
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
