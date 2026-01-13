import React, { useEffect, useState } from 'react';
import { Network, Gem, Trophy, Users2, GraduationCap, TrendingUp } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const NetworkIntroSlide: React.FC<SlideProps> = ({ isActive }) => {
    const [animatedStats, setAnimatedStats] = useState({ orgs: 0, events: 0, investment: 0 });

    useEffect(() => {
        if (isActive) {
            // Animate numbers
            const duration = 1500;
            const steps = 30;
            const interval = duration / steps;

            let step = 0;
            const timer = setInterval(() => {
                step++;
                const progress = step / steps;
                const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic

                setAnimatedStats({
                    orgs: Math.round(80 * eased),
                    events: Math.round(2000 * eased),
                    investment: Math.round(9.1 * eased * 10) / 10,
                });

                if (step >= steps) clearInterval(timer);
            }, interval);

            return () => clearInterval(timer);
        }
    }, [isActive]);

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="ambient-blob ambient-blob-gold w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-msl-gold text-sm font-bold uppercase mb-6 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <Network size={14} fill="currentColor" /> Enter MSL
                        </div>

                        {/* Title */}
                        <h2 className={`text-4xl md:text-5xl font-black text-white mb-6 leading-tight transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Introducing
                            <br />
                            <span className="gradient-text-gold">The MSL Network</span>
                        </h2>

                        {/* Description */}
                        <p className={`text-lg text-gray-400 mb-8 leading-relaxed transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            The centralized ecosystem for collegiate esports in the Philippines — built to <span className="text-white font-semibold">Professionalize</span>, <span className="text-white font-semibold">Empower</span>, and <span className="text-white font-semibold">Sustain</span> student organizations.
                        </p>

                        {/* Stats */}
                        <div className={`grid grid-cols-3 gap-4 transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-black text-white mb-0.5">
                                    {animatedStats.orgs}+
                                </div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Partner Orgs</div>
                            </div>
                            <div className="text-center border-x border-white/10 px-2">
                                <div className="text-2xl md:text-3xl font-black text-white mb-0.5">
                                    {animatedStats.events.toLocaleString()}+
                                </div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Events</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-black text-msl-gold mb-0.5 flex items-center justify-center gap-1">
                                    <TrendingUp size={16} />
                                    ₱{animatedStats.investment}M+
                                </div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Invested</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Network Graph */}
                    <div className={`relative h-[500px] transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        {/* Connection Lines - Behind everything */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                            <defs>
                                <linearGradient id="networkGrad1" x1="50%" y1="50%" x2="15%" y2="8%">
                                    <stop offset="0%" style={{ stopColor: '#F2C21A', stopOpacity: 0.7 }} />
                                    <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0.4 }} />
                                </linearGradient>
                                <linearGradient id="networkGrad2" x1="50%" y1="50%" x2="85%" y2="12%">
                                    <stop offset="0%" style={{ stopColor: '#F2C21A', stopOpacity: 0.7 }} />
                                    <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 0.4 }} />
                                </linearGradient>
                                <linearGradient id="networkGrad3" x1="50%" y1="50%" x2="15%" y2="82%">
                                    <stop offset="0%" style={{ stopColor: '#F2C21A', stopOpacity: 0.7 }} />
                                    <stop offset="100%" style={{ stopColor: '#22C55E', stopOpacity: 0.4 }} />
                                </linearGradient>
                                <linearGradient id="networkGrad4" x1="50%" y1="50%" x2="85%" y2="88%">
                                    <stop offset="0%" style={{ stopColor: '#F2C21A', stopOpacity: 0.7 }} />
                                    <stop offset="100%" style={{ stopColor: '#EF4444', stopOpacity: 0.4 }} />
                                </linearGradient>
                            </defs>
                            {/* Lines connecting to nodes */}
                            <line x1="50%" y1="50%" x2="18%" y2="12%" stroke="url(#networkGrad1)" strokeWidth="2" />
                            <line x1="50%" y1="50%" x2="82%" y2="16%" stroke="url(#networkGrad2)" strokeWidth="2" />
                            <line x1="50%" y1="50%" x2="18%" y2="78%" stroke="url(#networkGrad3)" strokeWidth="2" />
                            <line x1="50%" y1="50%" x2="82%" y2="84%" stroke="url(#networkGrad4)" strokeWidth="2" />

                            {/* Orbit circles */}
                            <circle cx="50%" cy="50%" r="140" stroke="#333" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.3" />
                            <circle cx="50%" cy="50%" r="200" stroke="#222" strokeWidth="1" fill="none" opacity="0.2" />
                        </svg>

                        {/* Center Node - Larger */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-msl-surface to-black border-2 border-msl-gold rounded-full flex flex-col items-center justify-center glow-gold-intense z-20 animate-pulse-glow">
                            <span className="text-msl-gold font-black text-4xl">MSL</span>
                            <span className="text-gray-500 text-[10px] uppercase tracking-widest">Network</span>
                        </div>

                        {/* Node 1: Resources - Top Left */}
                        <div className="absolute top-[6%] left-[6%] p-3 glass rounded-xl z-10">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <Gem size={18} className="text-blue-400" />
                                </div>
                                <span className="text-sm font-bold text-white">Resources</span>
                            </div>
                        </div>

                        {/* Node 2: Competitions - Top Right */}
                        <div className="absolute top-[10%] right-[2%] p-3 glass rounded-xl z-10">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <Trophy size={18} className="text-purple-400" />
                                </div>
                                <span className="text-sm font-bold text-white">Competitions</span>
                            </div>
                        </div>

                        {/* Node 3: Community - Bottom Left */}
                        <div className="absolute bottom-[16%] left-[6%] p-3 glass rounded-xl z-10">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Users2 size={18} className="text-green-400" />
                                </div>
                                <span className="text-sm font-bold text-white">Community</span>
                            </div>
                        </div>

                        {/* Node 4: Education - Bottom Right */}
                        <div className="absolute bottom-[10%] right-[2%] p-3 glass rounded-xl z-10">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                    <GraduationCap size={18} className="text-red-400" />
                                </div>
                                <span className="text-sm font-bold text-white">Education</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetworkIntroSlide;
