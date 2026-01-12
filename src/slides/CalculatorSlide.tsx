import React, { useState } from 'react';
import { Gem, Calculator, ChevronDown } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const SCOPES = [
    { id: 'department', label: 'Department', value: 10000 },
    { id: 'college', label: 'College', value: 12000 },
    { id: 'university', label: 'University', value: 15000 },
    { id: 'system', label: 'System', value: 18000 },
    { id: 'nationwide', label: 'Nationwide', value: 30000 },
];

const CalculatorSlide: React.FC<SlideProps> = ({ isActive }) => {
    const [scope, setScope] = useState('university');
    const [eventType, setEventType] = useState('tournament');

    const baseValue = SCOPES.find(s => s.id === scope)?.value || 15000;
    const multiplier = eventType === 'tournament' ? 1 : 0.65;
    const total = Math.round(baseValue * multiplier);

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="ambient-blob ambient-blob-gold w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-msl-gold text-sm font-bold uppercase mb-6">
                        <Calculator size={14} /> Buff Configurator
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Calculate Your
                        <br />
                        <span className="gradient-text-gold">Potential</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        Resources scale with your ambition.
                    </p>
                </div>

                {/* Calculator Card */}
                <div className={`bg-msl-card border border-white/5 rounded-3xl p-8 md:p-12 transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Scope Selection */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                                Scope of Event
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {SCOPES.map(s => (
                                    <button
                                        key={s.id}
                                        onClick={() => setScope(s.id)}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all border ${scope === s.id
                                                ? 'bg-msl-gold text-black border-msl-gold shadow-lg shadow-yellow-900/20'
                                                : 'bg-black/40 text-gray-500 border-white/5 hover:bg-white/5 hover:text-gray-300'
                                            }`}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Event Type */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                                Event Type
                            </label>
                            <div className="relative">
                                <select
                                    value={eventType}
                                    onChange={(e) => setEventType(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-gray-200 appearance-none focus:outline-none focus:border-msl-gold transition-all font-medium"
                                >
                                    <option value="tournament">Tournament</option>
                                    <option value="non">Non-Tournament</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Result */}
                    <div className="bg-black/40 rounded-2xl p-8 border border-white/5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">
                                    Total Allocation
                                </p>
                                <p className="text-5xl md:text-6xl font-black text-msl-gold">
                                    {total.toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">Diamonds per event</p>
                            </div>
                            <Gem size={60} className="text-msl-gold/30" />
                        </div>
                    </div>

                    {/* Formula Note */}
                    <p className="text-center text-xs text-gray-600 mt-6">
                        Base allocation varies by tier. The more you do, the more you get.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CalculatorSlide;
