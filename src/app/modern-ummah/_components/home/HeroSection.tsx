'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Clock, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
    templateId: string;
}

// Cinematic Announcements suitable for the split layout
const HERO_SLIDES = [
    {
        id: 1,
        subtitle: 'The Heart of Community',
        title: 'A Sanctuary for the Soul',
        description: 'More than just a mosque. We are a thriving hub for spiritual growth, education, and community service. Come as you are, grow with us.',
        image: '/images/sunlight-archway.jpg',
        badge: { text: "Welcome Home", color: "emerald" },
        primaryCta: { label: 'About Our Mission', href: '/about/mission' },
        secondaryCta: { label: 'Watch Video', href: '#' },
        floatingCard: {
            title: "Next Prayer",
            value: "Asr 4:45 PM",
            icon: Clock,
            color: "emerald"
        }
    },
    {
        id: 2,
        subtitle: 'Education & Growth',
        title: 'Nurturing Future Leaders',
        description: 'From our Weekend School to the comprehensive Quran Academy, we provide a holistic Islamic education that builds character and confidence.',
        image: '/images/youth-learning.jpg',
        badge: { text: "Registration Open", color: "amber" },
        primaryCta: { label: 'View Programs', href: '/education' },
        secondaryCta: { label: 'Scholarships', href: '/services/financial-aid' },
        floatingCard: {
            title: "Spring Term",
            value: "Starting Mar 1",
            icon: Calendar,
            color: "amber"
        }
    },
    {
        id: 3,
        subtitle: 'Community Service',
        title: 'Serving With Excellence',
        description: 'Our food pantry and free clinic serve hundreds of families weekly. Join our volunteer force and experience the joy of Khidmah (service).',
        image: '/images/mosque-community.jpg',
        badge: { text: "Impact Update", color: "blue" },
        primaryCta: { label: 'Volunteer Now', href: '/join/volunteer' },
        secondaryCta: { label: 'Donate', href: '/donate' },
        floatingCard: {
            title: "Families Served",
            value: "1,250+ This Month",
            icon: MapPin,
            color: "blue"
        }
    }
];

const AVATARS = [
    '/images/arab-men-1.jpg',
    '/images/arab-women-1.jpg',
    '/images/arab-men-2.jpg',
    '/images/arab-women-2.jpg'
];

export function HeroSection({ templateId }: HeroSectionProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    // Use ref to track animation state without triggering re-renders or staleness
    const isAnimating = useRef(false);

    // Auto-rotate logic
    useEffect(() => {
        const timer = setInterval(() => {
            handleNextSlide();
        }, 8000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const handleNextSlide = useCallback(() => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        setTimeout(() => {
            isAnimating.current = false;
        }, 800);
    }, []);

    const activeSlide = HERO_SLIDES[currentSlide];

    return (
        <section className="relative w-full py-12 lg:py-20 overflow-hidden bg-slate-50">
            {/* Background Texture (Subtle Noise or Tint) */}
            <div className="absolute inset-0 bg-[url('/patterns/subtle-grain.png')] opacity-20 pointer-events-none" />

            {/* Abstract Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-100/40 to-teal-50/0 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-50/40 to-slate-50/0 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text & Invitation (5 Columns) */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left pt-6 lg:pt-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                {/* Animated Badge */}
                                <div className="flex justify-center lg:justify-start">
                                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-6 bg-white border shadow-sm ${activeSlide.badge.color === 'emerald' ? 'text-emerald-700 border-emerald-100' :
                                        activeSlide.badge.color === 'amber' ? 'text-amber-700 border-amber-100' :
                                            'text-blue-700 border-blue-100'
                                        }`}>
                                        <span className={`w-2 h-2 rounded-full animate-pulse ${activeSlide.badge.color === 'emerald' ? 'bg-emerald-500' :
                                            activeSlide.badge.color === 'amber' ? 'bg-amber-500' :
                                                'bg-blue-500'
                                            }`} />
                                        {activeSlide.badge.text}
                                    </span>
                                </div>

                                {/* Animated Heading */}
                                <div className="min-h-[220px] lg:min-h-[280px] flex flex-col justify-center">
                                    <h1 className="text-5xl sm:text-6xl/none font-serif font-bold text-slate-900 mb-6 tracking-tight">
                                        {activeSlide.title}
                                    </h1>
                                    <p className="text-lg text-slate-600 leading-relaxed lg:max-w-md mx-auto lg:mx-0">
                                        {activeSlide.description}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2 justify-center lg:justify-start">
                                    <Link
                                        href={`/${templateId}${activeSlide.primaryCta.href}`}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-emerald-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-slate-900/10 group"
                                    >
                                        {activeSlide.primaryCta.label}
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>

                                    {activeSlide.secondaryCta.label === 'Watch Video' ? (
                                        <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-all duration-300 group">
                                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                                <Play className="w-3 h-3 text-emerald-700 ml-0.5 fill-emerald-700" />
                                            </div>
                                            Watch Video
                                        </button>
                                    ) : (
                                        <Link
                                            href={`/${templateId}${activeSlide.secondaryCta.href}`}
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-all duration-300"
                                        >
                                            {activeSlide.secondaryCta.label}
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Stats / Social Proof */}
                        <div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-8 w-full justify-center lg:justify-start">
                            <div className="text-left">
                                <p className="text-3xl font-bold text-slate-900 font-serif">5,000+</p>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Families Served</p>
                            </div>
                            <div className="w-px h-12 bg-slate-200" />
                            <div>
                                <div className="flex -space-x-3 mb-2 justify-center lg:justify-start">
                                    {AVATARS.map((avatar, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 relative overflow-hidden">
                                            <Image
                                                src={avatar}
                                                alt=""
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                                        +42
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 font-medium tracking-wide text-left">Join the community</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Window (7 Columns) */}
                    <div className="lg:col-span-7 relative h-[500px] lg:h-[650px] w-full">
                        {/* The Window Mask */}
                        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 transition-all duration-700 transform group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSlide.image}
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={activeSlide.image}
                                        alt={activeSlide.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Inner Shadow Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

                                    {/* Pattern Overlay */}

                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Floating Glass Card (Dynamic based on slide) */}
                        <div className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 z-20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`float-${activeSlide.id}`}
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="bg-white/90 backdrop-blur-md border border-white/40 p-5 pr-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${activeSlide.badge.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                                                activeSlide.badge.color === 'amber' ? 'bg-amber-100 text-amber-600' :
                                                    'bg-blue-100 text-blue-600'
                                                }`}>
                                                <activeSlide.floatingCard.icon size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                                                    {activeSlide.floatingCard.title}
                                                </p>
                                                <p className="text-xl font-bold text-slate-900">
                                                    {activeSlide.floatingCard.value}
                                                </p>
                                            </div>
                                            <div className="ml-2 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Progress Indicators (Over Image) */}
                        {/* Progress Indicators (Over Image) */}
                        <div className="absolute bottom-8 right-8 z-30 flex gap-3">
                            {HERO_SLIDES.map((slide, idx) => (
                                <button
                                    key={slide.id}
                                    onClick={() => setCurrentSlide(idx)}
                                    className="group relative h-1.5 w-12 bg-white/30 rounded-full overflow-hidden transition-all hover:bg-white/50"
                                    aria-label={`Go to slide ${idx + 1}`}
                                >
                                    {idx === currentSlide && (
                                        <motion.div
                                            className="absolute inset-y-0 left-0 bg-white"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 8, ease: "linear" }}
                                            layoutId="progress"
                                        />
                                    )}
                                    {idx < currentSlide && (
                                        <div className="absolute inset-0 bg-white/80" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
