"use client";

import React from "react";
import Image from "next/image";
import { Zap, User, Star, Activity, Sparkles } from "lucide-react";
import { AnimatedContent, StaggeredChildren, StaggerItem } from "@/components/shared/animated-content";

// Content data
const content = {
    subtitle: "What's Special at The Skin Firm",
    title: "What Makes The Skin Firm Exceptional",
    items: [
        {
            icon: Zap,
            title: "Advanced Technology",
            description: "US-FDA approved equipment ensuring precision and safety.",
        },
        {
            icon: User,
            title: "Personalized Care",
            description: "Tailored treatment plans curated by Dr. Karishma Singh herself.",
        },
        {
            icon: Star,
            title: "Premium Experience",
            description: "A serene, boutique-style clinic offering comfort and privacy.",
        },
        {
            icon: Activity,
            title: "Visible Results",
            description: "Scientifically designed solutions that bring lasting transformations.",
        },
    ],
};

export const Section3Point5Home2 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24 relative overflow-hidden">
        {/* background blobs (from Option 7) */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A380]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A380]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left – text & staggered cards (from Option 5) */}
                <div className="relative z-10 space-y-8">
                    <AnimatedContent>
                        <span className="inline-block text-[#C17A58] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                            {content.subtitle}
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-[#333333] mb-10 leading-tight">
                            {content.title}
                        </h2>
                    </AnimatedContent>

                    <StaggeredChildren className="grid grid-cols-1 sm:grid-cols-2 gap-5" staggerDelay={0.15}>
                        {content.items.map((item, idx) => (
                            <StaggerItem
                                key={idx}
                                className={`bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${idx % 2 !== 0 ? "sm:translate-y-8" : ""
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-[#D4A380]/10 rounded-lg text-[#D4A380]">
                                        <item.icon size={24} />
                                    </div>
                                    <span className="text-xs font-bold text-gray-300">0{idx + 1}</span>
                                </div>
                                <h3 className="font-semibold text-lg text-[#333333] mb-2">{item.title}</h3>
                                <p className="text-sm text-[#6C6C6C] leading-relaxed">{item.description}</p>
                            </StaggerItem>
                        ))}
                    </StaggeredChildren>
                </div>

                {/* Right – image (from Option 7 with glassmorphism overlay) */}
                <AnimatedContent delay={0.3}>
                    <div className="relative h-[600px] rounded-[3rem] overflow-hidden">
                        <Image
                            src="/clinic/theskinfirm-clinic.jpg"
                            alt="The Skin Firm Clinic"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center text-white">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#333333]">Rated #1 in Pune</p>
                                    <p className="text-xs text-[#6C6C6C]">For Advanced Dermatology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    </section>
);
