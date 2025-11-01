"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";

type SkeletonType = "services" | "service-detail" | null;

interface SkeletonOverlayContextType {
  isVisible: boolean;
  skeletonType: SkeletonType;
  showSkeleton: (type: SkeletonType) => void;
  hideSkeleton: () => void;
}

const SkeletonOverlayContext = createContext<
  SkeletonOverlayContextType | undefined
>(undefined);

export function SkeletonOverlayProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [skeletonType, setSkeletonType] = useState<SkeletonType>(null);
  const skeletonTimerRef = useRef<NodeJS.Timeout | null>(null);

  const showSkeleton = useCallback((type: SkeletonType) => {
    if (skeletonTimerRef.current) {
      clearTimeout(skeletonTimerRef.current);
    }
    skeletonTimerRef.current = setTimeout(() => {
      setSkeletonType(type);
      setIsVisible(true);
    }, 150);
  }, []);

  const hideSkeleton = useCallback(() => {
    if (skeletonTimerRef.current) {
      clearTimeout(skeletonTimerRef.current);
      skeletonTimerRef.current = null;
    }
    setIsVisible(false);
    // Keep the type for a bit during fade out
    setTimeout(() => setSkeletonType(null), 300);
  }, []);

  return (
    <SkeletonOverlayContext.Provider
      value={{ isVisible, skeletonType, showSkeleton, hideSkeleton }}
    >
      {children}
    </SkeletonOverlayContext.Provider>
  );
}

export function useSkeletonOverlay() {
  const context = useContext(SkeletonOverlayContext);
  if (context === undefined) {
    throw new Error(
      "useSkeletonOverlay must be used within a SkeletonOverlayProvider"
    );
  }
  return context;
}

