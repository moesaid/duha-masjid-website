'use client';

import { Calendar, Clock, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarEvent } from '../_data';

interface EventModalProps {
    event: CalendarEvent | null;
    onClose: () => void;
}

const categoryColors: Record<string, string> = {
    religious: 'bg-emerald-600',
    education: 'bg-blue-900',
    social: 'bg-amber-600',
    youth: 'bg-rose-600'
};

export function EventModal({ event, onClose }: EventModalProps) {
    if (!event) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative z-10"
                >
                    {/* Header */}
                    <div className={`${categoryColors[event.extendedProps.category] || 'bg-slate-800'} p-6 text-white relative`}>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                        >
                            <X size={18} />
                        </button>
                        <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                            {event.extendedProps.category}
                        </span>
                        <h2 className="text-2xl font-bold leading-tight">{event.title}</h2>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Date</h3>
                                    <p className="text-slate-600">
                                        {new Date(event.start).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Time</h3>
                                    <p className="text-slate-600">
                                        {new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        {event.end && ` - ${new Date(event.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Location</h3>
                                    <p className="text-slate-600">{event.extendedProps.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <p className="text-slate-600 leading-relaxed">
                                {event.extendedProps.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
