'use client';

import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../../../_components/Button/Button';

export function FoodPantryHero() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/mosque-community.jpg"
                    alt="Community members helping each other"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium mb-6 backdrop-blur-sm">
                            <Heart className="w-4 h-4 fill-current" />
                            <span>Community Support</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Nourishing Body <br />
                            <span className="text-emerald-400">& Soul.</span>
                        </h1>
                        <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-xl">
                            Our food pantry provides fresh produce, pantry staples, and dignity to families in need. No questions asked, just komunnity support.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button href="#needs" variant="primary" className="h-14 px-8 rounded-full shadow-lg shadow-emerald-900/20 bg-emerald-600 hover:bg-emerald-500 border-none">
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                View Current Needs
                            </Button>

                            <Button href="/modern-ummah/donate" variant="outline" className="h-14 px-8 rounded-full text-white border-white/20 hover:bg-white/10">
                                Monetary Donation
                            </Button>
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:justify-self-end"
                    >
                        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 max-w-sm">
                            <h3 className="text-amber-400 font-serif text-xl mb-4">Weekly Impact</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-3xl font-bold text-white">150+</div>
                                    <div className="text-slate-300 text-sm">Families Served</div>
                                </div>
                                <div className="w-full h-px bg-white/10" />
                                <div>
                                    <div className="text-3xl font-bold text-white">2,400 lbs</div>
                                    <div className="text-slate-300 text-sm">Food Distributed</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
