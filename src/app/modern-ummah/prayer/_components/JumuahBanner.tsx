'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { JumuahTime } from '../_data';

interface JumuahBannerProps {
    jummahTimes: JumuahTime[];
    isFriday: boolean;
}

export function JumuahBanner({ jummahTimes, isFriday }: JumuahBannerProps) {
    return (
        <section className="px-4 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`p-6 md:p-8 rounded-2xl transition-all ${isFriday
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg shadow-emerald-600/20'
                            : 'bg-white border border-slate-200'
                        }`}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${isFriday ? 'bg-white/20' : 'bg-emerald-100'
                                }`}>
                                <MosqueIcon className={isFriday ? 'text-white' : 'text-emerald-600'} />
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold ${isFriday ? 'text-white' : 'text-slate-900'}`}>
                                    Jumu&apos;ah Prayer
                                </h3>
                                <p className={`text-sm ${isFriday ? 'text-emerald-100' : 'text-slate-500'}`}>
                                    {isFriday ? '✨ Today is Jummah!' : 'Every Friday'}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {jummahTimes.map((jummah) => (
                                <div
                                    key={jummah.name}
                                    className={`flex flex-col px-6 py-4 rounded-xl ${isFriday
                                            ? 'bg-white/20 backdrop-blur-sm'
                                            : 'bg-slate-50 border border-slate-100'
                                        }`}
                                >
                                    <span className={`text-xs font-medium mb-1 ${isFriday ? 'text-emerald-100' : 'text-slate-500'}`}>
                                        {jummah.name}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <span className={`text-[10px] uppercase tracking-wide block ${isFriday ? 'text-white/60' : 'text-slate-400'}`}>Khutbah</span>
                                            <span className={`text-lg font-bold tabular-nums ${isFriday ? 'text-white' : 'text-slate-700'}`}>
                                                {jummah.khutbah}
                                            </span>
                                        </div>
                                        <ChevronRight className={`w-4 h-4 ${isFriday ? 'text-white/40' : 'text-slate-300'}`} />
                                        <div>
                                            <span className={`text-[10px] uppercase tracking-wide block ${isFriday ? 'text-white/60' : 'text-slate-400'}`}>Salah</span>
                                            <span className={`text-lg font-bold tabular-nums ${isFriday ? 'text-white' : 'text-emerald-600'}`}>
                                                {jummah.salah}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function MosqueIcon({ className }: { className?: string }) {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 3c-1.5 2-3 3.5-3 5.5a3 3 0 0 0 6 0C15 6.5 13.5 5 12 3Z" />
            <path d="M4 21V11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" />
            <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
            <path d="M3 21h18" />
        </svg>
    );
}
