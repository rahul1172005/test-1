import { useRef } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const About = () => {
    const teamScrollRef = useRef<HTMLDivElement>(null);

    const scrollTeam = (direction: 'left' | 'right') => {
        if (teamScrollRef.current) {
            const { current } = teamScrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-black min-h-screen text-white selection:bg-red-500/30 selection:text-white overflow-x-hidden flex flex-col font-sans w-full">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden w-full">
                {/* Ambient effects removed */}

                <div className="container mx-auto px-6 max-w-[1400px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-5xl"
                    >
                        <h4 className="text-red-500 font-bold tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8 text-xs uppercase border-l-2 border-red-500 pl-4">The Zapsters Manifesto</h4>
                        <h1 className="text-6xl md:text-[7rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-none mb-8 md:mb-12 break-words">
                            We Don't Predict <br />
                            The Future. <br />
                            We Build It.
                        </h1>
                    </motion.div>
                </div>
            </header>

            {/* --- SCROLLING MANIFESTO --- */}
            {/* --- SCROLLING MANIFESTO --- */}
            <section className="py-6 md:py-10 border-y border-white/10 bg-white/[0.02] overflow-hidden whitespace-nowrap w-full relative">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />
                <motion.div
                    className="flex items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            {[...Array(4)].map((__, j) => (
                                <span key={j} className="text-4xl md:text-8xl font-bold text-white/10 mx-6 md:mx-12 tracking-tighter uppercase whitespace-nowrap">
                                    Vision • Disruption • Execution •
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </section>

            <main className="flex-grow relative w-full">
                {/* --- NARRATIVE SECTION --- */}
                <section className="py-20 md:py-40 container mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
                                In an age of digital noise, <br />
                                <span className="text-gray-500">we design the signal.</span>
                            </h2>
                        </div>
                        <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                            <p>
                                <strong className="text-white font-bold">Zapsters Agency</strong> was born from a singular obsession: perfection. We realized that most digital agencies were stuck in the past—building websites when they should be building ecosystems, designing pages when they should be crafting experiences.
                            </p>
                            <p>
                                We operate at the intersection of heavy engineering and high-fashion aesthetics. We believe that B2B software doesn't have to be boring, and that corporate websites should feel like cinematic masterpieces.
                            </p>
                            <p>
                                Our team is a collective of outliers—engineers who love art, and designers who understand code. Together, we are redefining what it means to be a digital agency in the 21st century.
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- STATS GRID (BENTO STYLE) --- */}
                <section className="py-12 md:py-20 container mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className="col-span-1 md:col-span-2 group relative h-auto rounded-[40px] bg-gradient-to-br from-[#080808] to-[#020202] border-[2px] border-[#0a0a0a] overflow-hidden p-8 md:p-12 shadow-2xl ring-1 ring-[#1a1a1a]/60 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-500"
                            style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10">
                                <span className="text-6xl md:text-9xl font-bold text-white tracking-tighter block mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-500 origin-left">10+</span>
                                <span className="text-sm md:text-xl text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">Years of Innovation</span>
                                <p className="mt-6 md:mt-8 text-sm md:text-base text-gray-500 max-w-md group-hover:text-gray-400 transition-colors">Decades of combined experience pushing the boundaries of what's possible on the web.</p>
                            </div>
                        </div>

                        <div
                            className="group relative h-auto rounded-[40px] bg-gradient-to-br from-[#080808] to-[#020202] border-[2px] border-[#0a0a0a] overflow-hidden p-8 md:p-12 flex flex-col justify-between shadow-2xl ring-1 ring-[#1a1a1a]/60 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-500"
                            style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div>
                                    <span className="text-4xl md:text-6xl font-bold text-white tracking-tighter block mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-500 origin-left">$500M+</span>
                                    <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">Client Value Created</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="group relative h-auto rounded-[40px] bg-gradient-to-br from-[#080808] to-[#020202] border-[2px] border-[#0a0a0a] overflow-hidden p-8 md:p-12 flex flex-col justify-between shadow-2xl ring-1 ring-[#1a1a1a]/60 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-500"
                            style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div>
                                    <span className="text-4xl md:text-6xl font-bold text-white tracking-tighter block mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-500 origin-left">50+</span>
                                    <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">Global Partners</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-span-1 md:col-span-2 group relative h-auto rounded-[40px] bg-gradient-to-br from-[#080808] to-[#020202] border-[2px] border-[#0a0a0a] overflow-hidden p-8 md:p-12 shadow-2xl ring-1 ring-[#1a1a1a]/60 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-500"
                            style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10">
                                <span className="text-6xl md:text-9xl font-bold text-white tracking-tighter block mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-500 origin-left">100%</span>
                                <span className="text-sm md:text-xl text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">Client Retention</span>
                                <p className="mt-6 md:mt-8 text-sm md:text-base text-gray-500 max-w-md group-hover:text-gray-400 transition-colors">We don't just build projects; we build lifelong partnerships with our clients.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- LEADERSHIP DEEP DIVE --- */}
                <section className="py-20 md:py-40 border-t border-white/10">
                    <div className="container mx-auto px-6 max-w-[1400px]">
                        <div className="mb-16 md:mb-32">
                            <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Visionaries</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white">Meet the Architects.</h2>
                        </div>

                        {/* Founder 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center mb-24 md:mb-40">
                            <div className="lg:col-span-5 relative group order-2 lg:order-1">
                                <div className="aspect-[3/4] overflow-hidden rounded-[2px] relative z-10">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                                        alt="Sabari Raja"
                                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                                        loading="lazy"
                                    />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-24 md:w-40 h-24 md:h-40 border-[0.5px] border-white/20 z-0" />
                                <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-full h-full border-[0.5px] border-white/10 z-0 bg-[#050505] -z-10" />
                            </div>
                            <div className="lg:col-span-1 hidden lg:block order-2" /> {/* Spacer */}
                            <div className="lg:col-span-6 order-1 lg:order-3">
                                <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-2">Sabari Raja</h3>
                                <p className="text-red-500 text-lg md:text-xl font-mono uppercase tracking-widest mb-8 md:mb-10">Founder & CEO</p>

                                <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed border-l-2 border-white/10 pl-6 md:pl-8">
                                    <p>
                                        Sabari is the driving force behind the Zapsters vision. With a background in scalable architecture and a passion for minimalist design, he founded Zapsters to bridge the gap between engineering and art.
                                    </p>
                                    <p>
                                        "We are not here to compete. We are here to set the standard. Every pixel, every line of code, every interaction must be intentional. That is the Zapsters way."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Founder 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
                            <div className="lg:col-span-6 order-1 lg:order-1">
                                <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-2">Rahul</h3>
                                <p className="text-red-500 text-lg md:text-xl font-mono uppercase tracking-widest mb-8 md:mb-10">Co-Founder & CTO</p>

                                <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed border-l-2 border-white/10 pl-6 md:pl-8">
                                    <p>
                                        Rahul leads the technological strategy at Zapsters. His expertise in AI, cloud infrastructure, and security ensures that our solutions are as robust as they are beautiful.
                                    </p>
                                    <p>
                                        "The most beautiful code is invisible. It works so seamlessly that the user forgets it's there. That is the level of mastery we strive for in every deployment."
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-1 hidden lg:block order-2" /> {/* Spacer */}
                            <div className="lg:col-span-5 relative group order-2 lg:order-3">
                                <div className="aspect-[3/4] overflow-hidden rounded-[2px] relative z-10">
                                    <img
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                                        alt="Rahul"
                                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                                        loading="lazy"
                                    />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-24 md:w-40 h-24 md:h-40 border-[0.5px] border-white/20 z-0" />
                                <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-full h-full border-[0.5px] border-white/10 z-0 bg-[#050505] -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- ZAPSTERS TEAM SECTION --- */}
                <section className="py-20 md:py-32 border-t border-white/10 bg-[#050505]">
                    <div className="container mx-auto px-6 max-w-[1400px]">
                        <div className="text-center mb-20">
                            <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our People</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">ZAPSTERS TEAM</h2>
                        </div>

                        {/* Carousel Controls */}
                        {/* Continuous Styling Marquee for Team */}
                        <div className="relative w-full overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />

                            <motion.div
                                className="flex gap-8"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                            >
                                {[...Array(2)].map((_, setIndex) => (
                                    <div key={setIndex} className="flex gap-8">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className="min-w-[300px] md:min-w-[350px] group relative">
                                                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white/5 relative z-10 border border-white/10">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                                                    <img
                                                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=600`}
                                                        alt={`Team Member ${i + 1}`}
                                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                                                    />
                                                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                                                        <h3 className="text-xl font-bold text-white mb-1">Team Member {setIndex * 10 + i + 1}</h3>
                                                        <p className="text-red-500 text-xs tracking-widest uppercase">Specialist Role</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- IMAGE COLLAGE (Life at Zapsters) --- */}
                <section className="py-20 overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 max-w-[1600px] mx-auto">
                        <div className="aspect-square bg-white/5 rounded-2xl overflow-hidden mt-10 md:mt-20"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-500" alt="Office" loading="lazy" /></div>
                        <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-500" alt="Meeting" loading="lazy" /></div>
                        <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden mt-16 md:mt-32"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-500" alt="Team" loading="lazy" /></div>
                        <div className="aspect-square bg-white/5 rounded-2xl overflow-hidden mt-6 md:mt-10"><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-500" alt="Work" loading="lazy" /></div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="py-24 md:py-40 container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-8xl font-bold text-white tracking-tighter mb-8 md:mb-12">
                        Ready to define the future?
                    </h2>
                    <a href="/contact" className="inline-block bg-red-600 text-white px-10 md:px-16 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-red-700 transition-all tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                        Join the Movement
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
};
