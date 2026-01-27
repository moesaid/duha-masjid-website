import Link from 'next/link';
import styles from '../_styles/Hero.module.css';

interface HeroProps {
    title?: string;
    subtitle?: string;
    templateId: string;
}

export function Hero({
    title = 'Building a Legacy of Faith and Service',
    subtitle = 'For over 35 years, the Islamic Foundation has served as a pillar of the Muslim community, providing religious services, education, and community support.',
    templateId,
}: HeroProps) {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.heroContent}>
                        <span className={styles.heroBreadcrumb}>Welcome to Islamic Foundation</span>

                        <h1 className={styles.heroTitle}>{title}</h1>

                        <p className={styles.heroSubtitle}>{subtitle}</p>

                        <div className={styles.heroActions}>
                            <Link href={`/${templateId}/about`} className={styles.btnPrimary}>
                                Learn About Us
                            </Link>
                            <Link href={`/${templateId}/reports`} className={styles.btnSecondary}>
                                View Annual Report
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroImage}>🏛️</div>
                </div>
            </section>

            <div className={styles.statsBar}>
                <div className={styles.statsInner}>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>35+</div>
                        <div className={styles.statLabel}>Years of Service</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>5,000+</div>
                        <div className={styles.statLabel}>Families Served</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>3</div>
                        <div className={styles.statLabel}>Facilities</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>$2M+</div>
                        <div className={styles.statLabel}>Annual Programs</div>
                    </div>
                </div>
            </div>
        </>
    );
}
