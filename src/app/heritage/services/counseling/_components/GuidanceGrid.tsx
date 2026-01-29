import { CheckCircle } from 'lucide-react';
import { GuidanceService } from '../_data';
import styles from '../CounselingPage.module.scss';

interface GuidanceGridProps {
    services: GuidanceService[];
}

export function GuidanceGrid({ services }: GuidanceGridProps) {
    return (
        <section className={styles.guidanceSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Nasiha</span>
                <h2 className={styles.sectionTitle}>Types of Guidance</h2>
            </div>

            <div className={styles.guidanceGrid}>
                {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={service.id} className={styles.serviceCard}>
                            <div className={styles.cardSpine} />
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <IconComponent size={24} />
                                    <h3>{service.title}</h3>
                                </div>
                                <p className={styles.cardDescription}>
                                    {service.description}
                                </p>
                                <ul className={styles.cardDetails}>
                                    {service.details.map((detail, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={14} />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
