// Events Calendar Page - HERITAGE ALIGNED with FullCalendar
// Design: Midnight Blue + Gold + Parchment (The Community Almanac)
// Vibe: Organized, Temporal, Sacred
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg, DatesSetArg } from '@fullcalendar/core';
import './fullcalendar-heritage.css';
import {
    Clock,
    Calendar,
    Moon,
    MapPin,
    Users,
    BookOpen,
    Heart,
    Download,
    ExternalLink,
    MessageCircle,
    Sparkles,
    Timer,
    Ticket,
    ChevronRight,
    X,
    Grid3X3,
    List
} from 'lucide-react';
import styles from './_components/_shared.module.scss';

// ========================================
// DATA
// ========================================
const eventCategories = [
    { id: 'all', label: 'All Events', color: 'all' },
    { id: 'religious', label: 'Religious', color: '#2d5a3d', icon: Moon },
    { id: 'education', label: 'Education', color: '#1a2744', icon: BookOpen },
    { id: 'social', label: 'Social', color: '#b8860b', icon: Users },
    { id: 'youth', label: 'Youth', color: '#8b4513', icon: Heart }
];

const categoryColors: Record<string, string> = {
    religious: '#2d5a3d',
    education: '#1a2744',
    social: '#b8860b',
    youth: '#8b4513'
};

const sampleEvents = [
    {
        id: '1',
        title: 'Seerah Conference',
        start: '2026-01-24T14:00:00',
        end: '2026-01-24T18:00:00',
        extendedProps: {
            location: 'Main Hall',
            category: 'education',
            description: 'A comprehensive look at the life of the Prophet Muhammad ﷺ with renowned scholars.'
        }
    },
    {
        id: '2',
        title: 'Community Iftar',
        start: '2026-01-27T18:00:00',
        extendedProps: {
            location: 'Banquet Hall',
            category: 'social',
            description: 'Break your fast with the community every Monday and Thursday.',
            recurring: 'Every Mon & Thu'
        }
    },
    {
        id: '3',
        title: 'Youth Night',
        start: '2026-01-31T19:00:00',
        end: '2026-01-31T21:00:00',
        extendedProps: {
            location: 'Youth Center',
            category: 'youth',
            description: 'Sports, games, and a halaqa for young Muslims ages 13-18.'
        }
    },
    {
        id: '4',
        title: 'Tahajjud & Qiyam',
        start: '2026-02-01T04:00:00',
        extendedProps: {
            location: 'Main Prayer Hall',
            category: 'religious',
            description: 'Join us for the night prayer and dhikr.'
        }
    },
    {
        id: '5',
        title: 'Sisters Halaqa',
        start: '2026-02-05T10:00:00',
        extendedProps: {
            location: 'Sisters Hall',
            category: 'education',
            description: 'Weekly Quran study circle for sisters.',
            recurring: 'Every Thursday'
        }
    },
    {
        id: '6',
        title: 'Jummah Prayer',
        start: '2026-01-30T13:00:00',
        extendedProps: {
            location: 'Main Prayer Hall',
            category: 'religious',
            description: 'Weekly Friday congregational prayer.'
        }
    },
    {
        id: '7',
        title: 'Arabic Class',
        start: '2026-01-28T19:00:00',
        end: '2026-01-28T20:30:00',
        extendedProps: {
            location: 'Classroom A',
            category: 'education',
            description: 'Learn Classical Arabic - Beginner to Intermediate levels.'
        }
    },
    {
        id: '8',
        title: 'Family Game Night',
        start: '2026-02-07T17:00:00',
        end: '2026-02-07T20:00:00',
        extendedProps: {
            location: 'Community Hall',
            category: 'social',
            description: 'Bring the whole family for board games, snacks, and fun!'
        }
    }
];

const featuredEvent = {
    title: 'Annual Fundraising Dinner',
    date: 'February 15, 2026',
    time: '6:00 PM - 10:00 PM',
    location: 'Grand Ballroom, Springfield Convention Center',
    description: 'Join us for an evening of inspiration, fellowship, and fundraising for our masjid expansion project. Keynote speaker: Imam Omar Suleiman.',
    ticketPrice: '$75'
};

// ========================================
// COMPONENT
// ========================================
export default function EventsCalendarPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedEvent, setSelectedEvent] = useState<typeof sampleEvents[0] | null>(null);
    const [calendarView, setCalendarView] = useState<'dayGridMonth' | 'listMonth'>('dayGridMonth');
    const [currentMonth, setCurrentMonth] = useState('January 2026');
    const calendarRef = useRef<FullCalendar>(null);

    // Filter events based on category
    const filteredEvents = activeCategory === 'all'
        ? sampleEvents
        : sampleEvents.filter(e => e.extendedProps.category === activeCategory);

    // Add colors to events
    const coloredEvents = filteredEvents.map(event => ({
        ...event,
        backgroundColor: categoryColors[event.extendedProps.category],
        borderColor: categoryColors[event.extendedProps.category]
    }));

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

    return (
        <main className={styles.calendarPage}>
            {/* ========================================
                1. THE "ASR" HERO
            ======================================== */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <div className={styles.calligraphyCircle}>
                        <span className={styles.arabicVerse}>وَالْعَصْرِ</span>
                        <span className={styles.verseTranslation}>&ldquo;By Time...&rdquo;</span>
                    </div>
                    <h1 className={styles.heroTitle}>The Community Almanac</h1>
                    <p className={styles.heroSubtitle}>
                        Marking our days with worship, learning, and fellowship.
                    </p>
                </div>
            </section>

            {/* ========================================
                2. EVENT CATEGORIES (The Legend)
            ======================================== */}
            <section className={styles.categoriesSection}>
                <div className={styles.categoriesBar}>
                    {eventCategories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`${styles.categoryPill} ${activeCategory === cat.id ? styles.active : ''}`}
                            style={cat.id !== 'all' ? { '--cat-color': cat.color } as React.CSSProperties : {}}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.icon && <cat.icon size={16} />}
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* ========================================
                3. FULLCALENDAR INTERFACE
            ======================================== */}
            <section className={styles.calendarSection}>
                <div className={styles.calendarWrapper}>
                    {/* View Toggle & Month Display */}
                    <div className={styles.calendarToolbar}>
                        <div className={styles.monthDisplay}>
                            <span className={styles.gregorianMonth}>{currentMonth}</span>
                            <span className={styles.hijriMonth}>Rajab / Sha&apos;ban 1447</span>
                        </div>
                        <div className={styles.viewToggle}>
                            <button
                                className={`${styles.viewBtn} ${calendarView === 'dayGridMonth' ? styles.active : ''}`}
                                onClick={() => changeView('dayGridMonth')}
                            >
                                <Grid3X3 size={18} />
                                Grid
                            </button>
                            <button
                                className={`${styles.viewBtn} ${calendarView === 'listMonth' ? styles.active : ''}`}
                                onClick={() => changeView('listMonth')}
                            >
                                <List size={18} />
                                List
                            </button>
                        </div>
                    </div>

                    {/* FullCalendar Component */}
                    <div className={styles.fullCalendarContainer}>
                        <FullCalendar
                            ref={calendarRef}
                            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            initialDate="2026-01-01"
                            events={coloredEvents}
                            eventClick={handleEventClick}
                            datesSet={handleDatesSet}
                            headerToolbar={{
                                left: 'prev,next today',
                                center: '',
                                right: ''
                            }}
                            buttonText={{
                                today: 'Today',
                                month: 'Month',
                                list: 'List'
                            }}
                            height="auto"
                            dayMaxEvents={3}
                            eventDisplay="block"
                            eventTimeFormat={{
                                hour: 'numeric',
                                minute: '2-digit',
                                meridiem: 'short'
                            }}
                            fixedWeekCount={false}
                            showNonCurrentDates={false}
                        />
                    </div>

                    {/* Legend */}
                    <div className={styles.calendarLegend}>
                        {eventCategories.filter(c => c.id !== 'all').map((cat) => (
                            <div key={cat.id} className={styles.legendItem}>
                                <span
                                    className={styles.legendDot}
                                    style={{ backgroundColor: cat.color }}
                                />
                                <span>{cat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================
                4. EVENT DETAIL MODAL
            ======================================== */}
            {selectedEvent && (
                <div className={styles.modalOverlay} onClick={() => setSelectedEvent(null)}>
                    <div className={styles.eventModal} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.closeModal}
                            onClick={() => setSelectedEvent(null)}
                        >
                            <X size={24} />
                        </button>

                        <div
                            className={styles.modalHeader}
                            style={{ backgroundColor: categoryColors[selectedEvent.extendedProps.category] }}
                        >
                            <span className={styles.modalCategory}>
                                {selectedEvent.extendedProps.category.charAt(0).toUpperCase() +
                                    selectedEvent.extendedProps.category.slice(1)}
                            </span>
                            <h2 className={styles.modalTitle}>{selectedEvent.title}</h2>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.modalMeta}>
                                <div className={styles.metaItem}>
                                    <Calendar size={18} />
                                    <span>
                                        {new Date(selectedEvent.start).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <div className={styles.metaItem}>
                                    <Clock size={18} />
                                    <span>
                                        {new Date(selectedEvent.start).toLocaleTimeString('en-US', {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })}
                                        {selectedEvent.end && ` - ${new Date(selectedEvent.end).toLocaleTimeString('en-US', {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })}`}
                                    </span>
                                </div>
                                <div className={styles.metaItem}>
                                    <MapPin size={18} />
                                    <span>{selectedEvent.extendedProps.location}</span>
                                </div>
                            </div>

                            <p className={styles.modalDescription}>
                                {selectedEvent.extendedProps.description}
                            </p>

                            {selectedEvent.extendedProps.recurring && (
                                <span className={styles.recurringBadge}>
                                    {selectedEvent.extendedProps.recurring}
                                </span>
                            )}

                            <div className={styles.modalActions}>
                                <button className={styles.addToCalBtn}>
                                    <Calendar size={16} />
                                    Add to Calendar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ========================================
                5. FEATURED EVENT (Spotlight)
            ======================================== */}
            <section className={styles.featuredSection}>
                <div className={styles.featuredCard}>
                    <div className={styles.featuredImage}>
                        <div className={styles.imagePlaceholder}>
                            <Sparkles size={48} />
                            <span>Featured Event</span>
                        </div>
                    </div>

                    <div className={styles.featuredContent}>
                        <span className={styles.featuredBadge}>
                            <Sparkles size={14} />
                            Don&apos;t Miss
                        </span>

                        <h2 className={styles.featuredTitle}>{featuredEvent.title}</h2>

                        <div className={styles.featuredMeta}>
                            <span>
                                <Calendar size={16} />
                                {featuredEvent.date}
                            </span>
                            <span>
                                <Clock size={16} />
                                {featuredEvent.time}
                            </span>
                            <span>
                                <MapPin size={16} />
                                {featuredEvent.location}
                            </span>
                        </div>

                        <p className={styles.featuredDescription}>
                            {featuredEvent.description}
                        </p>

                        <div className={styles.featuredCountdown}>
                            <Timer size={18} />
                            <span>19 Days Remaining</span>
                        </div>

                        <div className={styles.featuredActions}>
                            <span className={styles.ticketPrice}>
                                <Ticket size={18} />
                                {featuredEvent.ticketPrice} / person
                            </span>
                            <Link href="/heritage/events/annual-gala" className={styles.purchaseBtn}>
                                Purchase Tickets
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                6. SYNC & SUBSCRIBE
            ======================================== */}
            <section className={styles.syncSection}>
                <div className={styles.syncContent}>
                    <h3 className={styles.syncTitle}>Stay in Sync</h3>
                    <p className={styles.syncSubtitle}>Never miss an event. Subscribe to our calendar.</p>

                    <div className={styles.syncActions}>
                        <button className={styles.syncBtn}>
                            <ExternalLink size={18} />
                            Subscribe to Google Calendar
                        </button>
                        <button className={styles.syncBtn}>
                            <Download size={18} />
                            Download iCal (.ics)
                        </button>
                        <button className={`${styles.syncBtn} ${styles.whatsapp}`}>
                            <MessageCircle size={18} />
                            Join Duha Circle
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
