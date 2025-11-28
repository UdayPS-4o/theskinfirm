import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles, Star, Heart, Crown, Gem, Flower2, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";

const services = [
    "Bridal Glow Facials",
    "Laser Hair Reduction",
    "Body Polishing",
    "Skin Tightening"
];

const imagePath = "/groom-putting-ring-bride-finger.jpg";

export const Variation1 = () => (
    <div className="py-20 px-6 bg-[#FFFBF7]">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                <span className="text-[#D4A380] font-semibold tracking-wider uppercase text-sm">For the Bride & Groom</span>
                <h2 className="text-4xl font-serif text-[#4A4036] mt-4 mb-6">Radiant Skin for Your Big Day</h2>
                <p className="text-[#606060] leading-relaxed mb-8">
                    Our pre-wedding packages are curated to give you that perfect glow. From deep cleansing to advanced laser treatments, we ensure you look your best.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {services.map((s, i) => (
                        <div key={i} className="flex items-center gap-2 text-[#4A4036]">
                            <Check className="w-4 h-4 text-[#D4A380]" />
                            <span className="text-sm font-medium">{s}</span>
                        </div>
                    ))}
                </div>
                <Button className="bg-[#4A4036] text-white hover:bg-[#5C5148] px-8 py-6 rounded-full">
                    View Packages <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
            <div className="order-1 lg:order-2 relative h-[500px] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden border-4 border-white shadow-xl">
                <Image src={imagePath} alt="Wedding" fill className="object-cover" />
            </div>
        </div>
    </div>
);

export const Variation2 = () => (
    <div className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#4A4036] mb-6">Pre-Wedding Rituals</h2>
            <p className="text-[#606060] max-w-2xl mx-auto mb-12">
                Embark on a journey of transformation with our exclusive bridal treatments designed for the modern couple.
            </p>
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                        <Image src={imagePath} alt="Service" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            <h3 className="text-xl font-serif mb-2">Package {i}</h3>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">Complete skin rejuvenation for the perfect wedding look.</p>
                        </div>
                    </div>
                ))}
            </div>
            <Button variant="outline" className="border-[#4A4036] text-[#4A4036] hover:bg-[#4A4036] hover:text-white px-10 py-6 rounded-none uppercase tracking-widest">
                View Packages
            </Button>
        </div>
    </div>
);

export const Variation3 = () => (
    <div className="py-20 px-6 bg-[#F5F0EB]">
        <div className="container mx-auto max-w-6xl bg-white rounded-[3rem] p-8 lg:p-16 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                        <Image src={imagePath} alt="Wedding" fill className="object-cover" />
                        <div className="absolute inset-0 bg-[#4A4036]/10 mix-blend-multiply" />
                    </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFBF7] rounded-full text-[#D4A380] text-sm font-medium">
                        <Sparkles className="w-4 h-4" /> Signature Treatments
                    </div>
                    <h2 className="text-4xl font-serif text-[#4A4036]">The Bridal Glow</h2>
                    <p className="text-[#606060]">
                        Achieve flawless skin with our medically backed treatments. We customize every plan to suit your skin type and wedding timeline.
                    </p>
                    <div className="pt-4">
                        <Button className="bg-[#D4A380] text-white hover:bg-[#C09070] px-8 py-6 rounded-xl shadow-lg shadow-[#D4A380]/20">
                            View Packages
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const Variation4 = () => (
    <div className="py-24 px-6 bg-[#4A4036] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <Image src={imagePath} alt="Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
            <div className="lg:w-1/2">
                <h2 className="text-5xl font-serif mb-6">Bridal Excellence</h2>
                <p className="text-white/80 text-lg mb-10 max-w-md">
                    Prepare for your special day with the experts. Our comprehensive packages cover everything from hair to toe.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                        <Crown className="w-8 h-8 text-[#D4A380] mb-4" />
                        <h3 className="font-serif text-xl mb-2">Royal Package</h3>
                        <p className="text-sm text-white/60">Full body polishing & advanced facials.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                        <Gem className="w-8 h-8 text-[#D4A380] mb-4" />
                        <h3 className="font-serif text-xl mb-2">Diamond Package</h3>
                        <p className="text-sm text-white/60">Laser toning & hair reduction sessions.</p>
                    </div>
                </div>
                <Button className="bg-white text-[#4A4036] hover:bg-[#F0F0F0] px-8 py-6 rounded-lg font-semibold">
                    View Packages
                </Button>
            </div>
        </div>
    </div>
);

export const Variation5 = () => (
    <div className="py-20 px-6 bg-[#FFFBF7]">
        <div className="container mx-auto max-w-4xl text-center">
            <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg mb-8">
                <Flower2 className="w-10 h-10 text-[#D4A380]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#4A4036] mb-6">Natural Elegance</h2>
            <p className="text-[#606060] text-lg mb-10">
                Enhance your natural beauty with our organic and medical-grade treatments.
            </p>
            <div className="relative h-[300px] rounded-3xl overflow-hidden mb-10 shadow-xl">
                <Image src={imagePath} alt="Wedding" fill className="object-cover" />
            </div>
            <Button className="bg-transparent border-2 border-[#4A4036] text-[#4A4036] hover:bg-[#4A4036] hover:text-white px-12 py-6 rounded-full transition-all duration-300">
                View Packages
            </Button>
        </div>
    </div>
);

export const Variation6 = () => (
    <div className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 bg-[#F5F0EB] p-8 rounded-3xl flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-serif text-[#4A4036] mb-4">3 Months To Go</h3>
                        <p className="text-[#606060] text-sm">Start your journey early for the best results. Deep correction and long-term planning.</p>
                    </div>
                    <Clock className="w-10 h-10 text-[#D4A380] self-end mt-8" />
                </div>
                <div className="lg:col-span-4 bg-[#F5F0EB] p-8 rounded-3xl flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-serif text-[#4A4036] mb-4">1 Month To Go</h3>
                        <p className="text-[#606060] text-sm">Intensive care to polish and perfect. Focus on hydration and glow.</p>
                    </div>
                    <Star className="w-10 h-10 text-[#D4A380] self-end mt-8" />
                </div>
                <div className="lg:col-span-4 bg-[#4A4036] p-8 rounded-3xl flex flex-col justify-between text-white">
                    <div>
                        <h3 className="text-2xl font-serif mb-4">1 Week To Go</h3>
                        <p className="text-white/70 text-sm">Instant glow boosters and relaxation therapies for the big day.</p>
                    </div>
                    <div className="mt-8">
                        <Button className="w-full bg-white text-[#4A4036] hover:bg-[#F0F0F0]">View Packages</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const Variation7 = () => (
    <div className="py-20 px-6 bg-[#FFF5F5]">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
                <div className="absolute top-0 left-0 w-full h-full border-2 border-[#D4A380] rounded-full transform -translate-x-4 -translate-y-4" />
                <div className="relative h-[500px] w-full rounded-full overflow-hidden shadow-2xl">
                    <Image src={imagePath} alt="Wedding" fill className="object-cover" />
                </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-5xl font-serif text-[#4A4036] mb-6">Bridal Bliss</h2>
                <p className="text-[#606060] mb-8 leading-relaxed">
                    Experience the ultimate pampering. Our bridal packages are designed to make you feel like royalty.
                </p>
                <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div className="bg-[#FFF5F5] p-2 rounded-full"><Heart className="w-5 h-5 text-[#D4A380]" /></div>
                        <span className="text-[#4A4036] font-medium">Couple Packages Available</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div className="bg-[#FFF5F5] p-2 rounded-full"><ShieldCheck className="w-5 h-5 text-[#D4A380]" /></div>
                        <span className="text-[#4A4036] font-medium">Dermatologist Approved</span>
                    </div>
                </div>
                <Button className="mt-10 bg-[#D4A380] text-white hover:bg-[#C09070] px-10 py-4 rounded-full text-lg">
                    View Packages
                </Button>
            </div>
        </div>
    </div>
);

export const Variation8 = () => (
    <div className="py-20 px-0 bg-white">
        <div className="container mx-auto max-w-7xl">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden">
                <Image src={imagePath} alt="Wedding" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                    <div className="p-12 lg:p-24 max-w-2xl">
                        <h2 className="text-5xl lg:text-7xl font-serif text-white mb-6">Glow With Confidence</h2>
                        <p className="text-white/80 text-xl mb-10">
                            Unveil your most radiant self. Expert skincare for your wedding day.
                        </p>
                        <Button className="bg-white text-black hover:bg-[#F0F0F0] px-10 py-6 rounded-full text-lg font-medium">
                            View Packages
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const Variation9 = () => (
    <div className="py-20 px-6 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-[#4A4036] mb-4">Curated For You</h2>
                <div className="w-20 h-1 bg-[#D4A380] mx-auto" />
            </div>
            <div className="grid lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden">
                <div className="bg-white p-12 lg:p-20 flex flex-col justify-center">
                    <h3 className="text-3xl font-serif text-[#4A4036] mb-6">The Pre-Wedding Edit</h3>
                    <p className="text-[#606060] mb-8 leading-relaxed">
                        A collection of our finest treatments. Designed to target pigmentation, dullness, and texture issues effectively.
                    </p>
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-3 text-[#4A4036]"><div className="w-1.5 h-1.5 bg-[#D4A380] rounded-full" /> Skin Brightening</li>
                        <li className="flex items-center gap-3 text-[#4A4036]"><div className="w-1.5 h-1.5 bg-[#D4A380] rounded-full" /> Acne Management</li>
                        <li className="flex items-center gap-3 text-[#4A4036]"><div className="w-1.5 h-1.5 bg-[#D4A380] rounded-full" /> Hydration Boosters</li>
                    </ul>
                    <Button className="self-start bg-[#4A4036] text-white hover:bg-[#5C5148] px-8 py-4 rounded-lg">
                        View Packages
                    </Button>
                </div>
                <div className="relative h-[400px] lg:h-auto">
                    <Image src={imagePath} alt="Wedding" fill className="object-cover" />
                </div>
            </div>
        </div>
    </div>
);

export const Variation10 = () => (
    <div className="py-24 px-6 bg-[#FFFBF7] border-y border-[#EAE0D5]">
        <div className="container mx-auto max-w-5xl flex flex-col items-center">
            <div className="relative mb-10">
                <div className="absolute inset-0 bg-[#D4A380] blur-[60px] opacity-20 rounded-full" />
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-xl">
                    <Image src={imagePath} alt="Wedding" fill className="object-cover" />
                </div>
            </div>
            <h2 className="text-5xl font-serif text-[#4A4036] text-center mb-6">Ready to Shine?</h2>
            <p className="text-[#606060] text-center max-w-xl mb-10 text-lg">
                Let us take care of your skin while you plan your dream wedding. Book a consultation to get a customized roadmap.
            </p>
            <div className="flex gap-4">
                <Button className="bg-[#D4A380] text-white hover:bg-[#C09070] px-10 py-6 rounded-full shadow-lg shadow-[#D4A380]/30">
                    View Packages
                </Button>
            </div>
        </div>
    </div>
);
