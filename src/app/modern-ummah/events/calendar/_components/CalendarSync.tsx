'use client';

import { Calendar, Download, ExternalLink } from 'lucide-react';

export function CalendarSync() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Stay in Sync</h2>
                <p className="text-slate-600 mb-8">
                    Never miss a prayer time or community gathering. Subscribe to have events automatically updated on your device.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-medium">
                        <ExternalLink size={18} />
                        Google Calendar
                    </button>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium">
                        <Download size={18} />
                        Download .ics
                    </button>
                </div>
            </div>
        </section>
    );
}
