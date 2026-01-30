'use client';

import { useState } from 'react';
import {
    CalendarHero,
    EventCategories,
    CalendarGrid,
    EventModal,
    FeaturedEvent,
    CalendarSync
} from './_components';
import { CalendarEvent } from './_data';

export default function CalendarPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const [calendarView, setCalendarView] = useState<'dayGridMonth' | 'listMonth'>('dayGridMonth');
    const [currentMonth, setCurrentMonth] = useState('January 2026');

    return (
        <main className="min-h-screen bg-white">
            <CalendarHero />

            <div>
                <EventCategories
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />
            </div>

            <CalendarGrid
                activeCategory={activeCategory}
                currentMonth={currentMonth}
                calendarView={calendarView}
                onViewChange={setCalendarView}
                onDateChange={setCurrentMonth}
                onEventClick={setSelectedEvent}
            />

            <EventModal
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />

            <FeaturedEvent />

            <CalendarSync />
        </main>
    );
}
