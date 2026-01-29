import { MapPin, Clock } from 'lucide-react';
import { libraryInfo } from '../../_data';
import styles from './HoursSection.module.scss';

export function HoursSection() {
    return (
        <section className={styles.hoursSection}>
            <div className={styles.hoursContent}>
                <div className={styles.hoursBlock}>
                    <MapPin size={20} />
                    <div>
                        <h4>Location</h4>
                        <p>{libraryInfo.location}</p>
                    </div>
                </div>

                <div className={styles.hoursDivider} />

                <div className={styles.hoursBlock}>
                    <Clock size={20} />
                    <div>
                        <h4>Hours</h4>
                        <p>{libraryInfo.hours}</p>
                        <p className={styles.staffed}>{libraryInfo.staffedHours}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
