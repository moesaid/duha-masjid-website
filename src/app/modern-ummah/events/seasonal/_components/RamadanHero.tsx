'use client';

import { Moon, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface RamadanHeroProps {
    countdown: { hours: number; minutes: number; seconds: number };
}

export function RamadanHero({ countdown }: RamadanHeroProps) {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center bg-slate-950 overflow-hidden py-24">
            {/* Stars Background */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />

            {/* Luminous Lantern Watermarks */}
            <div className="absolute top-10 right-10 w-24 h-24 text-amber-500/10 animate-pulse">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2C7.58172 2 4 5.58172 4 10V14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14V10C20 5.58172 16.4183 2 12 2ZM12 20C8.68629 20 6 17.3137 6 14V10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10V14C18 17.3137 15.3137 20 12 20Z" />
                </svg>
            </div>
            <div className="absolute top-40 left-20 w-16 h-16 text-amber-500/5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2C7.58172 2 4 5.58172 4 10V14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14V10C20 5.58172 16.4183 2 12 2ZM12 20C8.68629 20 6 17.3137 6 14V10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10V14C18 17.3137 15.3137 20 12 20Z" />
                </svg>
            </div>

            <motion.div
                className="relative z-10 text-center px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-800 mb-8 shadow-2xl shadow-amber-900/20">
                    <Moon size={40} className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
                </div>

                <p className="text-3xl md:text-5xl font-serif text-amber-500/80 mb-6 drop-shadow-md">رمضان مبارك</p>

                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-tight">
                    Ramadan 1447
                </h1>

                <p className="text-slate-400 text-lg uppercase tracking-widest mb-10">Time until Maghrib (Iftar)</p>

                <div className="inline-flex items-center gap-4 md:gap-8 bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                    <div className="text-center">
                        <span className="block text-4xl md:text-6xl font-bold text-white tabular-nums tracking-tight">
                            {String(countdown.hours).padStart(2, '0')}
                        </span>
                        <span className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-medium mt-2 block">Hours</span>
                    </div>
                    <span className="text-2xl md:text-4xl text-slate-600 font-light -mt-6">:</span>
                    <div className="text-center">
                        <span className="block text-4xl md:text-6xl font-bold text-white tabular-nums tracking-tight">
                            {String(countdown.minutes).padStart(2, '0')}
                        </span>
                        <span className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-medium mt-2 block">Minutes</span>
                    </div>
                    <span className="text-2xl md:text-4xl text-slate-600 font-light -mt-6">:</span>
                    <div className="text-center">
                        <span className="block text-4xl md:text-6xl font-bold text-emerald-400 tabular-nums tracking-tight drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                            {String(countdown.seconds).padStart(2, '0')}
                        </span>
                        <span className="text-xs md:text-sm text-emerald-500/70 uppercase tracking-wider font-medium mt-2 block">Seconds</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
