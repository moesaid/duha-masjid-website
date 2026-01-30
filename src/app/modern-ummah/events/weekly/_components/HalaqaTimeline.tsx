'use client';

import { motion } from 'framer-motion';
import { halaqas } from '../_data';

export function HalaqaTimeline() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium uppercase tracking-widest mb-3">
                        Knowledge Circles
                    </span>
                    <h2 className="text-4xl font-serif text-slate-900">Educational Halaqas</h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200" />

                    <div className="space-y-12">
                        {halaqas.map((halaqa, index) => (
                            <motion.div
                                key={index}
                                className="relative flex gap-8 group"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-emerald-50 shadow-sm flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:border-emerald-100 transition-all duration-300 shrink-0">
                                    <halaqa.icon size={24} />
                                </div>
                                <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                                    <span className="inline-block text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">
                                        {halaqa.time}
                                    </span>
                                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{halaqa.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{halaqa.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
