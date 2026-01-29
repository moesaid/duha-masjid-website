import { weeklySchedule } from '../../_data';
import styles from './ScheduleSection.module.scss';

export function ScheduleSection() {
    return (
        <section className={styles.scheduleSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>When We Meet</span>
                <h2 className={styles.sectionTitle}>Weekly Schedule</h2>
            </div>

            <div className={styles.scheduleGrid}>
                {weeklySchedule.map((day, idx) => (
                    <div key={idx} className={styles.scheduleCard}>
                        <div className={styles.dayHeader}>
                            <h3>{day.day}</h3>
                            <span className={styles.time}>{day.time}</span>
                        </div>
                        <ul className={styles.activities}>
                            {day.activities.map((activity, i) => (
                                <li key={i}>{activity}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
