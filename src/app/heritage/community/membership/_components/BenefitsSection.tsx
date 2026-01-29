import { Benefit } from '../_data';
import styles from '../MembershipPage.module.scss';

interface BenefitsSectionProps {
    benefits: Benefit[];
}

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
    return (
        <section className={styles.benefitsSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Membership Benefits</h2>
                <p className={styles.sectionSubtitle}>More than just a card — a lifelong connection</p>
            </div>

            <div className={styles.benefitsGrid}>
                {benefits.map((benefit, idx) => {
                    const IconComponent = benefit.icon;
                    return (
                        <div key={idx} className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>
                                <IconComponent size={24} />
                            </div>
                            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                            <p className={styles.benefitDescription}>{benefit.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
