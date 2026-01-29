import { BadgeCheck } from 'lucide-react';
import { Offering } from '../../_data';
import styles from './OfferingsSection.module.scss';

interface OfferingsSectionProps {
    offerings: Offering[];
}

export function OfferingsSection({ offerings }: OfferingsSectionProps) {
    return (
        <section className={styles.offeringsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>What We Provide</span>
                <h2 className={styles.sectionTitle}>Nourishing Our Neighbors</h2>
            </div>

            <div className={styles.offeringsGrid}>
                {offerings.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={item.title} className={styles.offeringCard}>
                            <div className={styles.offeringIcon}>
                                <IconComponent size={28} />
                            </div>
                            <h3 className={styles.offeringTitle}>{item.title}</h3>
                            <p className={styles.offeringDesc}>{item.description}</p>
                        </div>
                    );
                })}
            </div>

            <div style={{ textAlign: 'center' }}>
                <span className={styles.halalBadge}>
                    <BadgeCheck size={18} />
                    100% Halal Certified
                </span>
            </div>
        </section>
    );
}
