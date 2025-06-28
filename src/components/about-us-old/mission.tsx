"use client";

import { MaxWidthWrapper } from "../layout/max-width";
import Image from "next/image";

type ValueItem = {
  title: string;
  description: string;
  image: string;
};

interface MissionSectionProps {
  values: ValueItem[];
}

export default function MissionSection({ values }: MissionSectionProps) {
  return (
    <section className="bg-[#FBEDE4] px-6 lg:px-20 py-20 text-center">
      <MaxWidthWrapper>
        <p className="text-[#EF9273] text-sm font-medium mb-2">---------- Mission ----------</p>
        <h2 className="text-4xl font-bold text-[#1F1F1F] mb-12">Values & Mission</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item: ValueItem, index: number) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">{item.title}</h3>
                <p className="text-[#1C1E53] text-sm mb-4">{item.description}</p>
                <a href="#" className="text-sm font-semibold text-black flex items-center gap-2">
                  Learn More <span className="text-[#1C1E53]">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
