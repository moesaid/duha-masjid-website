'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Wheat, Apple, Beef } from 'lucide-react';

const offerings = [
    {
        icon: Wheat,
        title: 'Staples',
        description: 'Rice, Flour, Cooking Oil, Sugar, Lentils, and other pantry essentials.'
    },
    {
        icon: Apple,
        title: 'Fresh Produce',
        description: 'Seasonal fruits and vegetables sourced from local farms and donations.'
    },
    {
        icon: Beef,
        title: 'Halal Meat',
        description: "Zabiha chicken and meat when available, ensuring dietary needs are met."
    }
];

export function ServiceInfo() {
    return (
        <>
            {/* What We Provide Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What We Provide</h2>
                        <p className="text-slate-600 text-lg">
                            We strive to offer a balanced variety of nutritious foods to our families.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {offerings.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 mx-auto">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works / Logistics Section */}
            <section id="get-help" className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
                                <Clock className="w-4 h-4" />
                                <span>Weekly Distribution</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How It Works</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                No questions asked. We are here to support our neighbors with open hearts. Simply drive up to our distribution center, and volunteers will load your car.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                                        <Clock size={20} />
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex-1">
                                        <h3 className="font-bold text-slate-900 text-lg">Every Saturday</h3>
                                        <p className="text-emerald-600 font-medium text-lg">8:30 AM - 11:00 AM</p>
                                        <p className="text-slate-500 text-sm mt-1">First come, first served.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex-1">
                                        <h3 className="font-bold text-slate-900 text-lg">Location</h3>
                                        <p className="text-slate-700">Community Center (Back Entrance)</p>
                                        <p className="text-slate-500 text-sm mt-1">Use the rear parking lot for drive-through pickup.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image or Illustration Area */}
                        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                            {/* Placeholder for now or re-use existing image with filter */}
                            <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />
                            {/* Since I cannot invoke generate_image here, I will use a colored div pattern as placeholder illustration */}
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 w-full h-full p-8 flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-4">
                                        <span className="text-4xl">🚗</span>
                                    </div>
                                    <h3 className="text-emerald-800 font-bold text-xl">Drive-Thru Pickup</h3>
                                    <p className="text-emerald-700/80 mt-2 max-w-xs">Safety and dignity are our priorities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
