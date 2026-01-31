import Link from 'next/link';
import { Button } from '../../../_components';
import { Heart, DollarSign, ArrowRight } from 'lucide-react';
import { communityGuidelines } from '../_data';

export function CommunityFund() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left: Etiquette Guidelines */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">Etiquette</span>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mt-2 mb-4">Comforting the Family</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our community's responsibility is to support those who have lost loved ones with dignity, patience, and correct Islamic manners.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {communityGuidelines.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                        <div className="shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Donation CTA */}
                    <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-700 text-slate-400">
                                <DollarSign size={32} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold mb-4">Janazah Sadaqah Fund</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed max-w-md mx-auto">
                                Help us cover burial costs for the needy in our community.
                                Your donation ensures every Muslim receives a proper burial with dignity.
                            </p>

                            <Button href="/modern-ummah/donate?fund=janazah" variant="primary" className="w-full justify-center bg-white text-slate-900 hover:bg-slate-100 border-transparent py-4 font-semibold">
                                Donate to Janazah Fund
                                <ArrowRight size={18} />
                            </Button>

                            <p className="mt-6 text-xs text-slate-500">
                                All funds are restricted for funeral expenses only.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
