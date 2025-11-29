"use client";

import * as React from "react";
import { MaxWidthWrapper } from "@/components/layout/max-width";

const videoUrls = [
  "https://www.youtube.com/watch?v=i9p0tZaVdS4",
  "https://www.youtube.com/watch?v=fmB8-4zusV8",
  "https://www.youtube.com/watch?v=jY-7vEx8R3I",
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

export function VideoTestimonials() {
  return (
    <section className="w-full py-12">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <span className="inline-block text-[#C17A58] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Watch. Learn. Transform.
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#333333]">
            Expert Skincare Advice
          </h2>
          <p className="text-[#6C6C6C] max-w-2xl mx-auto mt-4 text-base">
            Get expert insights from Dr. Karishma Singh on skin care and treatments.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videoUrls.map((url, index) => (
            <div key={index} className="w-full max-w-[90%] mx-auto md:max-w-none">
              <div className="aspect-video">
                <iframe
                  src={getYouTubeEmbedUrl(url)}
                  title={`Client Testimonial ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full rounded-lg shadow-lg"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
