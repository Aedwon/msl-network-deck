import React from 'react';
import { Wallet, Shield, TrendingDown, Users, AlertTriangle } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const PAIN_POINTS = [
    {
        icon: Wallet,
        title: 'Tight Budgets',
        desc: 'Every event is a financial puzzle.',
        color: 'text-red-400',
        bg: 'bg-red-500/10',
    },
    {
        icon: Shield,
        title: 'No Recognition',
        desc: 'Hard to get school buy-in.',
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
    },
    {
        icon: TrendingDown,
        title: 'Unclear Direction',
        desc: 'No roadmap for growth.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
    },
    {
        icon: Users,
        title: 'Isolated',
        desc: 'Disconnected from the industry.',
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
    },
];

const ProblemSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-dot-pattern opacity-30" />

            {/* Warning Glow */}
            <div className="ambient-blob w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-900/10" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                {/* Section Header */}
                <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold uppercase mb-4 md:mb-6">
                        <AlertTriangle size={14} /> Reality Check
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4">
                        Sound
                        <span className="text-red-400"> Familiar?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-xl mx-auto">
                        You've got the drive. You just need the right support.
                    </p>
                </div>

                {/* Pain Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {PAIN_POINTS.map((point, index) => (
                        <div
                            key={point.title}
                            className={`group bg-msl-card border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 flex flex-col ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl ${point.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <point.icon size={28} className={point.color} />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                            <p className="text-sm text-gray-500 min-h-[40px]">{point.desc}</p>

                            {/* Severity Indicator - pushed to bottom */}
                            <div className="mt-auto pt-4 flex gap-1">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className={`h-1 flex-1 rounded-full ${point.bg} ${i <= 3 ? point.color.replace('text-', 'bg-') : 'bg-gray-800'
                                            }`}
                                        style={{ opacity: i <= 3 ? 1 - (i - 1) * 0.2 : 0.3 }}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Quote */}
                <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-gray-600 italic text-lg">
                        "Running events shouldn't feel like a debuff."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProblemSlide;
