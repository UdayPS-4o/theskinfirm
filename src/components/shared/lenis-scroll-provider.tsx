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

        // Handle hash changes (for same-page anchor navigation)
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const targetElement = document.querySelector(hash) as HTMLElement;
                if (targetElement && lenisRef.current) {
                    lenisRef.current.scrollTo(targetElement, {
                        offset: 0,
                        duration: 1.2
                    });
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // Reset scroll position on route change or handle hash navigation
    useEffect(() => {
        if (lenisRef.current) {
            // Check if there's a hash in the URL
            const hash = window.location.hash;

            if (hash) {
                // Wait a brief moment for the DOM to be ready
                setTimeout(() => {
                    const targetElement = document.querySelector(hash) as HTMLElement;
                    if (targetElement && lenisRef.current) {
                        lenisRef.current.scrollTo(targetElement, {
                            offset: 0,
                            duration: 1.2
                        });
                    }
                }, 100);
            } else {
                // Scroll to top immediately on navigation when no hash
                lenisRef.current.scrollTo(0, { immediate: true });
            }
        }
    }, [pathname]);

    return <>{children}</>;
};
