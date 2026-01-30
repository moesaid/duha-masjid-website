'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function DistributionSchedule() {
    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                            Get Help.
                        </h2>
                        <p className="text-slate-600">
                            No registration required. Just show up with an ID.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Packing */}
                        <motion.div
                            className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-7 h-7 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Packing Boxes</h3>
                                    <p className="text-emerald-600 font-semibold mb-2">Fridays @ 6:00 PM</p>
                                    <p className="text-slate-500 text-sm">Help us prepare boxes for Saturday distribution.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Distribution */}
                        <motion.div
                            className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-7 h-7 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Distribution</h3>
                                    <p className="text-emerald-600 font-semibold mb-2">Saturdays @ 8:30 AM</p>
                                    <p className="text-slate-500 text-sm">Drive-through pickup in the masjid parking lot.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
