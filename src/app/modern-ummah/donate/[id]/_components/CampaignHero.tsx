'use client';

import { Play, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../../_components/Button/Button';
import { GlobalVideo } from '../../../_components/GlobalVideo/GlobalVideo';
import { CampaignData } from '../_data';

interface CampaignHeroProps {
    campaign: CampaignData;
}

export function CampaignHero({ campaign }: CampaignHeroProps) {
    return (
        <section className="relative h-[60vh] min-h-[500px] bg-slate-900 flex items-center justify-center overflow-hidden">
            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0 bg-slate-900">
                {campaign.coverImage && (
                    <img
                        src={campaign.coverImage}
                        alt={campaign.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-slate-900/90 to-slate-900/90" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                {/* Breadcrumb */}
                <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-bold uppercase tracking-wider mb-6">
                    <Link href="/modern-ummah" className="hover:text-emerald-300">Home</Link>
                    <ChevronRight size={14} />
                    <Link href="/modern-ummah/donate" className="hover:text-emerald-300">Donate</Link>
                    <ChevronRight size={14} />
                    <span className="text-white">Campaign</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                    {campaign.title}
                </h1>

                <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    {campaign.subtitle}
                </p>

                <div className="flex justify-center gap-4">
                    <Button
                        size="lg"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-8 py-6 text-lg font-bold shadow-2xl shadow-emerald-900/50"
                        onClick={() => document.getElementById('donation-widget')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Donate Now
                    </Button>

                    <GlobalVideo videoUrl={campaign.videoUrl}>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full px-6 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all"
                        >
                            <Play size={20} className="mr-2 fill-white" /> Watch Our Vision
                        </Button>
                    </GlobalVideo>
                </div>
            </div>
        </section>
    );
}
