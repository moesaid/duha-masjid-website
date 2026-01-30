'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, User, Search, Filter, Loader2, Clock } from 'lucide-react';
import { speakers, Khutbah, latestKhutbah } from '../_data';

interface KhutbahGridProps {
    displayedKhutbahs: Khutbah[];
    searchQuery: string;
    setSearchQuery: (q: string) => void;
    selectedSpeaker: string;
    setSelectedSpeaker: (s: string) => void;
    handlePlay: (k: typeof latestKhutbah) => void;
    isLoading: boolean;
    hasMore: boolean;
    loadMore: () => void;
    // We can use a callback refrainstead of ref object for simpler integration if needed,
    // but sticking to standard button for now as per heritage
}

export function KhutbahGrid({
    displayedKhutbahs,
    searchQuery,
    setSearchQuery,
    selectedSpeaker,
    setSelectedSpeaker,
    handlePlay,
    isLoading,
    hasMore,
    loadMore
}: KhutbahGridProps) {
    return (
        <section className="py-16 px-4 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 sticky top-4 z-30 bg-slate-50/95 backdrop-blur-sm py-4 rounded-xl">
                    <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        {speakers.map((speaker) => (
                            <button
                                key={speaker}
                                onClick={() => setSelectedSpeaker(speaker)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${selectedSpeaker === speaker
                                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                {speaker}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search topics or speakers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm transition-shadow focus:shadow-md"
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <AnimatePresence mode="popLayout">
                        {displayedKhutbahs.map((khutbah) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                key={khutbah.id}
                                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                                onClick={() => handlePlay(khutbah)}
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                        <Play size={14} fill="currentColor" />
                                    </div>
                                </div>

                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md uppercase tracking-wider flex items-center gap-1">
                                        <Clock size={10} /> {khutbah.duration}
                                    </span>
                                </div>

                                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 line-clamp-2 leading-tight group-hover:text-emerald-700 transition-colors">
                                    {khutbah.title}
                                </h3>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                        <User size={14} className="text-emerald-500" />
                                        {khutbah.speaker}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                        <Calendar size={14} className="text-emerald-500" />
                                        {khutbah.date}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                                    {khutbah.tags.map(tag => (
                                        <span key={tag} className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {displayedKhutbahs.length === 0 && !isLoading && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                            <Filter size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">No khutbahs found</h3>
                        <p className="text-slate-500">Try adjusting your filters or search terms.</p>
                    </div>
                )}

                {/* Load More Trigger */}
                {hasMore && (
                    <div className="flex justify-center pt-8">
                        <button
                            onClick={loadMore}
                            disabled={isLoading}
                            className="px-8 py-3 bg-white border border-slate-200 text-slate-600 font-medium rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2 shadow-sm disabled:opacity-50"
                        >
                            {isLoading ? <Loader2 size={18} className="animate-spin" /> : null}
                            {isLoading ? 'Loading more...' : 'Load Older Khutbahs'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
