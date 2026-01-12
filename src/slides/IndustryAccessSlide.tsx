import React from 'react';
import { GraduationCap, Briefcase, Mic2, Trophy } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const OPPORTUNITIES = [
    {
        icon: Mic2,
        title: 'The MSL Summit',
        desc: 'Annual convergence with Moonton executives and industry leaders.',
        color: 'text-red-400',
        bg: 'bg-red-500/10',
    },
    {
        icon: GraduationCap,
        title: 'Masterclasses',
        desc: 'Learn to manage, produce, and lead—not just play.',
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
    },
    {
        icon: Briefcase,
        title: 'Internship Priority',
        desc: 'Direct pathways to careers in esports.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
    },
];

const IndustryAccessSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="ambient-blob ambient-blob-blue w-[500px] h-[500px] top-[20%] left-[10%]" />
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                    alt="Professional Networking"
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-msl-black via-msl-black/90 to-msl-black/70" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-msl-gold/10 border border-msl-gold/20 text-msl-gold text-sm font-bold uppercase mb-6">
                        <Trophy size={14} /> Career Mode
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                        Industry
                        <br />
                        <span className="gradient-text-gold">Access</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-xl mx-auto">
                        Future-proof your members with real career opportunities in esports.
                    </p>
                </div>

                {/* Opportunities Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {OPPORTUNITIES.map((opp, index) => (
                        <div
                            key={opp.title}
                            className={`group bg-msl-card border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl ${opp.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <opp.icon size={28} className={opp.color} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-2">{opp.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{opp.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Quote Section */}
                <div className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="bg-msl-card/50 border border-white/5 rounded-2xl p-8">
                        <p className="text-lg text-gray-300 italic leading-relaxed mb-4">
                            "We don't just create players—we create capable professionals who will shape the future of the esports industry."
                        </p>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-msl-gold/20 flex items-center justify-center">
                                <span className="text-msl-gold font-bold text-sm">AB</span>
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-bold text-white">Aerol Balayon</div>
                                <div className="text-xs text-gray-500">Head of Partnerships</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryAccessSlide;
