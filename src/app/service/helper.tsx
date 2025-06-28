'use client';
import React, { useState } from 'react';
import TreatmentCard from '../../components/TreatmentCard';

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

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, treatments, isOpen = false }) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  return (
    <div className="bg-white border border-[#E6E6E6] rounded-[10px] p-[26px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-full">
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
          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
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
        <div className="mt-[32px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[24px]">
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

const Helper = () => {
  const acneTreatments = [
    {
      imageSrc: "https://picsum.photos/id/93/200/200",
      imageBgSrc: "https://picsum.photos/id/68/200/200",
      title: "Acne Treatment",
      description: "At The Skin Firm, our Acne Treatment is designed by a dermatologist's protocol that targets acne at its root and not just the surface. Whether you're dealing with active breakouts, hormonal acne, or persistent post-acne marks, this treatment is tailored to your skin's unique condition."
    },
    {
      imageSrc: "https://picsum.photos/id/38/200/200",
      imageBgSrc: "https://picsum.photos/id/57/200/200",
      title: "Acne Marks Treatment",
      description: "Acne may fade, but the marks it leaves can linger, reminding us of our skin struggles. At The Skin Firm, our Acne Marks Treatment in Pune is crafted to gently yet effectively fade post-acne pigmentation, dark spots, and uneven skin texture caused by previous breakouts."
    },
    {
      imageSrc: "https://picsum.photos/id/31/200/200",
      imageBgSrc: "https://picsum.photos/id/25/200/200",
      title: "Acne Scars Removal",
      description: "While breakouts may resolve, the presence of acne scars can persist over time, leaving behind uneven texture, pits, and reminders we'd prefer to forget. At The Skin Firm, our advanced Acne Scar Treatment in Pune is designed to visibly reduce all types of acne scarring, so your skin can feel as smooth and confident as you do."
    },
    {
      imageSrc: "https://picsum.photos/id/47/200/200",
      imageBgSrc: "https://picsum.photos/id/54/200/200",
      title: "Open Pores Treatment",
      description: "If you've ever felt like your skin looks uneven, rough, or just won't hold makeup the way it should, enlarged pores could be the reason. Open pores are common, especially in Indian skin, and are often the result of genetics, excess oil production, acne history, or sun damage."
    }
  ];

  const pigmentationTreatments = [
    {
      imageSrc: "https://picsum.photos/id/15/200/200",
      imageBgSrc: "https://picsum.photos/id/22/200/200",
      title: "Pigmentation Treatment",
      description: "Uneven skin tone, stubborn dark patches, sun spots, or discoloration pigmentation can show up in different forms and affect your skin's clarity and confidence. At The Skin Firm, our advanced Pigmentation Treatment in Pune is designed to target various types of pigmentation concerns."
    },
    {
      imageSrc: "https://picsum.photos/id/29/200/200",
      imageBgSrc: "https://picsum.photos/id/35/200/200",
      title: "Melasma Treatment",
      description: "Melasma is one of the most persistent and emotionally taxing skin concerns, often appearing as brown or greyish patches across the cheeks, forehead, and upper lip. Triggered by hormones, sun exposure, or genetics, melasma can feel overwhelming to manage."
    }
  ];

  return (
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
    </div>
  );
};

export default Helper;