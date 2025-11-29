"use client";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MaxWidthWrapper } from "../layout/max-width";
import type { HeroOffer, Media } from "@/payload-types";
import { InstantSkeletonLink } from "@/components/shared/InstantSkeletonLink";

interface HeroProps {
  heroOffer?: HeroOffer | null;
}

export const Hero = ({ heroOffer }: HeroProps) => {
  const [isMuted, setIsMuted] = useState(true); // Video starts muted
  const videoRefDesktop = useRef<HTMLVideoElement>(null);
  const videoRefMobile = useRef<HTMLVideoElement>(null);
  const videoRefTablet = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Capture current ref values to avoid React hooks warnings
    const desktopVideo = videoRefDesktop.current;
    const mobileVideo = videoRefMobile.current;
    const tabletVideo = videoRefTablet.current;

    // Play all videos with proper error handling
    const playVideo = (videoElement: HTMLVideoElement | null, label: string) => {
      if (videoElement) {
        videoElement.muted = true; // Ensure muted for autoplay
        videoElement
          .play()
          .catch((e) => console.error(`${label} video autoplay failed`, e));
      }
    };

    playVideo(desktopVideo, "Desktop");
    playVideo(mobileVideo, "Mobile");
    playVideo(tabletVideo, "Tablet");

    // Prevent videos from pausing - keep them playing
    const handlePause = (videoElement: HTMLVideoElement | null) => {
      return () => {
        if (videoElement && videoElement.paused) {
          videoElement.play().catch((e) => console.error("Failed to resume video", e));
        }
      };
    };

    const desktopPauseHandler = handlePause(desktopVideo);
    const mobilePauseHandler = handlePause(mobileVideo);
    const tabletPauseHandler = handlePause(tabletVideo);

    // Add pause event listeners to auto-resume
    desktopVideo?.addEventListener("pause", desktopPauseHandler);
    mobileVideo?.addEventListener("pause", mobilePauseHandler);
    tabletVideo?.addEventListener("pause", tabletPauseHandler);

    const unmuteOnInteraction = () => {
      const userPreference = localStorage.getItem("videoMuted");
      // Unmute if the user hasn't explicitly muted in the past.
      if (userPreference !== "true") {
        if (desktopVideo) {
          desktopVideo.muted = false;
          desktopVideo.play().catch((e) => console.error("Failed to play desktop video", e));
        }
        if (mobileVideo) {
          mobileVideo.muted = false;
          mobileVideo.play().catch((e) => console.error("Failed to play mobile video", e));
        }
        if (tabletVideo) {
          tabletVideo.muted = false;
          tabletVideo.play().catch((e) => console.error("Failed to play tablet video", e));
        }
        setIsMuted(false);
      }
    };

    // Listen for the first interaction, then stop listening.
    window.addEventListener("click", unmuteOnInteraction, { once: true });
    window.addEventListener("touchstart", unmuteOnInteraction, { once: true });

    return () => {
      window.removeEventListener("click", unmuteOnInteraction);
      window.removeEventListener("touchstart", unmuteOnInteraction);
      desktopVideo?.removeEventListener("pause", desktopPauseHandler);
      mobileVideo?.removeEventListener("pause", mobilePauseHandler);
      tabletVideo?.removeEventListener("pause", tabletPauseHandler);
    };
  }, []);

  const toggleMute = () => {
    const newMutedState = !isMuted;

    if (videoRefDesktop.current) {
      videoRefDesktop.current.muted = newMutedState;
    }
    if (videoRefMobile.current) {
      videoRefMobile.current.muted = newMutedState;
    }
    if (videoRefTablet.current) {
      videoRefTablet.current.muted = newMutedState;
    }

    setIsMuted(newMutedState);
    localStorage.setItem("videoMuted", JSON.stringify(newMutedState));
  };
  return (
    <div className="w-full bg-[#FBEDE4] pb-8 lg:pb-14 pt-8 lg:pt-8">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 h-full">
          <div className="col-span-1 lg:col-span-2 order-2 lg:order-1">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[#8A7B70] text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-normal font-medium"
                style={{ willChange: "transform, opacity" }}
              >
                Reveal your most radiant self with
                <br />
                personalized skincare
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 lg:gap-6"
              >
                <Link
                  href="/contact"
                  className="w-full sm:w-auto"
                  aria-label="Book a consultation with our skincare specialists"
                >
                  <Button
                    size={"lg"}
                    className="w-full sm:w-auto lg:w-fit flex flex-row items-center justify-center gap-x-3.5 text-white hover:bg-[#D4A380]/90 rounded-[48px] bg-[#d4a380] py-[14px] px-[30px] !px-[30px] !py-[14px] h-[54px] min-h-[54px] text-center"
                    style={{
                      paddingLeft: 30,
                      paddingRight: 30,
                      height: 54,
                      minHeight: 54,
                    }}
                    aria-label="Book Consultation"
                  >
                    <span className="text-base leading-7 text-center">
                      Book Consultation
                    </span>
                    <ArrowRight className="size-6" aria-hidden="true" />
                  </Button>
                </Link>
                <InstantSkeletonLink
                  href="/services"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size={"lg"}
                    className="w-full sm:w-auto lg:w-fit flex flex-row items-center justify-center gap-x-3.5 bg-transparent text-[#4A4A4A] hover:bg-gray-100 border-[#606060] border rounded-full !px-[30px] !py-[14px] h-[54px] min-h-[54px] text-center"
                    aria-label="Explore Services"
                    style={{
                      paddingLeft: 30,
                      paddingRight: 30,
                      height: 54,
                      minHeight: 54,
                    }}
                  >
                    <span className="text-base leading-7 text-center">
                      Explore Services
                    </span>
                  </Button>
                </InstantSkeletonLink>
              </motion.div>
            </div>
            {/* Special Offer and Video/Image Grid - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 lg:mt-8 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-4 items-stretch"
            >
              {/* Special Offer Card */}
              {heroOffer && (
                <div className="relative md:col-span-3 lg:col-span-3 rounded-2xl min-h-[280px] md:min-h-[355px] lg:min-h-[355px] w-full bg-cover bg-center p-4 md:p-5 lg:p-6 flex flex-col justify-between overflow-hidden">
                  <Image
                    src={
                      typeof heroOffer.backgroundImage === "string"
                        ? heroOffer.backgroundImage
                        : (heroOffer.backgroundImage as Media)?.url ||
                        "/hero-offer-bg.png"
                    }
                    alt={
                      typeof heroOffer.backgroundImage === "object"
                        ? (heroOffer.backgroundImage as Media)?.alt ||
                        "Special offer background"
                        : "Special offer background with skincare treatment imagery"
                    }
                    fill
                    className="object-cover rounded-2xl"
                    priority
                    style={{ zIndex: 0 }}
                  />
                  <div className="flex flex-row items-center justify-between w-full relative z-10">
                    <Link href={heroOffer.buttonLink}>
                      <Button
                        size={"lg"}
                        className="py-3 lg:py-4 px-5 lg:px-7 rounded-full flex flex-row items-center gap-x-3.5 bg-transparent text-[#151515] hover:bg-gray-100 border-[#151515] border text-sm lg:text-base"
                        aria-label="View special offer details"
                      >
                        <span className="leading-6 lg:leading-7">
                          {heroOffer.buttonText}
                        </span>
                      </Button>
                    </Link>
                    <Link href={heroOffer.buttonLink}>
                      <Button
                        className="rounded-full bg-white hover:bg-gray-100 p-2 lg:p-3"
                        aria-label="Learn more about special offer"
                      >
                        <ArrowUpRight
                          className="text-[#D4A380] w-6 lg:w-8 h-auto"
                          aria-hidden="true"
                        />
                      </Button>
                    </Link>
                  </div>
                  <div className="w-full flex flex-col items-start justify-end gap-y-1.5 relative z-10">
                    <h2
                      className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-normal text-[#151515] font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: heroOffer.title.replace(/\n/g, "<br />"),
                      }}
                    />
                    <p className="text-[#151515] text-sm lg:text-base max-w-full lg:max-w-8/12 leading-relaxed">
                      {heroOffer.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Video - Shows on Tablet only, Hidden on Mobile & Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden md:block lg:hidden md:col-span-2 relative w-full h-full min-h-[355px]"
              >
                <video
                  ref={videoRefTablet}
                  className="w-full h-full object-cover rounded-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  webkit-playsinline="true"
                  x5-playsinline="true"
                  src={"/theskinfirm.mp4"}
                />
                <Button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 h-auto"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="h-6 w-6" />
                  ) : (
                    <Volume2 className="h-6 w-6" />
                  )}
                </Button>
              </motion.div>

              {/* Reception Image - Shows on Desktop only */}
              <div className="hidden lg:flex lg:col-span-2 justify-center items-end">
                <Image
                  src={"/clinic/reception-theskinfirm.jpg"}
                  width={334}
                  height={430}
                  alt="Professional skincare treatment being performed by certified specialist"
                  className="w-full max-w-[380px] h-auto object-contain rounded-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Video - Shows on Mobile only */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:hidden mt-4 relative w-full min-h-[280px]"
            >
              <video
                ref={videoRefMobile}
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                webkit-playsinline="true"
                x5-playsinline="true"
                src={"/theskinfirm.mp4"}
              />
              <Button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 h-auto"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </Button>
            </motion.div>
          </div>
          {/* Desktop only - Video in right column */}
          <div className="hidden lg:flex lg:flex-col col-span-1 order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#A89689] text-sm lg:text-base mb-6 lg:mb-10 text-center lg:text-left lg:pt-3"
            >
              Experience transformative skincare solutions tailored to your
              unique needs by certified specialists
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start h-full relative"
            >
              <video
                ref={videoRefDesktop}
                className="w-full max-w-[300px] max-h-[500px] lg:max-w-none lg:w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                src={"/theskinfirm.mp4"}
              />
              <Button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 h-auto"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="h-6 w-6" />
                ) : (
                  <Volume2 className="h-6 w-6" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
