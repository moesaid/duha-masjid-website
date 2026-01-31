'use client';

import { motion } from 'framer-motion';
import { featuredBook } from '../_data';
import { Quote } from 'lucide-react';

export function FeaturedBook() {
    return (
        <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/patterns/noun-islamic-geometric-patterns.svg')] bg-repeat"
                style={{ backgroundSize: '100px 100px' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-emerald-300 font-semibold tracking-wide uppercase text-sm mb-2 block">Monthly Spotlight</span>

                        <div className="font-serif text-6xl md:text-8xl text-emerald-800/20 mb-[-40px] select-none">
                            {featuredBook.arabicTitle}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 relative z-10">
                            {featuredBook.title}
                        </h2>
                        <p className="text-xl text-emerald-200 font-serif italic mb-6">{featuredBook.subtitle}</p>

                        <p className="text-lg text-emerald-100 leading-relaxed mb-8">
                            {featuredBook.description}
                        </p>

                        <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700/50 relative">
                            <Quote className="absolute top-4 left-4 text-emerald-500 opacity-20" size={40} />
                            <p className="text-emerald-100 italic relative z-10 pl-2">
                                "{featuredBook.quote}"
                            </p>
                            <p className="text-emerald-400 font-bold mt-4 text-sm uppercase tracking-wide">
                                — {featuredBook.author}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        {/* Book Cover Simulation */}
                        <div className={`w-64 h-96 ${featuredBook.color} rounded-r-2xl rounded-l-sm shadow-2xl relative flex flex-col justify-between p-6 perspective`}>
                            <div className="absolute inset-y-0 left-0 w-2 bg-black/20 rounded-l-sm"></div>
                            <div className="absolute inset-y-0 left-2 w-1 bg-white/10"></div>

                            <div className="mt-8 text-center border-2 border-white/20 p-4 rounded bg-black/10">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">{featuredBook.title}</h3>
                                <p className="text-white/80 text-sm">{featuredBook.author}</p>
                            </div>

                            <div className="text-center">
                                <div className="text-white/40 text-xs uppercase tracking-widest mb-2">Maktaba Edition</div>
                                <div className="w-8 h-8 mx-auto bg-white/20 rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
