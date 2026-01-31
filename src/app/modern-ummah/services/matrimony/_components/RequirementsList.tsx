
'use client';

import { motion } from 'framer-motion';
import { requirements } from '../_data';
import { Scroll, Check, AlertTriangle, ExternalLink } from 'lucide-react';

export function RequirementsList() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 relative overflow-hidden">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full opacity-50" />

                    <div className="flex items-center gap-4 mb-8 relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                            <Scroll size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Requirements</h2>
                            <p className="text-slate-500">Please prepare these items before the ceremony</p>
                        </div>
                    </div>

                    <ul className="space-y-4 relative z-10">
                        {requirements.map((req, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`flex items-start gap-4 p-4 rounded-xl border ${req.critical
                                        ? 'bg-red-50/50 border-red-100'
                                        : 'bg-white border-slate-100'
                                    }`}
                            >
                                <div className={`mt-0.5 ${req.critical ? 'text-red-500' : 'text-emerald-500'}`}>
                                    {req.critical ? <AlertTriangle size={20} /> : <Check size={20} />}
                                </div>
                                <div>
                                    <span className={`font-medium ${req.critical ? 'text-red-900' : 'text-slate-700'}`}>
                                        {req.text}
                                    </span>
                                    {req.critical && (
                                        <p className="text-xs text-red-600 mt-1 font-medium">
                                            Required to proceed with the ceremony
                                        </p>
                                    )}
                                </div>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="mt-8 pt-8 border-t border-slate-200 relative z-10">
                        <a
                            href="https://www.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors group"
                        >
                            Sangamon County Clerk&apos;s Office
                            <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
