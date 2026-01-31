'use client';

import { Dialog, DialogContent, DialogTitle } from '../../../_components/ui/Dialog';
import { Button } from '../../../_components/Button/Button';
import { QrCode, X } from 'lucide-react';

interface CircleModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function CircleModal({ open, onOpenChange }: CircleModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-sm rounded-3xl p-8 border-none flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mb-6">
                    <QrCode size={32} />
                </div>

                <DialogTitle className="text-2xl font-serif font-bold text-slate-900 mb-2">Join the Circle</DialogTitle>
                <p className="text-slate-600 mb-8">
                    Scan the QR code below to join our exclusive Sisters' WhatsApp group for updates and halaqas.
                </p>

                <div className="bg-white p-4 rounded-2xl border-2 border-slate-100 mb-8 shadow-sm">
                    {/* Placeholder for QR Code - using a div for now or an image if available */}
                    <div className="w-48 h-48 bg-slate-900 flex items-center justify-center rounded-xl text-white/50 text-xs text-center border-4 border-white">
                        QR CODE PLACEHOLDER
                    </div>
                </div>

                <Button onClick={() => onOpenChange(false)} className="w-full bg-slate-100 text-slate-600 hover:bg-slate-200">
                    Close
                </Button>
            </DialogContent>
        </Dialog>
    );
}
