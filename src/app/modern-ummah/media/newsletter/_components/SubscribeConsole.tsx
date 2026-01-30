'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Stamp } from 'lucide-react';

export function SubscribeConsole() {
    const [email, setEmail] = useState('');

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -mr-8 -mt-8" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <Mail className="text-emerald-600" size={24} />
                            <h2 className="text-2xl font-serif font-bold text-slate-900">Join the Circle</h2>
                        </div>
                        <p className="text-slate-500 mb-8">
                            Join over 2,500 community members who start their week with updates from Duha.
                        </p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white transition-all"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white transition-all"
                                    />
                                </div>
                            </div>


                            <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 shadow-xl shadow-slate-900/10 transition-all flex items-center justify-center gap-2 group">
                                <Stamp size={18} className="group-hover:rotate-12 transition-transform" />
                                Subscribe to Chronicle
                            </button>

                            <p className="text-center text-xs text-slate-400">
                                No spam. Unsubscribe at any time.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
