'use client';

import { Moon, Sun, CloudSun, Sunset } from 'lucide-react';
import type { Prayer } from '../_data';

interface IqamahTableProps {
    prayers: Prayer[];
    activePrayer: number;
}

const PRAYER_ICONS: Record<string, React.ReactNode> = {
    fajr: <Moon className="w-4 h-4" />,
    dhuhr: <Sun className="w-4 h-4" />,
    asr: <CloudSun className="w-4 h-4" />,
    maghrib: <Sunset className="w-4 h-4" />,
    isha: <Moon className="w-4 h-4" />,
};

export function IqamahTable({ prayers, activePrayer }: IqamahTableProps) {
    const fardhPrayers = prayers.filter(p => p.type === 'fardh');

    return (
        <section className="px-4 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-slate-900 px-6 py-4">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wide text-left">Prayer</span>
                            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Adhan</span>
                            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Iqamah</span>
                        </div>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {fardhPrayers.map((prayer, index) => {
                            // Adjust for sunrise offset in activePrayer index
                            const adjustedIndex = activePrayer > 1 ? activePrayer - 1 : activePrayer;
                            const isActive = index === adjustedIndex;

                            return (
                                <div
                                    key={prayer.id}
                                    className={`grid grid-cols-3 gap-4 px-6 py-4 transition-colors ${isActive ? 'bg-emerald-50' : 'hover:bg-slate-50'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'
                                            }`}>
                                            {PRAYER_ICONS[prayer.id]}
                                        </div>
                                        <div>
                                            <span className="font-semibold text-slate-900">{prayer.name}</span>
                                            {isActive && (
                                                <span className="ml-2 text-xs font-bold text-emerald-600 uppercase">Next</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-center flex items-center justify-center">
                                        <span className="font-bold text-slate-700 tabular-nums">{prayer.adhan}</span>
                                    </div>
                                    <div className="text-center flex items-center justify-center">
                                        <span className="font-bold text-emerald-600 tabular-nums">{prayer.iqamah}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
