"use client";

import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, Star, Award, Heart, Zap, Target, CheckCircle } from "lucide-react";

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

export default function CountersPage() {
    return (
        <div className="w-full bg-white py-20 px-4">
            <div className="container mx-auto max-w-7xl space-y-32">
                <h1 className="text-4xl md:text-5xl font-serif text-center text-[#4A4036] mb-20">
                    Counter Variations
                </h1>

                {/* Variation 1: Classic Minimalist */}
                <CounterVariation1 />

                {/* Variation 2: With Icons */}
                <CounterVariation2 />

                {/* Variation 3: Boxed Cards */}
                <CounterVariation3 />

                {/* Variation 4: Gradient Background */}
                <CounterVariation4 />

                {/* Variation 5: With Dividers */}
                <CounterVariation5 />

                {/* Variation 6: Circular Cards */}
                <CounterVariation6 />

                {/* Variation 7: Large Numbers */}
                <CounterVariation7 />

                {/* Variation 8: Icon Top */}
                <CounterVariation8 />

                {/* Variation 9: Side Border Accent */}
                <CounterVariation9 />

                {/* Variation 10: Stacked Layout */}
                <CounterVariation10 />

                {/* Variation 11: Compact Grid */}
                <CounterVariation11 />

                {/* Variation 12: Elegant Serif */}
                <CounterVariation12 />

                {/* Variation 13: Modern Minimal */}
                <CounterVariation13 />

                {/* Variation 14: With Subtle Shadow */}
                <CounterVariation14 />

                {/* Variation 15: Border Bottom */}
                <CounterVariation15 />

                {/* Variation 16: Icon Background */}
                <CounterVariation16 />

                {/* Variation 17: Two Tone */}
                <CounterVariation17 />

                {/* Variation 18: Underlined */}
                <CounterVariation18 />

                {/* Variation 19: Pill Shape */}
                <CounterVariation19 />

                {/* Variation 20: Split Style */}
                <CounterVariation20 />
            </div>
        </div>
    );
}

// Variation 1: Classic Minimalist
function CounterVariation1() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FFFBF7] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 1: Classic Minimalist</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm md:text-base text-[#8A7B70] uppercase tracking-wide">YEARS</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm md:text-base text-[#8A7B70] uppercase tracking-wide">TREATMENTS OFFERED</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm md:text-base text-[#8A7B70] uppercase tracking-wide">HAPPY PATIENTS</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm md:text-base text-[#8A7B70] uppercase tracking-wide">RATING ON GOOGLE</div>
                </div>
            </div>
        </section>
    );
}

// Variation 2: With Icons
function CounterVariation2() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FDFBF7] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 2: With Icons</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                    <Award className="w-12 h-12 mx-auto mb-4 text-[#EC7754]" />
                    <div className="text-4xl md:text-5xl font-bold text-[#4A4036] mb-2">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm md:text-base text-[#8A7B70]">Years of Excellence</div>
                </div>
                <div className="text-center">
                    <Zap className="w-12 h-12 mx-auto mb-4 text-[#EC7754]" />
                    <div className="text-4xl md:text-5xl font-bold text-[#4A4036] mb-2">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm md:text-base text-[#8A7B70]">Treatments Offered</div>
                </div>
                <div className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-4 text-[#EC7754]" />
                    <div className="text-4xl md:text-5xl font-bold text-[#4A4036] mb-2">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm md:text-base text-[#8A7B70]">Happy Patients</div>
                </div>
                <div className="text-center">
                    <Star className="w-12 h-12 mx-auto mb-4 text-[#EC7754]" />
                    <div className="text-4xl md:text-5xl font-bold text-[#4A4036] mb-2">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm md:text-base text-[#8A7B70]">Rating on Google</div>
                </div>
            </div>
        </section>
    );
}

// Variation 3: Boxed Cards
function CounterVariation3() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#F8F4EB] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 3: Boxed Cards</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-[#E5E5E5]">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A380] mb-3">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Years</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-[#E5E5E5]">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A380] mb-3">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Treatments</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-[#E5E5E5]">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A380] mb-3">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Patients</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-[#E5E5E5]">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A380] mb-3">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm text-[#8A7B70]">Google Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 4: Gradient Background
function CounterVariation4() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-gradient-to-r from-[#FFFBF7] via-[#FBF8F3] to-[#F8F4EF] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 4: Gradient Background</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-[#EC7754] mb-2">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm md:text-base text-[#4A4036] font-medium">YEARS</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-[#EC7754] mb-2">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm md:text-base text-[#4A4036] font-medium">TREATMENTS</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-[#EC7754] mb-2">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm md:text-base text-[#4A4036] font-medium">PATIENTS</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-[#EC7754] mb-2">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm md:text-base text-[#4A4036] font-medium">RATING</div>
                </div>
            </div>
        </section>
    );
}

// Variation 5: With Dividers
function CounterVariation5() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FFFBF7] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 5: With Dividers</h3>
            <div className="flex flex-wrap justify-center items-center max-w-5xl mx-auto">
                <div className="text-center px-8 py-4">
                    <div className="text-5xl md:text-6xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Years</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-[#E5E5E5]"></div>
                <div className="text-center px-8 py-4">
                    <div className="text-5xl md:text-6xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Treatments</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-[#E5E5E5]"></div>
                <div className="text-center px-8 py-4">
                    <div className="text-5xl md:text-6xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Patients</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-[#E5E5E5]"></div>
                <div className="text-center px-8 py-4">
                    <div className="text-5xl md:text-6xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm text-[#8A7B70]">Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 6: Circular Cards
function CounterVariation6() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#F8F4EB] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 6: Circular Cards</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white border-4 border-[#D4A380] flex items-center justify-center mb-4 shadow-md">
                        <div className="text-3xl md:text-4xl font-bold text-[#4A4036]">
                            <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                        </div>
                    </div>
                    <div className="text-sm text-[#8A7B70]">Years</div>
                </div>
                <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white border-4 border-[#D4A380] flex items-center justify-center mb-4 shadow-md">
                        <div className="text-3xl md:text-4xl font-bold text-[#4A4036]">
                            <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                        </div>
                    </div>
                    <div className="text-sm text-[#8A7B70]">Treatments</div>
                </div>
                <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white border-4 border-[#D4A380] flex items-center justify-center mb-4 shadow-md">
                        <div className="text-3xl md:text-4xl font-bold text-[#4A4036]">
                            <CounterItem value={3513} label="Patients" isInView={isInView} />
                        </div>
                    </div>
                    <div className="text-sm text-[#8A7B70]">Patients</div>
                </div>
                <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white border-4 border-[#D4A380] flex items-center justify-center mb-4 shadow-md">
                        <div className="text-3xl md:text-4xl font-bold text-[#4A4036]">
                            <CounterItem value={4} label="Rating" isInView={isInView} />.9
                        </div>
                    </div>
                    <div className="text-sm text-[#8A7B70]">Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 7: Large Numbers
function CounterVariation7() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FDFBF7] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 7: Large Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-[#EC7754] mb-1">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-xs md:text-sm text-[#8A7B70] uppercase tracking-widest">Years</div>
                </div>
                <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-[#EC7754] mb-1">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-xs md:text-sm text-[#8A7B70] uppercase tracking-widest">Treatments</div>
                </div>
                <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-[#EC7754] mb-1">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-xs md:text-sm text-[#8A7B70] uppercase tracking-widest">Patients</div>
                </div>
                <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-[#EC7754] mb-1">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-xs md:text-sm text-[#8A7B70] uppercase tracking-widest">Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 8: Icon Top
function CounterVariation8() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-white py-16 px-4 rounded-2xl border border-[#E5E5E5]">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 8: Icon Top</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF5F5] flex items-center justify-center">
                        <Award className="w-8 h-8 text-[#D4A380]" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-[#4A4036]">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Years of Trust</div>
                </div>
                <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF5F5] flex items-center justify-center">
                        <Target className="w-8 h-8 text-[#D4A380]" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-[#4A4036]">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Treatments</div>
                </div>
                <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF5F5] flex items-center justify-center">
                        <Heart className="w-8 h-8 text-[#D4A380]" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-[#4A4036]">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Happy Clients</div>
                </div>
                <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF5F5] flex items-center justify-center">
                        <Star className="w-8 h-8 text-[#D4A380]" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-[#4A4036]">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm text-[#8A7B70]">Google Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 9: Side Border Accent
function CounterVariation9() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FFFBF7] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 9: Side Border Accent</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-lg border-l-4 border-[#EC7754] shadow-sm">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Years of Excellence</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-[#D4A380] shadow-sm">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Treatments Offered</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-[#EC7754] shadow-sm">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Happy Patients</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-[#D4A380] shadow-sm">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm text-[#8A7B70]">Google Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 10: Stacked Layout
function CounterVariation10() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#F8F4EB] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 10: Stacked Layout</h3>
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
                    <div className="text-5xl font-bold text-[#EC7754]">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-right">
                        <div className="text-lg font-semibold text-[#4A4036]">Years</div>
                        <div className="text-sm text-[#8A7B70]">Of Excellence</div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
                    <div className="text-5xl font-bold text-[#EC7754]">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-right">
                        <div className="text-lg font-semibold text-[#4A4036]">Treatments</div>
                        <div className="text-sm text-[#8A7B70]">Offered</div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
                    <div className="text-5xl font-bold text-[#EC7754]">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-right">
                        <div className="text-lg font-semibold text-[#4A4036]">Patients</div>
                        <div className="text-sm text-[#8A7B70]">Served Successfully</div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
                    <div className="text-5xl font-bold text-[#EC7754]">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-right">
                        <div className="text-lg font-semibold text-[#4A4036]">Google Rating</div>
                        <div className="text-sm text-[#8A7B70]">Average Review Score</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Variation 11: Compact Grid
function CounterVariation11() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FFFBF7] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 11: Compact Grid</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-[#FFF5F5] to-white p-5 rounded-lg text-center border border-[#E5E5E5]">
                    <div className="text-3xl md:text-4xl font-bold text-[#4A4036] mb-1">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-xs text-[#8A7B70]">Years</div>
                </div>
                <div className="bg-gradient-to-br from-[#FFF5F5] to-white p-5 rounded-lg text-center border border-[#E5E5E5]">
                    <div className="text-3xl md:text-4xl font-bold text-[#4A4036] mb-1">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-xs text-[#8A7B70]">Treatments</div>
                </div>
                <div className="bg-gradient-to-br from-[#FFF5F5] to-white p-5 rounded-lg text-center border border-[#E5E5E5]">
                    <div className="text-3xl md:text-4xl font-bold text-[#4A4036] mb-1">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-xs text-[#8A7B70]">Patients</div>
                </div>
                <div className="bg-gradient-to-br from-[#FFF5F5] to-white p-5 rounded-lg text-center border border-[#E5E5E5]">
                    <div className="text-3xl md:text-4xl font-bold text-[#4A4036] mb-1">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-xs text-[#8A7B70]">Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 12: Elegant Serif
function CounterVariation12() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FDFBF7] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 12: Elegant Serif</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
}

// Variation 13: Modern Minimal
function CounterVariation13() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-white py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 13: Modern Minimal</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-light text-[#4A4036] mb-3">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-xs text-[#8A7B70] uppercase tracking-[0.2em]">Years</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-light text-[#4A4036] mb-3">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-xs text-[#8A7B70] uppercase tracking-[0.2em]">Treatments</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-light text-[#4A4036] mb-3">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-xs text-[#8A7B70] uppercase tracking-[0.2em]">Patients</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-light text-[#4A4036] mb-3">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-xs text-[#8A7B70] uppercase tracking-[0.2em]">Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 14: With Subtle Shadow
function CounterVariation14() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#F8F4EB] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 14: With Subtle Shadow</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                    <div className="text-5xl font-bold text-[#EC7754] mb-3">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Years</div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                    <div className="text-5xl font-bold text-[#EC7754] mb-3">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Treatments</div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                    <div className="text-5xl font-bold text-[#EC7754] mb-3">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Patients</div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                    <div className="text-5xl font-bold text-[#EC7754] mb-3">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm text-[#8A7B70]">Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 15: Border Bottom
function CounterVariation15() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FFFBF7] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 15: Border Bottom</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center pb-4 border-b-4 border-[#D4A380]">
                    <div className="text-5xl md:text-6xl font-bold text-[#4A4036] mb-2">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Years</div>
                </div>
                <div className="text-center pb-4 border-b-4 border-[#EC7754]">
                    <div className="text-5xl md:text-6xl font-bold text-[#4A4036] mb-2">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Treatments</div>
                </div>
                <div className="text-center pb-4 border-b-4 border-[#D4A380]">
                    <div className="text-5xl md:text-6xl font-bold text-[#4A4036] mb-2">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Patients</div>
                </div>
                <div className="text-center pb-4 border-b-4 border-[#EC7754]">
                    <div className="text-5xl md:text-6xl font-bold text-[#4A4036] mb-2">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm text-[#8A7B70]">Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 16: Icon Background
function CounterVariation16() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FDFBF7] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 16: Icon Background</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="relative bg-white p-8 rounded-xl text-center overflow-hidden border border-[#E5E5E5]">
                    <Award className="absolute top-2 right-2 w-20 h-20 text-[#F8F4EB] opacity-50" />
                    <div className="relative text-4xl md:text-5xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="relative text-sm text-[#8A7B70]">Years</div>
                </div>
                <div className="relative bg-white p-8 rounded-xl text-center overflow-hidden border border-[#E5E5E5]">
                    <Zap className="absolute top-2 right-2 w-20 h-20 text-[#F8F4EB] opacity-50" />
                    <div className="relative text-4xl md:text-5xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="relative text-sm text-[#8A7B70]">Treatments</div>
                </div>
                <div className="relative bg-white p-8 rounded-xl text-center overflow-hidden border border-[#E5E5E5]">
                    <Users className="absolute top-2 right-2 w-20 h-20 text-[#F8F4EB] opacity-50" />
                    <div className="relative text-4xl md:text-5xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="relative text-sm text-[#8A7B70]">Patients</div>
                </div>
                <div className="relative bg-white p-8 rounded-xl text-center overflow-hidden border border-[#E5E5E5]">
                    <Star className="absolute top-2 right-2 w-20 h-20 text-[#F8F4EB] opacity-50" />
                    <div className="relative text-4xl md:text-5xl font-bold text-[#D4A380] mb-2">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="relative text-sm text-[#8A7B70]">Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 17: Two Tone
function CounterVariation17() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#F8F4EB] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 17: Two Tone</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-gradient-to-b from-[#D4A380] to-[#EC7754] p-8 rounded-xl text-center text-white">
                    <div className="text-5xl font-bold mb-2">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm opacity-90">Years</div>
                </div>
                <div className="bg-gradient-to-b from-[#EC7754] to-[#D4A380] p-8 rounded-xl text-center text-white">
                    <div className="text-5xl font-bold mb-2">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm opacity-90">Treatments</div>
                </div>
                <div className="bg-gradient-to-b from-[#D4A380] to-[#EC7754] p-8 rounded-xl text-center text-white">
                    <div className="text-5xl font-bold mb-2">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm opacity-90">Patients</div>
                </div>
                <div className="bg-gradient-to-b from-[#EC7754] to-[#D4A380] p-8 rounded-xl text-center text-white">
                    <div className="text-5xl font-bold mb-2">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm opacity-90">Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 18: Underlined
function CounterVariation18() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FFFBF7] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 18: Underlined</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                    <div className="text-lg text-[#8A7B70] mb-2 uppercase tracking-wide">Years</div>
                    <div className="inline-block">
                        <div className="text-5xl md:text-6xl font-bold text-[#EC7754] mb-1">
                            <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                        </div>
                        <div className="h-1 bg-[#D4A380] rounded"></div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-lg text-[#8A7B70] mb-2 uppercase tracking-wide">Treatments</div>
                    <div className="inline-block">
                        <div className="text-5xl md:text-6xl font-bold text-[#EC7754] mb-1">
                            <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                        </div>
                        <div className="h-1 bg-[#D4A380] rounded"></div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-lg text-[#8A7B70] mb-2 uppercase tracking-wide">Patients</div>
                    <div className="inline-block">
                        <div className="text-5xl md:text-6xl font-bold text-[#EC7754] mb-1">
                            <CounterItem value={3513} label="Patients" isInView={isInView} />
                        </div>
                        <div className="h-1 bg-[#D4A380] rounded"></div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-lg text-[#8A7B70] mb-2 uppercase tracking-wide">Rating</div>
                    <div className="inline-block">
                        <div className="text-5xl md:text-6xl font-bold text-[#EC7754] mb-1">
                            <CounterItem value={4} label="Rating" isInView={isInView} />.9
                        </div>
                        <div className="h-1 bg-[#D4A380] rounded"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Variation 19: Pill Shape
function CounterVariation19() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#F8F4EB] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 19: Pill Shape</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white px-6 py-8 rounded-full text-center border-2 border-[#D4A380]">
                    <div className="text-4xl md:text-5xl font-bold text-[#EC7754] mb-2">
                        <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Years</div>
                </div>
                <div className="bg-white px-6 py-8 rounded-full text-center border-2 border-[#D4A380]">
                    <div className="text-4xl md:text-5xl font-bold text-[#EC7754] mb-2">
                        <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Treatments</div>
                </div>
                <div className="bg-white px-6 py-8 rounded-full text-center border-2 border-[#D4A380]">
                    <div className="text-4xl md:text-5xl font-bold text-[#EC7754] mb-2">
                        <CounterItem value={3513} label="Patients" isInView={isInView} />
                    </div>
                    <div className="text-sm text-[#8A7B70]">Patients</div>
                </div>
                <div className="bg-white px-6 py-8 rounded-full text-center border-2 border-[#D4A380]">
                    <div className="text-4xl md:text-5xl font-bold text-[#EC7754] mb-2">
                        <CounterItem value={4} label="Rating" isInView={isInView} />.9
                    </div>
                    <div className="text-sm text-[#8A7B70]">Rating</div>
                </div>
            </div>
        </section>
    );
}

// Variation 20: Split Style
function CounterVariation20() {
    const { ref, isInView } = useInView();

    return (
        <section ref={ref} className="w-full bg-[#FFFBF7] py-16 px-4 rounded-2xl">
            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-12">Variation 20: Split Style</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl overflow-hidden shadow-md flex">
                    <div className="bg-[#D4A380] p-6 flex items-center justify-center min-w-[120px]">
                        <div className="text-5xl font-bold text-white">
                            <CounterItem value={5} suffix="+" label="Years" isInView={isInView} />
                        </div>
                    </div>
                    <div className="p-6 flex items-center">
                        <div>
                            <div className="text-lg font-semibold text-[#4A4036]">Years</div>
                            <div className="text-sm text-[#8A7B70]">Of Excellence</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-md flex">
                    <div className="bg-[#EC7754] p-6 flex items-center justify-center min-w-[120px]">
                        <div className="text-5xl font-bold text-white">
                            <CounterItem value={60} suffix="+" label="Treatments" isInView={isInView} />
                        </div>
                    </div>
                    <div className="p-6 flex items-center">
                        <div>
                            <div className="text-lg font-semibold text-[#4A4036]">Treatments</div>
                            <div className="text-sm text-[#8A7B70]">Offered</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-md flex">
                    <div className="bg-[#D4A380] p-6 flex items-center justify-center min-w-[120px]">
                        <div className="text-5xl font-bold text-white">
                            <CounterItem value={3513} label="Patients" isInView={isInView} />
                        </div>
                    </div>
                    <div className="p-6 flex items-center">
                        <div>
                            <div className="text-lg font-semibold text-[#4A4036]">Patients</div>
                            <div className="text-sm text-[#8A7B70]">Happy Clients</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-md flex">
                    <div className="bg-[#EC7754] p-6 flex items-center justify-center min-w-[120px]">
                        <div className="text-5xl font-bold text-white">
                            <CounterItem value={4} label="Rating" isInView={isInView} />.9
                        </div>
                    </div>
                    <div className="p-6 flex items-center">
                        <div>
                            <div className="text-lg font-semibold text-[#4A4036]">Google Rating</div>
                            <div className="text-sm text-[#8A7B70]">Average Score</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
