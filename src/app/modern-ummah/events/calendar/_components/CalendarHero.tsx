'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export function CalendarHero() {
    return (
        <section className="relative py-24 bg-slate-50 overflow-hidden">
            {/* Subtle Islamic Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30l15-15l15 15l-15 15l-15-15zm0 0l-15 15l-15-15l15-15l15 15z' fill='%230f172a' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-emerald-700 border border-emerald-100 shadow-sm mb-8">
                        <Clock size={16} />
                        <span className="text-sm font-semibold tracking-wide uppercase">Live Schedule</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                        The Community Almanac
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        "By time, indeed mankind is in loss..." <br />
                        <span className="text-emerald-700 font-medium mt-2 block">- Surah Al-Asr</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
