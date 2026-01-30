'use client';

import { motion } from 'framer-motion';
import { BookOpen, Coffee, Heart } from 'lucide-react';

const pillars = [
    {
        id: 'spiritual',
        icon: BookOpen,
        title: 'Spiritual Growth',
        description: 'Weekly halaqa and Quran circles for deepening your connection with Allah.',
    },
    {
        id: 'social',
        icon: Coffee,
        title: 'Social Connection',
        description: 'Coffee mornings, family potlucks, and meaningful friendships.',
    },
    {
        id: 'impact',
        icon: Heart,
        title: 'Community Impact',
        description: 'Charity drives, local advocacy, and serving those in need.',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        },
    }),
};

export function CorePillars() {
    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {pillars.map((pillar, i) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={pillar.id}
                                custom={i}
                                variants={cardVariants}
                            >
                                <div className="bg-white border border-slate-200 shadow-sm rounded-3xl h-full hover:shadow-md transition-shadow duration-300 p-8 text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 mx-auto">
                                        <Icon className="w-7 h-7 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
