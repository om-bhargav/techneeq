/**
 * Shared, mutable state for the "Living Grid" background on /home-2.
 *
 * ScrollTrigger and pointer listeners write here; the WebGL render loop reads
 * it every frame. No React state, so scrolling never causes a re-render.
 */
export type GridBias = {
  /** highly structured, orthogonal (Data Engineering) */
  structure: number;
  /** pronounced peaks and valleys (Analytics) */
  peaks: number;
  /** restless, adaptive motion (AI / ML) */
  adaptive: number;
  /** blocky, architectural terracing (Software) */
  modular: number;
  /** fragmented regions merging (Digital Transformation) */
  merge: number;
};

export type LivingGridState = {
  /** 0 → 1 across the whole page. */
  progress: number;
  pointerX: number;
  pointerY: number;
  /** Extra signal energy, 0 → 1 (Active Intelligence hover). */
  signal: number;
  bias: GridBias;
  active: boolean;
  reduced: boolean;
};

export const EMPTY_BIAS: GridBias = {
  structure: 0,
  peaks: 0,
  adaptive: 0,
  modular: 0,
  merge: 0,
};

export const livingGrid: LivingGridState = {
  progress: 0,
  pointerX: 0,
  pointerY: 0,
  signal: 0,
  bias: { ...EMPTY_BIAS },
  active: true,
  reduced: false,
};

export function resetLivingGrid() {
  livingGrid.progress = 0;
  livingGrid.pointerX = 0;
  livingGrid.pointerY = 0;
  livingGrid.signal = 0;
  livingGrid.bias = { ...EMPTY_BIAS };
  livingGrid.active = true;
}

/** Service slug → how the one grid reacts. Subtle, never a separate scene. */
export const SERVICE_BIAS: Record<string, Partial<GridBias> & { signal?: number }> = {
  "data-engineering-dataops": { structure: 1 },
  "analytics-services": { peaks: 1 },
  "conversational-ai-machine-learning": { adaptive: 1 },
  "custom-software-development": { modular: 1 },
  "active-intelligence": { signal: 1 },
  "digital-transformation": { merge: 1 },
};

export function applyServiceBias(slug: string | null) {
  const next = slug ? SERVICE_BIAS[slug] : undefined;
  livingGrid.bias = { ...EMPTY_BIAS, ...(next ?? {}) };
  livingGrid.signal = next?.signal ?? 0;
}

export type GridTier = "mobile" | "tablet" | "desktop";

/** Fixed scene seed: geometry and shader phases are identical after every reload. */
export const LIVING_GRID_SEED = 0x54454348;

export function getGridTier(width: number): GridTier {
  if (width < 768) return "mobile";
  if (width < 1280) return "tablet";
  return "desktop";
}

export const GRID_TIER_SETTINGS: Record<
  GridTier,
  { segments: number; size: number; dpr: number; parallax: number }
> = {
  mobile: { segments: 56, size: 90, dpr: 1, parallax: 0 },
  tablet: { segments: 140, size: 110, dpr: 1.25, parallax: 0.4 },
  desktop: { segments: 220, size: 130, dpr: 1.6, parallax: 1 },
};
