'use client';

import { motion } from 'framer-motion';
import { collections } from '../_data';

export function BookShelves() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">Curated Collections</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Browse the Shelves</h2>
                </div>

                <div className="space-y-20">
                    {collections.map((collection, colIndex) => (
                        <div key={colIndex}>
                            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{collection.shelf}</h3>
                                    <p className="text-slate-500 mt-1">{collection.description}</p>
                                </div>
                                <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full uppercase tracking-wider">
                                    {collection.books.length} Titles
                                </span>
                            </div>

                            <div className="flex gap-4 overflow-x-auto pb-8 pt-4 hide-scrollbar snap-x">
                                {collection.books.map((book, bookIndex) => (
                                    <motion.div
                                        key={bookIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: bookIndex * 0.05 }}
                                        className="snap-start shrink-0"
                                    >
                                        <div className={`
                                            w-32 h-44 sm:w-40 sm:h-56 ${book.color} rounded-r-lg rounded-l-[2px] shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group cursor-pointer
                                        `}>
                                            <div className="absolute inset-y-0 left-0 w-1.5 bg-black/20 rounded-l-[1px]"></div>
                                            <div className="absolute inset-y-0 left-1.5 w-0.5 bg-white/10"></div>

                                            <div className="p-3 sm:p-4 h-full flex flex-col justify-between">
                                                <h4 className="text-white text-xs sm:text-sm font-bold leading-tight line-clamp-3">
                                                    {book.title}
                                                </h4>
                                                <div className="w-full h-1 bg-white/20 rounded-full"></div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
