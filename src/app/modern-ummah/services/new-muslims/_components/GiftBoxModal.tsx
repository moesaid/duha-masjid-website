'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../../../_components';
import { Button, Input, Textarea } from '../../../_components';
import { Gift, CheckCircle2 } from 'lucide-react';

interface GiftBoxModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function GiftBoxModal({ open, onOpenChange }: GiftBoxModalProps) {
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
                    <DialogTitle className="flex items-center gap-2 text-2xl font-serif text-amber-800">
                        <Gift className="w-6 h-6 text-amber-600 fill-amber-100" />
                        Request Welcome Gift
                    </DialogTitle>
                    <DialogDescription>
                        Our New Muslim Welcome Kit includes a Quran, prayer rug, and helpful resources to get you started.
                    </DialogDescription>
                </DialogHeader>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label htmlFor="gift-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name</label>
                                <Input id="gift-name" placeholder="Your name" required />
                            </div>

                            <div className="grid gap-2">
                                <label htmlFor="gift-email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                <Input id="gift-email" type="email" placeholder="example@email.com" required />
                            </div>

                            <div className="grid gap-2">
                                <label htmlFor="address" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mailing Address</label>
                                <Textarea
                                    id="address"
                                    placeholder="Please provide your full mailing address so we can ship your gift box."
                                    className="min-h-[100px]"
                                    required
                                />
                            </div>

                            <div className="flex items-start gap-2 pt-2 bg-slate-50 p-3 rounded-lg">
                                <input
                                    type="checkbox"
                                    id="new-muslim-verify"
                                    required
                                    className="mt-1 rounded border-slate-300 text-amber-600 focus:ring-amber-600"
                                />
                                <label htmlFor="new-muslim-verify" className="text-sm text-slate-600 leading-tight">
                                    I confirm that I am a new Muslim (or recently returned to the faith) living in the local area.
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="primary" className="bg-amber-600 hover:bg-amber-700 text-white">
                                Request Gift
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-8 h-8 text-amber-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">It's on the way!</h3>
                        <p className="text-slate-600 max-w-sm mx-auto">
                            Thank you! We've received your request and will prepare your Welcome Gift Box for shipment or pickup.
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
