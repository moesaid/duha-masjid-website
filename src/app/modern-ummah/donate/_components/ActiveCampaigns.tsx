'use client';

import { Heart, Target, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../../_components/Button/Button';
import { CAMPAIGNS, formatCurrency } from '../_data';

export function ActiveCampaigns() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
                            Active Campaigns
                        </h2>
                        <p className="text-slate-600 max-w-xl text-lg">
                            Support our ongoing initiatives making a difference today.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CAMPAIGNS.map((campaign) => {
                        const percent = Math.round((campaign.raised / campaign.goal) * 100);
                        return (
                            <div key={campaign.id} className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                                <div className={`h-2 w-full bg-${campaign.color}-500`} />

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${campaign.color}-50 text-${campaign.color}-600 mb-4`}>
                                            <campaign.icon size={24} />
                                        </div>
                                        {campaign.status === 'urgent' && (
                                            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-rose-50 text-rose-700 flex items-center gap-1">
                                                <Heart size={10} className="fill-rose-700" /> Urgent
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                        {campaign.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                                        {campaign.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-50">
                                        <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-wide">
                                            <span className={`text-${campaign.color}-700`}>{formatCurrency(campaign.raised)} Raised</span>
                                            <span className="text-slate-400">of {formatCurrency(campaign.goal)}</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                                            <div
                                                className={`h-full bg-${campaign.color}-500 rounded-full`}
                                                style={{ width: `${percent}%` }}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
                                            <span className="flex items-center gap-1"><Target size={12} /> {campaign.category}</span>
                                            <span className="flex items-center gap-1"><Calendar size={12} /> {campaign.deadline}</span>
                                        </div>

                                        <div className="flex gap-3">
                                            <Button
                                                className={`w-full text-sm font-bold bg-${campaign.color}-600 hover:bg-${campaign.color}-700 flex items-center justify-center gap-2`}
                                            >
                                                Donate <ArrowRight size={14} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
