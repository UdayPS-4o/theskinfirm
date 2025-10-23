"use client";

import React, { useEffect, useState, useRef } from "react";
import { 
  ChevronRight, 
  Sparkles, 
  Clock, 
  Zap,
  Heart,
  Award,
  Users,
  Shield,
  Star,
  CheckCircle2,
  Droplets,
  Sun,
  AlertCircle,
  TrendingUp,
  User,
  Calendar,
  ClipboardCheck,
  Gift
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/layout/max-width";
import { DashedSeparator } from "@/components/sections/dashed-separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PreWeddingServicesPage = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all animated sections
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  const packages = [
    {
      title: "6-Month Wedding Glow Plan",
      subtitle: "Ideal for those starting early, this comprehensive program targets long-term skin health.",
      icon: Calendar,
      features: [
        { text: "Advanced acne & pigmentation management", icon: Shield },
        { text: "Anti-tan and brightening therapies", icon: Sun },
        { text: "Hydration & rejuvenation facials", icon: Droplets },
        { text: "Laser-based hair removal and skin tightening sessions", icon: Zap },
        { text: "Hair & body polishing options", icon: Sparkles },
        { text: "Skin boosters", icon: TrendingUp },
      ],
    },
    {
      title: "3-Month Radiance Plan",
      subtitle: "Perfect for brides & grooms balancing busy schedules.",
      icon: Clock,
      features: [
        { text: "Corrective treatments for pigmentation, acne, or dullness", icon: Star },
        { text: "Intensive hydration facials & peels", icon: Droplets },
        { text: "Skin brightening and polishing", icon: Sparkles },
        { text: "Grooming add-ons: beard contour laser, scalp health", icon: Users },
      ],
    },
    {
      title: "1-Month Express Glow Plan",
      subtitle: "A last-minute boost designed for visible results in weeks.",
      icon: Zap,
      features: [
        { text: "Quick brightening facials & exfoliation", icon: Sparkles },
        { text: "IV Hydration & glow-boosting therapies", icon: Droplets },
        { text: "Pre-event touch-up sessions", icon: Gift },
        { text: "Add-ons: skin boosters", icon: TrendingUp },
      ],
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert-Led Skin Rituals",
      description:
        "Every treatment is thoughtfully curated and overseen by dermatologists, blending medical precision with refined care.",
      icon: Award,
    },
    {
      title: "Tailored Treatment Timelines",
      description:
        "Personalised plans are crafted around your wedding schedule, skin type, and unique skincare goals to deliver lasting radiance.",
      icon: Calendar,
    },
    {
      title: "Advanced Aesthetic Technology",
      description:
        "From medical-grade peels to state-of-the-art lasers and rejuvenation therapies, we offer results that go far beyond surface treatments.",
      icon: Zap,
    },
    {
      title: "Luxury Meets Clinical Excellence",
      description:
        "A serene, spa-like experience paired with proven dermatological outcomes for truly luminous skin.",
      icon: Star,
    },
    {
      title: "For Brides and Grooms Alike",
      description:
        "Inclusive couple-focused programs ensure both partners share the spotlight with confidence and glow.",
      icon: Heart,
    },
  ];

  const commonConcerns = [
    { text: "Dull and uneven skin tone", icon: Sun },
    { text: "Acne, breakouts, and scars", icon: AlertCircle },
    { text: "Pigmentation and tanning", icon: Droplets },
    { text: "Fine lines and loss of radiance", icon: Sparkles },
    { text: "Groom-specific issues: rough texture, razor bumps, uneven beard area, oily skin", icon: Users },
  ];

  const processSteps = [
    {
      title: "Personalised Consultation",
      description: "Comprehensive skin analysis and understanding of your wedding timeline.",
      icon: User,
    },
    {
      title: "Custom Treatment Plan",
      description: "Treatment plan aligned with your wedding timeline and skin goals.",
      icon: ClipboardCheck,
    },
    {
      title: "Scheduled Sessions",
      description: "Sessions spaced for best results and minimal downtime.",
      icon: Calendar,
    },
    {
      title: "Pre-Event Glow Therapy",
      description: "Final touch-up treatments for the perfect wedding day glow.",
      icon: Sparkles,
    },
  ];

  const aftercareGuidelines = [
    { text: "Use prescribed skincare consistently", icon: CheckCircle2 },
    { text: "Stay hydrated, sleep well, and eat a balanced diet", icon: Heart },
    { text: "Protect skin daily with sunscreen", icon: Shield },
    { text: "Avoid unplanned treatments close to your wedding", icon: AlertCircle },
  ];

  const faqs = [
    {
      question: "When should I begin my wedding skincare plan?",
      answer:
        "We recommend starting 6 months before, but even 1 month can bring visible improvements.",
    },
    {
      question: "Do you offer treatments for grooms too?",
      answer: "Yes, our packages are designed for both brides and grooms.",
    },
    {
      question: "Will my plan be customised?",
      answer:
        "Absolutely, your dermatologist will build a plan around your concerns, lifestyle, and wedding date.",
    },
    {
      question: "What if I have acne or sensitive skin?",
      answer:
        "We have specialised protocols for acne-prone and sensitive skin to ensure safe results.",
    },
    {
      question: "Do treatments have downtime?",
      answer:
        "Most are low-downtime but we still schedule carefully so you're event-ready.",
    },
    {
      question: "Can body care be included in the package?",
      answer: "Yes, we offer body tan removal and laser hair reduction.",
    },
    {
      question: "Do you provide couple packages?",
      answer:
        "Yes, we can design couple plans so both bride and groom enjoy the journey together.",
    },
    {
      question: "What results can I expect?",
      answer:
        "Brighter, more even skin tone, improved texture, reduced blemishes, and a healthy, confident glow.",
    },
  ];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; form?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('hero-right');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }
    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setIsSubmitting(true);
    setIsSubmitted(false);
    setErrors({});

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz79l0pdVYczNBtdBfL1knPANrGviRwXC_erZEWP1--xEoJ469pxQQbA5DEPyxa-j98qg/exec";

    const formData = {
      fullName: name,
      phoneNumber: phone,
      email: "",
      service: "Pre-Wedding Consultation",
      additionalInfo: "Submitted from Pre-Wedding Services page",
    };

    try {
      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(formData),
      });

      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setName("");
        setPhone("");
      }, 1000); 
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ form: 'Failed to submit. Please try again later.' });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Design 2: Premium Gradient Card */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/bridal-hero.jpg"
            fill
            alt="Pre-Wedding Glow Services"
            className="object-cover object-left lg:object-center"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20 md:py-28 text-center lg:text-left">
            
            {/* Left Content */}
            <div
              id="hero-left"
              data-animate
              className={`transform transition-all duration-1000 ease-out ${
                isVisible("hero-left")
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 mb-6">
                    <div className="h-px w-12 bg-[#d4a380]"></div>
                    <span className="text-sm md:text-base text-[#d4a380] uppercase tracking-widest font-semibold">
                      Pre-Wedding Services
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                    Your Wedding Glow,
                    <span className="block text-[#d4a380] mt-2">
                      Perfected at The Skin Firm
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                    Personalised pre-wedding couple treatments to restore, rejuvenate & glow.
                  </p>
                </div>

              </div>
            </div>

            {/* Right - Elegant Form */}
            <div
              id="hero-right"
              data-animate
              className={`relative flex justify-center transform transition-all duration-1000 delay-300 ease-out ${
                isVisible("hero-right")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* Floating Offer Badge */}
              <div className="absolute -top-6 left-[-0.5rem] md:-top-8 md:-left-6 bg-gradient-to-br from-[#d4a380] to-[#c19970] rounded-2xl p-4 md:p-6 shadow-2xl transform -rotate-6 hover:-rotate-3 transition-all hover:scale-110 z-30">
                <div className="text-center text-white">
                  <div className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">Upto</div>
                  <div className="text-2xl md:text-3xl font-black my-0.5 md:my-1">50% OFF</div>
                  <div className="text-[10px] md:text-xs capitalize">on Pre Wedding Services</div>
                </div>
              </div>

              {/* Premium Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl px-8 pb-8 pt-16 md:px-10 md:pb-10 md:pt-12 shadow-2xl border-2 border-[#d4a380]/20 max-w-lg lg:max-w-xl w-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#64442A] mb-3">
                    Begin Your Wedding Glow
                  </h3>
                  <p className="text-base text-[#8C6B52]">Personalized couple treatment plans</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4a380] focus:border-[#d4a380] outline-none transition-all bg-white text-base"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1 pl-1">{errors.name}</p>}
                  
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Phone Number*"
                      className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4a380] focus:border-[#d4a380] outline-none transition-all bg-white text-base"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1 pl-1">{errors.phone}</p>}
                  
                  {isSubmitted && (
                    <p className="text-green-600 text-sm font-medium text-center">
                      Thank you! We&apos;ll be in touch shortly.
                    </p>
                  )}
                  {errors.form && <p className="text-red-500 text-xs mt-1 text-center">{errors.form}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#d4a380] to-[#c19970] text-white px-8 py-4 rounded-xl font-bold text-base hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Start Your Wedding Journey'}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-center gap-6 flex-wrap text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#d4a380]/10 flex items-center justify-center">
                      <Gift className="w-4 h-4 text-[#d4a380]" strokeWidth={2.5} />
                    </div>
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#d4a380]/10 flex items-center justify-center">
                      <Award className="w-4 h-4 text-[#d4a380]" strokeWidth={2.5} />
                    </div>
                    <span>Expert Skin Specialists</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section - Variation 1: Elegant Split Layout */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white via-[#FFF9F0] to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4a380]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c19970]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            id="info-header"
            data-animate
            className={`grid lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ease-out ${
              isVisible("info-header")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Left: Title with decorative elements */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a380] to-[#c19970] flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <span className="text-[#d4a380] text-sm font-semibold uppercase tracking-widest">Wedding Glow</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[#64442A] font-bold">
                For the <span className="whitespace-nowrap">Bride & Groom</span>
                <span className="block">
                  Who Want to <span className="text-[#d4a380]">Glow</span>
                </span>
              </h2>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="h-1 w-20 bg-gradient-to-r from-[#d4a380] to-transparent"></div>
                <svg className="w-6 h-6 text-[#d4a380]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
            </div>
            
            {/* Right: Description with subtle card */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#d4a380]/20 rounded-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border-2 border-[#d4a380]/30 rounded-2xl p-8 md:p-10 shadow-xl">
                <p className="text-lg md:text-xl text-[#64442A] leading-relaxed mb-6">
                  Your wedding day is one of life&apos;s most photographed moments, so your skin should look as radiant as your love story.
                </p>
                <p className="text-base md:text-lg text-[#8C6B52] leading-relaxed">
                  At The Skin Firm, we design dermatologist-led pre-wedding treatments for both brides and grooms, ensuring you look your most confident and refreshed on your big day.
                </p>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#d4a380]/20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#d4a380]/10 flex items-center justify-center">
                      <Users className="w-4 h-4 text-[#d4a380]" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-[#64442A]">For Both Partners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#d4a380]/10 flex items-center justify-center">
                      <Award className="w-4 h-4 text-[#d4a380]" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-[#64442A]">Expert-Led Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#d4a380]/10 flex items-center justify-center">
                      <ClipboardCheck className="w-4 h-4 text-[#d4a380]" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-[#64442A]">Personalized Plans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Wedding Packages */}
      <section id="packages" className="relative py-16 md:py-24 px-4 md:px-8 bg-[#f5f0eb] overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364442A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            id="packages-header"
            data-animate
            className={`text-center max-w-[800px] mx-auto mb-16 transform transition-all duration-1000 ease-out ${
              isVisible("packages-header")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-[#d4a380]"></div>
              <span className="text-[#d4a380] text-sm font-semibold uppercase tracking-widest">Choose Your Journey</span>
              <div className="h-px w-16 bg-[#d4a380]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl leading-tight text-[#64442A] font-bold mb-4">
              Tailored Wedding Packages
            </h2>
            <p className="text-lg text-[#8C6B52]">Curated plans designed for every timeline</p>
          </div>

          <div
            id="packages-grid"
            data-animate
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {packages.map((pkg, index) => {
              const PackageIcon = pkg.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-white to-[#FFF9F0] rounded-2xl border-2 border-[#d4a380]/30 p-8 md:p-10 shadow-2xl transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-[0_20px_60px_rgba(212,163,128,0.4)] hover:-translate-y-3 ${
                    isVisible("packages-grid")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  } ${index === 1 ? 'lg:scale-105 border-[#d4a380]' : ''}`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  {/* Premium Badge for middle package */}
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#d4a380] to-[#c19970] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#d4a380]/10 to-transparent rounded-bl-full"></div>
                  
                  <div className="relative">
                    {/* Package Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4a380] to-[#c19970] flex items-center justify-center shadow-lg mb-6">
                      <PackageIcon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-[#64442A] mb-4 group-hover:text-[#d4a380] transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#8C6B52] mb-8 leading-relaxed">
                      {pkg.subtitle}
                    </p>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#d4a380] to-transparent mb-6"></div>
                    <ul className="space-y-4">
                      {pkg.features.map((feature, idx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#FFF9F0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4a380]/10 transition-colors">
                              <FeatureIcon className="w-5 h-5 text-[#d4a380]" />
                            </div>
                            <span className="text-sm md:text-base text-[#64442A] font-medium flex-1">
                              {feature.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-[#FFF9F0] via-[#FFF5E9] to-white overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#d4a380]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#c19970]/15 rounded-full blur-3xl"></div>
        
        <MaxWidthWrapper>
          <div className="flex flex-col gap-12 md:gap-16 relative z-10">
            <div
              id="why-choose-header"
              data-animate
              className={`text-center max-w-[800px] mx-auto transform transition-all duration-1000 ease-out ${
                isVisible("why-choose-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#d4a380]"></div>
                <span className="text-[#d4a380] text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
                <div className="h-px w-12 bg-[#d4a380]"></div>
              </div>
              <h2
                className={`text-3xl md:text-5xl leading-tight md:leading-[56px] text-[#64442A] font-bold mb-4 transform transition-all duration-700 delay-300 ease-out ${
                  isVisible("why-choose-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                Why Choose The Skin Firm for Your Pre-Wedding Journey
              </h2>
              <p
                className={`text-lg md:text-xl text-[#8C6B52] mt-4 italic transform transition-all duration-700 delay-400 ease-out ${
                  isVisible("why-choose-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                More than a salon experience — a transformation journey.
              </p>
            </div>
            <div
              id="why-choose-grid"
              data-animate
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {whyChooseUs.map((item, index) => {
                const ItemIcon = item.icon;
                const isLastItem = index === whyChooseUs.length - 1;
                return (
                  <div
                    key={index}
                    className={`group relative rounded-2xl border-2 border-[#d4a380]/20 p-6 md:p-8 bg-white/80 backdrop-blur-sm flex gap-5 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-[0_15px_40px_rgba(212,163,128,0.3)] hover:-translate-y-2 hover:border-[#d4a380]/60 ${
                      isVisible("why-choose-grid")
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    } ${isLastItem ? 'md:col-span-2 md:max-w-xl md:mx-auto' : ''}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    {/* Icon Circle */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d4a380] to-[#c19970] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <ItemIcon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-[#64442A] mb-3 group-hover:text-[#d4a380] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-[#8C6B52] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#d4a380]/10 to-transparent rounded-tl-full"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Common Concerns */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white via-[#FFF9F0] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 md:gap-16">
            <div
              id="concerns-header"
              data-animate
              className={`text-center max-w-[800px] mx-auto transform transition-all duration-1000 ease-out ${
                isVisible("concerns-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#d4a380] to-[#c19970] text-white text-sm font-semibold rounded-full uppercase tracking-wider shadow-lg mb-6">
                We&apos;ve Got You Covered
              </div>
              <h2 className="text-4xl md:text-5xl leading-tight text-[#64442A] font-bold mb-4">
                Common Concerns We Address
              </h2>
              <p className="text-lg text-[#8C6B52]">Expert solutions for every skin challenge</p>
            </div>
            <div
              id="concerns-grid"
              data-animate
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6"
            >
              {commonConcerns.map((concern, index) => {
                const ConcernIcon = concern.icon;
                return (
                  <div
                    key={index}
                    className={`group relative rounded-xl border-2 border-[#d4a380]/30 p-5 md:p-6 bg-white flex items-center gap-4 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,163,128,0.25)] hover:-translate-y-2 hover:border-[#d4a380] lg:col-span-2 ${
                      isVisible("concerns-grid")
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    } ${ index === 3 ? "lg:col-start-2" : "" }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4a380] to-[#c19970] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                      <ConcernIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* Text */}
                    <span className="text-base md:text-lg font-semibold text-[#64442A] leading-snug group-hover:text-[#d4a380] transition-colors flex-1">
                      {concern.text}
                    </span>
                    
                    {/* Decorative bottom accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4a380] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect - Process */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-[#f5f0eb] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364442A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="w-full max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col gap-16 md:gap-20">
            <div
              id="process-header"
              data-animate
              className={`text-center mx-auto max-w-3xl transform transition-all duration-1000 ease-out ${
                isVisible("process-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-16 bg-[#d4a380]"></div>
                <span className="text-[#d4a380] text-sm font-semibold uppercase tracking-widest">Our Process</span>
                <div className="h-px w-16 bg-[#d4a380]"></div>
              </div>
              <h2
                className={`text-4xl md:text-5xl leading-tight text-[#64442A] font-bold mb-4 transform transition-all duration-700 delay-300 ease-out ${
                  isVisible("process-header")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                What to Expect
              </h2>
              <p className="text-lg text-[#8C6B52]">Your journey to radiant skin, step by step</p>
            </div>
            <div
              id="process-steps"
              data-animate
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
            >
              {processSteps.map((step, stepIndex) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={stepIndex}
                    className={`group relative flex items-start gap-5 md:gap-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#d4a380]/30 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-[0_20px_50px_rgba(212,163,128,0.4)] hover:-translate-y-2 hover:border-[#d4a380] ${
                      isVisible("process-steps")
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${400 + stepIndex * 100}ms` }}
                  >
                    {/* Icon Badge with Number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#d4a380] to-[#c19970] flex flex-col items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <StepIcon className="w-8 h-8 md:w-9 md:h-9 text-white mb-1" strokeWidth={2} />
                        <span className="text-xs font-bold text-white/80">
                          Step {stepIndex + 1}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col gap-3 flex-1 pt-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#64442A] group-hover:text-[#d4a380] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg text-[#8C6B52] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#d4a380]/10 to-transparent rounded-br-2xl"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare Guidelines */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-[#FFF9F0] via-white to-[#FFF5E9] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a380]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c19970]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div
            id="aftercare-header"
            data-animate
            className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ease-out ${
              isVisible("aftercare-header")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#d4a380]"></div>
              <span className="text-[#d4a380] text-sm font-semibold uppercase tracking-widest">Post Care</span>
              <div className="h-px w-12 bg-[#d4a380]"></div>
            </div>
            <h2
              className={`text-4xl md:text-5xl leading-tight text-[#64442A] font-bold mb-4 transform transition-all duration-700 delay-300 ease-out ${
                isVisible("aftercare-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              Aftercare Guidelines
            </h2>
            <p className="text-lg text-[#8C6B52]">Maintain your glow with these essential tips</p>
          </div>
          <div
            id="aftercare-content"
            data-animate
            className={`bg-white/80 backdrop-blur-sm border-2 border-[#d4a380]/30 rounded-2xl p-8 md:p-12 shadow-2xl transform transition-all duration-1000 delay-400 ease-out ${
              isVisible("aftercare-content")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {aftercareGuidelines.map((guideline, index) => {
                const GuidelineIcon = guideline.icon;
                return (
                  <div
                    key={index}
                    className={`group flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-[#FFF9F0] to-white border border-[#d4a380]/20 transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg hover:border-[#d4a380]/50 ${
                      isVisible("aftercare-content")
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#d4a380] to-[#c19970] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <GuidelineIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-base md:text-lg text-[#64442A] font-medium leading-relaxed flex-1">{guideline.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white via-[#FFF9F0] to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-[#d4a380]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#c19970]/10 rounded-full blur-3xl"></div>
        
        <MaxWidthWrapper>
          <div className="max-w-4xl mx-auto relative z-10 pb-8">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-16 bg-[#d4a380]"></div>
                <span className="text-[#d4a380] text-sm font-semibold uppercase tracking-widest">FAQ</span>
                <div className="h-px w-16 bg-[#d4a380]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#64442A] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#8C6B52]">Everything you need to know about your wedding glow journey</p>
            </div>
            
            {/* Accordion */}
            <Accordion type="single" collapsible className="space-y-4 w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  value={`${index + 1}`}
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-2 border-[#d4a380]/20 rounded-2xl px-6 md:px-10 py-4 data-[state=open]:shadow-[0_10px_40px_rgba(212,163,128,0.25)] data-[state=open]:border-[#d4a380]/60 transition-all duration-300 hover:border-[#d4a380]/40"
                >
                  <AccordionTrigger className="text-[#64442A] text-lg md:text-xl font-bold hover:text-[#d4a380] transition-colors text-left [&[data-state=open]]:text-[#d4a380]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#8C6B52] text-base md:text-lg leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
              <AccordionItem value="dummy" className="border-none" hidden />
            </Accordion>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-[#f5f0eb] overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364442A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#d4a380]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#c19970]/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Main Content */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-[#d4a380]/30">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-16 bg-[#d4a380]"></div>
              <span className="text-[#d4a380] text-sm font-semibold uppercase tracking-widest">Ready to Glow?</span>
              <div className="h-px w-16 bg-[#d4a380]"></div>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl leading-tight font-bold mb-6 text-[#64442A]">
              Begin Your Wedding Glow Journey
            </h2>
            
            {/* Description */}
            <p className="mb-10 text-[#8C6B52] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re the bride or the groom, your skin deserves the very best care before your big day. Book your consultation with The Skin Firm today and let us design a personalised glow plan just for you.
            </p>
            
            {/* CTA Button */}
              <button 
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-3 rounded-2xl px-10 py-5 bg-gradient-to-r from-[#d4a380] to-[#c19970] text-white font-bold text-lg md:text-xl hover:shadow-[0_20px_50px_rgba(212,163,128,0.5)] hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden">
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <span className="relative z-10">Book Your Consultation</span>
                <svg className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-[#d4a380]/20 flex flex-wrap items-center justify-center gap-8 text-[#8C6B52]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4a380]/10 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-[#d4a380]" strokeWidth={2.5} />
                </div>
                <span className="font-semibold">Free Consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4a380]/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#d4a380]" strokeWidth={2.5} />
                </div>
                <span className="font-semibold">Expert Dermatologists</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4a380]/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#d4a380]" strokeWidth={2.5} />
                </div>
                <span className="font-semibold">Personalized Plans</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreWeddingServicesPage;

