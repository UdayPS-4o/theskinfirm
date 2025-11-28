"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Service, ServiceCategory } from "@/payload-types";

type TabKey = "skin" | "hair" | "laser";

interface HelperProps {
  activeTab: TabKey;
  services: (Service & { category: ServiceCategory })[];
}

const MotionImage = motion(Image);

const Helper: React.FC<HelperProps> = ({ activeTab, services }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const handleCardClick = (treatment: any) => {
    const slug = treatment.slug;
    router.push(`/${slug}`);
  };

  const handleCardHover = (treatment: any) => {
    const slug = treatment.slug;
    router.prefetch(`/services/${slug}`);
    if (treatment.imageSrc) {
      router.prefetch(treatment.imageSrc);
    }
  };

  // Process services by category
  const processedServices: { [key in TabKey]: any[] } = {
    skin: [],
    hair: [],
    laser: [],
  };

  // Group services by category type
  services.forEach((service) => {
    // Ensure service has a category and it's populated
    if (!service.category || typeof service.category !== "object") {
      return;
    }

    const categoryType = service.category.type as TabKey;
    if (categoryType && processedServices[categoryType]) {
      // Get description from the first info section if available
      let description = "Professional treatment available at The Skin Firm.";
      if (service.sections && Array.isArray(service.sections)) {
        const infoSection = service.sections.find(
          (section) => section.blockType === "info"
        );
        if (infoSection && "description" in infoSection) {
          // Extract plain text from rich text content
          const richTextContent = infoSection.description;
          if (
            richTextContent?.root?.children &&
            Array.isArray(richTextContent.root.children)
          ) {
            const textContent = richTextContent.root.children
              .map((child: any) => {
                if (child.children && Array.isArray(child.children)) {
                  return child.children
                    .map((textNode: any) => textNode.text || "")
                    .join("");
                }
                return "";
              })
              .join(" ")
              .trim();
            if (textContent.length > 0) {
              description =
                textContent.length > 150
                  ? textContent.substring(0, 150) + "..."
                  : textContent;
            }
          }
        }
      }

      // Get image from hero section if available
      let imageSrc = "/placeholder.svg";
      if (service.sections && Array.isArray(service.sections)) {
        const aboutSection = service.sections.find(
          (section) => section.blockType === "about"
        );
        if (aboutSection && "image" in aboutSection && aboutSection.image) {
          if (
            typeof aboutSection.image === "object" &&
            aboutSection.image &&
            "url" in aboutSection.image
          ) {
            imageSrc = aboutSection.image.url || imageSrc;
          }
        }
      }

      processedServices[categoryType].push({
        title: service.title,
        slug: service.slug,
        description,
        imageSrc,
      });
    }
  });

  // Group services by category for skin services
  const skinServicesByCategory = processedServices.skin.reduce(
    (acc: any, service: any) => {
      // Find the service in the original services array to get the category
      const originalService = services.find((s) => s.slug === service.slug);
      const categoryName =
        originalService?.category?.name || "General Skin Services";

      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(service);
      return acc;
    },
    {}
  );

  // Create sections structure
  const sections: { [key in TabKey]: any[] } = {
    skin: Object.keys(skinServicesByCategory)
      .sort()
      .map((categoryName) => ({
        title: categoryName,
        treatments: skinServicesByCategory[categoryName],
      })),
    hair:
      processedServices.hair.length > 0
        ? [{ title: "Hair Services", treatments: processedServices.hair }]
        : [],
    laser:
      processedServices.laser.length > 0
        ? [{ title: "Laser Services", treatments: processedServices.laser }]
        : [],
  };

  // If no categorized sections for skin, create a single section
  if (sections.skin.length === 0 && processedServices.skin.length > 0) {
    sections.skin = [
      { title: "Skin Services", treatments: processedServices.skin },
    ];
  }

  const renderService = (treatment: any, treatmentIndex: number) => {
    return (
      <motion.div
        key={`treatment-${treatmentIndex}`}
        className="bg-white border border-[color:var(--color-border-light)] rounded-[10px] p-[12px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-full hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] transition-shadow duration-300 relative cursor-pointer"
        onClick={() => handleCardClick(treatment)}
        onMouseEnter={() => handleCardHover(treatment)}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: treatmentIndex * 0.1,
        }}
      >
        <div className="flex gap-[16px] items-start">
          <div className="w-[140px] h-[140px] flex-shrink-0 rounded-[8px] overflow-hidden relative">
            <MotionImage
              src={treatment.imageSrc}
              alt={treatment.title || "Treatment Image"}
              fill
              sizes="140px"
              className="object-cover"
              priority={treatmentIndex < 6}
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
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-[2px] transition-transform duration-300"
              >
                <path
                  d="M2.33333 1H9V7.66667M9 1L1 9L9 1Z"
                  stroke="var(--color-primary-brown)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderSection = (section: any) => {
    const isExpanded = expandedSections[section.title] ?? true;
    return (
      <div
        key={section.title}
        className="mb-[20px] last:mb-0"
      >
        <div
          className="relative -y-[20px]"
          id={`_${section.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
        ></div>
        <div className="bg-white border border-[color:var(--color-border-light)] rounded-[10px] p-[26px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-full">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() =>
              setExpandedSections((prev) => ({
                ...prev,
                [section.title]: !isExpanded,
              }))
            }
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
              className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
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
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
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

  // Show message if no services are available for the active tab
  if (!sections[activeTab] || sections[activeTab].length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-xl font-semibold text-[color:var(--color-dark-text)] mb-2">
          No {activeTab} services available
        </h3>
        <p className="text-[color:var(--color-light-text)]">
          Please check back later or contact us for more information.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[20px] w-full">
      {sections[activeTab].map(renderSection)}
    </div>
  );
};

export default Helper;
