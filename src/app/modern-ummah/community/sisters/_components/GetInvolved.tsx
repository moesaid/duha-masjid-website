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
                        <div className="absolute inset-0 opacity-[0.02]" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23064E3B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }} />

                        <div className="relative">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Your Voice Matters.
                            </h2>
                            <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
                                Join our team of dedicated sisters making a difference in our community.
                                Whether you have an hour or many, there&apos;s a place for you.
                            </p>

                            <Link
                                href="/modern-ummah/join/volunteer"
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
