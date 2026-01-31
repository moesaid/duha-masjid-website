'use client';

import { motion } from 'framer-motion';
import { PlayCircle, Mic, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { archiveRecordings } from '../_data';

export function ArchiveGallery() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Header Col */}
                    <div className="lg:col-span-4">
                        <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">Digital Library</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-6">Recent Recordings</h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Missed a class? Access our growing archive of recorded sessions, khutbahs, and special lectures.
                        </p>
                        <Link href="/modern-ummah/media/khutbahs" className="flex items-center gap-2 text-emerald-700 font-bold hover:gap-3 transition-all group">
                            View Full Archive
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Content Col */}
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {archiveRecordings.map((recording, index) => (
                                <motion.div
                                    key={recording.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-lg hover:shadow-emerald-900/5 transition-all cursor-pointer"
                                >
                                    <div className={`
                                        w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors
                                        ${recording.type === 'video' ? 'bg-rose-100 text-rose-600 group-hover:bg-rose-500 group-hover:text-white' : 'bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white'}
                                    `}>
                                        {recording.type === 'video' ? <PlayCircle size={20} /> : <Mic size={20} />}
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-emerald-600 transition-colors">
                                                {recording.series}
                                            </span>
                                            <span className="text-slate-300">•</span>
                                            <span className="text-slate-400 text-xs">{recording.date}</span>
                                        </div>
                                        <h3 className="font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                                            {recording.title}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-2 pl-2 self-end sm:self-center">
                                        <span className="text-xs font-medium bg-slate-200 text-slate-600 px-2 py-1 rounded-md group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                                            {recording.duration}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
