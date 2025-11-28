"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedContent, StaggeredChildren, StaggerItem } from "@/components/shared/animated-content";

// Content Data
const content = {
    title: "Comprehensive Skin, Hair & Aesthetic Care",
    categories: [
        {
            title: "Aesthetic Procedures",
            image: "/home/aesthetic-procedure.jpg",
            description: "Enhance your natural beauty with expert care.",
            link: "/services?tab=skin&section=trending-services"
        },
        {
            title: "Skin Treatments",
            image: "/home/skin.png",
            description: "Advanced solutions for radiant, healthy skin.",
            link: "/services?tab=skin&section=acne-and-acne-scars"
        },
        {
            title: "Laser Solutions",
            image: "/home/laser.jpg",
            description: "Precision laser treatments for various concerns.",
            link: "/services?tab=skin&section=advanced-skin-treatment"
        },
        {
            title: "Hair & Scalp Treatments",
            image: "/home/hair.jpg",
            description: "Restore vitality and health to your hair.",
            link: "/hair-loss-treatment-in-pune"
        },
        {
            title: "Anti-Ageing Treatments",
            image: "/home/anti-ageing.jpg",
            description: "Turn back time with our specialized treatments.",
            link: "/anti-ageing-treatment-in-pune"
        }
    ]
};

// ---------------------------------------------------
// Design 12: Masonry - Center Focus
// ---------------------------------------------------
export const Section4Home2 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedContent>
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-semibold text-[#333333] mb-4">
                        {content.title}
                    </h2>
                </div>
            </AnimatedContent>

            <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                {content.categories.map((cat, idx) => (
                    <StaggerItem
                        key={idx}
                        className={`group relative rounded-2xl overflow-hidden ${idx === 1 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 h-[500px]' : 'h-[240px] lg:h-[240px]'}`}
                    >
                        <Link href={cat.link} className="block w-full h-full cursor-pointer">
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes={idx === 1 ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                                loading={idx < 2 ? "eager" : "lazy"}
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{cat.title}</h3>
                                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                                    <p className="text-white/90 text-sm mb-2">{cat.description}</p>
                                    <span className="text-white text-sm font-medium border-b border-white/50 pb-0.5">Learn More</span>
                                </div>
                            </div>
                        </Link>
                    </StaggerItem>
                ))}
            </StaggeredChildren>
        </div>
    </section>
);


