'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, UserCheck, PlayCircle, X, ChevronRight, Calculator, Check } from 'lucide-react';

export function RegistrationCta() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'application' | 'financial-aid'>('application');

    const openModal = (type: 'application' | 'financial-aid') => {
        setModalType(type);
        setIsModalOpen(true);
    };

    return (
        <section className="py-24 px-4 bg-white" id="enroll">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-[3rem] p-8 md:p-12 lg:p-16 border border-amber-100 shadow-xl shadow-amber-900/5 relative overflow-hidden">
                    {/* Ambient Light */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/60 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50/60 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left: Content & Checklist */}
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100/80 text-amber-700 border border-amber-200 text-xs font-medium uppercase tracking-widest mb-6">
                                Admissions Open
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                Begin Your Journey With the Quran
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                Join a community dedicated to the preservation and understanding of Allah's book. Spaces are limited for the upcoming academic year.
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-amber-100 shadow-sm shrink-0">
                                        <FileText className="text-emerald-500" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-lg">1. Application</h4>
                                        <p className="text-slate-500 text-sm">Submit your initial registration form online.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-amber-100 shadow-sm shrink-0">
                                        <UserCheck className="text-amber-500" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-lg">2. Assessment</h4>
                                        <p className="text-slate-500 text-sm">Meet with an instructor for level placement.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-amber-100 shadow-sm shrink-0">
                                        <PlayCircle className="text-indigo-500" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-lg">3. Orientation</h4>
                                        <p className="text-slate-500 text-sm">Welcome session for parents and students.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Actions */}
                        <div className="lg:pl-10">
                            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-lg shadow-amber-900/5 text-center">
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Ready to Apply?</h3>
                                <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                                    Registration for Fall 2026 is currently active.
                                </p>

                                <div className="space-y-4">
                                    <button
                                        onClick={() => openModal('application')}
                                        className="w-full block px-8 py-4 bg-amber-500 text-white text-lg font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:bg-amber-600 hover:shadow-amber-600/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        Start Application <ArrowRight size={20} />
                                    </button>
                                    <button
                                        onClick={() => openModal('financial-aid')}
                                        className="w-full block px-8 py-4 bg-white text-slate-600 text-lg font-medium rounded-xl hover:bg-slate-50 border border-slate-200 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Calculator size={20} className="text-slate-400" />
                                        Financial Aid
                                    </button>
                                </div>
                                <p className="mt-6 text-xs text-slate-400">
                                    Need help? Contact <a href="#" className="underline hover:text-amber-600">academy@duhamasjid.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <h3 className="text-xl font-serif font-bold text-slate-900">
                                    {modalType === 'application' ? 'Start Application' : 'Financial Aid Request'}
                                </h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                                        {modalType === 'application' ? <FileText size={32} /> : <Calculator size={32} />}
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                                        {modalType === 'application' ? 'Fall 2026 Enrollment' : 'Tuition Assistance Program'}
                                    </h4>
                                    <p className="text-slate-500 text-sm max-w-sm mx-auto">
                                        {modalType === 'application'
                                            ? 'Please complete the following details to begin your child\'s enrollment process.'
                                            : 'We believe no student should be turned away due to financial constraints.'}
                                    </p>
                                </div>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    {modalType === 'application' && (
                                        <>
                                            <div className="space-y-4">
                                                <h5 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Student Information</h5>
                                                <div className="grid grid-cols-4 gap-4">
                                                    <div className="col-span-3">
                                                        <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Student Full Name</label>
                                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="Enter full name" />
                                                    </div>
                                                    <div className="col-span-1">
                                                        <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Age</label>
                                                        <input type="number" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="Age" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Select Program</label>
                                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-white">
                                                        <option value="">Select a program...</option>
                                                        <option>Seedlings (Ages 5-8)</option>
                                                        <option>Saplings (Ages 9-12)</option>
                                                        <option>Mighty Trees (Ages 13+)</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h5 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Parent/Guardian Information</h5>
                                                <div>
                                                    <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Parent/Guardian Name</label>
                                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="Enter full name" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Phone Number</label>
                                                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="(555) 000-0000" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Email Address</label>
                                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h5 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Additional Information</h5>
                                                <div>
                                                    <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Notes</label>
                                                    <textarea
                                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all h-24 resize-none"
                                                        placeholder="Any previous Quran learning experience or special notes..."
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {modalType === 'financial-aid' && (
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Parent/Guardian Name</label>
                                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="Enter full name" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Phone Number</label>
                                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="(555) 000-0000" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Email Address</label>
                                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Reason for Request</label>
                                                <textarea
                                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all h-32 resize-none"
                                                    placeholder="Please briefly describe your financial situation..."
                                                ></textarea>
                                            </div>
                                        </div>
                                    )}

                                    <button className="w-full py-4 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 shadow-lg shadow-amber-500/20 transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 mt-8">
                                        {modalType === 'application' ? 'Submit Registration' : 'Submit Request'} <ChevronRight size={18} />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
