"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Custom hook for counting animation
const useCountAnimation = (end: number, duration: number = 2000, startCounting: boolean = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, startCounting]);

    return count;
};

// Intersection Observer hook
const useInView = () => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView) {
                    setIsInView(true);
                }
            },
            { threshold: 0.3 }
        );

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isInView]);

    return { ref, isInView };
};

// Counter Item Component
const CounterItem = ({
    value,
    label,
    suffix = "",
    prefix = "",
    isInView
}: {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    isInView: boolean;
}) => {
    const count = useCountAnimation(value, 2000, isInView);

    return (
        <>
            {prefix}{count}{suffix}
        </>
    );
};

// Elegant Serif Counter Component
export const StatsCounter = () => {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FDFBF7] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Counter Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-6xl md:text-7xl font-serif text-[#D4A380] mb-2">
                            <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                        </div>
                        <div className="text-sm font-serif italic text-[#8A7B70]">Years</div>
                    </div>
                    <Link
                        href="/services"
                        className="text-center cursor-pointer hover:scale-105 transition-transform duration-200"
                    >
                        <div className="text-6xl md:text-7xl font-serif text-[#D4A380] mb-2">
                            <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                        </div>
                        <div className="text-sm font-serif italic text-[#8A7B70]">Treatments</div>
                    </Link>
                    <div className="text-center">
                        <div className="text-6xl md:text-7xl font-serif text-[#D4A380] mb-2">
                            <CounterItem value={3513} suffix="+" label="Patients" isInView={isInView} />
                        </div>
                        <div className="text-sm font-serif italic text-[#8A7B70]">Patients</div>
                    </div>
                    <Link
                        href="https://share.google/aymSV59k4JnJW4amj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center cursor-pointer hover:scale-105 transition-transform duration-200"
                    >
                        <div className="text-6xl md:text-7xl font-serif text-[#D4A380] mb-2">
                            <CounterItem value={4} label="Rating" isInView={isInView} />.9
                        </div>
                        <div className="text-sm font-serif italic text-[#8A7B70]">Rating</div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
