
'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function MatrimonyHero() {
    return (
        <section className="relative py-32 bg-slate-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30l15-15l15 15l-15 15l-15-15zm0 0l-15 15l-15-15l15-15l15 15z' fill='%230f172a' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-8">
                        <Heart size={16} className="text-emerald-500" />
                        <span className="uppercase tracking-wider">Sacred Union</span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-6">
                        The Bond of <span className="text-emerald-600">Marriage</span>
                    </h1>

                    <div className="mb-8">
                        <p className="font-amiri text-3xl text-slate-800 mb-2 dir-rtl"> وَخَلَقْنَاكُمْ أَزْوَاجًا</p>
                        <p className="text-lg text-slate-500 italic">"And We created you in pairs"</p>
                        <p className="text-sm text-amber-600 font-semibold mt-1">Surah An-Naba 78:8</p>
                    </div>

                    <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
                        Completing half your Deen in the house of Allah. We are honored to facilitate your sacred union in accordance with the Quran and Sunnah.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
