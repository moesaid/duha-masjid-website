import { Clock } from 'lucide-react';
import { weeklyEvents, WeeklyEvent } from '../../_data';
import styles from './ScheduleSection.module.scss';

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
