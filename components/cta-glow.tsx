"use client";

import { useEffect, useRef } from "react";

const VERT = `attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }`;

const FRAG = `precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float t = u_time * 0.1;

  // Layered organic warping — more fluid, like ink in water
  float w1 = sin(uv.y * 4.0 + t * 1.1) * 0.06;
  float w2 = cos(uv.x * 3.0 + t * 0.8) * 0.07;
  float w3 = sin((uv.x + uv.y) * 2.5 + t * 0.6) * 0.05;
  float w4 = cos((uv.x - uv.y) * 3.5 + t * 0.9) * 0.04;
  vec2 w = uv + vec2(w1 + w3, w2 + w4);

  // Secondary warp for extra fluidity
  w += vec2(
    sin(w.y * 5.0 + t * 0.7) * 0.03,
    cos(w.x * 4.0 + t * 0.5) * 0.03
  );

  // Flowing blob centers
  vec2 c1 = vec2(0.25 + 0.22 * sin(t * 0.7), 0.5 + 0.28 * cos(t * 0.45));
  vec2 c2 = vec2(0.75 + 0.18 * cos(t * 0.55), 0.3 + 0.22 * sin(t * 0.75));
  vec2 c3 = vec2(0.5 + 0.22 * sin(t * 0.85), 0.8 + 0.18 * cos(t * 0.35));
  vec2 c4 = vec2(0.15 + 0.18 * cos(t * 0.5), 0.2 + 0.22 * sin(t * 0.6));
  vec2 c5 = vec2(0.6 + 0.15 * sin(t * 0.4), 0.45 + 0.15 * cos(t * 0.65));

  // Soft exponential blobs — varied sizes
  float d1 = exp(-5.0 * dot(w - c1, w - c1));
  float d2 = exp(-7.0 * dot(w - c2, w - c2));
  float d3 = exp(-6.0 * dot(w - c3, w - c3));
  float d4 = exp(-9.0 * dot(w - c4, w - c4));
  float d5 = exp(-8.0 * dot(w - c5, w - c5));

  // Colors — tropical: mint hero + warm coral/peach complement
  vec3 mint   = vec3(0.255, 0.776, 0.651);
  vec3 coral  = vec3(1.0, 0.48, 0.38);
  vec3 peach  = vec3(1.0, 0.7, 0.45);
  vec3 lav    = vec3(0.55, 0.4, 0.85);
  vec3 teal   = vec3(0.08, 0.55, 0.65);

  vec3 col = vec3(0.0);
  col += d1 * mint  * 0.55;
  col += d2 * coral * 0.30;
  col += d3 * peach * 0.22;
  col += d4 * teal  * 0.30;
  col += d5 * lav   * 0.18;

  // Soft warm-cool sheen
  float sheen = length(vec2(w1 + w3, w2 + w4));
  col += sheen * mix(mint, coral, uv.x) * 0.12;

  // Film grain
  float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  col += (grain - 0.5) * 0.015;

  gl_FragColor = vec4(col, 1.0);
}`;

function initGL(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl", {
    alpha: false,
    antialias: false,
    powerPreference: "low-power",
  });
  if (!gl) return null;

  const vs = gl.createShader(gl.VERTEX_SHADER)!;
  gl.shaderSource(vs, VERT);
  gl.compileShader(vs);

  const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
  gl.shaderSource(fs, FRAG);
  gl.compileShader(fs);

  const prog = gl.createProgram()!;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  );
  const aPos = gl.getAttribLocation(prog, "a_position");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  return {
    gl,
    uTime: gl.getUniformLocation(prog, "u_time"),
    uRes: gl.getUniformLocation(prog, "u_resolution"),
  };
}

export function CtaGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const isMobile = window.innerWidth < 768;
    const maxDpr = isMobile ? 1 : Math.min(window.devicePixelRatio, 2);

    let raf = 0;
    let visible = false;
    let ctx = initGL(canvas);
    const start = performance.now();

    function resize() {
      const w = Math.round(canvas!.clientWidth * maxDpr);
      const h = Math.round(canvas!.clientHeight * maxDpr);
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
    }

    function frame() {
      if (!visible || !ctx) return;
      resize();
      ctx.gl.viewport(0, 0, canvas!.width, canvas!.height);
      ctx.gl.uniform1f(ctx.uTime, (performance.now() - start) / 1000);
      ctx.gl.uniform2f(ctx.uRes, canvas!.width, canvas!.height);
      ctx.gl.drawArrays(ctx.gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    }

    function startLoop() {
      if (visible) raf = requestAnimationFrame(frame);
    }

    // Handle context loss and recovery
    function onLost(e: Event) {
      e.preventDefault();
      cancelAnimationFrame(raf);
      raf = 0;
      ctx = null;
    }

    function onRestored() {
      ctx = initGL(canvas!);
      startLoop();
    }

    canvas.addEventListener("webglcontextlost", onLost);
    canvas.addEventListener("webglcontextrestored", onRestored);

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !raf) startLoop();
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}
