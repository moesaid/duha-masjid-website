import { ImpactStat } from '../_data';
import styles from '../OutreachPage.module.scss';

interface ImpactStripProps {
    stats: ImpactStat[];
}

export function ImpactStrip({ stats }: ImpactStripProps) {
    return (
        <section className={styles.impactStrip}>
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
