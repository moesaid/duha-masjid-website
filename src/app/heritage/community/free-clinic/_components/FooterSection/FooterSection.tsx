import { impactStats } from '../../_data';
import styles from './FooterSection.module.scss';

export function FooterSection() {
    return (
        <section className={styles.footerSection}>
            <div className={styles.container}>
                <div className={styles.impactGrid}>
                    {impactStats.map((stat, index) => (
                        <div key={index} className={styles.impactCard}>
                            <span className={styles.impactValue}>{stat.value}</span>
                            <span className={styles.impactLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.closingMessage}>
                    <p className={styles.closingText}>
                        &ldquo;Whoever relieves a believer&apos;s distress in this world,
                        Allah will relieve his distress on the Day of Resurrection.&rdquo;
                    </p>
                    <span className={styles.closingRef}>— Prophet Muhammad ﷺ</span>
                </div>
            </div>
        </section>
    );
}
