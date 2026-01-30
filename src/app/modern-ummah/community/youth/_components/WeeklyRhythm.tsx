'use client';

import { motion } from 'framer-motion';
import { Calendar, BookOpen, Dumbbell } from 'lucide-react';

const gatherings = [
    {
        id: 'friday-live',
        icon: Calendar,
        title: 'Friday Night Live',
        time: '7:00 PM',
    },
    {
        id: 'sunday-quran',
        icon: BookOpen,
        title: 'Sunday Quran Study',
        time: '11:00 AM',
    },
    {
        id: 'saturday-fajr',
        icon: Dumbbell,
        title: 'Saturday Fajr & Basketball',
        time: '6:00 AM',
    },
];

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.2 + i * 0.1,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        },
    }),
};

export function WeeklyRhythm() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    {/* Card with explicit styling */}
                    <div className="bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden">
                        <div className="pt-8 px-8 pb-2">
                            <h2 className="text-2xl font-bold text-slate-900">
                                Weekly Gatherings.
                            </h2>
                        </div>
                        <div className="px-8 pb-8">
                            <ul className="divide-y divide-slate-100">
                                {gatherings.map((gathering, i) => {
                                    const Icon = gathering.icon;
                                    return (
                                        <motion.li
                                            key={gathering.id}
                                            className="flex items-center gap-4 py-5 first:pt-4"
                                            custom={i}
                                            variants={itemVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-5 h-5 text-amber-600" />
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-slate-900 font-medium">
                                                    {gathering.title}
                                                </span>
                                            </div>
                                            <span className="text-slate-500 text-sm font-medium">
                                                {gathering.time}
                                            </span>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
