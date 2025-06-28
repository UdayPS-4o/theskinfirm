import { GraduationCap, Heart, Zap } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

export const WhyChooseUs = () => {
  return (
    <div className="mt-24 px-5 lg:px-[70px] py-[122px] bg-[#F8F4EB]">
      <div className="flex flex-col lg:flex-row items-center justify-center mb-5 lg:mb-0">
        <Image alt="" src={"/why-choose-us.svg"} height={600} width={603} />
        <div className="flex flex-col items-start justify-center space-y-12">
          <h2 className="font-semibold text-[64px]/tight text-center lg:text-start text-[#344054]">
            Why <span className="text-[#FD853A]">Choose Us</span>?
          </h2>
          <p className="text-center lg:text-start max-w-md text-xl text-[#98A2B3]">
            Because your skin deserves more than just treatment, it deserves
            intention, expertise, and care that feels personal. At{' '}
            <span className="font-semibold text-[#344054]">The Skin Firm</span>, we don&apos;t offer quick fixes; we offer thoughtful
            transformations built on trust, innovation, and clinical precision.
          </p>
          <div className="grid grid-cols-2 w-full">
            <div className="text-center lg:text-start">
              <h2 className="font-medium text-4xl text-[#1D2939]">450+</h2>
              <p className="mt-5 text-[#667085] text-xl">Patients</p>
            </div>
            <div className="text-center lg:text-start">
              <h2 className="font-medium text-4xl text-[#1D2939]">450+</h2>
              <p className="mt-5 text-[#667085] text-xl">Successful Results</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-stretch justify-center flex-wrap gap-6">
        <Benefit
          description="We invest in globally trusted, cutting-edge dermatological tools and laser systems, ensuring every treatment is rooted in science, precision, and safety. Your skin gets the best, because we work with the best."
          icon={<Zap color="#D4A380" />}
          title="Innovative Technology"
        />
        <Benefit
          description="We believe beauty is a blend of balance, biology, and self-worth. Our approach goes beyond surface-level, combining skincare, hair health, nutrition, and lifestyle guidance to restore radiance from within."
          icon={<Heart color="#D4A380" />}
          title="Holistic Beauty"
        />
        <Benefit
          description="Our relationship doesn’t end when your session does. With honest advice, progress tracking, and ongoing care plans, we’re here for your skin’s journey every step, every concern, every celebration."
          icon={<GraduationCap color="#D4A380" />}
          title="Continuous Support"
        />
      </div>
    </div>
  );
};

function Benefit({
  description,
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-[400px] p-7 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
      {icon}
      <h4 className="mt-[18px] mb-2.5 text-sm text-[#828280] font-medium">
        {title}
      </h4>
      <p className="text-xs text-[#4B5563] text-center">{description}</p>
    </div>
  );
}
