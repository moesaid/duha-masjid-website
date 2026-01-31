'use client';

import { useState } from 'react';
import { format, isSameDay, isBefore, startOfToday, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday } from 'date-fns';
import { ChevronLeft, ChevronRight, Users, MapPin, Clock, Send, CalendarDays } from 'lucide-react';
import { Button, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea } from '../../../_components';
import { halls } from '../_data';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- Main Component ---
export function AvailabilityCalendar() {
    const [selectedHallId, setSelectedHallId] = useState(halls[0].id);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));

    const selectedHall = halls.find(h => h.id === selectedHallId) || halls[0];
    const today = startOfToday();

    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(currentMonth),
        end: endOfMonth(currentMonth),
    });

    const firstDayOfMonth = getDay(startOfMonth(currentMonth));
    const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

    const isBooked = (date: Date) => selectedHall.bookedDates.some(d => isSameDay(d, date));
    const isDisabled = (date: Date) => isBefore(date, today) || isBooked(date);
    const isSelected = (date: Date) => selectedDate && isSameDay(date, selectedDate);

    const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

    const handleDayClick = (date: Date) => {
        if (!isDisabled(date)) {
            setSelectedDate(isSelected(date) ? undefined : date);
        }
    };

    return (
        <section id="calendar" className="py-16 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="inline-block text-emerald-600 text-sm font-semibold uppercase tracking-wider mb-2">
                        Booking System
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
                        Reserve Your Date
                    </h2>
                    <p className="text-slate-600 max-w-lg mx-auto">
                        Select a venue and date to submit your booking request.
                    </p>
                </div>

                {/* Main Card - Side by Side Layout */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

                        {/* LEFT: Calendar */}
                        <div className="p-6 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col min-h-full">

                            {/* Venue Selector */}
                            <div className="mb-5">
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Select Venue
                                </label>
                                <Select
                                    value={selectedHallId}
                                    onValueChange={(val) => {
                                        setSelectedHallId(val);
                                        setSelectedDate(undefined);
                                    }}
                                >
                                    <SelectTrigger className="w-full bg-slate-50 border-slate-200">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {halls.map(h => (
                                            <SelectItem key={h.id} value={h.id}>
                                                <span className="font-medium">{h.name}</span>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <div className="flex gap-4 mt-3 text-xs text-slate-500">
                                    <div className="flex items-center gap-1.5">
                                        <Users size={14} className="text-emerald-500" />
                                        <span>{selectedHall.capacity} guests</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin size={14} className="text-emerald-500" />
                                        <span>Ground Floor</span>
                                    </div>
                                </div>
                            </div>

                            {/* Calendar Header */}
                            <div className="flex items-center justify-between mb-4">
                                <button
                                    onClick={handlePrevMonth}
                                    type="button"
                                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <h3 className="text-sm font-semibold text-slate-900">
                                    {format(currentMonth, 'MMMM yyyy')}
                                </h3>
                                <button
                                    onClick={handleNextMonth}
                                    type="button"
                                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Calendar Grid */}
                            <div className="flex-1 flex flex-col mb-4">
                                {/* Weekday Headers */}
                                <div className="grid grid-cols-7 gap-1 mb-2">
                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                        <div key={i} className="text-center text-[11px] font-semibold text-slate-400 py-1">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Days Grid */}
                                <div className="grid grid-cols-7 gap-1 flex-1 auto-rows-fr">
                                    {emptyDays.map((_, index) => (
                                        <div key={`empty-${index}`} />
                                    ))}

                                    {daysInMonth.map((date) => {
                                        const disabled = isDisabled(date);
                                        const selected = isSelected(date);
                                        const booked = isBooked(date);
                                        const todayDate = isToday(date);

                                        return (
                                            <button
                                                key={date.toISOString()}
                                                type="button"
                                                onClick={() => handleDayClick(date)}
                                                disabled={disabled}
                                                className={cn(
                                                    "h-full min-h-[36px] w-full rounded-lg text-sm font-medium transition-all",
                                                    "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1",
                                                    !disabled && !selected && "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700",
                                                    todayDate && !selected && "ring-1 ring-emerald-300 bg-emerald-50/50",
                                                    selected && "bg-emerald-600 text-white shadow-md",
                                                    disabled && !booked && "text-slate-300 cursor-not-allowed",
                                                    booked && "bg-slate-100 text-slate-400 line-through cursor-not-allowed"
                                                )}
                                            >
                                                {format(date, 'd')}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="flex flex-wrap items-center justify-center gap-4 pt-3 border-t border-slate-100 text-[10px] text-slate-500">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded bg-emerald-600" />
                                    <span>Selected</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded border border-slate-200" />
                                    <span>Available</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded bg-slate-100" />
                                    <span>Booked</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Booking Form */}
                        <div className="p-6 bg-slate-50 flex flex-col">
                            <AnimatePresence mode="wait">
                                {!selectedDate ? (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex-1 flex flex-col items-center justify-center text-center"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                                            <CalendarDays className="w-7 h-7 text-slate-400" />
                                        </div>
                                        <h3 className="text-base font-semibold text-slate-700 mb-2">
                                            Select a Date
                                        </h3>
                                        <p className="text-slate-500 text-sm max-w-[200px]">
                                            Choose an available date from the calendar to continue.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex-1 flex flex-col"
                                    >
                                        {/* Selected Date */}
                                        <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-3 mb-5">
                                            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                                                <Clock className="w-5 h-5 text-emerald-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-semibold text-emerald-600 uppercase">Selected</p>
                                                <p className="text-sm font-bold text-slate-900 truncate">
                                                    {format(selectedDate, 'EEE, MMM d, yyyy')}
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedDate(undefined)}
                                                className="text-xs text-emerald-600 hover:text-emerald-700 font-medium"
                                            >
                                                Change
                                            </button>
                                        </div>

                                        {/* Form */}
                                        <form
                                            className="flex-1 flex flex-col space-y-3"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                alert(`Booking request submitted for ${selectedHall.name} on ${format(selectedDate, 'PPP')}`);
                                            }}
                                        >
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-[10px] font-medium text-slate-500 mb-1">First Name</label>
                                                    <Input placeholder="John" className="bg-white h-9 text-sm" required />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-medium text-slate-500 mb-1">Last Name</label>
                                                    <Input placeholder="Doe" className="bg-white h-9 text-sm" required />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-medium text-slate-500 mb-1">Email</label>
                                                <Input type="email" placeholder="john@example.com" className="bg-white h-9 text-sm" required />
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-medium text-slate-500 mb-1">Phone</label>
                                                <Input type="tel" placeholder="(555) 123-4567" className="bg-white h-9 text-sm" required />
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-medium text-slate-500 mb-1">Event Type</label>
                                                <Select required>
                                                    <SelectTrigger className="bg-white h-9 text-sm">
                                                        <SelectValue placeholder="Select type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="wedding">Wedding / Nikah</SelectItem>
                                                        <SelectItem value="walima">Walima / Reception</SelectItem>
                                                        <SelectItem value="lecture">Lecture / Seminar</SelectItem>
                                                        <SelectItem value="community">Community Event</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-[10px] font-medium text-slate-500 mb-1">Notes</label>
                                                <Textarea
                                                    placeholder="Special requests..."
                                                    className="bg-white resize-none h-16 text-sm"
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                className="w-full h-10 text-sm shadow-lg shadow-emerald-600/20"
                                            >
                                                <Send className="w-4 h-4 mr-2" />
                                                Submit Request
                                            </Button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-slate-500 mt-6">
                    Questions? Email{' '}
                    <a href="mailto:rentals@duhamasjid.com" className="text-emerald-600 hover:underline font-medium">
                        rentals@duhamasjid.com
                    </a>
                </p>
            </div>
        </section>
    );
}
