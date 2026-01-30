'use client';

import { motion } from 'framer-motion';
import { Package, Apple, Beef } from 'lucide-react';

const offerings: {
    icon: typeof Package;
    title: string;
    items: string[];
    color: 'amber' | 'green' | 'rose';
}[] = [
        {
            icon: Package,
            title: 'Essential Staples',
            items: ['Rice', 'Flour', 'Cooking Oil', 'Sugar', 'Pasta', 'Beans'],
            color: 'amber',
        },
        {
            icon: Apple,
            title: 'Fresh Produce',
            items: ['Seasonal Vegetables', 'Fresh Fruits', 'Herbs', 'Potatoes', 'Onions'],
            color: 'green',
        },
        {
            icon: Beef,
            title: 'Halal Meat (Zabiha)',
            items: ['Chicken', 'Ground Beef', 'Lamb', 'Fish (seasonal)'],
            color: 'rose',
        },
    ];

export function WhatWeProvide() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">What We Offer</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
                        Nourishment For All
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        Quality food to feed your family with dignity.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offerings.map((offering, i) => {
                        const Icon = offering.icon;
                        const colors = {
                            amber: {
                                bg: 'bg-amber-50',
                                border: 'border-amber-200',
                                iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-500',
                                itemBg: 'bg-amber-100 text-amber-700',
                            },
                            green: {
                                bg: 'bg-green-50',
                                border: 'border-green-200',
                                iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
                                itemBg: 'bg-green-100 text-green-700',
                            },
                            rose: {
                                bg: 'bg-rose-50',
                                border: 'border-rose-200',
                                iconBg: 'bg-gradient-to-br from-rose-500 to-red-500',
                                itemBg: 'bg-rose-100 text-rose-700',
                            },
                        }[offering.color];

                        return (
                            <motion.div
                                key={offering.title}
                                className={`${colors.bg} ${colors.border} border-2 rounded-3xl p-8 text-center`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                            >
                                <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{offering.title}</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {offering.items.map((item) => (
                                        <span
                                            key={item}
                                            className={`${colors.itemBg} text-sm font-medium px-3 py-1 rounded-full`}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
