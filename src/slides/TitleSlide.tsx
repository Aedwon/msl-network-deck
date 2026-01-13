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
                            <div className="text-[10px] text-gray-400">₱9.1M+ Investment</div>
                        </div>
                    </div>
                </>
            )}

            {/* Central Content */}
            <div className="relative z-10 text-center max-w-4xl px-6">
                {/* MSL Logo - Hero size */}
                <div className={`mb-12 transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <img
                        src="/logos/msl-logo-compressed.png"
                        alt="MSL Philippines"
                        className="h-24 md:h-28 mx-auto drop-shadow-[0_0_40px_rgba(242,194,26,0.5)]"
                    />
                </div>

                {/* Badge */}
                <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-gold text-msl-gold text-sm font-bold uppercase tracking-wider transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <Network size={16} fill="currentColor" /> The MSL Network
                </div>

                {/* Main Title Block */}
                <div className={`mt-10 mb-10 transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
                        Behind Every
                    </h1>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text-gold leading-[1] tracking-tight mt-2 drop-shadow-[0_0_60px_rgba(242,194,26,0.4)]">
                        Victory
                    </h1>
                </div>

                {/* Decorative Divider */}
                <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 delay-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-msl-gold/50" />
                    <div className="w-2 h-2 rounded-full bg-msl-gold/60" />
                    <div className="w-16 h-px bg-gradient-to-l from-transparent to-msl-gold/50" />
                </div>

                {/* Tagline */}
                <p className={`text-xl md:text-2xl lg:text-3xl text-gray-300 font-light tracking-wide transition-all duration-700 delay-400 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Fueling Your Next Win.
                </p>

                {/* Official Partner Section - Bottom anchored */}
                <div className={`mt-16 transition-all duration-700 delay-600 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-[10px] text-gray-600 uppercase tracking-[0.25em] mb-3">The Official Collegiate Arm of</p>
                    <img
                        src="/logos/mlbb-logo.png"
                        alt="Mobile Legends: Bang Bang"
                        className="h-16 mx-auto opacity-60 hover:opacity-100 transition-opacity"
                    />
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
