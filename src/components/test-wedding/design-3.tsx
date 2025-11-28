"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Design3 = () => {
    return (
        <div className="w-full relative min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/wedding-bride.png"
                    alt="Luxury Bridal"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            {/* Content Card */}
            <div className="relative z-10 max-w-3xl mx-4 p-8 lg:p-16 bg-white/10 backdrop-blur-md border border-white/20 text-center rounded-2xl shadow-2xl">
                <span className="text-white/80 uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
                    The Bridal Collection
                </span>
                <h2 className="text-white text-4xl lg:text-6xl font-serif mb-6">
                    Unveil Your <span className="italic text-[#FFD700]">Inner Glow</span>
                </h2>
                <p className="text-white/90 text-lg lg:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
                    Prepare for your big day with our exclusive skin treatments designed for the modern bride.
                </p>
                <Button className="bg-white text-[#4A4036] hover:bg-[#F0F0F0] rounded-full px-10 py-7 text-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Start Your Journey
                </Button>
            </div>
        </div>
    );
};
