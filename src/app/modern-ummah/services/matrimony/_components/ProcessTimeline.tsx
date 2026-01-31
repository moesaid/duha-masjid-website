
'use client';

import { motion } from 'framer-motion';
import { processSteps } from '../_data';
import { AlertTriangle } from 'lucide-react';

export function ProcessTimeline() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-semibold tracking-wide uppercase">The Journey</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Path to Nikkah</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10 transform translate-y-4" />

                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                        <Icon size={24} />
                                    </div>
                                    <span className="text-4xl font-serif font-bold text-slate-100">{step.number}</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                                <p className="font-amiri text-lg text-emerald-600 mb-3">{step.arabic}</p>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.description}</p>

                                {step.optional && (
                                    <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                                        Recommended
                                    </span>
                                )}
                                {step.critical && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold">
                                        <AlertTriangle size={12} />
                                        Required
                                    </span>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
