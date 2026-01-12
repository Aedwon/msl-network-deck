import React, { useState } from 'react';
import { Crown, Star, TrendingUp, Target, Gem, CheckCircle, Lock } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const TIERS = [
    {
        id: 'tier-c',
        label: 'Tier C',
        name: 'Starter',
        color: 'text-gray-400',
        borderColor: 'border-gray-600',
        bg: 'bg-gray-800/30',
        diamonds: '50,000',
        perks: ['Basic Activations', 'Community Access'],
        locked: ['Monetary Sponsorship', 'Creative Space'],
        icon: Target,
    },
    {
        id: 'tier-b',
        label: 'Tier B',
        name: 'Rising',
        color: 'text-blue-400',
        borderColor: 'border-blue-500/50',
        bg: 'bg-blue-900/20',
        diamonds: '70,000',
        perks: ['Moderate Activations', 'Limited Monetary', 'Basic Creative'],
        locked: [],
        icon: TrendingUp,
    },
    {
        id: 'tier-a',
        label: 'Tier A',
        name: 'Established',
        color: 'text-purple-400',
        borderColor: 'border-purple-500/50',
        bg: 'bg-purple-900/20',
        diamonds: '100,000',
        perks: ['High Priority', 'Full Monetary', 'Full Creative'],
        locked: [],
        icon: Star,
    },
    {
        id: 'tier-ss',
        label: 'Tier SS',
        name: 'Super School',
        color: 'text-msl-gold',
        borderColor: 'border-msl-gold/50',
        bg: 'bg-yellow-900/20',
        diamonds: '150,000',
        perks: ['First Priority', 'Unlimited Potential', 'VIP Access'],
        locked: [],
        isSpecial: true,
        icon: Crown,
    },
];

const TiersSlide: React.FC<SlideProps> = ({ isActive }) => {
    const [activeTier, setActiveTier] = useState(TIERS[3]); // Default to SS

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Dynamic Background */}
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ${activeTier.isSpecial ? 'opacity-100' : 'opacity-30'}`}
            >
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] ${activeTier.bg}`} />
            </div>
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left - Tier Ladder */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-6 relative">
                        {/* Header */}
                        <div className={`text-center lg:text-right mb-4 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h2 className="text-3xl font-black text-white mb-2">The Ascension</h2>
                            <p className="text-gray-500 text-sm">Climb the ranks</p>
                        </div>

                        {/* Tier Nodes */}
                        <div className="flex lg:flex-col-reverse gap-4 lg:gap-6 relative">
                            {/* Connecting Line */}
                            <div className="absolute left-7 lg:left-auto lg:right-10 top-1/2 lg:top-0 h-1 lg:h-full w-[calc(100%-56px)] lg:w-1 bg-gray-800 -translate-y-1/2 lg:translate-y-0 rounded-full">
                                <div
                                    className="absolute left-0 lg:left-0 bottom-0 lg:bottom-0 h-full lg:h-auto w-0 lg:w-full bg-gradient-to-r lg:bg-gradient-to-t from-blue-600 via-purple-500 to-msl-gold transition-all duration-700"
                                    style={{
                                        width: `${(TIERS.findIndex(t => t.id === activeTier.id) / (TIERS.length - 1)) * 100}%`,
                                        height: `${(TIERS.findIndex(t => t.id === activeTier.id) / (TIERS.length - 1)) * 100}%`
                                    }}
                                />
                            </div>

                            {TIERS.map((tier) => {
                                const isActive = activeTier.id === tier.id;
                                const Icon = tier.icon;

                                return (
                                    <button
                                        key={tier.id}
                                        onClick={() => setActiveTier(tier)}
                                        className={`relative z-10 flex items-center gap-4 group transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'
                                            }`}
                                    >
                                        {/* Node */}
                                        <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center transition-all duration-500 bg-msl-black ${isActive
                                            ? `${tier.borderColor} shadow-[0_0_20px_currentColor]`
                                            : 'border-gray-800 hover:border-gray-600'
                                            } ${isActive ? tier.color : 'text-gray-600'}`}>
                                            <Icon size={24} />
                                        </div>

                                        {/* Label */}
                                        <span className={`hidden lg:block text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'
                                            }`}>
                                            {tier.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right - Tier Details */}
                    <div className="lg:col-span-8">
                        <div className={`bg-msl-card border border-white/5 rounded-3xl p-8 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                            {/* Header Bar */}
                            <div className={`h-1 w-full rounded-full mb-8 ${activeTier.color.replace('text-', 'bg-')}`} />

                            {/* Tier Identity */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className={`text-4xl md:text-5xl font-black ${activeTier.isSpecial ? 'gradient-text-gold' : 'text-white'}`}>
                                        {activeTier.name}
                                    </h3>
                                    <p className={`text-sm ${activeTier.color} uppercase tracking-widest mt-1`}>
                                        {activeTier.label}
                                    </p>
                                </div>
                                <div className={`w-16 h-16 rounded-2xl ${activeTier.bg} flex items-center justify-center ${activeTier.color}`}>
                                    <activeTier.icon size={32} />
                                </div>
                            </div>

                            {/* Diamond Allocation */}
                            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Max Diamond Allocation</p>
                                        <p className="text-3xl font-black text-white">{activeTier.diamonds}</p>
                                        <p className="text-xs text-gray-600 mt-1">per semester</p>
                                    </div>
                                    <Gem size={40} className={activeTier.color} />
                                </div>
                            </div>

                            {/* Perks Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {activeTier.perks.map((perk, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <CheckCircle size={16} className="text-green-400" />
                                        {perk}
                                    </div>
                                ))}
                                {activeTier.locked.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <Lock size={16} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TiersSlide;
