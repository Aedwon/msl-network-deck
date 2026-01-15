import React from 'react';
import { ArrowRight, FileSignature, Users, Rocket, Zap, Gamepad2 } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const STEPS = [
    { num: 1, title: 'Meet', desc: 'Initial consultation', icon: Users },
    { num: 2, title: 'Formalize', desc: 'Sign partnership agreement', icon: FileSignature },
    { num: 3, title: 'Onboard', desc: 'Receive assets & briefings', icon: Zap },
    { num: 4, title: 'Activate', desc: 'Launch your first event', icon: Rocket },
];

const ProcessSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="ambient-blob ambient-blob-gold w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center pb-32 md:pb-0">
                {/* Header */}
                <div className={`mb-16 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-msl-gold text-sm font-bold uppercase mb-6">
                        <Gamepad2 size={14} /> Application Process
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-4">
                        Ready to
                        <br />
                        <span className="gradient-text-gold">Press Start?</span>
                    </h2>
                </div>

                {/* Steps */}
                <div className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {STEPS.map((step, index) => (
                        <React.Fragment key={step.num}>
                            <div className="flex flex-col items-center group">
                                <div className="w-24 h-24 rounded-3xl bg-msl-card border border-white/10 flex items-center justify-center mb-6 group-hover:border-msl-gold/50 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-black/50">
                                    <step.icon size={40} className="text-msl-gold" />
                                </div>
                                <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-3">
                                    STEP {step.num}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.desc}</p>
                            </div>

                            {index < STEPS.length - 1 && (
                                <div className="hidden md:flex items-center text-gray-700">
                                    <ArrowRight size={32} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessSlide;
