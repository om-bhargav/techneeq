import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useDarkSection } from "@/hooks/useDarkSection";

/* -------------------------------------------------------------------------
   Blob-bounce background
   A dot grid rendered to canvas that reacts to the cursor, to click ripples
   and to a blob drifting around the viewport, bouncing off the edges.
   ---------------------------------------------------------------------- */

type Dot = { ox: number; oy: number; dx: number; dy: number; scale: number };
type Ripple = { x: number; y: number; radius: number; age: number; hue: number };
type EdgeFlash = {
  axis: "x" | "y";
  pos: number;
  center: number;
  life: number;
  boost: number;
  hue: number;
  hue2: number;
};

/* the three ellipses that approximate the blob, in svg units */
const BLOB_SHAPE = [
  { cx: 46, cy: 28, rx: 46, ry: 29 },
  { cx: 65, cy: 76, rx: 27, ry: 22 },
  { cx: 16, cy: 80, rx: 16, ry: 18 },
];

const TAU = Math.PI * 2;
const DEFLECT = (12 * Math.PI) / 180;
const BG = "#012526";
const MAX_PUSH = 5.52;

function BlobBounceBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<SVGSVGElement>(null);
  const dotsRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef(0);


  useEffect(() => {
    const wrap = wrapRef.current;
    const blob = blobRef.current;
    const dotsCanvas = dotsRef.current;
    const cursorCanvas = cursorRef.current;
    if (!wrap || !blob || !dotsCanvas || !cursorCanvas) return;

    const ctx = dotsCanvas.getContext("2d");
    const cur = cursorCanvas.getContext("2d");
    if (!ctx || !cur) return;

    /* --- size-derived constants, recomputed on resize --- */
    let scale = 0.25;
    let blobW = 0;
    let blobH = 0;
    let unit = 0; // svg unit -> px
    let spacing = 0;
    let dotR = 0;
    let blobPad = 0;
    let cursorR = 0;
    let rippleR = 0;
    let speed = 98.7;

    function measure() {
      scale = Math.max(Math.min((wrap!.clientWidth || 0) / 800, 1), 0.25);
      blobW = Math.round(100 * scale);
      blobH = Math.round(105 * scale);
      unit = blobW / 93;
      spacing = Math.round(22 * scale);
      dotR = 1.5 * scale;
      blobPad = 48.4 * scale;
      cursorR = 70 * scale;
      rippleR = 2 * cursorR;
      speed = 98.7 * scale * 1.15;
      blob!.style.width = `${blobW}px`;
    }
    measure();

    /* --- animation state --- */
    let bx = Math.random() * Math.max(1, wrap.clientWidth - blobW);
    let by = Math.random() * Math.max(1, wrap.clientHeight - blobH);
    let vx = speed;
    let vy = speed;
    let lastX = -1;
    let lastY = -1;
    let dots: Dot[] = [];
    let prevTime: number | null = null;
    let mouseX = -999;
    let mouseY = -999;
    let energy = 0;
    let boost = 1;
    const ripples: Ripple[] = [];
    const flashes: EdgeFlash[] = [];
    let blobHue = 0;
    let cursorVel = 0;
    let cursorSpring = 0;

    const toLocal = (cx: number, cy: number) => {
      const r = wrap.getBoundingClientRect();
      return { x: cx - r.left, y: cy - r.top };
    };

    const onMove = (e: MouseEvent) => {
      const { x, y } = toLocal(e.clientX, e.clientY);
      const dx = x - mouseX;
      const dy = y - mouseY;
      mouseX = x;
      mouseY = y;
      const next = Math.min(Math.sqrt(dx * dx + dy * dy) / 15, 1);
      if (next > energy) energy = next;
    };

    const onClick = (e: MouseEvent) => {
      const { x, y } = toLocal(e.clientX, e.clientY);
      ripples.push({ x, y, radius: 0, age: 0, hue: (Math.random() * 360) | 0 });
      cursorVel = 0.6;
      if (pausedRef.current) return;

      /* a click near the blob nudges it off course */
      const cx = bx + blobW / 2;
      const cy = by + blobH / 2;
      const ox = cx - x;
      const oy = cy - y;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (ox * ox + oy * oy >= rippleR * rippleR) return;

      const angle = Math.atan2(vy, vx);
      const mag = Math.sqrt(vx * vx + vy * vy);
      const side = Math.sign(-(ox * Math.sin(angle)) + oy * Math.cos(angle));
      const nearV = cy < 2 * blobH || cy > h - 2 * blobH;
      const nearH = cx < 2 * blobW || cx > w - 2 * blobW;
      const cornered =
        ((nearH && ((vx < 0 && cx < 2 * blobW) || (vx > 0 && cx > w - 2 * blobW))) ||
          (nearV && ((vy < 0 && cy < 2 * blobH) || (vy > 0 && cy > h - 2 * blobH)))) &&
        ((vx > 0 && x < cx) || (vx < 0 && x > cx) || (vy > 0 && y < cy) || (vy < 0 && y > cy));
      const turned = angle + (cornered ? (75 * Math.PI) / 180 : DEFLECT) * side;
      vx = Math.cos(turned) * mag;
      vy = Math.sin(turned) * mag;
      boost = 1.15;
      blobHue = (Math.random() * 360) | 0;
    };

    function buildGrid() {
      dots = [];
      const cols = Math.ceil(wrap!.clientWidth / spacing) + 1;
      const rows = Math.ceil(wrap!.clientHeight / spacing) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ ox: c * spacing, oy: r * spacing, dx: 0, dy: 0, scale: 1 });
        }
      }
    }

    function layout() {
      measure();
      const w = wrap!.clientWidth;
      const h = wrap!.clientHeight;
      dotsCanvas!.width = cursorCanvas!.width = w;
      dotsCanvas!.height = cursorCanvas!.height = h;
      buildGrid();
      bx = Math.min(bx, Math.max(0, w - blobW));
      by = Math.min(by, Math.max(0, h - blobH));
    }
    layout();

    /* distance-to-blob falloff: 0 inside the blob, 1 well outside */
    function blobMask(x: number, y: number) {
      let nearest = Infinity;
      for (const s of BLOB_SHAPE) {
        const nx = (x - s.cx) / s.rx;
        const ny = (y - s.cy) / s.ry;
        const d = Math.sqrt(nx * nx + ny * ny) - 1;
        if (d <= 0) return 0;
        const px = d * Math.min(s.rx, s.ry) * unit;
        if (px < nearest) nearest = px;
      }
      return nearest >= blobPad ? 1 : nearest / blobPad;
    }

    function drawFlash(f: EdgeFlash) {
      const t = f.life * f.life * (0.85 + (f.boost - 1) * 3);
      const hue = (f.hue + (1 - f.life) * 720) % 360;
      const reach = 2.1 * blobW;
      const squash = 12.6 / reach;
      const g = ctx!.createRadialGradient(0, 0, 0, 0, 0, reach);
      g.addColorStop(0, `hsla(${hue},76%,95%,${Math.min(1.1 * t, 1).toFixed(3)})`);
      g.addColorStop(0.25, `hsla(${(hue + 120) % 360},67%,90%,${t.toFixed(3)})`);
      g.addColorStop(0.55, `hsla(${f.hue2},59%,82%,${(0.6 * t).toFixed(3)})`);
      g.addColorStop(1, `hsla(${(f.hue2 + 40) % 360},48%,60%,0)`);
      ctx!.fillStyle = g;
      if (f.axis === "y") {
        ctx!.translate(f.center, f.pos);
        ctx!.scale(1, squash);
        ctx!.fillRect(-reach, f.pos === 0 ? 0 : -reach, 2 * reach, reach);
      } else {
        ctx!.translate(f.pos, f.center);
        ctx!.scale(squash, 1);
        ctx!.fillRect(f.pos === 0 ? 0 : -reach, -reach, reach, 2 * reach);
      }
    }

    const observer = new ResizeObserver(() => layout());
    observer.observe(wrap);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    const frame = (time: number) => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (w < 1 || h < 1) {
        rafRef.current = requestAnimationFrame(frame);
        return;
      }
      if (prevTime === null) prevTime = time;
      const dt = Math.min((time - prevTime) / 1000, 0.05);
      prevTime = time;

      energy *= 0.97;
      boost += (1 - boost) * 0.03;

      if (!pausedRef.current) {
        bx += vx * dt * boost;
        by += vy * dt * boost;
        const flash = (axis: "x" | "y", pos: number, center: number) =>
          flashes.push({
            axis,
            pos,
            center,
            life: 1,
            boost,
            hue: (Math.random() * 360) | 0,
            hue2: (Math.random() * 360) | 0,
          });

        if (bx <= 0) {
          bx = 0;
          vx = Math.abs(vx);
          flash("x", 0, by + blobH / 2);
        } else if (bx + blobW >= w) {
          bx = w - blobW;
          vx = -Math.abs(vx);
          flash("x", w, by + blobH / 2);
        }
        if (by <= 0) {
          by = 0;
          vy = Math.abs(vy);
          flash("y", 0, bx + blobW / 2);
        } else if (by + blobH >= h) {
          by = h - blobH;
          vy = -Math.abs(vy);
          flash("y", h, bx + blobW / 2);
        }
        if (bx !== lastX || by !== lastY) {
          blob.style.left = `${bx}px`;
          blob.style.top = `${by}px`;
          lastX = bx;
          lastY = by;
        }
      }

      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, dotsCanvas.width, dotsCanvas.height);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.age += 0.045;
        if (r.age >= 1) ripples.splice(i, 1);
        else r.radius = rippleR * (1 - Math.pow(1 - r.age, 3));
      }

      const reach = blobPad + blobW;
      const ringW = 0.15 * rippleR;
      const mag = Math.sqrt(vx * vx + vy * vy) || 1;
      const backX = -vx / mag;
      const backY = -vy / mag;
      const trail = 22 * Math.max(0, boost - 1);

      for (const dot of dots) {
        const mx = dot.ox - mouseX;
        const my = dot.oy - mouseY;
        const md = Math.sqrt(mx * mx + my * my);
        let tx = 0;
        let ty = 0;
        let ring = 0;
        let ringHue = 0;

        if (md < cursorR && md > 0 && energy > 0.01) {
          const push = (1 - md / cursorR) * MAX_PUSH * energy;
          tx = (mx / md) * push;
          ty = (my / md) * push;
        }

        for (const r of ripples) {
          const rx = dot.ox - r.x;
          const ry = dot.oy - r.y;
          const rd = Math.sqrt(rx * rx + ry * ry);
          const band = Math.abs(rd - r.radius);
          if (band < ringW && rd > 0) {
            const strength = (1 - band / ringW) * (1 - r.age);
            tx += (rx / rd) * strength * 12.144;
            ty += (ry / rd) * strength * 12.144;
            if (strength > ring) {
              ring = strength;
              ringHue = r.hue;
            }
          }
        }

        const ease =
          Math.abs(tx) + Math.abs(ty) > Math.abs(dot.dx) + Math.abs(dot.dy) ? 0.25 : 0.02;
        dot.dx += (tx - dot.dx) * ease;
        dot.dy += (ty - dot.dy) * ease;

        const near =
          dot.ox >= bx - reach &&
          dot.ox <= bx + blobW + reach &&
          dot.oy >= by - reach &&
          dot.oy <= by + blobH + reach;
        const target = near ? blobMask((dot.ox - bx) / unit, (dot.oy - by) / unit) : 1;
        dot.scale += (target - dot.scale) * (target < dot.scale ? 0.2 : 0.08);
        if (dot.scale <= 0.01) continue;

        const disp = Math.sqrt(dot.dx * dot.dx + dot.dy * dot.dy);
        const heat = Math.max(
          Math.min(disp / MAX_PUSH, 1) * Math.max(energy, ring),
          1.5 * ring,
        );

        if (heat > 0.02) {
          const hue =
            (((((Math.atan2(dot.dy, dot.dx) / TAU) * 360 + 360) % 360) + ringHue) % 360) | 0;
          ctx.fillStyle = `hsla(${hue},${(103 * Math.min(disp / MAX_PUSH, 1)) | 0}%,${
            (55 + 34 * heat) | 0
          }%,${Math.min(0.2 + 1.27 * heat, 1).toFixed(2)})`;
          ctx.beginPath();
          ctx.arc(dot.ox + dot.dx, dot.oy + dot.dy, dotR * dot.scale * (1 + 0.8 * heat), 0, TAU);
          ctx.fill();
        } else if (trail > 0.01) {
          const rx = dot.ox - (bx + blobW / 2);
          const ry = dot.oy - (by + blobH / 2);
          const along = rx * backX + ry * backY;
          const across = rx * backY - ry * backX;
          const wake =
            along > 0 && along < 3 * blobW
              ? trail *
                Math.exp(-along / (0.9 * blobW)) *
                Math.exp(-(across * across) / (0.3 * blobW * blobW * 0.3))
              : 0;
          if (wake > 0.015) {
            ctx.fillStyle = `hsla(${blobHue},80%,82%,${Math.min(0.2 + 1.2 * wake, 1).toFixed(2)})`;
            ctx.beginPath();
            ctx.arc(dot.ox, dot.oy, dotR * dot.scale * (1 + 0.5 * wake), 0, TAU);
          } else {
            ctx.fillStyle = "rgba(255,255,255,0.2)";
            ctx.beginPath();
            ctx.arc(dot.ox + dot.dx, dot.oy + dot.dy, dotR * dot.scale, 0, TAU);
          }
          ctx.fill();
        } else {
          ctx.fillStyle = "rgba(255,255,255,0.2)";
          ctx.beginPath();
          ctx.arc(dot.ox + dot.dx, dot.oy + dot.dy, dotR * dot.scale, 0, TAU);
          ctx.fill();
        }
      }

      /* fade the grid out into the bottom of the section */
      const fade = ctx.createLinearGradient(0, 0.7 * dotsCanvas.height, 0, dotsCanvas.height);
      fade.addColorStop(0, "rgba(23,23,28,0)");
      fade.addColorStop(1, "rgba(23,23,28,1)");
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0.7 * dotsCanvas.height, dotsCanvas.width, 0.3 * dotsCanvas.height);

      for (let i = flashes.length - 1; i >= 0; i--) {
        const f = flashes[i];
        f.life -= 0.0126;
        if (f.life <= 0) {
          flashes.splice(i, 1);
          continue;
        }
        ctx.save();
        drawFlash(f);
        ctx.restore();
      }

      /* springy custom cursor */
      cursorVel += -(0.18 * cursorSpring);
      cursorVel *= 0.55;
      cursorSpring += cursorVel;

      cur.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
      if (mouseX > -900) {
        const last = ripples.length > 0 ? ripples[ripples.length - 1] : null;
        const hue = last ? last.hue : trail > 0.01 ? blobHue : -1;
        const stroke = hue >= 0 ? `hsla(${hue},80%,80%,` : "rgba(255,255,255,";
        const size = 27 + 10 * cursorSpring;
        const arm = 8 + 3 * cursorSpring;
        cur.save();
        cur.translate(mouseX, mouseY);
        cur.strokeStyle = `${stroke}0.75)`;
        cur.lineWidth = 1.5;
        for (const [sx, sy] of [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ]) {
          cur.beginPath();
          cur.moveTo(sx * size, sy * (size - arm));
          cur.lineTo(sx * size, sy * size);
          cur.lineTo(sx * (size - arm), sy * size);
          cur.stroke();
        }
        cur.restore();
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <div
        ref={wrapRef}
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[#012526]"
        aria-hidden
      >
        <canvas ref={dotsRef} className="absolute left-0 top-0" />
        <canvas ref={cursorRef} className="absolute left-0 top-0 z-[20]" />
        <svg
          ref={blobRef}
          className="absolute z-[10] h-auto"
          viewBox="0 0 93 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
         
        </svg>
      </div>
    </div>
  );
}

export default function NotFound() {
  const containerRef = useRef(null);
  useDarkSection(containerRef);
  return (
    <section ref={containerRef} className="relative flex min-h-[100dvh] w-full cursor-none flex-col items-center justify-center overflow-hidden px-4 py-24 text-white md:py-40 [&_*]:cursor-none">
      <BlobBounceBackground />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[30] flex flex-col items-center justify-center gap-4 text-center"
      >
        <p className="mb-6 font-mono text-[13px] font-semibold uppercase leading-[1.2] tracking-[-0.02em] text-white sm:w-3/4">
          404 error
        </p>

        <p className="mb-4 font-heading text-[clamp(2.1rem,6vw,4.5rem)] leading-[1.1] tracking-[-0.04em] text-white sm:w-3/4 lg:mb-9">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <span className="inline-block [&_*]:!cursor-pointer">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#F0FFFF] px-8 py-4 font-sans text-[16px] leading-none text-[#012526] transition-colors duration-300 hover:text-[#006D6F] lg:text-[18px]"
          >
            Go back home
          </Link>
        </span>
      </motion.div>
    </section>
  );
}
