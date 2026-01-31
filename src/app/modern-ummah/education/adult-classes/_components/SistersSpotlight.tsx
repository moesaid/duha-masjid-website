'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flower, Star, ArrowRight } from 'lucide-react';
import { CircleModal } from './CircleModal';
import { Button } from '../../../_components/Button/Button';

export function SistersSpotlight() {
    const [isCircleModalOpen, setIsCircleModalOpen] = useState(false);

    return (
        <section className="py-24 bg-rose-50/50 border-t border-rose-100 overflow-hidden relative">
            <CircleModal open={isCircleModalOpen} onOpenChange={setIsCircleModalOpen} />

            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-rose-900/5 border border-rose-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative aspect-square rounded-[2rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 shadow-lg"
                        >
                            {/* Placeholder pattern/image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                                <Flower className="text-rose-300 w-32 h-32 opacity-50" />
                            </div>
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526394931162-46fa5954552f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-80 mix-blend-multiply"></div>
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-widest mb-6">
                            <Star size={14} />
                            <span>Sisters Only</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            The Women's Circle
                        </h2>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            A dedicated space for sisters to connect, learn, and grow together. Our weekly halaqas cover topics from Fiqh to spirituality, customized for the unique challenges and blessings of womanhood.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Weekly Tafseer Halaqa (Tuesdays)",
                                "Sisters' Tajweed & Correction",
                                "Monthly Social Gatherings"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                                        <ArrowRight size={14} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button
                            onClick={() => setIsCircleModalOpen(true)}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-rose-600 text-white rounded-full font-bold shadow-lg shadow-rose-600/20 hover:bg-rose-700 hover:shadow-rose-700/30 transition-all hover:-translate-y-1"
                        >
                            Join the Circle
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}
