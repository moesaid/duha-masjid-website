'use client';

import { motion } from 'framer-motion';
import { Vote, Calendar, Award, MessageCircle, Gift, Heart } from 'lucide-react';

const benefits = [
    {
        icon: Vote,
        title: 'Voting Rights',
        description: 'Participate in elections and shape leadership.',
    },
    {
        icon: Calendar,
        title: 'Event Discounts',
        description: 'Save on rentals, banquets, and events.',
    },
    {
        icon: Award,
        title: 'Program Priority',
        description: 'First access to classes and camps.',
    },
    {
        icon: MessageCircle,
        title: 'Direct Communication',
        description: 'Member-only channels and town halls.',
    },
    {
        icon: Gift,
        title: 'Family Coverage',
        description: 'Benefits extend to all household members.',
    },
    {
        icon: Heart,
        title: 'Community Impact',
        description: 'Dues support programs and services.',
    },
];

export function BenefitsSection() {
    return (
        <section className="py-24 bg-white" id="benefits">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Why Join</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
                        Member Perks
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        Exclusive benefits that come with being an official member.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, i) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-emerald-100/50 hover:border-emerald-200 transition-all duration-300 overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                            >
                                {/* Hover gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center mb-5 shadow-lg shadow-emerald-600/20">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
