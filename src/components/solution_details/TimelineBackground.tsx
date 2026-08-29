import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hub: boolean;
  phase: number;
}

const MAX_LINK_DISTANCE = 150;
const MIN_PARTICLES = 40;
const MAX_PARTICLES = 320;
const HUB_EVERY = 9;

function readThemeColors() {
  const styles = getComputedStyle(document.documentElement);
  const read = (name: string, fallback: string) =>
    styles.getPropertyValue(name).trim() || fallback;

  return {
    dot: read("--teal-500", "#3F8986"),
    hub: read("--teal-700", "#1C4D4D"),
    line: read("--teal-300", "#8BBDB8"),
  };
}

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(
    clean.length === 3
      ? clean.split("").map((c) => c + c).join("")
      : clean,
    16
  );
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

export default function TimelineBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let colors = readThemeColors();
    let rafId = 0;
    let scrollY = window.scrollY;

    const createParticles = () => {
      const count = Math.max(
        MIN_PARTICLES,
        Math.min(MAX_PARTICLES, Math.round((width * height) / 16000))
      );

      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.4 + 1.4,
        hub: index % HUB_EVERY === 0,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const dotRgb = hexToRgb(colors.dot);
      const hubRgb = hexToRgb(colors.hub);
      const lineRgb = hexToRgb(colors.line);
      const drift = (scrollY * 0.02) % (height || 1);

      // Connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const ay = a.y - drift;

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const by = b.y - drift;
          const dx = a.x - b.x;
          const dy = ay - by;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_LINK_DISTANCE) {
            const alpha = (1 - dist / MAX_LINK_DISTANCE) * 0.28;
            ctx.strokeStyle = `rgba(${lineRgb.r}, ${lineRgb.g}, ${lineRgb.b}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, ((ay % height) + height) % height);
            ctx.lineTo(b.x, ((by % height) + height) % height);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const drawY = ((p.y - drift) % height + height) % height;
        const pulse = p.hub
          ? 0.6 + Math.sin(time / 900 + p.phase) * 0.25
          : 0.55;

        if (p.hub) {
          const glowRadius = p.r * 6;
          const gradient = ctx.createRadialGradient(
            p.x,
            drawY,
            0,
            p.x,
            drawY,
            glowRadius
          );
          gradient.addColorStop(
            0,
            `rgba(${hubRgb.r}, ${hubRgb.g}, ${hubRgb.b}, ${pulse * 0.35})`
          );
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, drawY, glowRadius, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = `rgba(${hubRgb.r}, ${hubRgb.g}, ${hubRgb.b}, ${pulse})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(p.x, drawY, p.r * 3, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.fillStyle = p.hub
          ? `rgba(${hubRgb.r}, ${hubRgb.g}, ${hubRgb.b}, ${pulse + 0.2})`
          : `rgba(${dotRgb.r}, ${dotRgb.g}, ${dotRgb.b}, ${pulse})`;
        ctx.beginPath();
        ctx.arc(p.x, drawY, p.hub ? p.r * 1.6 : p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (time: number) => {
      draw(time);
      rafId = requestAnimationFrame(loop);
    };

    resize();

    if (prefersReducedMotion) {
      draw(0);
    } else {
      rafId = requestAnimationFrame(loop);
    }

    const handleResize = () => resize();
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const themeObserver = new MutationObserver(() => {
      colors = readThemeColors();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Base atmosphere */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b from-cloud-soft via-background to-background
          dark:from-teal-900 dark:via-background dark:to-background
        "
      />

      {/* Soft radial glow */}
      <div
        className="
          absolute -top-1/4 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2
          rounded-full bg-teal-400/15 blur-[120px]
          dark:bg-teal-400/10
        "
      />

      {/* Faint grid, consistent with the rest of the site */}
      <div
        className="
          absolute inset-0 text-foreground opacity-[0.03]
          [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          [background-size:44px_44px]
        "
      />

      {/* Particle network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      {/* Edge fade so content sections stay legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
    </div>
  );
}
