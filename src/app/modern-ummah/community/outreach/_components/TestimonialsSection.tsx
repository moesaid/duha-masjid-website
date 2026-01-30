'use client';

import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
    {
        quote: "Our school group visited the masjid and it was transformative. The hospitality and warmth we received opened our students' eyes to a beautiful community.",
        author: "Sarah Mitchell",
        role: "Principal, Springfield Elementary"
    },
    {
        quote: "The speakers bureau provided our workplace with an informative and heartfelt presentation. Our team left with a deeper understanding and appreciation.",
        author: "David Chen",
        role: "HR Director, Tech Solutions Inc."
    },
    {
        quote: "As a longtime Springfield resident, I'm grateful for neighbors who open their doors with such genuine hospitality. The open house events are a community treasure.",
        author: "Pastor James Thompson",
        role: "Unity Church of Springfield"
    }
];

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Voices from Our Community.
                    </h2>
                </motion.div>

                <motion.div
                    className="relative bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Quote className="w-10 h-10 text-emerald-200 mb-6" />

                    <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 italic min-h-[100px]">
                        &ldquo;{testimonials[activeIndex].quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold text-slate-900">{testimonials[activeIndex].author}</p>
                            <p className="text-sm text-slate-500">{testimonials[activeIndex].role}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5 text-slate-600" />
                            </button>
                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5 text-slate-600" />
                            </button>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? 'bg-emerald-600' : 'bg-slate-300'
                                    }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
