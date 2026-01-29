import { Check } from 'lucide-react';
import { benefits } from '../../_data';
import styles from './BenefitsSection.module.scss';

export function BenefitsSection() {
    return (
        <section className={styles.benefitsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Why Volunteer</span>
                <h2 className={styles.sectionTitle}>Benefits of Service</h2>
            </div>

            <ul className={styles.benefitsList}>
                {benefits.map((benefit, idx) => (
                    <li key={idx}>
                        <Check size={18} />
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
