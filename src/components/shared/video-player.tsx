"use client";

import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
    src: string;
    className?: string;
    objectPosition?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    className = "",
    objectPosition = "center",
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay compatibility
    const [isVisible, setIsVisible] = useState(false);

    // Autoplay video on mount (must be muted for autoplay to work)
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Try to load saved preference, default to muted
        const savedMutePreference = localStorage.getItem("videoMuted");
        const shouldBeMuted = savedMutePreference !== "false"; // Default to muted

        setIsMuted(shouldBeMuted);
        video.muted = shouldBeMuted;

        // Autoplay (muted to ensure it works)
        video.play().catch((e) => console.error("Autoplay failed:", e));
    }, []);

    // Intersection Observer to pause/play video when out of/in view
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hasPlayedOnce = false;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);

                    // On initial load, the video should be playing already from the first useEffect
                    // Only control play/pause when scrolling after initial load
                    if (!hasPlayedOnce) {
                        hasPlayedOnce = true;
                        return;
                    }

                    if (entry.isIntersecting) {
                        video.play().catch(() => {
                            // Play failed, might need user interaction
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.1 } // Lower threshold so it starts playing sooner
        );

        observer.observe(video);

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
                style={{ objectPosition }}
                loop
                playsInline
                src={src}
            />

            {/* Mute/Unmute Button */}
            {isVisible && (
                <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 z-10"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
            )}
        </div>
    );
};
