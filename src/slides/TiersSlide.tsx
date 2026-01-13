import React, { useState } from 'react';
import { Crown, Star, TrendingUp, Target, Gem, CheckCircle, Shield, Gamepad2 } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const TIERS = [
    {
        id: 'tier-c',
        name: 'Tier C',
        label: 'Tier C',
        color: 'text-gray-400',
        borderColor: 'border-white/10',
        bg: 'bg-white/5',
        diamonds: '50,000',
        reqs: { turnouts: '40+', members: '< 100', participation: '≤ 5%' },
        compliance: { accreditation: false, endorsement: false },
        perks: { activations: 'Low', creative: 'N/A', monetary: { label: 'Locked', footnote: '* Ascend to Tier B to unlock', isActive: false } },
        pulsePattern: { count: 0, interval: 0 },
        icon: Target
    },
    {
        id: 'tier-b',
        name: 'Tier B',
        label: 'Tier B',
        color: 'text-blue-400',
        borderColor: 'border-blue-500/30',
        bg: 'bg-blue-900/10',
        diamonds: '70,000',
        reqs: { turnouts: '80+', members: '100+', participation: '5%+' },
        compliance: { accreditation: false, endorsement: false },
        perks: { activations: 'Moderate', creative: 'Basic Access', monetary: { label: 'Limited', footnote: '* First come, first served', isActive: true, dotColor: 'bg-yellow-500 shadow-[0_0_10px_yellow]' } },
        pulsePattern: { count: 1, interval: 0 },
        icon: TrendingUp
    },
    {
        id: 'tier-a',
        name: 'Tier A',
        label: 'Tier A',
        color: 'text-purple-400',
        borderColor: 'border-purple-500/30',
        bg: 'bg-purple-900/10',
        diamonds: '100,000',
        reqs: { turnouts: '120+', members: '250+', participation: '15%+' },
        compliance: { accreditation: true, endorsement: true },
        perks: { activations: 'High', creative: 'Full Access', monetary: { label: 'Eligible', footnote: null, isActive: true, dotColor: 'bg-green-500 shadow-[0_0_10px_lime]' } },
        pulsePattern: { count: 2, interval: 300 },
        icon: Star
    },
    {
        id: 'tier-ss',
        name: 'Super School',
        label: 'Tier SS',
        color: 'text-msl-gold',
        borderColor: 'border-msl-gold/50',
        bg: 'bg-yellow-900/10',
        diamonds: '150,000',
        reqs: { turnouts: 'N/A', members: 'N/A', participation: 'N/A' },
        compliance: { accreditation: true, endorsement: true },
        perks: { activations: 'First Priority', creative: 'Full Access', monetary: { label: 'Eligible', footnote: null, isActive: true, dotColor: 'bg-msl-gold shadow-[0_0_10px_orange]' } },
        isSpecial: true,
        pulsePattern: { count: 3, interval: 200 },
        icon: Crown
    }
];

const TiersSlide: React.FC<SlideProps> = ({ isActive }) => {
    const [activeTier, setActiveTier] = useState(TIERS[3]); // Default to SS

    // Helper for progressive background effects
    const getBackgroundFX = () => {
        switch (activeTier.id) {
            case 'tier-c': // Minimal
                return (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] bg-white/5 transition-all duration-1000" />
                );
            case 'tier-b': // Tech Blue
                return (
                    <>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[100px] bg-blue-900/20 transition-all duration-1000" />
                        <div className="absolute top-1/2 left-3/4 w-[300px] h-[300px] rounded-full blur-[80px] bg-cyan-900/20 opacity-50" />
                    </>
                );
            case 'tier-a': // Cosmic Purple
                return (
                    <>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[100px] bg-purple-900/20 transition-all duration-1000" />
                        <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] rounded-full blur-[60px] bg-fuchsia-900/30 opacity-50" />
                    </>
                );
            case 'tier-ss': // Legendary Gold
            default:
                return (
                    <>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[90px] bg-yellow-900/30 transition-all duration-1000" />
                        {/* God Rays / Intense Glow */}
                        <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 to-transparent opacity-50" />
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]" />
                    </>
                );
        }
    };

    // Helper for card border intensity
    const getCardGlow = () => {
        if (activeTier.id === 'tier-ss') return 'border-msl-gold/40 shadow-[0_0_50px_rgba(234,179,8,0.2)]';
        if (activeTier.id === 'tier-a') return 'border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]';
        if (activeTier.id === 'tier-b') return 'border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]';
        return 'border-white/5';
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Dynamic Background Layer */}
            <div className="absolute inset-0 transition-opacity duration-1000">
                {getBackgroundFX()}
            </div>
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left - Tier Ladder */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-12 relative min-h-[500px] justify-start pt-10">
                        {/* Header */}
                        <div className={`text-center lg:text-right transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h2 className="text-3xl font-black text-white mb-2">The Ascension</h2>
                            <p className="text-gray-500 text-sm">Climb the ranks</p>
                        </div>

                        {/* Tier Nodes Container */}
                        <div className="flex lg:flex-col-reverse gap-4 lg:gap-8 relative items-center">
                            {/* Connecting Line - Fixed to reach centers */}
                            <div className="absolute left-7 lg:left-auto lg:right-10 top-1/2 lg:top-4 lg:bottom-4 h-1 lg:h-auto w-[calc(100%-56px)] lg:w-1 bg-gray-800 -translate-y-1/2 lg:translate-y-0 rounded-full overflow-hidden">
                                <div
                                    className="absolute left-0 lg:left-0 bottom-0 lg:bottom-0 h-full lg:h-auto w-0 lg:w-full bg-gradient-to-r lg:bg-gradient-to-t from-blue-600 via-purple-500 to-msl-gold transition-all duration-700"
                                    style={{
                                        height: `${(TIERS.findIndex(t => t.id === activeTier.id) / (TIERS.length - 1)) * 100}%`
                                    }}
                                />
                            </div>

                            {TIERS.map((tier, index) => {
                                const isSelected = activeTier.id === tier.id;
                                const activeIndex = TIERS.findIndex(t => t.id === activeTier.id);
                                const isPassed = index <= activeIndex;

                                return (
                                    <button
                                        key={tier.id}
                                        onClick={() => setActiveTier(tier)}
                                        className="relative z-10 flex items-center gap-4 group transition-all duration-300"
                                    >
                                        {/* Label (Left side for desktop) */}
                                        <span className={`hidden lg:block text-base font-bold uppercase tracking-wider transition-all duration-300 w-24 text-right ${isSelected ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'
                                            }`}>
                                            {tier.label}
                                        </span>

                                        {/* Node */}
                                        <div className={`w-14 h-14 lg:w-20 lg:h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 bg-msl-black relative ${isSelected
                                            ? `${tier.borderColor} shadow-[0_0_30px_-5px_currentColor] scale-110`
                                            : isPassed ? 'border-gray-700 text-gray-500 shadow-[0_0_15px_-5px_rgba(255,255,255,0.1)]' : 'border-gray-800 text-gray-700 hover:border-gray-600 hover:text-gray-500 hover:scale-105'
                                            } ${isSelected ? tier.color : ''}`}>

                                            {/* Rhythmic Pulse Effect */}
                                            {isSelected && tier.pulsePattern && tier.pulsePattern.count > 0 && [...Array(tier.pulsePattern.count)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`absolute -inset-1 rounded-full border-2 ${tier.borderColor} opacity-40 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]`}
                                                    style={{ animationDelay: `${i * tier.pulsePattern.interval}ms` }}
                                                ></div>
                                            ))}

                                            {/* Inner Circle */}
                                            <div className={`w-4 h-4 lg:w-6 lg:h-6 rounded-full transition-all duration-500
                                                ${isSelected ? 'bg-white shadow-[0_0_15px_white] scale-100' : isPassed ? 'bg-gray-600 scale-90' : 'bg-gray-800 scale-75'}
                                            `}></div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right - Tier Details */}
                    <div className="lg:col-span-8">
                        <div className={`bg-msl-card border rounded-3xl p-8 transition-all duration-500 ${getCardGlow()} ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                            {/* Header Bar */}
                            <div className={`h-1 w-full rounded-full mb-8 ${activeTier.color.replace('text-', 'bg-')}`} />

                            {/* Tier Identity */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className={`text-4xl md:text-5xl font-black ${activeTier.isSpecial ? 'gradient-text-gold' : 'text-white'}`}>
                                        {activeTier.name}
                                    </h3>
                                </div>
                                <div className={`w-16 h-16 rounded-2xl ${activeTier.bg} flex items-center justify-center ${activeTier.color}`}>
                                    <activeTier.icon size={32} />
                                </div>
                            </div>

                            {/* Diamond Allocation */}
                            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Max Diamonds Allocation</p>
                                        <p className="text-4xl md:text-5xl font-black text-white">{activeTier.diamonds}</p>
                                        <p className="text-sm text-gray-600 mt-1">per semester</p>
                                    </div>
                                    {/* Fixed: Use consistent text-blue-400 for Diamond icon */}
                                    <Gem size={40} className="text-blue-400" />
                                </div>
                            </div>

                            {/* Requirements & Perks Grid */}
                            <div className="grid gap-6">
                                {/* Requirements */}
                                <div className="grid grid-cols-3 gap-2 bg-black/20 rounded-xl p-6">
                                    <div className="text-center">
                                        <p className="text-xs text-gray-500 uppercase mb-2">Members</p>
                                        <p className="text-3xl font-bold text-white">{activeTier.reqs.members}</p>
                                    </div>
                                    <div className="text-center border-x border-white/5">
                                        <p className="text-xs text-gray-500 uppercase mb-2">Active %</p>
                                        <p className="text-3xl font-bold text-white">{activeTier.reqs.participation}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-500 uppercase mb-2">Turnout</p>
                                        <p className="text-3xl font-bold text-white">{activeTier.reqs.turnouts}</p>
                                    </div>
                                </div>

                                {/* Perks */}
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-xs text-gray-500 uppercase mb-2">Activations</p>
                                        <div className="flex items-center gap-2">
                                            <Gamepad2 size={18} className={activeTier.color} />
                                            <span className="font-bold text-base text-white">{activeTier.perks.activations}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-xs text-gray-500 uppercase mb-2">Creative</p>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${activeTier.perks.creative.includes('Full') ? 'bg-green-500' : 'bg-blue-500'}`} />
                                            <span className="font-bold text-base text-white">{activeTier.perks.creative}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-xs text-gray-500 uppercase mb-2">Monetary</p>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${activeTier.perks.monetary.isActive ? activeTier.perks.monetary.dotColor?.split(' ')[0] : 'bg-gray-600'}`} />
                                            <span className="font-bold text-base text-white">{activeTier.perks.monetary.label}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Compliance Footer */}
                                <div className="flex gap-6 pt-4 border-t border-white/5">
                                    <div className={`flex items-center gap-2 text-sm font-medium ${activeTier.compliance.accreditation ? 'text-green-400' : 'text-gray-600'}`}>
                                        <CheckCircle size={16} /> School Accredited
                                    </div>
                                    <div className={`flex items-center gap-2 text-sm font-medium ${activeTier.compliance.endorsement ? 'text-blue-400' : 'text-gray-600'}`}>
                                        <Shield size={16} /> Adviser Endorsed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TiersSlide;
