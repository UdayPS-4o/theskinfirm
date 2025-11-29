import { useEffect, useRef } from "react";

/**
 * Custom hook to handle video autoplay with audio
 * Attempts unmuted autoplay first, falls back to muted if blocked
 */
export function useVideoAutoplay(videoRef: React.RefObject<HTMLVideoElement>) {
    const attemptedAutoplay = useRef(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || attemptedAutoplay.current) return;

        attemptedAutoplay.current = true;

        const attemptAutoplay = async () => {
            try {
                // First, try unmuted autoplay
                video.muted = false;
                await video.play();
                console.log("✅ Unmuted autoplay successful");
                return { success: true, muted: false };
            } catch (error) {
                // If unmuted autoplay fails, try muted autoplay
                console.log("⚠️ Unmuted autoplay blocked, trying muted...");
                try {
                    video.muted = true;
                    await video.play();
                    console.log("✅ Muted autoplay successful");
                    return { success: true, muted: true };
                } catch (mutedError) {
                    console.error("❌ All autoplay attempts failed:", mutedError);
                    return { success: false, muted: true };
                }
            }
        };

        attemptAutoplay();
    }, [videoRef]);
}
