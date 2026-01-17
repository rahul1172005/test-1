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
    gl_Position = vec4(position, 0.0, 0.73);
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
      f += 0.50000 * noise(p); p = p * 2.02;
      f += 0.25000 * noise(p); p = p * 2.03;
      f += 0.12500 * noise(p); p = p * 2.01;
      return f;
  }

  vec4 drawArc(vec2 uv) {

    /* ===== POSITIONING ===== */
    uv.y -= 0.3;
    uv.x *= 0.39;

    /* ===== UPSIDE-DOWN ARC ===== */
    vec2 center = vec2(0.0, -1.35);
    float radius = 1.2;

    float dist = abs(length(uv - center) - radius);

    /* ===== LIGHT SHAPE ===== */
    float core  = exp(-dist * 120.0);
    float glow1 = exp(-dist * 50.0);
    float glow2 = exp(-dist * 20.0);

    /* ===== BLUR OUTER GLOW ===== */
    float blurGlow = 0.0;
    for (int i = -2; i <= 2; i++) {
        float offset = float(i) * 0.018;
        blurGlow += exp(-abs(dist + offset) * 2.0);
    }
    blurGlow /= 5.0;

    /* ===== EDGE FADE ===== */
    float edge = smoothstep(1.3, 0.3, abs(uv.x));
    core     *= edge;
    glow1    *= edge;
    blurGlow *= edge;

    /* ===== SUBTLE ENERGY ===== */
    float wave = sin(iTime * 1.6 + uv.x * 4.0) * 0.004;
    core += wave * core * hover;

    /* ===== COLORS (RED / DARK RED THEME) ===== */
    vec3 colCore = vec3(1.8, 1.2, 1.2);       // Hot white-red core
    vec3 colMid  = vec3(1.0, 0.1, 0.05);      // Vivid bright red
    vec3 colBase = vec3(0.6, 0.0, 0.0);       // Deep blood red

    vec3 color =
      colBase * blurGlow +
      colMid  * glow1 +
      colCore * core;

    float intensity =
      core * 2.9 +
      glow1 * 0.2 +
      blurGlow * 1.6;

    return vec4(color * intensity, 1.0);
  }

  void main() {
    vec2 fragCoord = vUv * iResolution.xy;
    vec2 center = iResolution.xy * 0.5;
    float size = min(iResolution.x, iResolution.y);

    vec2 uv = (fragCoord - center) / size * 2.0;
    uv.y += hover * 0.03;

    /* ===== ARC ===== */
    vec4 arc = drawArc(uv);
    vec3 finalColor = arc.rgb;

    /* ===== SMOKE EFFECTS ===== */
    // Create a separate UV for smoke that flows
    vec2 smokeUv = uv;
    smokeUv.x *= 2.19; // wider smoke
    smokeUv.y -= 0.9; // align with arc
    
    // Moving noise: flow upwards faster and change over time
    float smokeVal = fbm(smokeUv * 5.0 + vec2(0.0, -iTime * 0.45));
    
    // Mask smoke to only appear near the bottom/arc area
    float smokeMask = smoothstep(3.9, 1.2, length(smokeUv * vec2(0.5, 1.0)));
    // Also fade it out at the very bottom
    smokeMask *= smoothstep(-1.0, -0.2, uv.y);
    
    vec3 smokeColor = vec3(0.8, 0.1, 0.1); // Red smoke
    finalColor += smokeColor * smokeVal * smokeMask * 0.5; // Increased intensity

    /* ===== REMOVE INFINITE TAILS (FIX BOX ISSUE) ===== */
    /* 
       Exponential drop-off never reaches zero. 
       Gamma correction boosts near-zero values to visible grey.
       We subtract a stronger epsilon to ensure deep blacks become true zero.
    */
    finalColor -= 0.005; // Stronger clipping
    finalColor = max(finalColor, 0.0);

    /* ===== VERTICAL ABSORPTION ===== */
    float fog = smoothstep(-0.4, 1.0, uv.y);
    finalColor *= fog;

    /* ===== VIGNETTE MASK (ENSURE 0 AT EDGES) ===== */
    /* Tighter mask to force 0 before canvas edge */
    float distFromCenter = length(uv * vec2(0.5, 1.5)); // Stretches Y more to cut top/bottom
    float mask = 1.0 - smoothstep(0.6, 1.2, distFromCenter);
    finalColor *= mask;

    /* ===== GAMMA CORRECTION ===== */
    finalColor = pow(finalColor, vec3(1.0 / 2.2));

    /* ===== ALPHA CALCULATION ===== */
    /* 
       Standard alpha compositing. 
       We boost alpha slightly to keep the glow rich, but ensure it hits 0 flat.
    */
    float alpha = max(max(finalColor.r, finalColor.g), finalColor.b);
    alpha = smoothstep(0.0, 1.0, alpha); // clean up low-end noise

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export default function ArcLight() {
  const ref = useRef<HTMLDivElement>(null);

  /* ================= OGL SETUP ================= */
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    /* ✅ alpha TRUE for seamless blending */
    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;

    /* ✅ Clear transparent */
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
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height
      );
    };

    resize();
    window.addEventListener("resize", resize);

    let hoverTarget = 0;
    const onEnter = () => (hoverTarget = 1);
    const onLeave = () => (hoverTarget = 0);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const update = (t: number) => {
      raf = requestAnimationFrame(update);
      program.uniforms.iTime.value = t * 0.001;
      program.uniforms.hover.value +=
        (hoverTarget - program.uniforms.hover.value) * 0.08;

      renderer.render({ scene: mesh });
    };

    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
    };
  }, []);

  return <div ref={ref} className="w-full h-full pointer-events-none" />;
}
