"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Instagram, Youtube, MessageCircle } from "lucide-react";
import Image from "next/image";

export const Design1 = () => {
    return (
        <div className="w-full relative bg-[#FDF6F0] overflow-hidden min-h-[500px] flex items-center">
            {/* Background Image with Fade */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/wedding-bride.png"
                    alt="Wedding Bride"
                    fill
                    className="object-cover object-right lg:object-center opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6F0] via-[#FDF6F0]/80 to-transparent lg:via-[#FDF6F0]/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 lg:px-20 py-12 flex flex-col lg:flex-row items-center justify-between">
                <div className="max-w-2xl flex flex-col gap-6 text-center lg:text-left">
                    <h2 className="text-[#2D2D2D] text-4xl lg:text-6xl font-serif leading-tight">
                        Confidence, Perfect for <br />
                        <span className="italic">Your Wedding Day.</span>
                    </h2>
                    <p className="text-[#5A5A5A] text-lg lg:text-xl max-w-lg mx-auto lg:mx-0">
                        Start your personalized bridal consultation for a journey to timeless radiance.
                    </p>
                    <div className="pt-4">
                        <Button className="bg-[#D48D78] hover:bg-[#C07B68] text-white rounded-full px-8 py-6 text-lg shadow-lg transition-transform hover:scale-105">
                            Book Your Consultation
                        </Button>
                    </div>
                </div>

                {/* Social Icons (Floating on Right) */}
                <div className="hidden lg:flex flex-col gap-4 absolute right-8 top-1/2 -translate-y-1/2">
                    <a href="#" className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                        <Phone className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                        <Youtube className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#E1306C] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};
