'use client';

import FullCalendar from '@fullcalendar/react';
import { Grid, List, ChevronLeft, ChevronRight } from 'lucide-react';
import { eventCategories, EventCategory } from '../../_data';
import styles from './CalendarControls.module.scss';

interface CalendarControlsProps {
    currentMonth: string;
    calendarView: 'dayGridMonth' | 'listMonth';
    changeView: (view: 'dayGridMonth' | 'listMonth') => void;
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    calendarRef: React.RefObject<FullCalendar | null>;
}

export function CalendarControls({
    currentMonth,
    calendarView,
    changeView,
    activeCategory,
    setActiveCategory,
    calendarRef
}: CalendarControlsProps) {
    return (
        <div className={styles.calendarControls}>
            <div className={styles.monthControls}>
                <button
                    onClick={() => calendarRef.current?.getApi().prev()}
                    className={styles.navBtn}
                    aria-label="Previous month"
                >
                    <ChevronLeft size={20} />
                </button>
                <h2 className={styles.currentMonth}>{currentMonth}</h2>
                <button
                    onClick={() => calendarRef.current?.getApi().next()}
                    className={styles.navBtn}
                    aria-label="Next month"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className={styles.viewToggle}>
                <button
                    className={`${styles.viewBtn} ${calendarView === 'dayGridMonth' ? styles.active : ''}`}
                    onClick={() => changeView('dayGridMonth')}
                >
                    <Grid size={16} />
                    Grid
                </button>
                <button
                    className={`${styles.viewBtn} ${calendarView === 'listMonth' ? styles.active : ''}`}
                    onClick={() => changeView('listMonth')}
                >
                    <List size={16} />
                    List
                </button>
            </div>

            <div className={styles.categoryFilters}>
                {eventCategories.map((cat: EventCategory) => (
                    <button
                        key={cat.id}
                        className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                        onClick={() => setActiveCategory(cat.id)}
                        style={{
                            '--category-color': cat.id === 'all' ? '#2d5a3d' : cat.color
                        } as React.CSSProperties}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
