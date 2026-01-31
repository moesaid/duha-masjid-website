'use client';

import { Heart, Clock, Coins, ArrowRight, CreditCard, Shield, BadgeCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '../../_components/Button/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../_components/ui/Select';
import { useDonationForm, DonationType } from '../_hooks/useDonationForm';
import { TRUST_BADGES } from '../_data';

// Internal components for Hero
function DonationTabs({
    activeTab,
    onChange
}: {
    activeTab: DonationType,
    onChange: (type: DonationType) => void
}) {
    const tabs = [
        { id: 'onetime', label: 'One-Time Gift', icon: Heart },
        { id: 'monthly', label: 'Monthly Recurring', icon: Clock },
        { id: 'zakat', label: 'Zakat Calculator', icon: Coins }
    ];

    return (
        <div className="flex border-b border-slate-100">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id as DonationType)}
                    className={`flex-1 py-4 lg:py-6 flex items-center justify-center gap-2 text-sm lg:text-base font-semibold transition-all border-b-2
                        ${activeTab === tab.id
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-600'
                            : 'bg-white text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-700'}`}
                >
                    <tab.icon className={`w-4 h-4 lg:w-5 lg:h-5 ${activeTab === tab.id ? 'fill-emerald-100' : ''}`} />
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

export function HeroSection() {
    const { state, actions } = useDonationForm();

    return (
        <section className="relative overflow-hidden bg-emerald-900 text-white pt-24 pb-32 lg:pt-32 lg:pb-48">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/patterns/noun-islamic-geometric-patterns.svg')] bg-repeat bg-[length:60px_60px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 to-emerald-900/90" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <p className="font-arabic text-2xl lg:text-3xl text-emerald-200 mb-6 leading-relaxed opacity-90">
                        مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً
                    </p>
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">
                        Build Your Legacy
                    </h1>
                    <p className="text-lg lg:text-xl text-emerald-100/90 leading-relaxed mb-8">
                        Your contributions sustain the house of Allah and serve His creation.
                        Every dollar is an investment in the hereafter.
                    </p>
                    <div className="hidden lg:flex gap-4">
                        <Button variant="outline" className="border-emerald-500 text-emerald-100 hover:bg-emerald-800 hover:text-white">
                            Learn More about Us
                        </Button>
                    </div>
                </div>

                {/* Donation Portal Interface */}
                <div className="flex-1 w-full max-w-xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
                    <DonationTabs activeTab={state.donationType} onChange={actions.setDonationType} />

                    <div className="p-6 sm:p-8">
                        {/* Amount Selection */}
                        <div className="mb-6">
                            <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-3">Select Amount</label>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                                {[50, 100, 250, 500, 1000].map((amount) => (
                                    <button
                                        key={amount}
                                        onClick={() => actions.selectAmount(amount)}
                                        className={`py-2.5 rounded-lg border text-sm font-bold transition-all
                                            ${state.selectedAmount === amount
                                                ? 'border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-900/10'
                                                : 'border-slate-200 text-slate-600 hover:border-emerald-300 hover:bg-emerald-50'}`}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    type="number"
                                    placeholder="Enter custom amount"
                                    value={state.customAmount}
                                    onChange={(e) => actions.updateCustomAmount(e.target.value)}
                                    className={`w-full pl-6 pr-4 py-3 rounded-lg border-2 font-bold text-base outline-none transition-all
                                        ${state.selectedAmount === 'custom'
                                            ? 'border-emerald-600 ring-2 ring-emerald-50 text-emerald-900'
                                            : 'border-slate-200 text-slate-900 focus:border-emerald-400'}`}
                                />
                            </div>
                        </div>

                        {/* Fund Selection */}
                        <div className="mb-8">
                            <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-3">Designate Fund</label>
                            <Select value={state.selectedFund} onValueChange={actions.selectFund}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a fund" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="general">General Fund (Masjid Operations)</SelectItem>
                                    <SelectItem value="zakat">Zakat al-Maal (Obligatory Charity)</SelectItem>
                                    <SelectItem value="fitra">Zakat al-Fitr ($15/person)</SelectItem>
                                    <SelectItem value="expansion">Masjid Expansion Project</SelectItem>
                                    <SelectItem value="pantry">Food Pantry & Relief</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Action */}
                        <div className="flex flex-col gap-4">
                            <Button
                                className="w-full py-6 text-lg shadow-xl shadow-emerald-900/10 flex items-center justify-center gap-2"
                            >
                                Donate {state.selectedAmount !== 'custom' ? `$${state.selectedAmount}` : state.customAmount ? `$${state.customAmount}` : ''} {state.donationType === 'monthly' ? 'Monthly' : ''}
                                <ArrowRight size={20} />
                            </Button>
                            <div className="flex justify-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                                <CreditCard size={20} />
                                <div className="font-bold text-slate-400 text-[10px] tracking-wider border border-slate-300 rounded px-1 flex items-center">STRIPE</div>
                                <div className="font-bold text-slate-400 text-[10px] tracking-wider border border-slate-300 rounded px-1 flex items-center">PAYPAL</div>
                            </div>
                        </div>
                    </div>
                    {/* Trust Footer */}
                    <div className="bg-slate-50 border-t border-slate-100 p-4 flex flex-wrap justify-center gap-6 lg:gap-12">
                        {TRUST_BADGES.map((badge, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-slate-500 text-xs lg:text-sm font-medium">
                                <badge.icon size={16} className="text-emerald-600" />
                                {badge.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
