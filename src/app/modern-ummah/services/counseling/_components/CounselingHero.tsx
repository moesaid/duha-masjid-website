import Link from 'next/link';
import { Button } from '../../../_components';
import { Calendar } from 'lucide-react';

export function CounselingHero() {
    return (
        <section className="relative py-24 bg-slate-50 overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <div className="inline-flex flex-col items-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="font-amiri text-2xl md:text-3xl text-emerald-800 mb-2 dir-rtl">أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ</span>
                    <span className="text-sm font-medium text-slate-500 tracking-widest uppercase">Quran 13:28</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                    Spiritual <span className="text-emerald-700">Counseling</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Finding clarity and peace through the light of the Quran and Sunnah.
                    Compassionate, confidential support for individuals and families.
                </p>

                <div className="flex justify-center gap-4">
                    <Button href="#booking" variant="primary" size="lg" className="rounded-full px-8 shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20">
                        <Calendar size={20} className="mr-2" />
                        Book a Session
                    </Button>
                </div>
            </div>
        </section>
    );
}
