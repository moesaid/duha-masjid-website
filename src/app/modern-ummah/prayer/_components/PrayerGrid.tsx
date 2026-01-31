'use client';

import { motion } from 'framer-motion';
import { Moon, Sun, Sunrise, CloudSun, Sunset } from 'lucide-react';
import type { Prayer } from '../_data';

interface PrayerGridProps {
    prayers: Prayer[];
    activePrayer: number;
}

const PRAYER_ICONS: Record<string, React.ReactNode> = {
    fajr: <Moon className="w-5 h-5" />,
    sunrise: <Sunrise className="w-5 h-5" />,
    dhuhr: <Sun className="w-5 h-5" />,
    asr: <CloudSun className="w-5 h-5" />,
    maghrib: <Sunset className="w-5 h-5" />,
    isha: <Moon className="w-5 h-5" />,
};

export function PrayerGrid({ prayers, activePrayer }: PrayerGridProps) {
    return (
        <section className="px-4 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {prayers.map((prayer, index) => {
                        const isActive = index === activePrayer;
                        const isSunrise = prayer.type === 'sunrise';

                        return (
                            <motion.div
                                key={prayer.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`relative p-4 rounded-2xl text-center transition-all duration-300 ${isActive
                                        ? 'bg-emerald-600 shadow-lg shadow-emerald-600/25 scale-[1.02]'
                                        : isSunrise
                                            ? 'bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200'
                                            : 'bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md'
                                    }`}
                            >
                                {isActive && (
                                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-amber-400 text-amber-900 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                                        Now
                                    </span>
                                )}
                                <div className={`flex justify-center mb-2 ${isActive ? 'text-white/80' : isSunrise ? 'text-amber-600' : 'text-slate-400'}`}>
                                    {PRAYER_ICONS[prayer.id]}
                                </div>
                                <span className={`block text-lg mb-1 ${isActive ? 'text-emerald-100' : 'text-slate-400'}`}>
                                    {prayer.arabicName}
                                </span>
                                <span className={`block text-sm font-semibold mb-2 ${isActive ? 'text-white' : 'text-slate-700'}`}>
                                    {prayer.name}
                                </span>
                                <span className={`block text-xl font-bold tabular-nums ${isActive
                                        ? 'text-white'
                                        : isSunrise
                                            ? 'text-amber-700'
                                            : 'text-emerald-600'
                                    }`}>
                                    {prayer.adhan}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
