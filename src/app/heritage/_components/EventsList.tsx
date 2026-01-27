'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../_styles/EventsList.module.scss';

interface Event {
    id: string;
    title: string;
    date: string;
    day: string;
    month: string;
    time: string;
    location: string;
    type: string;
}

interface EventsApiResponse {
    events: Event[];
}

// Simulated API call
async function fetchEvents(): Promise<EventsApiResponse> {
    await new Promise((resolve) => setTimeout(resolve, 200));

    return {
        events: [
            {
                id: '1',
                title: 'Weekly Halaqa',
                date: '2026-01-30',
                day: '30',
                month: 'Jan',
                time: 'After Maghrib',
                location: 'Main Prayer Hall',
                type: 'Weekly',
            },
            {
                id: '2',
                title: 'Community Potluck Dinner',
                date: '2026-02-01',
                day: '01',
                month: 'Feb',
                time: '6:00 PM',
                location: 'Community Center',
                type: 'Social',
            },
            {
                id: '3',
                title: 'Youth Qiyam Night',
                date: '2026-02-07',
                day: '07',
                month: 'Feb',
                time: '10:00 PM - Fajr',
                location: 'Youth Hall',
                type: 'Youth',
            },
            {
                id: '4',
                title: 'Sisters\' Circle',
                date: '2026-02-08',
                day: '08',
                month: 'Feb',
                time: '11:00 AM',
                location: 'Sisters\' Prayer Hall',
                type: 'Sisters',
            },
            {
                id: '5',
                title: 'New Muslim Support Group',
                date: '2026-02-15',
                day: '15',
                month: 'Feb',
                time: 'After Dhuhr',
                location: 'Meeting Room A',
                type: 'Support',
            },
        ],
    };
}

interface EventsListProps {
    templateId: string;
}

export function EventsList({ templateId }: EventsListProps) {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvents()
            .then((data) => {
                setEvents(data.events);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Failed to fetch events:', error);
                setLoading(false);
            });
    }, []);

    return (
        <section className={styles.eventsSection}>
            <div className={styles.eventsContainer}>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>Community Board</p>
                    <h2 className={styles.sectionTitle}>Upcoming Events</h2>
                </div>

                {loading ? (
                    <div className={styles.loading}>Loading events...</div>
                ) : (
                    <>
                        {/* Events List */}
                        <div className={styles.eventsList}>
                            {events.map((event) => (
                                <div key={event.id} className={styles.eventRow}>
                                    {/* Date Box */}
                                    <div className={styles.dateBox}>
                                        <span className={styles.dateDay}>{event.day}</span>
                                        <span className={styles.dateMonth}>{event.month}</span>
                                    </div>

                                    {/* Event Details */}
                                    <div className={styles.eventDetails}>
                                        <h3 className={styles.eventTitle}>{event.title}</h3>
                                        <div className={styles.eventMeta}>
                                            <span className={styles.metaItem}>
                                                <ClockIcon className={styles.metaIcon} />
                                                {event.time}
                                            </span>
                                            <span className={styles.metaItem}>
                                                <LocationIcon className={styles.metaIcon} />
                                                {event.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Event Type */}
                                    <span className={styles.eventType}>{event.type}</span>
                                </div>
                            ))}
                        </div>

                        {/* View All Link */}
                        <Link href={`/${templateId}/events`} className={styles.viewAllLink}>
                            View All Events →
                        </Link>
                    </>
                )}
            </div>
        </section>
    );
}

// Icons
function ClockIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

function LocationIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}
