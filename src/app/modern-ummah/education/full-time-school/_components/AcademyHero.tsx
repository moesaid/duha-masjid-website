'use client';

import { motion } from 'framer-motion';
import { Shield, GraduationCap, Calendar, Users, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function AcademyHero() {
    return (
        <section className="relative overflow-hidden bg-slate-50 pt-6 md:pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row min-h-[600px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 flex items-center p-8 md:p-14 lg:p-20 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl mx-auto lg:mx-0"
                        >
                            <div className="flex items-center gap-2 mb-6 text-emerald-700 font-medium">
                                <span className="h-px w-8 bg-emerald-600 block"></span>
                                <span>Est. 2008</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                                Excellence in <br />
                                <span className="text-emerald-700 italic">Faith & Academics</span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                The Al-Duha Academy is a fully accredited K-12 institution dedicated to nurturing the intellectual and spiritual leaders of tomorrow through rigorous academics and character development.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="#admissions" className="group flex items-center gap-3 bg-emerald-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-emerald-800 hover:pr-10 shadow-lg shadow-emerald-700/20">
                                    Apply Now
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="#" className="flex items-center gap-3 bg-slate-100 text-slate-700 px-8 py-4 rounded-full font-medium transition-all hover:bg-slate-200">
                                    <Download size={18} />
                                    Prospectus
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 bg-slate-900 relative min-h-[400px] lg:min-h-auto overflow-hidden">
                        <Image
                            src="/images/future-generations.jpg"
                            alt="Students learning"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply z-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />


                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                        >
                            <div className="glass-panel p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 text-center shadow-2xl">
                                <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                                <div className="text-3xl font-bold text-white mb-1">350+</div>
                                <div className="text-emerald-200 text-sm uppercase tracking-widest">Students Enrolled</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-12">
                <div className="bg-emerald-900 rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-emerald-800/50">
                        {[
                            { icon: GraduationCap, label: "Avg SAT Score", value: "1280" },
                            { icon: Calendar, label: "Years of Excellence", value: "16" },
                            { icon: Users, label: "Student-Teacher Ratio", value: "12:1" },
                            { icon: Shield, label: "Accredited Programs", value: "4" }
                        ].map((stat, i) => (
                            <div key={i} className="py-8 px-4 text-center">
                                <stat.icon className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-emerald-200 text-xs uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
