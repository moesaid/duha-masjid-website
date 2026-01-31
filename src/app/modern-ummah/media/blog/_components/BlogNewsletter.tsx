'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';

export function BlogNewsletter() {
    return (
        <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/patterns/noun-ornament.svg')] bg-repeat"
                style={{ backgroundSize: '100px 100px' }}
            />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-700 shadow-inner">
                    <Mail className="text-emerald-300" size={32} />
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                    Stay inspired with weekly reflections, community updates, and event announcements delivered straight to your inbox.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-grow px-6 py-3 rounded-full bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white/20"
                    />
                    <button className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-full transition-colors shadow-lg">
                        Subscribe
                    </button>
                </div>
                <p className="mt-4 text-xs text-emerald-400 opacity-70">
                    We respect your inbox. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
}
