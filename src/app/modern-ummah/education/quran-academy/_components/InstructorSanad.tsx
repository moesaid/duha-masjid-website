'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, GraduationCap, Medal, BadgeCheck } from 'lucide-react';

const Instructors = [
    {
        name: 'Sheikh Ahmad Hassan',
        title: 'Director of Hifz',
        details: 'Specializes in the Ten Qira\'at and advanced Tajweed theory.',
        ijazah: "Hafs 'an Asim",
        since: '2008',
        image: '/images/arab-men-1.jpg'
    },
    {
        name: 'Ustadha Fatima Ali',
        title: 'Lead Tajweed Instructor',
        details: 'Expert in children\'s pedagogy and foundational Arabic.',
        ijazah: 'Tajweed Certified',
        since: '2012',
        image: '/images/arab-women-1.jpg'
    },
    {
        name: 'Hafiz Omar Yusuf',
        title: 'Youth Mentor',
        details: 'Connects with youth through mentorship and recreational activities.',
        ijazah: 'Hifz Completed',
        since: '2018',
        image: '/images/arab-men-2.jpg'
    }
];

export function InstructorSanad() {
    return (
        <section className="py-32 bg-amber-50 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none opacity-60" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium uppercase tracking-widest mb-3">
                        Our Faculty
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Authentic Transmission</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        The Quran is not learned from books alone, but from the hearts of teachers who embody its meanings and character.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {Instructors.map((instructor, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] p-3 border border-amber-100 shadow-xl shadow-amber-900/5 group hover:border-amber-200 transition-colors"
                        >
                            <div className="bg-amber-50/30 rounded-[1.5rem] p-6 h-full flex flex-col items-center text-center">
                                {/* Sanad Badge */}
                                <div className="ml-auto mb-2">
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-amber-200 text-[10px] font-bold uppercase tracking-wider text-amber-700 shadow-sm">
                                        <BadgeCheck size={12} className="text-amber-500" />
                                        Verified Ijazah
                                    </div>
                                </div>

                                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 group-hover:scale-105 transition-transform duration-500 ring-4 ring-amber-50">
                                    <div className="w-full h-full bg-slate-200 relative">
                                        <Image
                                            src={instructor.image}
                                            alt={instructor.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">{instructor.name}</h3>
                                <p className="text-amber-700 font-medium text-sm mb-4">{instructor.title}</p>

                                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                                    {instructor.details}
                                </p>

                                <div className="w-full bg-white rounded-xl p-4 border border-amber-100 grid grid-cols-2 gap-px text-xs shadow-sm">
                                    <div className="text-center border-r border-slate-100 pr-2">
                                        <div className="text-amber-500 mb-1 flex justify-center"><Award size={16} /></div>
                                        <div className="font-semibold text-slate-700 mb-0.5">Sanad</div>
                                        <div className="text-slate-500 truncate">{instructor.ijazah}</div>
                                    </div>
                                    <div className="text-center pl-2">
                                        <div className="text-emerald-500 mb-1 flex justify-center"><Medal size={16} /></div>
                                        <div className="font-semibold text-slate-700 mb-0.5">Experience</div>
                                        <div className="text-slate-500">Since {instructor.since}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
