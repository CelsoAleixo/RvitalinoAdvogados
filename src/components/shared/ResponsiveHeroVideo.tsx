import { useRef, useEffect, useState } from "react";

interface ResponsiveHeroVideoProps {
  mp4Src: string;
  webmSrc?: string;
  posterImage?: string;
  className?: string;
  overlayClassName?: string;
  playbackRate?: number;
}

/**
 * ResponsiveHeroVideo - Optimized video component for hero sections
 * - Prefers WebM for better compression (30-50% smaller than MP4)
 * - Falls back to MP4 for iOS Safari compatibility
 * - Poster image for instant visual feedback
 * - Reduced motion support for accessibility
 * - Lazy video loading on scroll
 */
export function ResponsiveHeroVideo({
  mp4Src,
  webmSrc,
  posterImage,
  className = "",
  overlayClassName = "",
  playbackRate = 1.0,
}: ResponsiveHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Lazy load video when in viewport
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Set playback rate
  useEffect(() => {
    if (videoRef.current && isInView) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [isInView, playbackRate]);

  // Show static poster for reduced motion preference
  if (prefersReducedMotion && posterImage) {
    return (
      <div ref={containerRef} className={`absolute inset-0 z-0 ${className}`}>
        <img
          src={posterImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 ${className}`}>
      {isInView ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={posterImage}
          className="w-full h-full object-cover video-enhance"
          aria-hidden="true"
        >
          {/* WebM first for browsers that support it (Chrome, Firefox, Edge) */}
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {/* MP4 fallback for Safari/iOS */}
          <source src={mp4Src} type="video/mp4" />
        </video>
      ) : (
        posterImage && (
          <img
            src={posterImage}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        )
      )}
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </div>
  );
}
