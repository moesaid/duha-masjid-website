'use client';

import { motion } from 'framer-motion';
import { ArrowRight, User, Calendar, MapPin } from 'lucide-react';
import { programTracks } from '../_data';

export function CourseCatalog() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">Weekly Tracks</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Core Curriculum</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programTracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-[2rem] p-2 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="relative p-6 md:p-8 bg-slate-50 rounded-[1.5rem] h-full flex flex-col overflow-hidden">
                                {/* Arabic Watermark */}
                                <div className="absolute -top-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 font-serif text-8xl text-emerald-900 pointer-events-none select-none">
                                    {track.arabicTitle}
                                </div>

                                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-emerald-700 shadow-sm mb-6 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                    <track.icon size={24} />
                                </div>

                                <div className="mb-6 flex-grow">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                                            {track.title}
                                        </h3>
                                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wide">
                                            {track.level}
                                        </span>
                                    </div>
                                    <p className="font-serif text-slate-500 italic mb-3">{track.subtitle}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {track.description}
                                    </p>
                                </div>

                                <div className="space-y-3 pt-6 border-t border-slate-200">
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <User size={16} className="text-emerald-500" />
                                        <span className="font-medium text-slate-900">{track.instructor}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <Calendar size={16} className="text-emerald-500" />
                                        <span>{track.schedule}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <MapPin size={16} className="text-emerald-500" />
                                        <span>{track.location}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
