import React from 'react';
import { Trophy, Quote, Crown, TrendingUp } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const SuccessStoriesSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000"
                    alt="Esports Event"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-msl-black via-msl-black/90 to-msl-black/70" />
            </div>
            <div className="ambient-blob ambient-blob-gold w-[500px] h-[500px] top-[30%] left-[20%]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                {/* Header */}
                <div className={`text-center mb-10 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-msl-gold text-sm font-bold uppercase mb-6">
                        <Trophy size={14} /> Proven Victories
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Success
                        <span className="gradient-text-gold"> Stories</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Featured Partner Card */}
                    <div className={`transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <div className="bg-msl-card border border-msl-gold/30 rounded-3xl p-8 relative overflow-hidden glow-gold">
                            {/* Highlight Tag */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-msl-gold" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-black border-2 border-msl-gold flex items-center justify-center">
                                    <span className="text-msl-gold font-black text-xl">UST</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white">UST Teletigers</h3>
                                    <p className="text-msl-gold text-sm font-bold">Tier SS • Super School</p>
                                </div>
                                <Crown className="text-msl-gold ml-auto" size={32} />
                            </div>

                            {/* Event Highlight */}
                            <div className="bg-black/40 rounded-xl p-4 mb-6 border border-white/5">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Featured Event</p>
                                <p className="text-lg font-bold text-white">Paskuhan Cup '24 Grand Finals</p>
                                <p className="text-sm text-gray-400">Live at UST Quadricentennial Pavilion</p>
                            </div>

                            {/* Quote */}
                            <div className="flex gap-3">
                                <Quote size={20} className="text-msl-gold/50 shrink-0" />
                                <p className="text-gray-300 italic leading-relaxed">
                                    "The MSL Network didn't just sponsor us; they upgraded our entire event infrastructure."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Leaderboard Preview */}
                    <div className={`transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="bg-msl-card border border-white/5 rounded-3xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-white">Partner Leaderboard</h3>
                                <span className="text-xs text-gray-500">Season 2025</span>
                            </div>

                            <div className="space-y-3">
                                {/* Rank 1 */}
                                <div className="flex items-center gap-4 p-4 bg-msl-gold/10 border border-msl-gold/20 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-msl-gold flex items-center justify-center text-black font-bold text-sm">1</div>
                                    <div className="flex-1">
                                        <p className="font-bold text-white">Teletigers Esports</p>
                                        <p className="text-xs text-gray-500">UST</p>
                                    </div>
                                    <p className="font-black text-msl-gold">12,450 pts</p>
                                </div>

                                {/* Rank 2 */}
                                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-sm">2</div>
                                    <div className="flex-1">
                                        <p className="font-bold text-white">LG Esports</p>
                                        <p className="text-xs text-gray-500">Ateneo</p>
                                    </div>
                                    <p className="font-bold text-gray-400">11,200 pts</p>
                                </div>

                                {/* Rank 3 */}
                                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-orange-800 flex items-center justify-center text-white font-bold text-sm">3</div>
                                    <div className="flex-1">
                                        <p className="font-bold text-white">Viridis Arcus</p>
                                        <p className="text-xs text-gray-500">DLSU</p>
                                    </div>
                                    <p className="font-bold text-gray-400">10,850 pts</p>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/5 text-center">
                                <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                                    <TrendingUp size={12} className="text-green-400" />
                                    Your organization could be next
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStoriesSlide;
