'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Activity, FileHeart, Pill, HeartPulse, AlertCircle } from 'lucide-react';

const services = [
    {
        icon: Stethoscope,
        title: 'Primary Care',
        description: 'Comprehensive checkups, physical exams, and preventive care consultations.'
    },
    {
        icon: Activity,
        title: 'Health Screenings',
        description: 'Regular monitoring for blood pressure, diabetes (glucose), and cholesterol.'
    },
    {
        icon: FileHeart,
        title: 'Specialist Referrals',
        description: 'Coordination with local hospitals for x-rays and advanced specialized care.'
    },
    {
        icon: Pill,
        title: 'Basic Pharmacy',
        description: 'On-site basic antibiotics and maintenance meds, plus discount vouchers.'
    }
];

export function ClinicServices() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
                    <p className="text-slate-600 text-lg">
                        Providing essential medical support to keep our community healthy and thriving.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 md:p-8 flex items-start gap-4 max-w-3xl mx-auto">
                    <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-amber-900 text-lg mb-2">Important Limitations</h4>
                        <p className="text-amber-800 text-sm leading-relaxed">
                            Please note that we are an outpatient clinic. We <span className="font-bold">do not</span> provide emergency services, surgical procedures, or controlled substance prescriptions. In case of a medical emergency, please call 911 or visit the nearest ER immediately.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
