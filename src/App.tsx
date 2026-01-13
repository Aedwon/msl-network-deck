import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Slides
import TitleSlide from './slides/TitleSlide';
import ProblemSlide from './slides/ProblemSlide';
import NetworkIntroSlide from './slides/NetworkIntroSlide';
import PillarsSlide from './slides/PillarsSlide';
import BuffsSlide from './slides/BuffsSlide';
import TournamentLobbySlide from './slides/TournamentLobbySlide';
import IndustryAccessSlide from './slides/IndustryAccessSlide';
import TiersSlide from './slides/TiersSlide';
import CompetitionsSlide from './slides/CompetitionsSlide';
import SuccessStoriesSlide from './slides/SuccessStoriesSlide';
import ProcessSlide from './slides/ProcessSlide';
import CTASlide from './slides/CTASlide';

const SLIDES = [
    { id: 'title', component: TitleSlide, label: 'Welcome' },
    { id: 'problem', component: ProblemSlide, label: 'The Problem' },
    { id: 'network-intro', component: NetworkIntroSlide, label: 'The Network' },
    { id: 'pillars', component: PillarsSlide, label: 'Pillars' },
    { id: 'buffs', component: BuffsSlide, label: 'Buffs' },
    { id: 'tournament-lobby', component: TournamentLobbySlide, label: 'Pro Tools' },
    { id: 'industry-access', component: IndustryAccessSlide, label: 'Industry' },
    { id: 'tiers', component: TiersSlide, label: 'Tiers' },
    { id: 'competitions', component: CompetitionsSlide, label: 'Compete' },
    { id: 'success', component: SuccessStoriesSlide, label: 'Success' },
    { id: 'process', component: ProcessSlide, label: 'Process' },
    { id: 'cta', component: CTASlide, label: 'Join Us' },
];

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');

    const goToSlide = useCallback((index: number, dir: 'next' | 'prev') => {
        if (isTransitioning || index < 0 || index >= SLIDES.length) return;

        setIsTransitioning(true);
        setDirection(dir);

        setTimeout(() => {
            setCurrentSlide(index);
            setIsTransitioning(false);
        }, 400);
    }, [isTransitioning]);

    const nextSlide = useCallback(() => {
        if (currentSlide < SLIDES.length - 1) {
            goToSlide(currentSlide + 1, 'next');
        }
    }, [currentSlide, goToSlide]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1, 'prev');
        }
    }, [currentSlide, goToSlide]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowRight':
                case ' ':
                case 'Enter':
                    e.preventDefault();
                    nextSlide();
                    break;
                case 'ArrowLeft':
                case 'Backspace':
                    e.preventDefault();
                    prevSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    goToSlide(0, 'prev');
                    break;
                case 'End':
                    e.preventDefault();
                    goToSlide(SLIDES.length - 1, 'next');
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, goToSlide]);

    // Touch navigation
    useEffect(() => {
        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        };

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [nextSlide, prevSlide]);

    const CurrentSlideComponent = SLIDES[currentSlide].component;

    return (
        <div className="relative w-full h-full bg-msl-black overflow-hidden">
            {/* Slide Container */}
            <div
                className={`w-full h-full transition-all duration-500 ease-out ${isTransitioning
                    ? direction === 'next'
                        ? 'opacity-0 translate-x-[-30px] scale-[0.98]'
                        : 'opacity-0 translate-x-[30px] scale-[0.98]'
                    : 'opacity-100 translate-x-0 scale-100'
                    }`}
            >
                <CurrentSlideComponent isActive={!isTransitioning} />
            </div>

            {/* Navigation Controls */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0 || isTransitioning}
                    className="nav-button"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Progress Dots */}
                <div className="flex items-center gap-2">
                    {SLIDES.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => goToSlide(index, index > currentSlide ? 'next' : 'prev')}
                            className={`progress-dot ${index === currentSlide ? 'active' : ''}`}
                            aria-label={`Go to slide ${index + 1}: ${slide.label}`}
                            title={slide.label}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    disabled={currentSlide === SLIDES.length - 1 || isTransitioning}
                    className="nav-button"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Slide Counter */}
            <div className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full glass text-sm font-mono text-gray-400">
                <span className="text-white font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                <span>{String(SLIDES.length).padStart(2, '0')}</span>
            </div>

            {/* Keyboard Hint (shows briefly then fades) */}
            <div className="fixed bottom-6 right-6 z-50 text-[10px] text-gray-600 uppercase tracking-widest hidden md:block">
                ← → Navigate • Space Advance
            </div>
        </div>
    );
}

export default App;
