"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tag, Clock, ChevronRight, Sparkles, Percent, Gift } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// --- Shared Components ---

const SectionHeading = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={cn("text-[#4A4036] text-3xl md:text-4xl font-serif font-medium tracking-tight leading-[1.2]", className)}>
        {children}
    </h2>
);

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8A7B70]/30 text-[#8A7B70] text-xs font-medium w-fit uppercase tracking-wider mb-4", className)}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A380]" />
        {children}
    </div>
);

const OfferCard = ({
    title,
    subtitle,
    discount,
    image,
    className,
    dark = false
}: {
    title: string;
    subtitle: string;
    discount: string;
    image: string;
    className?: string;
    dark?: boolean;
}) => (
    <div className={cn(
        "relative overflow-hidden group cursor-pointer transition-all duration-500",
        dark ? "bg-[#4A4036] text-[#F8F4EB]" : "bg-[#FDFBF7] text-[#4A4036]",
        className
    )}>
        <div className="absolute inset-0 z-0">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className={cn(
                "absolute inset-0 transition-opacity duration-300",
                dark ? "bg-gradient-to-r from-[#4A4036]/95 via-[#4A4036]/80 to-transparent" : "bg-gradient-to-r from-[#FDFBF7]/95 via-[#FDFBF7]/80 to-transparent"
            )} />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-10 max-w-lg">
            <div className="mb-4 inline-block">
                <span className={cn(
                    "text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full border",
                    dark ? "border-[#D4A380] text-[#D4A380]" : "border-[#4A4036] text-[#4A4036]"
                )}>
                    Limited Time
                </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-2 leading-tight">
                {title}
            </h3>
            <p className={cn("text-lg mb-6 max-w-xs", dark ? "text-[#F8F4EB]/80" : "text-[#606060]")}>
                {subtitle}
            </p>

            <div className="flex items-center gap-6 mt-auto">
                <div className="flex flex-col">
                    <span className={cn("text-sm uppercase tracking-wide", dark ? "text-[#F8F4EB]/60" : "text-[#8A7B70]")}>Get Offer</span>
                    <span className={cn("text-3xl font-bold", dark ? "text-[#D4A380]" : "text-[#4A4036]")}>{discount}</span>
                </div>
                <div className="h-10 w-px bg-current opacity-20" />
                <Button
                    className={cn(
                        "rounded-full px-6",
                        dark ? "bg-[#D4A380] text-[#4A4036] hover:bg-white" : "bg-[#4A4036] text-white hover:bg-[#5C5148]"
                    )}
                >
                    Book Now
                </Button>
            </div>
        </div>
    </div>
);

// --- Variation 1: Classic 2x2 Grid (Like Reference) ---
const Variation1 = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <Badge>Exclusive Offers</Badge>
                    <SectionHeading>Unlock Your Best Skin</SectionHeading>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <OfferCard
                        title="Stubborn Acne Scars?"
                        subtitle="Try our expert Acne Scars Treatment."
                        discount="Upto 20% Off"
                        image="/placeholder.jpg"
                        className="rounded-3xl aspect-[16/9] md:aspect-[2/1]"
                    />
                    <OfferCard
                        title="Worried About Ageing?"
                        subtitle="Rejuvenate with our Anti-Ageing solutions."
                        discount="Flat 30% Off"
                        image="/placeholder.jpg"
                        className="rounded-3xl aspect-[16/9] md:aspect-[2/1]"
                    />
                    <OfferCard
                        title="Dull Skin Worries?"
                        subtitle="Get glowing with our signature facials."
                        discount="Buy 1 Get 1"
                        image="/placeholder.jpg"
                        className="rounded-3xl aspect-[16/9] md:aspect-[2/1]"
                    />
                    <OfferCard
                        title="Hairfall Anxiety?"
                        subtitle="Advanced hair care services tailored for you."
                        discount="Flat 25% Off"
                        image="/placeholder.jpg"
                        className="rounded-3xl aspect-[16/9] md:aspect-[2/1]"
                    />
                </div>
            </div>
        </section>
    );
};

// --- Variation 2: Horizontal Scroll with Progress ---
const Variation2 = () => {
    return (
        <section className="py-20 bg-[#FDFBF7] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-8 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-serif text-[#4A4036]">Seasonal Specials</h2>
                    <p className="text-[#8A7B70]">Limited time offers curated just for you</p>
                </div>
                <div className="hidden md:flex gap-2">
                    <Button size="icon" variant="outline" className="rounded-full border-[#4A4036]/20"><ArrowRight className="rotate-180 w-4 h-4" /></Button>
                    <Button size="icon" variant="outline" className="rounded-full border-[#4A4036]/20"><ArrowRight className="w-4 h-4" /></Button>
                </div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-6 container mx-auto no-scrollbar snap-x">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="min-w-[85vw] md:min-w-[600px] snap-center relative rounded-2xl overflow-hidden bg-white shadow-sm border border-[#E5E5E5] flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                            <Image src="/placeholder.jpg" alt="Offer" fill className="object-cover" />
                        </div>
                        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                            <div className="text-[#D4A380] font-bold text-sm tracking-widest uppercase mb-2">Summer Glow</div>
                            <h3 className="text-2xl font-serif text-[#4A4036] mb-2">HydraFacial Elite</h3>
                            <p className="text-[#606060] text-sm mb-6">Experience deep cleansing and hydration. Perfect for the summer heat.</p>
                            <div className="flex items-baseline gap-3 mb-6">
                                <span className="text-3xl font-bold text-[#4A4036]">₹2,999</span>
                                <span className="text-lg text-[#8A7B70] line-through">₹5,000</span>
                            </div>
                            <Button className="w-full bg-[#4A4036] text-white hover:bg-[#5C5148]">Claim Offer</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- Variation 3: Hero Offer + Side List ---
const Variation3 = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Hero Offer */}
                    <div className="lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px] group">
                        <Image src="/placeholder.jpg" alt="Main Offer" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#4A4036] via-transparent to-transparent opacity-90" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <span className="bg-[#D4A380] text-[#4A4036] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm mb-4 inline-block">Deal of the Month</span>
                            <h3 className="text-3xl md:text-5xl font-serif text-white mb-4">Full Body Laser Hair Reduction</h3>
                            <p className="text-white/80 text-lg mb-8 max-w-lg">Say goodbye to unwanted hair forever. Safe, painless, and effective for all skin types.</p>
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 border border-white/20">
                                    <span className="block text-xs text-white/60 uppercase">Starting at</span>
                                    <span className="text-2xl font-bold text-white">₹49,999</span>
                                </div>
                                <Button className="bg-white text-[#4A4036] hover:bg-[#F0F0F0] rounded-full px-8 py-6 text-lg">Book Consultation</Button>
                            </div>
                        </div>
                    </div>

                    {/* Side List Offers */}
                    <div className="flex flex-col gap-6">
                        {[
                            { title: "Chemical Peels", discount: "Flat 20% Off" },
                            { title: "Botox & Fillers", discount: "Buy 1 Get 1" },
                            { title: "Skin Brightening", discount: "Upto 40% Off" }
                        ].map((offer, i) => (
                            <div key={i} className="flex-1 bg-[#FDFBF7] rounded-3xl p-6 border border-[#E5E5E5] flex flex-col justify-center hover:border-[#D4A380] transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-serif text-[#4A4036]">{offer.title}</h4>
                                    <div className="bg-[#4A4036] text-white text-[10px] font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">NEW</div>
                                </div>
                                <p className="text-[#D4A380] font-bold text-2xl mb-4">{offer.discount}</p>
                                <div className="flex items-center text-[#8A7B70] text-sm font-medium group-hover:text-[#4A4036] transition-colors">
                                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Variation 4: Elegant Cards with Center Image ---
const Variation4 = () => {
    return (
        <section className="py-24 bg-[#FBEDE4]/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-serif text-[#4A4036] mb-4">Curated Packages</h2>
                    <p className="text-[#8A7B70]">Designed by Dr. Karishma Singh for optimal results.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "The Bride To Be", items: ["Full Body Laser", "Skin Brightening", "Hair Spa"], price: "₹15,000 Off" },
                        { title: "The Glow Getter", items: ["HydraFacial", "Chemical Peel", "LED Therapy"], price: "Flat 25% Off" },
                        { title: "Age Rewind", items: ["Botox (2 Areas)", "Fillers (1ml)", "Skin Tightening"], price: "₹10,000 Off" }
                    ].map((pkg, i) => (
                        <div key={i} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-[#4A4036]/5 hover:-translate-y-2 transition-transform duration-300 border border-[#F0F0F0]">
                            <div className="w-16 h-16 rounded-full bg-[#FBEDE4] flex items-center justify-center text-[#D4A380] mb-6 mx-auto">
                                <Gift className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#4A4036] text-center mb-6">{pkg.title}</h3>
                            <ul className="space-y-3 mb-8">
                                {pkg.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-[#606060] text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A380]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-center pt-6 border-t border-[#F0F0F0]">
                                <div className="text-xs text-[#8A7B70] uppercase tracking-wider mb-1">Save</div>
                                <div className="text-3xl font-bold text-[#4A4036] mb-4">{pkg.price}</div>
                                <Button variant="outline" className="rounded-full border-[#4A4036] text-[#4A4036] hover:bg-[#4A4036] hover:text-white w-full">
                                    Book Package
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Variation 5: Dark Mode Premium ---
const Variation5 = () => {
    return (
        <section className="py-20 bg-[#4A4036] text-[#F8F4EB]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#F8F4EB]/10 pb-8">
                    <div>
                        <h2 className="text-4xl font-serif mb-2">Members Only</h2>
                        <p className="text-[#F8F4EB]/60">Join The Skin Firm Club for exclusive benefits.</p>
                    </div>
                    <Button className="bg-[#D4A380] text-[#4A4036] hover:bg-white rounded-full mt-4 md:mt-0">
                        Become a Member
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: "First Visit", offer: "50% Off", desc: "On consultation charges" },
                        { label: "Birthdays", offer: "Free Facial", desc: "During your birthday month" },
                        { label: "Referrals", offer: "₹2000 Credit", desc: "For every friend you refer" },
                        { label: "Products", offer: "15% Off", desc: "On all skincare products" }
                    ].map((item, i) => (
                        <div key={i} className="bg-[#5C5148]/30 rounded-2xl p-6 border border-[#F8F4EB]/5 hover:bg-[#5C5148]/50 transition-colors">
                            <div className="text-[#D4A380] text-xs font-bold uppercase tracking-widest mb-4">{item.label}</div>
                            <div className="text-4xl font-serif mb-2">{item.offer}</div>
                            <p className="text-[#F8F4EB]/50 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Variation 6: Split Layout with Timer ---
const Variation6 = () => {
    return (
        <section className="py-0 bg-[#FDFBF7]">
            <div className="container mx-auto px-0 md:px-6">
                <div className="flex flex-col lg:flex-row bg-white md:rounded-[3rem] overflow-hidden shadow-2xl shadow-[#4A4036]/5 my-12">
                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <Image src="/placeholder.jpg" alt="Flash Sale" fill className="object-cover" />
                        <div className="absolute inset-0 bg-[#4A4036]/20" />
                        <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[#4A4036] font-bold text-sm flex items-center gap-2">
                            <Clock className="w-4 h-4" /> Ends in 2 Days
                        </div>
                    </div>
                    <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                        <h2 className="text-5xl font-serif text-[#4A4036] mb-6">Flash Sale</h2>
                        <p className="text-[#606060] text-lg mb-8">
                            Get ready for the wedding season with our exclusive pre-bridal packages. Limited slots available for this weekend.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex justify-between items-center border-b border-[#F0F0F0] pb-4">
                                <span className="text-[#4A4036] font-medium">Full Body Polishing</span>
                                <span className="text-[#D4A380] font-bold">Flat 40% Off</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-[#F0F0F0] pb-4">
                                <span className="text-[#4A4036] font-medium">Laser Hair Reduction (6 Sessions)</span>
                                <span className="text-[#D4A380] font-bold">Flat 50% Off</span>
                            </div>
                        </div>

                        <Button className="w-full rounded-2xl bg-[#4A4036] text-white py-7 text-lg hover:bg-[#5C5148]">
                            Book Your Slot Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Variation 7: Minimalist Ticker/Banner ---
const Variation7 = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#FBEDE4] rounded-2xl p-2 flex flex-col md:flex-row items-center gap-4 md:gap-8 overflow-hidden relative">
                    <div className="bg-[#D4A380] text-[#4A4036] px-6 py-8 md:py-12 rounded-xl flex-shrink-0 text-center md:text-left z-10 w-full md:w-auto">
                        <div className="text-xs font-bold uppercase mb-1">Special Offer</div>
                        <div className="text-3xl font-serif font-bold">Buy 2 Get 1</div>
                    </div>

                    <div className="flex-grow text-center md:text-left z-10 py-4 md:py-0">
                        <h3 className="text-xl md:text-2xl font-medium text-[#4A4036] mb-1">On All Dermal Fillers</h3>
                        <p className="text-[#8A7B70]">Enhance your features naturally. Valid till stocks last.</p>
                    </div>

                    <div className="pr-8 z-10 pb-6 md:pb-0">
                        <Button variant="outline" className="border-[#4A4036] text-[#4A4036] hover:bg-[#4A4036] hover:text-white rounded-full">
                            Claim Now
                        </Button>
                    </div>

                    {/* Decorative */}
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
                    <Sparkles className="absolute top-4 right-10 text-[#D4A380] opacity-50 w-12 h-12" />
                </div>
            </div>
        </section>
    );
};

// --- Variation 8: Masonry / Mosaic ---
const Variation8 = () => {
    return (
        <section className="py-20 bg-[#FDFBF7]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">
                    {/* Large Item */}
                    <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer">
                        <Image src="/placeholder.jpg" alt="Big Offer" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#4A4036]/90 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <span className="bg-white text-[#4A4036] px-3 py-1 text-xs font-bold rounded-full mb-3 inline-block">Trending</span>
                            <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">The Glass Skin Facial</h3>
                            <p className="text-white/80 mb-4">Get the K-Beauty glow with our signature treatment.</p>
                            <div className="text-[#D4A380] text-2xl font-bold">Flat 30% Off</div>
                        </div>
                    </div>

                    {/* Small Item 1 */}
                    <div className="relative rounded-3xl overflow-hidden bg-[#4A4036] p-6 flex flex-col justify-center group cursor-pointer">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Tag className="w-24 h-24 text-white" />
                        </div>
                        <h4 className="text-xl font-serif text-white mb-2 relative z-10">Laser Hair Removal</h4>
                        <p className="text-[#D4A380] text-3xl font-bold relative z-10">50% Off</p>
                        <p className="text-white/60 text-sm mt-2 relative z-10">On full body packages</p>
                    </div>

                    {/* Small Item 2 */}
                    <div className="relative rounded-3xl overflow-hidden bg-[#D4A380] p-6 flex flex-col justify-center group cursor-pointer">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Percent className="w-24 h-24 text-[#4A4036]" />
                        </div>
                        <h4 className="text-xl font-serif text-[#4A4036] mb-2 relative z-10">Acne Bootcamp</h4>
                        <p className="text-white text-3xl font-bold relative z-10">₹3,999</p>
                        <p className="text-[#4A4036]/70 text-sm mt-2 relative z-10">Per session (was ₹6,000)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Variation 9: Interactive Hover Tabs ---
const Variation9 = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge>Offers</Badge>
                        <SectionHeading className="mb-8">Choose Your Glow</SectionHeading>
                        <div className="space-y-4">
                            {[
                                { title: "Bridal Radiance", desc: "Complete pre-wedding package", price: "20% Off" },
                                { title: "Acne Free Skin", desc: "Consultation + 3 Peels", price: "₹9,999" },
                                { title: "Youthful You", desc: "Botox & Fillers combo", price: "15% Off" },
                            ].map((item, i) => (
                                <div key={i} className="group border border-[#E5E5E5] rounded-2xl p-6 hover:border-[#D4A380] hover:bg-[#FDFBF7] transition-all cursor-pointer">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-xl font-medium text-[#4A4036] group-hover:text-[#D4A380] transition-colors">{item.title}</h3>
                                            <p className="text-[#8A7B70] text-sm">{item.desc}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xl font-bold text-[#4A4036]">{item.price}</div>
                                            <div className="opacity-0 group-hover:opacity-100 text-xs text-[#D4A380] font-bold uppercase tracking-wider transition-opacity">Book Now</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-t-full rounded-b-[1000px] overflow-hidden border-4 border-[#FBEDE4]">
                        <Image src="/placeholder.jpg" alt="Treatment" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Variation 10: Simple Grid with Icons ---
const Variation10 = () => {
    return (
        <section className="py-20 bg-[#F8F4EB]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif text-[#4A4036]">Limited Time Deals</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: Sparkles, text: "Skin Brightening", offer: "30% Off" },
                        { icon: Tag, text: "Laser Hair Removal", offer: "BOGO" },
                        { icon: Gift, text: "Gift Cards", offer: "10% Extra" },
                        { icon: Clock, text: "Happy Hours", offer: "Flat 20%" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-shadow border border-transparent hover:border-[#D4A380]/30">
                            <div className="w-12 h-12 mx-auto bg-[#FBEDE4] rounded-full flex items-center justify-center text-[#D4A380] mb-4">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-[#4A4036] font-medium mb-1">{item.text}</h3>
                            <p className="text-[#D4A380] font-bold text-lg">{item.offer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function Section2Offers() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-[#4A4036] text-white py-12 px-6 text-center">
                <h1 className="text-4xl font-serif mb-4">Section 2: Offers Variations</h1>
                <p className="opacity-70">10 different ways to display offers & promotions.</p>
            </div>

            <div className="space-y-0">
                <div className="bg-gray-100 py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest text-center">Variation 1: Classic Grid (Reference Style)</div>
                <Variation1 />

                <div className="bg-gray-100 py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest text-center">Variation 2: Horizontal Scroll</div>
                <Variation2 />

                <div className="bg-gray-100 py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest text-center">Variation 3: Hero + Side List</div>
                <Variation3 />

                <div className="bg-gray-100 py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest text-center">Variation 4: Elegant Cards</div>
                <Variation4 />

                <div className="bg-gray-100 py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest text-center">Variation 5: Dark Mode Premium</div>
                <Variation5 />

                <div className="bg-gray-100 py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest text-center">Variation 6: Split Layout with Timer</div>
                <Variation6 />

                <div className="bg-gray-100 py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest text-center">Variation 7: Banner Style</div>
                <Variation7 />

                <div className="bg-gray-100 py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest text-center">Variation 8: Masonry Grid</div>
                <Variation8 />

                <div className="bg-gray-100 py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest text-center">Variation 9: Interactive List</div>
                <Variation9 />

                <div className="bg-gray-100 py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest text-center">Variation 10: Icon Grid</div>
                <Variation10 />
            </div>
        </div>
    );
}
