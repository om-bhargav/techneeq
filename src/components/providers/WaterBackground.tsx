"use client";

import { useEffect, useRef, type ReactNode } from "react";

// --- GLSL Shaders ---
const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    v_uv.y = 1.0 - v_uv.y; 
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  
  varying vec2 v_uv;
  uniform sampler2D u_image;
  uniform vec2 u_resolution;
  uniform vec2 u_image_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;
  uniform float u_hover;
  
  void main() {
    vec2 uv;
    
    // --- Sizing Logic ---
    if (u_resolution.x >= 768.0) {
      // DESKTOP: 100% Width, 100% Height (Stretch exactly to container bounds)
      uv = v_uv;
    } else {
      // MOBILE: 100% Height, Auto Width (Proportional, Centered)
      float screenAspect = u_resolution.x / u_resolution.y;
      float imageAspect = u_image_resolution.x / u_image_resolution.y;
      
      // Scale X to maintain aspect ratio based on 100% height
      float xRatio = screenAspect / imageAspect;
      uv.x = v_uv.x * xRatio + (1.0 - xRatio) * 0.5;
      uv.y = v_uv.y;
    }
    
    // --- Distortion Logic ---
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    vec2 dir = (uv - u_mouse) * aspect;
    float dist = length(dir);
    
    float falloff = smoothstep(0.35, 0.0, dist);
    float wave = sin(dist * 30.0 - u_time * 6.0);
    
    vec2 displacement = dir * wave * falloff * 0.05 * u_hover;
    
    gl_FragColor = texture2D(u_image, uv + displacement);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

interface WaterBackgroundProps {
  children?: ReactNode;
  imageUrl?: string;
  className?: string;
}

export default function WaterBackground({ 
  children, 
  imageUrl = "https://picsum.photos/id/433/1920/1080",
  className = "relative min-h-screen w-full"
}: WaterBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const state = useRef({
    mouseX: 0.5,
    mouseY: 0.5,
    targetHover: 0, 
    currentHover: 0, 
    time: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.warn("WebGL not supported");
      return;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = gl.createProgram();
    
    if (!program || !vertexShader || !fragmentShader) return;
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1
    ]);
    
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    
    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      resolution: gl.getUniformLocation(program, "u_resolution"),
      imageResolution: gl.getUniformLocation(program, "u_image_resolution"),
      mouse: gl.getUniformLocation(program, "u_mouse"),
      time: gl.getUniformLocation(program, "u_time"),
      hover: gl.getUniformLocation(program, "u_hover"),
    };

    const image = new Image();
    image.crossOrigin = "anonymous";
    const texture = gl.createTexture();
    
    let imageAspect = { w: 1920, h: 1080 }; 

    image.onload = () => {
      imageAspect = { w: image.width, h: image.height };
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    };
    image.src = imageUrl;

    // Size the canvas to the container, not the window
    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.resolution, rect.width, rect.height);
    };
    window.addEventListener("resize", resize);
    resize(); 

    let animationFrameId: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      state.current.time += delta;
      state.current.currentHover += (state.current.targetHover - state.current.currentHover) * 0.1;

      gl.uniform1f(uniforms.time, state.current.time);
      gl.uniform1f(uniforms.hover, state.current.currentHover);
      gl.uniform2f(uniforms.mouse, state.current.mouseX, state.current.mouseY);
      gl.uniform2f(uniforms.imageResolution, imageAspect.w, imageAspect.h);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    // Track mouse relative to the container so it works perfectly even when scrolled
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      state.current.mouseX = (e.clientX - rect.left) / rect.width;
      state.current.mouseY = (e.clientY - rect.top) / rect.height;
    };

    const handleMouseEnter = () => {
      state.current.targetHover = 1;
    };

    const handleMouseLeave = () => {
      state.current.targetHover = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
    };
  }, [imageUrl]); 

  return (
    <div ref={containerRef} className={className}>
      {/* 
        Background WebGL Canvas 
        Reverted to absolute inset-0 so it sizes to the container and scrolls naturally 
      */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none -z-10"
        style={{ touchAction: "none" }}
      />
      
      {/* Foreground Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}