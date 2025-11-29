"use client";
import React from "react";
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AnimatedContent } from "@/components/shared/animated-content";

const imagePath = "/groom-putting-ring-bride-finger.jpg";

export const Section3Home2 = () => {
    return (
        <section className="w-full bg-[#FFFBF7] py-20 px-4 lg:px-20">
            <AnimatedContent>
                <div className="container mx-auto max-w-6xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 relative">
                            <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src={imagePath}
                                    alt="Bridal Prep"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-5 lg:-ml-12 z-10">
                            <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl border border-[#F0E6DE]">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF5F5] rounded-full text-[#D4A380] text-xs font-bold tracking-widest uppercase mb-6">
                                    <Crown className="w-3 h-3" /> Pre-Wedding Excellence
                                </div>
                                <h2 className="text-[#4A4036] text-4xl lg:text-5xl font-serif font-medium mb-6 leading-tight">
                                    Where Love Meets <br />
                                    <span className="italic text-[#D4A380]">Luminous Skin</span>
                                </h2>
                                <p className="text-[#6C6C6C] mb-8 leading-relaxed text-base">
                                    Expert dermatological care meets luxury in our bespoke pre-wedding programs, designed to unveil your most confident self.
                                </p>
                                <Link href="/contact" className="w-full">
                                    <Button className="w-full bg-[#4A4036] text-white rounded-xl py-6 text-lg hover:bg-[#5C5148]">
                                        View Packages
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedContent>
        </section>
    );
};

