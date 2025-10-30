"use client";
import React, { useState } from "react";
import TreatmentCard from "../TreatmentCard";

interface ServiceSectionProps {
  title: string;
  treatments: Array<{
    imageSrc: string;
    imageBgSrc: string;
    title: string;
    description: string;
  }>;
  isOpen?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  treatments,
  isOpen = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  return (
    <div className="bg-white border border-[#333333] rounded-[10px] p-[26px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] w-full">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-[#D4A380] text-[24px] font-semibold leading-[24px] uppercase m-0">
          {title}
        </h2>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
        >
          <path
            d="M25 20L15 10L5 20"
            stroke="#333333"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isExpanded && (
        <div className="mt-[30px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {treatments.map((treatment, index) => (
              <TreatmentCard
                key={index}
                imageSrc={treatment.imageSrc}
                imageBgSrc={treatment.imageBgSrc}
                title={treatment.title}
                description={treatment.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const ServicesDetailed = () => {
  const acneTreatments = [
    {
      imageSrc: "https://picsum.photos/id/93/200/200",
      imageBgSrc: "https://picsum.photos/id/68/200/200",
      title: "Acne Treatment",
      description:
        "At The Skin Firm, our Acne Treatment is designed by a dermatologist's protocol that targets acne at its root and not just the surface. Whether you're dealing with active breakouts, hormonal acne, or persistent post-acne marks, this treatment is tailored to your skin's unique condition.",
    },
    {
      imageSrc: "https://picsum.photos/id/38/200/200",
      imageBgSrc: "https://picsum.photos/id/57/200/200",
      title: "Acne Marks Treatment",
      description:
        "Acne may fade, but the marks it leaves can linger, reminding us of our skin struggles. At The Skin Firm, our Acne Marks Treatment in Pune is crafted to gently yet effectively fade post-acne pigmentation, dark spots, and uneven skin texture caused by previous breakouts.",
    },
    {
      imageSrc: "https://picsum.photos/id/31/200/200",
      imageBgSrc: "https://picsum.photos/id/25/200/200",
      title: "Acne Scars Removal",
      description:
        "While breakouts may resolve, the presence of acne scars can persist over time, leaving behind uneven texture, pits, and reminders we'd prefer to forget.. At The Skin Firm, our advanced Acne Scar Treatment in Pune is designed to visibly reduce all types of acne scarring, so your skin can feel as smooth and confident as you do.",
    },
    {
      imageSrc: "https://picsum.photos/id/47/200/200",
      imageBgSrc: "https://picsum.photos/id/54/200/200",
      title: "Open Pores Treatment",
      description:
        "If you've ever felt like your skin looks uneven, rough, or just won't hold makeup the way it should, enlarged pores could be the reason. Open pores are common, especially in Indian skin, and are often the result of genetics, excess oil production, acne history, or sun damage.",
    },
  ];

  const pigmentationTreatments = [
    {
      imageSrc: "https://picsum.photos/id/101/200/200",
      imageBgSrc: "https://picsum.photos/id/102/200/200",
      title: "Pigmentation Treatment",
      description:
        "Dark spots, melasma, and uneven skin tone can be especially taxing skin concerns. Often appearing as brown or greyish patches, or discoloration pigmentation can show up in different areas of the face and body, affecting confidence. At The Skin Firm, our advanced Pigmentation Treatment is designed to target these concerns.",
    },
    {
      imageSrc: "https://picsum.photos/id/103/200/200",
      imageBgSrc: "https://picsum.photos/id/104/200/200",
      title: "Melasma Treatment",
      description:
        "Melasma is a common skin condition that causes brown or greyish patches, especially during skin concerns. Often appearing as brown or greyish patches, or discoloration pigmentation can show up in different areas of the face and body, affecting confidence. Triggered by hormones, sun exposure, or genetics.",
    },
  ];

  const skinDiscolorationTreatments = [
    {
      imageSrc: "https://picsum.photos/id/105/200/200",
      imageBgSrc: "https://picsum.photos/id/106/200/200",
      title: "Skin Whitening",
      description:
        "At The Skin Firm, we believe skin confidence isn't about changing who you are, but about feeling comfortable in your own skin. Our Skin Whitening Treatment in Pune is designed not to dramatically alter your natural skin tone, but to address uneven pigmentation and give you a more radiant, even complexion.",
    },
    {
      imageSrc: "https://picsum.photos/id/107/200/200",
      imageBgSrc: "https://picsum.photos/id/108/200/200",
      title: "Tan Removal",
      description:
        "Sun exposure can take a visible toll on your skin, leaving behind stubborn tanning, dark patches, and even premature aging. At The Skin Firm, our Tan Removal Treatment in Pune is designed not to dramatically alter your natural skin tone, but to address uneven pigmentation and give you a more radiant, even complexion.",
    },
    {
      imageSrc: "https://picsum.photos/id/109/200/200",
      imageBgSrc: "https://picsum.photos/id/110/200/200",
      title: "Underarm Whitening",
      description:
        "Dark underarms can make people feel self-conscious, especially when wearing sleeveless outfits, swimwear, or traditional wear. At The Skin Firm, we offer a specialized underarm whitening treatment designed to address this common concern with care and expertise.",
    },
  ];

  const agingTreatments = [
    {
      imageSrc: "https://picsum.photos/id/111/200/200",
      imageBgSrc: "https://picsum.photos/id/112/200/200",
      title: "Anti-Ageing Treatment",
      description:
        "Ageing is a privilege, but visible signs of ageing don't have to be. As we age, our skin naturally loses its elasticity, firmness, and youthful glow, but they can be enhanced and delayed with the right interventions. At The Skin Firm, our Anti-Ageing Treatment in Pune is designed to help you age gracefully.",
    },
    {
      imageSrc: "https://picsum.photos/id/113/200/200",
      imageBgSrc: "https://picsum.photos/id/114/200/200",
      title: "Wrinkle Treatment",
      description:
        "Wrinkles are one of the most visible signs of skin ageing, but they don't have to be permanent. Whether they appear as fine lines around the eyes, deeper lines around the mouth, or creases across the forehead, wrinkles can make us feel less confident about our appearance.",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-32 bg-[#F8F4EB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#333333] font-semibold leading-tight">
            What Services We Offer
          </h2>
        </div>

        <div className="flex flex-col gap-[20px] w-full">
          <ServiceSection
            title="Acne and Acne Scars"
            treatments={acneTreatments}
            isOpen={true}
          />
          <ServiceSection
            title="Pigmentation"
            treatments={pigmentationTreatments}
            isOpen={false}
          />
          <ServiceSection
            title="Skin Discoloration"
            treatments={skinDiscolorationTreatments}
            isOpen={false}
          />
          <ServiceSection
            title="Aging and Wrinkles"
            treatments={agingTreatments}
            isOpen={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailed;
