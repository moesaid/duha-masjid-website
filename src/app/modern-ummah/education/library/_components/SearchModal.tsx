'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Book as BookIcon } from 'lucide-react';
import { Book } from '../_data';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    query: string;
    setQuery: (query: string) => void;
    results: Book[];
}

export function SearchModal({ isOpen, onClose, query, setQuery, results }: SearchModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
                    >
                        {/* Header / Input */}
                        <div className="p-6 border-b border-slate-100 flex items-center gap-4">
                            <Search className="text-slate-400" size={24} />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search library catalog..."
                                className="flex-1 text-xl py-2 focus:outline-none placeholder:text-slate-300 text-slate-900"
                                autoFocus
                            />
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Results Area */}
                        <div className="flex-1 overflow-y-auto p-2">
                            {query.trim() === '' ? (
                                <div className="py-16 text-center text-slate-400">
                                    <BookIcon className="mx-auto mb-4 opacity-50" size={48} />
                                    <p>Start typing to search titles or authors...</p>
                                </div>
                            ) : results.length > 0 ? (
                                <div className="space-y-2 p-2">
                                    {results.map((book, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
                                        >
                                            <div className={`w-12 h-16 ${book.color} rounded shadow-sm shrink-0`} />
                                            <div>
                                                <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                                    {book.title}
                                                </h4>
                                                <p className="text-sm text-slate-500">{book.author}</p>
                                            </div>
                                            <div className="ml-auto text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded capitalize">
                                                {book.subject}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-16 text-center text-slate-400">
                                    <p>No books found for "{query}"</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
