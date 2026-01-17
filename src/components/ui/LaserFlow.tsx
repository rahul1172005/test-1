import { motion } from 'framer-motion';

interface LaserFlowProps {
    horizontalBeamOffset?: number;
    verticalBeamOffset?: number;
    color?: string;
}

const LaserFlow = ({
    horizontalBeamOffset = 0.5,
    verticalBeamOffset = 0.5,
    color = '#DC143C'
}: LaserFlowProps) => {
    // Convert hex color to RGB for use in rgba
    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 220, g: 20, b: 60 };
    };

    const rgb = hexToRgb(color);
    const rgbaString = `${rgb.r}, ${rgb.g}, ${rgb.b}`;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Vertical Laser Beam */}
            <motion.div
                className="absolute w-[2px] h-full"
                style={{
                    left: `${horizontalBeamOffset * 100}%`,
                    background: `linear-gradient(to bottom, 
                        transparent 0%, 
                        rgba(${rgbaString}, 0.3) 20%, 
                        rgba(${rgbaString}, 0.8) ${verticalBeamOffset * 100}%, 
                        rgba(${rgbaString}, 0.3) 80%, 
                        transparent 100%)`,
                    boxShadow: `0 0 10px rgba(${rgbaString}, 0.5), 0 0 20px rgba(${rgbaString}, 0.3)`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Horizontal Laser Beam */}
            <motion.div
                className="absolute h-[2px] w-full"
                style={{
                    top: `${verticalBeamOffset * 100}%`,
                    background: `linear-gradient(to right, 
                        transparent 0%, 
                        rgba(${rgbaString}, 0.3) 20%, 
                        rgba(${rgbaString}, 0.8) ${horizontalBeamOffset * 100}%, 
                        rgba(${rgbaString}, 0.3) 80%, 
                        transparent 100%)`,
                    boxShadow: `0 0 10px rgba(${rgbaString}, 0.5), 0 0 20px rgba(${rgbaString}, 0.3)`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
            />

            {/* Intersection Glow */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    left: `${horizontalBeamOffset * 100}%`,
                    top: `${verticalBeamOffset * 100}%`,
                    width: '20px',
                    height: '20px',
                    transform: 'translate(-50%, -50%)',
                    background: `radial-gradient(circle, rgba(${rgbaString}, 0.8) 0%, rgba(${rgbaString}, 0.4) 50%, transparent 100%)`,
                    boxShadow: `0 0 30px rgba(${rgbaString}, 0.8), 0 0 60px rgba(${rgbaString}, 0.4)`,
                }}
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Flowing Particles along vertical beam */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`v-particle-${i}`}
                    className="absolute w-1 h-3 rounded-full"
                    style={{
                        left: `${horizontalBeamOffset * 100}%`,
                        background: `rgba(${rgbaString}, 0.9)`,
                        boxShadow: `0 0 8px rgba(${rgbaString}, 0.8)`,
                    }}
                    initial={{ top: '0%', opacity: 0 }}
                    animate={{
                        top: ['0%', '100%'],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 1.3,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Flowing Particles along horizontal beam */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`h-particle-${i}`}
                    className="absolute h-1 w-3 rounded-full"
                    style={{
                        top: `${verticalBeamOffset * 100}%`,
                        background: `rgba(${rgbaString}, 0.9)`,
                        boxShadow: `0 0 8px rgba(${rgbaString}, 0.8)`,
                    }}
                    initial={{ left: '0%', opacity: 0 }}
                    animate={{
                        left: ['0%', '100%'],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 1.3,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

export default LaserFlow;
