'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Users, Heart, Share2, Clock } from 'lucide-react';
import { currentStream, nextBroadcast } from '../_data';

export function StreamPlayer() {
    // For demo purposes, we can toggle this state
    const [isLive, setIsLive] = useState(currentStream.isLive);

    return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Player Wrapper */}
            <div className="relative aspect-video bg-slate-900">
                {isLive ? (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${currentStream.youtubeId}?autoplay=1&mute=1`}
                        title={currentStream.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                        <div className="absolute inset-0 bg-[url('/patterns/noun-islamic-ornament.svg')] opacity-10" />
                        <div className="relative z-10 text-center">
                            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl border border-slate-700">
                                <Radio className="text-emerald-400" size={32} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">Next Broadcast</h2>
                            <p className="text-slate-400 mb-8 max-w-md mx-auto">
                                We are currently offline. Join us for our next scheduled transmission.
                            </p>

                            <div className="inline-flex items-center gap-6 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-2xl border border-slate-700">
                                <div className="text-center">
                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Upcoming</div>
                                    <div className="font-bold text-lg text-emerald-400">{nextBroadcast.title}</div>
                                </div>
                                <div className="h-8 w-px bg-slate-700" />
                                <div className="text-center">
                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Time</div>
                                    <div className="font-bold text-white">{nextBroadcast.time}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                    {isLive ? (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            LIVE
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/90 text-slate-400 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm border border-slate-700">
                            <span className="w-2 h-2 rounded-full bg-slate-500" />
                            OFFLINE
                        </div>
                    )}
                </div>
            </div>

            {/* Controls & Info */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                        {isLive ? currentStream.title : nextBroadcast.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5">
                            <Users size={16} className="text-emerald-600" />
                            {isLive ? `${currentStream.viewers.toLocaleString()} watching` : 'Waiting for broadcast'}
                        </span>
                        {isLive && (
                            <>
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <span>{currentStream.speaker}</span>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-5 py-2.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors flex items-center gap-2 shadow-lg shadow-emerald-600/20">
                        <Heart size={18} />
                        Support Stream
                    </button>
                    <button className="p-2.5 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-xl transition-colors">
                        <Share2 size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
