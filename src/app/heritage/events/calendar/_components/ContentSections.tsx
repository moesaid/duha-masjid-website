'use client';

import Image from 'next/image';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar, Grid, List, MapPin, Clock, Tag, ChevronLeft, ChevronRight, X, Ticket, Repeat } from 'lucide-react';
import { EventClickArg, DatesSetArg } from '@fullcalendar/core';
import { eventCategories, featuredEvent, CalendarEvent, EventCategory } from '../_data';
import styles from '../CalendarPage.module.scss';

// ============================================
// Hero Section
// ============================================

export function HeroSection() {
    return (
        <section className={styles.almanacHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/calendar-pattern.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.calendarIcon}>
                    <Calendar size={32} />
                </div>
                <h1 className={styles.heroTitle}>Community Almanac</h1>
                <p className={styles.heroTagline}>Stay connected with all masjid events, classes, and gatherings</p>
            </div>
        </section>
    );
}

// ============================================
// Calendar Controls
// ============================================

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

// ============================================
// Calendar View
// ============================================

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

// ============================================
// Featured Event Section
// ============================================

export function FeaturedEventSection() {
    return (
        <section className={styles.featuredSection}>
            <div className={styles.featuredContent}>
                <span className={styles.featuredLabel}>Featured Event</span>
                <h3>{featuredEvent.title}</h3>
                <p className={styles.featuredDescription}>{featuredEvent.description}</p>

                <div className={styles.featuredMeta}>
                    <div className={styles.metaItem}>
                        <Calendar size={16} />
                        <span>{featuredEvent.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Clock size={16} />
                        <span>{featuredEvent.time}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <MapPin size={16} />
                        <span>{featuredEvent.location}</span>
                    </div>
                </div>

                <button className={styles.ticketBtn}>
                    <Ticket size={16} />
                    Get Tickets - {featuredEvent.ticketPrice}
                </button>
            </div>
        </section>
    );
}

// ============================================
// Event Detail Modal
// ============================================

interface EventModalProps {
    event: CalendarEvent | null;
    onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
    if (!event) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.eventHeader}>
                    <span
                        className={styles.eventCategory}
                        style={{ backgroundColor: getEventColor(event.extendedProps.category) }}
                    >
                        {event.extendedProps.category}
                    </span>
                    <h2>{event.title}</h2>
                </div>

                <div className={styles.eventDetails}>
                    <div className={styles.detailItem}>
                        <Calendar size={18} />
                        <span>{formatEventDate(event.start)}</span>
                    </div>
                    {event.end && (
                        <div className={styles.detailItem}>
                            <Clock size={18} />
                            <span>{formatEventTime(event.start)} - {formatEventTime(event.end)}</span>
                        </div>
                    )}
                    <div className={styles.detailItem}>
                        <MapPin size={18} />
                        <span>{event.extendedProps.location}</span>
                    </div>
                    {event.extendedProps.recurring && (
                        <div className={styles.detailItem}>
                            <Repeat size={18} />
                            <span>{event.extendedProps.recurring}</span>
                        </div>
                    )}
                    <div className={styles.detailItem}>
                        <Tag size={18} />
                        <span>{event.extendedProps.category}</span>
                    </div>
                </div>

                <p className={styles.eventDescription}>{event.extendedProps.description}</p>

                <div className={styles.eventActions}>
                    <button className={styles.addToCalendarBtn}>Add to My Calendar</button>
                    <button className={styles.shareBtn}>Share Event</button>
                </div>
            </div>
        </div>
    );
}

// ============================================
// Helper Functions
// ============================================

function getEventColor(category: string): string {
    const colors: Record<string, string> = {
        religious: '#2d5a3d',
        education: '#1a2744',
        social: '#b8860b',
        youth: '#8b4513'
    };
    return colors[category] || '#2d5a3d';
}

function formatEventDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

function formatEventTime(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}
