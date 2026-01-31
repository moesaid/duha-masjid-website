import Link from 'next/link';
import { Calendar, Bell, Download } from 'lucide-react';

export function FooterActions() {
    return (
        <section className="px-4 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-md transition-all group"
                    >
                        <Calendar className="w-5 h-5 text-emerald-600" />
                        <span className="font-medium text-slate-700 group-hover:text-slate-900">Monthly Calendar</span>
                    </Link>
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-md transition-all group"
                    >
                        <Bell className="w-5 h-5 text-emerald-600" />
                        <span className="font-medium text-slate-700 group-hover:text-slate-900">Subscribe to Alerts</span>
                    </Link>
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-md transition-all group"
                    >
                        <Download className="w-5 h-5 text-emerald-600" />
                        <span className="font-medium text-slate-700 group-hover:text-slate-900">Download PDF</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
