import styles from './HeroSection.module.scss';

export function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroOverlay} />
            <div className={styles.heroPattern} />
            <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Join Our Family</span>
                <h1 className={styles.heroTitle}>Become a Member</h1>
                <p className={styles.heroSubtitle}>
                    Support your masjid and become an active part of our growing community
                </p>
            </div>
        </section>
    );
}
