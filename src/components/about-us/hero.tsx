import Image from "next/image";
import Link from "next/link";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen px-6 lg:px-20 pt-6 bg-[#FBEDE4]">
      <nav className="flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800"></div>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-[#343a40]">
          <li><Link href="/" className="hover:text-[#cb997e] transition">Home</Link></li>
          <li><Link href="/about-us" className="text-[#343a40] font-bold">About Us</Link></li>
          <li><Link href="/product" className="hover:text-[#cb997e] transition">Product</Link></li>
          <li><Link href="/features" className="hover:text-[#cb997e] transition">Features</Link></li>
        </ul>
        <div className="flex gap-5 text-xl text-gray-600">
          <FiUser className="cursor-pointer" />
          <FiSearch className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
        </div>
      </nav>

      <div className="mt-40 flex flex-col-reverse lg:flex-row items-center justify-between">
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
    </section>
  );
}