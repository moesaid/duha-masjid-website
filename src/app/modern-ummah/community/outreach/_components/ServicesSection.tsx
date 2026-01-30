'use client';

import { motion } from 'framer-motion';
import { Building, MessageCircle, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Building,
        title: 'Mosque Tours',
        description: 'Experience our sacred space with a guided tour. Perfect for school groups, civic organizations, and neighbors.',
        schedule: 'Saturdays at 11:00 AM',
        cta: 'Request a Tour',
    },
    {
        icon: MessageCircle,
        title: 'Speakers Bureau',
        description: 'Invite a community ambassador to speak at your school, workplace, or organization about Islam and Muslims.',
        schedule: 'By Request',
        cta: 'Request a Speaker',
    },
    {
        icon: BookOpen,
        title: 'Islam 101',
        description: 'Monthly open house session for community members interested in learning the basics of Islam.',
        schedule: 'First Sunday Monthly',
        cta: 'Register',
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

export function ServicesSection() {
    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        How We Connect.
                    </h2>
                    <p className="text-slate-600">
                        Open doors lead to open hearts.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 h-full flex flex-col">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5">
                                        <Icon className="w-7 h-7 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-4 flex-1">
                                        {service.description}
                                    </p>
                                    <p className="text-sm text-amber-600 font-medium mb-4">
                                        {service.schedule}
                                    </p>
                                    <Link
                                        href="#contact"
                                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                                    >
                                        {service.cta}
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
