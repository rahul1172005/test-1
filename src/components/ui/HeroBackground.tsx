
import { useEffect, useRef } from 'react';

export const HeroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const dots: { x: number; y: number; opacity: number; speed: number }[] = [];
        const spacing = 30; // Space between dots relative to simple grid

        // We only want to animate *some* random dots to twinkle, 
        // but primarily we just want a static grid for the base, 
        // and maybe some "active" dots that turn on and off.

        // Actually, the Neon site uses a static SVG pattern for the grid 
        // and then overlays some glowing dots. 
        // Let's implement a static grid + random twinkling dots.

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);

        // Create random twinkling dots
        for (let i = 0; i < 50; i++) {
            dots.push({
                x: Math.random() * width,
                y: Math.random() * height,
                opacity: Math.random(),
                speed: 0.005 + Math.random() * 0.01
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Static Grid (faint)
            ctx.fillStyle = '#1A1A1A'; // Dark gray dots
            // To save performance, we can just use a CSS background image for the static grid 
            // and use canvas ONLY for the dynamic twinkling parts. 
            // BUT for "exact match", let's try to do it all in canvas or mix.

            // Actually, drawing thousands of dots every frame in JS is heavy.
            // Let's stick to the "Active Dots" only in canvas, and use CSS for the static grid.

            // Draw Active "Twinkling" Dots (Green/Cyan)
            dots.forEach(dot => {
                dot.opacity += dot.speed;
                if (dot.opacity > 1 || dot.opacity < 0) dot.speed = -dot.speed;

                const currentOpacity = Math.max(0, Math.min(1, dot.opacity));

                // Snap to nearest grid point (optional, but looks techy)
                const gridX = Math.round(dot.x / spacing) * spacing;
                const gridY = Math.round(dot.y / spacing) * spacing;

                ctx.fillStyle = `rgba(0, 229, 153, ${currentOpacity})`; // Neon Green
                ctx.beginPath();
                ctx.arc(gridX, gridY, 1.5, 0, Math.PI * 2);
                ctx.fill();

                // Glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#00E599';
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            requestAnimationFrame(draw);
        };

        const animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* CSS Grid Pattern */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:30px_30px]"
                style={{
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
            />

            {/* Twinkling Dots Overlay */}
            <canvas ref={canvasRef} className="absolute inset-0" />

            {/* Top gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        </div>
    );
};
