'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Box } from 'lucide-react';
import { Button } from '../../../_components/Button/Button';

const needs = [
    'Canned Tuna or Salmon',
    'Peanut Butter',
    'Pasta & Rice',
    'Cooking Oil (Vegetable/Canola)',
    'Canned Beans (Chickpeas, Kidney)',
    'Cereal & Oatmeal'
];

export function NeedsList() {
    return (
        <section id="give-help" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-emerald-900 rounded-[2.5rem] overflow-hidden text-white relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />

                    <div className="grid lg:grid-cols-2 gap-12 p-12 md:p-20 relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 border border-emerald-700/50 text-emerald-200 text-sm font-medium mb-6">
                                <Box className="w-4 h-4" />
                                <span>Support The Cause</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Help Stock Our Shelves
                            </h2>
                            <p className="text-emerald-100 mb-8 text-lg max-w-md">
                                We rely on community donations to keep our pantry running. Drop off non-perishable items in the donation bins located in the main lobby.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button href="/modern-ummah/donate" variant="secondary" className="bg-white text-emerald-900 hover:bg-emerald-50 border-transparent">
                                    Monetary Donation
                                </Button>
                                <Button href="/modern-ummah/community/volunteer" variant="outline" className="border-emerald-700 text-emerald-100 hover:bg-emerald-800 hover:text-white">
                                    Volunteer with Us
                                </Button>
                            </div>
                        </div>

                        <div className="bg-emerald-800/30 rounded-2xl p-8 border border-emerald-700/30 backdrop-blur-sm">
                            <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-amber-400" />
                                Most Needed Items
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {needs.map((item, i) => (
                                    <motion.li
                                        key={item}
                                        className="flex items-center gap-3 text-emerald-50"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
