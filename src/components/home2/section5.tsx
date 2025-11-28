"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView } from "framer-motion";
import { InstantSkeletonLink } from "@/components/shared/InstantSkeletonLink";
import { MaxWidthWrapper } from "../layout/max-width";
import { cn } from "@/lib/utils";

// Services data array with hardcoded URLs
const servicesData = [
    {
        title: "Laser Hair Removal",
        description:
            "Advanced laser technology for permanent hair reduction with minimal discomfort and lasting results.",
        coverImageUrl: "/images/services/laser hair removal.png",
        iconUrl: "/images/home-service/laser.png",
        url: "/laser-hair-removal-in-pune",
    },
    {
        title: "Acne Treatment",
        description:
            "Comprehensive acne treatment and scar reduction therapy for clear, smooth, and healthy skin.",
        coverImageUrl: "/images/services/acne treatment.png",
        iconUrl: "/images/home-service/skin.png",
        url: "/acne-treatment-in-pune",
    },
    {
        title: "Hydrafacial Treatment",
        description:
            "Deep cleansing and hydrating facial treatment that rejuvenates and revitalizes your skin.",
        coverImageUrl: "/images/services/hydra.png",
        iconUrl: "/images/home-service/skin.png",
        url: "/hydrafacial-in-pune",
    },
    {
        title: "Pigmentation Treatment",
        description:
            "Effective pigmentation removal treatments to restore even skin tone and natural radiance.",
        coverImageUrl: "/images/services/pigmentation.png",
        iconUrl: "/images/home-service/skin.png",
        url: "/skin-pigmentation-melasma-treatment-in-pune",
    },
    {
        title: "Hair Loss Treatment",
        description:
            "Advanced hair restoration therapies to combat hair loss and promote healthy hair growth.",
        coverImageUrl: "/images/services/hair loss.png",
        iconUrl: "/images/home-service/hair.png",
        url: "/hair-loss-treatment-in-pune",
    },
    {
        title: "Anti-Ageing Treatment",
        description:
            "Comprehensive anti-aging solutions to reduce wrinkles and restore youthful skin appearance.",
        coverImageUrl: "/images/services/anti aging.png",
        iconUrl: "/images/home-service/skin.png",
        url: "/anti-ageing-treatment-in-pune",
    },
    {
        title: "Chemical Peel",
        description:
            "Professional chemical peels to exfoliate and renew skin for a brighter, smoother complexion.",
        coverImageUrl: "/images/services/chemical peel.png",
        iconUrl: "/images/home-service/skin.png",
        url: "/chemical-peel-in-pune",
    },
];

// Shuffle function using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const Section5Home2 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // IMPORTANT: Avoid SSR/CSR mismatch by shuffling only after mount on the client.
    // Render a stable order on the server, then shuffle on the client in an effect.
    const [randomizedServices, setRandomizedServices] = useState(servicesData);
    useEffect(() => {
        setRandomizedServices(shuffleArray(servicesData));
    }, []);

    // Filter out Pigmentation Treatment for mobile view
    const mobileServices = randomizedServices.filter(s => s.title !== "Pigmentation Treatment");

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        staggerChildren: 0.2,
                    },
                },
            }}
            className="py-16 lg:py-20 bg-[#F8F4EB]"
        >
            <MaxWidthWrapper>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5 },
                        },
                    }}
                    className="grid grid-cols-1 lg:grid-cols-2 items-end gap-6 lg:gap-8 mb-12"
                >
                    <div className="w-full text-center lg:text-left">
                        <span className="text-[#D4A380] font-medium tracking-wider uppercase text-sm block mb-2">
                            Our Main Services
                        </span>
                        <h2 className="text-4xl lg:text-5xl text-[#333333] font-semibold leading-tight">
                            Our Signature Treatments
                        </h2>
                    </div>
                    <div>
                        <p className="text-base sm:text-lg leading-relaxed text-[#6C6C6C] text-center lg:text-start">
                            Beauty begins the moment you decide to take care of yourself.
                            <br />
                            With 59+ services to choose from, it can be hard to know where to
                            start. Explore our most sought-after treatments, crafted to
                            enhance your natural beauty with precision,
                            care, and expertise.{" "}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5 },
                        },
                    }}
                >
                    {/* Mobile Grid Layout (2x2) */}
                    <div className="grid grid-cols-2 gap-3 sm:hidden mb-8">
                        {mobileServices.map((service, idx) => (
                            <Service
                                key={service.url}
                                title={service.title}
                                coverImageUrl={service.coverImageUrl}
                                iconUrl={service.iconUrl}
                                url={service.url}
                                variant="mobile"
                                priority={idx < 2}
                            />
                        ))}
                    </div>

                    {/* Desktop Carousel Layout */}
                    <div className="hidden sm:block">
                        <Carousel
                            plugins={[Autoplay({ delay: 3000 })]}
                            className="w-full pt-8 sm:pt-10"
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent className="flex -ml-2 sm:-ml-4">
                                {randomizedServices.map((service, idx) => (
                                    <CarouselItem
                                        key={service.url}
                                        className="pl-2 sm:pl-4 basis-4/5 sm:basis-3/4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                                    >
                                        <Service
                                            title={service.title}
                                            coverImageUrl={service.coverImageUrl}
                                            iconUrl={service.iconUrl}
                                            url={service.url}
                                            variant="default"
                                            priority={idx < 3}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5 },
                        },
                    }}
                    className="flex flex-row justify-center sm:justify-end mt-8 sm:mt-16"
                >
                    <InstantSkeletonLink href="/services">
                        <Button
                            className="bg-[#D4A380] hover:bg-[#C19660] text-white transition-colors duration-200"
                            size={"lg"}
                        >
                            <p>Explore All Services</p>
                            <ArrowRight className="ml-2" />
                        </Button>
                    </InstantSkeletonLink>
                </motion.div>
            </MaxWidthWrapper>
        </motion.div>
    );
};

function Service({
    coverImageUrl,
    title,
    iconUrl,
    url,
    variant = "default",
    priority = false,
}: {
    coverImageUrl: string;
    title: string;
    iconUrl: string;
    url: string;
    variant?: "default" | "mobile";
    priority?: boolean;
}) {
    const isMobile = variant === "mobile";

    return (
        <Link href={url} className="block h-full">
            <div className={cn("relative cursor-pointer group h-full", isMobile ? "pb-0" : "pb-12 sm:pb-14")}>
                <Image
                    alt={title}
                    src={coverImageUrl}
                    width={384}
                    height={520}
                    className={cn(
                        "mx-auto w-full object-cover rounded-lg transition-transform duration-300",
                        isMobile
                            ? "aspect-[4/5] h-auto"
                            : "max-w-[300px] sm:max-w-[350px] lg:max-w-[384px] h-[400px] sm:h-[450px] lg:h-[420px] group-hover:scale-105"
                    )}
                    loading={priority ? "eager" : "lazy"}
                    sizes={isMobile ? "(max-width: 640px) 50vw, 384px" : "(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 384px"}
                />
                <div className={cn(
                    "w-full px-2",
                    isMobile ? "absolute bottom-2" : "absolute bottom-4"
                )}>
                    <div className={cn(
                        "bg-white w-full mx-auto rounded-lg shadow-lg transition-shadow duration-300",
                        isMobile
                            ? "p-2 max-w-full bg-white/95 backdrop-blur-sm"
                            : "py-3 sm:py-4 px-3 sm:px-4 max-w-[260px] sm:max-w-[300px] group-hover:shadow-xl"
                    )}>
                        <div className="flex flex-row justify-start items-center gap-2.5">
                            <Image
                                alt=""
                                src={iconUrl}
                                height={40}
                                width={40}
                                className={cn("flex-shrink-0 object-contain", isMobile ? "w-6 h-6" : "w-8 h-8 sm:w-10 sm:h-10")}
                                loading="lazy"
                            />
                            <div className="flex flex-col items-start justify-start space-y-1.5 sm:space-y-2 flex-1 min-w-0">
                                <h3 className={cn(
                                    "font-medium text-[#5E6282] leading-tight transition-colors duration-200 truncate w-full",
                                    isMobile ? "text-xs font-bold text-[#333]" : "text-sm sm:text-base group-hover:text-[#374151]"
                                )}>
                                    {title}
                                </h3>
                                {!isMobile && (
                                    <div className="text-[#D4A380] hover:text-[#C19660] flex flex-row items-center justify-start space-x-1 transition-colors duration-200">
                                        <h4 className="text-xs sm:text-sm">See more</h4>
                                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

