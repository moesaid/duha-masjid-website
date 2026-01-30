'use client';

import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function VolunteerCTA() {
    return (
        <section className="py-20" id="volunteer">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 mx-auto">
                        <Users className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Join Our Team.
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
                        We need volunteers every Saturday morning. No experience required—just a willingness to serve.
                    </p>
                    <Link
                        href="/modern-ummah/join/volunteer"
                        className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-medium px-8 py-4 rounded-full transition-all duration-200"
                    >
                        Sign Up to Volunteer
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
