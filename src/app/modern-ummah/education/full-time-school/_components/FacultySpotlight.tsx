'use client';

import { useState } from 'react';
import { User } from 'lucide-react';
import Image from 'next/image';
import { FacultyModal } from './FacultyModal';

const faculty = [
    { name: 'Dr. Ahmad Hassan', role: 'Principal', cred: 'Ph.D. Islamic Education' },
    { name: 'Sarah Williams', role: 'Vice Principal', cred: 'M.Ed. Curriculum' },
    { name: 'Ustadh Yusuf Ali', role: 'Quran Director', cred: 'Al-Azhar Ijazah' },
    { name: 'Dr. Emily Chen', role: 'STEM Director', cred: 'Ph.D. Chemistry' },
];

export function FacultySpotlight() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 bg-slate-50">
            <FacultyModal open={isModalOpen} onOpenChange={setIsModalOpen} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Distinguished Faculty</h2>
                        <p className="text-slate-600 mt-2">Expert educators dedicated to your child&apos;s success.</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-emerald-700 font-medium hover:underline mt-4 md:mt-0"
                    >
                        View All Faculty
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {faculty.map((member) => (
                        <div key={member.name} className="bg-white rounded-3xl p-6 text-center border border-slate-100 hover:border-emerald-200 transition-colors group shadow-sm">
                            <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full mb-6 overflow-hidden flex items-center justify-center text-slate-300 relative">
                                {/* Using generic placeholder image logic for now, or fallback icon */}
                                <User size={48} className="text-slate-300" />
                            </div>
                            <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
                            <div className="text-emerald-700 font-medium text-sm mb-2">{member.role}</div>
                            <div className="text-slate-400 text-xs uppercase tracking-wide">{member.cred}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
