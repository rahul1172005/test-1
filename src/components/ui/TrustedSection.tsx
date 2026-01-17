import { ShieldCheck, Github } from 'lucide-react';

export const TrustedSection = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-[5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-none mb-4">
                        Trusted Allies
                    </h2>
                </div>

                <div className="flex justify-center max-w-6xl mx-auto">
                    <img
                        src="/cybercom-card-v2.png"
                        alt="Cybercom"
                        className="w-full max-w-[250px] h-auto object-contain"
                    />
                </div>

                <div className="mt-32 text-center">
                    <h2 className="text-5xl font-bold text-white mb-8">
                        Features of tomorrow. <br />
                        Available today.
                    </h2>
                    <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`h-[250px] rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-sm flex items-center justify-center p-6 hover:bg-surface/80 transition-all ${className}`}>
        {children}
    </div>
);
