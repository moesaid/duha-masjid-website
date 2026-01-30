'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';

export function BlogNewsletter() {
    return (
        <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
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
