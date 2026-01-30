'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, HandHeart, ArrowRight } from 'lucide-react';

const opportunities = [
    { id: 'education', label: 'Education & Teaching' },
    { id: 'events', label: 'Event Planning' },
    { id: 'hospitality', label: 'Hospitality & Food' },
    { id: 'security', label: 'Security & Safety' },
    { id: 'youth', label: 'Youth Mentorship' },
    { id: 'media', label: 'Media & Communications' },
    { id: 'childcare', label: 'Childcare Support' },
    { id: 'maintenance', label: 'Maintenance & Cleaning' },
];

export function SignupForm() {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const toggleInterest = (id: string) => {
        setSelectedInterests((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    return (
        <section className="py-20" id="signup">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Left Side - Benefits */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Ready to Make a Difference?
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Fill out the interest form and we&apos;ll match you with opportunities
                            that fit your schedule and skills. Our volunteer coordinator will
                            reach out within one week.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                                    <HandHeart className="w-5 h-5 text-emerald-600" />
                                </div>
                                <span className="text-slate-700">Earn reward from Allah (SWT)</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-emerald-600" />
                                </div>
                                <span className="text-slate-700">Build lasting friendships</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-emerald-600" />
                                </div>
                                <span className="text-slate-700">Strengthen your community</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <form
                        className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                                    placeholder="(555) 123-4567"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Age Range
                                </label>
                                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all">
                                    <option value="">Select age range</option>
                                    <option value="18-25">18-25 years</option>
                                    <option value="26-35">26-35 years</option>
                                    <option value="36-50">36-50 years</option>
                                    <option value="51+">51+ years</option>
                                </select>
                            </div>
                        </div>

                        {/* Interests */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-700 mb-3">
                                Areas of Interest *
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {opportunities.map((opp) => (
                                    <label
                                        key={opp.id}
                                        className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${selectedInterests.includes(opp.id)
                                                ? 'border-emerald-500 bg-emerald-50'
                                                : 'border-slate-200 hover:border-slate-300'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedInterests.includes(opp.id)}
                                            onChange={() => toggleInterest(opp.id)}
                                            className="sr-only"
                                        />
                                        <div
                                            className={`w-4 h-4 rounded border-2 flex items-center justify-center ${selectedInterests.includes(opp.id)
                                                    ? 'border-emerald-600 bg-emerald-600'
                                                    : 'border-slate-300'
                                                }`}
                                        >
                                            {selectedInterests.includes(opp.id) && (
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                                                    <path d="M10 3L4.5 8.5 2 6" stroke="currentColor" strokeWidth="2" fill="none" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-sm text-slate-700">{opp.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Time Availability *
                                </label>
                                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all">
                                    <option value="">Select availability</option>
                                    <option value="weekday-mornings">Weekday Mornings</option>
                                    <option value="weekday-evenings">Weekday Evenings</option>
                                    <option value="weekends">Weekends</option>
                                    <option value="flexible">Flexible Schedule</option>
                                    <option value="events-only">Events Only</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Hours per Month
                                </label>
                                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all">
                                    <option value="">Select hours</option>
                                    <option value="1-5">1-5 hours</option>
                                    <option value="5-10">5-10 hours</option>
                                    <option value="10-20">10-20 hours</option>
                                    <option value="20+">20+ hours</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Special Skills or Experience
                            </label>
                            <textarea
                                rows={3}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none"
                                placeholder="Tell us about any relevant skills, certifications, or experience..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shadow-emerald-600/20"
                        >
                            <Heart size={18} />
                            Submit Volunteer Interest
                            <ArrowRight size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
