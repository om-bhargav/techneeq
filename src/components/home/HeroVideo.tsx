"use client";
import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.play().catch(() => {
      /* Low Power Mode or user setting — nothing to do */
    });
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      webkit-playsinline="true"
      preload="auto"
      disableRemotePlayback
      controls={false}
      src="/hero/video1.mp4"
      className="rounded-none! object-cover h-full w-full"
    />
  );
}