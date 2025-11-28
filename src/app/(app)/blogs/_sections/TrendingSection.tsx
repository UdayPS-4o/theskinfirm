"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Blog } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

export function TrendingSection({ blogs }: { blogs: Blog[] }) {
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
          </motion.div>

          {/* Posts Grid */}
          <div className="flex flex-col gap-8">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {blogs.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article, index }: { article: Blog; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  // const seo = article.seo?.filter((b) => b.blockType === "seo")[0]; // Removed

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="w-full"
    >
      <Link
        href={`/blogs/${article.slug}`}
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
                src={
                  typeof article.heroImage === "string"
                    ? article.heroImage
                    : article.heroImage?.url || ""
                }
                alt={
                  typeof article.heroImage === "string"
                    ? "trending-blogs"
                    : article.heroImage?.alt || ""
                }
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 405px"
              />
            </motion.div>
          </div>

          {/* Text Wrapper */}
          <div className="flex flex-col gap-4 px-2 py-2">
            {/* Title */}
            <div
              className="text-[#333333] text-2xl font-normal leading-[1em] tracking-[-0.01em]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {/* @ts-ignore */}
              <RichText data={article.heroTitle} />
            </div>

            {/* Description */}
            <div
              className="text-[rgba(51,51,51,0.8)] text-base font-light leading-[1.4em] tracking-[0.01em] line-clamp-3"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {/* @ts-ignore */}
              <RichText data={article.heroDescription} />
            </div>

            {/* Author and Arrow */}
            <div className="flex justify-between items-center pt-3 border-t border-[rgba(51,51,51,0.16)]">
              <div className="flex items-center gap-4">
                <span
                  className="text-[#333333] text-sm font-normal leading-[1em] tracking-[-0.01em]"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Dr. Karishma Singh
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
