import Link from 'next/link';
import styles from '../../_styles/HomePage.module.css';

interface EventsSectionProps {
    templateId: string;
}

const EVENTS = [
    {
        id: 1,
        slug: 'jummah-prayer-khutbah',
        title: 'Jummah Prayer & Khutbah',
        date: { day: '31', month: 'Jan' },
        time: '1:00 PM',
        location: 'Main Prayer Hall',
        image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=80',
    },
    {
        id: 2,
        slug: 'youth-quran-circle',
        title: 'Youth Quran Circle',
        date: { day: '01', month: 'Feb' },
        time: '4:30 PM',
        location: 'Youth Center',
        image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=400&q=80',
    },
    {
        id: 3,
        slug: 'community-iftar-gathering',
        title: 'Community Iftar Gathering',
        date: { day: '03', month: 'Feb' },
        time: '6:00 PM',
        location: 'Community Hall',
        image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80',
    },
    {
        id: 4,
        slug: 'sisters-halaqah',
        title: 'Sisters Halaqah',
        date: { day: '05', month: 'Feb' },
        time: '11:00 AM',
        location: 'Sisters Wing',
        image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&q=80',
    },
    {
        id: 5,
        slug: 'family-fun-day',
        title: 'Family Fun Day',
        date: { day: '08', month: 'Feb' },
        time: '10:00 AM',
        location: 'Outdoor Grounds',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80',
    },
];

export function EventsSection({ templateId }: EventsSectionProps) {
    return (
        <section className={styles.eventsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Upcoming Gatherings</span>
                    <h2 className={styles.sectionTitle}>Events & Programs</h2>
                    <p className={styles.sectionSubtitle}>
                        Join us in worship, learning, and fellowship. There&apos;s always something happening.
                    </p>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.eventsScrollContainer}>
                    <div className={styles.eventsTrack}>
                        {EVENTS.map((event) => (
                            <Link
                                key={event.id}
                                href={`/${templateId}/events/${event.slug}`}
                                className={styles.eventCardLink}
                            >
                                <article className={styles.eventCard}>
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className={styles.eventImage}
                                    />
                                    <div className={styles.eventContent}>
                                        <div className={styles.eventDateBadge}>
                                            <span className={styles.eventDateDay}>{event.date.day}</span>
                                            <span className={styles.eventDateMonth}>{event.date.month}</span>
                                        </div>
                                        <h3 className={styles.eventTitle}>{event.title}</h3>
                                        <div className={styles.eventMeta}>
                                            <ClockIcon />
                                            <span>{event.time}</span>
                                            <span>•</span>
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ClockIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </svg>
    );
}
