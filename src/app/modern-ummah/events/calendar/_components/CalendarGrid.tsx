'use client';

import { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg, DatesSetArg, EventContentArg } from '@fullcalendar/core';
import { Grid3X3, List, ChevronLeft, ChevronRight } from 'lucide-react';
import { sampleEvents, categoryColors, eventCategories, CalendarEvent } from '../_data';
import './fullcalendar-modern.css';

interface CalendarGridProps {
    activeCategory: string;
    currentMonth: string;
    calendarView: 'dayGridMonth' | 'listMonth';
    onViewChange: (view: 'dayGridMonth' | 'listMonth') => void;
    onDateChange: (month: string) => void;
    onEventClick: (event: CalendarEvent) => void;
}

export function CalendarGrid({
    activeCategory,
    currentMonth,
    calendarView,
    onViewChange,
    onDateChange,
    onEventClick
}: CalendarGridProps) {
    const calendarRef = useRef<FullCalendar>(null);

    // Filter events based on category
    const filteredEvents = activeCategory === 'all'
        ? sampleEvents
        : sampleEvents.filter(e => e.extendedProps.category === activeCategory);

    // Add colors to events
    const coloredEvents = filteredEvents.map(event => ({
        ...event,
        backgroundColor: categoryColors[event.extendedProps.category],
        borderColor: 'transparent',
        textColor: '#fff'
    }));

    const handleEventClick = (info: EventClickArg) => {
        const eventData = sampleEvents.find(e => e.id === info.event.id);
        if (eventData) {
            onEventClick(eventData);
        }
    };

    const handleDatesSet = (arg: DatesSetArg) => {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const date = arg.view.currentStart;
        onDateChange(`${monthNames[date.getMonth()]} ${date.getFullYear()}`);
    };

    const changeView = (view: 'dayGridMonth' | 'listMonth') => {
        onViewChange(view);
        if (calendarRef.current) {
            calendarRef.current.getApi().changeView(view);
        }
    };

    const handlePrev = () => {
        if (calendarRef.current) calendarRef.current.getApi().prev();
    };

    const handleNext = () => {
        if (calendarRef.current) calendarRef.current.getApi().next();
    };

    const handleToday = () => {
        if (calendarRef.current) calendarRef.current.getApi().today();
    };

    // Custom Event Rendering
    const renderEventContent = (eventInfo: EventContentArg) => {
        return (
            <div className="flex items-center gap-1.5 px-1.5 py-0.5 w-full overflow-hidden">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                <span className="truncate font-medium text-xs leading-tight">
                    {eventInfo.timeText && <span className="opacity-75 mr-1">{eventInfo.timeText}</span>}
                    {eventInfo.event.title}
                </span>
            </div>
        );
    };

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* View Toggle & Month Display */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-4 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                        <button onClick={handlePrev} className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-500 transition-all">
                            <ChevronLeft size={20} />
                        </button>
                        <div className="text-center min-w-[200px]">
                            <h2 className="text-xl font-serif font-bold text-slate-900 leading-none">{currentMonth}</h2>
                            <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider">Rajab / Sha'ban 1447</span>
                        </div>
                        <button onClick={handleNext} className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-500 transition-all">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleToday}
                            className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-all"
                        >
                            Today
                        </button>
                        <div className="h-6 w-px bg-slate-200 mx-2" />
                        <div className="flex bg-slate-100 p-1 rounded-lg">
                            <button
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${calendarView === 'dayGridMonth'
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                                onClick={() => changeView('dayGridMonth')}
                            >
                                <Grid3X3 size={16} />
                                <span className="hidden sm:inline">Grid</span>
                            </button>
                            <button
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${calendarView === 'listMonth'
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                                onClick={() => changeView('listMonth')}
                            >
                                <List size={16} />
                                <span className="hidden sm:inline">List</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* FullCalendar Component */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-0 md:p-6 modern-calendar-wrapper">
                    <FullCalendar
                        ref={calendarRef}
                        plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        initialDate="2026-01-01"
                        events={coloredEvents}
                        eventContent={renderEventContent}
                        eventClick={handleEventClick}
                        datesSet={handleDatesSet}
                        headerToolbar={false} // We built our own
                        height="auto"
                        dayMaxEvents={3}
                        eventDisplay="block"
                        fixedWeekCount={false}
                        showNonCurrentDates={false}
                    />
                </div>

            </div>
        </section>
    );
}
