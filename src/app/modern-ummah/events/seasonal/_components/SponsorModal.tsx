'use client';

import { X } from 'lucide-react';
import { CalendarDay, SponsorFormData, contributionOptions } from '../_data';
import { motion, AnimatePresence } from 'framer-motion';

interface SponsorModalProps {
    selectedDay: CalendarDay | null;
    sponsorForm: SponsorFormData;
    onClose: () => void;
    setSponsorName: (name: string) => void;
    setSponsorEmail: (email: string) => void;
    setSponsorPhone: (phone: string) => void;
    setContributionAmount: (amount: string) => void;
    setAnonymous: (anonymous: boolean) => void;
    onSubmit: () => void;
}

export function SponsorModal({
    selectedDay,
    sponsorForm,
    onClose,
    setSponsorName,
    setSponsorEmail,
    setSponsorPhone,
    setContributionAmount,
    setAnonymous,
    onSubmit
}: SponsorModalProps) {
    if (!selectedDay) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="bg-slate-50 border-b border-slate-100 p-6 flex flex-row items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900">
                            Sponsor Iftar - Day {selectedDay.ramadanDay}
                        </h2>
                        <button
                            className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors"
                            onClick={onClose}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-8 space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Your Name</label>
                            <input
                                type="text"
                                value={sponsorForm.name}
                                onChange={(e) => setSponsorName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Email Address</label>
                            <input
                                type="email"
                                value={sponsorForm.email}
                                onChange={(e) => setSponsorEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                            <input
                                type="tel"
                                value={sponsorForm.phone}
                                onChange={(e) => setSponsorPhone(e.target.value)}
                                placeholder="(555) 123-4567"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Contribution Level</label>
                            <div className="relative">
                                <select
                                    value={sponsorForm.contributionAmount}
                                    onChange={(e) => setContributionAmount(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-slate-900 appearance-none bg-white"
                                >
                                    {contributionOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <input
                                type="checkbox"
                                id="anonymous"
                                checked={sponsorForm.anonymous}
                                onChange={(e) => setAnonymous(e.target.checked)}
                                className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            <label htmlFor="anonymous" className="text-sm text-slate-600 font-medium select-none cursor-pointer">
                                Make my donation anonymous
                            </label>
                        </div>

                        <button
                            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/20 active:scale-[0.98] transition-all mt-4"
                            onClick={onSubmit}
                        >
                            Complete Sponsorship
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
