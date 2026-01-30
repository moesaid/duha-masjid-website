'use client';

import { libraryInfo } from '../_data';
import { MapPin, Clock, Info } from 'lucide-react';

export function LibraryInfo() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col lg:flex-row justify-between items-center gap-12 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    />

                    <div className="relative z-10 text-center lg:text-left">
                        <h2 className="text-3xl font-serif font-bold mb-6">Visit the Library</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 justify-center lg:justify-start">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-lg">{libraryInfo.location}</span>
                            </div>
                            <div className="flex items-center gap-4 justify-center lg:justify-start">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-lg">{libraryInfo.hours}</p>
                                    <p className="text-slate-400 text-sm">{libraryInfo.staffedHours}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-3 gap-8 md:gap-16 border-t lg:border-t-0 lg:border-l border-slate-800 pt-8 lg:pt-0 lg:pl-16">
                        {libraryInfo.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
