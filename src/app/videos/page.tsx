"use client";

import type { Metadata } from "next";
import * as React from "react";
import { MaxWidthWrapper } from "@/components/layout/max-width";
import { DashedSeparator } from "@/components/sections/dashed-separator";

const videos = [
  {
    url: "https://www.youtube.com/watch?v=i9p0tZaVdS4",
    title: "Top Skincare Trends in Pune",
  },
  {
    url: "https://www.youtube.com/watch?v=fmB8-4zusV8",
    title: "Must Popular Skincare Treatments",
  },
  {
    url: "https://www.youtube.com/watch?v=jY-7vEx8R3I",
    title: "5 Trends to Transform Your Skin",
  },
  {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "How To Get Glowing Skin",
  },
  {
    url: "https://www.youtube.com/watch?v=2g811Eo7K8U",
    title: "How To Achieve Glowing Skin Naturally",
  },
  {
    url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    title: "Professional Skincare at Home",
  },
  {
    url: "https://www.youtube.com/watch?v=L_jWHffIx5E",
    title: "The Ultimate Guide to Skin Lightening",
  },
  {
    url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    title: "Skin Brightening Treatment Everything You Need To Know",
  },
  {
    url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    title: "Laser Treatment Explained",
  },
  {
    url: "https://www.youtube.com/watch?v=RgBcMBNFkIQ",
    title: "Chemical Peel Guide",
  },
  {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "My Acne Treatment Journey",
  },
  {
    url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    title: "Life-Changing Laser Hair Removal",
  },
];

function getYouTubeEmbedUrl(url: string) {
  let videoId = "";
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === "youtu.be") {
      videoId = urlObj.pathname.slice(1);
    } else {
      videoId = urlObj.searchParams.get("v") || "";
    }
  } catch (error) {
    console.error("Invalid URL:", url, error);
    return "";
  }
  return `https://www.youtube.com/embed/${videoId}`;
}

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-[#F8F4EB]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FBEDE4] to-[#F8F4EB] py-16">
        <MaxWidthWrapper>
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center max-w-xs gap-x-2 mb-6">
              <DashedSeparator />
              <h3 className="text-[#EC7754] text-2xl font-medium whitespace-nowrap">
                Knowledge Hub
              </h3>
              <DashedSeparator />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333] mb-6">
              Expert Skincare Advice
            </h1>
            <p className="text-lg text-[#5E6282] max-w-3xl mx-auto">
              Watch our collection of educational videos, treatment guides, and
              patient testimonials to learn more about achieving your skincare
              goals.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Videos Grid */}
      <section className="py-12">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative">
                    <iframe
                      src={getYouTubeEmbedUrl(video.url)}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#EC7754] font-medium">
                      Skincare Trends
                    </span>
                    <h3 className="text-[#333] font-semibold mt-2 group-hover:text-[#D4A380] transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
