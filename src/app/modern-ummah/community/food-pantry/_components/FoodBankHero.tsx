'use client';

import { motion } from 'framer-motion';
import { Apple, ArrowRight, Package, Heart, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export function FoodBankHero() {
    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-amber-50 via-white to-yellow-50 overflow-hidden">
            {/* Decorative wheat/grain pattern */}
            <div className="absolute top-10 right-10 w-64 h-64 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-amber-900">
                    <path d="M50 10 Q55 30 50 50 Q45 30 50 10" fill="currentColor" />
                    <path d="M40 15 Q50 35 40 55" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M60 15 Q50 35 60 55" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>
            <div className="absolute bottom-20 left-10 w-48 h-48 opacity-10 rotate-45">
                <svg viewBox="0 0 100 100" className="w-full h-full text-amber-900">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="25" fill="currentColor" />
                </svg>
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
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-lg shadow-amber-500/25"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                        >
                            <Apple size={16} />
                            Community Food Bank
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            <span className="text-slate-900">Nourishing Our</span>
                            <br />
                            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                                Neighbors.
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Every week, our 100% volunteer-run food bank serves over 1,200 families
                            with fresh produce, halal meat, and essential staples.
                        </p>

                        {/* Schedule Cards */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm">
                                <div className="flex items-center gap-2 text-amber-600 mb-2">
                                    <Package size={18} />
                                    <span className="font-semibold text-sm">Packing</span>
                                </div>
                                <p className="text-slate-900 font-bold">Fridays @ 6 PM</p>
                            </div>
                            <div className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <Heart size={18} />
                                    <span className="font-semibold text-sm">Distribution</span>
                                </div>
                                <p className="font-bold">Saturdays @ 8:30 AM</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#volunteer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-amber-600/25"
                            >
                                <Heart size={18} />
                                Volunteer
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#donate"
                                className="inline-flex items-center gap-2 bg-white border-2 border-amber-200 hover:border-amber-400 text-amber-700 font-medium px-8 py-4 rounded-full transition-all duration-200"
                            >
                                Donate Food
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right - Stats & Visual */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {/* Main Impact Card */}
                        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 rounded-3xl p-8 text-white shadow-2xl shadow-amber-600/30">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                    <p className="text-4xl font-bold">1,200</p>
                                    <p className="text-amber-200 text-sm">Families/Month</p>
                                </div>
                                <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                    <p className="text-4xl font-bold">50K</p>
                                    <p className="text-amber-200 text-sm">lbs Distributed</p>
                                </div>
                                <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                    <p className="text-4xl font-bold">100%</p>
                                    <p className="text-amber-200 text-sm">Volunteer Run</p>
                                </div>
                                <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                    <p className="text-4xl font-bold">15+</p>
                                    <p className="text-amber-200 text-sm">Years Serving</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Location Card */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-amber-100"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-amber-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">Parking Lot B</p>
                                    <p className="text-xs text-slate-500">Drive-through pickup</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
