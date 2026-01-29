import Image from 'next/image';
import styles from './HeroSection.module.scss';

export function HeroSection() {
    return (
        <header className={styles.heroSection}>
            <div className={styles.heroImage}>
                <Image
                    src="/images/heritage/mosque-interior.jpg"
                    alt="Imam leading prayer"
                    fill
                    className={styles.heroPhoto}
                    priority
                />
                <div className={styles.heroOverlay} />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.arabicWatermark}>عِلْم</div>
                <span className={styles.heroBadge}>Religious Team</span>
                <h1 className={styles.heroTitle}>Guiding the Heart & Mind</h1>
                <p className={styles.heroSubtitle}>
                    Our scholars and teachers are here to nurture your spiritual journey,
                    answer your questions, and guide you closer to Allah.
                </p>
            </div>
        </header>
    );
}
