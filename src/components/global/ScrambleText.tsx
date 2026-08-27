"use client";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrambleText } from "@/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export default function ScrambleText({ text }:{text: string}) {
  const { containerRef,textRef,trailRef} = useScrambleText(text);
  return (
    <span ref={containerRef} className="relative inline-block w-full font-mono uppercase">
      <h4 ref={textRef} className="inline-block w-full">
        {text}
      </h4>
      <h4 
        ref={trailRef} 
        className="absolute left-0 top-0 text-muted-foreground opacity-60 pointer-events-none whitespace-nowrap"
        style={{ opacity: 0 }}
      />
    </span>
  );
}