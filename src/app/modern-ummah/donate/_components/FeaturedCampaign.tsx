'use client';

import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';
import { Button } from '../../_components/Button/Button';
import { FEATURED_CAMPAIGN, formatCurrency } from '../_data';

export function FeaturedCampaign() {
    return (
        <section className="py-20 lg:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
                    <div className="bg-emerald-900 lg:w-2/5 p-12 flex items-center justify-center relative overflow-hidden">
                        {/* Abstract Building Visual */}
                        <div className="absolute inset-0 opacity-20 bg-[url('/patterns/noun-islamic-geometric-patterns.svg')] bg-repeat" />
                        <Building2 size={120} className="text-white/80 relative z-10" />
                    </div>
                    <div className="p-8 lg:p-16 lg:w-3/5 flex flex-col justify-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wide w-fit mb-4">Urgent Appeal</span>
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">
                            {FEATURED_CAMPAIGN.title}
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {FEATURED_CAMPAIGN.description} Your generous support helps us build a sanctuary for generations to come.
                        </p>

                        <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <span className="text-3xl font-bold text-slate-900">{formatCurrency(FEATURED_CAMPAIGN.raised)}</span>
                                    <span className="text-slate-500 ml-2 font-medium">raised of {formatCurrency(FEATURED_CAMPAIGN.goal)}</span>
                                </div>
                                <span className="text-emerald-600 font-bold">{FEATURED_CAMPAIGN.percentage}%</span>
                            </div>
                            <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out" style={{ width: `${FEATURED_CAMPAIGN.percentage}%` }} />
                            </div>
                        </div>

                        <Link href="/modern-ummah/donate/expansion" className="w-fit">
                            <Button variant="outline" className="gap-2">
                                View Campaign Details <ArrowRight size={16} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
