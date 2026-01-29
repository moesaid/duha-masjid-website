import { Heart, Clock, MapPin, CheckCircle, Car } from 'lucide-react';
import styles from '../FoodPantryPage.module.scss';

export function GetHelpSection() {
    return (
        <section className={styles.getHelpSection}>
            <div className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                    <Heart size={28} />
                    <h2>Get Food Assistance</h2>
                </div>

                <div className={styles.infoGrid}>
                    <div className={styles.infoItem}>
                        <Clock size={22} />
                        <div>
                            <span className={styles.infoLabel}>Distribution Hours</span>
                            <span className={styles.infoValue}>
                                Every Saturday<br />9:00 AM – 12:00 PM
                            </span>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <MapPin size={22} />
                        <div>
                            <span className={styles.infoLabel}>Location</span>
                            <span className={styles.infoValue}>
                                Community Center<br />Rear Entrance (Door D)
                            </span>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <CheckCircle size={22} />
                        <div>
                            <span className={styles.infoLabel}>Requirements</span>
                            <span className={styles.infoValue}>
                                No ID Required<br />All neighbors welcome
                            </span>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <Car size={22} />
                        <div>
                            <span className={styles.infoLabel}>Drive-Thru</span>
                            <span className={styles.infoValue}>
                                Stay in your car<br />Volunteers load your trunk
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.infoNote}>
                    <CheckCircle size={18} />
                    <span>Your dignity is paramount. No questions asked.</span>
                </div>
            </div>
        </section>
    );
}
