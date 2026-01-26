import { useRef, useEffect, useState } from "react";

interface ResponsiveHeroVideoProps {
  mp4Src: string;
  webmSrc?: string;
  posterImage?: string;
  className?: string;
  overlayClassName?: string;
  playbackRate?: number;
  /** If true, loads video immediately without waiting for intersection */
  priority?: boolean;
}

/**
 * ResponsiveHeroVideo - Optimized video component for hero sections
 * - Prefers WebM for better compression (30-50% smaller than MP4)
 * - Falls back to MP4 for iOS Safari compatibility
 * - Poster image for instant visual feedback
 * - Reduced motion support for accessibility
 * - Priority loading for above-the-fold videos
 * - Preload metadata for faster playback start
 */
export function ResponsiveHeroVideo({
  mp4Src,
  webmSrc,
  posterImage,
  className = "",
  overlayClassName = "",
  playbackRate = 1.0,
  priority = false,
}: ResponsiveHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(priority);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Lazy load video when in viewport (only if not priority)
  useEffect(() => {
    if (priority || !containerRef.current) {
      setIsReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Set playback rate and handle video ready state
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isReady) return;

    video.playbackRate = playbackRate;

    // Handle canplaythrough for smoother playback
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      video.play().catch(() => {
        // Autoplay was prevented, user interaction needed
      });
    };

    video.addEventListener("canplaythrough", handleCanPlay);
    
    // If already ready (cached), trigger immediately
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => video.removeEventListener("canplaythrough", handleCanPlay);
  }, [isReady, playbackRate]);

  // Show static poster for reduced motion preference
  if (prefersReducedMotion && posterImage) {
    return (
      <div ref={containerRef} className={`absolute inset-0 z-0 ${className}`}>
        <img
          src={posterImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
        />
        {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 ${className}`}>
      {/* Always show poster as background for instant visual */}
      {posterImage && (
        <img
          src={posterImage}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
          loading="eager"
          fetchPriority={priority ? "high" : "auto"}
        />
      )}
      
      {isReady && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={posterImage}
          className={`absolute inset-0 w-full h-full object-cover video-enhance transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          {/* WebM first for browsers that support it (Chrome, Firefox, Edge) */}
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {/* MP4 fallback for Safari/iOS */}
          <source src={mp4Src} type="video/mp4" />
        </video>
      )}
      
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </div>
  );
}
