'use client';

import { motion } from 'framer-motion';
import { Mic2, Play, Calendar, User } from 'lucide-react';
import { latestKhutbah } from '../_data';


interface KhutbahHeroProps {
    onPlay: () => void;
}

export function KhutbahHero({ onPlay }: KhutbahHeroProps) {
    return (
        <div className="relative bg-slate-900 border-b border-slate-800 overflow-hidden text-white">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/40 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-900/30 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Content */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-800 mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            Latest Khutbah
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight"
                        >
                            {latestKhutbah.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center gap-6 text-slate-300 mb-10"
                        >
                            <span className="flex items-center gap-2">
                                <User size={18} className="text-emerald-500" />
                                {latestKhutbah.speaker}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={18} className="text-emerald-500" />
                                {latestKhutbah.date}
                            </span>
                            <span className="text-sm px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                                {latestKhutbah.hijriDate}
                            </span>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            onClick={onPlay}
                            className="flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-xl shadow-emerald-900/20 group"
                        >
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
                                <Play size={16} className="ml-0.5" />
                            </div>
                            Listen Now
                        </motion.button>
                    </div>

                    {/* Visual/Waveform */}
                    <div className="flex-1 w-full lg:max-w-md">
                        <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] border border-slate-700 flex items-center justify-center relative shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />

                            {/* Decorative Circular Wave */}
                            <div className="absolute flex items-center justify-center">
                                <div className="w-64 h-64 border border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute w-48 h-48 border border-emerald-500/30 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
                                <div className="absolute w-32 h-32 border border-emerald-500/40 rounded-full animate-[spin_4s_linear_infinite]" />
                            </div>

                            <div className="relative z-10 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-500">
                                <Mic2 size={40} className="text-emerald-950" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
