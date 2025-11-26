"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Plus, Minus, ChevronRight } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { MaxWidthWrapper } from "../layout/max-width";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

// --- Data ---
const servicesData = [
    {
        title: "Laser Hair Removal",
        description: "Advanced laser technology for permanent hair reduction with minimal discomfort.",
        coverImageUrl: "/images/services/laser hair removal.png",
        iconUrl: "/images/home-service/laser.png",
        url: "/laser-hair-removal-in-pune",
    },
    {
        title: "Acne Treatment",
        description: "Comprehensive acne treatment and scar reduction therapy for clear skin.",
        coverImageUrl: "/images/services/acne treatment.png",
        iconUrl: "/images/home-service/skin.png",
        url: "/acne-treatment-in-pune",
    },
    {
        title: "Hydrafacial Treatment",
        description: "Deep cleansing and hydrating facial treatment that rejuvenates your skin.",
        coverImageUrl: "/images/services/hydra.png",
        iconUrl: "/images/home-service/skin.png",
        url: "/hydrafacial-in-pune",
    },
    {
        title: "Pigmentation Treatment",
        description: "Effective pigmentation removal treatments to restore even skin tone.",
        coverImageUrl: "/images/services/pigmentation.png",
        iconUrl: "/images/home-service/skin.png",
        url: "/skin-pigmentation-melasma-treatment-in-pune",
    },
    {
        title: "Hair Loss Treatment",
        description: "Advanced hair restoration therapies to combat hair loss and promote growth.",
        coverImageUrl: "/images/services/hair loss.png",
        iconUrl: "/images/home-service/hair.png",
        url: "/hair-loss-treatment-in-pune",
    },
    {
        title: "Anti-Ageing Treatment",
        description: "Comprehensive anti-aging solutions to reduce wrinkles and restore youth.",
        coverImageUrl: "/images/services/anti aging.png",
        iconUrl: "/images/home-service/skin.png",
        url: "/anti-ageing-treatment-in-pune",
    },
    {
        title: "Chemical Peel",
        description: "Professional chemical peels to exfoliate and renew skin for a brighter complexion.",
        coverImageUrl: "/images/services/chemical peel.png",
        iconUrl: "/images/home-service/skin.png",
        url: "/chemical-peel-in-pune",
    },
];

// --- Shared Components ---
const SectionHeader = ({ title = "Our Signature Treatments", subtitle = "Our Main Services" }) => (
    <div className="mb-12 text-center">
        <span className="text-[#D4A380] font-medium tracking-wider uppercase text-sm">{subtitle}</span>
        <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl text-[#333333] font-serif font-semibold">{title}</h2>
    </div>
);

const ViewAllButton = () => (
    <div className="flex justify-center mt-10">
        <Link href="/services">
            <Button className="bg-[#D4A380] hover:bg-[#C19660] text-white rounded-full px-8 py-6 text-lg">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </Link>
    </div>
);

// --- Variation 1: Minimal Grid ---
export const Section5Var1 = () => {
    return (
        <section className="py-20 bg-[#F9F9F9]">
            <MaxWidthWrapper>
                <SectionHeader />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, idx) => (
                        <Link key={idx} href={service.url} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image src={service.coverImageUrl} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-[#F8F4EB] rounded-full">
                                        <Image src={service.iconUrl} alt="" width={24} height={24} className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                                <div className="flex items-center text-[#D4A380] font-medium text-sm group-hover:translate-x-1 transition-transform">
                                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <ViewAllButton />
            </MaxWidthWrapper>
        </section>
    );
};

// --- Variation 2: Elegant Carousel ---
export const Section5Var2 = () => {
    return (
        <section className="py-20 bg-white">
            <MaxWidthWrapper>
                <SectionHeader />
                <Carousel
                    opts={{ align: "start", loop: true }}
                    plugins={[Autoplay({ delay: 4000 })]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {servicesData.map((service, idx) => (
                            <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Link href={service.url} className="group relative block h-[500px] rounded-3xl overflow-hidden">
                                    <Image src={service.coverImageUrl} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                            <p className="text-white/80 text-sm mb-4 line-clamp-2">{service.description}</p>
                                            <span className="inline-flex items-center text-white font-medium">
                                                Explore <ArrowRight className="ml-2 w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-end gap-2 mt-6 pr-4">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </Carousel>
                <ViewAllButton />
            </MaxWidthWrapper>
        </section>
    );
};

// --- Variation 3: List with Hover Preview ---
export const Section5Var3 = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="py-20 bg-[#F5F5F0]">
            <MaxWidthWrapper>
                <SectionHeader />
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2 space-y-2">
                        {servicesData.map((service, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => setActiveIdx(idx)}
                                className={cn(
                                    "p-6 rounded-xl cursor-pointer transition-all duration-300 border-l-4",
                                    activeIdx === idx ? "bg-white border-[#D4A380] shadow-md" : "border-transparent hover:bg-white/50"
                                )}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className={cn("text-xl font-semibold", activeIdx === idx ? "text-[#D4A380]" : "text-gray-800")}>
                                        {service.title}
                                    </h3>
                                    {activeIdx === idx && <ArrowRight className="text-[#D4A380]" />}
                                </div>
                                <AnimatePresence>
                                    {activeIdx === idx && (
                                        <motion.p
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="text-gray-600 mt-2 text-sm overflow-hidden"
                                        >
                                            {service.description}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-1/2 h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIdx}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <Image src={servicesData[activeIdx].coverImageUrl} alt="" fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/20" />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <ViewAllButton />
            </MaxWidthWrapper>
        </section>
    );
};

// --- Variation 4: Bento Grid ---
export const Section5Var4 = () => {
    return (
        <section className="py-20 bg-white">
            <MaxWidthWrapper>
                <SectionHeader />
                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 h-[1000px] md:h-[800px]">
                    {servicesData.slice(0, 5).map((service, idx) => (
                        <Link
                            key={idx}
                            href={service.url}
                            className={cn(
                                "relative group overflow-hidden rounded-2xl",
                                idx === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                            )}
                        >
                            <Image src={service.coverImageUrl} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className={cn("font-bold text-white mb-2", idx === 0 ? "text-3xl" : "text-xl")}>{service.title}</h3>
                                <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    {service.description}
                                </p>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="text-white w-5 h-5" />
                            </div>
                        </Link>
                    ))}
                </div>
                <ViewAllButton />
            </MaxWidthWrapper>
        </section>
    );
};

// --- Variation 5: Horizontal Snap Scroll ---
export const Section5Var5 = () => {
    return (
        <section className="py-20 bg-[#1A1A1A] text-white">
            <div className="container mx-auto px-4">
                <SectionHeader title="Our Signature Treatments" subtitle="Premium Services" />
                <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
                    {servicesData.map((service, idx) => (
                        <Link
                            key={idx}
                            href={service.url}
                            className="snap-center shrink-0 w-[300px] md:w-[400px] relative group"
                        >
                            <div className="aspect-[3/4] relative overflow-hidden rounded-xl bg-gray-800">
                                <Image src={service.coverImageUrl} alt={service.title} fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                <div className="absolute bottom-0 p-6">
                                    <div className="text-[#D4A380] text-sm font-bold mb-2 uppercase tracking-widest">0{idx + 1}</div>
                                    <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                                    <p className="text-gray-300 text-sm">{service.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <ViewAllButton />
            </div>
        </section>
    );
};

// --- Variation 6: Accordion Cards ---
export const Section5Var6 = () => {
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
        <section className="py-20 bg-[#FDFBF7]">
            <MaxWidthWrapper>
                <SectionHeader />
                <div className="flex flex-col md:flex-row gap-4 h-[600px]">
                    {servicesData.slice(0, 5).map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="relative overflow-hidden rounded-2xl cursor-pointer"
                            animate={{ flex: expanded === idx ? 3 : 1 }}
                            onClick={() => setExpanded(idx)}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <Image src={service.coverImageUrl} alt={service.title} fill className="object-cover" />
                            <div className={cn("absolute inset-0 bg-black/30 transition-colors", expanded === idx ? "bg-black/20" : "bg-black/60")} />

                            <div className="absolute bottom-0 left-0 w-full p-6">
                                {expanded !== idx ? (
                                    <h3 className="text-white font-bold text-lg md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-8 md:left-8 whitespace-nowrap">
                                        {service.title}
                                    </h3>
                                ) : (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                        <h3 className="text-white font-bold text-2xl mb-2">{service.title}</h3>
                                        <p className="text-white/90 mb-4">{service.description}</p>
                                        <Link href={service.url}>
                                            <Button size="sm" className="bg-white text-black hover:bg-gray-200">View Details</Button>
                                        </Link>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <ViewAllButton />
            </MaxWidthWrapper>
        </section>
    );
};

// --- Variation 7: Circular/Icon Focus ---
export const Section5Var7 = () => {
    return (
        <section className="py-20 bg-white">
            <MaxWidthWrapper>
                <SectionHeader />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {servicesData.map((service, idx) => (
                        <Link key={idx} href={service.url} className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-[#F8F4EB] transition-colors">
                            <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-[#F8F4EB] group-hover:border-[#D4A380] transition-colors">
                                <Image src={service.coverImageUrl} alt={service.title} fill className="object-cover" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-500 line-clamp-2 mb-4">{service.description}</p>
                            <span className="text-[#D4A380] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Discover More
                            </span>
                        </Link>
                    ))}
                </div>
                <ViewAllButton />
            </MaxWidthWrapper>
        </section>
    );
};

// --- Variation 8: Parallax Cards ---
export const Section5Var8 = () => {
    return (
        <section className="py-20 bg-[#F0F0F0] overflow-hidden">
            <MaxWidthWrapper>
                <SectionHeader />
                <div className="relative">
                    <div className="flex flex-wrap justify-center gap-8">
                        {servicesData.map((service, idx) => (
                            <Link
                                key={idx}
                                href={service.url}
                                className={cn(
                                    "w-full md:w-[45%] lg:w-[30%] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500",
                                    idx % 2 === 0 ? "md:translate-y-0" : "md:translate-y-12"
                                )}
                            >
                                <div className="h-64 relative">
                                    <Image src={service.coverImageUrl} alt={service.title} fill className="object-cover" />
                                </div>
                                <div className="p-8">
                                    <div className="w-12 h-1 bg-[#D4A380] mb-4" />
                                    <h3 className="text-2xl font-serif text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <div className="flex justify-between items-center border-t pt-4">
                                        <span className="text-sm text-gray-400">0{idx + 1}</span>
                                        <ArrowRight className="text-gray-900 w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mt-20">
                    <ViewAllButton />
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

// --- Variation 9: Dark Mode Elegant ---
export const Section5Var9 = () => {
    return (
        <section className="py-24 bg-[#0F172A] text-white">
            <MaxWidthWrapper>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-[#38BDF8] font-bold tracking-widest uppercase text-xs">Our Services</span>
                        <h2 className="mt-2 text-4xl md:text-5xl font-bold">Signature Treatments</h2>
                    </div>
                    <Link href="/services" className="hidden md:block">
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-full">
                            View All Services
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.slice(0, 6).map((service, idx) => (
                        <Link key={idx} href={service.url} className="group relative bg-[#1E293B] rounded-2xl p-1 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-[#0F172A] rounded-xl p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-[#1E293B] rounded-lg">
                                        <Image src={service.iconUrl} alt="" width={30} height={30} className="invert opacity-80" />
                                    </div>
                                    <ArrowUpRight className="text-gray-500 group-hover:text-[#38BDF8] transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[#38BDF8] transition-colors">{service.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow">{service.description}</p>
                                <div className="h-48 relative rounded-lg overflow-hidden">
                                    <Image src={service.coverImageUrl} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-8 md:hidden flex justify-center">
                    <Button variant="outline" className="border-white/20 text-white">View All</Button>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

// --- Variation 10: Glassmorphism Overlay ---
export const Section5Var10 = () => {
    return (
        <section className="py-20 relative">
            <div className="absolute inset-0 z-0">
                <Image src="/images/services/hydra.png" alt="Background" fill className="object-cover opacity-20 blur-sm" />
                <div className="absolute inset-0 bg-white/80" />
            </div>

            <MaxWidthWrapper className="relative z-10">
                <SectionHeader />
                <Carousel className="w-full" opts={{ align: "center", loop: true }}>
                    <CarouselContent>
                        {servicesData.map((service, idx) => (
                            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 p-4">
                                <Link href={service.url}>
                                    <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-inner">
                                            <Image src={service.coverImageUrl} alt={service.title} fill className="object-cover" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{service.title}</h3>
                                        <p className="text-gray-600 text-center text-sm mb-6">{service.description}</p>
                                        <div className="flex justify-center">
                                            <span className="px-6 py-2 bg-white/60 rounded-full text-sm font-semibold text-gray-700 group-hover:bg-[#D4A380] group-hover:text-white transition-colors">
                                                View Details
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <ViewAllButton />
            </MaxWidthWrapper>
        </section>
    );
};

// --- Main Export for Test Page ---
export const Section5Variations = () => {
    return (
        <div className="space-y-24 pb-20">
            <div className="border-b border-gray-200 pb-10">
                <div className="bg-gray-100 py-4 px-8 mb-4 border-b font-mono text-sm text-gray-500 sticky top-0 z-50 opacity-90">
                    Variation 1: Minimal Grid
                </div>
                <Section5Var1 />
            </div>

            <div className="border-b border-gray-200 pb-10">
                <div className="bg-gray-100 py-4 px-8 mb-4 border-b font-mono text-sm text-gray-500 sticky top-0 z-50 opacity-90">
                    Variation 2: Elegant Carousel
                </div>
                <Section5Var2 />
            </div>

            <div className="border-b border-gray-200 pb-10">
                <div className="bg-gray-100 py-4 px-8 mb-4 border-b font-mono text-sm text-gray-500 sticky top-0 z-50 opacity-90">
                    Variation 3: List with Hover Preview
                </div>
                <Section5Var3 />
            </div>

            <div className="border-b border-gray-200 pb-10">
                <div className="bg-gray-100 py-4 px-8 mb-4 border-b font-mono text-sm text-gray-500 sticky top-0 z-50 opacity-90">
                    Variation 4: Bento Grid
                </div>
                <Section5Var4 />
            </div>

            <div className="border-b border-gray-200 pb-10">
                <div className="bg-gray-100 py-4 px-8 mb-4 border-b font-mono text-sm text-gray-500 sticky top-0 z-50 opacity-90">
                    Variation 5: Horizontal Snap Scroll (Dark)
                </div>
                <Section5Var5 />
            </div>

            <div className="border-b border-gray-200 pb-10">
                <div className="bg-gray-100 py-4 px-8 mb-4 border-b font-mono text-sm text-gray-500 sticky top-0 z-50 opacity-90">
                    Variation 6: Accordion Cards
                </div>
                <Section5Var6 />
            </div>

            <div className="border-b border-gray-200 pb-10">
                <div className="bg-gray-100 py-4 px-8 mb-4 border-b font-mono text-sm text-gray-500 sticky top-0 z-50 opacity-90">
                    Variation 7: Circular/Icon Focus
                </div>
                <Section5Var7 />
            </div>

            <div className="border-b border-gray-200 pb-10">
                <div className="bg-gray-100 py-4 px-8 mb-4 border-b font-mono text-sm text-gray-500 sticky top-0 z-50 opacity-90">
                    Variation 8: Parallax Cards
                </div>
                <Section5Var8 />
            </div>

            <div className="border-b border-gray-200 pb-10">
                <div className="bg-gray-100 py-4 px-8 mb-4 border-b font-mono text-sm text-gray-500 sticky top-0 z-50 opacity-90">
                    Variation 9: Dark Mode Elegant
                </div>
                <Section5Var9 />
            </div>

            <div className="border-b border-gray-200 pb-10">
                <div className="bg-gray-100 py-4 px-8 mb-4 border-b font-mono text-sm text-gray-500 sticky top-0 z-50 opacity-90">
                    Variation 10: Glassmorphism Overlay
                </div>
                <Section5Var10 />
            </div>
        </div>
    );
};
