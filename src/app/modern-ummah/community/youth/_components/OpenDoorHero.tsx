'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function OpenDoorHero() {
    return (
        <section className="py-20 md:py-28">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Centered Text */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        The Third Space.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        A sanctuary for high school and college students to connect, learn, and grow together.
                    </p>

                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Link
                            href="#join"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shadow-emerald-600/20"
                        >
                            Join the Duha Circle
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <Image
                        src="/images/youth-learning.jpg"
                        alt="Youth learning together"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
