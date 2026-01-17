import React, { useState } from 'react';
import { Gem, Users2, GraduationCap, Trophy, Sparkles } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

// Photo sets for each pillar - upload your images to public/slides/slide4/{folder}/
// Each folder has 5 image slots: 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg
// Layout positions:
//   1 (top-left, large)  |  2 (top-right)
//   3 (bottom-left)  |  4 (bottom-center)  |  5 (bottom-right)
const PHOTO_SETS = {
    fuel: [
        '/slides/slide4/fuel/1.webp',
        '/slides/slide4/fuel/2.webp',
        '/slides/slide4/fuel/3.webp',
        '/slides/slide4/fuel/4.webp',
        '/slides/slide4/fuel/5.webp',
    ],
    connections: [
        '/slides/slide4/connections/1.webp',
        '/slides/slide4/connections/2.webp',
        '/slides/slide4/connections/3.webp',
        '/slides/slide4/connections/4.webp',
        '/slides/slide4/connections/5.webp',
    ],
    industry: [
        '/slides/slide4/industry-opportunities/1.webp',
        '/slides/slide4/industry-opportunities/2.webp',
        '/slides/slide4/industry-opportunities/3.webp',
        '/slides/slide4/industry-opportunities/4.webp',
        '/slides/slide4/industry-opportunities/5.webp',
    ],
    competitions: [
        '/slides/slide4/competitions/1.webp',
        '/slides/slide4/competitions/2.webp',
        '/slides/slide4/competitions/3.webp',
        '/slides/slide4/competitions/4.webp',
        '/slides/slide4/competitions/5.webp',
    ],
};

const PILLARS = [
    {
        id: 'fuel',
        icon: Gem,
        title: 'Fuel',
        desc: 'Power your events with real resources.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        activeBorder: 'border-blue-500',
        features: ['Diamond allocations', 'Monetary grants', 'Official merchandise', 'Tournament Lobby access'],
    },
    {
        id: 'connections',
        icon: Users2,
        title: 'Connections',
        desc: 'A network that extends beyond your campus.',
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        activeBorder: 'border-green-500',
        features: ['Fellow student leaders', 'The MLBB community', 'Industry professionals', 'Cross-campus events'],
    },
    {
        id: 'industry',
        icon: GraduationCap,
        title: 'Industry Opportunities',
        desc: 'Build careers, not just events.',
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        activeBorder: 'border-purple-500',
        features: ['Exclusive seminars', 'Internship pipelines', 'Educational programs', 'Leadership training'],
    },
    {
        id: 'competitions',
        icon: Trophy,
        title: 'Competitions',
        desc: 'From campus champ to national stage.',
        color: 'text-msl-gold',
        bg: 'bg-msl-gold/10',
        border: 'border-msl-gold/30',
        activeBorder: 'border-msl-gold',
        features: ['Sanctioned tournaments', 'Player recognition', 'Path to pro', 'Campus qualifiers'],
    },
];

const PillarsSlide: React.FC<SlideProps> = ({ isActive }) => {
    const [activePillar, setActivePillar] = useState('fuel');

    const currentPhotos = PHOTO_SETS[activePillar as keyof typeof PHOTO_SETS];
    const activePillarData = PILLARS.find(p => p.id === activePillar);

    return (
        <div className="relative w-full h-full flex items-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="ambient-blob ambient-blob-purple w-[500px] h-[500px] top-[20%] right-[10%]" />
            <div className="ambient-blob ambient-blob-blue w-[400px] h-[400px] bottom-[20%] left-[10%]" />

            {/* Main Grid - 50/50 */}
            <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8 pt-20 md:pt-8">
                {/* Left Panel - Cards */}
                <div className="flex flex-col justify-center max-w-lg w-full mx-auto">
                    {/* Header */}
                    <div className={`mb-6 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-gray-300 text-sm font-bold uppercase mb-3">
                            <Sparkles size={14} /> Full Stack Support
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                            The MSL <span className="gradient-text-gold">Advantage</span>
                        </h2>
                    </div>

                    {/* Pillar Cards */}
                    <div className="space-y-2">
                        {PILLARS.map((pillar, index) => {
                            const isSelected = activePillar === pillar.id;
                            return (
                                <div
                                    key={pillar.id}
                                    onClick={() => setActivePillar(pillar.id)}
                                    className={`group relative cursor-pointer bg-msl-card rounded-xl p-4 transition-all duration-200 overflow-hidden border-2 ${isSelected
                                        ? `${pillar.activeBorder}`
                                        : 'border-transparent hover:border-white/10'
                                        } ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                                    style={{ transitionDelay: `${100 + index * 50}ms` }}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Icon */}
                                        <div className={`w-12 h-12 rounded-xl ${pillar.bg} border ${pillar.border} flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isSelected ? 'scale-110' : ''}`}>
                                            <pillar.icon size={24} className={pillar.color} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                                            <p className="text-sm text-gray-500">{pillar.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Feature Tags */}
                    {activePillarData && (
                        <div className={`mt-4 transition-all duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex flex-wrap gap-2">
                                {activePillarData.features.map((feature, i) => (
                                    <span
                                        key={i}
                                        className={`text-xs px-3 py-1.5 rounded-full ${activePillarData.bg} ${activePillarData.color} border ${activePillarData.border}`}
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Panel - Photo Gallery */}
                <div className={`hidden lg:flex items-center transition-all duration-700 delay-200 ${isActive ? 'opacity-100 -translate-x-20' : 'opacity-0 translate-x-20'}`}>
                    <div className="w-full h-[500px] grid grid-cols-3 grid-rows-2 gap-3">
                        {/* Large featured image */}
                        <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl group">
                            <img
                                key={`${activePillar}-0`}
                                src={currentPhotos[0]}
                                alt="Partner activity"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 animate-[fadeIn_0.4s_ease-out_forwards]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>

                        {/* Top right */}
                        <div className="row-span-1 relative overflow-hidden rounded-xl group">
                            <img
                                key={`${activePillar}-1`}
                                src={currentPhotos[1]}
                                alt="Partner activity"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 animate-[fadeIn_0.4s_ease-out_forwards]"
                            />
                        </div>

                        {/* Bottom row - 3 images */}
                        <div className="relative overflow-hidden rounded-xl group">
                            <img
                                key={`${activePillar}-2`}
                                src={currentPhotos[2]}
                                alt="Partner activity"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 animate-[fadeIn_0.4s_ease-out_forwards]"
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-xl group">
                            <img
                                key={`${activePillar}-3`}
                                src={currentPhotos[3]}
                                alt="Partner activity"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 animate-[fadeIn_0.4s_ease-out_forwards]"
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-xl group">
                            <img
                                key={`${activePillar}-4`}
                                src={currentPhotos[4]}
                                alt="Partner activity"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 animate-[fadeIn_0.4s_ease-out_forwards]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PillarsSlide;
