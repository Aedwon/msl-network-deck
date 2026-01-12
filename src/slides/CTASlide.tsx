import React from 'react';
import { ArrowRight, FileCheck, Calendar, Zap, Mail, QrCode, Gamepad2 } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const STEPS = [
    { num: 1, title: 'Apply Online', desc: 'Submit your application', icon: FileCheck },
    { num: 2, title: 'Interview', desc: 'Accreditation screening', icon: Calendar },
    { num: 3, title: 'Get Equipped', desc: 'Receive your buffs', icon: Zap },
];

const CTASlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="ambient-blob ambient-blob-gold w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center">
                {/* Header */}
                <div className={`mb-8 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-msl-gold text-sm font-bold uppercase mb-6 animate-pulse-glow">
                        <Gamepad2 size={14} /> Join The Network
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
                        Ready to
                        <br />
                        <span className="gradient-text-gold text-glow-gold">Press Start?</span>
                    </h2>
                </div>

                {/* Steps */}
                <div className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {STEPS.map((step, index) => (
                        <React.Fragment key={step.num}>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-2xl bg-msl-card border border-white/10 flex items-center justify-center mb-3 group-hover:border-msl-gold/30 transition-all">
                                    <step.icon size={28} className="text-msl-gold" />
                                </div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Step {step.num}</p>
                                <p className="text-white font-bold">{step.title}</p>
                                <p className="text-xs text-gray-500">{step.desc}</p>
                            </div>

                            {index < STEPS.length - 1 && (
                                <ArrowRight size={20} className="text-gray-700 hidden md:block" />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* CTA Button */}
                <div className={`transition-all duration-700 delay-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    <button className="px-12 py-5 bg-msl-gold hover:bg-msl-goldHover text-black rounded-2xl font-black text-xl transition-all shadow-[0_0_40px_rgba(242,194,26,0.4)] hover:shadow-[0_0_60px_rgba(242,194,26,0.6)] hover:scale-105 flex items-center justify-center gap-3 mx-auto group">
                        Apply for Membership
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Contact Info */}
                <div className={`mt-12 flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-700 delay-400 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center gap-3 text-gray-400">
                        <Mail size={18} />
                        <span className="text-sm">business@moonton.com</span>
                    </div>

                    <div className="w-px h-6 bg-gray-800 hidden md:block" />

                    <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                            <QrCode size={40} className="text-black" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-gray-500">Scan to apply</p>
                            <p className="text-sm text-gray-300 font-mono">msl.ph/apply</p>
                        </div>
                    </div>
                </div>

                {/* Final Line */}
                <p className={`mt-8 text-gray-600 text-sm italic transition-all duration-700 delay-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    The game is waiting. Join us.
                </p>

                {/* Official Partner Logos */}
                <div className={`mt-8 pt-8 border-t border-white/5 transition-all duration-700 delay-600 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] mb-4">Official Collegiate Program by</p>
                    <div className="flex items-center justify-center">
                        <img
                            src="/logos/mlbb-logo.png"
                            alt="Mobile Legends: Bang Bang"
                            className="h-14 opacity-60 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASlide;
