'use client';

import { useState } from 'react';
import { Moon, Calendar, User, Phone, FileText } from 'lucide-react';
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

interface ItikafRegistrationModalProps {
    children: React.ReactNode;
}

export function ItikafRegistrationModal({ children }: ItikafRegistrationModalProps) {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            setTimeout(() => {
                setOpen(false);
                setSubmitted(false);
            }, 2000);
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
                        <Moon className="w-6 h-6 text-amber-600 fill-current" />
                        I'tikaf Registration
                    </DialogTitle>
                    <DialogDescription className="text-slate-600 text-base">
                        Please fill out the form below to reserve your spot for I'tikaf.
                        Space is limited to ensure a spiritual atmosphere.
                    </DialogDescription>
                </DialogHeader>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Full Name</label>
                                <Input required placeholder="Brother / Sister Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Phone Number</label>
                                <Input required type="tel" placeholder="(555) 123-4567" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Email Address</label>
                            <Input required type="email" placeholder="email@example.com" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Age Group</label>
                                <Select required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Age" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="18-25">18-25 Years</SelectItem>
                                        <SelectItem value="26-40">26-40 Years</SelectItem>
                                        <SelectItem value="40+">40+ Years</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Duration</label>
                                <Select required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Commitment" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="10-nights">Full 10 Nights (Recommended)</SelectItem>
                                        <SelectItem value="last-5">Last 5 Nights</SelectItem>
                                        <SelectItem value="weekend">Weekend Only</SelectItem>
                                        <SelectItem value="odd-nights">Odd Nights Only</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="border-t border-slate-100 my-4" />

                        <div className="space-y-4">
                            <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                                <User className="w-4 h-4 text-emerald-600" />
                                Emergency Contact
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Contact Name</label>
                                    <Input required placeholder="Relative/Spouse Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Contact Phone</label>
                                    <Input required type="tel" placeholder="(555) 987-6543" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-slate-400" />
                                Medical Conditions / Allergies
                            </label>
                            <Textarea
                                placeholder="Please list any medical conditions, allergies, or dietary restrictions..."
                                className="min-h-[80px]"
                            />
                        </div>

                        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-800">
                            <p className="font-semibold mb-1">Important Note:</p>
                            <ul className="list-disc list-inside space-y-1 opacity-90">
                                <li>Participants must be 18+ (or accompanied by guardian).</li>
                                <li>Sleeping bags/bedding must be removed daily by 10 AM.</li>
                                <li>Maintain silence during Quran circles and lectures.</li>
                            </ul>
                        </div>

                        <Button type="submit" variant="primary" className="w-full h-12 text-lg rounded-full shadow-lg shadow-amber-600/20 bg-amber-600 hover:bg-amber-700 border-amber-500">
                            Submit Registration
                        </Button>
                    </form>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                            <CheckIcon className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Registration Received</h3>
                        <p className="text-slate-600 max-w-xs">
                            May Allah accept your intention. We will contact you via email with confirmation details shortly.
                        </p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
