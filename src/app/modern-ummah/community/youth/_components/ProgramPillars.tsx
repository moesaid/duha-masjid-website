'use client';

import { motion } from 'framer-motion';
import { Zap, Coffee } from 'lucide-react';

const programs = [
    {
        id: 'high-school',
        icon: Zap,
        title: 'Young Muslims.',
        description: 'Weekly halaqas and monthly outings focused on brotherhood/sisterhood.',
    },
    {
        id: 'college',
        icon: Coffee,
        title: 'The Discussion.',
        description: 'Deep dives into theology, career mentorship, and chai nights.',
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

export function ProgramPillars() {
    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {programs.map((program, i) => {
                        const Icon = program.icon;
                        return (
                            <motion.div
                                key={program.id}
                                custom={i}
                                variants={cardVariants}
                            >
                                {/* Card with proper styling */}
                                <div className="bg-white border border-slate-200 shadow-sm rounded-3xl h-full hover:shadow-md transition-shadow duration-300 p-8">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {program.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {program.description}
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
