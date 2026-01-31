'use client';

import Link from 'next/link';
import { Heart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function VolunteerCta() {
    return (
        <section className="py-24 bg-emerald-950 text-center px-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '24px 24px' }}
            />

            <motion.div
                className="relative z-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-emerald-900/50 border border-emerald-800 mb-8">
                    <Heart size={32} className="text-emerald-400" />
                </div>

                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                    These programs are run by volunteers like you.
                </h3>

                <p className="text-lg text-emerald-100/80 mb-10 leading-relaxed">
                    Help us set up, serve food, or clean up after events. Every contribution matters.
                </p>

                <Link
                    href="/modern-ummah/community/volunteers"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-950 rounded-full font-bold hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-xl shadow-emerald-900/20"
                >
                    Sign up to Setup/Cleanup
                    <ChevronRight size={18} />
                </Link>
            </motion.div>
        </section>
    );
}
