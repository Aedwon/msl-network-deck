import React from 'react';
import { GraduationCap, Briefcase, Mic2, Trophy } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const OPPORTUNITIES = [
    {
        icon: Mic2,
        title: 'Industry Mentorship',
        desc: 'Direct engagement with executives and thought leaders to cultivate professional networks.',
        color: 'text-red-400',
        bg: 'bg-red-500/10',
    },
    {
        icon: GraduationCap,
        title: 'Capacity Building',
        desc: 'Workshops on project management, marketing, and broadcast production.',
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
    },
    {
        icon: Briefcase,
        title: 'Career Mobility',
        desc: 'Exclusive internship pipelines and job placement opportunities within the ecosystem.',
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
                <div className="absolute inset-0 bg-gradient-to-t from-msl-black via-msl-black/95 to-msl-black/80" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col justify-center h-full">
                {/* Header */}
                <div className={`text-center mb-20 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-msl-gold/10 border border-msl-gold/20 text-msl-gold text-sm font-bold uppercase mb-6">
                        <Trophy size={14} /> Student Development
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-4">
                        Professionalizing
                        <br />
                        <span className="gradient-text-gold">Student Orgs</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-xl mx-auto">
                        Bridging the gap between campus passion and professional careers through structured development programs.
                    </p>
                </div>

                {/* Pipeline Visualization */}
                <div className="relative mb-24">
                    {/* Connecting Line */}
                    <div className={`hidden md:block absolute top-[40px] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative pb-32 md:pb-0">
                        {OPPORTUNITIES.map((opp, index) => (
                            <div
                                key={opp.title}
                                className={`flex flex-col items-center text-center transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${400 + index * 200}ms` }}
                            >
                                {/* Floating Node */}
                                <div className="relative mb-8 group">
                                    <div className={`w-20 h-20 rounded-full bg-msl-black border-2 border-white/10 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                                        <div className={`absolute inset-0 rounded-full ${opp.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                        <opp.icon size={32} className={`${opp.color} relative z-10`} />
                                    </div>
                                    {/* Pulse Effect behind node */}
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full ${opp.bg} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3">{opp.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">{opp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clean Quote Section */}
                <div className={`max-w-4xl mx-auto text-center transition-all duration-700 delay-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="relative">
                        <span className="text-6xl text-msl-gold/20 font-serif absolute -top-8 -left-4">"</span>
                        <p className="text-2xl text-gray-200 font-light italic leading-relaxed mb-6 px-8">
                            My goal is to equip our partner organizations with the tangible resources, industry knowledge, and operational skills necessary to not just survive, but thrive.
                        </p>
                        <span className="text-6xl text-msl-gold/20 font-serif absolute -bottom-12 -right-4">"</span>
                    </div>

                    <div className="flex flex-col items-center mt-8">
                        <div className="text-base font-bold text-white tracking-wide uppercase">Aerol "Aedwon" Balayon</div>
                        <div className="text-xs text-msl-gold font-bold tracking-widest uppercase mt-1">Head of Partnerships</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryAccessSlide;
