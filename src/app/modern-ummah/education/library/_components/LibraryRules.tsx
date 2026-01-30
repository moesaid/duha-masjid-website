'use client';

import { borrowingRules } from '../_data';

export function LibraryRules() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {borrowingRules.map((rule, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-emerald-700 mb-4">
                                <rule.icon size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{rule.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {rule.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
