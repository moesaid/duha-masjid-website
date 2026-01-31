'use client';

import { useState } from 'react';
import { Calendar, User, Phone, FileText, Clock, Check } from 'lucide-react';
import { Input } from '../../../_components/ui/Input';
import { Button } from '../../../_components/Button/Button';
import { Textarea } from '../../../_components/ui/Textarea';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from '../../../_components/ui/Dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../../_components/ui/Select';

interface AppointmentModalProps {
    children: React.ReactNode;
}

export function AppointmentModal({ children }: AppointmentModalProps) {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string>('');

    const timeSlots: Record<string, string[]> = {
        'feb-14': ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'],
        'feb-21': ['9:00 AM', '9:30 AM', '10:15 AM', '11:00 AM', '11:45 AM', '12:30 PM'], // Different slots example
        'feb-28': ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM']
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            setTimeout(() => {
                setOpen(false);
                setSubmitted(false);
            }, 3000);
        }, 1000);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-2xl font-serif text-slate-900">
                        <Calendar className="w-6 h-6 text-emerald-600" />
                        Request Appointment
                    </DialogTitle>
                    <DialogDescription className="text-slate-600 text-base">
                        Schedule a consultation with our medical professionals. Walk-ins are also welcome every Saturday 9:00 AM - 1:00 PM.
                    </DialogDescription>
                </DialogHeader>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Full Name</label>
                                <Input required placeholder="Patient Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Phone Number</label>
                                <Input required type="tel" placeholder="(555) 123-4567" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Preferred Date</label>
                                <Select onValueChange={setSelectedDate}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Saturday" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="feb-14">Saturday, Feb 14th</SelectItem>
                                        <SelectItem value="feb-21">Saturday, Feb 21st</SelectItem>
                                        <SelectItem value="feb-28">Saturday, Feb 28th</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Preferred Time</label>
                                <Select disabled={!selectedDate}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={selectedDate ? "Select Time Slot" : "Choose Date First"} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {selectedDate && timeSlots[selectedDate]?.map((slot) => (
                                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Reason for Visit</label>
                            <Select required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Service Needed" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="general">General Checkup</SelectItem>
                                    <SelectItem value="screening">Health Screening (BP/Sugar)</SelectItem>
                                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                                    <SelectItem value="referral">Referral Request</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Additional Notes</label>
                            <Textarea
                                placeholder="Please briefly describe any symptoms or specific concerns..."
                                className="min-h-[80px]"
                            />
                        </div>

                        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-sm text-emerald-800">
                            <p className="font-semibold mb-1">Confidentiality Assurance:</p>
                            <p className="opacity-90">
                                Your health information is kept strictly confidential. Our services are free of charge for everyone.
                            </p>
                        </div>

                        <Button type="submit" variant="primary" className="w-full h-12 text-lg rounded-full shadow-lg shadow-emerald-600/20">
                            Confirm Request
                        </Button>
                    </form>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                            <Check className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                        <p className="text-slate-600 max-w-xs">
                            We have received your appointment request. Our nurse coordinator will call you shortly to confirm your time slot.
                        </p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
