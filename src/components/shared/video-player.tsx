"use client";

import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

interface VideoPlayerProps {
    src: string;
    className?: string;
    objectPosition?: string;
    posterImage?: string; // Optional poster image for mobile
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    className = "",
    objectPosition = "center",
    posterImage,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(false); // Start unmuted - we'll attempt autoplay with audio
    const [videoReady, setVideoReady] = useState(false);

    // Attempt autoplay with audio on mount
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Function to attempt unmuted autoplay
        const attemptAutoplay = async () => {
            try {
                // First, try unmuted autoplay
                video.muted = false;
                await video.play();
                setIsMuted(false);
                console.log("✅ Unmuted autoplay successful");
            } catch (error) {
                // If unmuted autoplay fails, try muted autoplay
                console.log("⚠️ Unmuted autoplay blocked, trying muted...");
                try {
                    video.muted = true;
                    await video.play();
                    setIsMuted(true);
                    console.log("✅ Muted autoplay successful");
                } catch (mutedError) {
                    console.error("❌ All autoplay attempts failed:", mutedError);
                }
            }
        };

        const handleCanPlayThrough = () => {
            setVideoReady(true);
        };

        video.addEventListener('canplaythrough', handleCanPlayThrough);

        // Check if video is already ready (cached)
        if (video.readyState >= 3) {
            setVideoReady(true);
        }

        attemptAutoplay();

        return () => {
            video.removeEventListener('canplaythrough', handleCanPlayThrough);
        };
    }, []);

    // Pause video when out of viewport
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Video is in viewport - play it
                        video.play().catch((err) => {
                            console.log("Play failed:", err);
                        });
                    } else {
                        // Video is out of viewport - pause it
                        video.pause();
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of video is visible
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    // Toggle mute when clicking anywhere on the video
    const handleVideoClick = () => {
        if (videoRef.current) {
            const newMutedState = !isMuted;
            setIsMuted(newMutedState);
            videoRef.current.muted = newMutedState;
        }
    };

    return (
        <div className="relative w-full h-full cursor-pointer bg-[#FBEDE4]" onClick={handleVideoClick}>
            {/* Poster Image for Mobile - Rendered on Server for LCP */}
            {posterImage && (
                <div
                    className={`absolute inset-0 z-10 md:hidden transition-opacity duration-500 ${videoReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <Image
                        src={posterImage}
                        alt="Video poster"
                        fill
                        className="object-cover"
                        style={{ objectPosition }}
                        priority
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 1px"
                    />
                </div>
            )}

            {/* Video Element */}
            <video
                ref={videoRef}
                className={className}
                style={{ objectPosition }}
                loop
                playsInline
                preload="auto"
                src={src}
            />

            {/* Mute/Unmute Indicator (floating badge) */}
            <div className="absolute bottom-4 right-4 bg-black/80 hover:bg-black/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 z-20 pointer-events-none shadow-lg">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </div>
        </div>
    );
};
