"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const Design7 = () => {
    return (
        <div className="w-full bg-white py-20 px-4 lg:px-20">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-serif text-[#4A4036] mb-4">Bridal Services</h2>
                    <p className="text-[#606060] max-w-2xl">Curated treatments for every stage of your wedding journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer">
                        <Image
                            src="/wedding-bride.png"
                            alt="6 Months Before"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-[#D4A380] text-sm uppercase tracking-wider mb-2 block">Phase 1</span>
                            <h3 className="text-white text-2xl font-serif mb-4">The Preparation</h3>
                            <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                Deep cleansing, acne treatment, and laser hair reduction to set the perfect base.
                            </p>
                            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black w-full">
                                View Details
                            </Button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer">
                        <Image
                            src="/wedding-bride.png"
                            alt="3 Months Before"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-[#D4A380] text-sm uppercase tracking-wider mb-2 block">Phase 2</span>
                            <h3 className="text-white text-2xl font-serif mb-4">The Glow Up</h3>
                            <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                Skin brightening, chemical peels, and hydration boosters for that inner radiance.
                            </p>
                            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black w-full">
                                View Details
                            </Button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer">
                        <Image
                            src="/wedding-bride.png"
                            alt="1 Month Before"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-[#D4A380] text-sm uppercase tracking-wider mb-2 block">Phase 3</span>
                            <h3 className="text-white text-2xl font-serif mb-4">The Final Touch</h3>
                            <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                Polishing, fillers, and instant glow treatments for the big day.
                            </p>
                            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black w-full">
                                View Details
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
