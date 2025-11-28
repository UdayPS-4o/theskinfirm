"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Design6 = () => {
    return (
        <div className="w-full bg-[#1A1A1A] text-white py-20 lg:py-32 relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] to-[#111] z-0" />

            <div className="container mx-auto px-4 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-6xl font-serif mb-6 leading-tight">
                            The Royal <br />
                            <span className="text-[#D4AF37]">Bridal Ritual</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md border-l border-[#D4AF37] pl-6">
                            Indulge in our premium skin therapies designed for the most important day of your life.
                        </p>
                        <Button className="bg-[#D4AF37] text-[#1A1A1A] hover:bg-[#C5A028] px-10 py-6 rounded-none text-lg tracking-wide font-medium">
                            RESERVE APPOINTMENT
                        </Button>
                    </div>

                    <div className="relative h-[400px] lg:h-[500px] w-full">
                        <div className="absolute inset-0 bg-[#D4AF37] transform translate-x-4 translate-y-4" />
                        <div className="absolute inset-0">
                            <Image
                                src="/wedding-bride.png"
                                alt="Royal Bride"
                                fill
                                className="object-cover opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
