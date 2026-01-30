'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "Finding this community changed my life. The sisterhood here is genuine and supportive.",
        name: "Sr. Nadia",
        role: "Member since 2019",
    },
    {
        id: 2,
        quote: "As a new Muslim, the sisters welcomed me with open arms. I finally found my spiritual family.",
        name: "Sr. Sarah",
        role: "Reverted 2022",
    },
];

export function SistersSpotlight() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Sisters Spotlight.
                    </h2>
                    <p className="text-slate-600">
                        Hear from the women in our community.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={testimonial.id}
                            className="relative bg-gradient-to-br from-emerald-50/80 to-white border border-emerald-100 rounded-3xl p-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        >
                            <Quote className="w-8 h-8 text-emerald-200 mb-4" />
                            <p className="text-slate-700 leading-relaxed mb-6 italic">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <div>
                                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                                <p className="text-sm text-slate-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
