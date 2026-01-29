import { ImpactStat } from '../../_data';
import styles from './ImpactSection.module.scss';

interface ImpactSectionProps {
    stats: ImpactStat[];
}

export function ImpactSection({ stats }: ImpactSectionProps) {
    return (
        <section className={styles.impactSection}>
            <div className={styles.impactGrid}>
                {stats.map((stat) => (
                    <div key={stat.label} className={styles.impactStat}>
                        <span className={styles.impactNumber}>{stat.number}</span>
                        <span className={styles.impactLabel}>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
