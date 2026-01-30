'use client';

import { motion } from 'framer-motion';
import { Pill, Receipt } from 'lucide-react';

export function PharmacySection() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        On-Site Pharmacy.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                <Pill className="w-7 h-7 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Free Medications</h3>
                                <p className="text-slate-600">
                                    We provide basic antibiotics and maintenance medications on-site at no cost.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                                <Receipt className="w-7 h-7 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Discount Vouchers</h3>
                                <p className="text-slate-600">
                                    For other prescriptions, we offer discount vouchers for local pharmacies.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
