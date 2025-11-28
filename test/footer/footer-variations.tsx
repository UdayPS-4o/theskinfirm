"use client";

import {
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Variation 1: Stacked Vertical Layout (Best for Mobile)
export const FooterVariation1 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 pb-6 bg-[#F8F4EB] px-4"
        >
            <div className="max-w-md mx-auto space-y-6">
                {/* Brand Section */}
                <div className="text-center space-y-3">
                    <h3 className="text-[#8A7B70] text-lg font-medium">The Skin Firm</h3>
                    <p className="text-sm text-[#A89689]">
                        Where Skin Meets Science, and Self-Care Feels Like Home
                    </p>
                    {/* Social Icons - Centered */}
                    <div className="flex justify-center gap-3 pt-2">
                        <Link
                            href="https://www.instagram.com/theskinfirm_official/?hl=en"
                            target="_blank"
                            className="p-2.5 rounded-full bg-[#F9EEE7]"
                        >
                            <Instagram className="size-4" color="#D4A380" />
                        </Link>
                        <Link
                            href="https://www.facebook.com/theskinfirmpune/"
                            target="_blank"
                            className="p-2.5 rounded-full bg-[#F9EEE7]"
                        >
                            <Facebook className="size-4" color="#D4A380" />
                        </Link>
                        <Link
                            href="https://www.youtube.com/@TheSkinFirm-Pune"
                            target="_blank"
                            className="p-2.5 rounded-full bg-[#F9EEE7]"
                        >
                            <Youtube className="size-4" color="#D4A380" />
                        </Link>
                        <Link
                            href="https://wa.me/918308669966"
                            target="_blank"
                            className="p-2.5 rounded-full bg-[#F9EEE7]"
                        >
                            <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="text-center space-y-3 border-t border-[#E5DDD1] pt-6">
                    <h4 className="text-[#8A7B70] text-base font-medium">Quick Links</h4>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-[#A89689]">
                        <Link href="/" className="hover:opacity-80">Home</Link>
                        <span>•</span>
                        <Link href="/about-us" className="hover:opacity-80">About</Link>
                        <span>•</span>
                        <Link href="/services" className="hover:opacity-80">Services</Link>
                        <span>•</span>
                        <Link href="/contact" className="hover:opacity-80">Contact</Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="text-center space-y-3 border-t border-[#E5DDD1] pt-6">
                    <h4 className="text-[#8A7B70] text-base font-medium">Contact</h4>
                    <div className="space-y-2.5 text-sm text-[#A89689]">
                        <Link href="tel:+918308669966" className="block hover:opacity-80">
                            +91 8308669966
                        </Link>
                        <Link href="mailto:theskinfirmclinic@gmail.com" className="block hover:opacity-80">
                            theskinfirmclinic@gmail.com
                        </Link>
                    </div>
                </div>

                {/* Hours */}
                <div className="text-center space-y-2 border-t border-[#E5DDD1] pt-6">
                    <h4 className="text-[#8A7B70] text-base font-medium">Hours</h4>
                    <p className="text-sm text-[#A89689]">Tue - Sun: 10AM - 8PM</p>
                    <p className="text-sm text-[#A89689]">Monday: Closed</p>
                </div>
            </div>
        </motion.footer>
    );
};

// Variation 2: Accordion Style (Expandable Sections)
export const FooterVariation2 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 pb-6 bg-[#F8F4EB] px-4"
        >
            <div className="max-w-lg mx-auto">
                {/* Brand Always Visible */}
                <div className="text-center space-y-3 mb-6">
                    <h3 className="text-[#8A7B70] text-xl font-medium">The Skin Firm</h3>
                    <p className="text-sm text-[#A89689]">
                        Where Skin Meets Science, and Self-Care Feels Like Home
                    </p>
                </div>

                {/* Compact Info Grid */}
                <div className="space-y-4">
                    {/* Social Links Row */}
                    <div className="flex justify-center gap-3">
                        <Link href="https://www.instagram.com/theskinfirm_official/?hl=en" target="_blank" className="p-2.5 rounded-full bg-[#F9EEE7]">
                            <Instagram className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://www.facebook.com/theskinfirmpune/" target="_blank" className="p-2.5 rounded-full bg-[#F9EEE7]">
                            <Facebook className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://www.youtube.com/@TheSkinFirm-Pune" target="_blank" className="p-2.5 rounded-full bg-[#F9EEE7]">
                            <Youtube className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://wa.me/918308669966" target="_blank" className="p-2.5 rounded-full bg-[#F9EEE7]">
                            <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
                        </Link>
                    </div>

                    {/* Compact Contact Cards */}
                    <div className="grid grid-cols-1 gap-3">
                        <Link href="tel:+918308669966" className="flex items-center justify-center gap-2 p-3 bg-[#F9EEE7] rounded-lg hover:opacity-80">
                            <Phone className="size-4" color="#D4A380" />
                            <span className="text-sm text-[#8A7B70]">+91 8308669966</span>
                        </Link>

                        <Link href="mailto:theskinfirmclinic@gmail.com" className="flex items-center justify-center gap-2 p-3 bg-[#F9EEE7] rounded-lg hover:opacity-80">
                            <Mail className="size-4" color="#D4A380" />
                            <span className="text-sm text-[#8A7B70]">Email Us</span>
                        </Link>

                        <div className="p-3 bg-[#F9EEE7] rounded-lg text-center">
                            <p className="text-xs text-[#8A7B70] font-medium mb-1">Opening Hours</p>
                            <p className="text-xs text-[#A89689]">Tue-Sun: 10AM-8PM</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-3 pt-2 text-sm text-[#A89689]">
                        <Link href="/" className="hover:opacity-80">Home</Link>
                        <Link href="/about-us" className="hover:opacity-80">About</Link>
                        <Link href="/services" className="hover:opacity-80">Services</Link>
                        <Link href="/contact" className="hover:opacity-80">Contact</Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

// Variation 3: Card-Based Layout
export const FooterVariation3 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 pb-6 bg-[#F8F4EB] px-4"
        >
            <div className="max-w-sm mx-auto space-y-4">
                {/* Header Card */}
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 text-center space-y-3">
                    <h3 className="text-[#8A7B70] text-lg font-medium">The Skin Firm</h3>
                    <p className="text-xs text-[#A89689]">
                        Where Skin Meets Science, and Self-Care Feels Like Home
                    </p>
                    <div className="flex justify-center gap-2.5 pt-2">
                        <Link href="https://www.instagram.com/theskinfirm_official/?hl=en" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                            <Instagram className="size-3.5" color="#D4A380" />
                        </Link>
                        <Link href="https://www.facebook.com/theskinfirmpune/" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                            <Facebook className="size-3.5" color="#D4A380" />
                        </Link>
                        <Link href="https://www.youtube.com/@TheSkinFirm-Pune" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                            <Youtube className="size-3.5" color="#D4A380" />
                        </Link>
                        <Link href="https://wa.me/918308669966" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                            <Image src="/whatsapp.svg" alt="WhatsApp" width={14} height={14} />
                        </Link>
                    </div>
                </div>

                {/* Contact Card */}
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 space-y-3">
                    <h4 className="text-[#8A7B70] text-sm font-medium text-center">Get In Touch</h4>
                    <div className="space-y-2 text-xs text-[#A89689] text-center">
                        <Link href="tel:+918308669966" className="block hover:opacity-80">📞 +91 8308669966</Link>
                        <Link href="mailto:theskinfirmclinic@gmail.com" className="block hover:opacity-80">✉️ theskinfirmclinic@gmail.com</Link>
                        <p className="pt-2">🕒 Tue-Sun: 10AM-8PM</p>
                    </div>
                </div>

                {/* Navigation Card */}
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-[#A89689]">
                        <Link href="/" className="hover:opacity-80">Home</Link>
                        <span>•</span>
                        <Link href="/about-us" className="hover:opacity-80">About</Link>
                        <span>•</span>
                        <Link href="/services" className="hover:opacity-80">Services</Link>
                        <span>•</span>
                        <Link href="/contact" className="hover:opacity-80">Contact</Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

// Variation 4: Minimal Centered
export const FooterVariation4 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-10 pb-8 bg-[#F8F4EB] px-4"
        >
            <div className="max-w-xs mx-auto text-center space-y-5">
                <h3 className="text-[#8A7B70] text-2xl font-light tracking-wide">The Skin Firm</h3>

                <div className="flex justify-center gap-3">
                    <Link href="https://www.instagram.com/theskinfirm_official/?hl=en" target="_blank" className="p-3 rounded-full bg-[#F9EEE7] hover:scale-110 transition-transform">
                        <Instagram className="size-4" color="#D4A380" />
                    </Link>
                    <Link href="https://www.facebook.com/theskinfirmpune/" target="_blank" className="p-3 rounded-full bg-[#F9EEE7] hover:scale-110 transition-transform">
                        <Facebook className="size-4" color="#D4A380" />
                    </Link>
                    <Link href="https://www.youtube.com/@TheSkinFirm-Pune" target="_blank" className="p-3 rounded-full bg-[#F9EEE7] hover:scale-110 transition-transform">
                        <Youtube className="size-4" color="#D4A380" />
                    </Link>
                    <Link href="https://wa.me/918308669966" target="_blank" className="p-3 rounded-full bg-[#F9EEE7] hover:scale-110 transition-transform">
                        <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
                    </Link>
                </div>

                <div className="space-y-2 text-sm text-[#A89689]">
                    <Link href="tel:+918308669966" className="block hover:text-[#8A7B70]">+91 8308669966</Link>
                    <Link href="mailto:theskinfirmclinic@gmail.com" className="block hover:text-[#8A7B70]">theskinfirmclinic@gmail.com</Link>
                </div>

                <div className="text-xs text-[#A89689] space-y-1">
                    <p>Tue - Sun: 10AM - 8PM</p>
                    <p>Monday: Closed</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 text-xs text-[#A89689] pt-3">
                    <Link href="/" className="hover:text-[#8A7B70]">Home</Link>
                    <Link href="/about-us" className="hover:text-[#8A7B70]">About</Link>
                    <Link href="/services" className="hover:text-[#8A7B70]">Services</Link>
                    <Link href="/contact" className="hover:text-[#8A7B70]">Contact</Link>
                </div>
            </div>
        </motion.footer>
    );
};

// Variation 5: Two-Column Compact
export const FooterVariation5 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 pb-6 bg-[#F8F4EB] px-4"
        >
            <div className="max-w-md mx-auto">
                {/* Brand Section - Full Width */}
                <div className="text-center mb-6 space-y-2">
                    <h3 className="text-[#8A7B70] text-lg font-medium">The Skin Firm</h3>
                    <p className="text-xs text-[#A89689]">Where Skin Meets Science</p>
                </div>

                {/* Two Column Grid */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                    {/* Left Column */}
                    <div className="space-y-3">
                        <h4 className="text-[#8A7B70] text-sm font-medium mb-3">Links</h4>
                        <div className="space-y-2 text-xs text-[#A89689]">
                            <Link href="/" className="block hover:opacity-80">Home</Link>
                            <Link href="/about-us" className="block hover:opacity-80">About</Link>
                            <Link href="/services" className="block hover:opacity-80">Services</Link>
                            <Link href="/contact" className="block hover:opacity-80">Contact</Link>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3">
                        <h4 className="text-[#8A7B70] text-sm font-medium mb-3">Contact</h4>
                        <div className="space-y-2 text-xs text-[#A89689]">
                            <Link href="tel:+918308669966" className="block hover:opacity-80">+91 8308669966</Link>
                            <Link href="mailto:theskinfirmclinic@gmail.com" className="block hover:opacity-80">Email Us</Link>
                            <p className="pt-1">Tue-Sun<br />10AM-8PM</p>
                        </div>
                    </div>
                </div>

                {/* Social Icons - Centered */}
                <div className="flex justify-center gap-2.5 border-t border-[#E5DDD1] pt-5">
                    <Link href="https://www.instagram.com/theskinfirm_official/?hl=en" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                        <Instagram className="size-3.5" color="#D4A380" />
                    </Link>
                    <Link href="https://www.facebook.com/theskinfirmpune/" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                        <Facebook className="size-3.5" color="#D4A380" />
                    </Link>
                    <Link href="https://www.youtube.com/@TheSkinFirm-Pune" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                        <Youtube className="size-3.5" color="#D4A380" />
                    </Link>
                    <Link href="https://wa.me/918308669966" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                        <Image src="/whatsapp.svg" alt="WhatsApp" width={14} height={14} />
                    </Link>
                </div>
            </div>
        </motion.footer>
    );
};

// Variation 6: Icon-First Design
export const FooterVariation6 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 pb-6 bg-[#F8F4EB] px-4"
        >
            <div className="max-w-sm mx-auto space-y-5">
                {/* Brand */}
                <div className="text-center">
                    <h3 className="text-[#8A7B70] text-lg font-medium">The Skin Firm</h3>
                </div>

                {/* Icon-based contact */}
                <div className="space-y-3">
                    <Link href="tel:+918308669966" className="flex items-center gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-colors">
                        <div className="p-2 rounded-full bg-[#F9EEE7]">
                            <Phone className="size-4" color="#D4A380" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-[#A89689]">Call us</p>
                            <p className="text-sm text-[#8A7B70] font-medium">+91 8308669966</p>
                        </div>
                    </Link>

                    <Link href="mailto:theskinfirmclinic@gmail.com" className="flex items-center gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-colors">
                        <div className="p-2 rounded-full bg-[#F9EEE7]">
                            <Mail className="size-4" color="#D4A380" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-[#A89689]">Email us</p>
                            <p className="text-sm text-[#8A7B70] font-medium">Get in touch</p>
                        </div>
                    </Link>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                        <div className="p-2 rounded-full bg-[#F9EEE7]">
                            <MapPin className="size-4" color="#D4A380" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-[#A89689]">Tue-Sun</p>
                            <p className="text-sm text-[#8A7B70] font-medium">10AM - 8PM</p>
                        </div>
                    </div>
                </div>

                {/* Social + Links */}
                <div className="space-y-3 border-t border-[#E5DDD1] pt-5">
                    <div className="flex justify-center gap-2.5">
                        <Link href="https://www.instagram.com/theskinfirm_official/?hl=en" target="_blank" className="p-2.5 rounded-full bg-[#F9EEE7]">
                            <Instagram className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://www.facebook.com/theskinfirmpune/" target="_blank" className="p-2.5 rounded-full bg-[#F9EEE7]">
                            <Facebook className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://www.youtube.com/@TheSkinFirm-Pune" target="_blank" className="p-2.5 rounded-full bg-[#F9EEE7]">
                            <Youtube className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://wa.me/918308669966" target="_blank" className="p-2.5 rounded-full bg-[#F9EEE7]">
                            <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
                        </Link>
                    </div>
                    <div className="flex justify-center gap-3 text-xs text-[#A89689]">
                        <Link href="/" className="hover:opacity-80">Home</Link>
                        <Link href="/about-us" className="hover:opacity-80">About</Link>
                        <Link href="/services" className="hover:opacity-80">Services</Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

// Variation 7: List-Style Compact
export const FooterVariation7 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 pb-6 bg-[#F8F4EB] px-4"
        >
            <div className="max-w-md mx-auto">
                {/* Logo */}
                <div className="text-center mb-6">
                    <h3 className="text-[#8A7B70] text-xl font-medium mb-2">The Skin Firm</h3>
                    <div className="flex justify-center gap-2.5">
                        <Link href="https://www.instagram.com/theskinfirm_official/?hl=en" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                            <Instagram className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://www.facebook.com/theskinfirmpune/" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                            <Facebook className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://www.youtube.com/@TheSkinFirm-Pune" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                            <Youtube className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://wa.me/918308669966" target="_blank" className="p-2 rounded-full bg-[#F9EEE7]">
                            <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
                        </Link>
                    </div>
                </div>

                {/* List Style Info */}
                <div className="space-y-1.5 text-sm text-[#A89689] text-center">
                    <div className="flex items-center justify-center gap-2 py-2">
                        <Phone className="size-3.5" color="#D4A380" />
                        <Link href="tel:+918308669966" className="hover:text-[#8A7B70]">+91 8308669966</Link>
                    </div>
                    <div className="flex items-center justify-center gap-2 py-2">
                        <Mail className="size-3.5" color="#D4A380" />
                        <Link href="mailto:theskinfirmclinic@gmail.com" className="hover:text-[#8A7B70]">theskinfirmclinic@gmail.com</Link>
                    </div>
                    <div className="flex items-center justify-center gap-2 py-2">
                        <MapPin className="size-3.5" color="#D4A380" />
                        <span>Tue-Sun: 10AM-8PM</span>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="mt-6 pt-4 border-t border-[#E5DDD1]">
                    <div className="flex justify-center gap-4 text-xs text-[#A89689]">
                        <Link href="/" className="hover:text-[#8A7B70]">Home</Link>
                        <Link href="/about-us" className="hover:text-[#8A7B70]">About</Link>
                        <Link href="/services" className="hover:text-[#8A7B70]">Services</Link>
                        <Link href="/contact" className="hover:text-[#8A7B70]">Contact</Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

// Variation 8: Modern Gradient Background
export const FooterVariation8 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 pb-6 bg-gradient-to-b from-[#F8F4EB] to-[#F9EEE7] px-4"
        >
            <div className="max-w-sm mx-auto space-y-6">
                {/* Brand Section */}
                <div className="text-center space-y-3 bg-white/60 backdrop-blur-sm rounded-2xl p-5">
                    <h3 className="text-[#8A7B70] text-lg font-medium">The Skin Firm</h3>
                    <p className="text-xs text-[#A89689] leading-relaxed">
                        Where Skin Meets Science, and Self-Care Feels Like Home
                    </p>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <Link href="tel:+918308669966" className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-colors">
                        <Phone className="size-5" color="#D4A380" />
                        <span className="text-xs text-[#8A7B70] font-medium">Call Now</span>
                    </Link>
                    <Link href="mailto:theskinfirmclinic@gmail.com" className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-colors">
                        <Mail className="size-5" color="#D4A380" />
                        <span className="text-xs text-[#8A7B70] font-medium">Email Us</span>
                    </Link>
                </div>

                {/* Hours Badge */}
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-xs text-[#8A7B70] font-medium">Operating Hours</p>
                    <p className="text-xs text-[#A89689] mt-1">Tue-Sun: 10AM-8PM • Mon: Closed</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-2.5">
                    <Link href="https://www.instagram.com/theskinfirm_official/?hl=en" target="_blank" className="p-2.5 rounded-full bg-white/60 hover:bg-white/80 transition-colors">
                        <Instagram className="size-4" color="#D4A380" />
                    </Link>
                    <Link href="https://www.facebook.com/theskinfirmpune/" target="_blank" className="p-2.5 rounded-full bg-white/60 hover:bg-white/80 transition-colors">
                        <Facebook className="size-4" color="#D4A380" />
                    </Link>
                    <Link href="https://www.youtube.com/@TheSkinFirm-Pune" target="_blank" className="p-2.5 rounded-full bg-white/60 hover:bg-white/80 transition-colors">
                        <Youtube className="size-4" color="#D4A380" />
                    </Link>
                    <Link href="https://wa.me/918308669966" target="_blank" className="p-2.5 rounded-full bg-white/60 hover:bg-white/80 transition-colors">
                        <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex justify-center gap-3 text-xs text-[#A89689]">
                    <Link href="/" className="hover:text-[#8A7B70]">Home</Link>
                    <span>•</span>
                    <Link href="/about-us" className="hover:text-[#8A7B70]">About</Link>
                    <span>•</span>
                    <Link href="/services" className="hover:text-[#8A7B70]">Services</Link>
                    <span>•</span>
                    <Link href="/contact" className="hover:text-[#8A7B70]">Contact</Link>
                </div>
            </div>
        </motion.footer>
    );
};

// Variation 9: Pills/Tags Style
export const FooterVariation9 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 pb-6 bg-[#F8F4EB] px-4"
        >
            <div className="max-w-md mx-auto space-y-5">
                {/* Brand */}
                <div className="text-center">
                    <h3 className="text-[#8A7B70] text-xl font-medium mb-1">The Skin Firm</h3>
                    <p className="text-xs text-[#A89689]">Premium Skin & Hair Care</p>
                </div>

                {/* Contact Pills */}
                <div className="flex flex-col gap-2">
                    <Link href="tel:+918308669966" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/70 rounded-full text-sm text-[#8A7B70] hover:bg-white transition-colors">
                        <Phone className="size-3.5" color="#D4A380" />
                        <span>+91 8308669966</span>
                    </Link>

                    <Link href="mailto:theskinfirmclinic@gmail.com" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/70 rounded-full text-sm text-[#8A7B70] hover:bg-white transition-colors">
                        <Mail className="size-3.5" color="#D4A380" />
                        <span>theskinfirmclinic@gmail.com</span>
                    </Link>

                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F9EEE7] rounded-full text-sm text-[#8A7B70]">
                        <span className="text-xs">🕒</span>
                        <span>Tue-Sun: 10AM-8PM</span>
                    </div>
                </div>

                {/* Social Pills */}
                <div className="flex flex-wrap justify-center gap-2">
                    <Link href="https://www.instagram.com/theskinfirm_official/?hl=en" target="_blank" className="px-3 py-2 bg-white/70 rounded-full hover:bg-white transition-colors">
                        <Instagram className="size-4" color="#D4A380" />
                    </Link>
                    <Link href="https://www.facebook.com/theskinfirmpune/" target="_blank" className="px-3 py-2 bg-white/70 rounded-full hover:bg-white transition-colors">
                        <Facebook className="size-4" color="#D4A380" />
                    </Link>
                    <Link href="https://www.youtube.com/@TheSkinFirm-Pune" target="_blank" className="px-3 py-2 bg-white/70 rounded-full hover:bg-white transition-colors">
                        <Youtube className="size-4" color="#D4A380" />
                    </Link>
                    <Link href="https://wa.me/918308669966" target="_blank" className="px-3 py-2 bg-white/70 rounded-full hover:bg-white transition-colors">
                        <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
                    </Link>
                </div>

                {/* Nav Pills */}
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                    <Link href="/" className="px-3 py-1.5 bg-white/50 rounded-full text-xs text-[#A89689] hover:bg-white hover:text-[#8A7B70] transition-colors">Home</Link>
                    <Link href="/about-us" className="px-3 py-1.5 bg-white/50 rounded-full text-xs text-[#A89689] hover:bg-white hover:text-[#8A7B70] transition-colors">About</Link>
                    <Link href="/services" className="px-3 py-1.5 bg-white/50 rounded-full text-xs text-[#A89689] hover:bg-white hover:text-[#8A7B70] transition-colors">Services</Link>
                    <Link href="/contact" className="px-3 py-1.5 bg-white/50 rounded-full text-xs text-[#A89689] hover:bg-white hover:text-[#8A7B70] transition-colors">Contact</Link>
                </div>
            </div>
        </motion.footer>
    );
};

// Variation 10: Bottom Sheet Style
export const FooterVariation10 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-6 pb-8 bg-[#F8F4EB] px-4"
        >
            <div className="max-w-lg mx-auto">
                {/* Handle indicator */}
                <div className="flex justify-center mb-5">
                    <div className="w-12 h-1 bg-[#D4A380] rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {/* Logo Section */}
                    <div className="text-center pb-4 border-b border-[#E5DDD1]">
                        <h3 className="text-[#8A7B70] text-lg font-medium mb-1">The Skin Firm</h3>
                        <p className="text-xs text-[#A89689]">Premium Skin Care Clinic</p>
                    </div>

                    {/* Contact Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <Link href="tel:+918308669966" className="flex items-center gap-2 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
                            <Phone className="size-4 flex-shrink-0" color="#D4A380" />
                            <div className="text-left">
                                <p className="text-[10px] text-[#A89689]">Phone</p>
                                <p className="text-xs text-[#8A7B70] font-medium">Call Us</p>
                            </div>
                        </Link>

                        <Link href="mailto:theskinfirmclinic@gmail.com" className="flex items-center gap-2 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
                            <Mail className="size-4 flex-shrink-0" color="#D4A380" />
                            <div className="text-left">
                                <p className="text-[10px] text-[#A89689]">Email</p>
                                <p className="text-xs text-[#8A7B70] font-medium">Write Us</p>
                            </div>
                        </Link>

                        <Link href="https://www.google.com/maps/place/The+Skin+Firm" target="_blank" className="flex items-center gap-2 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
                            <MapPin className="size-4 flex-shrink-0" color="#D4A380" />
                            <div className="text-left">
                                <p className="text-[10px] text-[#A89689]">Location</p>
                                <p className="text-xs text-[#8A7B70] font-medium">Visit Us</p>
                            </div>
                        </Link>

                        <div className="flex items-center gap-2 p-3 bg-[#F9EEE7] rounded-lg">
                            <span className="text-sm">🕒</span>
                            <div className="text-left">
                                <p className="text-[10px] text-[#A89689]">Hours</p>
                                <p className="text-xs text-[#8A7B70] font-medium">10AM-8PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex justify-center gap-2 pt-3">
                        <Link href="https://www.instagram.com/theskinfirm_official/?hl=en" target="_blank" className="p-2.5 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                            <Instagram className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://www.facebook.com/theskinfirmpune/" target="_blank" className="p-2.5 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                            <Facebook className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://www.youtube.com/@TheSkinFirm-Pune" target="_blank" className="p-2.5 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                            <Youtube className="size-4" color="#D4A380" />
                        </Link>
                        <Link href="https://wa.me/918308669966" target="_blank" className="p-2.5 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                            <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
                        </Link>
                    </div>

                    {/* Footer Nav */}
                    <div className="flex justify-center gap-4 text-xs text-[#A89689] pt-3 border-t border-[#E5DDD1]">
                        <Link href="/" className="hover:text-[#8A7B70]">Home</Link>
                        <Link href="/about-us" className="hover:text-[#8A7B70]">About</Link>
                        <Link href="/services" className="hover:text-[#8A7B70]">Services</Link>
                        <Link href="/contact" className="hover:text-[#8A7B70]">Contact</Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

// Demo Page Component to show all variations
export default function FooterVariationsDemo() {
    return (
        <div className="space-y-12 bg-white">
            <div className="bg-gray-100 p-4 text-center">
                <h1 className="text-2xl font-bold text-gray-800">Footer Variations for Mobile</h1>
                <p className="text-gray-600 mt-2">10 Mobile-Optimized Footer Designs</p>
            </div>

            <div>
                <div className="bg-blue-50 p-3 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Variation 1: Stacked Vertical Layout</h2>
                    <p className="text-sm text-gray-600">Best for mobile - clean stacked design</p>
                </div>
                <FooterVariation1 />
            </div>

            <div>
                <div className="bg-blue-50 p-3 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Variation 2: Compact Info Grid</h2>
                    <p className="text-sm text-gray-600">Space-efficient with card-based contacts</p>
                </div>
                <FooterVariation2 />
            </div>

            <div>
                <div className="bg-blue-50 p-3 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Variation 3: Card-Based Layout</h2>
                    <p className="text-sm text-gray-600">Modern cards with backdrop blur</p>
                </div>
                <FooterVariation3 />
            </div>

            <div>
                <div className="bg-blue-50 p-3 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Variation 4: Minimal Centered</h2>
                    <p className="text-sm text-gray-600">Ultra-clean centered design</p>
                </div>
                <FooterVariation4 />
            </div>

            <div>
                <div className="bg-blue-50 p-3 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Variation 5: Two-Column Compact</h2>
                    <p className="text-sm text-gray-600">Efficient two-column mobile layout</p>
                </div>
                <FooterVariation5 />
            </div>

            <div>
                <div className="bg-blue-50 p-3 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Variation 6: Icon-First Design</h2>
                    <p className="text-sm text-gray-600">Visual icon-based contact cards</p>
                </div>
                <FooterVariation6 />
            </div>

            <div>
                <div className="bg-blue-50 p-3 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Variation 7: List-Style Compact</h2>
                    <p className="text-sm text-gray-600">Simple list format</p>
                </div>
                <FooterVariation7 />
            </div>

            <div>
                <div className="bg-blue-50 p-3 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Variation 8: Modern Gradient Background</h2>
                    <p className="text-sm text-gray-600">Gradient with glassmorphism</p>
                </div>
                <FooterVariation8 />
            </div>

            <div>
                <div className="bg-blue-50 p-3 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Variation 9: Pills/Tags Style</h2>
                    <p className="text-sm text-gray-600">Modern pill-shaped elements</p>
                </div>
                <FooterVariation9 />
            </div>

            <div>
                <div className="bg-blue-50 p-3 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Variation 10: Bottom Sheet Style</h2>
                    <p className="text-sm text-gray-600">Mobile app-inspired bottom sheet</p>
                </div>
                <FooterVariation10 />
            </div>
        </div>
    );
}
