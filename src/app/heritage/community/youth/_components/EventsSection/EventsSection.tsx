import Link from 'next/link';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { UpcomingEvent } from '../../_data';
import styles from './EventsSection.module.scss';

interface EventsSectionProps {
    events: UpcomingEvent[];
    eventIndex: number;
    onPrev: () => void;
    onNext: () => void;
    onSelect: (index: number) => void;
}

export function EventsSection({ events, eventIndex, onPrev, onNext, onSelect }: EventsSectionProps) {
    return (
        <section className={styles.eventsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Mark Your Calendar</span>
                <h2 className={styles.sectionTitle}>Upcoming Adventures</h2>
            </div>

            <div className={styles.eventsCarousel}>
                <button className={styles.carouselBtn} onClick={onPrev}>
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.eventCard}>
                    <div
                        className={styles.eventImage}
                        style={{ backgroundImage: `url(${events[eventIndex].image})` }}
                    >
                        <span
                            className={styles.eventStatus}
                            style={{ background: events[eventIndex].statusColor }}
                        >
                            {events[eventIndex].status}
                        </span>
                    </div>
                    <div className={styles.eventDetails}>
                        <span className={styles.eventDate}>
                            <Calendar size={14} />
                            {events[eventIndex].date}
                        </span>
                        <h3>{events[eventIndex].title}</h3>
                        <span className={styles.eventLocation}>
                            <MapPin size={14} />
                            {events[eventIndex].location}
                        </span>
                        <Link href="#" className={styles.eventLink}>
                            Learn More <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>

                <button className={styles.carouselBtn} onClick={onNext}>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className={styles.eventDots}>
                {events.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.dot} ${idx === eventIndex ? styles.active : ''}`}
                        onClick={() => onSelect(idx)}
                    />
                ))}
            </div>
        </section>
    );
}
