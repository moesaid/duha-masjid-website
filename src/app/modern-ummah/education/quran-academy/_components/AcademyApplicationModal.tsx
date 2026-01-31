'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '../../../_components/ui/Dialog';
import { Button } from '../../../_components/Button/Button';
import { Input } from '../../../_components/ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../_components/ui/Select';
import { Textarea } from '../../../_components/ui/Textarea';
import { BookOpen, User, Mail, Phone, ChevronRight } from 'lucide-react';

interface AcademyApplicationModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function AcademyApplicationModal({ open, onOpenChange }: AcademyApplicationModalProps) {
    const [program, setProgram] = useState('');

    const programs = [
        { value: 'seedlings', label: 'Seedlings (Ages 5-8)' },
        { value: 'saplings', label: 'Saplings (Ages 9-12)' },
        { value: 'mighty', label: 'Mighty Trees (Ages 13+)' }
    ];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-3xl border-none outline-none">
                {/* Header */}
                <div className="sticky top-0 z-20 bg-amber-600 text-white px-8 py-6 flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        <BookOpen className="w-6 h-6 text-amber-100" />
                    </div>
                    <div>
                        <DialogTitle className="text-2xl font-serif font-bold">Quran Academy Admission</DialogTitle>
                        <p className="text-amber-100/90 text-sm">Fall 2026 Enrollment</p>
                    </div>
                </div>

                {/* Form */}
                <form className="p-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Student Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Student Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Student Name *</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                    <Input placeholder="Full name" className="pl-10 h-12 rounded-xl" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Age *</label>
                                <Input type="number" placeholder="Student age" className="h-12 rounded-xl" required />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-900">Program Preference *</label>
                                <Select value={program} onValueChange={setProgram}>
                                    <SelectTrigger className="h-12 rounded-xl">
                                        <SelectValue placeholder="Select Program" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {programs.map((opt) => (
                                            <SelectItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Parent Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Parent/Guardian Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Parent Name *</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                    <Input placeholder="Full name" className="pl-10 h-12 rounded-xl" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Email Address *</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                    <Input type="email" placeholder="email@example.com" className="pl-10 h-12 rounded-xl" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Phone Number *</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                    <Input type="tel" placeholder="(555) 123-4567" className="pl-10 h-12 rounded-xl" required />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Background</h3>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-900">Previous Quran Education & Notes</label>
                            <Textarea
                                placeholder="Describe any previous memorization or reading experience..."
                                className="min-h-[100px] rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-slate-50 -m-8 mt-4 p-8 border-t border-slate-100 flex justify-end">
                        <Button type="submit" className="w-full md:w-auto px-8 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg shadow-amber-600/20">
                            Submit Application
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
