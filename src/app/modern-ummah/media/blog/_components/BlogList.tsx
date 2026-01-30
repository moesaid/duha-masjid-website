'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogPost } from '../_data';
import { ArrowRight, Calendar, Search } from 'lucide-react';

interface BlogListProps {
    posts: BlogPost[];
    categories: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export function BlogList({
    posts,
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery
}: BlogListProps) {
    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`
                                    px-4 py-2 rounded-full text-sm font-medium transition-all
                                    ${activeCategory === category
                                        ? 'bg-emerald-900 text-white shadow-md'
                                        : 'bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200'}
                                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    </div>
                </div>

                {/* Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-3">
                                        <Calendar size={14} className="text-emerald-600" />
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                                        <Link href={`/modern-ummah/media/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                                        <span className="text-xs font-medium text-slate-500">
                                            By {post.author.split(' ')[0]}
                                        </span>
                                        <Link
                                            href={`/modern-ummah/media/blog/${post.slug}`}
                                            className="text-emerald-600 text-sm font-semibold hover:text-emerald-700 inline-flex items-center gap-1 group/link"
                                        >
                                            Read More
                                            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <p className="text-slate-500 text-lg">No articles found matching your criteria.</p>
                        <button
                            onClick={() => {
                                setActiveCategory('All');
                                setSearchQuery('');
                            }}
                            className="mt-4 text-emerald-600 font-medium hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
