'use client';

import { RECENT_DONORS } from '../_data';
import { Heart, Clock } from 'lucide-react';

export function RecentDonorsTicker() {
    return (
        <section className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Heart size={16} className="text-rose-500 fill-rose-500" />
                Recent Supporters
            </h3>

            <div className="flex flex-col gap-4">
                {RECENT_DONORS.map((donor, idx) => (
                    <div key={idx} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
                                {donor.name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 text-sm">{donor.name}</div>
                                <div className="text-xs text-slate-500 flex items-center gap-1">
                                    <Clock size={10} /> {donor.timeAgo}
                                </div>
                            </div>
                        </div>
                        <div className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-sm group-hover:bg-emerald-100 transition-colors">
                            ${donor.amount}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400">
                    Join {RECENT_DONORS.length}+ others who donated today
                </p>
            </div>
        </section>
    );
}
