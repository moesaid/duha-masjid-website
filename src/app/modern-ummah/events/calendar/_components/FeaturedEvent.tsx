'use client';

import { Sparkles, ArrowRight, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

export function FeaturedEvent() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-slate-200/60 border border-slate-100 group transition-all duration-500 hover:shadow-emerald-900/5">

                    {/* Subtle Pattern Texture */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                    />

                    {/* Top Right Gradient Blob */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-50/50 to-slate-50/0 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center relative z-10">
                        <div className="p-10 md:p-16 flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-8 border border-emerald-100">
                                <Sparkles size={14} className="text-emerald-600" />
                                <span className="tracking-wide uppercase text-xs">Featured Event</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] tracking-tight text-slate-900">
                                Annual Fundraising Gala 2026
                            </h2>

                            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-light">
                                Join us for an evening of inspiration as we unveil the future of our community center expansion. Guest speaker: Imam Omar Suleiman.
                            </p>

                            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10 text-sm font-semibold tracking-wider uppercase text-emerald-700">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                                        <Calendar size={14} />
                                    </div>
                                    <span>Feb 15, 2026</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                                        <MapPin size={14} />
                                    </div>
                                    <span>Grand Ballroom</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="#" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2 group-hover:scale-105 duration-300">
                                    Get Tickets <ArrowRight size={18} />
                                </Link>
                                <Link href="#" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-bold transition-colors flex items-center justify-center border border-slate-200 shadow-sm hover:shadow-md">
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Date Block - High Contrast */}
                        <div className="hidden md:flex w-[320px] h-full min-h-[550px] relative bg-slate-50 border-l border-slate-100 flex-col items-center justify-center p-8">
                            <div className="text-center relative z-10">
                                <div className="text-8xl font-bold text-slate-900 mb-2 drop-shadow-sm opacity-100">15</div>
                                <div className="text-xl uppercase tracking-[0.3em] text-emerald-600 font-medium border-t border-emerald-200 pt-4 mt-2">February</div>
                            </div>

                            {/* Subtle geometric accent in the box */}
                            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
