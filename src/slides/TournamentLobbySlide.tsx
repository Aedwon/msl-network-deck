import React from 'react';
import { Gamepad2, Shield, CheckCircle, Star, Lock, Unlock } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const FEATURES = [
    'Full Hero/Skin Access',
    'Cross-Server Matches',
    'Pro Draft (6/10 Bans)',
    'Broadcast Quality Spectator',
];

const TournamentLobbySlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
            <div className="ambient-blob ambient-blob-purple w-[500px] h-[500px] top-[30%] right-[10%]" />
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-10 md:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left - Content */}
                    <div>
                        {/* Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-bold uppercase mb-6 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <Star size={14} fill="currentColor" /> Pro Tier
                        </div>

                        {/* Title */}
                        <h2 className={`text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Access the
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tournament Lobby</span>
                        </h2>

                        {/* Description */}
                        <p className={`text-xl text-gray-400 mb-8 leading-relaxed border-l-2 border-purple-500/30 pl-6 transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Run your tournaments like the MPL. This is the official client used by professionals, now available for verified campus organizers.
                        </p>

                        {/* Features */}
                        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            {FEATURES.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center shrink-0">
                                        <CheckCircle size={14} />
                                    </div>
                                    <span className="font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Visual */}
                    <div className={`relative transition-all duration-1000 delay-200 hidden md:block ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        {/* Glow */}
                        <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-[80px] animate-pulse" />

                        {/* Mock Client Window */}
                        <div className="relative h-[400px] bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8 overflow-hidden group hover:border-purple-500/30 transition-all">
                            {/* Top glow line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

                            {/* Bottom glow line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

                            {/* Content */}
                            <Gamepad2 size={80} className="text-white/10 group-hover:text-purple-500/20 transition-colors duration-500 mb-8" />

                            <div className="text-center z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Restricted Access</h3>
                                <p className="text-gray-500 text-sm mb-6">Verified organizers only</p>

                                {/* Status Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-mono group-hover:border-purple-500/50 transition-colors">
                                    <Shield size={12} className="text-purple-500" />
                                    CLIENT_VER: 2.1.0_PRO
                                </div>
                            </div>

                            {/* Lock to Unlock Animation */}
                            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-500">
                                <Lock size={16} className="text-gray-500 group-hover:hidden" />
                                <Unlock size={16} className="text-green-400 hidden group-hover:block" />
                            </div>

                            {/* Decorative scan lines */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentLobbySlide;
