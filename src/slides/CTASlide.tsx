import React, { useState } from 'react';
import { ArrowRight, Rocket, LayoutGrid } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const REGIONS = [
    { name: 'North/Central Luzon', email: 'msl.partnerships.ncluz@gmail.com' },
    { name: 'National Capital Region', email: 'msl.partnerships.ncr@gmail.com' },
    { name: 'South Luzon', email: 'msl.partnerships.sluz@gmail.com' },
    { name: 'Visayas', email: 'msl.partnerships.vis@gmail.com' },
    { name: 'Mindanao', email: 'msl.partnerships.min@gmail.com' },
];

const CTASlide: React.FC<SlideProps> = ({ isActive }) => {
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleEmail = () => {
        if (!selectedRegion) {
            alert("Please select your region first.");
            return;
        }

        const to = "msl.partnerships.ph@gmail.com";
        const cc = `msl.network.ph@gmail.com,${selectedRegion}`;
        const subject = "Intent to Partner with MSL Philippines";
        const body = "Please introduce yourself, which org you're from, and what school you're based in, and then your partnership intent...";

        const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&cc=${encodeURIComponent(cc)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(url, "_blank");
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="ambient-blob ambient-blob-gold w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center pb-32 md:pb-0">
                {/* Header */}
                <div className={`mb-12 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-msl-gold text-sm font-bold uppercase mb-6 animate-pulse-glow">
                        <Rocket size={14} /> Join The Network
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-6">
                        Build Your
                        <br />
                        <span className="gradient-text-gold text-glow-gold">Legacy</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Be part of the elite network of student organizations redefining collegiate esports. Secure funding, mentorship, and a lasting impact.
                    </p>
                </div>

                {/* Region Selection & CTA */}
                <div className={`flex flex-col items-center gap-6 transition-all duration-700 delay-200 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    <div className="w-full max-w-md relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <LayoutGrid size={20} />
                        </div>
                        <select
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                            className="w-full pl-12 pr-6 py-4 bg-msl-card border border-white/10 rounded-2xl text-white appearance-none cursor-pointer hover:border-msl-gold/50 focus:border-msl-gold focus:outline-none transition-all text-center font-medium"
                            style={{ textAlignLast: 'center' }}
                        >
                            <option value="" disabled>-- Select Your Region --</option>
                            {REGIONS.map((region) => (
                                <option key={region.email} value={region.email} className="bg-gray-900">
                                    {region.name}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <button
                        onClick={handleEmail}
                        className="px-8 md:px-16 py-4 md:py-6 bg-msl-gold hover:bg-msl-goldHover text-black rounded-3xl font-black text-xl md:text-2xl transition-all shadow-[0_0_40px_rgba(242,194,26,0.4)] hover:shadow-[0_0_80px_rgba(242,194,26,0.6)] hover:scale-105 flex items-center justify-center gap-4 group w-full max-w-md"
                    >
                        Compose Email
                        <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-xs text-gray-500 italic max-w-md">
                        *Selecting your region ensures your application reaches the correct Regional Officer immediately.
                    </p>
                </div>

                {/* Official Partner Logos */}
                <div className={`mt-16 transition-all duration-700 delay-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] mb-6">Official Collegiate Program by</p>
                    <div className="flex items-center justify-center">
                        <img
                            src="/logos/mlbb-logo.png"
                            alt="Mobile Legends: Bang Bang"
                            className="h-16 opacity-60 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASlide;

