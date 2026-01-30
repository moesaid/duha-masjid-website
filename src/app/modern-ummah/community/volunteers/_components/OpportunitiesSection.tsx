'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calendar, Utensils, Shield, Users, Mic, Baby, Brush } from 'lucide-react';

const opportunities = [
    {
        id: 'education',
        icon: BookOpen,
        title: 'Education',
        description: 'Teach Sunday school or Quran classes.',
        commitment: '2-4 hrs/week',
    },
    {
        id: 'events',
        icon: Calendar,
        title: 'Events',
        description: 'Organize iftars and celebrations.',
        commitment: 'Event-based',
    },
    {
        id: 'hospitality',
        icon: Utensils,
        title: 'Hospitality',
        description: 'Prepare and serve community meals.',
        commitment: 'Flexible',
    },
    {
        id: 'security',
        icon: Shield,
        title: 'Security',
        description: 'Help maintain safety at events.',
        commitment: '2-3 hrs/week',
    },
    {
        id: 'youth',
        icon: Users,
        title: 'Youth',
        description: 'Mentor young Muslims.',
        commitment: '3-5 hrs/week',
    },
    {
        id: 'media',
        icon: Mic,
        title: 'Media',
        description: 'Photography, video, social media.',
        commitment: 'Flexible',
    },
    {
        id: 'childcare',
        icon: Baby,
        title: 'Childcare',
        description: 'Support during classes and events.',
        commitment: 'During events',
    },
    {
        id: 'maintenance',
        icon: Brush,
        title: 'Maintenance',
        description: 'Keep our masjid beautiful.',
        commitment: 'Weekly',
    },
];

export function OpportunitiesSection() {
    return (
        <section className="py-24 bg-white" id="opportunities">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Find Your Fit</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
                        Choose Your Path
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        Match your skills and availability with opportunities that inspire you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {opportunities.map((opp, i) => {
                        const Icon = opp.icon;
                        return (
                            <motion.div
                                key={opp.id}
                                className="bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-3xl p-6 text-center cursor-pointer transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-600/20">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">{opp.title}</h3>
                                <p className="text-slate-600 text-sm mb-3 leading-relaxed">{opp.description}</p>
                                <span className="inline-block text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                                    {opp.commitment}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
