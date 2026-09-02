/**
 * Central registry of every asset the site ships with.
 *
 * - Files under `src/assets` are imported so Vite fingerprints them and the
 *   preloaded URL is the exact same one the components will later request.
 * - Files under `public` are referenced by their served path (Vite copies them
 *   as-is, so the string is already the final URL).
 *
 * `preloadAssets()` below walks this list and reports real progress, which is
 * what `components/global/Loader.tsx` renders.
 */

// ---------------------------------------------------------------------------
// src/assets — bundled (hashed) URLs
// ---------------------------------------------------------------------------

import heroImage from "@/assets/hero.png";

import awsLogo from "@/assets/logos/aws.webp";
import azureLogo from "@/assets/logos/azure.webp";
import databricksLogo from "@/assets/logos/databricks.webp";
import datarobotLogo from "@/assets/logos/datarobot.webp";
import dockerLogo from "@/assets/logos/docker.webp";
import gcpLogo from "@/assets/logos/gcp.webp";
import kubernetesLogo from "@/assets/logos/kubernetes.webp";
import n8nLogo from "@/assets/logos/n8n.png";
import openaiLogo from "@/assets/logos/openai.webp";
import pythonLogo from "@/assets/logos/python.webp";
import sapLogo from "@/assets/logos/sap.webp";

export const LOGO_ASSETS = [
  awsLogo,
  azureLogo,
  databricksLogo,
  datarobotLogo,
  dockerLogo,
  gcpLogo,
  kubernetesLogo,
  n8nLogo,
  openaiLogo,
  pythonLogo,
  sapLogo,
] as const;

export const SRC_IMAGE_ASSETS = [heroImage, ...LOGO_ASSETS] as const;

// ---------------------------------------------------------------------------
// public/ — served paths
// ---------------------------------------------------------------------------

export const HERO_ASSETS = [
  "/hero/1.png",
  "/hero/2.png",
  "/hero/2.2.png",
  "/hero/3.png",
  "/hero/4.png",
  "/hero/5.png",
  "/hero/hero-2/1.png",
  "/hero/hero-2/2.png",
  "/hero/hero-2/3.png",
] as const;

export const ABOUT_ASSETS = [
  "/about.png",
  "/about/1.png",
  "/about/2.png",
  "/about/3.png",
  "/about/4.png",
  "/about/5.png",
] as const;

export const SERVICE_ASSETS = [
  "/services/1.png",
  "/services/2.png",
  "/services/3.png",
  "/services/4.png",
  "/services/5.png",
  "/services/6.png",
] as const;

export const INDUSTRY_ASSETS = [
  "/industries/1.png",
  "/industries/2.png",
  "/industries/3.png",
  "/industries/4.png",
  "/industries/5.png",
  "/industries/6.png",
] as const;

export const SOLUTION_ASSETS = [
  "/solutions/1.png",
  "/solutions/2.png",
  "/solutions/3.png",
  "/solutions/4.png",
  "/solutions/5.png",
  "/solutions/6.png",
] as const;

export const SOLUTION_CONTENT_ASSETS = Array.from(
  { length: 24 },
  (_, i) => `/solutions-contents/${i + 7}.png`,
);

export const MISC_ASSETS = [
  "/favicon.svg",
  "/icons.svg",
  "/img/dotTexture.png",
] as const;

export const PUBLIC_IMAGE_ASSETS = [
  ...HERO_ASSETS,
  ...ABOUT_ASSETS,
  ...SERVICE_ASSETS,
  ...INDUSTRY_ASSETS,
  ...SOLUTION_ASSETS,
  ...SOLUTION_CONTENT_ASSETS,
  ...MISC_ASSETS,
];

export const VIDEO_ASSETS = ["/hero/video1.mp4", "/hero/video2.mp4"] as const;

// ---------------------------------------------------------------------------
// Aggregate
// ---------------------------------------------------------------------------

export const IMAGE_ASSETS: string[] = [
  ...SRC_IMAGE_ASSETS,
  ...PUBLIC_IMAGE_ASSETS,
];

/** Every URL the loader waits on, images first then videos. */
export const ALL_ASSETS: string[] = [...IMAGE_ASSETS, ...VIDEO_ASSETS];

// ---------------------------------------------------------------------------
// Preloading
// ---------------------------------------------------------------------------

/** Hard ceiling per asset so one stalled request can never hold the loader. */
const ASSET_TIMEOUT_MS = 15_000;

function withTimeout(promise: Promise<void>): Promise<void> {
  return new Promise((resolve) => {
    const timer = setTimeout(resolve, ASSET_TIMEOUT_MS);
    promise.finally(() => {
      clearTimeout(timer);
      resolve();
    });
  });
}

function loadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    // Resolve either way — a missing file should not stall the site.
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
    if (img.complete) resolve();
  });
}

function loadVideo(src: string): Promise<void> {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    // `canplaythrough` means enough is buffered to play without stalling.
    video.oncanplaythrough = () => resolve();
    video.onloadeddata = () => resolve();
    video.onerror = () => resolve();
    video.src = src;
    video.load();
  });
}

/** SVGs and rasters both go through `Image`; videos need the media element. */
function loadAsset(src: string): Promise<void> {
  return withTimeout(
    VIDEO_ASSETS.includes(src as (typeof VIDEO_ASSETS)[number])
      ? loadVideo(src)
      : loadImage(src),
  );
}

/** Webfonts declared in index.css, counted as one unit of work. */
function loadFonts(): Promise<void> {
  if (typeof document === "undefined" || !("fonts" in document)) {
    return Promise.resolve();
  }
  return withTimeout(document.fonts.ready.then(() => undefined));
}

export type PreloadProgress = (percent: number, loaded: number, total: number) => void;

/**
 * Loads every asset in `ALL_ASSETS` plus the webfonts, invoking `onProgress`
 * after each one settles. Resolves once all of them have settled.
 */
export function preloadAssets(onProgress?: PreloadProgress): Promise<void> {
  const tasks: Promise<void>[] = [...ALL_ASSETS.map(loadAsset), loadFonts()];
  const total = tasks.length;
  let loaded = 0;

  const tick = () => {
    loaded += 1;
    onProgress?.(Math.round((loaded / total) * 100), loaded, total);
  };

  return Promise.all(tasks.map((task) => task.then(tick))).then(() => undefined);
}
