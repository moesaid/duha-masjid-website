'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogPost } from '../_data';
import { Calendar, Clock, User, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface PostHeaderProps {
    post: BlogPost;
}

export function PostHeader({ post }: PostHeaderProps) {
    return (
        <header className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-slate-900">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <Link
                    href="/modern-ummah/media/blog"
                    className="inline-flex items-center gap-2 text-emerald-300 hover:text-white transition-colors mb-8 text-sm font-medium"
                >
                    <ChevronLeft size={16} />
                    Back to Blog
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase tracking-widest mb-6 border border-emerald-500/30">
                        {post.category}
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-sm md:text-base font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-white">
                                <User size={14} />
                            </div>
                            <span>{post.author}</span>
                        </div>
                        <span className="hidden md:inline w-1 h-1 bg-slate-600 rounded-full" />
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-emerald-500" />
                            <span>{post.date}</span>
                        </div>
                        <span className="hidden md:inline w-1 h-1 bg-slate-600 rounded-full" />
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-emerald-500" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </header>
    );
}
