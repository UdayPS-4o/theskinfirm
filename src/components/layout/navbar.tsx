"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import { InstantSkeletonLink } from "@/components/shared/InstantSkeletonLink";
import { useRouter } from "next/navigation";
import type { Service, ServiceCategory } from "@/payload-types";
import { SERVICE_TYPE } from "@/collections/ServiceCategory";

const getNavItems = (hasLocations: boolean) => {
  const baseItems = [
    { label: "About Us", href: "/about-us" },
    {
      label: "Skin",
      href: "/services?tab=skin",
      hasDropdown: true,
      dropdownType: "skin",
    },
    {
      label: "Hair",
      href: "/services?tab=hair",
      hasDropdown: true,
      dropdownType: "hair",
    },
    {
      label: "Laser",
      href: "/services?tab=laser",
      hasDropdown: true,
      dropdownType: "laser",
    },
    { label: "Pre-Wedding Services", href: "/pre-wedding-services" },
    {
      label: "Explore",
      href: "/gallery",
      hasDropdown: true,
      dropdownType: "explore",
    },
  ];

  if (hasLocations) {
    baseItems.push({
      label: "Locations We Serve",
      href: "#",
      hasDropdown: true,
      dropdownType: "locations",
    });
  }

  return baseItems;
};

// Skin service groups/categories that redirect to services page
const SKIN_SERVICE_GROUPS = [
  "Acne and Acne Scars",
  "Pigmentation",
  "Skin Discoloration",
  "Aging and Wrinkles",
  "Skin Texture",
  "Other Skin Concerns",
  "Facials",
  "Chemical Peel",
  "Advanced Skin Treatment",
  "Lifting and Tightening",
  "Trending Services",
  "Specialty Treatment",
];

// Helper function to generate section slugs
const getSectionSlug = (sectionName: string): string => {
  return sectionName.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
};

const HAIR_SERVICES = [
  "PRP Hair Treatment",
  "Hair Loss Treatment",
  "Hair Mesotherapy",
  "QR678 Treatment",
  "GFC Therapy",
  "Hair Density Improvement",
  "Hair Regrowth",
  "Postnatal Hair Loss Treatment",
  "Alopecia Areata Treatment",
  "Hair Loss Treatment for Men",
];

const LASER_SERVICES = [
  "Laser Hair Removal",
  "Leg Hair Removal",
  "Bikini Hair Removal",
  "Laser Beard Shaping",
  "Diode Laser Hair Removal",
  "CO2 Laser for Skin",
  "QSwitch ND YAG Laser",
  "Carbon Laser Facial",
  "Tattoo Removal",
];

// Service name to slug mapping for exact URL generation
const SERVICE_TO_SLUG_MAP: Record<string, string> = {
  "PRP Hair Treatment": "prp-hair-treatment",
  "Hair Loss Treatment": "hair-loss-treatment-in-pune",
  "Hair Mesotherapy": "hair-mesotherapy",
  "QR678 Treatment": "qr678-treatment",
  "GFC Therapy": "gfc-therapy-in-pune",
  "Hair Density Improvement": "hair-density-improvement",
  "Hair Regrowth": "hair-regrowth",
  "Postnatal Hair Loss Treatment": "postnatal-hair-loss-treatment",
  "Alopecia Areata Treatment": "alopecia-areata-treatment",
  "Hair Loss Treatment for Men": "hair-loss-treatment-for-men",
  "Laser Hair Removal": "laser-hair-removal-in-pune",
  "Leg Hair Removal": "leg-hair-removal",
  "Bikini Hair Removal": "bikini-hair-removal",
  "Laser Beard Shaping": "laser-beard-shaping",
  "Diode Laser Hair Removal": "diode-laser-hair-removal",
  "CO2 Laser for Skin": "co2-laser-for-skin",
  "QSwitch ND YAG Laser": "qswitch-nd-yag-laser",
  "Carbon Laser Facial": "carbon-peel-facial-in-pune",
  "Tattoo Removal": "tattoo-removal",
  "Acne Treatment": "acne-treatment-in-pune",
  "Medi-Facials": "medi-facials-in-pune",
  "Dark Circle Under Eye Treatment": "dark-circle-under-eye-treatment-in-pune",
  "Skin Pigmentation & Melasma Treatment":
    "skin-pigmentation-melasma-treatment-in-pune",
  "IV Drips Therapy": "iv-drips-therapy-in-pune",
  "Mole & Skin Tag Removal": "mole-skin-tag-removal-in-pune",
  "Chemical Peel": "chemical-peel-in-pune",
  "Tan Removal Treatment": "tan-removal-treatment-in-pune",
  "Open Pores Treatment": "open-pores-treatment-in-pune",
  "Underarm Whitening Treatment": "underarm-whitening-treatment-in-pune",
  "Anti-Ageing Treatment": "anti-ageing-treatment-in-pune",
  "Wrinkle Treatment": "wrinkle-treatment-in-pune",
  "Stretch Marks Removal Treatment": "stretch-marks-removal-treatment-in-pune",
  "Wart Removal Treatment": "wart-removal-treatment-in-pune",
  "Fire and Ice Facial": "fire-and-ice-facial-in-pune",
  "Hollywood Facial": "hollywood-facial-in-pune",
  "PRP Facial": "prp-facial-in-pune",
  "Carbon Peel Facial": "carbon-peel-facial-in-pune",
  "Hyperhidrosis Treatment": "hyperhidrosis-treatment-in-pune",
  "Double Chin Removal": "double-chin-removal-in-pune",
  "Acne Scars & Marks Treatment": "acne-scars-marks-treatment-in-pune",
  "Skin Whitening Treatment": "skin-whitening-treatment-in-pune",
  HydraFacial: "hydrafacial-in-pune",
};

// Helper function to convert service name to slug
const getServiceSlug = (serviceName: string): string => {
  return (
    SERVICE_TO_SLUG_MAP[serviceName] ||
    serviceName.toLowerCase().replace(/\s+/g, "-")
  );
};

const logoVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const navContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const Navbar = ({
  serviceCategories,
  hairServices,
  laserServices,
  locations,
}: {
  serviceCategories: ServiceCategory[];
  hairServices: Pick<Service, "title" | "slug">[];
  laserServices: Pick<Service, "title" | "slug">[];
  locations: Array<{ title: string; slug: string }>;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<
    string | null
  >(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const router = useRouter();
  const closeDesktopDropdown = () => setActiveDesktopDropdown(null);

  const NAV_ITEMS = getNavItems(locations.length > 0);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setActiveMobileDropdown(null);
    document.body.style.overflow = "unset";
  };

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);

    // Prevent background scrolling when mobile menu is open
    if (newMenuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setActiveMobileDropdown(null);
    }
  };

  const toggleMobileDropdown = (dropdownType: string) => {
    setActiveMobileDropdown(
      activeMobileDropdown === dropdownType ? null : dropdownType
    );
  };

  // Clean up body overflow on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Preload function for pages
  const handleLinkHover = (href: string) => {
    if (href.startsWith("/") && !href.includes("#")) {
      router.prefetch(href);
    }
  };

  // Preload function for service pages
  const handleServiceHover = (serviceSlug: string) => {
    router.prefetch(`/${serviceSlug}`);
  };

  const renderDropdownContent = (dropdownType: ServiceCategory["type"] | "explore" | "locations") => {
    if (dropdownType === "skin") {
      return (
        <div className="space-y-1">
          {serviceCategories
            .filter((service) => service.type.toLowerCase() === "skin")
            .map((group, index) => (
              <motion.div
                key={group.name + index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02, duration: 0.2 }}
              >
                <InstantSkeletonLink
                  href={`/services?tab=skin&section=${getSectionSlug(group.name)}`}
                  className="text-sm text-[#374151] hover:text-[#D4A380] hover:bg-white/40 transition-all duration-200 block py-2 px-3 rounded-lg hover:translate-x-1 font-medium border border-transparent hover:border-[#D4A380]/20 hover:shadow-sm"
                  onClick={() => {
                    closeDesktopDropdown();
                    closeMobileMenu();
                  }}
                >
                  {group.name}
                </InstantSkeletonLink>
              </motion.div>
            ))}
        </div>
      );
    }
    if (dropdownType === "explore") {
      const exploreItems = [
        { label: "Gallery", href: "/gallery" },
        { label: "Videos", href: "/videos" },
        { label: "Blogs", href: "/blogs" },
      ];
      return (
        <div className="space-y-1">
          {exploreItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02, duration: 0.2 }}
            >
              <InstantSkeletonLink
                href={item.href}
                className="text-sm text-[#374151] hover:text-[#D4A380] hover:bg-white/40 transition-all duration-200 block py-2 px-3 rounded-lg hover:translate-x-1 font-medium border border-transparent hover:border-[#D4A380]/20 hover:shadow-sm"
                onClick={() => {
                  closeDesktopDropdown();
                  closeMobileMenu();
                }}
              >
                {item.label}
              </InstantSkeletonLink>
            </motion.div>
          ))}
        </div>
      );
    }
    if (dropdownType === "locations") {
      return (
        <div className="space-y-1">
          {locations.map((location, index) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02, duration: 0.2 }}
            >
              <InstantSkeletonLink
                href={`/${location.slug}`}
                className="text-sm text-[#374151] hover:text-[#D4A380] hover:bg-white/40 transition-all duration-200 block py-2 px-3 rounded-lg hover:translate-x-1 font-medium border border-transparent hover:border-[#D4A380]/20 hover:shadow-sm"
                onClick={() => {
                  closeDesktopDropdown();
                  closeMobileMenu();
                }}
              >
                {location.title}
              </InstantSkeletonLink>
            </motion.div>
          ))}
        </div>
      );
    }
    const servicesToRender =
      dropdownType === "hair" ? hairServices : laserServices;
    return (
      <div className="space-y-1">
        {servicesToRender.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02, duration: 0.2 }}
          >
            <InstantSkeletonLink
              href={`/${service.slug}`}
              className="text-sm text-[#374151] hover:text-[#D4A380] hover:bg-white/40 transition-all duration-200 block py-2 px-3 rounded-lg hover:translate-x-1 font-medium border border-transparent hover:border-[#D4A380]/20 hover:shadow-sm"
              onClick={() => {
                closeDesktopDropdown();
                closeMobileMenu();
              }}
            >
              {service.title}
            </InstantSkeletonLink>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <nav
      className={`py-4 lg:py-4 w-full bg-[#e3caab] sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""
        }`}
    >
      <div className="mx-auto w-full max-w-[1350px] px-4 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          className="flex-shrink-0"
        >
          <Link
            href="/"
            className="flex items-center text-[#734817] hover:text-[#734817]/80 transition-colors"
          >
            <Image
              src="/tsf-logo.svg"
              alt="The Skin Firm Icon"
              width={40}
              height={40}
              className="text-[#734817]"
            />
            <img
              src="/logo.png"
              alt="The Skin FirmLogo"
              width={220}
              height={60}
              className="py-3 ml-3"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(25%) sepia(25%) saturate(250%) hue-rotate(350deg) brightness(1.2)",
              }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navContainerVariants}
          className="hidden lg:flex lg:justify-center gap-x-7 *:text-[#734817] *:hover:text-[#734817]/80 *:transition-colors"
        >
          {NAV_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              variants={navItemVariants}
              className="relative"
            >
              {item.hasDropdown ? (
                <div
                  className="relative group"
                  onMouseEnter={() =>
                    setActiveDesktopDropdown(item.dropdownType!)
                  }
                  onMouseLeave={() => setActiveDesktopDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="transition-colors flex items-center gap-1 py-1"
                    onClick={closeDesktopDropdown}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${activeDesktopDropdown === item.dropdownType
                        ? "rotate-180"
                        : ""
                        }`}
                    />
                  </Link>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {activeDesktopDropdown === item.dropdownType && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50"
                      >
                        <div className={`bg-gradient-to-br from-[#FBEDE4] to-[#F5E6D3] backdrop-blur-xl rounded-2xl shadow-2xl border border-[#D4A380]/20 p-6 ${item.dropdownType === 'explore' ? 'w-48' : 'w-80'}`}>
                          {renderDropdownContent(item.dropdownType as any)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors flex items-center py-1"
                  onClick={closeDesktopDropdown}
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md text-[#374151] hover:text-[#374151]/80 focus:outline-none focus:ring-2 focus:ring-[#D4A380]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-[-5px] lg:hidden fixed inset-x-0 top-[72px] bg-[#FBEDE4] border-t border-[#D4A380]/20 shadow-lg z-40 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 72px)" }}
          >
            <div className="max-w-7xl mx-auto px-6 pb-0">
              <div className="lg:hidden py-4 pb-4">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={navContainerVariants}
                  className="flex flex-col space-y-1"
                >
                  {NAV_ITEMS.map((item) => (
                    <motion.div key={item.label} variants={navItemVariants}>
                      {item.hasDropdown ? (
                        <div className="border-b border-[#D4A380]/10 pb-1 mb-3">
                          {/* Mobile Dropdown Toggle */}
                          <button
                            onClick={() =>
                              toggleMobileDropdown(item.dropdownType!)
                            }
                            className="w-full flex items-center justify-between py-4 text-[#374151] hover:text-[#D4A380] transition-colors font-medium text-lg"
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              size={20}
                              className={`transition-transform duration-300 ${activeMobileDropdown === item.dropdownType
                                ? "rotate-180"
                                : ""
                                }`}
                            />
                          </button>

                          {/* Mobile Dropdown Content */}
                          <AnimatePresence>
                            {activeMobileDropdown === item.dropdownType && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="pb-4"
                              >
                                <div className="bg-white/30 rounded-xl p-4 space-y-2">
                                  {item.dropdownType === "skin" &&
                                    SKIN_SERVICE_GROUPS.map((group, index) => (
                                      <motion.div
                                        key={group}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: index * 0.03,
                                          duration: 0.2,
                                        }}
                                      >
                                        <Link
                                          href={`/services?tab=skin&section=${getSectionSlug(
                                            group
                                          )}`}
                                          className="block text-[#374151] hover:text-[#D4A380] py-3 px-3 rounded-lg hover:bg-white/40 transition-all duration-200 text-base font-medium"
                                          onClick={closeMobileMenu}
                                        >
                                          {group}
                                        </Link>
                                      </motion.div>
                                    ))}

                                  {item.dropdownType === "hair" &&
                                    HAIR_SERVICES.map((service, index) => (
                                      <motion.div
                                        key={service}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: index * 0.03,
                                          duration: 0.2,
                                        }}
                                      >
                                        <Link
                                          href={`/services/${getServiceSlug(
                                            service
                                          )}`}
                                          className="block text-[#374151] hover:text-[#D4A380] py-3 px-3 rounded-lg hover:bg-white/40 transition-all duration-200 text-base font-medium"
                                          onClick={closeMobileMenu}
                                        >
                                          {service}
                                        </Link>
                                      </motion.div>
                                    ))}

                                  {item.dropdownType === "laser" &&
                                    LASER_SERVICES.map((service, index) => (
                                      <motion.div
                                        key={service}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: index * 0.03,
                                          duration: 0.2,
                                        }}
                                      >
                                        <Link
                                          href={`/services/${getServiceSlug(
                                            service
                                          )}`}
                                          className="block text-[#374151] hover:text-[#D4A380] py-3 px-3 rounded-lg hover:bg-white/40 transition-all duration-200 text-base font-medium"
                                          onClick={closeMobileMenu}
                                        >
                                          {service}
                                        </Link>
                                      </motion.div>
                                    ))}

                                  {item.dropdownType === "explore" &&
                                    [
                                      { label: "Gallery", href: "/gallery" },
                                      { label: "Videos", href: "/videos" },
                                      { label: "Blogs", href: "/blogs" },
                                    ].map((exploreItem, index) => (
                                      <motion.div
                                        key={exploreItem.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: index * 0.03,
                                          duration: 0.2,
                                        }}
                                      >
                                        <Link
                                          href={exploreItem.href}
                                          className="block text-[#374151] hover:text-[#D4A380] py-3 px-3 rounded-lg hover:bg-white/40 transition-all duration-200 text-base font-medium"
                                          onClick={closeMobileMenu}
                                        >
                                          {exploreItem.label}
                                        </Link>
                                      </motion.div>
                                    ))}

                                  {item.dropdownType === "locations" &&
                                    locations.map((location, index) => (
                                      <motion.div
                                        key={location.slug}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: index * 0.03,
                                          duration: 0.2,
                                        }}
                                      >
                                        <Link
                                          href={`/${location.slug}`}
                                          className="block text-[#374151] hover:text-[#D4A380] py-3 px-3 rounded-lg hover:bg-white/40 transition-all duration-200 text-base font-medium"
                                          onClick={closeMobileMenu}
                                        >
                                          {location.title}
                                        </Link>
                                      </motion.div>
                                    ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`text-[#374151] hover:text-[#D4A380] transition-colors py-4 block font-medium text-lg ${item.label === "Contact"
                            ? ""
                            : "border-b border-[#D4A380]/10"
                            }`}
                          onClick={closeMobileMenu}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
