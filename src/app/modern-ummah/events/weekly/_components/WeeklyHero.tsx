'use client';

import { Hourglass } from 'lucide-react';
import { motion } from 'framer-motion';

export function WeeklyHero() {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center bg-emerald-950 overflow-hidden py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '32px 32px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/80 to-emerald-950" />

            <motion.div
                className="relative z-10 max-w-4xl mx-auto px-4 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-emerald-900/50 backdrop-blur-sm border border-emerald-800 mb-10 shadow-xl">
                    <Hourglass size={32} className="text-emerald-400" />
                </div>

                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
                    The Sacred Rhythm
                </h1>

                <p className="text-xl md:text-2xl text-emerald-100/80 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                    Join us for our regular weekly gatherings of faith, knowledge, and community connection.
                </p>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-emerald-50 italic font-serif leading-relaxed mb-4">
                        &ldquo;The most beloved deeds to Allah are those that are consistent, even if they are small.&rdquo;
                    </p>
                    <span className="text-sm font-medium text-emerald-400 uppercase tracking-widest">— Prophet Muhammad (ﷺ)</span>
                </div>
            </motion.div>
        </section>
    );
}
