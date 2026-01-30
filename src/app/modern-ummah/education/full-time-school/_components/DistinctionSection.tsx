'use client';

import { motion } from 'framer-motion';
import { Award, Microscope, Library } from 'lucide-react';
import Image from 'next/image';

export function DistinctionSection() {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-900/40 blur-[128px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-14 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose Al-Duha?</h2>
                    <blockquote className="text-xl text-slate-300 italic border-l-4 border-emerald-500 pl-6">
                        "We refuse to compromise. Our students achieve state-recognized excellence in academics while mastering Tajweed and Islamic character."
                    </blockquote>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* Large Primary Card - Image Background */}
                    <div className="md:col-span-2 relative overflow-hidden rounded-3xl group">
                        <Image
                            src="/images/youth-learning.jpg"
                            alt="Student Excellence"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-2xl font-bold">Accredited Excellence</h3>
                            </div>
                            <p className="text-slate-200 text-lg leading-relaxed max-w-xl">
                                Highly certified by the Minnesota Department of Education. Our curriculum meets and exceeds state standards.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/20">Cognia Accredited</span>
                                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/20">CIS Member</span>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Vertical Card */}
                    <div className="md:row-span-2 bg-emerald-900 border border-emerald-800 rounded-3xl p-8 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800/50 rounded-full blur-3xl -mr-16 -mt-16" />

                        <div className="mb-auto relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
                                <Library size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Mishkah University Partnership</h3>
                            <p className="text-emerald-200/80 leading-relaxed mb-6">
                                A pioneering dual-enrollment program allowing high schoolers to earn university credits in Islamic Studies before graduation.
                            </p>
                        </div>
                        <div className="p-4 bg-emerald-800/60 rounded-xl border border-emerald-700/50 backdrop-blur-sm">
                            <div className="text-3xl font-bold text-white mb-1">12</div>
                            <div className="text-xs uppercase text-emerald-300 tracking-wider">Credits Available</div>
                        </div>
                    </div>

                    {/* Tertiary Card - Image Background */}
                    <div className="md:col-span-2 relative overflow-hidden rounded-3xl p-8 md:p-10 flex items-center gap-8 group">
                        {/* Optional faint background image */}
                        <Image
                            src="/images/library-shelves.jpg"
                            alt="Library"
                            fill
                            className="object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-slate-800/80 mix-blend-multiply" />

                        <div className="relative z-10 flex items-center gap-8">
                            <div className="w-16 h-16 flex-shrink-0 rounded-full bg-slate-700/80 backdrop-blur-md flex items-center justify-center text-emerald-400 border border-slate-600">
                                <Microscope size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">State-of-the-Art Facilities</h3>
                                <p className="text-slate-300">
                                    Fully equipped STEM laboratories, a full-size gymnasium, and dedicated prayer spaces designed for focus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
