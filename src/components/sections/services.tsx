"use client";
import React from "react";
import { DashedSeparator } from "./dashed-separator";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MaxWidthWrapper } from "../layout/max-width";

// Services data array with hardcoded URLs
const servicesData = [
  {
    title: "Laser Hair Removal",
    description:
      "Advanced laser technology for permanent hair reduction with minimal discomfort and lasting results.",
    coverImageUrl: "/images/services/laser hair removal.png",
    iconUrl: "/images/home-service/laser.png",
    url: "/laser-hair-removal",
  },
  {
    title: "Acne Treatment",
    description:
      "Comprehensive acne treatment and scar reduction therapy for clear, smooth, and healthy skin.",
    coverImageUrl: "/images/services/acne treatment.png",
    iconUrl: "/images/home-service/skin.png",
    url: "/acne-treatment",
  },
  {
    title: "Hydrafacial Treatment",
    description:
      "Deep cleansing and hydrating facial treatment that rejuvenates and revitalizes your skin.",
    coverImageUrl: "/images/services/hydra.png",
    iconUrl: "/images/home-service/skin.png",
    url: "/hydrafacial-treatment",
  },
  {
    title: "Pigmentation Treatment",
    description:
      "Effective pigmentation removal treatments to restore even skin tone and natural radiance.",
    coverImageUrl: "/images/services/pigmentation.png",
    iconUrl: "/images/home-service/skin.png",
    url: "/pigmentation-treatment",
  },
  {
    title: "Hair Loss Treatment",
    description:
      "Advanced hair restoration therapies to combat hair loss and promote healthy hair growth.",
    coverImageUrl: "/images/services/hair loss.png",
    iconUrl: "/images/home-service/hair.png",
    url: "/hair-loss-treatment",
  },
  {
    title: "Anti-Ageing Treatment",
    description:
      "Comprehensive anti-aging solutions to reduce wrinkles and restore youthful skin appearance.",
    coverImageUrl: "/images/services/anti aging.png",
    iconUrl: "/images/home-service/skin.png",
    url: "/anti-ageing-treatment",
  },
  {
    title: "Chemical Peel",
    description:
      "Professional chemical peels to exfoliate and renew skin for a brighter, smoother complexion.",
    coverImageUrl: "/images/services/chemical peel.png",
    iconUrl: "/images/home-service/skin.png",
    url: "/chemical-peel",
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

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // IMPORTANT: Avoid SSR/CSR mismatch by shuffling only after mount on the client.
  // Render a stable order on the server, then shuffle on the client in an effect.
  const [randomizedServices, setRandomizedServices] = useState(servicesData);
  useEffect(() => {
    setRandomizedServices(shuffleArray(servicesData));
  }, []);

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
      className="my-20 py-20 px-4 sm:px-6 lg:px-32 bg-[#F8F4EB]"
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
          className="grid grid-cols-1 lg:grid-cols-2 items-end gap-6 lg:gap-8"
        >
          <div className="w-full">
            <div className="mx-auto flex items-center justify-center max-w-md w-full gap-x-0.5">
              <DashedSeparator />
              <h3 className="text-[#EC7754] text-base sm:text-lg font-medium w-full text-center">
                Our services
              </h3>
              <DashedSeparator />
            </div>
            <h2 className="mt-2 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#333333] font-semibold leading-tight">
              What services we Offer
            </h2>
          </div>
          <div>
            <p className="text-sm sm:text-base leading-relaxed text-[#EC7754] text-center lg:text-start">
              Beauty begins the moment you decide to take care of yourself.
              <br />
              With 59+ services to choose from, it can be hard to know where to
              start. Explore our most sought-after treatments, crafted to
              enhance your natural beauty with precision, care, and expertise.{" "}
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
          <Carousel
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full pt-8 sm:pt-10"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="flex -ml-2 sm:-ml-4">
{randomizedServices.map((service) => (
                <CarouselItem
                  key={service.url}
                  className="pl-2 sm:pl-4 basis-4/5 sm:basis-3/4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                >
                  <Service
                    title={service.title}
                    coverImageUrl={service.coverImageUrl}
                    iconUrl={service.iconUrl}
                    url={service.url}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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
          className="flex flex-row justify-center sm:justify-end mt-12 sm:mt-16"
        >
          <Link href="/">
            <Button
              className="bg-[#D4A380] hover:bg-[#C19660] text-white transition-colors duration-200"
              size={"lg"}
            >
              <p>Explore All Services</p>
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
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
}: {
  coverImageUrl: string;
  title: string;
  iconUrl: string;
  url: string;
}) {
  return (
    <Link href={url} className="block">
      <div className="relative pb-12 sm:pb-14 cursor-pointer group">
        <Image
          alt={title}
          src={coverImageUrl}
          width={384}
          height={520}
          className="mx-auto w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[384px] h-[400px] sm:h-[450px] lg:h-[420px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute bottom-4 w-full px-2">
          <div className="py-3 sm:py-4 px-3 sm:px-4 bg-white w-full max-w-[260px] sm:max-w-[300px] mx-auto rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-row justify-start items-center gap-2.5">
              <Image
                alt=""
                src={iconUrl}
                height={40}
                width={40}
                className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10"
                loading="lazy"
              />
              <div className="flex flex-col items-start justify-start space-y-1.5 sm:space-y-2 flex-1">
                <h3 className="text-sm sm:text-base font-medium text-[#5E6282] leading-tight group-hover:text-[#374151] transition-colors duration-200">
                  {title}
                </h3>
                <div className="text-[#D4A380] hover:text-[#C19660] flex flex-row items-center justify-start space-x-1 transition-colors duration-200">
                  <h4 className="text-xs sm:text-sm">See more</h4>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
