'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Sparkles } from 'lucide-react';

const programs = [
    {
        id: 'halaqa',
        icon: Calendar,
        title: "Sisters' Halaqa",
        time: 'Tuesdays @ 11:00 AM',
    },
    {
        id: 'playgroup',
        icon: Users,
        title: 'Mommy & Me Playgroup',
        time: 'Thursdays @ 10:00 AM',
    },
    {
        id: 'wellness',
        icon: Sparkles,
        title: 'Monthly Wellness Workshop',
        time: 'Last Saturday of Month',
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

export function FeaturedPrograms() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <div className="bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden">
                        <div className="pt-8 px-8 pb-2">
                            <h2 className="text-2xl font-bold text-slate-900">
                                Weekly Gatherings.
                            </h2>
                        </div>
                        <div className="px-8 pb-8">
                            <ul className="divide-y divide-slate-100">
                                {programs.map((program, i) => {
                                    const Icon = program.icon;
                                    return (
                                        <motion.li
                                            key={program.id}
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
                                                    {program.title}
                                                </span>
                                            </div>
                                            <span className="text-slate-500 text-sm font-medium">
                                                {program.time}
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
