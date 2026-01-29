'use client';

import { useState, useMemo } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isBefore, isWeekend, isSameDay, startOfToday } from 'date-fns';
import { halls, initialFormData, Hall, BookingFormData } from '../_data';

export interface UseHallRentalReturn {
    // Hall selection
    selectedHall: Hall;
    setSelectedHall: (hall: Hall) => void;
    halls: Hall[];

    // Calendar state
    currentMonth: Date;
    calendarDays: Date[];
    firstDayOffset: number;
    selectedDate: Date | null;
    setSelectedDate: (date: Date | null) => void;
    today: Date;

    // Modal state
    showBookingModal: boolean;
    setShowBookingModal: (show: boolean) => void;

    // Form state
    formData: BookingFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    resetForm: () => void;

    // Calendar navigation
    goToPreviousMonth: () => void;
    goToNextMonth: () => void;

    // Date helpers
    isDateBooked: (date: Date) => boolean;
    isPastDate: (date: Date) => boolean;
    getDateRate: (date: Date) => number;

    // Actions
    handleDateSelect: (date: Date) => void;
    handleHallSelect: (hall: Hall) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

export function useHallRentalState(): UseHallRentalReturn {
    const [selectedHall, setSelectedHall] = useState<Hall>(halls[0]);
    const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [formData, setFormData] = useState<BookingFormData>(initialFormData);

    const today = startOfToday();

    // Generate calendar days
    const calendarDays = useMemo(() => {
        const start = startOfMonth(currentMonth);
        const end = endOfMonth(currentMonth);
        return eachDayOfInterval({ start, end });
    }, [currentMonth]);

    // First day offset (for empty cells before month starts)
    const firstDayOffset = calendarDays[0]?.getDay() || 0;

    // Check if date is booked
    const isDateBooked = (date: Date) => {
        return selectedHall.bookedDates.some(bookedDate => isSameDay(date, bookedDate));
    };

    // Check if date is in the past
    const isPastDate = (date: Date) => {
        return isBefore(date, today);
    };

    // Get rate for a date
    const getDateRate = (date: Date) => {
        return isWeekend(date) ? selectedHall.rates.weekend : selectedHall.rates.weekday;
    };

    // Handle date selection
    const handleDateSelect = (date: Date) => {
        if (isPastDate(date) || isDateBooked(date)) return;
        setSelectedDate(date);
        setShowBookingModal(true);
    };

    // Handle hall selection
    const handleHallSelect = (hall: Hall) => {
        setSelectedHall(hall);
        setSelectedDate(null);
    };

    // Navigate months
    const goToPreviousMonth = () => {
        setCurrentMonth(prev => addMonths(prev, -1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(prev => addMonths(prev, 1));
    };

    // Handle form change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    // Reset form
    const resetForm = () => {
        setFormData(initialFormData);
        setSelectedDate(null);
        setShowBookingModal(false);
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Booking request submitted for ${selectedHall.name} on ${selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}`);
        resetForm();
    };

    return {
        selectedHall,
        setSelectedHall,
        halls,
        currentMonth,
        calendarDays,
        firstDayOffset,
        selectedDate,
        setSelectedDate,
        today,
        showBookingModal,
        setShowBookingModal,
        formData,
        handleInputChange,
        resetForm,
        goToPreviousMonth,
        goToNextMonth,
        isDateBooked,
        isPastDate,
        getDateRate,
        handleDateSelect,
        handleHallSelect,
        handleSubmit
    };
}
