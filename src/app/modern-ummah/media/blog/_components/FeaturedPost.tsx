'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '../_data';

interface FeaturedPostProps {
    post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
    if (!post) return null;

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative rounded-3xl overflow-hidden shadow-xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                        {/* Image Side */}
                        <div className="relative h-64 lg:h-full overflow-hidden">
                            <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-slate-900/10 transition-colors duration-500" />
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-6 left-6 z-20">
                                <span className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                                    Featured
                                </span>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="bg-slate-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                            {/* Background Pattern */}
                            <div
                                className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/patterns/noun-islamic-ornament-one.svg')] bg-repeat"
                                style={{ backgroundSize: '80px 80px' }}
                            />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 text-emerald-400 mb-6 text-sm font-medium">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={16} />
                                        {post.date}
                                    </span>
                                    <span className="hidden sm:inline w-1 h-1 bg-emerald-500 rounded-full" />
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={16} />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                                    <Link href={`/modern-ummah/media/blog/${post.slug}`} className="hover:text-emerald-400 transition-colors">
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-slate-300 text-lg mb-8 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <User size={20} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">{post.author}</p>
                                            <p className="text-xs text-slate-400 uppercase tracking-wider">{post.authorRole || 'Author'}</p>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/modern-ummah/media/blog/${post.slug}`}
                                        className="inline-flex items-center justify-center width-12 height-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors p-3"
                                    >
                                        <ArrowRight size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
