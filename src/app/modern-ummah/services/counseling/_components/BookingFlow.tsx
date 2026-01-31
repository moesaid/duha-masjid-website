'use client';

import { useState } from 'react';
import { User, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../../../_components';
import { guidanceServices, counselors, timeSlots } from '../_data';
import { cn } from '@/lib/utils';

export function BookingFlow() {
    const [bookingStep, setBookingStep] = useState(1);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedCounselor, setSelectedCounselor] = useState<number | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');

    // Hardcoded dates logic same as heritage
    const getAvailableDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 1; i <= 7; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            if (d.getDay() >= 1 && d.getDay() <= 4) { // Mon-Thu
                dates.push({
                    date: d,
                    label: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
                });
            }
        }
        return dates;
    };
    const availableDates = getAvailableDates();

    const canProceed = () => {
        if (bookingStep === 1) return !!selectedService;
        if (bookingStep === 2) return !!selectedCounselor;
        if (bookingStep === 3) return !!selectedDate && !!selectedTime;
        return true;
    };

    const steps = ['Service', 'Counselor', 'Time', 'Confirm'];

    return (
        <section id="booking" className="py-24 bg-white scroll-mt-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Book a Session</h2>
                    <p className="text-slate-600">Private consultation with our qualified counselors</p>
                </div>

                {/* Stepper */}
                <div className="flex justify-between items-center relative mb-16 mx-auto max-w-xl">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 -z-10 rounded-full" />
                    <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-600 -z-10 rounded-full transition-all duration-500 ease-in-out"
                        style={{ width: `${((bookingStep - 1) / 3) * 100}%` }}
                    />

                    {steps.map((step, idx) => {
                        const isCompleted = bookingStep > idx + 1;
                        const isActive = bookingStep === idx + 1;

                        return (
                            <div key={step} className="flex flex-col items-center gap-2">
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-4 transition-all duration-300 bg-white shadow-sm",
                                    isActive ? "border-emerald-600 text-emerald-700 scale-110" :
                                        isCompleted ? "border-emerald-600 bg-emerald-600 text-white" :
                                            "border-slate-200 text-slate-400"
                                )}>
                                    {isCompleted ? <CheckCircle size={18} /> : idx + 1}
                                </div>
                                <span className={cn(
                                    "text-xs font-semibold uppercase tracking-wider transition-colors duration-300",
                                    isActive ? "text-emerald-700" :
                                        isCompleted ? "text-emerald-600" :
                                            "text-slate-400"
                                )}>
                                    {step}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
                    {/* Step 1: Service */}
                    {bookingStep === 1 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">What guidance do you seek?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {guidanceServices.map((s) => (
                                    <button
                                        key={s.id}
                                        className={cn(
                                            "flex items-center p-4 rounded-xl border-2 transition-all text-left group hover:shadow-md",
                                            selectedService === s.id
                                                ? "border-emerald-600 bg-emerald-50/50"
                                                : "border-slate-200 bg-white hover:border-emerald-200"
                                        )}
                                        onClick={() => setSelectedService(s.id)}
                                    >
                                        <div className={cn(
                                            "w-3 h-3 rounded-full mr-4 shrink-0 transition-colors",
                                            selectedService === s.id ? "bg-emerald-600" : "bg-slate-200 group-hover:bg-emerald-200"
                                        )} />
                                        <span className={cn(
                                            "font-medium",
                                            selectedService === s.id ? "text-emerald-900" : "text-slate-700"
                                        )}>{s.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Counselor */}
                    {bookingStep === 2 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Choose your counselor</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {counselors.map((c) => (
                                    <button
                                        key={c.id}
                                        className={cn(
                                            "flex flex-col items-center text-center p-6 rounded-xl border-2 transition-all hover:shadow-md h-full",
                                            selectedCounselor === c.id
                                                ? "border-emerald-600 bg-emerald-50/50"
                                                : "border-slate-200 bg-white hover:border-emerald-200"
                                        )}
                                        onClick={() => setSelectedCounselor(c.id)}
                                    >
                                        <div className={cn(
                                            "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors",
                                            selectedCounselor === c.id ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-400 group-hover:bg-emerald-50"
                                        )}>
                                            <User size={32} />
                                        </div>
                                        <span className="font-bold text-slate-900 mb-1">{c.name}</span>
                                        <span className="text-sm text-slate-500">{c.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Time */}
                    {bookingStep === 3 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Select Date & Time</h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-3 text-center uppercase tracking-wide">Available Dates</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {availableDates.map((d) => (
                                            <button
                                                key={d.label}
                                                className={cn(
                                                    "py-3 px-2 rounded-lg text-sm font-medium border-2 transition-all",
                                                    selectedDate === d.label
                                                        ? "border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-900/20"
                                                        : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300"
                                                )}
                                                onClick={() => setSelectedDate(d.label)}
                                            >
                                                {d.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className={selectedDate ? "opacity-100 transition-opacity" : "opacity-50 pointer-events-none"}>
                                    <label className="block text-sm font-semibold text-slate-700 mb-3 text-center uppercase tracking-wide">Available Times</label>
                                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                                        {timeSlots.map((t) => (
                                            <button
                                                key={t}
                                                className={cn(
                                                    "py-2 px-1 rounded-lg text-sm transition-all",
                                                    selectedTime === t
                                                        ? "bg-slate-800 text-white shadow-lg"
                                                        : "bg-white border border-slate-200 text-slate-600 hover:border-slate-400"
                                                )}
                                                onClick={() => setSelectedTime(t)}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Confirm */}
                    {bookingStep === 4 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Confirm Appointment</h3>
                            <p className="text-slate-500 mb-8">Please review your booking details below.</p>

                            <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 max-w-sm mx-auto text-left shadow-sm">
                                <div className="p-4 flex justify-between items-center bg-slate-50/50">
                                    <span className="text-sm text-slate-500 font-medium">Service</span>
                                    <span className="text-sm font-bold text-slate-900">{guidanceServices.find(s => s.id === selectedService)?.title}</span>
                                </div>
                                <div className="p-4 flex justify-between items-center">
                                    <span className="text-sm text-slate-500 font-medium">Counselor</span>
                                    <span className="text-sm font-bold text-slate-900">{counselors.find(c => c.id === selectedCounselor)?.name}</span>
                                </div>
                                <div className="p-4 flex justify-between items-center bg-slate-50/50">
                                    <span className="text-sm text-slate-500 font-medium">Date</span>
                                    <span className="text-sm font-bold text-slate-900">{selectedDate}</span>
                                </div>
                                <div className="p-4 flex justify-between items-center">
                                    <span className="text-sm text-slate-500 font-medium">Time</span>
                                    <span className="text-sm font-bold text-slate-900">{selectedTime}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-100">
                        <Button
                            variant="ghost"
                            onClick={() => setBookingStep(b => b - 1)}
                            disabled={bookingStep === 1}
                            className={bookingStep === 1 ? "invisible" : ""}
                        >
                            <ArrowLeft size={16} className="mr-2" />
                            Back
                        </Button>

                        <Button
                            variant="primary"
                            disabled={!canProceed()}
                            onClick={() => {
                                if (bookingStep < 4) setBookingStep(b => b + 1);
                                else alert('Booking Confirmed!');
                            }}
                            className="min-w-[140px]"
                        >
                            {bookingStep === 4 ? 'Confirm Booking' : 'Continue'}
                            {bookingStep < 4 && <ArrowRight size={16} className="ml-2" />}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
