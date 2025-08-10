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
import { MaxWidthWrapper } from "./max-width";
import Image from "next/image";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-16 pb-10 bg-[#F8F4EB]"
    >
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-1 flex flex-col justify-start gap-y-5 items-start"
          >
            <h3 className="text-[#8A7B70] text-xl/relaxed text-start">
              The Skin Firm
            </h3>
            <p className="text-base/relaxed text-[#A89689] text-start">
              Where Skin Meets Science, and Self-Care Feels Like Home
            </p>
            <div className="grid grid-cols-2 max-lg:grid-flow-col gap-3 w-fit">
              <Link
                href={"https://www.instagram.com/theskinfirm_official/?hl=en"}
                target="_blank"
                className="p-3 rounded-full bg-[#F9EEE7]"
              >
                <Instagram className="size-5" color="#D4A380" />
              </Link>
              <Link
                href={"https://www.facebook.com/theskinfirmpune/"}
                target="_blank"
                className="p-3 rounded-full bg-[#F9EEE7]"
              >
                <Facebook className="size-5" color="#D4A380" />
              </Link>
              <Link
                href={"https://www.youtube.com/@TheSkinFirm-Pune"}
                target="_blank"
                className="p-3 rounded-full bg-[#F9EEE7]"
              >
                <Youtube className="size-5" color="#D4A380" />
              </Link>
              <Link
                href={"https://wa.me/918308669966"}
                target="_blank"
                className="p-3 rounded-full bg-[#F9EEE7]"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-start gap-y-5 items-start"
          >
            <h3 className="text-[#8A7B70] text-xl/relaxed text-start">
              Quick links
            </h3>
            <div className="flex flex-col items-start justify-start gap-y-4 *:text-[#A89689] *:text-base/relaxed *:hover:opacity-80">
              <Link href={"/"}>Home</Link>
              <Link href={"/about-us"}>About us</Link>
              <Link href={"/services"}>Services</Link>
              <Link href={"/services"}>Treatments</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col justify-start gap-y-5 items-start"
          >
            <h3 className="text-[#8A7B70] text-xl/relaxed text-start">
              Contact Us
            </h3>
            <div className="flex flex-col items-start justify-start gap-y-4">
              <div className="inline-flex items-center gap-x-4">
                <Link
                  href="tel:+918308669966"
                  className="p-3 rounded-full bg-[#F9EEE7]"
                >
                  <Phone className="size-5" color="#D4A380" />
                </Link>
                <p className="text-[#A89689] text-base/relaxed hover:opacity-80">
                  +91 8308669966
                </p>
              </div>
              <div className="inline-flex items-center gap-x-4">
                <Link
                  href={"mailto:theskinfirmclinic@gmail.com"}
                  className="p-3 rounded-full bg-[#F9EEE7]"
                >
                  <Mail className="size-5" color="#D4A380" />
                </Link>
                <p className="text-[#A89689] text-base/relaxed hover:opacity-80">
                  theskinfirmclinic@gmail.com
                </p>
              </div>
              <div className="inline-flex items-start gap-x-4">
                <div className="p-3 flex-shrink-0 bg-[#F9EEE7] rounded-full">
                  <MapPin className="size-5" color="#D4A380" />
                </div>
                <p className="text-[#A89689] text-base/relaxed hover:opacity-80 flex-1 text-start pt-3">
                  1st Floor, Society Gate 1, Plot no.1, NIBM Post Office Rd,
                  opp. Tribeca Highstreet, Sainik Vihar, Jarande Nagar, Mohammed
                  Wadi, Pune, Maharashtra 411060
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-start gap-y-5 items-start"
          >
            <h3 className="text-[#8A7B70] text-xl/relaxed text-start">
              Opening Hours
            </h3>
            <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 w-full">
              <span className="text-[#A89689] text-base/relaxed whitespace-nowrap">
                Tue - Sun
              </span>
              <span className="text-[#8A7B70] text-base/relaxed whitespace-nowrap">
                11AM - 8PM
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
    </motion.div>
  );
};
