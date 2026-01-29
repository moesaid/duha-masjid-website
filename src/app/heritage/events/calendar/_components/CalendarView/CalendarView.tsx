'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg, DatesSetArg } from '@fullcalendar/core';
import { CalendarEvent } from '../../_data';
import styles from './CalendarView.module.scss';

interface CalendarViewProps {
    calendarRef: React.RefObject<FullCalendar | null>;
    coloredEvents: CalendarEvent[];
    handleEventClick: (info: EventClickArg) => void;
    handleDatesSet: (arg: DatesSetArg) => void;
}

export function CalendarView({ calendarRef, coloredEvents, handleEventClick, handleDatesSet }: CalendarViewProps) {
    return (
        <div className={styles.calendarWrapper}>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={coloredEvents}
                eventClick={handleEventClick}
                datesSet={handleDatesSet}
                headerToolbar={false}
                height="auto"
                eventTimeFormat={{
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: 'short'
                }}
            />
        </div>
    );
}
