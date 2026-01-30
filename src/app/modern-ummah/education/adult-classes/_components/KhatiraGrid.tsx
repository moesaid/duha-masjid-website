'use client';

import { motion } from 'framer-motion';
import { dailyKhatiras } from '../_data';

export function KhatiraGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">Daily Reflections</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">The Daily Khatiras</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {dailyKhatiras.map((khatira, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`
                                relative p-8 rounded-3xl border transition-all duration-300 group
                                ${khatira.theme === 'morning'
                                    ? 'bg-amber-50/50 border-amber-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/50'
                                    : 'bg-slate-50/50 border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/50'}
                            `}
                        >
                            <div className={`
                                w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors
                                ${khatira.theme === 'morning' ? 'bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white' : 'bg-slate-200 text-slate-600 group-hover:bg-slate-800 group-hover:text-white'}
                            `}>
                                <khatira.icon size={28} />
                            </div>

                            <span className={`
                                inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4
                                ${khatira.theme === 'morning' ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-800'}
                            `}>
                                {khatira.time}
                            </span>

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{khatira.title}</h3>
                            <p className={`font-serif italic mb-4 ${khatira.theme === 'morning' ? 'text-amber-700' : 'text-slate-600'}`}>
                                {khatira.subtitle}
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                {khatira.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
