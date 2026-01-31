'use client';

import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export function ProgramRegistration() {
    return (
        <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/patterns/noun-ornament.svg')] bg-repeat"
                style={{ backgroundSize: '80px 80px' }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                    Seek Knowledge from Cradle to Grave
                </h2>
                <p className="text-emerald-100 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                    Registration for our Fall 2026 semester is now open. Secure your spot in our limited-capacity classes today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/modern-ummah/newsletter" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-emerald-400 text-white rounded-full font-bold hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2">
                        <Mail size={18} />
                        Join Mailing List
                    </Link>
                </div>
            </div>
        </section>
    );
}
