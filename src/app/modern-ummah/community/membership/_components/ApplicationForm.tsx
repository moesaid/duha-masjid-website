'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Calendar, FileText, ArrowRight } from 'lucide-react';
import { DatePicker } from '../../../_components';

export function ApplicationForm() {
    const [familyMembers, setFamilyMembers] = useState(1);
    const [dob, setDob] = useState<Date | undefined>();

    return (
        <section className="py-20" id="apply">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Membership Application.
                    </h2>
                    <p className="text-slate-600">
                        Complete the form below to apply.
                    </p>
                </motion.div>

                <motion.form
                    className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 md:p-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* Primary Member */}
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <User className="w-5 h-5 text-emerald-600" />
                        Primary Member
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                                placeholder="Your full name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Date of Birth *
                            </label>
                            <DatePicker
                                date={dob}
                                setDate={setDob}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                <Mail className="w-4 h-4 inline mr-1" />
                                Email Address *
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                <Phone className="w-4 h-4 inline mr-1" />
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                                placeholder="(555) 123-4567"
                                required
                            />
                        </div>
                    </div>

                    {/* Documents */}
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 mt-10">
                        <FileText className="w-5 h-5 text-emerald-600" />
                        Required Documents
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Government ID *
                            </label>
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-emerald-50 file:text-emerald-700"
                                required
                            />
                            <p className="text-xs text-slate-500 mt-1">Driver&apos;s license, passport, or state ID</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Proof of Residence *
                            </label>
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-emerald-50 file:text-emerald-700"
                                required
                            />
                            <p className="text-xs text-slate-500 mt-1">Utility bill, bank statement, or lease</p>
                        </div>
                    </div>

                    {/* Family Members */}
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 mt-10">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                        Family Members
                    </h3>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Number of Family Members
                        </label>
                        <select
                            value={familyMembers}
                            onChange={(e) => setFamilyMembers(Number(e.target.value))}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                        >
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                                <option key={n} value={n}>{n} {n === 1 ? 'member' : 'members'}</option>
                            ))}
                        </select>
                        <p className="text-xs text-slate-500 mt-1">Members under 18 years old are free</p>
                    </div>

                    {/* Fee Summary */}
                    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-8">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-700">Annual Membership Fee</span>
                            <span className="text-2xl font-bold text-emerald-600">$100</span>
                        </div>
                        <p className="text-xs text-emerald-600 mt-2">
                            Scholarships available—contact us if finances are a concern.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shadow-emerald-600/20"
                    >
                        Submit Application
                        <ArrowRight size={18} />
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
