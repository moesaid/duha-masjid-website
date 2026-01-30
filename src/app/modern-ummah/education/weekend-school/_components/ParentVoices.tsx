'use client';

import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        quote: "The curriculum is well-structured and age-appropriate. My son actually looks forward to weekends for Madrasah!",
        author: "Br. Hassan",
        role: "Parent of 2"
    },
    {
        quote: "I love that they don't just teach memorization but understanding. My daughter asks such thoughtful questions now.",
        author: "Sr. Khadija",
        role: "Parent of Seeds Student"
    },
    {
        quote: "The teachers truly care about each student's spiritual development. It feels like a second family.",
        author: "Sr. Amina",
        role: "Parent of 3 Students"
    }
];

export function ParentVoices() {
    return (
        <section className="py-24 bg-amber-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#fbbf24 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Voices from Our Families</h2>
                    <p className="text-lg text-slate-600">Join 150+ happy families in our community.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-amber-900/5 relative">
                            <Quote size={40} className="text-amber-200 mb-6 absolute top-8 right-8" />
                            <p className="text-slate-700 text-lg leading-relaxed mb-6 italic relative z-10">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center font-bold text-amber-800">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{t.author}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
