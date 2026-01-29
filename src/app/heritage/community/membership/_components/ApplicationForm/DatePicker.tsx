'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import styles from './ApplicationForm.module.scss';

interface DatePickerProps {
    date: Date | undefined;
    onSelect: (date: Date | undefined) => void;
    placeholder?: string;
}

export function DatePicker({ date, onSelect, placeholder = "Select date" }: DatePickerProps) {
    const [open, setOpen] = useState(false);

    const handleSelect = (selectedDate: Date | undefined) => {
        onSelect(selectedDate);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    type="button"
                    className={`${styles.datePickerTrigger} ${!date ? styles.placeholder : ''}`}
                >
                    <CalendarIcon size={18} />
                    <span>{date ? format(date, "MMMM d, yyyy") : placeholder}</span>
                </button>
            </PopoverTrigger>
            <PopoverContent className={styles.calendarPopover} align="start" sideOffset={8}>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleSelect}
                    defaultMonth={date || new Date(2000, 0)}
                    captionLayout="dropdown"
                    fromYear={1920}
                    toYear={new Date().getFullYear()}
                    className={styles.heritageCalendar}
                />
            </PopoverContent>
        </Popover>
    );
}
