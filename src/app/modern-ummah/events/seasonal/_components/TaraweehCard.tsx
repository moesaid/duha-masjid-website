'use client';

import { Clock, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { taraweehInfo } from '../_data';

export function TaraweehCard() {
    const progress = (taraweehInfo.currentJuz / taraweehInfo.totalJuz) * 100;

    return (
        <section className="bg-slate-950 py-16 -mt-1 relative z-10 border-b border-slate-900">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium uppercase tracking-widest mb-3">
                        Night Prayers
                    </span>
                    <h2 className="text-3xl font-serif text-white">Taraweeh at Duha Masjid</h2>
                </div>

                <motion.div
                    className="bg-slate-900/50 backdrop-blur-md border border-slate-800/60 rounded-3xl p-8 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-900/10">
                                <Clock size={20} />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">Start Time</p>
                                <p className="text-white text-xl font-semibold">{taraweehInfo.startTime}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-900/10">
                                <Users size={20} />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">Reciters</p>
                                <p className="text-white text-xl font-semibold">{taraweehInfo.reciters}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-slate-300">
                                <BookOpen size={18} className="text-amber-500" />
                                <span className="font-medium">Quran Completion Progress</span>
                            </div>
                            <span className="text-slate-400 text-sm">
                                Juz <span className="text-white font-bold">{taraweehInfo.currentJuz}</span> of {taraweehInfo.totalJuz}
                            </span>
                        </div>
                        <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(251,191,36,0.2)]"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
