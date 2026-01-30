'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';
import { weeklySchedule } from '../_data';

export function WeeklyRhythm() {
    const [selectedDay, setSelectedDay] = useState(weeklySchedule[0]);

    return (
        <section className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium uppercase tracking-widest mb-2">
                        Weekly Schedule
                    </span>
                    <h2 className="text-3xl font-serif text-slate-900">The Rhythm</h2>
                </div>

                {/* Compact Circular Navigation */}
                <div className="flex items-center justify-between md:justify-center md:gap-6 mb-8 overflow-x-auto py-4 hide-scrollbar px-2">
                    {weeklySchedule.map((day) => (
                        <button
                            key={day.day}
                            onClick={() => setSelectedDay(day)}
                            className={`
                                relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                                ${selectedDay.day === day.day
                                    ? 'bg-emerald-900 text-white shadow-md shadow-emerald-900/20 scale-110'
                                    : 'bg-white text-slate-500 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-100'}
                            `}
                        >
                            <span className="text-xs md:text-sm font-bold">{day.shortDay}</span>
                            {day.hasProgram && selectedDay.day !== day.day && (
                                <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-50" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Dynamic Content Area */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm min-h-[200px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedDay.day}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-baseline justify-between mb-6">
                                <h3 className="text-2xl font-serif text-slate-900">{selectedDay.day}</h3>
                                {selectedDay.hasProgram && (
                                    <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                        {selectedDay.programs.length} Programs
                                    </span>
                                )}
                            </div>

                            {selectedDay.hasProgram ? (
                                <div className="space-y-3">
                                    {selectedDay.programs.map((program, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors"
                                        >
                                            <div className="flex items-center gap-2 min-w-[120px] text-emerald-700 font-bold">
                                                <Clock size={16} />
                                                <span>{program.time}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{program.name}</h4>
                                                {program.note && <p className="text-sm text-slate-500 mt-0.5">{program.note}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-slate-400">
                                    <Calendar className="mx-auto mb-3 opacity-50" size={32} />
                                    <p>No scheduled programs for this day.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
