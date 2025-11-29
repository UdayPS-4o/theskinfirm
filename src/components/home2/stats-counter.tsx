"use client";

import React, { useState, useEffect, useRef } from "react";

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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <div className="text-center">
                    <div className="text-6xl md:text-7xl font-serif text-[#D4A380] mb-2">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm font-serif italic text-[#8A7B70]">Years</div>
                </div>
                <div className="text-center">
                    <div className="text-6xl md:text-7xl font-serif text-[#D4A380] mb-2">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm font-serif italic text-[#8A7B70]">Treatments</div>
                </div>
                <div className="text-center">
                    <div className="text-6xl md:text-7xl font-serif text-[#D4A380] mb-2">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm font-serif italic text-[#8A7B70]">Patients</div>
                </div>
                <div className="text-center">
                    <div className="text-6xl md:text-7xl font-serif text-[#D4A380] mb-2">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm font-serif italic text-[#8A7B70]">Rating</div>
                </div>
            </div>
        </section>
    );
};
