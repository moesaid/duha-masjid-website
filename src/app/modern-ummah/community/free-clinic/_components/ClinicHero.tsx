'use client';

import { motion } from 'framer-motion';
import { Heart, Clock, Users, ArrowRight, Cross } from 'lucide-react';
import Link from 'next/link';

export function ClinicHero() {
    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-white to-slate-50 overflow-hidden">
            {/* Decorative medical cross pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-20 left-10 w-32 h-32">
                    <Cross className="w-full h-full text-emerald-900" strokeWidth={1} />
                </div>
                <div className="absolute bottom-20 right-20 w-48 h-48">
                    <Cross className="w-full h-full text-emerald-900" strokeWidth={1} />
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto">
                    {/* Arabic Name Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-8 shadow-lg shadow-emerald-600/25"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Heart size={16} className="animate-pulse" />
                        الشفاء — Al-Shifa Free Clinic
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        <span className="text-slate-900">Healthcare</span>
                        <br />
                        <span className="text-emerald-600">
                            Without Barriers.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        100% free medical care for all—regardless of faith, insurance, or immigration status.
                        Our volunteer doctors serve with mercy and compassion.
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-4 shadow-sm">
                            <p className="text-2xl md:text-3xl font-bold text-emerald-600">2,500+</p>
                            <p className="text-xs text-slate-500">Patients/Year</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 shadow-sm">
                            <p className="text-2xl md:text-3xl font-bold text-slate-700">25+</p>
                            <p className="text-xs text-slate-500">Volunteers</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-4 shadow-sm">
                            <p className="text-2xl md:text-3xl font-bold text-emerald-600">10+</p>
                            <p className="text-xs text-slate-500">Years</p>
                        </div>
                    </motion.div>

                    {/* Schedule Card */}
                    <motion.div
                        className="bg-emerald-600 text-white rounded-3xl p-6 max-w-md mx-auto mb-10 shadow-xl shadow-emerald-600/20"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <Clock size={20} />
                            <span className="font-semibold">Next Clinic</span>
                        </div>
                        <p className="text-2xl font-bold">Saturdays 9 AM – 1 PM</p>
                        <p className="text-emerald-100 text-sm mt-1">Walk-ins welcome. No appointment needed.</p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Link
                            href="#services"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shadow-emerald-600/25"
                        >
                            View Services
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="#volunteer"
                            className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 font-medium px-8 py-4 rounded-full transition-all duration-200"
                        >
                            <Users size={18} />
                            Join Our Team
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
