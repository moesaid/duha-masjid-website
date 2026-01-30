'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function SakinahHero() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Split Layout - Text Left, Image Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    >
                        <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-4">
                            Sisters Committee
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            A Space of<br />
                            <span className="text-emerald-600">Our Own.</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                            Fostering spiritual growth, sisterhood, and community service in a supportive and inclusive environment.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#join"
                                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-7 py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-emerald-600/20"
                            >
                                Join the Sisters&apos; Circle
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#programs"
                                className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-medium px-7 py-3.5 rounded-full transition-colors duration-200"
                            >
                                View Programs
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="order-1 lg:order-2 relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    >
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/sisters-gathering.jpg"
                                alt="Sisters gathering in community"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Decorative accent */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-100 rounded-3xl -z-10" />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-100 rounded-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
