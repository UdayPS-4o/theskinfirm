import Image from "next/image";
import Link from "next/link";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";
import { MaxWidthWrapper } from "../layout/max-width";

export default function HeroSection() {
  return (
    <section className="w-full px-6 lg:px-20 bg-[#FBEDE4]">
      <MaxWidthWrapper>
        <div className=" flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-lg font-medium text-gray-800 mb-2">Hey,</p>
            <h1 className="text-5xl font-bold text-[#1e1e1e] leading-tight font-roboto">
              Meet <span className="text-[#cb997e]">Jenny</span>
            </h1>
            <p className="text-[#1C1E53] font-inter font-normal text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <button style={{ padding: "18.67px 42.67px" }} className="mt-6 bg-[#D4A380] hover:bg-[#c88d5c] text-white text-sm rounded transition">
              Book a free consultation
            </button>
          </div>

          <div className="w-full lg:w-[40%] mb-10 lg:mb-0">
            <Image src="/about-us-images/jenny.png" alt="Doctor Jenny" width={401} height={334} priority />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
