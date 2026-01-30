'use client';

import { archiveIssues } from '../_data';
import { ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';

export function ArchiveList() {
    return (
        <section className="bg-slate-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-serif font-bold text-slate-900">Archive</h2>
                    <Link href="#" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1">
                        View All Issues <ChevronRight size={16} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {archiveIssues.map((issue) => (
                        <div key={issue.id} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group cursor-pointer">
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{issue.date}</span>
                                <span className="text-xs font-medium bg-amber-50 text-amber-900 px-2 py-1 rounded-md">
                                    {issue.tag}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                {issue.title}
                            </h3>

                            <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                                {issue.preview}
                            </p>

                            <div className="flex items-center text-emerald-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                                Read Issue <ChevronRight size={16} className="ml-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
