'use client';

import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';

export function LiveHero() {
    return (
        <div className="relative bg-slate-50 border-b border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/50 text-red-600 text-xs font-bold uppercase tracking-widest border border-red-200 mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Duha Digital Broadcast
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6"
                    >
                        The Digital Mihrab
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed"
                    >
                        Connect with the heart of your community from anywhere in the world.
                        Live prayers, khutbahs, and knowledge circles streamed daily.
                    </motion.p>
                </div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/50 rounded-full blur-[100px] -ml-32 -mb-32" />
        </div>
    );
}
