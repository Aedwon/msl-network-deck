import React from 'react';
import { Gift, Gem, Banknote, Shirt, Gamepad2, Zap, Crown } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const BuffsSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="ambient-blob ambient-blob-gold w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Mythic Card */}
                    <div className={`relative transition-all duration-1000 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="relative w-full max-w-sm mx-auto">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-msl-gold/20 blur-[80px] rounded-full animate-pulse" />

                            {/* The Card */}
                            <div className="relative bg-gradient-to-b from-gray-900 to-black border border-msl-gold/30 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl overflow-hidden">
                                {/* Animated Background */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-msl-gold via-gray-900 to-black" />

                                {/* Rarity Badge */}
                                <div className="relative z-10 px-4 py-1.5 bg-gradient-to-r from-msl-gold to-yellow-400 text-black text-xs font-black tracking-[0.2em] rounded-full uppercase shadow-lg mb-6">
                                    <Crown size={10} className="inline mr-1" />
                                    Mythic Item
                                </div>

                                {/* Central Icon */}
                                <div className="relative z-10 w-32 h-32 mb-6 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-msl-gold/40 to-transparent rounded-full blur-2xl animate-pulse" />
                                    <Gift size={64} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] relative z-10" strokeWidth={1.5} />

                                    {/* Orbiting particles */}
                                    <div className="absolute top-0 right-4 animate-float text-blue-400">
                                        <Gem size={16} fill="currentColor" className="opacity-80" />
                                    </div>
                                    <div className="absolute bottom-4 left-2 animate-float-delayed text-green-400">
                                        <Banknote size={16} fill="currentColor" className="opacity-80" />
                                    </div>
                                    <div className="absolute top-[40%] -left-4 animate-pulse text-purple-400">
                                        <Gamepad2 size={16} fill="currentColor" className="opacity-80" />
                                    </div>
                                </div>

                                {/* Card Title */}
                                <h3 className="relative z-10 text-3xl font-black gradient-text-gold mb-2">
                                    Admin's Blessing
                                </h3>
                                <div className="relative z-10 w-12 h-1 bg-msl-gold/50 rounded-full mb-4" />

                                {/* Flavor Text */}
                                <p className="relative z-10 text-gray-400 text-sm leading-relaxed italic border-t border-b border-white/5 py-4 px-4">
                                    "Grants the wielder immense resources to host legendary campus events."
                                </p>

                                {/* Stats */}
                                <div className="relative z-10 mt-6 w-full grid grid-cols-3 gap-2 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                                    <div className="bg-white/5 rounded p-2 border border-white/5">
                                        <span className="block text-msl-gold text-lg mb-1">SS</span>
                                        Tier
                                    </div>
                                    <div className="bg-white/5 rounded p-2 border border-white/5">
                                        <span className="block text-white text-lg mb-1">∞</span>
                                        Limit
                                    </div>
                                    <div className="bg-white/5 rounded p-2 border border-white/5">
                                        <span className="block text-white text-lg mb-1">0s</span>
                                        CD
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        {/* Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-msl-gold text-sm font-bold uppercase mb-6 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <Zap size={14} fill="currentColor" /> Resource Support
                        </div>

                        {/* Title */}
                        <h2 className={`text-4xl md:text-5xl font-black text-white mb-6 leading-tight transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Unlock Your
                            <br />
                            <span className="gradient-text-gold">Admin's Blessing</span>
                        </h2>

                        {/* Description */}
                        <p className={`text-xl text-gray-400 mb-8 leading-relaxed transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Stop worrying about prize pools. We equip you with the resources to run legendary events.
                        </p>

                        {/* Buffs Grid */}
                        <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="bg-msl-card border border-white/5 rounded-xl p-5 group hover:border-msl-gold/30 transition-all">
                                <Gem size={24} className="text-msl-gold mb-3" />
                                <div className="text-2xl font-black text-white mb-1">150,000</div>
                                <div className="text-xs text-gray-500 uppercase">Diamonds / Sem</div>
                            </div>

                            <div className="bg-msl-card border border-white/5 rounded-xl p-5 group hover:border-green-500/30 transition-all">
                                <Banknote size={24} className="text-green-400 mb-3" />
                                <div className="text-2xl font-black text-white mb-1">₱15,000+</div>
                                <div className="text-xs text-gray-500 uppercase">Cash Grants</div>
                            </div>

                            <div className="bg-msl-card border border-white/5 rounded-xl p-5 group hover:border-purple-500/30 transition-all">
                                <Gamepad2 size={24} className="text-purple-400 mb-3" />
                                <div className="text-2xl font-black text-white mb-1">Pro Client</div>
                                <div className="text-xs text-gray-500 uppercase">Tournament Lobby</div>
                            </div>

                            <div className="bg-msl-card border border-white/5 rounded-xl p-5 group hover:border-orange-500/30 transition-all">
                                <Shirt size={24} className="text-orange-400 mb-3" />
                                <div className="text-2xl font-black text-white mb-1">Merch</div>
                                <div className="text-xs text-gray-500 uppercase">Loot Drops</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuffsSlide;
