'use client';

import { motion } from 'framer-motion';
import { PenTool } from 'lucide-react';

export function BlogHero() {
    return (
        <section className="relative py-24 bg-slate-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30l15-15l15 15l-15 15l-15-15zm0 0l-15 15l-15-15l15-15l15 15z' fill='%230f172a' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 border border-emerald-100 shadow-sm mb-8">
                        <PenTool size={16} />
                        <span className="text-sm font-semibold tracking-wide uppercase">Community Voices</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                        Reflections & <span className="text-emerald-700 italic">Insights</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-4 leading-relaxed">
                        Stories, announcements, and spiritual reminders from our community to yours.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
