import Image from 'next/image';
import { Users, DollarSign, CheckCircle } from 'lucide-react';
import styles from './HallDetails.module.css';
import { halls } from '../_data';

export function HallDetails() {
    return (
        <section id="venues" className={styles.section}>
            <div className={styles.container}>
                {halls.map((hall) => (
                    <div key={hall.id} className={styles.hallContainer}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={hall.image}
                                alt={hall.name}
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.name}>{hall.name}</h2>
                            <p className={styles.description}>{hall.description}</p>

                            <div className={styles.metaGrid}>
                                <div className={styles.metaItem}>
                                    <strong>Capacity</strong>
                                    <span>Up to {hall.capacity} guests</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <strong>Weekend Rate</strong>
                                    <span>${hall.rates.weekend} / day</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <strong>Weekday Rate</strong>
                                    <span>${hall.rates.weekday} / day</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <strong>Non-Profit Rate</strong>
                                    <span>${hall.rates.nonprofit} / day</span>
                                </div>
                            </div>

                            <div>
                                <h3 className={styles.amenitiesTitle}>Included Amenities</h3>
                                <div className={styles.amenitiesList}>
                                    {hall.amenities.map((amenity, idx) => (
                                        <div key={idx} className={styles.amenity}>
                                            <CheckCircle className={styles.checkIcon} />
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
