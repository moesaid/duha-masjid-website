'use client';

import { motion } from 'framer-motion';
import { HandHeart, Sparkles, ArrowRight, Clock, Heart } from 'lucide-react';
import Link from 'next/link';

export function VolunteerHero() {
    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-white to-amber-50/30 overflow-hidden">
            {/* Decorative hearts pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
                {[...Array(6)].map((_, i) => (
                    <Heart
                        key={i}
                        className="absolute text-emerald-900"
                        style={{
                            top: `${15 + (i * 15)}%`,
                            left: `${5 + (i % 3) * 35}%`,
                            width: `${40 + (i % 3) * 20}px`,
                            height: `${40 + (i % 3) * 20}px`,
                        }}
                        strokeWidth={1}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-lg shadow-amber-500/25"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                        >
                            <Sparkles size={16} />
                            Make a Difference
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            <span className="text-slate-900">Serve With</span>
                            <br />
                            <span className="text-emerald-600">
                                Purpose & Heart.
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Our masjid runs on the dedication of volunteers like you.
                            Lend your time, talents, and heart to build a stronger community.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex items-center gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <HandHeart className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">150+</p>
                                    <p className="text-xs text-slate-500">Active Volunteers</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-amber-600" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">5,000+</p>
                                    <p className="text-xs text-slate-500">Hours/Year</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#signup"
                                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-emerald-600/25"
                            >
                                <Heart size={18} />
                                Sign Up Today
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#opportunities"
                                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 font-medium px-8 py-4 rounded-full transition-all duration-200"
                            >
                                View Opportunities
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right - Visual Grid */}
                    <motion.div
                        className="relative grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <motion.div
                            className="bg-emerald-600 rounded-3xl p-6 text-white shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <p className="text-4xl mb-2">🍲</p>
                            <p className="font-bold">Hospitality</p>
                            <p className="text-emerald-100 text-sm">Feed the community</p>
                        </motion.div>
                        <motion.div
                            className="bg-amber-500 rounded-3xl p-6 text-white shadow-xl mt-8"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <p className="text-4xl mb-2">📚</p>
                            <p className="font-bold">Education</p>
                            <p className="text-amber-100 text-sm">Teach & inspire</p>
                        </motion.div>
                        <motion.div
                            className="bg-slate-700 rounded-3xl p-6 text-white shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <p className="text-4xl mb-2">👶</p>
                            <p className="font-bold">Childcare</p>
                            <p className="text-slate-300 text-sm">Nurture the young</p>
                        </motion.div>
                        <motion.div
                            className="bg-emerald-700 rounded-3xl p-6 text-white shadow-xl mt-8"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <p className="text-4xl mb-2">🎉</p>
                            <p className="font-bold">Events</p>
                            <p className="text-emerald-100 text-sm">Create memories</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
