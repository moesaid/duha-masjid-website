'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Who can become a member?',
        answer: 'Any Muslim who agrees to our masjid bylaws and wishes to contribute to our community can apply for membership. We welcome all backgrounds and walks of life.',
    },
    {
        question: 'What documents do I need?',
        answer: "Each member will need a valid government-issued ID (driver's license, passport, or state ID) and proof of residence (utility bill, bank statement, or lease agreement).",
    },
    {
        question: 'Is there a fee for youth members?',
        answer: 'Members under 18 years old are free. Adult members pay a one-time annual fee of $100.',
    },
    {
        question: 'What if I cannot afford the membership fee?',
        answer: 'We never want finances to be a barrier. Please contact our office confidentially to discuss scholarship options.',
    },
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Frequently Asked Questions.
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-slate-900">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === i ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
