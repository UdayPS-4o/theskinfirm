"use client";
import React from "react";
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

// Simple placeholder for the right‑hand image (50% width)
const ImagePlaceholder = ({ className = "" }: { className?: string }) => (
    <div className={`bg-[#e8dcd0] relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center text-[#D4A380]/30 font-serif text-4xl">
            Image
        </div>
        {/* subtle pattern overlay */}
        <div
            className="absolute inset-0 opacity-10"
            style={{
                backgroundImage: "radial-gradient(#D4A380 1px, transparent 1px)",
                backgroundSize: "20px 20px",
            }}
        />
    </div>
);

export const Section3Home2 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-20 relative overflow-hidden">
        {/* background blobs from Design 7 */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A380]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A380]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left – text & staggered cards (Layout from Design 5) */}
                <div className="relative z-10 space-y-8">
                    <AnimatedContent>
                        <span className="text-[#D4A380] font-medium tracking-wider uppercase text-sm block mb-2">
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
                                className={`bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${idx % 2 !== 0 ? "sm:translate-y-8" : ""
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-[#D4A380]/10 rounded-lg text-[#D4A380]">
                                        <item.icon size={24} />
                                    </div>
                                    <span className="text-xs font-bold text-gray-300">0{idx + 1}</span>
                                </div>
                                <h3 className="font-bold text-lg text-[#333333] mb-2">{item.title}</h3>
                                <p className="text-sm text-[#6C6C6C] leading-relaxed">{item.description}</p>
                            </StaggerItem>
                        ))}
                    </StaggeredChildren>
                </div>

                {/* Right – image */}
                <AnimatedContent delay={0.3}>
                    <div className="relative h-[700px] lg:-mr-20">
                        <ImagePlaceholder className="w-full h-full rounded-l-[3rem]" />
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

