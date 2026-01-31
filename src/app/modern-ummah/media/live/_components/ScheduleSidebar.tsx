'use client';

import { Calendar, Clock, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { schedule } from '../_data';

export function ScheduleSidebar() {
    return (
        <div className="space-y-8">
            {/* Upcoming Schedule */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                        <Calendar size={20} />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-900">Broadcast Schedule</h3>
                </div>

                <div className="space-y-4">
                    {schedule.map((item) => (
                        <div
                            key={item.id}
                            className={`p-4 rounded-2xl border transition-all ${item.upcoming
                                ? 'bg-emerald-50/50 border-emerald-100'
                                : 'bg-white border-slate-100 hover:border-slate-200'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-1">
                                <span className={`text-xs font-bold uppercase tracking-wider ${item.upcoming ? 'text-emerald-600' : 'text-slate-500'
                                    }`}>
                                    {item.day}
                                </span>
                                <span className="text-sm font-medium text-slate-900 bg-white px-2 py-0.5 rounded-md border border-slate-100 shadow-sm">
                                    {item.time}
                                </span>
                            </div>
                            <h4 className="font-bold text-slate-800">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Khutbah Archive */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" />

                <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                        <BookOpen size={20} className="text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-serif font-bold">Khutbah Archive</h3>
                </div>

                <p className="text-slate-300 text-sm mb-6 relative z-10">
                    Missed a sermon? Explore our complete library of past Jumu'ah khutbahs and lectures.
                </p>

                <Link
                    href="/modern-ummah/media/khutbahs"
                    className="inline-flex items-center justify-between w-full px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all relative z-10 group-hover:pl-5"
                >
                    <span className="font-medium text-sm">View Archive</span>
                    <ArrowRight size={16} className="text-emerald-400" />
                </Link>
            </div>
        </div>
    );
}
