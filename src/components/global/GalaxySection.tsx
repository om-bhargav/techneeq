"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

const vertexShader = `
  attribute float size;
  attribute vec3 color;
  varying vec3 vColor;
  void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform sampler2D texture;
  varying vec3 vColor;
  void main() {
    gl_FragColor = vec4(vColor, 1.0);
    gl_FragColor = gl_FragColor * texture2D(texture, gl_PointCoord);
  }
`;

export default function GalaxySection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const colors = [
      new THREE.Color(0xac1122),
      new THREE.Color(0x96789f),
      new THREE.Color(0x535353),
    ];

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background

    const scene = new THREE.Scene();
    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 6;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);
    camera.position.set(0, 0, 350);

    const galaxy = new THREE.Group();
    scene.add(galaxy);

    // Generate a soft glowing dot texture programmatically (No image file needed!)
    const texCanvas = document.createElement("canvas");
    texCanvas.width = 64;
    texCanvas.height = 64;
    const ctx = texCanvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const dotTexture = new THREE.CanvasTexture(texCanvas);

    const dotsAmount = 3000;
    
    // Modern Buffer Arrays
    const positions = new Float32Array(dotsAmount * 3);
    const sizes = new Float32Array(dotsAmount);
    const colorsAttribute = new Float32Array(dotsAmount * 3);

    // Keep track of logical data for GSAP animations
    const dotsData: any[] = [];

    for (let i = 0; i < dotsAmount; i++) {
      const colorIdx = Math.floor(Math.random() * colors.length);
      const theta = Math.random() * Math.PI * 2;
      const phi = (1 - Math.sqrt(Math.random())) * (Math.PI / 2) * (Math.random() > 0.5 ? 1 : -1);
      const r = 120 + (Math.random() - 0.5) * 5;

      const x = Math.cos(theta) * Math.cos(phi) * r;
      const y = Math.sin(phi) * r;
      const z = Math.sin(theta) * Math.cos(phi) * r;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const c = colors[colorIdx];
      colorsAttribute[i * 3] = c.r;
      colorsAttribute[i * 3 + 1] = c.g;
      colorsAttribute[i * 3 + 2] = c.b;

      sizes[i] = 5;

      // Store logical object for GSAP to animate
      dotsData.push({ x, y, z, scaleX: 5 });
    }

    const bufferWrapGeom = new THREE.BufferGeometry();
    const attributePositions = new THREE.BufferAttribute(positions, 3);
    const attributeSizes = new THREE.BufferAttribute(sizes, 1);
    const attributeColors = new THREE.BufferAttribute(colorsAttribute, 3);

    bufferWrapGeom.setAttribute("position", attributePositions);
    bufferWrapGeom.setAttribute("size", attributeSizes);
    bufferWrapGeom.setAttribute("color", attributeColors);

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: { texture: { value: dotTexture } },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      depthWrite: false,
    });
    
    const wrap = new THREE.Points(bufferWrapGeom, shaderMaterial);
    scene.add(wrap);

    // Create segments (Lines)
    // Optimization: We reuse the exact same position and color buffers!
    const indices = [];
    const v1 = new THREE.Vector3();
    const v2 = new THREE.Vector3();

    for (let i = 0; i < dotsAmount; i++) {
      v1.fromArray(positions, i * 3);
      for (let j = i + 1; j < dotsAmount; j++) {
        v2.fromArray(positions, j * 3);
        if (v1.distanceTo(v2) < 12) {
          indices.push(i, j); // Connect dot i and dot j
        }
      }
    }

    const segmentsGeom = new THREE.BufferGeometry();
    segmentsGeom.setAttribute("position", attributePositions); // Shares buffer with points!
    segmentsGeom.setAttribute("color", attributeColors);
    segmentsGeom.setIndex(indices);

    const segmentsMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      vertexColors: true, // Modern syntax (removed THREE.VertexColors)
    });
    const segments = new THREE.LineSegments(segmentsGeom, segmentsMat);
    galaxy.add(segments);

    // Apply continuous float animations to 50% of dots
    dotsData.forEach((dot, index) => {
      if (Math.random() > 0.5) {
        const targetX = dot.x * ((Math.random() - 0.5) * 0.2 + 1);
        const targetY = dot.y * ((Math.random() - 0.5) * 0.2 + 1);
        const targetZ = dot.z * ((Math.random() - 0.5) * 0.2 + 1);

        gsap.to(dot, {
          duration: Math.random() * 3 + 3,
          x: targetX,
          y: targetY,
          z: targetZ,
          yoyo: true,
          repeat: -1,
          delay: -Math.random() * 3,
          ease: "none",
          onUpdate: () => {
            attributePositions.array[index * 3] = dot.x;
            attributePositions.array[index * 3 + 1] = dot.y;
            attributePositions.array[index * 3 + 2] = dot.z;
            attributePositions.needsUpdate = true; // Tell Three.js to re-render lines/points
          },
        });
      }
    });

    let hovered: number[] = [];
    let prevHovered: number[] = [];
    const mouse = new THREE.Vector2(-100, -100);

    function render() {
      raycaster.setFromCamera(mouse, camera);
      const intersections = raycaster.intersectObject(wrap);
      hovered = [];

      if (intersections.length) {
        for (let i = 0; i < intersections.length; i++) {
          const index = intersections[i].index;
          if (index !== undefined) {
            hovered.push(index);
            if (prevHovered.indexOf(index) === -1) {
              onDotHover(index);
            }
          }
        }
      }

      for (let i = 0; i < prevHovered.length; i++) {
        if (hovered.indexOf(prevHovered[i]) === -1) {
          mouseOut(prevHovered[i]);
        }
      }
      prevHovered = hovered.slice();
      renderer.render(scene, camera);
    }

    function onDotHover(index: number) {
      gsap.killTweensOf(dotsData[index], "scaleX"); // Prevent overlapping animations
      gsap.to(dotsData[index], {
        duration: 1,
        scaleX: 10,
        ease: "elastic.out(2, 0.2)",
        onUpdate: () => {
          attributeSizes.array[index] = dotsData[index].scaleX;
          attributeSizes.needsUpdate = true;
        },
      });
    }

    function mouseOut(index: number) {
      gsap.killTweensOf(dotsData[index], "scaleX");
      gsap.to(dotsData[index], {
        duration: 0.4,
        scaleX: 5,
        ease: "power2.out",
        onUpdate: () => {
          attributeSizes.array[index] = dotsData[index].scaleX;
          attributeSizes.needsUpdate = true;
        },
      });
    }

    function onResize() {
      if (!canvasRef.current) return;
      width = canvasRef.current.offsetWidth;
      height = canvasRef.current.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function onMouseMove(e: MouseEvent) {
      const canvasBounding = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - canvasBounding.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - canvasBounding.top) / height) * 2 + 1;
    }

    gsap.ticker.add(render);
    window.addEventListener("mousemove", onMouseMove);
    
    let resizeTm: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTm);
      resizeTm = setTimeout(onResize, 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      
      // Kill all GSAP animations to prevent memory leaks
      dotsData.forEach(dot => gsap.killTweensOf(dot));
      
      // Dispose Three.js objects
      bufferWrapGeom.dispose();
      segmentsGeom.dispose();
      shaderMaterial.dispose();
      segmentsMat.dispose();
      dotTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
        <section className="relative h-screen bg-black">
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] h-screen w-screen outline-none"
        />

        <div className="relative z-10">
            {/* Your section content */}
            <div className="flex min-h-screen flex-col items-center justify-center">
            <h2 className="text-5xl font-display uppercase tracking-wider text-white">
                Neural Network
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-center text-white/60">
                Hover over the nodes to see them expand. The background stays fixed as
                you scroll.
            </p>
            </div>
        </div>
        </section>
  );
}