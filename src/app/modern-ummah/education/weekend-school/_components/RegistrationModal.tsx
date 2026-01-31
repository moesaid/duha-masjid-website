'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '../../../_components/ui/Dialog';
import { Button } from '../../../_components/Button/Button';
import { Input } from '../../../_components/ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../_components/ui/Select';
import { DatePicker } from '../../../_components/ui/DatePicker';
import { User, Mail, Phone, ChevronRight, School } from 'lucide-react';

interface RegistrationModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function RegistrationModal({ open, onOpenChange }: RegistrationModalProps) {
    const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
    const [gradeLevel, setGradeLevel] = useState('');

    const gradeOptions = [
        { value: 'prek', label: 'Pre-K (Ages 4-5)' },
        { value: 'level1', label: 'Level 1 (Ages 6-7)' },
        { value: 'level2', label: 'Level 2 (Ages 8-9)' },
        { value: 'level3', label: 'Level 3 (Ages 10-11)' },
        { value: 'level4', label: 'Level 4 (Ages 12-13)' },
        { value: 'youth', label: 'Youth Group (Ages 14+)' }
    ];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-3xl border-none outline-none">
                {/* Header */}
                <div className="sticky top-0 z-20 bg-amber-600 text-white px-8 py-6 flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        <School className="w-6 h-6 text-amber-100" />
                    </div>
                    <div>
                        <DialogTitle className="text-2xl font-serif font-bold">Weekend School Registration</DialogTitle>
                        <p className="text-amber-100/90 text-sm">Fall 2026 Semester</p>
                    </div>
                </div>

                {/* Form */}
                <form className="p-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Student Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Student Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">First Name *</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                    <Input placeholder="Student's first name" className="pl-10 h-12 rounded-xl" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Last Name *</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                    <Input placeholder="Student's last name" className="pl-10 h-12 rounded-xl" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Date of Birth *</label>
                                <DatePicker
                                    date={dateOfBirth}
                                    setDate={setDateOfBirth}
                                    showYearSelect={true}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Grade Level *</label>
                                <Select value={gradeLevel} onValueChange={setGradeLevel}>
                                    <SelectTrigger className="h-12 rounded-xl">
                                        <SelectValue placeholder="Select Level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {gradeOptions.map((opt) => (
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
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Parent/Guardian Contact</h3>
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

                    {/* Footer */}
                    <div className="bg-slate-50 -m-8 mt-4 p-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-slate-600 text-sm bg-white px-4 py-2 rounded-lg border border-slate-200">
                            <strong>Registration Fee:</strong> $150 per student
                        </p>
                        <Button type="submit" className="w-full md:w-auto px-8 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg shadow-amber-600/20">
                            Proceed to Payment
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
