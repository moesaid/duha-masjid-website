
'use client';

import { motion } from 'framer-motion';
import { servicePackages } from '../_data';
import { Button } from '../../../_components';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export function PackagesGrid() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-semibold tracking-wide uppercase">Our Offerings</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Service Packages</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {servicePackages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${pkg.popular
                                ? 'bg-white border-gold shadow-xl scale-105 z-10'
                                : 'bg-white/50 border-transparent shadow-lg hover:border-slate-200'
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 text-gold text-xs font-bold uppercase tracking-wider shadow-lg">
                                    <Sparkles size={12} />
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                                <p className="text-slate-500 font-medium">{pkg.subtitle}</p>
                                <div className="mt-6 flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold text-emerald-700">{pkg.price}</span>
                                    <span className="text-slate-400 text-sm">/ {pkg.priceLabel}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-sm leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                href="#booking"
                                variant={pkg.popular ? 'primary' : 'secondary'}
                                className="w-full justify-center py-4 rounded-xl shadow-lg"
                            >
                                Select Package
                                <ArrowRight size={18} />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
