import React from 'react';
import { Trophy, TrendingUp } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const SuccessStoriesSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-msl-black">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000"
                    alt="Esports Event"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-msl-black via-msl-black/90 to-msl-black/70" />
            </div>
            <div className="ambient-blob ambient-blob-gold w-[500px] h-[500px] top-[30%] left-[20%]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-32 md:pb-0">
                {/* Header */}
                <div className={`text-center mb-8 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-msl-gold text-sm font-bold uppercase mb-4">
                        <Trophy size={14} /> Proven Victories
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
                        Success
                        <span className="gradient-text-gold"> Stories</span>
                    </h2>
                    <p className="text-gray-400">Real testimonials from our partner organizations</p>
                </div>

                {/* Facebook Embeds - Full Width Carousel */}
                <div className={`transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="bg-msl-card border border-white/10 rounded-3xl p-4 relative overflow-hidden">
                        {/* Facebook Posts Carousel */}
                        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
                            {/* Post 1 - PNU Sulo */}
                            <div className="rounded-xl overflow-hidden bg-white shrink-0 snap-center w-[300px] md:w-[380px]">
                                <iframe
                                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpnusulo%2Fposts%2Fpfbid032Vs3VLLtNQqYioXCfnvnjhiputnVN1ufPhEgBXcZjBfXFaKEQk9mvCMMS9ZBv81hl&show_text=true&width=500"
                                    className="w-full h-[520px]"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    title="PNU Sulo Testimonial"
                                ></iframe>
                            </div>

                            {/* Post 2 - Ellwithana */}
                            <div className="rounded-xl overflow-hidden bg-white shrink-0 snap-center w-[300px] md:w-[380px]">
                                <iframe
                                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fellwithana%2Fposts%2Fpfbid0henFuHjub7vsnv5EG4Jpc5LBV7RNnWn1rw1xjrpwTbTzYiXrQYpXAR5QMHx9HaAFl&show_text=true&width=500"
                                    className="w-full h-[520px]"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    title="Partner Testimonial 2"
                                ></iframe>
                            </div>

                            {/* Post 3 - Kudos Vernick */}
                            <div className="rounded-xl overflow-hidden bg-white shrink-0 snap-center w-[300px] md:w-[380px]">
                                <iframe
                                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkudosvernick%2Fposts%2Fpfbid05ftHtWWZNkfPZng7Mq3jmDCJbKnmajYuep97sdwoCUvEq98CKKn129kD4Fg1LkCNl&show_text=true&width=500"
                                    className="w-full h-[520px]"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    title="Partner Testimonial 3"
                                ></iframe>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-4 pt-4 border-t border-white/5 text-center">
                            <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                                <TrendingUp size={12} className="text-green-400" />
                                Your organization could be next
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStoriesSlide;
