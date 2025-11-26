"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Content Data
const content = {
    title: "Comprehensive Skin, Hair & Aesthetic Care",
    categories: [
        {
            title: "Skin Treatments",
            image: "/images/category/skin.png",
            description: "Advanced solutions for radiant, healthy skin.",
            link: "/services/skin"
        },
        {
            title: "Aesthetic Procedures",
            image: "/images/category/laser.png",
            description: "Enhance your natural beauty with expert care.",
            link: "/services/aesthetic"
        },
        {
            title: "Laser Solutions",
            image: "/images/category/laser.png",
            description: "Precision laser treatments for various concerns.",
            link: "/services/laser"
        },
        {
            title: "Hair & Scalp Treatments",
            image: "/images/category/hair.png",
            description: "Restore vitality and health to your hair.",
            link: "/services/hair"
        },
        {
            title: "Anti-Ageing Treatments",
            image: "/images/category/skin.png",
            description: "Turn back time with our specialized treatments.",
            link: "/services/anti-ageing"
        }
    ]
};

// Helper to get image
const CategoryImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    return (
        <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
            />
        </div>
    );
};

// ---------------------------------------------------
// Design 1: Classic 3x2 Grid (Clean Cards)
// ---------------------------------------------------
const Design1 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-12 text-center">
                {content.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.categories.map((cat, idx) => (
                    <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <CategoryImage src={cat.image} alt={cat.title} className="h-64 w-full" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#333333] mb-2">{cat.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm">{cat.description}</p>
                            <a href={cat.link} className="inline-flex items-center text-[#EC7754] font-medium hover:underline">
                                Learn More <ArrowRight size={16} className="ml-2" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 2: Horizontal Carousel
// ---------------------------------------------------
const Design2 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] max-w-xl">
                    {content.title}
                </h2>
                <div className="hidden md:flex gap-2">
                    {/* Carousel controls would go here if external */}
                </div>
            </div>

            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-4">
                    {content.categories.map((cat, idx) => (
                        <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                                    <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {cat.description}
                                    </p>
                                    <div className="flex items-center text-white font-medium text-sm">
                                        Learn More <ArrowRight size={16} className="ml-2" />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 3: Minimalist List with Hover Image
// ---------------------------------------------------
const Design3 = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-16">
                    {content.title}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-2">
                        {content.categories.map((cat, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => setActiveIdx(idx)}
                                className={`p-6 border-b border-gray-200 cursor-pointer transition-all duration-300 ${activeIdx === idx ? 'bg-white rounded-xl shadow-sm border-transparent' : 'hover:bg-white/50'}`}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className={`text-xl md:text-2xl font-medium transition-colors ${activeIdx === idx ? 'text-[#EC7754]' : 'text-[#333333]'}`}>
                                        {cat.title}
                                    </h3>
                                    <ArrowRight size={20} className={`transform transition-all ${activeIdx === idx ? 'text-[#EC7754] translate-x-0 opacity-100' : '-translate-x-4 opacity-0 text-gray-400'}`} />
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${activeIdx === idx ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-gray-600">{cat.description}</p>
                                    <span className="text-sm font-medium text-[#EC7754] mt-2 inline-block">Learn More →</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-[500px] relative rounded-3xl overflow-hidden shadow-xl hidden lg:block">
                        {content.categories.map((cat, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-500 ${activeIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------
// Design 4: Masonry / Staggered Grid (Left Focus)
// ---------------------------------------------------
const Design4 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-4">
                    {content.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of specialized treatments designed for your unique needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`group relative rounded-2xl overflow-hidden cursor-pointer ${idx === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 h-[500px]' : 'h-[240px] lg:h-[240px]'}`}
                    >
                        <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{cat.title}</h3>
                            <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                                <p className="text-white/90 text-sm mb-2">{cat.description}</p>
                                <span className="text-white text-sm font-medium border-b border-white/50 pb-0.5">Learn More</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 5: Overlay Cards (Clean & Modern)
// ---------------------------------------------------
const Design5 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-12 text-center">
                {content.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {content.categories.map((cat, idx) => (
                    <div key={idx} className="relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[350px] rounded-xl overflow-hidden group cursor-pointer shadow-sm">
                        <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-2xl font-semibold text-white mb-2">{cat.title}</h3>
                            <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white/90 text-sm">{cat.description}</span>
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm text-white">
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 6: Bento Grid Style
// ---------------------------------------------------
const Design6 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <span className="text-[#EC7754] font-semibold uppercase text-sm tracking-wider">Our Services</span>
                <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333]">
                    {content.title}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                {content.categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`relative rounded-3xl overflow-hidden group cursor-pointer ${idx === 0 ? 'md:col-span-2 md:row-span-2' : idx === 3 ? 'md:col-span-2' : ''}`}
                    >
                        <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute top-6 left-6 right-6">
                            <h3 className={`font-bold text-white ${idx === 0 ? 'text-3xl' : 'text-xl'}`}>{cat.title}</h3>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                            <p className={`text-white/90 text-sm max-w-[80%] ${idx === 0 ? 'block' : 'hidden group-hover:block'}`}>
                                {cat.description}
                            </p>
                            <div className="bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 7: Split Alternating
// ---------------------------------------------------
const Design7 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-16 text-center">
                {content.title}
            </h2>
            <div className="space-y-0">
                {content.categories.map((cat, idx) => (
                    <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>
                        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden">
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center items-start group-hover:bg-[#FDFBF7] transition-colors">
                            <div className="text-[#EC7754] font-serif text-4xl mb-4 opacity-20">0{idx + 1}</div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-[#333333] mb-4">{cat.title}</h3>
                            <p className="text-gray-600 mb-6 text-lg">{cat.description}</p>
                            <a href={cat.link} className="text-[#333333] font-medium border-b-2 border-[#EC7754] pb-1 hover:text-[#EC7754] transition-colors">
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 8: Icon/Circle Grid
// ---------------------------------------------------
const Design8 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-16 text-center">
                {content.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {content.categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                        <div className="w-48 h-48 rounded-full relative overflow-hidden mb-6 border-4 border-[#F8F4EB] group-hover:border-[#EC7754] transition-colors duration-300">
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-[#333333] mb-3">{cat.title}</h3>
                        <p className="text-gray-600 mb-4 max-w-xs">{cat.description}</p>
                        <a href={cat.link} className="text-[#EC7754] font-medium text-sm uppercase tracking-wide hover:underline">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 9: Interactive Accordion
// ---------------------------------------------------
const Design9 = () => {
    const [openIdx, setOpenIdx] = useState(0);

    return (
        <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-8">
                            {content.title}
                        </h2>
                        <div className="space-y-4">
                            {content.categories.map((cat, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setOpenIdx(idx)}
                                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${openIdx === idx ? 'bg-white shadow-md' : 'bg-transparent hover:bg-white/50'}`}
                                >
                                    <h3 className={`text-xl font-semibold mb-2 ${openIdx === idx ? 'text-[#EC7754]' : 'text-[#333333]'}`}>
                                        {cat.title}
                                    </h3>
                                    <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-gray-600 text-sm">{cat.description}</p>
                                        <div className="mt-3 flex items-center text-[#EC7754] text-sm font-medium">
                                            Learn More <ArrowRight size={14} className="ml-1" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-7 h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
                        {content.categories.map((cat, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-700 ${openIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h3 className="text-3xl font-bold mb-2">{cat.title}</h3>
                                    <p className="text-lg opacity-90">{cat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------
// Design 10: Tabbed Feature
// ---------------------------------------------------
const Design10 = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-12 text-center">
                    {content.title}
                </h2>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {content.categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === idx
                                    ? 'bg-[#333333] text-white shadow-lg scale-105'
                                    : 'bg-[#F8F4EB] text-[#6C6C6C] hover:bg-[#e8dcd0]'
                                }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>

                <div className="relative bg-[#F8F4EB] rounded-3xl overflow-hidden min-h-[500px] flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
                        {content.categories.map((cat, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-500 ${activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                        {content.categories.map((cat, idx) => (
                            <div
                                key={idx}
                                className={`transition-all duration-500 ${activeTab === idx ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'}`}
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">{cat.title}</h3>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{cat.description}</p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-gray-700">
                                        <div className="w-2 h-2 bg-[#EC7754] rounded-full mr-3" />
                                        Expert Consultation
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <div className="w-2 h-2 bg-[#EC7754] rounded-full mr-3" />
                                        Personalized Treatment Plan
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <div className="w-2 h-2 bg-[#EC7754] rounded-full mr-3" />
                                        Post-Care Support
                                    </li>
                                </ul>
                                <a href={cat.link} className="inline-block bg-[#333333] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#EC7754] transition-colors">
                                    Learn More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------------------------------------------------
// Design 11: Masonry - Right Focus
// ---------------------------------------------------
const Design11 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-4">
                    {content.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of specialized treatments designed for your unique needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`group relative rounded-2xl overflow-hidden cursor-pointer ${idx === 2 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 h-[500px]' : 'h-[240px] lg:h-[240px]'}`}
                    >
                        <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{cat.title}</h3>
                            <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                                <p className="text-white/90 text-sm mb-2">{cat.description}</p>
                                <span className="text-white text-sm font-medium border-b border-white/50 pb-0.5">Learn More</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 12: Masonry - Center Focus
// ---------------------------------------------------
const Design12 = () => (
    <section className="w-full bg-[#F8F4EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-4">
                    {content.title}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`group relative rounded-2xl overflow-hidden cursor-pointer ${idx === 1 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 h-[500px]' : 'h-[240px] lg:h-[240px]'}`}
                    >
                        <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{cat.title}</h3>
                            <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                                <p className="text-white/90 text-sm mb-2">{cat.description}</p>
                                <span className="text-white text-sm font-medium border-b border-white/50 pb-0.5">Learn More</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Design 13: Masonry - Wide Start
// ---------------------------------------------------
const Design13 = () => (
    <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333333] mb-4">
                    {content.title}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`group relative rounded-2xl overflow-hidden cursor-pointer ${idx === 0 ? 'md:col-span-2 lg:col-span-2 h-[240px]' : 'h-[240px]'}`}
                    >
                        <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{cat.title}</h3>
                            <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                                <p className="text-white/90 text-sm mb-2">{cat.description}</p>
                                <span className="text-white text-sm font-medium border-b border-white/50 pb-0.5">Learn More</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ---------------------------------------------------
// Main Component to Render All Variations
// ---------------------------------------------------
export const Section4Variations = () => {
    return (
        <div className="flex flex-col gap-20 pb-20 bg-gray-50">
            <div className="text-center py-12 bg-white border-b sticky top-0 z-50 shadow-sm">
                <h1 className="text-3xl font-bold mb-2 text-[#333333]">Section 4 – Variations</h1>
                <p className="text-gray-500">Comprehensive Skin, Hair & Aesthetic Care</p>
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 1: Classic Grid
                </div>
                <Design1 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 2: Horizontal Carousel
                </div>
                <Design2 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 3: Minimalist List
                </div>
                <Design3 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 4: Masonry / Staggered (Left Focus)
                </div>
                <Design4 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 5: Overlay Cards
                </div>
                <Design5 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 6: Bento Grid
                </div>
                <Design6 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 7: Split Alternating
                </div>
                <Design7 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 8: Icon/Circle Grid
                </div>
                <Design8 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 9: Interactive Accordion
                </div>
                <Design9 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 10: Tabbed Feature
                </div>
                <Design10 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 11: Masonry (Right Focus)
                </div>
                <Design11 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 12: Masonry (Center Focus)
                </div>
                <Design12 />
            </div>

            <div className="relative">
                <div className="absolute top-0 left-4 bg-[#333333] text-white px-4 py-2 text-sm font-bold rounded-b-lg z-40 shadow-md">
                    Option 13: Masonry (Wide Start)
                </div>
                <Design13 />
            </div>
        </div>
    );
};
