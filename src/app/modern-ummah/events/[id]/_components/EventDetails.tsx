'use client';

import { CheckCircle2, Ticket } from 'lucide-react';
import { EventData } from '../_data';
import Image from 'next/image';

interface EventDetailsProps {
    event: EventData;
}

export function EventDetails({ event }: EventDetailsProps) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">About the Event</h2>
                            <div
                                className="prose prose-lg prose-slate text-slate-600 leading-relaxed max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-a:text-emerald-600 prose-img:rounded-2xl"
                                dangerouslySetInnerHTML={{ __html: event.description }}
                            />
                        </div>

                        {/* Speakers */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Guest Speakers</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {event.speakers.map((speaker, idx) => (
                                    <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                                        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center overflow-hidden shrink-0">
                                            {speaker.image ? (
                                                <Image src={speaker.image} alt={speaker.name} width={80} height={80} className="object-cover" />
                                            ) : (
                                                <span className="text-2xl font-bold text-emerald-700">{speaker.name.charAt(0)}</span>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900">{speaker.name}</h4>
                                            <p className="text-emerald-600 font-medium text-sm mb-2">{speaker.title}</p>
                                            <p className="text-sm text-slate-500 leading-snug">{speaker.bio}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Schedule */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Event Schedule</h2>
                            <div className="space-y-6 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-200">
                                {event.schedule.map((item, idx) => (
                                    <div key={idx} className="relative flex gap-8">
                                        <div className="w-10 h-10 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center shrink-0 z-10">
                                            <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                        </div>
                                        <div className="pt-2 pb-6">
                                            <span className="text-emerald-600 font-bold text-sm tracking-wide">{item.time}</span>
                                            <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-500">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Logistics Card */}
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">Event Logistics</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                    <div>
                                        <span className="block font-bold text-slate-900 text-sm">Dress Code</span>
                                        <span className="text-slate-500 text-sm">{event.logistics.dressCode}</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                    <div>
                                        <span className="block font-bold text-slate-900 text-sm">Parking</span>
                                        <span className="text-slate-500 text-sm">{event.logistics.parking}</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                    <div>
                                        <span className="block font-bold text-slate-900 text-sm">Childcare</span>
                                        <span className="text-slate-500 text-sm">{event.logistics.childcare}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Pricing Card */}
                        <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-6 font-serif">Ticket Pricing</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-end pb-4 border-b border-white/10">
                                        <span className="font-medium text-slate-300">General Information</span>
                                        <span className="text-2xl font-bold">${event.pricing.adult}</span>
                                    </div>
                                    <div className="flex justify-between items-end pb-4 border-b border-white/10">
                                        <span className="font-medium text-slate-300">Child (5-12)</span>
                                        <span className="text-2xl font-bold">${event.pricing.child}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                    <Ticket size={16} />
                                    <span>Proceeds go to Masjid Expansion</span>
                                </div>
                            </div>

                            {/* Decorative blobs */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -mr-10 -mt-10" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -ml-10 -mb-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
