'use client';

import { Calendar, Clock, MapPin, Tag, X, Repeat } from 'lucide-react';
import { CalendarEvent } from '../../_data';
import styles from './EventModal.module.scss';

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

                <div className={styles.eventHeader} style={{ backgroundColor: getEventColor(event.extendedProps.category) }}>
                    <span className={styles.eventCategory}>
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
