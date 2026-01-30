'use client';

import { Clock, Calendar, CheckCircle2 } from 'lucide-react';

export function WeeklySchedule() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Visual Schedule */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Weekly Timings</h3>
                                <p className="text-slate-500">Every Saturday & Sunday</p>
                            </div>
                        </div>

                        <div className="space-y-6 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
                            {[
                                { time: "10:00 AM", event: "Morning Assembly & Dua", color: "text-amber-600" },
                                { time: "10:30 AM", event: "Quran Recitation & Hifz", color: "text-slate-900" },
                                { time: "11:30 AM", event: "Snack & Recess", color: "text-slate-500" },
                                { time: "12:00 PM", event: "Islamic Studies & Activities", color: "text-slate-900" },
                                { time: "01:00 PM", event: "Dhuhr Prayer & Dismissal", color: "text-emerald-700 font-bold" },
                            ].map((slot, i) => (
                                <div key={i} className="relative pl-12">
                                    <div className="absolute left-2.5 top-2 w-3 h-3 bg-white border-2 border-slate-300 rounded-full transform -translate-x-1/2" />
                                    <div className="text-sm font-medium text-slate-400 mb-1">{slot.time}</div>
                                    <div className={`text-lg font-medium ${slot.color}`}>{slot.event}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">A Weekend of Sunshine</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Our weekend program isn't just about textbooks. It's about friendship, joyful learning, and building a confident Muslim identity in a supportive environment.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Small Class Sizes (Max 15 students)",
                                "Certified & Caring Teachers",
                                "Art, Stories & Interactive Learning",
                                "Monthly Community Events"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                    <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                                    <span className="font-medium text-slate-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
