"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface LenisScrollProviderProps {
    children: ReactNode;
}

export const LenisScrollProvider = ({ children }: LenisScrollProviderProps) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            // lerp: 0.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};
