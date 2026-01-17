import React from "react";

const HeroVisual = () => {
    return (
        <section className="relative bg-black z-0 overflow-visible" style={{ minHeight: '140vh' }}>

            {/* Video Background - High Quality */}
            <video
                className="absolute inset-0 w-full object-cover pointer-events-none"
                style={{ height: '140vh' }}
                src="/src/assets/video41.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />

            {/* Gradient Overlay for Blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black pointer-events-none" style={{ height: '140vh' }} />


            {/* Extended Black Background to cover remaining area */}
            <div className="absolute -bottom-[100vh] left-0 w-full h-[100vh] bg-black -z-10" />

            {/* HERO CONTENT */}
            <div className="relative z-10 pt-48 text-center px-4 w-full">
                <h1 className="text-5xl sm:text-6xl md:text-[7rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-[1.1] md:leading-none max-w-[95vw] mx-auto break-words">
                    EVERYTHING SITE FOR<br />
                    YOUR FUTURE
                </h1>
            </div>

            {/* Your Vision, Our Execution Card */}
            <div className="relative z-10 container mx-auto px-6 mt-32">
                <div className="max-w-6xl mx-auto">
                    <div className="group relative h-auto md:h-[650px] min-h-[380px] rounded-[40px] overflow-hidden shadow-2xl bg-black border-[2px] border-[#0a0a0a] ring-1 ring-[#1a1a1a]/60"
                        style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 2px 4px rgba(255,255,255,0.03), inset 0 -1px 0 rgba(255,255,255,0.02)' }}>
                        {/* Background Image - pic4 (Fit Entire Image) */}
                        <div className="absolute inset-0">
                            <img
                                src="/src/assets/pic4.png"
                                alt="Background"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Left-Aligned Content Card Container */}
                        <div className="relative z-10 w-full h-full p-8 md:p-12 flex items-center justify-start">
                            {/* Content Card - Left Side (Matching Site Style) */}
                            <div className="relative rounded-[32px] bg-[#020202] border-[2px] border-[#0a0a0a] p-8 md:p-12 max-w-xl shadow-2xl ring-1 ring-[#1a1a1a]/60 overflow-hidden"
                                style={{
                                    boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 2px 4px rgba(255,255,255,0.03), inset 0 -1px 0 rgba(255,255,255,0.02)'
                                }}>
                                {/* pic5 Background */}
                                <div className="absolute inset-0">
                                    <img
                                        src="/src/assets/pic5.png"
                                        alt=""
                                        className="w-full h-full object-cover opacity-40"
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative text-left">
                                    <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-300 drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)]">
                                            Your Vision,<br />
                                            Our Execution
                                        </span>
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/90 font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                                        Transforming ideas into reality with cutting-edge technology and innovative solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AMBIENT RED LIGHT EFFECTS - Extended Beyond Section for Seamless Blend */}
            <div className="absolute top-0 left-0 w-full pointer-events-none overflow-visible" style={{ height: 'calc(50% + 1vh)' }}>
                {/* Main Vertical Light Column - Emanating from Arc Upward */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-full bg-gradient-to-t from-[rgba(220,20,60,0.2)] via-[rgba(200,30,50,0.12)] via-[rgba(180,20,40,0.08)] via-[rgba(160,20,35,0.05)] to-transparent blur-[100px]" />

                {/* Wider Atmospheric Spread */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-full bg-gradient-to-t from-[rgba(200,30,50,0.15)] via-[rgba(180,25,45,0.08)] via-[rgba(150,20,40,0.04)] to-transparent blur-[120px]" />

                {/* Central Intense Glow (Near Arc) */}
                <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 w-[800px] h-[50px] bg-[radial-gradient(ellipse_at_center,rgba(220,20,60,0.25)_0%,rgba(200,20,50,0.12)_40%,transparent_70%)] blur-[80px]" />

                {/* Upper Diffused Light */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[20vh] bg-gradient-to-b from-transparent via-[rgba(180,20,40,0.03)] to-[rgba(200,25,45,0.06)] blur-[90px]" />

                {/* Side Ambient Reflections - Full Height */}
                <div className="absolute bottom-0 left-[15%] w-[500px] h-[9vh] bg-gradient-to-t from-[rgba(200,20,50,0.08)] via-[rgba(180,20,40,0.04)] to-transparent blur-[70px]" />
                <div className="absolute bottom-0 right-[15%] w-[500px] h-[9vh] bg-gradient-to-t from-[rgba(200,20,50,0.08)] via-[rgba(180,20,40,0.04)] to-transparent blur-[70px]" />
            </div>


        </section>
    );
};

export default HeroVisual;
