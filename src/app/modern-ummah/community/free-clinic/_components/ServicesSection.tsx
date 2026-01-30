'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Activity, Building2, Pill } from 'lucide-react';

const services = [
    {
        icon: Stethoscope,
        title: 'Primary Care',
        description: 'General checkups, physicals, and flu shots for all ages.',
    },
    {
        icon: Activity,
        title: 'Health Screenings',
        description: 'Blood pressure, diabetes (glucose), and cholesterol monitoring.',
    },
    {
        icon: Building2,
        title: 'Specialist Referrals',
        description: 'Coordination with local hospitals for advanced care and x-rays.',
    },
    {
        icon: Pill,
        title: 'Free Pharmacy',
        description: 'Basic antibiotics and maintenance medications provided on-site.',
    },
];

export function ServicesSection() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">What We Offer</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
                        Comprehensive Care
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        All services are 100% free of charge—no insurance required.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                className="bg-emerald-50/50 border border-emerald-100 hover:border-emerald-300 rounded-3xl p-8 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
