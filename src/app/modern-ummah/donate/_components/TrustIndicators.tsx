'use client';

import { TRUST_STATS } from '../_data';

export function TrustIndicators() {
    return (
        <section className="py-20 bg-emerald-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                    {TRUST_STATS.map((item, idx) => (
                        <div key={idx} className="text-center">
                            <div className="w-16 h-16 mx-auto bg-emerald-800 rounded-2xl flex items-center justify-center text-emerald-300 mb-4">
                                <item.icon size={32} />
                            </div>
                            <div className="text-3xl lg:text-4xl font-bold mb-2">{item.stat}</div>
                            <div className="text-emerald-200 text-sm lg:text-base font-medium">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
