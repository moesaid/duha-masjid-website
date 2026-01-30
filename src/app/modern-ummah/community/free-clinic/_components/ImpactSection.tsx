'use client';

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const limitations = [
    'No Emergency Room Services. Call 911 for emergencies.',
    'No surgical procedures or overnight care.',
    'No controlled substance prescriptions.',
];

const stats = [
    { value: '2,500+', label: 'Patients Served Annually' },
    { value: '25+', label: 'Volunteer Medical Professionals' },
    { value: '10+', label: 'Years of Service' },
];

export function ImpactSection() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
                        Our Impact.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                            >
                                <p className="text-4xl font-bold text-emerald-600 mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-slate-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Limitations */}
                <motion.div
                    className="bg-amber-50 border border-amber-100 rounded-3xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">Important Limitations</h3>
                            <ul className="space-y-2 text-slate-600">
                                {limitations.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
