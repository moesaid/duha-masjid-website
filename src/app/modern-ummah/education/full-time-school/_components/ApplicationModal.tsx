'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '../../../_components/ui/Dialog';
import { Button } from '../../../_components/Button/Button';
import { Input } from '../../../_components/ui/Input';
import { Textarea } from '../../../_components/ui/Textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../_components/ui/Select';
import { DatePicker } from '../../../_components/ui/DatePicker';
import { Shield, ChevronRight, User, Mail, Phone } from 'lucide-react';

interface ApplicationModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ApplicationModal({ open, onOpenChange }: ApplicationModalProps) {
    const [gradeLevel, setGradeLevel] = useState('');
    const [relationship, setRelationship] = useState('');
    const [howHeard, setHowHeard] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);

    // Build grade options
    const gradeOptions = [
        { value: 'prek', label: 'Pre-K (Ages 3-4)' },
        { value: 'k', label: 'Kindergarten' },
        ...Array.from({ length: 12 }, (_, i) => ({
            value: String(i + 1),
            label: `Grade ${i + 1}`
        })),
        { value: 'hifz', label: 'Hifz Program' }
    ];

    const relationshipOptions = [
        { value: 'mother', label: 'Mother' },
        { value: 'father', label: 'Father' },
        { value: 'guardian', label: 'Legal Guardian' }
    ];

    const howHeardOptions = [
        { value: 'referral', label: 'Friend/Family Referral' },
        { value: 'masjid', label: 'Masjid Announcement' },
        { value: 'social', label: 'Social Media' },
        { value: 'website', label: 'Website' },
        { value: 'other', label: 'Other' }
    ];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto p-0 gap-0 rounded-3xl border-none outline-none">
                {/* Header */}
                <div className="sticky top-0 z-20 bg-slate-900 text-white px-8 py-6 flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        <Shield className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <DialogTitle className="text-2xl font-serif font-bold">School Application</DialogTitle>
                        <p className="text-emerald-200/80 text-sm">2026-2027 Academic Year</p>
                    </div>
                </div>

                {/* Form */}
                <form className="p-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Student Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Student Information</h3>
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
                                <label className="text-sm font-medium text-slate-900">Applying for Grade *</label>
                                <Select value={gradeLevel} onValueChange={setGradeLevel} required>
                                    <SelectTrigger className="h-12 rounded-xl">
                                        <SelectValue placeholder="Select Grade Level" />
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
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Parent/Guardian Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Parent/Guardian Name *</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                    <Input placeholder="Full name" className="pl-10 h-12 rounded-xl" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Relationship *</label>
                                <Select value={relationship} onValueChange={setRelationship}>
                                    <SelectTrigger className="h-12 rounded-xl">
                                        <SelectValue placeholder="Select Relationship" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {relationshipOptions.map((opt) => (
                                            <SelectItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
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
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Additional Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">How did you hear about us?</label>
                                <Select value={howHeard} onValueChange={setHowHeard}>
                                    <SelectTrigger className="h-12 rounded-xl">
                                        <SelectValue placeholder="Select an option" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {howHeardOptions.map((opt) => (
                                            <SelectItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-900">Additional Notes</label>
                                <Textarea placeholder="Any additional information you'd like to share..." className="min-h-[100px] rounded-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-slate-50 -m-8 mt-4 p-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-slate-600 text-sm bg-white px-4 py-2 rounded-lg border border-slate-200">
                            <strong>Application Fee:</strong> $150 (Non-Refundable)
                        </p>
                        <Button type="submit" variant="primary" className="w-full md:w-auto px-8 h-12 rounded-full shadow-lg shadow-emerald-500/20">
                            Submit Application
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
