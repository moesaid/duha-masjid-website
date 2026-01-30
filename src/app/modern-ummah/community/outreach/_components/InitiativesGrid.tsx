'use client';

import { motion } from 'framer-motion';
import { HandHeart, MessageSquare, Home, Utensils } from 'lucide-react';
import Link from 'next/link';

const initiatives = [
    {
        id: 'food-pantry',
        icon: Utensils,
        title: 'Community Food Pantry',
        description: 'Weekly food distribution serving 500+ families in need.',
        link: '/modern-ummah/community/food-pantry',
        color: 'amber',
    },
    {
        id: 'interfaith',
        icon: MessageSquare,
        title: 'Interfaith Dialogue',
        description: 'Building understanding through conversation with our neighbors.',
        link: '#',
        color: 'emerald',
    },
    {
        id: 'housing',
        icon: Home,
        title: 'Housing Assistance',
        description: 'Emergency rental support for families facing hardship.',
        link: '#',
        color: 'emerald',
    },
    {
        id: 'refugee',
        icon: HandHeart,
        title: 'Refugee Resettlement',
        description: 'Welcoming and supporting newly arrived refugee families.',
        link: '#',
        color: 'emerald',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        },
    }),
};

export function InitiativesGrid() {
    return (
        <section className="py-20 bg-slate-50/50" id="initiatives">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Our Initiatives.
                    </h2>
                    <p className="text-slate-600">
                        Making a difference in our community, one person at a time.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {initiatives.map((initiative, i) => {
                        const Icon = initiative.icon;
                        const bgColor = initiative.color === 'amber' ? 'bg-amber-50' : 'bg-emerald-50';
                        const iconColor = initiative.color === 'amber' ? 'text-amber-600' : 'text-emerald-600';

                        return (
                            <motion.div
                                key={initiative.id}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Link href={initiative.link} className="block group">
                                    <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 h-full hover:shadow-md transition-all duration-300 hover:border-slate-300">
                                        <div className={`w-14 h-14 rounded-2xl ${bgColor} flex items-center justify-center mb-5`}>
                                            <Icon className={`w-7 h-7 ${iconColor}`} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                            {initiative.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {initiative.description}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
