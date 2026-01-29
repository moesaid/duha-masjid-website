// Calendar Page - Heritage Almanac Design
// Community Event Calendar
'use client';

import { useCalendarState } from './_hooks';
import {
    HeroSection,
    CalendarControls,
    CalendarView,
    FeaturedEventSection,
    EventModal
} from './_components';
import styles from './CalendarPage.module.scss';

/**
 * Calendar Page
 * 
 * Architecture:
 * - _data/      → Event categories, sample events, featured event
 * - _hooks/     → useCalendarState (filter, view, modal management)
 * - _components/→ Hero, Controls, View, Featured, Modal
 */
export default function CalendarPage() {
    const {
        calendarRef,
        activeCategory, setActiveCategory,
        selectedEvent, closeEventModal,
        calendarView, currentMonth, changeView,
        coloredEvents,
        handleEventClick, handleDatesSet
    } = useCalendarState();

    return (
        <main className={styles.calendarPage}>
            <HeroSection />

            <section className={styles.calendarSection}>
                <CalendarControls
                    currentMonth={currentMonth}
                    calendarView={calendarView}
                    changeView={changeView}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    calendarRef={calendarRef}
                />

                <CalendarView
                    calendarRef={calendarRef}
                    coloredEvents={coloredEvents}
                    handleEventClick={handleEventClick}
                    handleDatesSet={handleDatesSet}
                />
            </section>

            <FeaturedEventSection />
            <EventModal event={selectedEvent} onClose={closeEventModal} />
        </main>
    );
}
