// Calendar Page State Hook
// Manages calendar view, filters, and event selection

'use client';

import { useState, useRef, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import { EventClickArg, DatesSetArg } from '@fullcalendar/core';
import { sampleEvents, categoryColors, CalendarEvent } from '../_data';

export function useCalendarState() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const [calendarView, setCalendarView] = useState<'dayGridMonth' | 'listMonth'>('dayGridMonth');
    const [currentMonth, setCurrentMonth] = useState('January 2026');
    const calendarRef = useRef<FullCalendar>(null);

    // Filter events based on category
    const filteredEvents = useMemo(() => {
        return activeCategory === 'all'
            ? sampleEvents
            : sampleEvents.filter(e => e.extendedProps.category === activeCategory);
    }, [activeCategory]);

    // Add colors to events
    const coloredEvents = useMemo(() => {
        return filteredEvents.map(event => ({
            ...event,
            backgroundColor: categoryColors[event.extendedProps.category],
            borderColor: categoryColors[event.extendedProps.category]
        }));
    }, [filteredEvents]);

    const handleEventClick = (info: EventClickArg) => {
        const eventData = sampleEvents.find(e => e.id === info.event.id);
        if (eventData) {
            setSelectedEvent(eventData);
        }
    };

    const handleDatesSet = (arg: DatesSetArg) => {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const date = arg.view.currentStart;
        setCurrentMonth(`${monthNames[date.getMonth()]} ${date.getFullYear()}`);
    };

    const changeView = (view: 'dayGridMonth' | 'listMonth') => {
        setCalendarView(view);
        if (calendarRef.current) {
            calendarRef.current.getApi().changeView(view);
        }
    };

    const closeEventModal = () => {
        setSelectedEvent(null);
    };

    return {
        // Refs
        calendarRef,

        // Filter State
        activeCategory,
        setActiveCategory,

        // Event Selection
        selectedEvent,
        setSelectedEvent,
        closeEventModal,

        // View State
        calendarView,
        currentMonth,
        changeView,

        // Computed Data
        coloredEvents,

        // Handlers
        handleEventClick,
        handleDatesSet
    };
}
