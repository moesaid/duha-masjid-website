'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const wantedItems = [
    'Canned Tuna or Salmon',
    'Peanut Butter',
    'Pasta & Rice',
    'Cooking Oil',
    'Canned Beans',
];

export function DonateSection() {
    return (
        <section className="py-20 bg-slate-50/50" id="donate">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <div className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50/30 border border-slate-200 shadow-sm rounded-3xl p-10 md:p-14 overflow-hidden">
                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100/50 rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Text */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                        Give Help.
                                    </h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Your donations directly feed families in need. Drop off items during masjid hours or donate online.
                                </p>
                                <Link
                                    href="/modern-ummah/giving"
                                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-7 py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-amber-500/20"
                                >
                                    Donate Now
                                    <ArrowRight size={18} />
                                </Link>
                            </div>

                            {/* Needed Items */}
                            <div className="bg-white/80 rounded-2xl p-6 border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-4">Most Needed Items</h3>
                                <ul className="space-y-3 text-slate-600">
                                    {wantedItems.map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
