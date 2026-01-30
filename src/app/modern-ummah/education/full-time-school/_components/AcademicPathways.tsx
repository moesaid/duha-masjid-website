'use client';

import { motion } from 'framer-motion';
import { BookOpen, Brain, Star, GraduationCap, ChevronRight } from 'lucide-react';

const pathways = [
    {
        id: 'preschool',
        title: 'Preschool Foundations',
        grades: 'Ages 3-5',
        icon: Star,
        description: 'A nurturing Islamic environment focusing on social development, Qaidah Nooraniyah, and motor skills.',
        highlights: ['Quran Introduction', 'Arabic Alphabet', 'Play-based Learning'],
        color: 'bg-amber-500' // Icon bg
    },
    {
        id: 'elementary',
        title: 'Elementary Core',
        grades: 'Grades K-5',
        icon: BookOpen,
        description: 'Building strong literacy and numeracy foundations integrated with immersive Quranic studies.',
        highlights: ['Common Core Standard', 'Daily Tajweed', 'Arabic Immersion'],
        color: 'bg-emerald-500'
    },
    {
        id: 'secondary',
        title: 'Middle & High School',
        grades: 'Grades 6-12',
        icon: GraduationCap,
        description: 'Rigorous college-prep curriculum with AP coursework and dual-enrollment opportunities.',
        highlights: ['Mishkah Dual Enrollment', 'AP & Honors', 'College Counseling'],
        color: 'bg-slate-600'
    },
    {
        id: 'hifz',
        title: 'Hifz Track',
        grades: 'All Ages',
        icon: Brain,
        description: 'Intensive memorization program integrated with academic core subjects for balanced growth.',
        highlights: ['Certified Huffaz', 'Ijazah Program', 'Academic Balance'],
        color: 'bg-violet-600'
    }
];

export function AcademicPathways() {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Academic Pathways</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        Structured programs designed to guide your child from early foundations to collegiate success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {pathways.map((path, idx) => (
                        <motion.div
                            key={path.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md ${path.color}`}>
                                    <path.icon size={28} />
                                </div>
                                <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
                                    {path.grades}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                {path.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-8 min-h-[48px]">
                                {path.description}
                            </p>

                            <div className="border-t border-slate-100 pt-6">
                                <ul className="space-y-3">
                                    {path.highlights.map((highlight) => (
                                        <li key={highlight} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
