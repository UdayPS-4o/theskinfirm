"use client";

import React from "react";

interface SectionDividerProps {
    /**
     * Color of the section above (from color)
     */
    fromColor: string;
    /**
     * Color of the section below (to color)
     */
    toColor: string;
    /**
     * Height of the gradient blend area
     */
    height?: string;
    /**
     * CSS class name
     */
    className?: string;
}

/**
 * Creates a smooth gradient blend between two sections with different background colors
 * Place this between sections to eliminate hard horizontal boundaries
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({
    fromColor,
    toColor,
    height = "120px",
    className = "",
}) => {
    return (
        <div
            className={`w-full ${className}`}
            style={{
                height,
                background: `linear-gradient(to bottom, ${fromColor} 0%, ${toColor} 100%)`,
            }}
        />
    );
};
