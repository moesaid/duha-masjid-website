'use client';

import { Calendar, MessageCircle } from 'lucide-react';

export function UpdatesBanner() {
    return (
        <section className="bg-amber-50 border-t border-amber-100 py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="flex items-center gap-3 text-amber-800">
                    <Calendar size={20} />
                    <p className="font-medium text-sm">Program times may change due to prayer times.</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-amber-200 rounded-lg text-sm font-bold text-amber-900 shadow-sm hover:bg-amber-50 transition-colors">
                    <MessageCircle size={16} />
                    Join &lsquo;Weekly Updates&rsquo; Broadcast
                </button>
            </div>
        </section>
    );
}
