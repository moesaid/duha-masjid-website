'use client';

import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import { featuredSeries } from '../_data';

interface SeriesSectionProps {
    onSeriesPlay: (seriesId: number) => void;
}

export function SeriesSection({ onSeriesPlay }: SeriesSectionProps) {
    return (
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-slate-900 text-white rounded-lg">
                        <Sparkles size={18} />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900">Featured Series</h2>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
                    {featuredSeries.map((series, idx) => (
                        <motion.div
                            key={series.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`
                                relative flex-shrink-0 w-80 h-48 rounded-2xl p-6 text-white overflow-hidden group cursor-pointer snap-center
                                ${series.color} shadow-lg
                            `}
                            onClick={() => onSeriesPlay(series.id)}
                        >
                            {/* Abstract Pattern overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[url('/patterns/topography.svg')]" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500" />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider opacity-70 mb-2 block">
                                        {series.parts} Parts
                                    </span>
                                    <h3 className="text-2xl font-serif font-bold leading-tight">
                                        {series.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <Play size={14} fill="white" />
                                    </div>
                                    Play Series
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
