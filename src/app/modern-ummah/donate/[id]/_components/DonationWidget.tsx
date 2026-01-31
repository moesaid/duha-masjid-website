'use client';

import { useState } from 'react';
import { Heart, Lock, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../_components/Button/Button';
import { PRESET_AMOUNTS, CampaignData, formatCurrency, calculateProgress } from '../_data';
import { useDonationForm } from '../../_hooks/useDonationForm';

interface DonationWidgetProps {
    campaign: CampaignData;
    state: ReturnType<typeof useDonationForm>['state'];
    actions: ReturnType<typeof useDonationForm>['actions'];
}

export function DonationWidget({ campaign, state, actions }: DonationWidgetProps) {
    const progress = calculateProgress(campaign.raised, campaign.goal);

    return (
        <div id="donation-widget" className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 lg:p-8 sticky top-24">
            {/* Header / Progress */}
            <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                    <div>
                        <span className="text-3xl font-bold text-slate-900">{formatCurrency(campaign.raised)}</span>
                        <span className="text-slate-500 ml-2 text-sm font-medium">raised of {formatCurrency(campaign.goal)}</span>
                    </div>
                    <span className="text-emerald-600 font-bold">{progress}%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="flex justify-between mt-3 text-xs font-bold uppercase tracking-wide text-slate-400">
                    <span>{campaign.donors} Donors</span>
                    <span>{campaign.daysLeft} Days Left</span>
                </div>
            </div>

            {/* Donation Type Tabs */}
            <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
                <button
                    onClick={() => actions.setDonationType('onetime')}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${state.donationType === 'onetime' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    One-Time
                </button>
                <button
                    onClick={() => actions.setDonationType('monthly')}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${state.donationType === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Monthly
                </button>
            </div>

            {/* Amount Grid */}
            <div className="grid grid-cols-3 gap-2 mb-4">
                {PRESET_AMOUNTS.map((amount) => (
                    <button
                        key={amount}
                        onClick={() => actions.selectAmount(amount)}
                        className={`py-3 rounded-xl border font-bold text-sm transition-all
                            ${state.selectedAmount === amount
                                ? 'border-emerald-600 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-100'
                                : 'border-slate-200 text-slate-600 hover:border-emerald-200 hover:bg-slate-50'}`}
                    >
                        ${amount}
                    </button>
                ))}
            </div>

            {/* Custom Amount */}
            <div className="relative mb-8">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                <input
                    type="number"
                    placeholder="Other Amount"
                    value={state.customAmount}
                    onChange={(e) => actions.updateCustomAmount(e.target.value)}
                    className={`w-full pl-8 pr-4 py-3 rounded-xl border-2 font-bold outline-none transition-all
                        ${state.selectedAmount === 'custom'
                            ? 'border-emerald-600 text-emerald-900'
                            : 'border-slate-200 text-slate-900 focus:border-emerald-400'}`}
                />
            </div>

            {/* Action Button */}
            <Button className="w-full py-6 text-lg font-bold shadow-lg shadow-emerald-900/10 mb-4">
                Donate {state.selectedAmount !== 'custom' ? `$${state.selectedAmount}` : state.customAmount ? `$${state.customAmount}` : ''}
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                <Lock size={12} /> Secure SSL Payment
            </div>
        </div>
    );
}
