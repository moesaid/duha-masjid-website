import { MapPin, Car, Bus, Clock, Phone } from 'lucide-react';
import { locationInfo, operatingHours, contactInfo } from '../../_data';
import styles from './LocationSection.module.scss';

export function LocationSection() {
    return (
        <section className={styles.locationSection}>
            <div className={styles.container}>
                <header className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Visit Us</span>
                    <h2 className={styles.sectionTitle}>Location & Hours</h2>
                </header>

                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <span className={styles.infoIcon}>
                            <MapPin size={20} />
                        </span>
                        <h3 className={styles.infoTitle}>Entrance</h3>
                        <p className={styles.infoText}>{locationInfo.entrance}</p>
                    </div>

                    <div className={styles.infoCard}>
                        <span className={styles.infoIcon}>
                            <Car size={20} />
                        </span>
                        <h3 className={styles.infoTitle}>Parking</h3>
                        <p className={styles.infoText}>{locationInfo.parking}</p>
                    </div>

                    <div className={styles.infoCard}>
                        <span className={styles.infoIcon}>
                            <Bus size={20} />
                        </span>
                        <h3 className={styles.infoTitle}>Public Transit</h3>
                        <p className={styles.infoText}>{locationInfo.busRoute}</p>
                    </div>

                    <div className={styles.infoCard}>
                        <span className={styles.infoIcon}>
                            <Clock size={20} />
                        </span>
                        <h3 className={styles.infoTitle}>Hours</h3>
                        <p className={styles.infoText}>{operatingHours.regular}</p>
                        <p className={styles.infoNote}>{operatingHours.special}</p>
                    </div>

                    <div className={styles.infoCard}>
                        <span className={styles.infoIcon}>
                            <Phone size={20} />
                        </span>
                        <h3 className={styles.infoTitle}>{contactInfo.nurseLineLabel}</h3>
                        <p className={styles.infoText}>
                            <a href={`tel:${contactInfo.nurseLine}`} className={styles.phoneLink}>
                                {contactInfo.nurseLine}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
