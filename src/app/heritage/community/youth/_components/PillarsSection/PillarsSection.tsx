import { Pillar } from '../../_data';
import styles from './PillarsSection.module.scss';

interface PillarsSectionProps {
    pillars: Pillar[];
}

export function PillarsSection({ pillars }: PillarsSectionProps) {
    return (
        <section className={styles.pillarsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Methodology</span>
                <h2 className={styles.sectionTitle}>The Three Pillars</h2>
            </div>

            <div className={styles.pillarsGrid}>
                {pillars.map((pillar) => {
                    const IconComponent = pillar.icon;
                    return (
                        <div
                            key={pillar.title}
                            className={styles.pillarCard}
                            style={{ '--pillar-color': pillar.color } as React.CSSProperties}
                        >
                            <div className={styles.pillarBadge}>
                                <IconComponent size={28} />
                            </div>
                            <h3>{pillar.title}</h3>
                            <span className={styles.pillarSubtitle}>{pillar.subtitle}</span>
                            <p>{pillar.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
