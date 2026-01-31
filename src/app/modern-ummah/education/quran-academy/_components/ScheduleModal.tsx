'use client';

import { Dialog, DialogContent, DialogTitle } from '../../../_components/ui/Dialog';
import { Button } from '../../../_components/Button/Button';
import { Clock, Calendar, X } from 'lucide-react';

interface ScheduleModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    programTitle: string;
}

export function ScheduleModal({ open, onOpenChange, programTitle }: ScheduleModalProps) {
    // Mock schedule data based on program title - in a real app this supports fetching or props
    const getSchedule = () => {
        if (programTitle.includes('Seedlings')) {
            return [
                { day: 'Mon - Thu', time: '4:30 PM - 6:30 PM', activity: 'Qaida & Memorization' },
                { day: 'Friday', time: 'No Class', activity: 'Weekend Break' }
            ];
        } else if (programTitle.includes('Mighty')) {
            return [
                { day: 'Mon - Fri', time: '8:00 AM - 2:00 PM', activity: 'Full Time Hifz' },
                { day: 'Saturday', time: '9:00 AM - 12:00 PM', activity: 'Review Circles' }
            ];
        }
        // Default / Saplings
        return [
            { day: 'Mon - Thu', time: '5:00 PM - 7:30 PM', activity: 'Nazira & Hifz' },
            { day: 'Friday', time: '5:00 PM - 7:00 PM', activity: 'Islamic Studies & Activity' }
        ];
    };

    const schedule = getSchedule();

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md rounded-3xl p-0 border-none overflow-hidden">
                <div className="bg-amber-500 p-6 text-white flex justify-between items-start">
                    <div>
                        <DialogTitle className="text-xl font-serif font-bold">{programTitle}</DialogTitle>
                        <p className="text-amber-100 text-sm mt-1 flex items-center gap-2">
                            <Clock size={14} /> Weekly Schedule
                        </p>
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    {schedule.map((slot, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-800">{slot.day}</div>
                                    <div className="text-xs text-slate-500">{slot.activity}</div>
                                </div>
                            </div>
                            <div className="text-right font-medium text-emerald-600 bg-white px-3 py-1 rounded-lg border border-slate-100 shadow-sm text-sm">
                                {slot.time}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-6 pt-0">
                    <Button onClick={() => onOpenChange(false)} className="w-full bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-xl py-3 font-medium">
                        Close Schedule
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
