'use client';

import { Clock, MapPin, Star, Ticket, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { EventData } from '../_data';
import styles from '../EventPage.module.scss';

interface EventHeroProps {
    event: EventData;
    onReserve: () => void;
}

export function EventHero({ event, onReserve }: EventHeroProps) {
    const router = useRouter();

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroOverlay} />
            <div className={styles.heroPattern} />

            <div className={styles.heroContent}>
                {/* Date & Status Badge Combined */}
                <div className={styles.heroBadgeRow}>
                    <div className={styles.dateBadge}>
                        <span className={styles.dateMonth}>{event.dateShort.month}</span>
                        <span className={styles.dateDay}>{event.dateShort.day}</span>
                        <span className={styles.dateDayOfWeek}>{event.dayOfWeek}</span>
                    </div>
                    <span className={styles.statusTag}>
                        <Star size={14} />
                        {event.status}
                    </span>
                </div>

                {/* Title */}
                <h1 className={styles.heroTitle}>{event.title}</h1>
                <h2 className={styles.heroSubtitle}>{event.subtitle}</h2>
                <p className={styles.heroTagline}>{event.tagline}</p>

                {/* Quick Info */}
                <div className={styles.heroMeta}>
                    <span><Clock size={16} /> {event.time}</span>
                    <span><MapPin size={16} /> {event.venue}</span>
                </div>

                {/* CTA Group */}
                <div className={styles.ctaGroup}>
                    <button className={styles.heroCta} onClick={onReserve}>
                        <Ticket size={18} />
                        Reserve Your Seat
                    </button>
                    <button className={styles.backButton} onClick={() => router.back()}>
                        <ArrowLeft size={16} />
                        Go Back
                    </button>
                </div>
            </div>

            {/* Decorative Wax Seal */}
            <div className={styles.waxSeal}>
                <span>دعوة</span>
            </div>
        </section>
    );
}
