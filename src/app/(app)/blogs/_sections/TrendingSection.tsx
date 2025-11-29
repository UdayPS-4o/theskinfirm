"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Blog } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

export function TrendingSection({ blogs }: { blogs: Blog[] }) {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-10 sm:gap-12">
          {/* Heading Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6"
          >
            {/* Text Wrapper */}
            <div className="flex flex-col gap-3">
              <span
                className="text-[#B76E79] text-xs sm:text-sm font-semibold uppercase tracking-wide"
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  lineHeight: "1.364em",
                }}
              >
                Trending Topics
              </span>
              <h2
                className="text-[#333333] text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-[1.1em] tracking-[-0.01em] max-w-xl"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Stay Trendy with Our Latest Insights
              </h2>
            </div>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-y-12">
            {blogs.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article, index }: { article: Blog; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full h-full"
    >
      <Link
        href={`/blogs/${article.slug}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="block h-full"
      >
        <article
          className="group flex flex-col h-full bg-white rounded-lg overflow-hidden transition-all duration-300"
        >
          {/* Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-5">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300 z-10" />
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
                    ? "Blog Thumbnail"
                    : article.heroImage?.alt || "Blog Thumbnail"
                }
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow gap-3">
            {/* Title */}
            <h3
              className="text-[#333333] text-xl sm:text-2xl font-semibold leading-[1.3em] tracking-[-0.01em] group-hover:text-[#D4A380] transition-colors duration-200 line-clamp-2"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {/* @ts-ignore */}
              <RichText data={article.heroTitle} />
            </h3>

            {/* Description */}
            <div
              className="text-[rgba(51,51,51,0.7)] text-sm sm:text-base leading-[1.6em] line-clamp-3 mb-4"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {/* @ts-ignore */}
              <RichText data={article.heroDescription} />
            </div>

            {/* Footer */}
            <div className="mt-auto pt-4 border-t border-[rgba(51,51,51,0.1)] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span
                  className="text-[#333333] text-xs sm:text-sm font-medium"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Dr. Karishma Singh
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#D4A380] text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                Read Article
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6667 2.66669L16 8.00002L10.6667 13.3334V9.33335H0V6.66669H10.6667V2.66669Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
