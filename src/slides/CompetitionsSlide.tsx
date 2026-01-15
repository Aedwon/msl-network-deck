import React, { useState } from 'react';
import { Trophy, Users, Gamepad2, Award, Star, Crown, Target } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const CompetitionsSlide: React.FC<SlideProps> = ({ isActive }) => {
    const [activeTrack, setActiveTrack] = useState<'staff' | 'players'>('staff');

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="ambient-blob ambient-blob-gold w-[600px] h-[600px] top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 opacity-40" />
            <div className="ambient-blob w-[400px] h-[400px] top-1/2 right-1/4 -translate-y-1/2 opacity-20" style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1), transparent 70%)' }} />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-32 md:pb-0">
                {/* Header */}
                <div className={`text-center mb-10 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-msl-gold text-sm font-bold uppercase mb-6">
                        <Trophy size={14} /> Competition Tracks
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        A Path for
                        <span className="gradient-text-gold"> Everyone</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Compete and grow — whether you're behind the scenes or in the arena.
                    </p>
                </div>

                {/* Track Toggle */}
                <div className={`flex justify-center mb-8 transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex bg-msl-card border border-white/10 rounded-full p-1">
                        <button
                            onClick={() => setActiveTrack('staff')}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${activeTrack === 'staff'
                                ? 'bg-orange-500 text-white shadow-lg shadow-orange-900/30'
                                : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            <Users size={16} /> For Staff
                        </button>
                        <button
                            onClick={() => setActiveTrack('players')}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${activeTrack === 'players'
                                ? 'bg-msl-gold text-black shadow-lg shadow-yellow-900/30'
                                : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            <Gamepad2 size={16} /> For Players
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {activeTrack === 'staff' ? (
                        /* Staff Track - Activations & Leaderboard */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[auto] md:min-h-[460px]">
                            {/* Brand Activations */}
                            <div className="bg-msl-card border border-orange-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-orange-500/40 transition-all h-full">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500" />
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all" />

                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6">
                                        <Target size={28} className="text-orange-400" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-3">Brand Activations</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        Partner with Moonton on exclusive campaigns and activations. Gain real-world marketing and event management experience.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-sm">
                                            <Star size={14} className="text-orange-400" />
                                            <span className="text-gray-300">Campus marketing campaigns</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <Star size={14} className="text-orange-400" />
                                            <span className="text-gray-300">Exclusive merch & giveaways</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <Star size={14} className="text-orange-400" />
                                            <span className="text-gray-300">Direct Moonton collaboration</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Partner Leaderboard */}
                            <div className="bg-msl-card border border-orange-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-orange-500/40 transition-all h-full">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500" />
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all" />

                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6">
                                        <Trophy size={28} className="text-orange-400" />
                                    </div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-2xl font-black text-white">Partner Leaderboard</h3>
                                        <span className="text-sm text-gray-500">H2 2025</span>
                                    </div>

                                    <div className="space-y-3">
                                        {/* Rank 1 - Gold */}
                                        <div className="flex items-center gap-4 p-4 bg-msl-gold/10 border border-msl-gold/20 rounded-xl">
                                            <div className="w-8 h-8 rounded-full bg-msl-gold flex items-center justify-center text-black font-bold text-sm">1</div>
                                            <div className="w-11 h-11 rounded-full bg-black border border-white/10 overflow-hidden shrink-0">
                                                <img src="/logos/PNU.png" alt="PNU" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-white text-base truncate">PNU Sulo</p>
                                                <p className="text-xs text-gray-500 truncate">PNU Manila</p>
                                            </div>
                                            <p className="font-black text-msl-gold text-base">35K 💎</p>
                                        </div>

                                        {/* Rank 2 - Silver */}
                                        <div className="flex items-center gap-4 p-4 bg-gray-400/5 border border-gray-400/10 rounded-xl">
                                            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-black font-bold text-sm">2</div>
                                            <div className="w-11 h-11 rounded-full bg-black border border-white/10 overflow-hidden shrink-0">
                                                <img src="/logos/LSPU-LB.png" alt="LSPU-LB" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-white text-base truncate">Legion of Lures Esports</p>
                                                <p className="text-xs text-gray-500 truncate">LSPU Los Baños</p>
                                            </div>
                                            <p className="font-bold text-gray-400 text-base">25K 💎</p>
                                        </div>

                                        {/* Rank 3 - Bronze */}
                                        <div className="flex items-center gap-4 p-4 bg-amber-700/5 border border-amber-700/10 rounded-xl">
                                            <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm">3</div>
                                            <div className="w-11 h-11 rounded-full bg-black border border-white/10 overflow-hidden shrink-0">
                                                <img src="/logos/CHMSU.png" alt="CHMSU" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-white text-base truncate">CHMSU Excelsiors Esports Club</p>
                                                <p className="text-xs text-gray-500 truncate">CHMSU Talisay</p>
                                            </div>
                                            <p className="font-bold text-amber-600 text-base">10K 💎</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Players Track - Tournaments */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[auto] md:min-h-[460px]">
                            {/* Campus Tournaments */}
                            <div className="bg-msl-card border border-msl-gold/20 rounded-3xl p-8 relative overflow-hidden group hover:border-msl-gold/40 transition-all h-full">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-400" />
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-600/10 rounded-full blur-3xl group-hover:bg-yellow-600/20 transition-all" />

                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-msl-gold/20 flex items-center justify-center mb-6">
                                        <Trophy size={28} className="text-msl-gold" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-3">Campus Tournaments</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        Compete in officially-sanctioned MLBB tournaments right on your campus. Diamond prizes, official recognition, and a path to bigger stages.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-sm">
                                            <Star size={14} className="text-msl-gold" />
                                            <span className="text-gray-300">Diamond prize pools</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <Star size={14} className="text-msl-gold" />
                                            <span className="text-gray-300">Official tournament lobbies</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <Star size={14} className="text-msl-gold" />
                                            <span className="text-gray-300">Qualification pathway</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MSL Collegiate Cup */}
                            <div className="bg-gradient-to-br from-msl-gold/10 to-black border border-msl-gold/30 rounded-3xl p-8 relative overflow-hidden group hover:border-msl-gold/50 transition-all shadow-[0_0_40px_rgba(234,179,8,0.1)] h-full">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-msl-gold" />
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-msl-gold/20 rounded-full blur-3xl" />

                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-msl-gold/30 flex items-center justify-center">
                                            <Crown size={28} className="text-msl-gold" />
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-msl-gold text-black text-xs font-black uppercase">
                                            Premier League
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-2">MSL Collegiate Cup</h3>
                                    <p className="text-msl-gold text-sm font-bold mb-4">The Official Collegiate League of MLBB in the Philippines</p>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        The ultimate stage for student athletes. Compete against the best collegiate teams nationwide for glory, cash prizes, and pro-level exposure.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-sm">
                                            <Award size={14} className="text-msl-gold" />
                                            <span className="text-gray-300">National championship</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <Award size={14} className="text-msl-gold" />
                                            <span className="text-gray-300">Cash prizes & scholarships</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <Award size={14} className="text-msl-gold" />
                                            <span className="text-gray-300">Pro team scouting</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompetitionsSlide;
