'use client';

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '../../../_components/ui/Dialog';
import { Button } from '../../../_components/Button/Button';
import { faculty } from '../../../../heritage/education/full-time-school/_data/school-data';
import { User, X } from 'lucide-react';
import Image from 'next/image';

interface FacultyModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function FacultyModal({ open, onOpenChange }: FacultyModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-3xl border-none outline-none">
                <div className="sticky top-0 z-20 bg-white px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                    <div>
                        <DialogTitle className="text-2xl font-serif font-bold text-slate-900">Our Faculty</DialogTitle>
                        <p className="text-slate-500 text-sm">Meet the dedicated educators of Al-Duha Academy</p>
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faculty.map((member, idx) => (
                        <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                                {member.image && !member.image.includes('placeholder') ? (
                                    <Image src={member.image} alt={member.name} width={64} height={64} className="object-cover" />
                                ) : (
                                    <User className="text-slate-400 w-8 h-8" />
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">{member.name}</h3>
                                <div className="text-emerald-700 font-medium text-sm">{member.subject}</div>
                                <div className="text-slate-500 text-xs mt-1">{member.degree}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sticky bottom-0 bg-slate-50 px-8 py-6 border-t border-slate-100 flex justify-end">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Close
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
