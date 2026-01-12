import React, { useEffect, useState } from 'react';
import { Network, Building2, Users, TrendingUp, MapPin } from 'lucide-react';

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
                    investment: Math.round(7.9 * eased * 10) / 10,
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
                        <h2 className={`text-4xl md:text-6xl font-black text-white mb-6 leading-tight transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Welcome to
                            <br />
                            <span className="gradient-text-gold">The MSL Network</span>
                        </h2>

                        {/* Description */}
                        <p className={`text-xl text-gray-400 mb-8 leading-relaxed transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            The centralized bridge for collegiate esports in the Philippines. An ecosystem designed to
                            <span className="text-white font-bold"> Professionalize</span>,
                            <span className="text-white font-bold"> Empower</span>, and
                            <span className="text-white font-bold"> Sustain</span> student organizations.
                        </p>

                        {/* Stats */}
                        <div className={`grid grid-cols-3 gap-6 transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                                    {animatedStats.orgs}+
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Partner Orgs</div>
                            </div>
                            <div className="text-center border-x border-white/10">
                                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                                    {animatedStats.events.toLocaleString()}+
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Events</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-msl-gold mb-1 flex items-center justify-center gap-1">
                                    <TrendingUp size={20} />
                                    ₱{animatedStats.investment}M+
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Invested</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Network Graph */}
                    <div className={`relative h-[500px] transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        {/* Center Node */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-msl-surface to-black border-2 border-msl-gold rounded-full flex flex-col items-center justify-center glow-gold-intense z-20 animate-pulse-glow">
                            <span className="text-msl-gold font-black text-3xl">MSL</span>
                            <span className="text-gray-500 text-[8px] uppercase tracking-widest">Network</span>
                        </div>

                        {/* Orbiting Nodes */}
                        <div className="absolute top-[10%] left-[15%] p-3 glass rounded-xl animate-float">
                            <div className="flex items-center gap-2">
                                <Building2 size={18} className="text-blue-400" />
                                <span className="text-xs font-bold text-white">Universities</span>
                            </div>
                        </div>

                        <div className="absolute top-[20%] right-[10%] p-3 glass rounded-xl animate-float-delayed">
                            <div className="flex items-center gap-2">
                                <Users size={18} className="text-purple-400" />
                                <span className="text-xs font-bold text-white">Organizations</span>
                            </div>
                        </div>

                        <div className="absolute bottom-[25%] left-[8%] p-3 glass rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-green-400" />
                                <span className="text-xs font-bold text-white">Nationwide</span>
                            </div>
                        </div>

                        <div className="absolute bottom-[15%] right-[15%] p-3 glass rounded-xl animate-float-delayed" style={{ animationDelay: '0.5s' }}>
                            <div className="flex items-center gap-2">
                                <TrendingUp size={18} className="text-msl-gold" />
                                <span className="text-xs font-bold text-white">Growth</span>
                            </div>
                        </div>

                        {/* Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                            <defs>
                                <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#F2C21A', stopOpacity: 0.4 }} />
                                    <stop offset="100%" style={{ stopColor: '#F2C21A', stopOpacity: 0 }} />
                                </linearGradient>
                            </defs>
                            <line x1="50%" y1="50%" x2="20%" y2="15%" stroke="url(#networkGrad)" strokeWidth="1" />
                            <line x1="50%" y1="50%" x2="85%" y2="25%" stroke="url(#networkGrad)" strokeWidth="1" />
                            <line x1="50%" y1="50%" x2="12%" y2="72%" stroke="url(#networkGrad)" strokeWidth="1" />
                            <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="url(#networkGrad)" strokeWidth="1" />

                            <circle cx="50%" cy="50%" r="150" stroke="#333" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.4" />
                            <circle cx="50%" cy="50%" r="220" stroke="#222" strokeWidth="1" fill="none" opacity="0.3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetworkIntroSlide;
