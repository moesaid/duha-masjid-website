'use client';

import { Moon, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function ItikafInfo() {
    return (
        <section className="bg-slate-950 py-16 -mt-1 border-b border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-500 text-xs font-medium uppercase tracking-widest mb-4">
                            Last 10 Nights
                        </span>
                        <h2 className="text-4xl font-serif text-white mb-6">I'tikaf at Duha Masjid</h2>

                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Join us for the sacred practice of I'tikaf during the last 10 nights of Ramadan.
                            Experience spiritual seclusion, community, and the search for Laylatul Qadr in a serene environment.
                        </p>

                        <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-amber-900/20 group">
                            <Moon size={18} className="fill-current" />
                            <span>Register for I'tikaf</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <motion.div
                        className="bg-slate-900 rounded-3xl p-8 border border-slate-800/60 shadow-2xl relative overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Decorative Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-10 -mt-10" />

                        <h3 className="text-xl font-semibold text-white mb-6 relative z-10">Program Details</h3>
                        <ul className="space-y-5 relative z-10">
                            {[
                                "Brothers & Sisters sections available",
                                "Suhoor & Iftar provided daily",
                                "Qiyam al-Layl every night",
                                "Spiritual talks & Quran circles",
                                "Limited spots - Register early"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle size={20} className="text-emerald-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
