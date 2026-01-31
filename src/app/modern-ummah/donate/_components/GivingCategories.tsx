'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '../../_components/Button/Button';
import { CATEGORIES } from '../_data';

export function GivingCategories() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Ways to Give</h2>
                <p className="text-lg text-slate-600">Choose the cause closest to your heart</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CATEGORIES.map((category) => (
                    <div key={category.id} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 text-center">
                        <div className={`w-16 h-16 rounded-2xl bg-${category.color}-50 text-${category.color}-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                            <category.icon size={32} />
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-${category.color}-50 text-${category.color}-700 mb-4`}>
                            {category.tag}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{category.title}</h3>
                        <p className="text-slate-500 mb-8">{category.stat}</p>
                        <Button variant="ghost" className={`text-${category.color}-600 hover:text-${category.color}-700 hover:bg-${category.color}-50 w-full`}>
                            {category.action} <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
}
