import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';
import { EventFeature } from '../_data';
import styles from '../OutreachPage.module.scss';

interface EventSectionProps {
    features: EventFeature[];
}

export function EventSection({ features }: EventSectionProps) {
    return (
        <section className={styles.eventSection}>
            <div className={styles.eventContent}>
                <div className={styles.eventHeader}>
                    <span className={styles.eventLabel}>Annual Open House</span>
                    <h2 className={styles.eventTitle}>Visit a Mosque Day</h2>
                    <p className={styles.eventSubtitle}>
                        Join us for our flagship community event where neighbors are invited to explore
                        our masjid, enjoy food from around the world, and experience the beauty of Islamic art.
                    </p>
                </div>

                <div className={styles.eventDetails}>
                    <div className={styles.eventFeatures}>
                        {features.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={feature.label} className={styles.featureItem}>
                                    <IconComponent size={18} />
                                    <span>{feature.label}</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.eventActions}>
                        <div className={styles.eventDateBox}>
                            <Calendar size={22} />
                            <span className={styles.dateValue}>Spring 2026</span>
                        </div>
                        <Link href="/contact" className={styles.eventCta}>
                            RSVP for This Event
                            <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
