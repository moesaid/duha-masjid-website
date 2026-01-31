'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export function ClassesHero() {
    return (
        <section className="relative py-24 bg-slate-50 overflow-hidden">
            {/* Islamic Pattern Background */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/patterns/noun-islamic-geometric-patterns.svg')] bg-repeat"
                style={{ backgroundSize: '80px 80px' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-emerald-700 border border-emerald-100 shadow-sm mb-8">
                        <BookOpen size={16} />
                        <span className="text-sm font-semibold tracking-wide uppercase">Adult Education</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                        The <span className="text-emerald-700 italic">Majlis</span> of Knowledge
                    </h1>

                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
                        Join a community of lifelong learners dedicated to seeking sacred knowledge, purifying the heart, and practicing the Sunnah.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-3 bg-emerald-700 text-white rounded-full font-bold hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-700/20">
                            Browse Courses
                        </button>
                        <button className="px-8 py-3 bg-white text-emerald-800 border-2 border-emerald-100 rounded-full font-bold hover:bg-emerald-50 transition-colors">
                            Halaqa Schedule
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
