"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useSkeletonOverlay } from "@/contexts/SkeletonOverlayContext";
import ServicePageSkeleton from "@/app/(app)/services/ServicePageSkeleton";
import AnimatedServicePageSkeleton from "@/app/(app)/[service]/AnimatedServicePageSkeleton";

export function SkeletonOverlay() {
  const { isVisible, skeletonType, hideSkeleton } = useSkeletonOverlay();
  const pathname = usePathname();

  // Hide skeleton when route changes (content is ready)
  useEffect(() => {
    hideSkeleton();
  }, [pathname, hideSkeleton]);

  if (!isVisible || typeof window === "undefined") {
    return null;
  }

  const overlay = (
    <div
      className="fixed inset-0 z-[9999] bg-white animate-in fade-in duration-150"
      style={{ isolation: "isolate" }}
    >
      {skeletonType === "services" && <ServicePageSkeleton />}
      {skeletonType === "service-detail" && <AnimatedServicePageSkeleton />}
    </div>
  );

  return createPortal(overlay, document.body);
}

