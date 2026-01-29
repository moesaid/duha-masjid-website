import { Clock, MapPin, Car, AlertCircle } from 'lucide-react';
import { eidPrayers, festivities } from '../../_data';
import styles from './EidSection.module.scss';

export function EidSection() {
    return (
        <section className={styles.eidSection}>
            <div className={styles.eidCard}>
                <div className={styles.eidHeader}>
                    <div className={styles.eidEmoji}>🎉</div>
                    <h2 className={styles.eidTitle}>Eid al-Fitr Celebration</h2>
                    <p className={styles.eidSubtitle}>عيد مبارك</p>
                </div>
                <div className={styles.eidGrid}>
                    <div className={styles.eidItem}>
                        <div className={styles.eidItemHeader}>
                            <Clock size={20} />
                            <h4>Prayer Times</h4>
                        </div>
                        <ul className={styles.prayerTimes}>
                            {eidPrayers.map((prayer, idx) => (
                                <li key={idx}>
                                    <span>{prayer.shift}</span>
                                    <span>
                                        Takbeer <strong>{prayer.takbeer}</strong> | Prayer <strong>{prayer.prayer}</strong>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.eidItem}>
                        <div className={styles.eidItemHeader}>
                            <MapPin size={20} />
                            <h4>Location</h4>
                        </div>
                        <p className={styles.eidLocation}>
                            <strong>Springfield Convention Center</strong><br />
                            123 Main Street, Springfield<br /><br />
                            <a href="#">
                                <Car size={16} />
                                Download Parking Map
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles.eidFestivities}>
                    <h4 className={styles.festivitiesTitle}>After-Prayer Festivities</h4>
                    <div className={styles.festivitiesList}>
                        {festivities.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <span key={idx} className={styles.festivityTag}>
                                    <IconComponent size={16} />
                                    {item.label}
                                </span>
                            );
                        })}
                    </div>
                </div>
                <p className={styles.eidPolicy}>
                    <AlertCircle size={16} />
                    Please park in designated overflow lots. Do not block neighbor driveways.
                </p>
            </div>
        </section>
    );
}
