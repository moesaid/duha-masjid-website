'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '2,500+', label: 'Visitors Welcomed' },
    { value: '85', label: 'School Tours' },
    { value: '40+', label: 'Partner Organizations' },
    { value: '12', label: 'Years Connecting' },
];

export function ImpactStats() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Our Impact.
                    </h2>
                    <p className="text-slate-600">
                        The numbers behind our community bridge.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="text-center p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                            <p className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                                {stat.value}
                            </p>
                            <p className="text-slate-600 text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
