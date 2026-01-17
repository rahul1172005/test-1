import { Mesh, Program, Renderer, Triangle, Vec3 } from "ogl";
import { useEffect, useRef } from "react";

/* ================= VERTEX ================= */
const vertex = /* glsl */ `
  precision highp float;
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

/* ================= FRAGMENT ================= */
const fragment = /* glsl */ `
  precision highp float;

  uniform float iTime;
  uniform vec3 iResolution;
  uniform float hover;

  varying vec2 vUv;

  /* ---- NOISE FUNCTIONS ---- */
  float hash(float n) { return fract(sin(n) * 43758.5453123); }
  float noise(vec2 x) {
      vec2 p = floor(x);
      vec2 f = fract(x);
      f = f * f * (3.0 - 2.0 * f);
      float n = p.x + p.y * 57.0;
      return mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
                 mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
  }
  float fbm(vec2 p) {
      float f = 0.0;
      f += 0.90000 * noise(p); p = p * 2.02;
      f += 0.2 * noise(p); p = p * 2.03;
      f += 0.10 * noise(p); p = p * 2.01;
      return f;
  }

  vec4 drawLine(vec2 uv, vec2 normUv) {
    /* ===== POSITIONING ===== */
    // Center Y
    float dist = abs(uv.y);

    /* ===== LIGHT SHAPE (Matched to ArcLight decay) ===== */
    float core  = exp(-dist * 500.0);
    float glow1 = exp(-dist * 190.0);
    float glow2 = exp(-dist * 400.0);
    
    // Multi-layered blur
    float blurGlow = 0.0;
    for (int i = -2; i <= 2; i++) {
        float offset = float(i) * 0.018; // Matched offset spacing
        blurGlow += exp(-abs(dist + offset) * 2.0); // Matched decay
    }
    blurGlow /= 5.0;

    /* ===== EDGE FADE (Horizontal) ===== */
    float edge = smoothstep(1.0, 0.3, abs(normUv.x)); // Soft screen edge fade
    core     *= edge;
    glow1    *= edge;
    blurGlow *= edge;

    /* ===== SUBTLE ENERGY ===== */
    float wave = sin(iTime * 1.6 + uv.x * 1.0) * 0.05;
    core += wave * core;

    /* ===== COLORS (Exact ArcLight Match) ===== */
    vec3 colCore = vec3(0.2, 1.2, 1.2);       // Hot white-red core
    vec3 colMid  = vec3(1.0, 0.1, 0.05);      // Vivid bright red
    vec3 colBase = vec3(0.6, 0.0, 0.0);       // Deep blood red

    vec3 color =
      colBase * blurGlow +
      colMid  * glow1 +
      colCore * core;

    float intensity =
      core * 5.9 +
      glow1 * 211.9 +
      blurGlow * 1.9;

    return vec4(color * intensity, 1.0);
  }

  void main() {
    vec2 fragCoord = vUv * iResolution.xy;
    vec2 center = iResolution.xy * 0.5;
    
    // 1. Aspect-corrected UVs for shape/noise
    vec2 uv = (fragCoord - center) / iResolution.y * 2.0;

    // 2. Normalized UVs for mask
    vec2 normUv = (vUv - 0.5) * 2.0;
    
    /* ===== LINE ===== */
    vec4 line = drawLine(uv, normUv);
    vec3 finalColor = line.rgb;

    /* ===== SMOKE EFFECTS (Matched FBM) ===== */
    vec2 smokeUv = uv;
    smokeUv.y -= 0.0; // Center smoke on line
    
    // Moving noise: flow upwards faster and change over time
    float smokeVal = fbm(smokeUv * 1.5 + vec2(0.0, -iTime * 0.45));
    
    // Mask smoke to only appear near the line
    float smokeMask = smoothstep(1.2, 0.1, length(smokeUv * vec2(0.0, 1.3))); 
    // Also fade horizontally
    smokeMask *= smoothstep(1.4, 0.1, abs(normUv.x));
    
    vec3 smokeColor = vec3(0.8, 0.1, 0.1); // Red smoke
    finalColor += smokeColor * smokeVal * smokeMask * 0.5; 

    /* ===== CLEANUP ===== */
    finalColor -= 0.005; // Stronger clipping
    finalColor = max(finalColor, 0.0);
    
    /* ===== GAMMA CORRECTION (Matched) ===== */
    finalColor = pow(finalColor, vec3(1.0 / 2.2));

    /* ===== ALPHA CALCULATION ===== */
    float alpha = max(max(finalColor.r, finalColor.g), finalColor.b);
    alpha = smoothstep(0.0, 1.0, alpha);

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export default function StraightBeam() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vec3(1, 1, 1) },
        hover: { value: 0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = container.clientWidth;
      const h = container.clientHeight;

      renderer.setSize(w * dpr, h * dpr);
      gl.canvas.style.width = w + "px";
      gl.canvas.style.height = h + "px";

      program.uniforms.iResolution.value.set(
        gl.canvas.width,
        gl.canvas.height, // Use full height
        gl.canvas.width / gl.canvas.height
      );
    };

    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const update = (t: number) => {
      raf = requestAnimationFrame(update);
      program.uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    };

    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
    };
  }, []);

  return <div ref={ref} className="w-full h-full pointer-events-none" />;
}
