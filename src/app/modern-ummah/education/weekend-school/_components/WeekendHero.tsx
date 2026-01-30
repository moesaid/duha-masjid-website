'use client';

import { motion } from 'framer-motion';
import { Sun, Leaf, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function WeekendHero() {
    return (
        <section className="relative overflow-hidden bg-amber-50/50 min-h-[600px] flex items-center pt-20">
            {/* Background Organic Shapes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-100/40 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/60 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-amber-600 border border-amber-100 shadow-sm mb-8">
                            <Sun size={18} className="text-amber-500 fill-amber-500" />
                            <span className="text-sm font-semibold tracking-wide uppercase">Weekly Sunday School</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-800 leading-[1.1] mb-6">
                            Planting <span className="text-emerald-600 italic">Seeds</span> of <br />
                            <span className="relative inline-block">
                                Faith
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                            A nurturing weekend environment where children grow in their love for Allah, the Quran, and their beautiful identity.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link href="#enroll" className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-bold shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-emerald-700/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                Enroll for Fall 2026 <ArrowRight size={18} />
                            </Link>
                            <Link href="#levels" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                View Curriculum
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 mb-12"
                        >
                            <Image
                                src="/images/youth-learning.jpg"
                                alt="Children learning Quran"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                            {/* Floating Quote Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                        <Heart size={20} className="fill-amber-600" />
                                    </div>
                                    <div className="font-bold text-slate-800">Sister Amina</div>
                                </div>
                                <p className="text-slate-600 text-sm italic">
                                    "My children have grown so much in their deen. They actually look forward to weekends now!"
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
