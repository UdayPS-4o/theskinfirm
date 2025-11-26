"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedContentProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export const AnimatedContent = ({
    children,
    delay = 0,
    className = ""
}: AnimatedContentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.22, 1, 0.36, 1] // Custom easing for smooth animation
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const AnimatedFadeIn = ({
    children,
    delay = 0,
    className = ""
}: AnimatedContentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface StaggeredChildrenProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export const StaggeredChildren = ({
    children,
    className = "",
    staggerDelay = 0.1
}: StaggeredChildrenProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className = ""
}: { children: ReactNode; className?: string }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                    }
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
