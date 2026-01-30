'use client';

import { motion } from 'framer-motion';
import { PenTool } from 'lucide-react';

export function NewsletterHero() {
    return (
        <div className="relative bg-amber-50/50 border-b border-amber-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] -mr-32 -mt-32" />

            <div className="max-w-4xl mx-auto px-4 py-20 md:py-28 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex flex-col items-center gap-4 mb-8"
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 transform rotate-3">
                        <PenTool className="text-white" size={32} />
                    </div>
                    <p className="font-serif text-2xl md:text-3xl text-amber-900/80 leading-relaxed font-arabic" dir="rtl">
                        نٓ ۚ وَٱلْقَلَمِ وَمَا يَسْطُرُونَ
                    </p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
                >
                    The Community Chronicle
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
                >
                    Weekly reflections, community news, and spiritual reminders delivered to your inbox every Friday morning.
                </motion.p>
            </div>

            <div className="absolute inset-0 bg-[url('/patterns/paper-texture.png')] opacity-20 pointer-events-none mix-blend-multiply" />
        </div>
    );
}
