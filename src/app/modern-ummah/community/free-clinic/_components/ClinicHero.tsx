'use client';

import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import Image from 'next/image';
import { AppointmentModal } from './AppointmentModal';
import { Button } from '../../../_components/Button/Button';

export function ClinicHero() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/arab-women-1.jpg"
                                alt="Doctor consulting with patient"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="font-semibold text-slate-900 text-sm">Open Next: Saturday, 9 AM</span>
                                </div>
                            </div>
                        </div>
                        {/* Decorative blobs */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                            <span>Al-Shifa Clinic</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Compassionate Care <br />
                            <span className="text-emerald-600">For Everyone.</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                            Free, high-quality primary care for the uninsured and underinsured. We believe dignity in healthcare is a fundamental right.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <AppointmentModal>
                                <Button variant="primary" className="h-14 px-8 rounded-full shadow-lg shadow-emerald-600/20">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Book Appointment
                                </Button>
                            </AppointmentModal>

                            <a href="tel:5550000000" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-medium px-8 py-4 rounded-full transition-all h-14">
                                <Phone className="w-5 h-5 text-emerald-600" />
                                Call Nurse Line
                            </a>
                        </div>

                        <p className="mt-6 text-sm text-slate-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Walk-ins welcome every Saturday 9 AM - 1 PM
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
