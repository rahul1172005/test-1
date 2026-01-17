import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';

export const Services = () => {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-red-500/30 selection:text-white overflow-x-hidden flex flex-col font-sans w-full">
            <Navbar />

            <header className="relative pt-32 pb-12 md:pt-48 md:pb-20 w-full overflow-hidden">
                {/* Ambient effects removed */}

                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h1 className="text-5xl md:text-[10rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-[0.9] md:leading-[0.85] mb-8 md:mb-12">
                        Our <br />
                        Capabilities.
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light border-l-2 border-red-500 pl-6 md:pl-8">
                        We don't just clear tickets. We architect solutions. Our agency is divided into three specialized divisions, each obsessed with a different facet of digital perfection.
                    </p>
                </div>
            </header>

            <main className="flex-grow w-full">
                {/* --- ENGINEERING DIVISION --- */}
                <section className="py-20 md:py-32 border-t border-white/10 w-full">
                    <div className="container mx-auto px-6 max-w-[1400px]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
                            <div className="lg:col-span-4 lg:sticky lg:top-40 self-start h-fit">
                                <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">Division 01</span>
                                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tighter">Engineering</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                                    The backbone of Zapsters. We write clean, testable, and robust code that scales effortlessly from day one.
                                </p>
                                <div className="space-y-4 text-sm md:text-base">
                                    <div className="flex items-center gap-4 text-white/50"><span className="w-2 h-2 bg-red-500 rounded-full"></span>Scalable Architecture</div>
                                    <div className="flex items-center gap-4 text-white/50"><span className="w-2 h-2 bg-red-500 rounded-full"></span>Performance First</div>
                                    <div className="flex items-center gap-4 text-white/50"><span className="w-2 h-2 bg-red-500 rounded-full"></span>Security Hardened</div>
                                </div>
                            </div>

                            <div className="lg:col-span-8 space-y-6 md:space-y-8">
                                {[
                                    { title: "Full-Stack Development", tools: "React, Node.js, Next.js", desc: "Building complex web applications that feel like native software. We handle everything from the database schema to the client-side state management." },
                                    { title: "Mobile Engineering", tools: "Swift, Kotlin, React Native", desc: "Native and cross-platform mobile apps. We obsess over 60fps animations and native platform feel." },
                                    { title: "DevOps & Cloud", tools: "AWS, Docker, Kubernetes", desc: "Automated CI/CD pipelines and serverless infrastructure. We ensure your code ships safely and runs reliably." },
                                    { title: "AI Integration", tools: "OpenAI, Python, PyTorch", desc: "Weaving intelligence into your products. From chatbots to predictive analytics models." },
                                ].map((service, i) => (
                                    <div key={i}
                                        className="group relative h-auto rounded-[32px] bg-gradient-to-br from-[#080808] to-[#020202] border-[2px] border-[#0a0a0a] overflow-hidden p-8 md:p-12 shadow-2xl ring-1 ring-[#1a1a1a]/60 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-500"
                                        style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        {/* Dynamic Icon Layer */}
                                        {service.icon && (
                                            <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 pointer-events-none z-0 opacity-80 mix-blend-screen group-hover:scale-110 transition-transform duration-700">
                                                <img src={service.icon} alt="Service Icon" className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]" />
                                            </div>
                                        )}

                                        <div className="relative z-10">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-500 origin-left">{service.title}</h3>
                                                <span className="text-xs font-mono border border-white/20 rounded-full px-3 py-1 text-gray-400 w-fit backdrop-blur-md bg-white/5 group-hover:border-white/40 transition-colors">{service.tools}</span>
                                            </div>
                                            <p className="text-gray-400 text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- DESIGN DIVISION --- */}
                <section className="py-20 md:py-32 border-t border-white/10 w-full">
                    <div className="container mx-auto px-6 max-w-[1400px]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
                            <div className="lg:col-span-4 lg:sticky lg:top-40 self-start h-fit">
                                <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">Division 02</span>
                                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tighter">Design</h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                                    We don't make things pretty; we make them intuitive. Our design philosophy is rooted in usability and emotional connection.
                                </p>
                            </div>

                            <div className="lg:col-span-8 space-y-6 md:space-y-8">
                                {[
                                    { title: "Product Design (UI/UX)", tools: "Figma, Principle", desc: "Crafting end-to-end user journeys. We wireframe, prototype, and polish every interaction." },
                                    { title: "Design Systems", tools: "Storybook, Tokens", desc: "Creating a localized language of components. Ensuring consistency across every single touchpoint of your brand." },
                                    { title: "Brand Identity", tools: "Illustrator, Motion", desc: "Logos, typography, and voice showing not just who you are, but who you aspire to be." },
                                ].map((service: any, i) => (
                                    <div key={i}
                                        className="group relative h-auto rounded-[32px] bg-gradient-to-br from-[#080808] to-[#020202] border-[2px] border-[#0a0a0a] overflow-hidden p-8 md:p-12 shadow-2xl ring-1 ring-[#1a1a1a]/60 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-500"
                                        style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />



                                        <div className="relative z-10">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-500 origin-left">{service.title}</h3>
                                                <span className="text-xs font-mono border border-white/20 rounded-full px-3 py-1 text-gray-400 w-fit backdrop-blur-md bg-white/5 group-hover:border-white/40 transition-colors">{service.tools}</span>
                                            </div>
                                            <p className="text-gray-400 text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- PROCESS TIMELINE (Horizontal Scroll Vibe) --- */}
                <section className="py-20 md:py-40 bg-white/[0.02] w-full">
                    <div className="container mx-auto px-6 max-w-[1400px]">
                        <div className="mb-12 md:mb-20 text-center">
                            <h2 className="text-5xl md:text-[5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-none">The Methodology.</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { step: "01", title: "Discovery", text: "We dive deep into your business logic, market, and competitors." },
                                { step: "02", title: "Architecture", text: "We plan the tech stack, database schema, and design system." },
                                { step: "03", title: "Execution", text: "Agile sprints, daily standups, and rigorous code reviews." },
                                { step: "04", title: "Launch", text: "Deployment, monitoring, and scaling to millions of users." },
                            ].map((item, i) => (
                                <div key={i}
                                    className="relative h-full rounded-[24px] bg-gradient-to-br from-[#080808] to-[#020202] border-[2px] border-[#0a0a0a] overflow-hidden p-8 group shadow-xl ring-1 ring-[#1a1a1a]/60 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-500"
                                    style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="relative z-10">
                                        <span className="text-4xl font-bold text-white/10 mb-6 block group-hover:text-white/20 transition-colors drop-shadow-sm">{item.step}</span>
                                        <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-300 origin-left">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-40 container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12">
                        Need something specific?
                    </h2>
                    <a href="/contact" className="inline-block bg-red-600 text-white px-10 md:px-16 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                        Consult Our Engineers
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
};
