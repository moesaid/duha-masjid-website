import Link from 'next/link';
import { Calendar, ExternalLink } from 'lucide-react';
import { ScheduleItem } from '../../_data';
import styles from './ScheduleSection.module.scss';

interface ScheduleSectionProps {
    schedule: ScheduleItem[];
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
    return (
        <section className={styles.scheduleSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>The Rhythm</span>
                <h2 className={styles.sectionTitle}>Weekly Schedule</h2>
            </div>

            <div className={styles.scheduleTimeline}>
                {schedule.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={index} className={styles.scheduleItem}>
                            <div className={styles.scheduleIcon}>
                                <IconComponent size={24} />
                            </div>
                            <div className={styles.scheduleDetails}>
                                <span className={styles.scheduleDay}>{item.day}</span>
                                <h4>{item.event}</h4>
                                <span className={styles.scheduleTime}>{item.time}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles.calendarCta}>
                <Link href="#" className={styles.calendarBtn}>
                    <Calendar size={18} />
                    Add to Google Calendar
                    <ExternalLink size={14} />
                </Link>
            </div>
        </section>
    );
}
