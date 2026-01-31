'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../../../_components';
import { Button, Input, Textarea } from '../../../_components';
import { Heart, CheckCircle2 } from 'lucide-react';

interface ShahadaModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ShahadaModal({ open, onOpenChange }: ShahadaModalProps) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, we would send the data here
        setSubmitted(true);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-2xl font-serif text-emerald-800">
                        <Heart className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                        Take Your Shahada
                    </DialogTitle>
                    <DialogDescription>
                        We are honored to be part of your journey. Please fill out this form, and our Imam will contact you to arrange your declaration of faith.
                    </DialogDescription>
                </DialogHeader>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name</label>
                                <Input id="name" placeholder="Your name" required />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                    <Input id="email" type="email" placeholder="example@email.com" required />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone</label>
                                    <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <label htmlFor="preferred-time" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Preferred Time (Optional)</label>
                                <Input id="preferred-time" placeholder="e.g., Friday after Jumuah, Weekends..." />
                            </div>

                            <div className="flex items-start gap-2 pt-2">
                                <input
                                    type="checkbox"
                                    id="questions"
                                    className="mt-1 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
                                />
                                <label htmlFor="questions" className="text-sm text-slate-600 leading-tight">
                                    I have some questions I'd like to discuss with the Imam before taking my Shahada.
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="primary">
                                Submit Request
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Mubarak!</h3>
                        <p className="text-slate-600 max-w-sm mx-auto">
                            We have received your request. Using the contact information provided, our team will reach out to you shortly to schedule your Shahada.
                        </p>
                        <Button onClick={() => onOpenChange(false)} className="mt-6">
                            Close
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
