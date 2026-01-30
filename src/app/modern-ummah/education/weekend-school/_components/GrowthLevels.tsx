'use client';

import { motion } from 'framer-motion';
import { Sprout, Leaf, TreeDeciduous } from 'lucide-react';

const levels = [
    {
        id: 'seeds',
        icon: Sprout,
        title: 'Seeds',
        age: 'Ages 4-5 (Pre-K)',
        desc: 'Interactive play, stories of Prophets, and Arabic alphabet basics.',
        color: 'bg-amber-100 text-amber-600',
        border: 'border-amber-200'
    },
    {
        id: 'sprouts',
        icon: Leaf,
        title: 'Sprouts',
        age: 'Ages 5-7 (K-1)',
        desc: 'Quran reading foundations, basic Fiqh, and manners (Akhlaq).',
        color: 'bg-emerald-100 text-emerald-600',
        border: 'border-emerald-200'
    },
    {
        id: 'saplings',
        icon: TreeDeciduous,
        title: 'Saplings',
        age: 'Ages 7-10 (2-4)',
        desc: 'Tajweed rules, deeper Islamic history, and conversational Arabic.',
        color: 'bg-teal-100 text-teal-600',
        border: 'border-teal-200'
    }
];

export function GrowthLevels() {
    return (
        <section className="py-24 bg-white" id="levels">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Cultivating Knowledge</h2>
                    <p className="text-lg text-slate-600">
                        Our curriculum is designed to grow with your child, planting firm roots of faith at every stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Visual Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-amber-200 via-emerald-200 to-teal-200 -z-10 rounded-full" />

                    {levels.map((level, i) => (
                        <motion.div
                            key={level.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
                        >
                            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${level.color} border-4 border-white shadow-lg relative z-10 group-hover:scale-110 transition-transform`}>
                                <level.icon size={40} className="stroke-[1.5]" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-800 mb-1">{level.title}</h3>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-4">{level.age}</div>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                {level.desc}
                            </p>

                            <ul className="text-left space-y-2 max-w-[200px] mx-auto text-sm text-slate-700">
                                {i === 0 && (
                                    <>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Interactive Play</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Storytelling</li>
                                    </>
                                )}
                                {i === 1 && (
                                    <>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Quran Reading</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Daily Duas</li>
                                    </>
                                )}
                                {i === 2 && (
                                    <>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400" /> Tajweed Rules</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400" /> Understanding Salah</li>
                                    </>
                                )}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
