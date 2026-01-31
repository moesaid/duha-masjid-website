'use client';

import { useState } from 'react';
import { Gift, ChevronDown, ChevronUp } from 'lucide-react';
import { CampaignData, ImpactTier, CampaignUpdate, FAQ, IMPACT_TIERS, CAMPAIGN_UPDATES, FAQ_DATA } from '../_data';
import { Button } from '../../../_components/Button/Button';

interface NarrativeSectionProps {
    campaign: CampaignData;
    onSelectAmount: (amount: number) => void;
}

export function NarrativeSection({ campaign, onSelectAmount }: NarrativeSectionProps) {
    const [activeTab, setActiveTab] = useState<'story' | 'updates' | 'faq'>('story');

    return (
        <div className="flex flex-col gap-12">
            {/* Tab Navigation */}
            <div className="flex border-b border-slate-200 overflow-x-auto">
                {['Story', 'Updates', 'FAQ'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase() as any)}
                        className={`px-8 py-4 font-bold text-sm uppercase tracking-wide whitespace-nowrap transition-colors border-b-2
                            ${activeTab === tab.toLowerCase()
                                ? 'border-emerald-600 text-emerald-700'
                                : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="min-h-[400px]">
                {activeTab === 'story' && (
                    <div className="animate-fade-in space-y-12">
                        {/* Rich Text Narrative */}
                        <div className="prose prose-lg prose-emerald max-w-none text-slate-600 leading-relaxed">
                            <p className="text-xl font-bold text-slate-800">
                                Be part of a legacy that will serve generations.
                            </p>
                            <p>
                                The new minaret is not just an architectural feature; it is a symbol of our community's growth and our commitment to establishing the remembrance of Allah in this land.
                                Standing 85 feet tall, it will be visible from the highway, serving as a beacon of invitation (Dawah) and a point of pride for the Muslim community.
                            </p>
                            <p>
                                We have completed the structural engineering and secured all city permits. We are now raising funds for the raw materials—steel, concrete, and the beautiful limestone cladding that will match our existing prayer hall.
                            </p>
                        </div>

                        {/* Impact Tiers Grid */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Gift className="text-emerald-600" /> Use Your Impact
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {IMPACT_TIERS.map((tier) => (
                                    <div
                                        key={tier.amount}
                                        onClick={() => onSelectAmount(tier.amount)}
                                        className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-md hover:bg-emerald-50/50 transition-all group cursor-pointer"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 min-w-[3rem] rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
                                                <tier.icon size={24} />
                                            </div>
                                            <div>
                                                <div className="text-xl font-bold text-emerald-700 mb-1">${tier.amount}</div>
                                                <div className="font-bold text-slate-900 mb-2">{tier.title}</div>
                                                <p className="text-sm text-slate-500">{tier.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Latest Update Teaser */}
                        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex items-start gap-4">
                            <div className="bg-white p-3 rounded-full text-emerald-600 shadow-sm">
                                <Gift size={24} />
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">Latest Update</div>
                                <h4 className="font-bold text-slate-900 mb-2">{CAMPAIGN_UPDATES[0].title}</h4>
                                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{CAMPAIGN_UPDATES[0].content}</p>
                                <button
                                    onClick={() => setActiveTab('updates')}
                                    className="text-emerald-700 font-bold text-sm hover:underline flex items-center gap-1"
                                >
                                    Read full update <ChevronDown className="rotate-[-90deg]" size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'updates' && (
                    <div className="animate-fade-in space-y-8">
                        {CAMPAIGN_UPDATES.map((update, idx) => (
                            <div key={idx} className="relative pl-8 border-l-2 border-emerald-100">
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
                                <div className="text-sm font-bold text-emerald-600 mb-2 uppercase tracking-wide">{update.date}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{update.title}</h3>
                                {update.media && update.media.type === 'image' && (
                                    <div className="mb-4 rounded-xl overflow-hidden shadow-sm aspect-video bg-slate-100">
                                        <img src={update.media.url} alt={update.media.caption || update.title} className="w-full h-full object-cover" />
                                        {update.media.caption && <div className="text-xs text-slate-500 mt-2 italic">{update.media.caption}</div>}
                                    </div>
                                )}
                                {update.media && update.media.type === 'video' && (
                                    <div className="mb-4 rounded-xl overflow-hidden shadow-sm aspect-video bg-black">
                                        <iframe
                                            src={update.media.url}
                                            title={update.media.caption}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                        {update.media.caption && <div className="text-xs text-slate-500 mt-2 italic">{update.media.caption}</div>}
                                    </div>
                                )}
                                <div className="prose prose-sm text-slate-600" dangerouslySetInnerHTML={{ __html: update.htmlContent }} />
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'faq' && (
                    <div className="animate-fade-in space-y-4">
                        {FAQ_DATA.map((faq, idx) => (
                            <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-100 open:bg-white open:shadow-sm transition-all">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-800 list-none">
                                    {faq.question}
                                    <ChevronDown className="text-slate-400 group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
