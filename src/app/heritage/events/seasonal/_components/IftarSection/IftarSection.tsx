import { Heart, Utensils } from 'lucide-react';
import { ramadanCalendar, iftarMenu } from '../../_data';
import styles from './IftarSection.module.scss';

interface IftarSectionProps {
    onDaySelect: (day: number) => void;
}

export function IftarSection({ onDaySelect }: IftarSectionProps) {
    return (
        <section className={styles.iftarSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Breaking Bread Together</span>
                <h2 className={styles.sectionTitle}>Community Iftar</h2>
            </div>
            <div className={styles.iftarGrid}>
                <div className={styles.iftarCard}>
                    <div className={styles.iftarCardHeader}>
                        <Heart size={24} />
                        <h3>Sponsor an Iftar</h3>
                    </div>
                    <p className={styles.iftarText}>
                        Earn the reward of feeding a fasting person. Click on an available night to sponsor ($500/night).
                    </p>
                    <div className={styles.calendarLegend}>
                        <span><span className={styles.legendAvailable}></span> Available</span>
                        <span><span className={styles.legendSponsored}></span> Sponsored</span>
                    </div>
                    <div className={styles.calendarGrid}>
                        {ramadanCalendar.map((day, idx) => (
                            <div
                                key={idx}
                                className={`${styles.calendarDay} ${styles[day.status]} ${day.status === 'available' ? styles.clickable : ''}`}
                                onClick={() => day.status === 'available' && day.ramadanDay > 0 && onDaySelect(day.ramadanDay)}
                                role={day.status === 'available' ? 'button' : undefined}
                                tabIndex={day.status === 'available' ? 0 : undefined}
                            >
                                {day.day}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.iftarCard}>
                    <div className={styles.iftarCardHeader}>
                        <Utensils size={24} />
                        <h3>Friday & Saturday Iftars</h3>
                    </div>
                    <p className={styles.iftarText}>
                        Join us for community iftars every Friday and Saturday evening.
                    </p>
                    <ul className={styles.menuList}>
                        {iftarMenu.map((item, idx) => (
                            <li key={idx}>
                                <Utensils size={16} />
                                {item.item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
