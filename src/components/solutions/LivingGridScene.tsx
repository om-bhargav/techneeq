import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { createElement, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  GRID_TIER_SETTINGS,
  LIVING_GRID_SEED,
  livingGrid,
  type GridTier,
} from "@/lib/livinggrid";

const COBALT = new THREE.Color("#FFFFFF");
const ULTRAVIOLET = new THREE.Color("#F5F4F0");
const CLOUD = new THREE.Color("#FAF9F6");

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smooth = (t: number) => t * t * (3 - 2 * t);

const VERTEX_SHADER = /* glsl */ `
uniform float uTime;
uniform float uProgress;
uniform float uStructure;
uniform float uPeaks;
uniform float uAdaptive;
uniform float uModular;
uniform float uMerge;
uniform float uSignal;
uniform float uReduced;
uniform float uPointSize;
uniform float uSeed;

attribute float aSeed;
varying float vAlpha;
varying float vTone;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x),
             mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < FBM_OCTAVES; i++) {
    value += amplitude * noise(p);
    p = p * 2.03 + 1.7;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec3 p = position;
  float t = uTime * 0.12;
  vec2 seedOffset = vec2(mod(uSeed, 997.0), mod(uSeed, 619.0)) * 0.001;
  vec2 domain = vec2(p.x * 0.035, p.z * 0.026) + seedOffset;

  // Long wave fronts with fine secondary motion create a navigable data terrain.
  float broad = sin(p.x * 0.055 + t + fbm(domain + t * 0.08) * 3.4) * 2.7;
  broad += cos(p.z * 0.045 - t * 0.7 + fbm(domain * 0.72) * 2.2) * 2.0;
  float fine = (fbm(domain * 1.55 + vec2(t * 0.16, -t * 0.1)) - 0.5) * 3.0;
  float h = broad + fine;

  h += uPeaks * pow(max(0.0, sin(p.x * 0.075 + p.z * 0.025 + t)), 3.0) * 5.0;
  h = mix(h, sin(p.x * 0.09 + t) * cos(p.z * 0.07 - t * 0.6) * 3.7, uStructure * 0.6);
  h += uAdaptive * sin(p.x * 0.19 + uTime) * cos(p.z * 0.12 - uTime * 0.65) * 1.2;
  h = mix(h, floor(h * 0.7) / 0.7, uModular * 0.3);
  h *= mix(1.0, 0.72, uMerge);
  h += sin(p.z * 0.032 + uProgress * 5.0) * (1.0 + uProgress * 1.8);
  h *= mix(1.0, 0.35, uReduced);
  p.y = h;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float distanceToCamera = max(1.0, -mv.z);
  gl_PointSize = clamp(uPointSize * (170.0 / distanceToCamera) * (0.72 + aSeed * 0.5 + uSignal * 0.25), 1.0, 4.8);
  gl_Position = projectionMatrix * mv;

  float edge = 1.0 - smoothstep(0.72, 1.0, abs(position.x) / 125.0);
  float horizon = smoothstep(8.0, 35.0, distanceToCamera) * (1.0 - smoothstep(150.0, 245.0, distanceToCamera));
  vAlpha = edge * horizon * (0.42 + aSeed * 0.46);
  vTone = clamp(0.25 + h * 0.06 + aSeed * 0.42 + uSignal * 0.2, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = /* glsl */ `
precision highp float;
uniform vec3 uCobalt;
uniform vec3 uUltra;
uniform vec3 uCloud;
uniform float uFade;
varying float vAlpha;
varying float vTone;

void main() {
  float d = length(gl_PointCoord - 0.5);
  float dot = 1.0 - smoothstep(0.16, 0.5, d);
  if (dot <= 0.001) discard;
  vec3 color = mix(uCobalt, uUltra, smoothstep(0.3, 0.9, vTone));
  color = mix(color, uCloud, smoothstep(0.82, 1.0, vTone) * 0.28);
  gl_FragColor = vec4(color, dot * vAlpha * uFade);
}
`;

function seededUnit(index: number, seed: number) {
  let value = (index + seed) >>> 0;
  value = Math.imul(value ^ (value >>> 16), 0x21f0aaad);
  value = Math.imul(value ^ (value >>> 15), 0x735a2d97);
  return ((value ^ (value >>> 15)) >>> 0) / 4294967296;
}

function buildPointField(size: number, segments: number, seed: number) {
  const columns = segments;
  const rows = Math.max(42, Math.round(segments * 0.72));
  const count = columns * rows;
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count);

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const index = row * columns + column;
      positions[index * 3] = (column / (columns - 1) - 0.5) * size * 2.25;
      positions[index * 3 + 1] = 0;
      positions[index * 3 + 2] = (row / (rows - 1) - 0.72) * size * 2.25;
      seeds[index] = seededUnit(index, seed);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
  return geometry;
}

function PointLandscape({ tier, calm }: { tier: GridTier; calm: boolean }) {
  const cfg = GRID_TIER_SETTINGS[tier];
  const { camera } = useThree();
  const eased = useRef({ x: 0, y: 0, progress: 0 });

  const geometry = useMemo(
    () => buildPointField(cfg.size, cfg.segments, LIVING_GRID_SEED),
    [cfg.size, cfg.segments],
  );
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uProgress: { value: 0 },
          uStructure: { value: 0 },
          uPeaks: { value: 0 },
          uAdaptive: { value: 0 },
          uModular: { value: 0 },
          uMerge: { value: 0 },
          uSignal: { value: 0 },
          uReduced: { value: livingGrid.reduced ? 1 : 0 },
          uPointSize: { value: tier === "mobile" ? 1.45 : 1.7 },
          uSeed: { value: LIVING_GRID_SEED % 10000 },
          uCobalt: { value: COBALT },
          uUltra: { value: ULTRAVIOLET },
          uCloud: { value: CLOUD },
          uFade: { value: 0 },
        },
        defines: { FBM_OCTAVES: tier === "mobile" ? 2 : 4 },
      }),
    [tier],
  );

  useEffect(() => () => {
    geometry.dispose();
    material.dispose();
  }, [geometry, material]);

  useFrame((state, delta) => {
    if (!livingGrid.active) return;
    const d = Math.min(delta, 0.05);
    const uniforms = material.uniforms;
    const set = (name: string, value: number) => {
      const uniform = uniforms[name];
      if (uniform) uniform.value = value;
    };
    const toward = (name: string, value: number, speed = 3) => {
      const uniform = uniforms[name];
      if (uniform && typeof uniform.value === "number") {
        uniform.value = lerp(uniform.value, value, Math.min(1, d * speed));
      }
    };

    const reduced = livingGrid.reduced;
    set("uTime", state.clock.elapsedTime * (reduced ? 0.06 : calm ? 0.55 : 1));
    toward("uFade", calm ? 0.58 : 0.9, 0.7);
    eased.current.progress += (livingGrid.progress - eased.current.progress) * Math.min(1, d * 3.2);
    const progress = eased.current.progress;
    set("uProgress", progress);
    set("uReduced", reduced ? 1 : 0);

    toward("uStructure", livingGrid.bias.structure);
    toward("uPeaks", livingGrid.bias.peaks);
    toward("uAdaptive", livingGrid.bias.adaptive);
    toward("uModular", livingGrid.bias.modular);
    toward("uMerge", livingGrid.bias.merge);
    toward("uSignal", livingGrid.signal);

    eased.current.x += (livingGrid.pointerX * cfg.parallax - eased.current.x) * d * 1.5;
    eased.current.y += (livingGrid.pointerY * cfg.parallax - eased.current.y) * d * 1.5;
    const travel = smooth(clamp01(progress));
    const baseZ = calm ? 43 : lerp(42, 29, travel);
    camera.position.set(
      eased.current.x * (reduced ? 0 : 2.2),
      (calm ? 17 : lerp(16, 22, travel)) + eased.current.y * (reduced ? 0 : 1.1),
      baseZ,
    );
    camera.lookAt(eased.current.x * 0.7, calm ? -1 : lerp(0, -3, travel), -52 - travel * 28);
  });

  // createElement (not JSX) so dev-only source-tag attributes are never injected
  // onto three.js objects, which R3F rejects at applyProps time.
  return createElement("points", { geometry, material, frustumCulled: false });
}

function MobileFrameDriver() {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (livingGrid.active) invalidate();
    }, 1000 / 30);
    return () => window.clearInterval(timer);
  }, [invalidate]);

  return null;
}

export default function LivingGridScene({ tier, calm = false }: { tier: GridTier; calm?: boolean }) {
  const cfg = GRID_TIER_SETTINGS[tier];
  return (
    <Canvas
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, cfg.dpr]}
      camera={{ position: [0, 16, 42], fov: 48, near: 0.1, far: 420 }}
      frameloop={tier === "mobile" ? "demand" : "always"}
      style={{ position: "absolute", inset: 0 }}
    >
      {tier === "mobile" && <MobileFrameDriver />}
      <PointLandscape tier={tier} calm={calm} />
    </Canvas>
  );
}