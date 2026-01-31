'use client';

import { MapPin, Clock, ShieldCheck } from 'lucide-react';

export function PatientInfo() {
    return (
        <section className="py-20 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Clinic Hours</h3>
                        <p className="text-slate-600">Saturdays: 9 AM - 1 PM</p>
                        <p className="text-sm text-slate-500 mt-2">Pediatrics: 1st Saturday of Month</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">100% Free Care</h3>
                        <p className="text-slate-600">No insurance required.</p>
                        <p className="text-sm text-slate-500 mt-2">Open to all faiths & backgrounds.</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
                        <p className="text-slate-600">Community Center (Side Door B)</p>
                        <p className="text-sm text-slate-500 mt-2">Bus #55 stops in front.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
