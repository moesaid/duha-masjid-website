'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import styles from './FormDatePicker.module.scss';

interface FormDatePickerProps {
    date?: Date;
    onSelect?: (date: Date | undefined) => void;
    label?: string;
    placeholder?: string;
    required?: boolean;
    /** For appointment booking - restrict to future dates */
    minDate?: Date;
    maxDate?: Date;
    /** Show caption dropdown for birth dates */
    captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
    fromYear?: number;
    toYear?: number;
}

export function FormDatePicker({
    date,
    onSelect,
    label,
    placeholder = "Select date",
    required = false,
    minDate,
    maxDate,
    captionLayout = 'label',
    fromYear,
    toYear,
}: FormDatePickerProps) {
    const [open, setOpen] = useState(false);

    const handleSelect = (selectedDate: Date | undefined) => {
        onSelect?.(selectedDate);
        setOpen(false);
    };

    return (
        <div className={styles.datePickerGroup}>
            {label && (
                <label className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
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
                        defaultMonth={date || minDate || new Date()}
                        captionLayout={captionLayout}
                        fromYear={fromYear}
                        toYear={toYear}
                        disabled={minDate ? { before: minDate } : undefined}
                        className={styles.heritageCalendar}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
