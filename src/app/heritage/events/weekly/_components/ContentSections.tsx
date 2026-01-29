import Image from 'next/image';
import { Calendar, Clock, Info } from 'lucide-react';
import { weeklyEvents, scheduleNote, WeeklyEvent } from '../_data';
import styles from '../WeeklyPage.module.scss';

export function HeroSection() {
    return (
        <section className={styles.weeklyHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/weekly.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.weeklyIcon}><Calendar size={32} /></div>
                <span className={styles.arabicTitle}>الفَعَالِيَات</span>
                <h1 className={styles.heroTitle}>Weekly Programs</h1>
                <p className={styles.heroTagline}>Join our regular gatherings for knowledge, worship, and community</p>
            </div>
        </section>
    );
}

export function ScheduleSection() {
    return (
        <section className={styles.scheduleSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Schedule</span>
                <h2 className={styles.sectionTitle}>Weekly Events</h2>
            </div>
            <div className={styles.scheduleGrid}>
                {weeklyEvents.map((event: WeeklyEvent) => {
                    const IconComponent = event.icon;
                    return (
                        <div key={event.id} className={styles.eventCard}>
                            <div className={styles.eventHeader}>
                                <span className={styles.day}>{event.day}</span>
                                <span className={styles.time}><Clock size={14} /> {event.time}</span>
                            </div>
                            <div className={styles.eventIcon}><IconComponent size={24} /></div>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <span className={styles.audience}>{event.audience}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export function NoteSection() {
    return (
        <section className={styles.noteSection}>
            <div className={styles.noteCard}>
                <Info size={24} />
                <p>{scheduleNote}</p>
            </div>
        </section>
    );
}
