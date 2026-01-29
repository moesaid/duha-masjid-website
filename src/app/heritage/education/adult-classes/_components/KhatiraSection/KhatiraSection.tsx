import { dailyKhatiras } from '../../_data';
import styles from './KhatiraSection.module.scss';

export function KhatiraSection() {
    return (
        <section className={styles.khatiraStrip}>
            <div className={styles.stripHeader}>
                <h2>Daily Reminders</h2>
                <span>Short sessions every day</span>
            </div>

            <div className={styles.khatiraCards}>
                {dailyKhatiras.map((khatira) => {
                    const IconComponent = khatira.icon;
                    return (
                        <div key={khatira.time} className={styles.khatiraCard}>
                            <div className={styles.khatiraIcon}>
                                <IconComponent size={28} />
                            </div>
                            <div className={styles.khatiraTime}>{khatira.time}</div>
                            <h3>{khatira.title}</h3>
                            <span className={styles.khatiraSubtitle}>{khatira.subtitle}</span>
                            <p>{khatira.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
