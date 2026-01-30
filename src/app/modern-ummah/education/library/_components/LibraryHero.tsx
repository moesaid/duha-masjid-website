'use client';

import { motion } from 'framer-motion';
import { Search, Book } from 'lucide-react';

interface LibraryHeroProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    onSearchClick: () => void;
}

export function LibraryHero({ searchQuery, setSearchQuery, onSearchClick }: LibraryHeroProps) {
    return (
        <section className="relative py-24 bg-slate-50 overflow-hidden">
            {/* Islamic Geometric Pattern */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30l15-15l15 15l-15 15l-15-15zm0 0l-15 15l-15-15l15-15l15 15z' fill='%230f172a' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* New Islamic Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-emerald-700 border border-emerald-100 shadow-sm mb-8">
                        <Book size={16} />
                        <span className="text-sm font-semibold tracking-wide uppercase">The Community Maktaba</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                        A Sanctuary for <span className="text-emerald-700 italic">Seekers</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        Explore our curated collection of classical texts, contemporary works, and resources for the whole family.
                    </p>

                    <div
                        className="relative max-w-xl mx-auto cursor-pointer group"
                        onClick={onSearchClick}
                    >
                        <div className="w-full px-6 py-4 pl-14 bg-white border border-slate-200 rounded-full shadow-lg group-hover:shadow-xl group-hover:border-emerald-500/50 transition-all text-lg text-slate-400 text-left">
                            {searchQuery || "Search by title, author, or subject..."}
                        </div>
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-emerald-500 transition-colors" size={24} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
