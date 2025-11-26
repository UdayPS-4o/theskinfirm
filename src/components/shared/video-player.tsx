"use client";

import React, { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
    src: string;
    className?: string;
    style?: React.CSSProperties;
    objectPosition?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    className = "",
    style = {},
    objectPosition = "center 40%",
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    // Load mute preference from localStorage on mount
    useEffect(() => {
        const savedMutePreference = localStorage.getItem("videoMuted");
        if (savedMutePreference !== null) {
            const mutedValue = savedMutePreference === "true";
            setIsMuted(mutedValue);
            if (videoRef.current) {
                videoRef.current.muted = mutedValue;
            }
        }
    }, []);

    // Intersection Observer to pause/play video when out of/in view
    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                    if (entry.isIntersecting) {
                        videoElement.play().catch((err) => {
                            console.log("Video play error:", err);
                        });
                    } else {
                        videoElement.pause();
                    }
                });
            },
            {
                threshold: 0.5, // Video is considered visible when 50% is in view
            }
        );

        observer.observe(videoElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            const newMutedState = !isMuted;
            setIsMuted(newMutedState);
            videoRef.current.muted = newMutedState;

            // Save preference to localStorage
            localStorage.setItem("videoMuted", newMutedState.toString());
        }
    };

    return (
        <div className="relative w-full h-full">
            <video
                ref={videoRef}
                className={className}
                style={{ objectPosition, ...style }}
                loop
                playsInline
                src={src}
            />

            {/* Mute/Unmute Button */}
            {isVisible && (
                <button
                    onClick={toggleMute}
                    className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110 z-10"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                    {isMuted ? (
                        <VolumeX className="w-5 h-5 text-[#4A4036]" />
                    ) : (
                        <Volume2 className="w-5 h-5 text-[#4A4036]" />
                    )}
                </button>
            )}
        </div>
    );
};
