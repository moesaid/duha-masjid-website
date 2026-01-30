'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

const Programs = [
    {
        id: 'seedlings',
        title: 'The Seedlings',
        level: 'Foundation Level',
        age: 'Ages 5-8',
        description: 'Where the journey begins. We focus on falling in love with the Quran through interactive stories, mastering the Arabic alphabet (Qaida Nooraniyah), and memorizing the short Surahs of Juz Amma with perfect pronunciation.',
        highlights: ['Arabic Alphabet Mastery', 'Basic Tajweed Rules', 'Islamic Manners (Akhlaq)', 'Interactive Storytelling'],
        icon: BookOpen,
        color: 'emerald',
        gradient: 'from-emerald-50 to-emerald-100',
        border: 'border-emerald-200',
        text: 'text-emerald-900',
        accent: 'text-emerald-600',
        bg: 'bg-emerald-50/50'
    },
    {
        id: 'saplings',
        title: 'The Saplings',
        level: 'Intermediate Level',
        age: 'Ages 9-12',
        description: 'Strengthening the roots. Students move to fluent reading directly from the Mushaf, focus on memorizing Juz 29-30, and begin understanding the meaning of what they recite.',
        highlights: ['Fluent Quran Reading', 'Juz Amma & Tabarak Hifz', 'Translation of Short Surahs', 'Prayer (Salah) Correction'],
        icon: Users,
        color: 'teal',
        gradient: 'from-teal-50 to-teal-100',
        border: 'border-teal-200',
        text: 'text-teal-900',
        accent: 'text-teal-600',
        bg: 'bg-teal-50/50'
    },
    {
        id: 'trees',
        title: 'Mighty Trees',
        level: 'Advanced Hifz Program',
        age: 'Ages 13+',
        description: 'Reaching for the sky. A rigorous, full-time equivalent commitment for serious students aiming to complete the memorization of the entire Quran with strong retention and understanding.',
        highlights: ['Full Quran Hifz Track', 'Advanced Tajweed Theory', 'Daily Revision Circles', 'Ijazah Preparation'],
        icon: Star,
        color: 'amber',
        gradient: 'from-amber-50 to-amber-100',
        border: 'border-amber-200',
        text: 'text-amber-900',
        accent: 'text-amber-600',
        bg: 'bg-amber-50/50'
    }
];

export function ProgramJourney() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium uppercase tracking-widest mb-3">
                        The Curriculum
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">A Journey of Ascension</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        "Read and rise." Our structured pathway ensures every student grows at their own pace, ascending from the seeds of faith to the heights of mastery.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-teal-200 to-amber-200 -translate-x-1/2" />

                    {Programs.map((program, idx) => (
                        <div key={program.id} className={`relative flex flex-col md:flex-row gap-8 md:gap-20 items-center mb-24 md:mb-32 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Timeline Anchor Point */}
                            <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-slate-100 shadow-sm z-10" />

                            {/* Content Side */}
                            <div className="flex-1 text-center md:text-left">
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className={`inline-block px-4 py-1.5 rounded-full ${program.bg} ${program.accent} text-xs font-bold uppercase tracking-wide mb-4 border ${program.border}`}>
                                        {program.level}
                                    </span>
                                    <h3 className={`text-3xl font-serif font-bold ${program.text} mb-4`}>{program.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                                        {program.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        {program.highlights.map((highlight, hIdx) => (
                                            <div key={hIdx} className="flex items-center gap-2">
                                                <CheckCircle2 size={16} className={`${program.accent} shrink-0`} />
                                                <span className="text-sm text-slate-700 font-medium">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className={`inline-flex items-center gap-2 font-bold ${program.accent} hover:opacity-80 transition-opacity group`}>
                                        View {program.title} Schedule
                                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            </div>

                            {/* Visual Side */}
                            <div className="flex-1 w-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ${program.border} border-4 bg-gradient-to-br ${program.gradient} p-8 flex items-center justify-center group`}
                                >
                                    {/* Abstract Decorative Circles */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl -ml-12 -mb-12 pointer-events-none" />

                                    <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500">
                                        <div className="w-24 h-24 mx-auto bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg mb-6 text-slate-800">
                                            <program.icon size={48} className={program.accent} />
                                        </div>
                                        <div className="hidden md:block text-2xl font-serif font-bold text-slate-800/80">
                                            {program.age}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
