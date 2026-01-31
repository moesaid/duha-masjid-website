'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardCheck, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../../_components/Button/Button';
import { ApplicationModal } from './ApplicationModal';

const steps = [
    { num: 1, title: 'Application', desc: 'Online submission ($150 fee)', icon: FileText },
    { num: 2, title: 'Assessment', desc: 'Math & Reading placement', icon: ClipboardCheck },
    { num: 3, title: 'Interview', desc: 'Family meeting with Principal', icon: MessageSquare },
    { num: 4, title: 'Enrollment', desc: 'Registration & Tuition setup', icon: CheckCircle },
];

export function AdmissionsProcess() {
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);

    return (
        <section className="py-24 bg-white" id="admissions">
            <ApplicationModal open={isApplicationOpen} onOpenChange={setIsApplicationOpen} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 relative overflow-hidden">
                    {/* Decorative Circle */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl -mr-20 -mt-20 opacity-50" />

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-slate-900">Admissions Process</h2>
                                <p className="text-slate-600 mt-2">Join a community of lifelong learners.</p>
                            </div>
                            <Button
                                onClick={() => setIsApplicationOpen(true)}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
                            >
                                Begin Application <ArrowRight size={16} />
                            </Button>
                        </div>

                        <div className="relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200" />

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {steps.map((step, i) => (
                                    <motion.div
                                        key={step.num}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="relative bg-white md:bg-transparent p-6 md:p-0 rounded-2xl border md:border-0 border-slate-100 shadow-sm md:shadow-none z-10"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-white border-4 border-emerald-50 shadow-lg flex items-center justify-center mx-auto md:mx-0 mb-6 text-emerald-600 group relative">
                                            <step.icon size={32} />
                                            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full border-2 border-white">
                                                {step.num}
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 text-center md:text-left">{step.title}</h3>
                                        <p className="text-slate-500 text-sm text-center md:text-left">{step.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
