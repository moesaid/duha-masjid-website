'use client';

import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Scroll } from 'lucide-react';

export function AcademyHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-amber-50/50 to-white">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] -mr-24 -mt-24 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/40 rounded-full blur-[120px] -ml-32 -mb-32 pointer-events-none" />
            <div
                className="absolute inset-0 opacity-[0.03] bg-[url('/patterns/noun-ornament.svg')] bg-repeat"
                style={{ backgroundSize: '100px 100px' }}
            />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-white/80 backdrop-blur-sm border border-amber-100 shadow-xl shadow-amber-900/5 ring-4 ring-white/50"
                >
                    <BookOpen className="text-amber-600 mr-3" size={24} />
                    <span className="text-amber-900 font-serif font-medium tracking-wide">The Quran Academy</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-8 leading-tight tracking-tight"
                >
                    Guardians of the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 relative inline-block pb-2">
                        Revelation
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 1 }}
                            className="absolute bottom-0 left-0 h-1 bg-amber-300 rounded-full opacity-60"
                        />
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    A comprehensive hifz and tajweed program dedicated to nurturing the next generation of Huffaz who carry the light of the Quran in their hearts.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <div className="flex items-center gap-2 text-amber-800 bg-amber-100/50 px-5 py-2 rounded-full border border-amber-200/50">
                        <Sparkles size={16} />
                        <span className="text-sm font-semibold uppercase tracking-wider">Certified Instructors</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-800 bg-emerald-100/50 px-5 py-2 rounded-full border border-emerald-200/50">
                        <Scroll size={16} />
                        <span className="text-sm font-semibold uppercase tracking-wider">Structured Curriculum</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
