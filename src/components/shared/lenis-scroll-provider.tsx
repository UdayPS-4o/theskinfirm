"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

interface LenisScrollProviderProps {
    children: ReactNode;
}

export const LenisScrollProvider = ({ children }: LenisScrollProviderProps) => {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    // Initialize Lenis
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // Reset scroll position on route change
    useEffect(() => {
        if (lenisRef.current) {
            // Scroll to top immediately on navigation
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return <>{children}</>;
};
