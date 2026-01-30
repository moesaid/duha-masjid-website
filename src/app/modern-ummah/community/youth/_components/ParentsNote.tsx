'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Users } from 'lucide-react';

export function ParentsNote() {
    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                                <Heart className="w-6 h-6 text-amber-600" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                A Note for Parents.
                            </h2>
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
                            We understand the trust you place in us when your children join our programs.
                            Our youth activities are designed to nurture faith, build character, and create
                            a safe space for growth. All programs are supervised by vetted volunteers and
                            follow strict safeguarding policies.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Safe Environment</h3>
                                    <p className="text-sm text-slate-500">Background-checked volunteers and clear supervision policies.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                    <Users className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Open Communication</h3>
                                    <p className="text-sm text-slate-500">Parents are always welcome to observe and participate.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                    <Heart className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Faith-Centered</h3>
                                    <p className="text-sm text-slate-500">Programs grounded in Islamic values and teachings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
