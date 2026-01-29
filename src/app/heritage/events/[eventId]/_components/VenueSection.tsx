import { MapPin, Car, Baby, Gift, Accessibility } from 'lucide-react';
import { EventLogistics } from '../_data';
import styles from '../EventPage.module.scss';

interface VenueSectionProps {
    venue: string;
    address: string;
    logistics: EventLogistics;
}

export function VenueSection({ venue, address, logistics }: VenueSectionProps) {
    return (
        <section className={styles.venueSection}>
            <div className={styles.venueContainer}>
                <div className={styles.venueMap}>
                    <div className={styles.mapPlaceholder}>
                        <MapPin size={48} />
                        <span>{venue}</span>
                        <p>{address}</p>
                    </div>
                </div>

                <div className={styles.venueDetails}>
                    <h3 className={styles.sectionTitle}>Event Logistics</h3>

                    <div className={styles.logisticItem}>
                        <Car size={20} />
                        <div>
                            <h4>Parking</h4>
                            <p>{logistics.parking}</p>
                        </div>
                    </div>

                    <div className={styles.logisticItem}>
                        <Baby size={20} />
                        <div>
                            <h4>Childcare</h4>
                            <p>{logistics.childcare}</p>
                        </div>
                    </div>

                    <div className={styles.logisticItem}>
                        <Gift size={20} />
                        <div>
                            <h4>Dress Code</h4>
                            <p>{logistics.dressCode}</p>
                        </div>
                    </div>

                    <div className={styles.logisticItem}>
                        <Accessibility size={20} />
                        <div>
                            <h4>Accessibility</h4>
                            <p>{logistics.accessibility}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
