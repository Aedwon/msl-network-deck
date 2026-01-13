import React, { useState } from 'react';
import { Gem, Users2, GraduationCap, Trophy, Sparkles } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

// Photo sets for each pillar - using placeholder URLs (replace with real MSL photos)
const PHOTO_SETS = {
    fuel: [
        'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1493711662062-fa541f7f7b65?w=600&h=400&fit=crop',
    ],
    connections: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop',
    ],
    industry: [
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=600&h=400&fit=crop',
    ],
    competitions: [
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1493711662062-fa541f7f7b65?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=400&fit=crop',
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
            <div className="relative z-10 w-full h-full grid grid-cols-2 gap-8 p-8">
                {/* Left Panel - Cards */}
                <div className="flex flex-col justify-center max-w-lg w-full mx-auto">
                    {/* Header */}
                    <div className={`mb-6 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-gray-300 text-sm font-bold uppercase mb-3">
                            <Sparkles size={14} /> Full Stack Support
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
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
                                        ? `${pillar.activeBorder} ${pillar.bg}`
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
                <div className={`flex items-center transition-all duration-700 delay-200 ${isActive ? 'opacity-100 -translate-x-20' : 'opacity-0 translate-x-20'}`}>
                    <div className="w-full h-[500px] grid grid-cols-3 grid-rows-2 gap-3">
                        {/* Large featured image */}
                        <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl group">
                            <img
                                key={`${activePillar}-0`}
                                src={currentPhotos[0]}
                                alt="Partner activity"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>

                        {/* Top right */}
                        <div className="row-span-1 relative overflow-hidden rounded-xl group">
                            <img
                                key={`${activePillar}-1`}
                                src={currentPhotos[1]}
                                alt="Partner activity"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Bottom row - 3 images */}
                        <div className="relative overflow-hidden rounded-xl group">
                            <img
                                key={`${activePillar}-2`}
                                src={currentPhotos[2]}
                                alt="Partner activity"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-xl group">
                            <img
                                key={`${activePillar}-3`}
                                src={currentPhotos[3]}
                                alt="Partner activity"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-xl group">
                            <img
                                key={`${activePillar}-4`}
                                src={currentPhotos[4]}
                                alt="Partner activity"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PillarsSlide;
