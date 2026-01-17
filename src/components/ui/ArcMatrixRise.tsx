import { useEffect, useRef } from "react";

export default function ArcMatrixRise() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: {
            x: number;
            y: number;
            speed: number;
            phase: number;
            length: number;
        }[] = [];

        /* =========================================================
           🔧 GLOBAL VISUAL METRICS
           ========================================================= */

        const COL_SPACING = 2.5;

        const BASE_SPEED = 10.5;
        const SPEED_VAR = 10.5;

        const NEON_RED = "255, 30, 30";

        /* 🔥 HEIGHT SPAWN CONTROLS (IMPORTANT) */
        const SPAWN_HEIGHT_MULT = 0.0;   // ⬆ increase for taller spawn
        const RESPAWN_SPREAD = 1000;      // ⬆ arc emission thickness

        /* =========================================================
           🔧 ARC SHAPE + POSITION
           ========================================================= */

        const SHADER_Y_OFFSET = 0.6;
        const SHADER_X_SCALE = 0.39;

        const ARC_RADIUS = 1.3;
        const ARC_RADIUS_SQ = ARC_RADIUS * ARC_RADIUS;

        /* =========================================================
           🔧 PARTICLE INITIALIZATION
           ========================================================= */

        /* =========================================================
           🔧 PARTICLE INITIALIZATION
           ========================================================= */

        const getEffectiveHeight = () => window.innerHeight * 0.7; // Matches ArcLight container height (70vh)

        const initParticles = (w: number, h: number) => {
            const effectiveH = getEffectiveHeight();
            const size = Math.min(w, effectiveH);
            const cols = Math.ceil(w / COL_SPACING);

            particles = new Array(cols).fill(0).map((_, i) => {
                const x = i * COL_SPACING + (Math.random() * 2 - 1);
                const arcY = getArcY(x, w, h, size, effectiveH);

                return {
                    x,
                    y: arcY + Math.random() * effectiveH * SPAWN_HEIGHT_MULT,
                    speed: BASE_SPEED + Math.random() * SPEED_VAR,
                    phase: Math.random() * Math.PI * 2,
                    length: 2 + Math.random() * 5
                };
            });
        };

        /* =========================================================
           🔧 ARC INTERSECTION
           ========================================================= */

        const getArcY = (px: number, w: number, h: number, size: number, effectiveH: number) => {
            const uvX = ((px - w / 2) / size) * 2.0;
            const scaledX = uvX * SHADER_X_SCALE;
            const sx2 = scaledX * scaledX;

            if (sx2 >= ARC_RADIUS_SQ) return -1000;

            const term = Math.sqrt(ARC_RADIUS_SQ - sx2);
            const uvY = term - SHADER_Y_OFFSET;

            // Center based on effective height (70vh), not full canvas height
            const arcCenterY = effectiveH / 2;

            const py = arcCenterY - (uvY * size / 2.0);
            return py + 2;
        };

        /* =========================================================
           🔧 RENDER LOOP
           ========================================================= */

        const render = () => {
            const dpr = window.devicePixelRatio || 1;
            const w = canvas.width / dpr;
            const h = canvas.height / dpr;

            const effectiveH = getEffectiveHeight();
            const size = Math.min(w, effectiveH);

            ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
            ctx.fillRect(0, 0, w, h);

            ctx.globalCompositeOperation = "lighter";

            particles.forEach((p) => {
                const arcY = getArcY(p.x, w, h, size, effectiveH);

                p.y += p.speed;

                if (p.y > h) {
                    p.y = arcY + Math.random() * RESPAWN_SPREAD;
                    p.speed = BASE_SPEED + Math.random() * SPEED_VAR;
                }

                if (arcY < 0 && p.y < 0) return;

                let alpha = 1.0;

                const distFromSource = p.y - arcY;
                if (distFromSource < 50) {
                    alpha *= smoothStep(0, 50, distFromSource);
                }

                const bottomFadeStart = h - 150;
                if (p.y > bottomFadeStart) {
                    alpha *= (1.0 - smoothStep(bottomFadeStart, h, p.y));
                }

                if (alpha < 0.01) return;

                const sizeVar =
                    1.2 + Math.sin(p.phase + Date.now() * 0.01) * 0.5;

                ctx.fillStyle = `rgba(${NEON_RED}, ${alpha})`;
                ctx.fillRect(
                    p.x,
                    p.y,
                    sizeVar,
                    p.length * (p.speed * 0.8)
                );
            });

            ctx.globalCompositeOperation = "source-over";
            animationFrameId = requestAnimationFrame(render);
        };

        /* =========================================================
           🔧 RESIZE HANDLING
           ========================================================= */

        const resize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;

            const w = parent.clientWidth;
            const h = parent.clientHeight;

            canvas.width = w * window.devicePixelRatio;
            canvas.height = h * window.devicePixelRatio;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;

            ctx.setTransform(
                window.devicePixelRatio,
                0,
                0,
                window.devicePixelRatio,
                0,
                0
            );

            initParticles(w, h);
        };

        resize();
        window.addEventListener("resize", resize);
        render();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none mix-blend-lighten"
            style={{
                maskImage:
                    "linear-gradient(to bottom, black 90%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to bottom, black 90%, transparent 100%)",
            }}
        />
    );
}

/* =========================================================
   🔧 SMOOTH STEP
   ========================================================= */
function smoothStep(min: number, max: number, value: number) {
    const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
    return x * x * (3 - 2 * x);
}
