import React from 'react';
import { Network, Zap, Star, Building2 } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const TitleSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Ambient Background Blobs */}
            <div className="ambient-blob ambient-blob-gold w-[600px] h-[600px] -top-[200px] -right-[200px]" />
            <div className="ambient-blob ambient-blob-purple w-[500px] h-[500px] -bottom-[100px] -left-[150px]" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            {/* Floating Partner Nodes */}
            {isActive && (
                <>
                    {/* Node 1 */}
                    <div className="absolute top-[15%] left-[10%] p-4 glass rounded-2xl flex items-center gap-3 shadow-xl animate-float opacity-0 animate-fade-in stagger-2">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                            <Building2 size={20} />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">University Partners</div>
                            <div className="text-[10px] text-gray-400">80+ Organizations</div>
                        </div>
                    </div>

                    {/* Node 2 */}
                    <div className="absolute top-[25%] right-[8%] p-4 glass rounded-2xl flex items-center gap-3 shadow-xl animate-float-delayed opacity-0 animate-fade-in stagger-3">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                            <Star size={20} />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">Events Powered</div>
                            <div className="text-[10px] text-gray-400">2,000+</div>
                        </div>
                    </div>

                    {/* Node 3 */}
                    <div className="absolute bottom-[25%] left-[12%] p-4 glass rounded-2xl flex items-center gap-3 shadow-xl animate-float opacity-0 animate-fade-in stagger-4" style={{ animationDelay: '0.5s' }}>
                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">
                            <Zap size={20} />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">Diamond Treasury</div>
                            <div className="text-[10px] text-gray-400">₱7.9M+ Investment</div>
                        </div>
                    </div>
                </>
            )}

            {/* Central Content */}
            <div className="relative z-10 text-center max-w-4xl px-6">
                {/* MSL Logo */}
                <div className={`mb-8 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <img
                        src="/logos/msl logo compressed.png"
                        alt="MSL Philippines"
                        className="h-20 mx-auto drop-shadow-[0_0_30px_rgba(242,194,26,0.4)]"
                    />
                </div>

                {/* Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-msl-gold text-sm font-bold uppercase mb-8 transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <Network size={14} fill="currentColor" /> The MSL Network
                </div>

                {/* Main Title */}
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6 transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Level Up Your
                    <br />
                    <span className="gradient-text-gold text-glow-gold">Organization</span>
                </h1>

                {/* Subtitle */}
                <p className={`text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Fueling Your Next Win.
                </p>

                {/* Press to Continue Hint */}
                <div className={`mt-12 text-gray-600 text-sm uppercase tracking-widest transition-all duration-700 delay-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="inline-flex items-center gap-2">
                        <span className="w-6 h-6 border border-gray-700 rounded flex items-center justify-center text-[10px]">→</span>
                        Press to continue
                    </span>
                </div>

                {/* Official Partner Logos */}
                <div className={`mt-12 transition-all duration-700 delay-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] mb-4">The Official Collegiate Arm of</p>
                    <div className="flex items-center justify-center">
                        <img
                            src="/logos/mlbb-logo.png"
                            alt="Mobile Legends: Bang Bang"
                            className="h-24 opacity-70 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 1 }}>
                <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#F2C21A', stopOpacity: 0.3 }} />
                        <stop offset="100%" style={{ stopColor: '#F2C21A', stopOpacity: 0 }} />
                    </linearGradient>
                </defs>
                {/* Connecting lines from center to nodes */}
                <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="url(#lineGrad)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="90%" y2="28%" stroke="url(#lineGrad)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="url(#lineGrad)" strokeWidth="1" />

                {/* Orbit circles */}
                <circle cx="50%" cy="50%" r="200" stroke="#333" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.5" />
                <circle cx="50%" cy="50%" r="350" stroke="#222" strokeWidth="1" fill="none" opacity="0.3" />
            </svg>
        </div>
    );
};

export default TitleSlide;
