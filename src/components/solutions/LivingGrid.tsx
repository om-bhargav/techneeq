import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { getGridTier, livingGrid, type GridTier } from "@/lib/livinggrid";

const LivingGridScene = lazy(() => import("./LivingGridScene"));

function hasWebgl() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

/** Never an empty canvas: a static silk-grey gradient with soft dune bands. */
function StaticGrid({ calm, hidden }: { calm: boolean; hidden: boolean }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-out"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <div className="absolute inset-0 bg-background" />
      <div
        className="lg-static-grid absolute inset-0"
        style={{ opacity: calm ? 0.42 : 0.7 }}
      />
    </div>
  );
}

function Live({
  calm,
  onLive,
}: {
  calm: boolean;
  onLive: (live: boolean) => void;
}) {
  const [tier, setTier] = useState<GridTier | null>(null);
  const host = useRef<HTMLDivElement>(null);

  // Only re-render when the tier genuinely changes, so the scene
  // doesn't remount (and flash) on every resize tick.
  const applyTier = useCallback((next: GridTier) => {
    setTier((prev) => (prev === next ? prev : next));
  }, []);

  useEffect(() => {
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    livingGrid.reduced = reducedQuery.matches;

    const onReducedChange = (e: MediaQueryListEvent) => {
      livingGrid.reduced = e.matches;
    };
    reducedQuery.addEventListener("change", onReducedChange);

    if (!hasWebgl()) {
      return () => reducedQuery.removeEventListener("change", onReducedChange);
    }

    // Defer past first paint without an arbitrary 350ms stall.
    let idleId = 0;
    let rafId = 0;
    const start = () => applyTier(getGridTier(window.innerWidth));

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(start, { timeout: 400 });
    } else {
      rafId = (window as Window).requestAnimationFrame(() =>
        window.requestAnimationFrame(start),
      );
    }

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(
        () => applyTier(getGridTier(window.innerWidth)),
        180,
      );
    };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });

    const fine = window.matchMedia("(pointer: fine)").matches;
    const onPointer = (e: PointerEvent) => {
      if (livingGrid.reduced) return;
      livingGrid.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      livingGrid.pointerY = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    if (fine) {
      window.addEventListener("pointermove", onPointer, { passive: true });
    }

    return () => {
      reducedQuery.removeEventListener("change", onReducedChange);
      if (idleId) window.cancelIdleCallback?.(idleId);
      if (rafId) window.cancelAnimationFrame(rafId);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [applyTier]);

  // Stop rendering when the background is off-screen.
  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        livingGrid.active = entry?.isIntersecting ?? true;
      },
      { rootMargin: "10%" },
    );
    io.observe(el);

    const onVisibility = () => {
      livingGrid.active = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      livingGrid.active = true;
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    onLive(tier !== null);
    return () => onLive(false);
  }, [tier, onLive]);

  return (
    <div ref={host} className="absolute inset-0">
      {tier && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 animate-[fade-in_1.6s_ease-out_both]">
            <LivingGridScene tier={tier} calm={calm} />
          </div>
        </Suspense>
      )}
    </div>
  );
}

/**
 * One persistent, continuous landscape behind the whole page.
 * Content stays in HTML above it — nothing essential lives in the canvas.
 */
export function LivingGrid({ calm = false }: { calm?: boolean }) {
  const [live, setLive] = useState(false);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      data-living-grid="true"
    >
      {/* Crossfades out once the real scene is up, instead of hazing it. */}
      <StaticGrid calm={calm} hidden={live} />

      <Suspense fallback={null}>
        <Live calm={calm} onLive={setLive} />
      </Suspense>

      {/* Vignette: hold the centre fully clear, fade only at the edges. */}
      <div className="absolute inset-0 bg-[radial-gradient(115%_80%_at_50%_45%,transparent_0%,transparent_52%,color-mix(in_oklab,var(--background)_72%,transparent)_78%,var(--background)_100%)]" />
    </div>
  );
}