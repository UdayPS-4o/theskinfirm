"use client";

import Image from "next/image";

export default function JennyStorySection() {
  return (
    <section className="relative bg-[#FBEDE4] mb-14 px-6 lg:px-20 pt-24 mt-14 overflow-hidden rounded-bl-[75px] rounded-tr-[75px]">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <Image
            src="/about-us-images/jenny2.png"
            alt="Jenny Story"
            width={488}
            height={673}
          />
        </div>

        {/* Story Content */}
        <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <p className="text-[#EF9273] text-sm font-medium mb-2">
            ---------- Jenny ----------
          </p>
          <h2 className="text-3xl font-bold text-[#1F1F1F] mb-4">
            Jenny Story
          </h2>
          <p className="text-[#1C1E53] font-inter font-normal text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
          </p>
          <p className="text-[#1C1E53] font-inter font-normal text-base mt-6">
            Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
          </p>
          <button
            style={{ padding: "18.67px 42.67px" }}
            className="mt-6 bg-[#D4A380] hover:bg-[#c88d5c] text-white text-sm rounded transition"
          >
            Book a free consultation
          </button>
        </div>
      </div>
    </section>
  );
}