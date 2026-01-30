'use client';

import { motion } from 'framer-motion';
import { eidPrayers, festivities } from '../_data';

export function EidSection() {
    return (
        <section className="relative overflow-hidden py-24">
            {/* Sunrise Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-xs font-medium uppercase tracking-widest mb-4">
                        Eid ul-Fitr
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Celebrate with Us</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Join the community for a joyous day of prayer, celebration, and unity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Prayer Times Card */}
                    <motion.div
                        className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-serif text-slate-900 mb-8 border-b border-slate-100 pb-4">Prayer Schedule</h3>
                        <div className="space-y-6">
                            {eidPrayers.map((prayer, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-amber-50/50 hover:border-amber-100 transition-colors group">
                                    <div className="mb-2 sm:mb-0">
                                        <span className="block text-amber-600 font-bold tracking-wide">{prayer.shift}</span>
                                        <span className="text-sm text-slate-500">Main Prayer Hall</span>
                                    </div>
                                    <div className="flex gap-6 text-sm">
                                        <div>
                                            <span className="block text-slate-400 text-xs uppercase font-medium">Takbeer</span>
                                            <span className="font-semibold text-slate-900">{prayer.takbeer}</span>
                                        </div>
                                        <div className="w-px bg-slate-200 h-8" />
                                        <div>
                                            <span className="block text-slate-400 text-xs uppercase font-medium">Prayer</span>
                                            <span className="font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">{prayer.prayer}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Festivities Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {festivities.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md hover:border-amber-200 hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4">
                                    <item.icon size={24} />
                                </div>
                                <span className="font-medium text-slate-700">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
