'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function YouthContact() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Youth Director Contact.
                    </h2>
                    <p className="text-slate-600 mb-10 max-w-xl mx-auto">
                        Have questions? Want to get involved? Reach out to our Youth Director.
                    </p>

                    <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                href="mailto:youth@ummahcenter.org"
                                className="flex items-center gap-3 px-6 py-4 bg-emerald-50 hover:bg-emerald-100 rounded-2xl transition-colors w-full md:w-auto justify-center"
                            >
                                <Mail className="w-5 h-5 text-emerald-600" />
                                <span className="font-medium text-emerald-700">youth@ummahcenter.org</span>
                            </Link>

                            <Link
                                href="tel:+15551234567"
                                className="flex items-center gap-3 px-6 py-4 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-colors w-full md:w-auto justify-center"
                            >
                                <Phone className="w-5 h-5 text-slate-600" />
                                <span className="font-medium text-slate-700">(555) 123-4567</span>
                            </Link>

                            <Link
                                href="https://wa.me/15551234567"
                                target="_blank"
                                className="flex items-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-2xl transition-colors w-full md:w-auto justify-center"
                            >
                                <MessageCircle className="w-5 h-5 text-white" />
                                <span className="font-medium text-white">WhatsApp</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
