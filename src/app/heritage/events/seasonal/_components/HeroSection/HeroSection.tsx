import { Moon } from 'lucide-react';
import styles from './HeroSection.module.scss';

interface HeroSectionProps {
    countdown: { hours: number; minutes: number; seconds: number };
}

export function HeroSection({ countdown }: HeroSectionProps) {
    return (
        <section className={styles.heroSection}>
            <div className={styles.starsBackground} />
            <div className={styles.heroContent}>
                <div className={styles.moonPhase}>
                    <Moon size={48} />
                </div>
                <p className={styles.heroCalligraphy}>رمضان مبارك</p>
                <h1 className={styles.heroTitle}>Ramadan 1447</h1>
                <p className={styles.heroSubtitle}>Time until Maghrib (Iftar)</p>
                <div className={styles.countdown}>
                    <div className={styles.countdownItem}>
                        <span className={styles.countdownNumber}>{String(countdown.hours).padStart(2, '0')}</span>
                        <span className={styles.countdownLabel}>Hours</span>
                    </div>
                    <span className={styles.countdownColon}>:</span>
                    <div className={styles.countdownItem}>
                        <span className={styles.countdownNumber}>{String(countdown.minutes).padStart(2, '0')}</span>
                        <span className={styles.countdownLabel}>Minutes</span>
                    </div>
                    <span className={styles.countdownColon}>:</span>
                    <div className={styles.countdownItem}>
                        <span className={styles.countdownNumber}>{String(countdown.seconds).padStart(2, '0')}</span>
                        <span className={styles.countdownLabel}>Seconds</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
