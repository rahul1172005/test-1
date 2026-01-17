
import { motion } from 'framer-motion';
import { ArrowRight, FileText, MoreVertical, Plus, User } from 'lucide-react';
import { FeatureCard } from './hero/FeatureCard';
import OrbitSystem from './hero/OrbitSystem';

export const MufiHero = () => {
    return (
        <div className="relative min-h-screen bg-mufi-bg text-white overflow-hidden pt-20 pb-20 font-sans selection:bg-mufi-accent-pink/30">
            {/* Main Background Beam - Enhanced */}
            {/* Central beam core */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[4px] h-[800px] bg-gradient-to-b from-white via-mufi-beam-from to-mufi-beam-to blur-[2px] z-0 opacity-80" />
            {/* Wider beam glow */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150px] h-[800px] bg-gradient-to-b from-mufi-beam-from/40 via-mufi-accent-pink/20 to-transparent blur-3xl z-0" />
            {/* Ambient Purple Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-mufi-accent-pink/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">


                {/* Hero Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-mufi-accent-pink to-white">AI Agents</span> for <br />
                            magical customer <br />
                            journeys
                        </motion.h1>
                    </div>
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg mb-8 max-w-md"
                        >
                            Chatbase is the complete platform for building & deploying AI Agents for your business to handle customer support & drive more revenue.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="group relative px-6 py-3 bg-gradient-to-r from-mufi-accent-pink to-mufi-accent-purple rounded-full font-medium shadow-[0_0_20px_rgba(255,77,77,0.5)] hover:shadow-[0_0_40px_rgba(255,77,77,0.7)] transition-shadow"
                        >

                            <span className="relative z-10 flex items-center">
                                Build your agent
                                {/* <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
                            </span>
                            {/* Button Glow */}
                            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                    </div>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">

                    {/* Left Card: Sources */}
                    <FeatureCard delay={0.4} className="flex flex-col justify-between h-full bg-gradient-to-b from-[#1a1025] to-[#0a0510] border-none ring-1 ring-white/10">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-gray-400 text-sm">
                                <span>Sources</span>
                                <MoreVertical size={16} />
                            </div>

                            {/* File Item */}
                            <div className="bg-black/40 rounded-xl p-3 flex items-center space-x-3 border border-white/5">
                                <FileText className="text-gray-400" size={20} />
                                <span className="text-sm text-gray-200">Guide.pdf</span>
                            </div>

                            {/* Add Source Button */}
                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-mufi-accent-pink to-transparent flex items-center justify-center space-x-2 text-sm font-medium hover:opacity-90 transition-opacity text-white border border-white/10">
                                <Plus size={16} />
                                <span>Add source</span>
                            </button>
                        </div>

                        {/* Connection Line */}
                        <div className="relative h-12 w-full flex justify-center items-center">
                            <div className="w-[2px] h-full bg-gradient-to-b from-white/20 to-transparent" />
                            <div className="absolute w-3 h-3 bg-white/50 rounded-full blur-[2px]" />
                        </div>

                        {/* AI Action Item */}
                        <div className="bg-gradient-to-b from-purple-900/20 to-black/40 rounded-xl p-4 border border-white/5 mt-auto">
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                                    <span className="text-xs text-pink-300">AI action</span>
                                </div>
                                <MoreVertical size={14} className="text-gray-500" />
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center">
                                        {/* Calendar Icon */}
                                        <div className="w-4 h-4 bg-red-400 rounded-sm" />
                                    </div>
                                    <span>Book a meeting</span>
                                </div>
                                <div className="w-10 h-5 bg-white/10 rounded-full relative">
                                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                                </div>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Middle Card: Orbit System */}
                    <FeatureCard delay={0.5} className="h-full flex items-center justify-center bg-black/40 border-none ring-1 ring-white/10">
                        <OrbitSystem />
                    </FeatureCard>

                    {/* Right Card: User Profile */}
                    <FeatureCard delay={0.6} className="h-full flex flex-col justify-between bg-gradient-to-b from-[#1a1025] to-[#0a0510] border-none ring-1 ring-white/10">
                        {/* Top Notification */}
                        <div className="bg-white/5 rounded-2xl p-3 flex items-center justify-between mb-6 border border-white/5 shadow-lg backdrop-blur-sm">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-xs font-bold">
                                    ⚡
                                </div>
                                <span className="text-xs text-gray-300">I want to upgrade premium plan</span>
                            </div>
                            <ArrowRight size={14} className="text-gray-400" />
                        </div>

                        {/* Connection Beam */}
                        <div className="flex-1 flex flex-col items-center justify-center relative">
                            <div className="h-full w-[1px] bg-gradient-to-b from-white/10 via-pink-500 to-white/10" />
                            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full blur-md" />
                        </div>

                        {/* User Card */}
                        <div className="bg-black/60 rounded-2xl p-4 border border-white/10 mt-auto">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                                    {/* Placeholder Avatar */}
                                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                        <User size={24} className="text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">Logan Garner</div>
                                    <div className="text-xs text-gray-500">Logan Gamer</div>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-4 relative group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity" />
                            <div className="relative bg-black rounded-xl p-1 flex items-center border border-white/10">
                                <div className="flex-1 text-center py-2 text-sm text-white font-medium">Upgrading plan...</div>
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-[10px] mr-2">
                                    ↻
                                </div>
                            </div>
                        </div>
                    </FeatureCard>

                </div>

                {/* Bottom Logos */}
                <div className="mt-20 flex flex-wrap justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-xl font-bold font-serif">Opendoor</span>
                    <span className="text-xl font-bold">DocuSign</span>
                    <div className="flex items-center space-x-1"><span className="font-bold text-xl">#slack</span></div>
                    <span className="text-xl font-bold">splunk&gt;</span>
                    <span className="text-xl font-bold tracking-widest">ATLASSIAN</span>
                    <div className="flex items-center app-x-1"><div className="w-4 h-4 border-2 border-white" /> <span className="text-xl font-bold">Square</span></div>
                    <div className="flex items-center space-x-1"><span className="text-xl">★ Trustpilot</span></div>
                </div>
            </div>
        </div>
    );
};
