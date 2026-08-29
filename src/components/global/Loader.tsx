"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // 'loading' -> 't-out' -> 'wiping'

  // Handle the loading progression and sequence the animations
  useEffect(() => {
    if (progress < 100) {
      // Chunked, delayed increments for a readable mechanical feel on the numbers
      const delay = Math.random() * 200 + 50; 
      const timer = setTimeout(() => {
        setProgress((prev) => {
          const jump = Math.floor(Math.random() * 3) + 1;
          return prev + jump >= 100 ? 100 : prev + jump;
        });
      }, delay);
      
      return () => clearTimeout(timer);
    } else if (progress === 100 && phase === "loading") {
      setPhase("t-out");
      // Wait for the 'T' zoom & fade to finish before triggering the page wipe
      setTimeout(() => setPhase("wiping"), 900);
    }
  }, [progress, phase]);

  const digits = String(progress).padStart(3, "0").split("");

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-foreground flex items-center justify-center pointer-events-none"
      variants={{
        initial: {
          scaleY: 1,
          transformOrigin: "top",
        },
        animate: {
          scaleY: 0,
          transformOrigin: "bottom", // Slides up to reveal the page
          transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          },
        },
        exit: {
          scaleY: 1,
          transformOrigin: "bottom",
          transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          },
        },
      }}
      initial="initial"
      // Triggers the background slide wipe when the phase hits 'wiping'
      animate={phase === "wiping" ? "animate" : "initial"}
    >
      {/* --- CENTER LOGO --- */}
      <motion.div
        className="relative w-32 h-32"
        animate={
          phase === "t-out" || phase === "wiping"
            ? { scale: 100, opacity: 0 } // Massively scales, but fades at the end
            : { scale: 1, opacity: 1 }
        }
        transition={{
          // Zoom takes 0.8s
          scale: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          // Fade out starts slightly delayed (0.5s) so you feel the zoom first
          opacity: { duration: 0.3, delay: 0.5, ease: "linear" },
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M 10 10 H 90 V 30 H 60 V 90 H 40 V 30 H 10 Z"
            className="fill-gray-600/50"
          />
          <g clipPath="url(#t-clip)">
            <path
              d="M 10 10 H 90 V 30 H 60 V 90 H 40 V 30 H 10 Z"
              className="fill-background"
            />
          </g>
          <defs>
            <clipPath id="t-clip">
              {/* motion.rect smoothly interpolates the chunks to create a liquid fill */}
              <motion.rect
                x="0"
                width="100"
                animate={{ 
                  y: 100 - progress, 
                  height: progress 
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeOut" 
                }}
              />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      {/* --- BOTTOM LEFT COUNTER --- */}
      <div
        className="absolute bottom-8 left-8 flex text-background font-mono text-6xl font-bold overflow-hidden h-[1.2em]"
        style={{
          // Fade numbers out immediately when 'T' starts zooming
          opacity: phase === "loading" ? 1 : 0, 
          transition: "opacity 0.3s",
        }}
      >
        {digits.map((digit, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i} 
              className="relative w-[0.6em] h-full flex justify-center"
            >
              <AnimatePresence mode="popLayout">
                <motion.h2
                  key={digit} 
                  initial={{ y: isEven ? "100%" : "-100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: isEven ? "-100%" : "100%", opacity: 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute"
                >
                  {digit}
                </motion.h2>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}