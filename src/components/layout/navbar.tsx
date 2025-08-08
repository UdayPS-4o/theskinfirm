"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MaxWidthWrapper } from "./max-width";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
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
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Contact", href: "/contact" },
];

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
  "Hair Loss Treatment": "hair-loss-treatment",
  "Hair Mesotherapy": "hair-mesotherapy",
  "QR678 Treatment": "qr678-treatment",
  "Hair Density Improvement": "hair-density-improvement",
  "Hair Regrowth": "hair-regrowth",
  "Postnatal Hair Loss Treatment": "postnatal-hair-loss-treatment",
  "Alopecia Areata Treatment": "alopecia-areata-treatment",
  "Hair Loss Treatment for Men": "hair-loss-treatment-for-men",
  "Laser Hair Removal": "laser-hair-removal",
  "Leg Hair Removal": "leg-hair-removal",
  "Bikini Hair Removal": "bikini-hair-removal",
  "Laser Beard Shaping": "laser-beard-shaping",
  "Diode Laser Hair Removal": "diode-laser-hair-removal",
  "CO2 Laser for Skin": "co2-laser-for-skin",
  "QSwitch ND YAG Laser": "qswitch-nd-yag-laser",
  "Carbon Laser Facial": "carbon-laser-facial",
  "Tattoo Removal": "tattoo-removal",
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

export const Navbar = () => {
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
    router.prefetch(`/services/${serviceSlug}`);
  };

  const renderDropdownContent = (dropdownType: string) => {
    switch (dropdownType) {
      case "skin":
        return (
          <div className="space-y-1">
            {SKIN_SERVICE_GROUPS.map((group, index) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02, duration: 0.2 }}
              >
                <Link
                  href={`/services#_${getSectionSlug(group)}`}
                  className="text-sm text-[#374151] hover:text-[#D4A380] hover:bg-white/40 transition-all duration-200 block py-2 px-3 rounded-lg hover:translate-x-1 font-medium border border-transparent hover:border-[#D4A380]/20 hover:shadow-sm"
                  onMouseEnter={() => handleLinkHover("/services")}
                  onClick={() => {
                    closeDesktopDropdown();
                    closeMobileMenu();
                  }}
                >
                  {group}
                </Link>
              </motion.div>
            ))}
          </div>
        );

      case "hair":
        return (
          <div className="space-y-1">
            {HAIR_SERVICES.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02, duration: 0.2 }}
              >
                <Link
                  href={`/services/${getServiceSlug(service)}`}
                  className="text-sm text-[#374151] hover:text-[#D4A380] hover:bg-white/40 transition-all duration-200 block py-2 px-3 rounded-lg hover:translate-x-1 font-medium border border-transparent hover:border-[#D4A380]/20 hover:shadow-sm"
                  onMouseEnter={() =>
                    handleServiceHover(getServiceSlug(service))
                  }
                  onClick={() => {
                    closeDesktopDropdown();
                    closeMobileMenu();
                  }}
                >
                  {service}
                </Link>
              </motion.div>
            ))}
          </div>
        );

      case "laser":
        return (
          <div className="space-y-1">
            {LASER_SERVICES.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02, duration: 0.2 }}
              >
                <Link
                  href={`/services/${getServiceSlug(service)}`}
                  className="text-sm text-[#374151] hover:text-[#D4A380] hover:bg-white/40 transition-all duration-200 block py-2 px-3 rounded-lg hover:translate-x-1 font-medium border border-transparent hover:border-[#D4A380]/20 hover:shadow-sm"
                  onMouseEnter={() =>
                    handleServiceHover(getServiceSlug(service))
                  }
                  onClick={() => {
                    closeDesktopDropdown();
                    closeMobileMenu();
                  }}
                >
                  {service}
                </Link>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <nav
      className={`py-4 lg:py-4 w-full bg-[#FBEDE4] sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-sm bg-[#FBEDE4]/95" : ""
      }`}
    >
      <MaxWidthWrapper className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          className="flex-shrink-0"
        >
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="The Skin FirmLogo"
              width={220}
              height={57}
              className="h-10 lg:h-14"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navContainerVariants}
          className="hidden md:flex md:justify-center gap-x-7 *:text-[#374151] *:hover:text-[#374151]/80 *:transition-colors"
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
                    onMouseEnter={() => handleLinkHover(item.href)}
                    onClick={closeDesktopDropdown}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeDesktopDropdown === item.dropdownType
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
                        <div className="bg-gradient-to-br from-[#FBEDE4] to-[#F5E6D3] backdrop-blur-xl rounded-2xl shadow-2xl border border-[#D4A380]/20 p-6 w-80">
                          {renderDropdownContent(item.dropdownType!)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors flex items-center py-1"
                  onMouseEnter={() => handleLinkHover(item.href)}
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
          className="md:hidden p-2 rounded-md text-[#374151] hover:text-[#374151]/80 focus:outline-none focus:ring-2 focus:ring-[#D4A380]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </MaxWidthWrapper>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-[-5px] md:hidden fixed inset-x-0 top-[72px] bg-[#FBEDE4] border-t border-[#D4A380]/20 shadow-lg z-40 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 72px)" }}
          >
            <div className="max-w-7xl mx-auto px-6 pb-0">
              <div className="md:hidden py-4 pb-4">
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
                              className={`transition-transform duration-300 ${
                                activeMobileDropdown === item.dropdownType
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
                                          href={`/services#_${getSectionSlug(
                                            group
                                          )}`}
                                          className="block text-[#374151] hover:text-[#D4A380] py-3 px-3 rounded-lg hover:bg-white/40 transition-all duration-200 text-base font-medium"
                                          onMouseEnter={() =>
                                            handleLinkHover("/services")
                                          }
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
                                          onMouseEnter={() =>
                                            handleServiceHover(
                                              getServiceSlug(service)
                                            )
                                          }
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
                                          onMouseEnter={() =>
                                            handleServiceHover(
                                              getServiceSlug(service)
                                            )
                                          }
                                          onClick={closeMobileMenu}
                                        >
                                          {service}
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
                          className={`text-[#374151] hover:text-[#D4A380] transition-colors py-4 block font-medium text-lg ${
                            item.label === "Contact"
                              ? ""
                              : "border-b border-[#D4A380]/10"
                          }`}
                          onMouseEnter={() => handleLinkHover(item.href)}
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
