'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function OutreachContact() {
    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-10 md:p-14 overflow-hidden text-white">
                        {/* Pattern overlay */}
                        <div
                            className="absolute inset-0 opacity-10 bg-[url('/patterns/noun-islamic-ornament-one.svg')] bg-repeat"
                            style={{ backgroundSize: '80px 80px' }}
                        />

                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                    Partner with Us.
                                </h2>
                                <p className="text-emerald-100 leading-relaxed mb-6">
                                    Are you an organization looking to collaborate? Let&apos;s work together to serve our community.
                                </p>
                                <Link
                                    href="/modern-ummah/contact"
                                    className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 font-medium px-7 py-3.5 rounded-full transition-colors duration-200"
                                >
                                    Get in Touch
                                    <ArrowRight size={18} />
                                </Link>
                            </div>

                            <div className="space-y-4">
                                <Link
                                    href="mailto:outreach@ummahcenter.org"
                                    className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>outreach@ummahcenter.org</span>
                                </Link>
                                <Link
                                    href="tel:+15551234567"
                                    className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>(555) 123-4567</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
