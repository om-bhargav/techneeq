"use client";
import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { useAnimationFrame } from "framer-motion";

export default function SmoothScroll({
  children,
}: React.PropsWithChildren) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      // We keep touch properties completely removed here.
      // Letting mobile devices handle touch scrolling natively is critical
      // when your page is also busy running Framer Motion calculations.
    });

    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  // This replaces the standard requestAnimationFrame.
  // It hooks Lenis directly into Framer Motion's render loop,
  // eliminating micro-stutters during complex layout animations.
  useAnimationFrame((time) => {
    if (lenis) {
      lenis.raf(time);
    }
  });

  return <>{children}</>;
}