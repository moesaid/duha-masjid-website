'use client';

import { motion } from 'framer-motion';
import { Users, Star, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function MembershipHero() {
    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-white to-slate-50 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-100/50 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-lg shadow-emerald-600/25"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                        >
                            <Sparkles size={16} />
                            Join the Movement
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            <span className="text-slate-900">Become Part of</span>
                            <br />
                            <span className="text-emerald-600">
                                Something Greater.
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Official membership gives you a voice in our community&apos;s future.
                            Vote, participate, and help shape the direction of our masjid.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#apply"
                                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-emerald-600/25"
                            >
                                Apply Now
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#benefits"
                                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 font-medium px-8 py-4 rounded-full transition-all duration-200"
                            >
                                View Benefits
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right - Membership Card Visual */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="relative">
                            {/* Main Card */}
                            <motion.div
                                className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-3xl p-8 text-white shadow-2xl shadow-emerald-600/30"
                                initial={{ rotate: -3 }}
                                animate={{ rotate: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                                        <Users className="w-7 h-7" />
                                    </div>
                                    <Star className="w-8 h-8 text-amber-400" />
                                </div>
                                <p className="text-emerald-200 text-sm uppercase tracking-wide mb-1">Member Since 2024</p>
                                <p className="text-2xl font-bold mb-6">Your Name Here</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-emerald-200 text-xs">Membership ID</p>
                                        <p className="font-mono text-lg">XXXX-XXXX-0001</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-emerald-200 text-xs">Annual Fee</p>
                                        <p className="text-2xl font-bold">$100</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <p className="text-3xl font-bold text-emerald-600">500+</p>
                                <p className="text-sm text-slate-500">Active Members</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
