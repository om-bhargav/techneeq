"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: React.PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075, // Keeps your preferred smoothness for desktop
      smoothWheel: true,
      
      // Removed syncTouch, touchMultiplier, and syncTouchLerp
      // Let the browser handle touch interactions natively
      
      // Optional: If you still want JS scrolling on touch, you can use smoothTouch: true,
      // but omitting it entirely (defaulting to native) is the most performant approach.
    });

    let frameId = 0;
    
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    
    frameId = requestAnimationFrame(raf);
    
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);
  
  return <>{children}</>;
}