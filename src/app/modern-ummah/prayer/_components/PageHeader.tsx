'use client';

import { Clock } from 'lucide-react';

interface PageHeaderProps {
    dateString: string;
    currentTime: string;
}

export function PageHeader({ dateString, currentTime }: PageHeaderProps) {
    return (
        <section className="pt-12 pb-8 px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <p className="text-emerald-600 font-medium text-sm uppercase tracking-wide mb-2">
                            Daily Salah Schedule
                        </p>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                            Prayer Times
                        </h1>
                        <p className="text-slate-500 mt-1">{dateString}</p>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <Clock size={18} className="text-emerald-600" />
                        <div className="text-right">
                            <span className="text-xs text-slate-500 uppercase tracking-wide block">Current Time</span>
                            <span className="text-lg font-bold text-slate-900 tabular-nums">{currentTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
