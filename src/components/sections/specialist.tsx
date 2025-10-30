"use client";
import React from "react";

import Image from "next/image";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Specialist = () => {
  const router = useRouter();
  return (
    <div className="pt-12 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mt-5 text-center font-semibold text-4xl md:text-5xl text-[#333333]">
          Specialist in Pune
        </h2>
        <Image
          alt=""
          src={"/specialist-hello.svg"}
          width={150}
          height={61}
          className="mt-6 mx-auto transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
          loading="lazy"
          onClick={() => router.push("/about-us#dr_karishma")}
        />

        <div className="relative mt-8 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-[#171717] text-center font-bold leading-tight">
            I&apos;m <span className="text-[#FD853A]">Dr. Karishma</span>,{" "}
            <br /> <span className="text-[#FD853A]">Skin</span> Specialist
          </h2>

          <div className="relative mt-[-20px] md:mt-[-40px] lg:mt-[-60px] flex justify-center items-end">
            <div className="hidden md:block absolute left-0 bottom-20">
              <Quote fill="#344054" className="text-[#344054] rotate-180" />
              <p className="mt-6 max-w-[280px] text-[#6C6C6C] text-left">
                Led by Dr. Karishma Singh, our clinic offers comprehensive skin
                assessment, evidence-based treatments, and ongoing support.
              </p>
            </div>

            <div className="z-10 mt-8">
              <Image
                alt="Skin Specialist"
                src={"/skin-specialist.svg.png"}
                width={500}
                height={400}
                className="mx-auto"
                loading="lazy"
              />
            </div>
            <Link
              target="_blank"
              href="https://www.google.com/search?sca_esv=61e5b843f2feed17&biw=1470&bih=832&sxsrf=AE3TifOMDsKPx7Kh6vF6AuOgmfyuc9Q8sQ:1755975431469&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_gaOLO0JJWs-odF0VvwJ8iCcPj735or90ztUaiok022kMxywU7rNHPilhW4K8hWZRCzL7ixLz2mh1vaqmzGHAcTSo2Dan_5E4MeiAARO1IB-ciambyzMFA-whJhPwFjWireW6fnOnA-Cc7q9v3nD645cxpQ&q=The+Skin+Firm+%7C+Laser+Skin+%26+Hair+Clinic+NIBM+Mohammed+Wadi+Reviews&sa=X&ved=2ahUKEwiq186ezqGPAxXnTmwGHYFmN9IQ0bkNegQIKhAE&cshid=1755975435279699"
              className="group"
            >
              <div className="hidden md:block absolute right-0 bottom-20 text-right">
                <div className="flex items-center justify-end">
                  <Star
                    className="text-[#FD853A] p-0.5 transition-transform duration-300 group-hover:scale-110"
                    fill="#FD853A"
                  />
                  <Star
                    className="text-[#FD853A] p-0.5 transition-transform duration-300 group-hover:scale-110"
                    fill="#FD853A"
                  />
                  <Star
                    className="text-[#FD853A] p-0.5 transition-transform duration-300 group-hover:scale-110"
                    fill="#FD853A"
                  />
                  <Star
                    className="text-[#FD853A] p-0.5 transition-transform duration-300 group-hover:scale-110"
                    fill="#FD853A"
                  />
                  <Star
                    className="text-[#FD853A] p-0.5 transition-transform duration-300 group-hover:scale-110"
                    fill="#FD853A"
                  />
                </div>
                <h4 className="mt-5 text-4xl md:text-5xl font-bold text-[#171717]">
                  5 Years
                </h4>
                <h5 className="mt-1 text-xl text-[#171717]">Experience</h5>
              </div>
            </Link>
          </div>

          <div className="mt-8 w-full flex justify-center">
            <Button
              className="bg-[#D4A380] text-white rounded-full gap-x-2"
              size={"lg"}
              onClick={() => router.push("/about-us")}
            >
              Know More
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
