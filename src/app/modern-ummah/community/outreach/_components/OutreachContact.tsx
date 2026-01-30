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
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }} />

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
