'use client';

import { motion } from 'framer-motion';
import { ramadanCalendar, CalendarDay } from '../_data';

interface IftarCalendarProps {
    onDaySelect: (day: CalendarDay) => void;
}

export function IftarCalendar({ onDaySelect }: IftarCalendarProps) {
    return (
        <section className="bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-medium uppercase tracking-widest mb-3">
                        Sponsor an Iftar
                    </span>
                    <h2 className="text-4xl font-serif text-slate-900">Ramadan Iftar Calendar</h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Select a day to sponsor iftar for the community. Earn the reward of feeding fasting believers.
                    </p>
                </div>

                <motion.div
                    className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="text-center py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                {day}
                            </div>
                        ))}

                        {ramadanCalendar.map((day, index) => (
                            <button
                                key={index}
                                onClick={() => day.status === 'available' && onDaySelect(day)}
                                disabled={day.status === 'sponsored'}
                                className={`
                                    relative h-28 rounded-xl p-3 flex flex-col items-start justify-between transition-all duration-300 border
                                    ${day.status === 'sponsored'
                                        ? 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 cursor-not-allowed opacity-90'
                                        : 'bg-white border-slate-200 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-900/5 cursor-pointer group'
                                    }
                                `}
                            >
                                <div className="flex justify-between items-start w-full">
                                    <span className={`
                                        text-sm font-bold w-7 h-7 flex items-center justify-center rounded-lg
                                        ${day.status === 'sponsored' ? 'bg-slate-200 text-slate-500' : 'bg-emerald-50 text-emerald-700'}
                                    `}>
                                        {day.day}
                                    </span>
                                    {day.status === 'sponsored' && (
                                        <div className="w-2 h-2 rounded-full bg-slate-400" />
                                    )}
                                </div>

                                {day.status === 'available' ? (
                                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        Available
                                    </span>
                                ) : (
                                    <span className="text-xs font-medium text-slate-500 line-through decoration-slate-400/50">
                                        Sponsored
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-6 justify-center pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-slate-400" />
                            <span className="text-sm text-slate-600">Sponsored</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-emerald-500" />
                            <span className="text-sm text-slate-600">Available - Click to Sponsor</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
