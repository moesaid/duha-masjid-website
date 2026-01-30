'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

type ProgramKey = 'preschool' | 'elementary' | 'secondary' | 'hifz';

const tuitionData = {
    preschool: {
        label: 'Preschool',
        tiers: [
            { name: '2-Day Program', annual: 3495, monthly: 350 },
            { name: '3-Day Program', annual: 4995, monthly: 500 },
            { name: '5-Day Program', annual: 6995, monthly: 700 }
        ]
    },
    elementary: {
        label: 'Elementary (K-5)',
        tiers: [
            { name: 'Standard Tuition', annual: 7995, monthly: 800 }
        ]
    },
    secondary: {
        label: 'Secondary (6-12)',
        tiers: [
            { name: 'Middle School (6-8)', annual: 8495, monthly: 850 },
            { name: 'High School (9-12)', annual: 8995, monthly: 900 }
        ]
    },
    hifz: {
        label: 'Hifz Track',
        tiers: [
            { name: 'Full Hifz', annual: 9495, monthly: 950 }
        ]
    }
};

const fees = [
    { name: 'Registration', cost: '$75', note: 'Annual' },
    { name: 'Technology', cost: '$255', note: 'Annual' },
    { name: 'Books/Resources', cost: '$228', note: 'Annual' },
    { name: 'Enrollment', cost: '$495', note: 'One-time (New)' },
];

export function TuitionGuide() {
    const [activeTab, setActiveTab] = useState<ProgramKey>('elementary');

    return (
        <section className="py-24 bg-white" id="tuition">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Tuition & Investment</h2>
                    <p className="text-slate-600 mt-4">Transparent tiered pricing for your child&apos;s future.</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {Object.entries(tuitionData).map(([key, data]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key as ProgramKey)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeTab === key
                                    ? 'bg-emerald-900 text-white shadow-lg'
                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                }`}
                        >
                            {data.label}
                        </button>
                    ))}
                </div>

                {/* Pricing Table Area */}
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-100">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4"
                        >
                            <div className="grid grid-cols-12 text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4">
                                <div className="col-span-6 md:col-span-5">Program Name</div>
                                <div className="col-span-6 md:col-span-3 text-right">Per Year</div>
                                <div className="hidden md:block md:col-span-4 text-right">Per Month (10x)</div>
                            </div>

                            {tuitionData[activeTab].tiers.map((tier) => (
                                <div key={tier.name} className="grid grid-cols-12 items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
                                    <div className="col-span-6 md:col-span-5 font-bold text-slate-900 text-lg">
                                        {tier.name}
                                    </div>
                                    <div className="col-span-6 md:col-span-3 text-right font-bold text-emerald-700 text-xl">
                                        ${tier.annual.toLocaleString()}
                                    </div>
                                    <div className="hidden md:block md:col-span-4 text-right text-slate-500 font-medium">
                                        Approx. ${tier.monthly}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Sibling Value Box */}
                    <div className="mt-8 bg-emerald-900/5 border border-emerald-900/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                                <Check size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-emerald-900">Family Value Plan</h4>
                                <p className="text-sm text-emerald-800/80">Discounts automatically applied for siblings.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 text-sm font-medium">
                            <span className="bg-white px-4 py-2 rounded-lg text-emerald-800 shadow-sm border border-emerald-100">
                                2nd Child: <span className="font-bold">10% Off</span>
                            </span>
                            <span className="bg-white px-4 py-2 rounded-lg text-emerald-800 shadow-sm border border-emerald-100">
                                3rd+ Child: <span className="font-bold">20% Off</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Additional Fees Grid */}
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 px-2">Additional Annual Fees</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {fees.map((fee) => (
                            <div key={fee.name} className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-200 transition-colors bg-white">
                                <div className="text-slate-500 text-sm mb-1">{fee.name}</div>
                                <div className="text-2xl font-bold text-slate-900">{fee.cost}</div>
                                <div className="text-xs text-slate-400 mt-2">{fee.note}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
