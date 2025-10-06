'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import treatmentsData from '@/data/treatments.json';
import allServices from '../[service]/data_2.json';

type TabKey = "skin" | "hair" | "laser";

interface HelperProps {
  activeTab: TabKey;
}

const MotionImage = motion(Image);

const HAIR_SERVICE_TITLES = [
  "PRP Hair Treatment", "Hair Loss Treatment", "Hair Mesotherapy",
  "QR678 Treatment", "GFC Therapy", "Hair Density Improvement",
  "Hair Regrowth", "Postnatal Hair Loss Treatment", "Alopecia Areata Treatment",
  "Hair Loss Treatment for Men",
];

const LASER_SERVICE_TITLES = [
  "Laser Hair Removal", "Leg Hair Removal", "Bikini Hair Removal",
  "Laser Beard Shaping", "Diode Laser Hair Removal", "CO2 Laser for Skin",
  "QSwitch ND YAG Laser", "Carbon Laser Facial", "Tattoo Removal",
];

const Helper: React.FC<HelperProps> = ({ activeTab }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const handleCardClick = (treatment: any) => {
    const slug = treatment.slug || treatment.title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/${slug}`);
  };

  const handleCardHover = (treatment: any) => {
    const slug = treatment.slug || treatment.title.toLowerCase().replace(/\s+/g, '-');
    router.prefetch(`/${slug}`);
  };

  // Data processing logic...
  const services: { [key in TabKey]: any[] } = {
    skin: [],
    hair: [],
    laser: [],
  };

  (['hair', 'laser'] as TabKey[]).forEach(category => {
    const cat = category as keyof typeof treatmentsData;
    if (treatmentsData[cat] && treatmentsData[cat].sections) {
      treatmentsData[cat].sections.forEach(section => {
        section.treatments.forEach(treatment => {
          if (!services[category].find(s => s.title === treatment.title)) {
            services[category].push(treatment);
          }
        });
      });
    }
  });

  Object.entries(allServices).forEach(([slug, serviceData]) => {
    const title = serviceData.hero.title.split(" in Pune")[0];
    let category: TabKey = 'skin';

    if (HAIR_SERVICE_TITLES.some(hairTitle => title.includes(hairTitle))) {
      category = 'hair';
    } else if (LASER_SERVICE_TITLES.some(laserTitle => title.includes(laserTitle))) {
      category = 'laser';
    }

    if (!services[category].find(s => title.includes(s.title))) {
      services[category].push({
        title: title,
        slug: slug,
        description: ((serviceData as any).whatIsService?.content || (serviceData as any).whyThisService?.content || serviceData.hero.subtitle || "").substring(0, 150) + "...",
        imageSrc: (serviceData as any).whyChooseUs.image || "/images/services/53.png",
      });
    }
  });

  const skinSections = treatmentsData.skin.sections.map(section => ({
    ...section,
    treatments: section.treatments.map(treatment => {
      const service = Object.entries(allServices).find(([_slug, data]) =>
        data.hero.title.toLowerCase().includes(treatment.title.toLowerCase())
      );
      return service ? { ...treatment, slug: service[0] } : treatment;
    })
  }));

  const hairSections = [{ title: "Hair Services", treatments: services.hair }];
  const laserSections = [{ title: "Laser Services", treatments: services.laser }];

  const sections: { [key in TabKey]: any[] } = {
    skin: skinSections,
    hair: hairSections,
    laser: laserSections,
  };

  const renderService = (treatment: any, treatmentIndex: number) => (
    <motion.div
      key={`treatment-${treatmentIndex}`}
      className="bg-white border border-[color:var(--color-border-light)] rounded-[10px] p-[12px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-full hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] transition-shadow duration-300 relative cursor-pointer"
      onClick={() => handleCardClick(treatment)}
      onMouseEnter={() => handleCardHover(treatment)}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: treatmentIndex * 0.1 }}
    >
      <div className="flex gap-[16px] items-start">
        <div className="w-[140px] h-[140px] flex-shrink-0 rounded-[8px] overflow-hidden relative">
          <MotionImage
            src={treatment?.imageSrc || "/images/services/53.png"}
            alt={treatment?.title || "Treatment"}
            fill
            sizes="140px"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col justify-start">
          <h3 className="text-[color:var(--color-primary-brown)] text-[16px] font-semibold leading-[20px] tracking-[-0.1px] m-0 mb-[8px]">
            {treatment?.title || "Treatment Title"}
          </h3>
          <p className="text-[color:var(--color-dark-text)] text-[13px] font-normal leading-[18px] tracking-[-0.05px] m-0 mb-[12px] line-clamp-4 overflow-hidden">
            {treatment?.description || "Treatment description"}
          </p>
          <div className="flex items-center gap-[6px] cursor-pointer group">
            <span className="text-[#000000] text-[12px] font-medium leading-[16px] group-hover:text-[color:var(--color-dark-text)] transition-colors duration-300">
              Learn More
            </span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-[2px] transition-transform duration-300">
              <path d="M2.33333 1H9V7.66667M9 1L1 9L9 1Z" stroke="var(--color-primary-brown)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSection = (section: any) => {
    const isExpanded = expandedSections[section.title] ?? true;
    return (
      <div
        key={section.title}
        id={`_${section.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
        className="mb-[20px] last:mb-0"
      >
        <div className="bg-white border border-[color:var(--color-border-light)] rounded-[10px] p-[26px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-full">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setExpandedSections(prev => ({ ...prev, [section.title]: !isExpanded }))}
          >
            <h2 className="text-[color:var(--color-primary-brown)] text-[24px] font-semibold leading-[24px] uppercase m-0">
              {section.title}
            </h2>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
              <path
                d="M22.5 11.25L15 18.75L7.5 11.25"
                stroke="var(--color-dark-text)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-[32px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                    {section.treatments.map(renderService)}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[20px] w-full">
      {sections[activeTab].map(renderSection)}
    </div>
  );
};

export default Helper;