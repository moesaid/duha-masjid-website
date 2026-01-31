"use client"

import * as React from "react"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addMonths, subMonths, isSameDay, isBefore, startOfToday, isToday } from "date-fns"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./Popover"

// --- Custom Calendar Component (Matches Input Styling) ---
// --- Custom Calendar Component (Matches Input Styling) ---
interface InternalCalendarProps {
    selectedDate: Date | undefined;
    onSelectDate: (date: Date | undefined) => void;
    minDate?: Date;
    showYearSelect?: boolean;
}

function InternalCalendar({ selectedDate, onSelectDate, minDate, showYearSelect }: InternalCalendarProps) {
    const [currentMonth, setCurrentMonth] = React.useState(selectedDate ? startOfMonth(selectedDate) : startOfMonth(new Date()));
    const today = startOfToday();

    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(currentMonth),
        end: endOfMonth(currentMonth),
    });

    const firstDayOfMonth = getDay(startOfMonth(currentMonth));
    const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

    const isDisabled = (date: Date) => {
        if (minDate && isBefore(date, minDate)) return true;
        return false;
    };

    const isSelected = (date: Date) => selectedDate && isSameDay(date, selectedDate);

    const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

    const handleYearChange = (year: string) => {
        const newDate = new Date(currentMonth);
        newDate.setFullYear(parseInt(year));
        setCurrentMonth(newDate);
    };

    // Generate years (1900 to current year + 5)
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1900 + 6 }, (_, i) => currentYear + 5 - i);

    const handleDayClick = (date: Date) => {
        if (!isDisabled(date)) {
            onSelectDate(date);
        }
    };

    return (
        <div className="p-4 w-[280px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <button
                    onClick={handlePrevMonth}
                    type="button"
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-slate-900">
                        {format(currentMonth, 'MMMM')}
                    </span>
                    {showYearSelect ? (
                        <select
                            value={currentMonth.getFullYear()}
                            onChange={(e) => handleYearChange(e.target.value)}
                            className="text-sm font-semibold text-slate-900 bg-transparent cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded p-0.5"
                        >
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    ) : (
                        <span className="text-sm font-semibold text-slate-900">
                            {format(currentMonth, 'yyyy')}
                        </span>
                    )}
                </div>

                <button
                    onClick={handleNextMonth}
                    type="button"
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-0 mb-1">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                    <div key={day} className="text-center text-[11px] font-medium text-slate-400 py-1.5">
                        {day}
                    </div>
                ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-0">
                {emptyDays.map((_, index) => (
                    <div key={`empty-${index}`} className="h-9" />
                ))}

                {daysInMonth.map((date) => {
                    const disabled = isDisabled(date);
                    const selected = isSelected(date);
                    const todayDate = isToday(date);

                    return (
                        <button
                            key={date.toISOString()}
                            type="button"
                            onClick={() => handleDayClick(date)}
                            disabled={disabled}
                            className={cn(
                                "h-9 w-full rounded-md text-sm transition-colors",
                                "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1",
                                // Default
                                !disabled && !selected && "text-slate-700 hover:bg-slate-100",
                                // Today ring
                                todayDate && !selected && "font-semibold text-emerald-600",
                                // Selected
                                selected && "bg-emerald-600 text-white font-medium",
                                // Disabled
                                disabled && "text-slate-300 cursor-not-allowed"
                            )}
                        >
                            {format(date, 'd')}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

// --- DatePicker Interface ---
interface DatePickerProps {
    date?: Date
    setDate: (date: Date | undefined) => void
    placeholder?: string
    className?: string
    disabled?: boolean
    minDate?: Date
    showYearSelect?: boolean
}

export function DatePicker({
    date,
    setDate,
    placeholder = "Select date",
    className,
    disabled = false,
    minDate,
    showYearSelect
}: DatePickerProps) {
    const [open, setOpen] = React.useState(false)

    const handleSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                {/* Styled to match Input component exactly */}
                <button
                    type="button"
                    disabled={disabled}
                    className={cn(
                        // Exact Input styles (h-10, px-4, py-2, rounded-lg, border-slate-200)
                        "flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4! py-2 text-sm",
                        "ring-offset-white transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        // Text styling
                        date ? "text-slate-900" : "text-slate-400",
                        className
                    )}
                >
                    <CalendarIcon className="h-4 w-4 shrink-0 text-slate-400" />
                    <span className="flex-1 text-left truncate">
                        {date ? format(date, "PPP") : placeholder}
                    </span>
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 shadow-lg border border-slate-200" align="start">
                <InternalCalendar
                    selectedDate={date}
                    onSelectDate={handleSelect}
                    minDate={minDate}
                    showYearSelect={showYearSelect}
                />
            </PopoverContent>
        </Popover>
    )
}
