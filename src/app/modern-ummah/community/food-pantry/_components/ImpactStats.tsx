'use client';

import { motion } from 'framer-motion';

const stats = [
    { number: '1,200+', label: 'Families Served Monthly' },
    { number: '50k', label: 'lbs Food Distributed' },
    { number: '100%', label: 'Volunteer Run' }
];

export function ImpactStats() {
    return (
        <section className="py-12 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="text-center py-8 md:py-4 px-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                                {stat.number}
                            </p>
                            <p className="text-slate-500 font-medium uppercase tracking-wide text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
