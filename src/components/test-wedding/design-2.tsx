"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Design2 = () => {
    return (
        <div className="w-full bg-white flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20 bg-[#F9F5F1]">
                <div className="max-w-xl flex flex-col gap-8">
                    <div className="w-16 h-1 bg-[#D4A380] mb-4" />
                    <h2 className="text-[#4A4036] text-4xl lg:text-5xl font-serif font-medium leading-tight">
                        Bridal Radiance <br />
                        <span className="text-[#D4A380] italic">Reimagined</span>
                    </h2>
                    <p className="text-[#606060] text-lg leading-relaxed">
                        Every bride deserves to glow. Our bespoke bridal packages are curated to ensure your skin looks as breathtaking as you feel on your special day.
                    </p>
                    <div className="flex gap-4">
                        <Button className="bg-[#4A4036] hover:bg-[#5C5148] text-white rounded-none px-8 py-6 text-lg">
                            View Packages
                        </Button>
                        <Button variant="outline" className="border-[#4A4036] text-[#4A4036] hover:bg-[#4A4036] hover:text-white rounded-none px-8 py-6 text-lg">
                            Book Consultation
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                <Image
                    src="/wedding-bride.png"
                    alt="Bridal Glow"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>
        </div>
    );
};
