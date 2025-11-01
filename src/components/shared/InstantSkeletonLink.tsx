"use client";

import { useSkeletonOverlay } from "@/contexts/SkeletonOverlayContext";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback } from "react";

type InstantSkeletonLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  skeletonType?: "services" | "service-detail";
};

export const InstantSkeletonLink = ({
  children,
  href,
  skeletonType,
  ...props
}: InstantSkeletonLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { showSkeleton, isVisible } = useSkeletonOverlay();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (pathname === href.toString() || isVisible) {
        return;
      }

      showSkeleton(skeletonType ?? "services");
      router.push(href.toString());
    },
    [href, isVisible, pathname, router, showSkeleton, skeletonType]
  );

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};
