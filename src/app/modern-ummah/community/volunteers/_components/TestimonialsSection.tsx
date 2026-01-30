'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Volunteering at the masjid has been one of the most rewarding experiences of my life. I've made lifelong friends and feel truly connected to my community.",
        name: 'Sr. Fatima Hassan',
        role: 'Sunday School Teacher, 5 years',
    },
    {
        quote: "Even with my busy schedule, I find time to help because the spiritual reward is immense. The Prophet ﷺ said: 'The best of people are those who are most beneficial to others.'",
        name: 'Br. Ahmad Ali',
        role: 'Event Volunteer, 3 years',
    },
];

export function TestimonialsSection() {
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
                        What Our Volunteers Say.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Quote className="w-8 h-8 text-emerald-200 mb-4" />
                            <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>
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
