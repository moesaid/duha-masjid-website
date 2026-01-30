'use client';

import { motion } from 'framer-motion';
import { ZAKAT_FITR_AMOUNT, FIDYA_AMOUNT } from '../_data';
import { Calculator, ArrowRight } from 'lucide-react';

interface ZakatCalculatorProps {
    fitrCount: number;
    setFitrCount: (count: number) => void;
    fidyaCount: number;
    setFidyaCount: (count: number) => void;
    zakatTotal: number;
}

export function ZakatCalculator({
    fitrCount,
    setFitrCount,
    fidyaCount,
    setFidyaCount,
    zakatTotal
}: ZakatCalculatorProps) {
    return (
        <section className="bg-slate-50 pb-24 border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 p-8 md:p-12 border border-slate-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-10">
                        <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-600">
                            <Calculator size={28} />
                        </div>
                        <h2 className="text-3xl font-serif text-slate-900 mb-2">Zakat Calculator</h2>
                        <span className="text-slate-500">Fulfil your obligations with ease</span>
                    </div>

                    <div className="space-y-6">
                        {/* Zakat al-Fitr */}
                        <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div>
                                <h3 className="font-semibold text-slate-900 text-lg">Zakat al-Fitr</h3>
                                <p className="text-emerald-600 font-medium">${ZAKAT_FITR_AMOUNT} <span className="text-slate-400 font-normal">per person</span></p>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                                <button
                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors font-bold text-xl"
                                    onClick={() => setFitrCount(Math.max(0, fitrCount - 1))}
                                >
                                    −
                                </button>
                                <span className="w-8 text-center font-bold text-slate-900 text-lg">{fitrCount}</span>
                                <button
                                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors font-bold text-xl"
                                    onClick={() => setFitrCount(fitrCount + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Fidya */}
                        <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div>
                                <h3 className="font-semibold text-slate-900 text-lg">Fidya (Missed Fasts)</h3>
                                <p className="text-emerald-600 font-medium">${FIDYA_AMOUNT} <span className="text-slate-400 font-normal">per day</span></p>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                                <button
                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors font-bold text-xl"
                                    onClick={() => setFidyaCount(Math.max(0, fidyaCount - 1))}
                                >
                                    −
                                </button>
                                <span className="w-8 text-center font-bold text-slate-900 text-lg">{fidyaCount}</span>
                                <button
                                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors font-bold text-xl"
                                    onClick={() => setFidyaCount(fidyaCount + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Total & Action */}
                        <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <span className="block text-sm text-slate-500 uppercase tracking-wide font-medium mb-1">Total Due</span>
                                <span className="block text-4xl font-serif font-bold text-slate-900">${zakatTotal}</span>
                            </div>

                            <button className="w-full md:w-auto px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-3 text-lg group">
                                <span>Pay Zakat Now</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
