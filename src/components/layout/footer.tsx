"use client";

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
  Clock,
} from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MaxWidthWrapper } from "./max-width";
import { InstantSkeletonLink } from "@/components/shared/InstantSkeletonLink";

const SocialIcon = ({ Icon, href, label }: { Icon: any; href: string; label: string }) => (
  <Link
    href={href}
    target="_blank"
    aria-label={label}
    className="p-2.5 rounded-full bg-[#F9EEE7] hover:bg-[#D4A380] hover:text-white transition-all duration-300 group"
  >
    <Icon className="size-4 text-[#D4A380] group-hover:text-white transition-colors" />
  </Link>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-[#A89689] hover:text-[#8A7B70] transition-colors text-sm">
    {children}
  </Link>
);

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* --- DESKTOP VIEW (Original Design - lg+) --- */}
      <div className="hidden lg:block pt-16 pb-10 bg-[#F8F4EB]">
        <MaxWidthWrapper>
          <div className="grid grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-1 flex flex-col gap-y-5 items-start"
            >
              <h3 className="text-[#8A7B70] text-xl/relaxed text-start">
                The Skin Firm
              </h3>
              <p className="text-base/relaxed text-[#A89689] text-start">
                Where Skin Meets Science, and Self-Care Feels Like Home
              </p>
              <div className="grid grid-cols-2 gap-3 w-fit">
                <SocialIcon Icon={Instagram} href="https://www.instagram.com/theskinfirm_official/?hl=en" label="Visit our Instagram page" />
                <SocialIcon Icon={Facebook} href="https://www.facebook.com/theskinfirmpune/" label="Visit our Facebook page" />
                <SocialIcon Icon={Youtube} href="https://www.youtube.com/@TheSkinFirm-Pune" label="Visit our YouTube channel" />
                <Link
                  href="https://wa.me/918308669966"
                  target="_blank"
                  aria-label="Contact us on WhatsApp"
                  className="p-2.5 rounded-full bg-[#F9EEE7] hover:bg-[#D4A380] transition-all duration-300 group"
                >
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-y-5 items-start"
            >
              <h3 className="text-[#8A7B70] text-xl/relaxed text-start">
                Quick links
              </h3>
              <div className="flex flex-col items-start justify-start gap-y-4 *:text-[#A89689] *:text-base/relaxed *:hover:opacity-80">
                <Link href={"/"}>Home</Link>
                <Link href={"/about-us"}>About us</Link>
                <InstantSkeletonLink href={"/services"}>Services</InstantSkeletonLink>
                <InstantSkeletonLink href={"/services"}>Treatments</InstantSkeletonLink>
                <Link href="/contact">Contact</Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-2 flex flex-col gap-y-5 items-start"
            >
              <h3 className="text-[#8A7B70] text-xl/relaxed text-start">
                Contact Us
              </h3>
              <div className="flex flex-col items-start justify-start gap-y-4">
                <Link
                  href="tel:+918308669966"
                  className="inline-flex items-center gap-x-4 group"
                >
                  <div className="p-3 rounded-full bg-[#F9EEE7] group-hover:bg-[#D4A380] transition-colors">
                    <Phone className="size-5 text-[#D4A380] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[#A89689] text-base/relaxed group-hover:text-[#8A7B70] transition-colors">
                    +91 8308669966
                  </p>
                </Link>
                <Link
                  href={"mailto:theskinfirmclinic@gmail.com"}
                  className="inline-flex items-center gap-x-4 group"
                >
                  <div className="p-3 rounded-full bg-[#F9EEE7] group-hover:bg-[#D4A380] transition-colors">
                    <Mail className="size-5 text-[#D4A380] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[#A89689] text-base/relaxed group-hover:text-[#8A7B70] transition-colors">
                    theskinfirmclinic@gmail.com
                  </p>
                </Link>
                <Link
                  href="https://www.google.com/maps/place/The+Skin+Firm+%7C+Laser+Skin+%26+Hair+Clinic+NIBM+Mohammed+Wadi/@18.4775982,73.9058603,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2eb03805470a7:0x2f95a1cd42b5ce00!8m2!3d18.4775982!4d73.9084352!16s%2Fg%2F11tn_8x08m?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-x-4 group"
                >
                  <div className="p-3 flex-shrink-0 bg-[#F9EEE7] rounded-full group-hover:bg-[#D4A380] transition-colors">
                    <MapPin className="size-5 text-[#D4A380] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[#A89689] text-base/relaxed flex-1 text-start pt-3 group-hover:text-[#8A7B70] transition-colors">
                    1st Floor, Society Gate 1, Plot no.1, NIBM Post Office Rd,
                    opp. Tribeca Highstreet, Sainik Vihar, Jarande Nagar, Mohammed
                    Wadi, Pune, Maharashtra 411060
                  </p>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-y-5 items-start"
            >
              <h3 className="text-[#8A7B70] text-xl/relaxed text-start">
                Opening Hours
              </h3>
              <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 w-full">
                <span className="text-[#A89689] text-base/relaxed whitespace-nowrap">
                  Tue - Sun
                </span>
                <span className="text-[#8A7B70] text-base/relaxed whitespace-nowrap">
                  10AM - 8PM
                </span>
                <span className="text-[#A89689] text-base/relaxed whitespace-nowrap">
                  Monday
                </span>
                <span className="text-[#8A7B70] text-base/relaxed whitespace-nowrap">
                  Closed
                </span>
              </div>
            </motion.div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* --- TABLET VIEW (Optimized Glass Grid - md to lg) --- */}
      <div className="hidden md:block lg:hidden pt-12 pb-10 bg-gradient-to-b from-[#F8F4EB] to-[#F9EEE7] px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Top Row: Brand & Hours */}
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50 flex flex-col justify-center"
            >
              <h3 className="text-[#8A7B70] text-xl font-medium mb-2">The Skin Firm</h3>
              <p className="text-sm text-[#A89689] leading-relaxed">
                Where Skin Meets Science, and Self-Care Feels Like Home
              </p>
              <div className="flex gap-3 mt-4">
                <SocialIcon Icon={Instagram} href="https://www.instagram.com/theskinfirm_official/?hl=en" label="Visit our Instagram page" />
                <SocialIcon Icon={Facebook} href="https://www.facebook.com/theskinfirmpune/" label="Visit our Facebook page" />
                <SocialIcon Icon={Youtube} href="https://www.youtube.com/@TheSkinFirm-Pune" label="Visit our YouTube channel" />
                <Link
                  href="https://wa.me/918308669966"
                  target="_blank"
                  aria-label="Contact us on WhatsApp"
                  className="p-2.5 rounded-full bg-[#F9EEE7] hover:bg-[#D4A380] transition-all duration-300 group"
                >
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50 flex flex-col justify-center"
            >
              <h4 className="text-[#8A7B70] font-medium mb-3 flex items-center gap-2">
                <Clock className="size-4" /> Opening Hours
              </h4>
              <div className="space-y-2 text-sm text-[#A89689]">
                <div className="flex justify-between">
                  <span>Tue - Sun</span>
                  <span className="font-medium text-[#8A7B70]">10AM - 8PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="font-medium text-[#8A7B70]">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle Row: Contact & Links */}
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="tel:+918308669966"
                className="col-span-1 bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-white/50 hover:bg-white/80 transition-colors flex flex-col items-center justify-center text-center gap-2 h-full"
              >
                <Phone className="size-6 text-[#D4A380]" />
                <span className="text-sm text-[#8A7B70] font-medium">Call Us</span>
                <span className="text-xs text-[#A89689]">+91 8308669966</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="mailto:theskinfirmclinic@gmail.com"
                className="col-span-1 bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-white/50 hover:bg-white/80 transition-colors flex flex-col items-center justify-center text-center gap-2 h-full"
              >
                <Mail className="size-6 text-[#D4A380]" />
                <span className="text-sm text-[#8A7B70] font-medium">Email Us</span>
                <span className="text-xs text-[#A89689]">Get in touch</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-1 bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-white/50 flex flex-col items-center justify-center text-center gap-3"
            >
              <span className="text-sm text-[#8A7B70] font-medium">Quick Links</span>
              <div className="flex flex-wrap justify-center gap-2 text-xs text-[#A89689]">
                <Link href="/" className="hover:text-[#8A7B70]">Home</Link>•
                <Link href="/services" className="hover:text-[#8A7B70]">Services</Link>•
                <Link href="/contact" className="hover:text-[#8A7B70]">Contact</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW (Gradient Glass - sm only) --- */}
      <div className="md:hidden pt-8 pb-6 bg-gradient-to-b from-[#F8F4EB] to-[#F9EEE7] px-4">
        <div className="max-w-sm mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-3 bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-white/50"
          >
            <h3 className="text-[#8A7B70] text-lg font-medium">The Skin Firm</h3>
            <p className="text-xs text-[#A89689] leading-relaxed">
              Where Skin Meets Science, and Self-Care Feels Like Home
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href="tel:+918308669966"
                className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-colors shadow-sm border border-white/50 h-full"
              >
                <Phone className="size-5 text-[#D4A380]" />
                <span className="text-xs text-[#8A7B70] font-medium">Call Now</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="mailto:theskinfirmclinic@gmail.com"
                className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-colors shadow-sm border border-white/50 h-full"
              >
                <Mail className="size-5 text-[#D4A380]" />
                <span className="text-xs text-[#8A7B70] font-medium">Email Us</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-white/50"
          >
            <p className="text-xs text-[#8A7B70] font-medium">Operating Hours</p>
            <p className="text-xs text-[#A89689] mt-1">Tue-Sun: 10AM-8PM • Mon: Closed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-3"
          >
            <SocialIcon Icon={Instagram} href="https://www.instagram.com/theskinfirm_official/?hl=en" label="Visit our Instagram page" />
            <SocialIcon Icon={Facebook} href="https://www.facebook.com/theskinfirmpune/" label="Visit our Facebook page" />
            <SocialIcon Icon={Youtube} href="https://www.youtube.com/@TheSkinFirm-Pune" label="Visit our YouTube channel" />
            <Link
              href="https://wa.me/918308669966"
              target="_blank"
              aria-label="Contact us on WhatsApp"
              className="p-2.5 rounded-full bg-[#F9EEE7] hover:bg-[#D4A380] transition-all duration-300 group"
            >
              <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={16}
                height={16}
                className="group-hover:brightness-0 group-hover:invert transition-all"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-3 text-xs text-[#A89689]"
          >
            <Link href="/" className="hover:text-[#8A7B70]">Home</Link>
            <span>•</span>
            <Link href="/about-us" className="hover:text-[#8A7B70]">About</Link>
            <span>•</span>
            <Link href="/services" className="hover:text-[#8A7B70]">Services</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#8A7B70]">Contact</Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
