import Image from 'next/image';
import { Heart } from 'lucide-react';
import { volunteerStats } from '../../_data';
import styles from './HeroSection.module.scss';

export function HeroSection() {
    return (
        <section className={styles.volunteersHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/volunteers.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.volunteersIcon}>
                    <Heart size={32} />
                </div>
                <span className={styles.arabicTitle}>تَطَوُّع</span>
                <h1 className={styles.heroTitle}>Volunteer With Us</h1>
                <p className={styles.heroTagline}>The best of people are those who benefit others</p>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{volunteerStats.activeVolunteers}</span>
                        <span className={styles.statLabel}>Active Volunteers</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{volunteerStats.hoursPerMonth}</span>
                        <span className={styles.statLabel}>Hours Monthly</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
