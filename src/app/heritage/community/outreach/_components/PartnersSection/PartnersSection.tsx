import { Handshake } from 'lucide-react';
import styles from './PartnersSection.module.scss';

interface PartnersSectionProps {
    partners: string[];
}

export function PartnersSection({ partners }: PartnersSectionProps) {
    return (
        <section className={styles.partnersSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Building Together</span>
                <h2 className={styles.sectionTitle}>Our Community Partners</h2>
            </div>

            <div className={styles.partnersGrid}>
                {partners.map((partner) => (
                    <div key={partner} className={styles.partnerBadge}>
                        <Handshake size={16} />
                        <span>{partner}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
