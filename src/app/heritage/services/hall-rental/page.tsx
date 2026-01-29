// Hall Rental Page - HERITAGE ALIGNED
// Design: Calendar-based booking with fixed-size venue cards
'use client';

import { useHallRentalState } from './_hooks';
import {
    HeroSection,
    HallSelector,
    CalendarSection,
    PoliciesSection,
    ContactSection,
    BookingModal
} from './_components';
import styles from './HallRentalPage.module.scss';

/**
 * Hall Rental Page - Calendar-Based Booking
 * 
 * Architecture:
 * - _data/      → Halls, policies, event types, duration options
 * - _hooks/     → useHallRentalState (hall selection, calendar, form)
 * - _components/→ Hero, HallSelector, Calendar, Policies, Contact, BookingModal
 */
export default function HallRentalPage() {
    const state = useHallRentalState();

    return (
        <main className={styles.hallRentalPage}>
            <HeroSection />
            <HallSelector
                halls={state.halls}
                selectedHall={state.selectedHall}
                onHallSelect={state.handleHallSelect}
            />
            <CalendarSection
                selectedHall={state.selectedHall}
                currentMonth={state.currentMonth}
                calendarDays={state.calendarDays}
                firstDayOffset={state.firstDayOffset}
                selectedDate={state.selectedDate}
                today={state.today}
                isDateBooked={state.isDateBooked}
                isPastDate={state.isPastDate}
                getDateRate={state.getDateRate}
                goToPreviousMonth={state.goToPreviousMonth}
                goToNextMonth={state.goToNextMonth}
                onDateSelect={state.handleDateSelect}
            />
            <PoliciesSection />
            <ContactSection />
            <BookingModal
                show={state.showBookingModal}
                selectedHall={state.selectedHall}
                selectedDate={state.selectedDate}
                formData={state.formData}
                getDateRate={state.getDateRate}
                onInputChange={state.handleInputChange}
                onSubmit={state.handleSubmit}
                onClose={() => state.setShowBookingModal(false)}
            />
        </main>
    );
}
