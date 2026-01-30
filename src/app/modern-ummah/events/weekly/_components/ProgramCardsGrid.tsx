'use client';

import { motion } from 'framer-motion';
import { programCards } from '../_data';

export function ProgramCardsGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium uppercase tracking-widest mb-3">
                        Featured Programs
                    </span>
                    <h2 className="text-4xl font-serif text-slate-900">Community Gatherings</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="h-48 bg-gradient-to-br from-emerald-900 to-emerald-800 flex items-center justify-center text-emerald-100 group-hover:scale-105 transition-transform duration-500">
                                <card.icon size={56} className="drop-shadow-lg opacity-90" />
                            </div>
                            <div className="p-8">
                                <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">
                                    {card.subtitle}
                                </span>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-emerald-800 transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {card.description}
                                </p>
                                <div className="pt-6 border-t border-slate-100">
                                    <p className="text-sm font-medium text-slate-500">
                                        {card.detail}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
