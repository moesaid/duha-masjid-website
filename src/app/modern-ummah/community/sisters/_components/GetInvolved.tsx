'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function GetInvolved() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <div className="relative bg-gradient-to-br from-emerald-50 via-white to-amber-50/30 border border-slate-200 shadow-sm rounded-3xl p-10 md:p-14 text-center overflow-hidden">
                        {/* Subtle pattern overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.02] bg-[url('/patterns/noun-islamic-ornament.svg')] bg-repeat"
                            style={{ backgroundSize: '80px 80px' }}
                        />

                        <div className="relative">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Your Voice Matters.
                            </h2>
                            <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
                                Join our team of dedicated sisters making a difference in our community.
                                Whether you have an hour or many, there&apos;s a place for you.
                            </p>

                            <Link
                                href="/modern-ummah/community/volunteers"
                                className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-medium px-8 py-4 rounded-full transition-all duration-200"
                            >
                                Volunteer with Us
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
