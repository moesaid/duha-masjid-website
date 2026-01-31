'use client';

import { ArrowRight, Leaf } from 'lucide-react';
import Link from 'next/link';

export function EnrollmentCTA() {
    return (
        <section className="py-20" id="enroll">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-emerald-800 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    {/* Background Pattern */}
                    <div
                        className="absolute inset-0 opacity-10 bg-[url('/patterns/noun-ornament.svg')] bg-repeat"
                        style={{ backgroundSize: '100px 100px' }}
                    />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-700 rounded-full mb-8 text-emerald-200">
                            <Leaf size={32} />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Ready to Plant the Seed?
                        </h2>
                        <p className="text-emerald-100 text-xl mb-10 leading-relaxed">
                            Registration for Fall 2026 is now open. Spaces are limited to ensure small class sizes. Join our growing family today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto px-8 py-5 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-xl flex items-center justify-center gap-2">
                                Register Student ($150) <ArrowRight size={20} />
                            </button>
                            <button className="w-full sm:w-auto px-8 py-5 bg-transparent border-2 border-emerald-600 text-emerald-100 rounded-full font-bold text-lg hover:bg-emerald-700/50 transition-colors">
                                Contact Administration
                            </button>
                        </div>

                        <p className="mt-8 text-emerald-300/80 text-sm">
                            Financial aid available for qualifying families.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
