'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, blogPosts } from '../_data';
import { ArrowRight } from 'lucide-react';

interface RelatedPostsProps {
    currentPostId: string;
    category: string;
}

export function RelatedPosts({ currentPostId, category }: RelatedPostsProps) {
    // Basic recommendation logic: same category, exclude current
    const related = blogPosts
        .filter(p => p.category === category && p.id !== currentPostId)
        .slice(0, 3);

    if (related.length === 0) return null;

    return (
        <section className="bg-white py-16 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Read Next</h2>
                    <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {related.map(post => (
                        <Link key={post.id} href={`/modern-ummah/media/blog/${post.slug}`} className="group block">
                            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2 py-1 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold uppercase tracking-wider rounded-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                                        Read Article <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
