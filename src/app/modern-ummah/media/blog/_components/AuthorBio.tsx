'use client';

import Image from 'next/image';
import { BlogPost } from '../_data';
import { User } from 'lucide-react';

interface AuthorBioProps {
    post: BlogPost;
}

export function AuthorBio({ post }: AuthorBioProps) {
    return (
        <section className="bg-slate-50 py-16 border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-24 h-24 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 relative border-4 border-white shadow-md">
                        <div className="w-full h-full bg-emerald-800 flex items-center justify-center text-white">
                            <span className="text-2xl font-bold">{post.author.charAt(0)}</span>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Written by</h3>
                        <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">{post.author}</h4>
                        <p className="text-emerald-600 font-medium mb-4">{post.authorRole || 'Contributor'}</p>
                        <p className="text-slate-600 leading-relaxed">
                            A dedicated member of our community content team, sharing insights and stories to uplift and inform.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
