'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function PantryHero() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm font-medium mb-6">
                            <WheatIcon className="w-4 h-4" />
                            <span>Community Sustenance</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Nourishing Body <br />
                            <span className="text-emerald-600">and Spirit.</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                            Our Food Pantry serves over 1,200 families monthly with dignity and respect. We provide tailored food packages including fresh produce and halal meat.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#get-help"
                                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                Get Food Support
                            </Link>
                            <Link
                                href="#give-help"
                                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-medium px-8 py-4 rounded-full transition-all"
                            >
                                <Heart className="w-5 h-5 text-emerald-600" />
                                Donate Items
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/halaqa-circle.jpg"
                                alt="Volunteers packing food boxes"
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                            <div className="font-bold text-emerald-700">Sat</div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Next Distribution</p>
                                            <p className="text-slate-900 font-semibold">Saturday, 8:30 AM - 11:00 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Pattern */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function WheatIcon({ className }: { className?: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 22 22 2" />
            <path d="M2 13.9c0-1.6 1.1-2.9 2.5-3.3 1.9-.5 3.1-2.9 3.6-4.5.4-1.4 1.7-2.3 3.1-2 .7.2 1.3.6 1.8 1.1" />
            <path d="M12.2 13.8c1.6 1.6 2.9 2.7 4.5 3.6 1.6.9 3.3 1.1 4.5 2.5.4.5.3 1.3-.2 1.8" />
            <path d="M10.1 21.8c-.5.4-1.3.3-1.8-.2-1.4-1.2-1.6-2.9-2.5-4.5-.9-1.6-2-2.9-3.6-4.5" />
        </svg>
    )
}
