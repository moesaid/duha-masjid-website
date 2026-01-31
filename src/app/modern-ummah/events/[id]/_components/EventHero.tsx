'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Share2, Check } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../../../_components/Button/Button';
import { EventData } from '../_data';
import { motion } from 'framer-motion';

interface EventHeroProps {
    event: EventData;
    onReserve: () => void;
}

export function EventHero({ event, onReserve }: EventHeroProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: event.title,
            text: `${event.title} - ${event.subtitle}`,
            url: window.location.href,
        };

        try {
            if (navigator.share && navigator.canShare(shareData)) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    return (
        <section className="relative min-h-[85vh] flex items-end justify-start overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={event.promoVideoPoster}
                    alt={event.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    {/* Tags */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                            Featured Event
                        </span>
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs font-bold uppercase tracking-wider rounded-full">
                            {event.status}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
                        {event.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 font-light mb-10 max-w-2xl">
                        {event.subtitle}: {event.tagline}
                    </p>

                    {/* Meta Data */}
                    <div className="flex flex-wrap gap-y-4 gap-x-8 mb-10 text-white/90">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider opacity-70">Date</p>
                                <p className="font-semibold">{event.date}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider opacity-70">Time</p>
                                <p className="font-semibold">{event.time}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider opacity-70">Location</p>
                                <p className="font-semibold">{event.venue}</p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            variant="primary"
                            className="h-14 px-8 text-lg rounded-full shadow-lg shadow-emerald-500/20 w-fit"
                            onClick={onReserve}
                        >
                            Get Tickets Now
                        </Button>
                        <Button
                            variant="outline"
                            className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/10 w-fit bg-transparent backdrop-blur-sm"
                            onClick={handleShare}
                        >
                            {isCopied ? (
                                <>
                                    <Check className="w-5 h-5 mr-2" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Share2 className="w-5 h-5 mr-2" />
                                    Share Event
                                </>
                            )}
                        </Button>
                    </div>
                </motion.div>
            </div >
        </section >
    );
}
