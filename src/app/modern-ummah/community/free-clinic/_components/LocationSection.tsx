'use client';

import { motion } from 'framer-motion';
import { MapPin, Car, Bus, Phone } from 'lucide-react';

export function LocationSection() {
    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Find Us.
                    </h2>
                </motion.div>

                <motion.div
                    className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 md:p-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Entrance</h3>
                                <p className="text-slate-600 text-sm">Clinic Entrance (Side Door B)</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                <Car className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Parking</h3>
                                <p className="text-slate-600 text-sm">Reserved spots for patients</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                <Bus className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Bus Route</h3>
                                <p className="text-slate-600 text-sm">Bus #55 stops directly in front</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Nurse Line</h3>
                                <p className="text-slate-600 text-sm">(555) 000-0000</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
