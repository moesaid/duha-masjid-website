'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Clock } from 'lucide-react';

interface Prayer {
    name: string;
    arabicName: string;
    time: string;
    type: 'fardh' | 'jummah' | 'sunrise';
}

// Mock prayer times - in production, fetch from API/calculation
const DAILY_PRAYERS: Prayer[] = [
    { name: 'Fajr', arabicName: 'الفجر', time: '5:45 AM', type: 'fardh' },
    { name: 'Sunrise', arabicName: 'الشروق', time: '7:12 AM', type: 'sunrise' },
    { name: 'Dhuhr', arabicName: 'الظهر', time: '12:30 PM', type: 'fardh' },
    { name: 'Asr', arabicName: 'العصر', time: '3:45 PM', type: 'fardh' },
    { name: 'Maghrib', arabicName: 'المغرب', time: '6:18 PM', type: 'fardh' },
    { name: 'Isha', arabicName: 'العشاء', time: '7:48 PM', type: 'fardh' },
];

const JUMMAH_PRAYERS: Prayer[] = [
    { name: 'Jummah 1', arabicName: 'الجمعة ١', time: '12:15 PM', type: 'jummah' },
    { name: 'Jummah 2', arabicName: 'الجمعة ٢', time: '1:30 PM', type: 'jummah' },
];

export function PrayerTimeline() {
    const [activePrayer, setActivePrayer] = useState(2); // Dhuhr as default
    const [currentTime, setCurrentTime] = useState('');
    const today = new Date();
    const isFriday = today.getDay() === 5;

    // Update current time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    // Determine active prayer based on current time
    useEffect(() => {
        const now = new Date();
        const currentHour = now.getHours();

        if (currentHour < 6) setActivePrayer(0);       // Fajr
        else if (currentHour < 8) setActivePrayer(1);  // Sunrise
        else if (currentHour < 14) setActivePrayer(2); // Dhuhr
        else if (currentHour < 17) setActivePrayer(3); // Asr
        else if (currentHour < 19) setActivePrayer(4); // Maghrib
        else setActivePrayer(5);                        // Isha
    }, []);

    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-1">
                            Prayer Times
                        </h2>
                        <p className="text-slate-500">
                            {today.toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <Clock size={18} className="text-emerald-600" />
                        <div className="text-right">
                            <span className="text-xs text-slate-500 uppercase tracking-wide block">Current Time</span>
                            <span className="text-lg font-bold text-slate-900 tabular-nums">{currentTime}</span>
                        </div>
                    </div>
                </div>

                {/* Prayer Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                    {DAILY_PRAYERS.map((prayer, index) => {
                        const isActive = index === activePrayer;
                        const isSunrise = prayer.type === 'sunrise';

                        return (
                            <div
                                key={prayer.name}
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
                                <span className={`block text-lg mb-1 ${isActive ? 'text-emerald-100' : 'text-slate-400'
                                    }`}>
                                    {prayer.arabicName}
                                </span>
                                <span className={`block text-sm font-semibold mb-2 ${isActive ? 'text-white' : 'text-slate-700'
                                    }`}>
                                    {prayer.name}
                                </span>
                                <span className={`block text-xl font-bold tabular-nums ${isActive
                                        ? 'text-white'
                                        : isSunrise
                                            ? 'text-amber-700'
                                            : 'text-emerald-600'
                                    }`}>
                                    {prayer.time}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Jummah Section */}
                <div className={`flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl transition-all ${isFriday
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg shadow-emerald-600/20'
                        : 'bg-white border border-slate-200'
                    }`}>
                    <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${isFriday ? 'bg-white/20' : 'bg-emerald-100'
                            }`}>
                            <MosqueIcon className={isFriday ? 'text-white' : 'text-emerald-600'} />
                        </div>
                        <div>
                            <h3 className={`text-lg font-bold ${isFriday ? 'text-white' : 'text-slate-900'
                                }`}>
                                Jummah Prayer
                            </h3>
                            <p className={`text-sm ${isFriday ? 'text-emerald-100' : 'text-slate-500'
                                }`}>
                                {isFriday ? '✨ Today is Jummah!' : 'Every Friday'}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        {JUMMAH_PRAYERS.map((jummah) => (
                            <div
                                key={jummah.name}
                                className={`flex flex-col items-center px-6 py-3 rounded-xl ${isFriday
                                        ? 'bg-white/20 backdrop-blur-sm'
                                        : 'bg-slate-50 border border-slate-100'
                                    }`}
                            >
                                <span className={`text-xs font-medium mb-1 ${isFriday ? 'text-emerald-100' : 'text-slate-500'
                                    }`}>
                                    {jummah.name}
                                </span>
                                <span className={`text-lg font-bold tabular-nums ${isFriday ? 'text-white' : 'text-emerald-600'
                                    }`}>
                                    {jummah.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
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
