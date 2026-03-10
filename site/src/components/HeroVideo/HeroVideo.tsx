"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroVideo.module.css";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      video.pause();
    }
  }, []);

  return (
    <div className={styles.videoWrap}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="/legacy-assets/videos/P-xel_Hero.webm"
          type="video/webm"
        />
      </video>
    </div>
  );
}
