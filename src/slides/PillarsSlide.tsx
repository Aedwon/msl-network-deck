import React from 'react';
import { Network, Rocket, Gem, Users2 } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const PILLARS = [
    {
        icon: Network,
        title: 'Network Development',
        desc: 'Guidance through your organization\'s lifecycle. From onboarding to long-term engagement.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        features: ['Accreditation Support', 'Partner Onboarding', 'Community Growth'],
    },
    {
        icon: Rocket,
        title: 'Activations & Campaigns',
        desc: 'Bring global events like M-Series Watch Fests directly to your campus.',
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        features: ['MPL Watch Parties', 'M-Series Events', 'Brand Campaigns'],
    },
    {
        icon: Gem,
        title: 'Sponsorships & Treasury',
        desc: 'Access real funding, diamond allocations, and premium assets.',
        color: 'text-msl-gold',
        bg: 'bg-msl-gold/10',
        border: 'border-msl-gold/30',
        features: ['Diamond Funding', 'Cash Grants', 'Merch Drops'],
    },
];

const PillarsSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="ambient-blob ambient-blob-purple w-[500px] h-[500px] top-[20%] right-[10%]" />
            <div className="ambient-blob ambient-blob-blue w-[400px] h-[400px] bottom-[20%] left-[10%]" />
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-gray-300 text-sm font-bold uppercase mb-6">
                        <Users2 size={14} /> Full Stack Support
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                        The Pillars of
                        <br />
                        <span className="gradient-text-gold">Partnership</span>
                    </h2>
                </div>

                {/* Pillars Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {PILLARS.map((pillar, index) => (
                        <div
                            key={pillar.title}
                            className={`group relative bg-msl-card border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 overflow-hidden ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${200 + index * 150}ms` }}
                        >
                            {/* Colored Top Border */}
                            <div className={`absolute top-0 left-0 right-0 h-1 ${pillar.color.replace('text-', 'bg-')}`} />

                            {/* Hover Glow */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${pillar.bg}`} />

                            {/* Icon */}
                            <div className={`relative w-16 h-16 rounded-2xl ${pillar.bg} border ${pillar.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <pillar.icon size={32} className={pillar.color} />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">{pillar.desc}</p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {pillar.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className={`w-1.5 h-1.5 rounded-full ${pillar.color.replace('text-', 'bg-')}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Index */}
                            <div className="absolute top-6 right-6 text-[10px] font-mono text-gray-700 font-bold">
                                0{index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PillarsSlide;
