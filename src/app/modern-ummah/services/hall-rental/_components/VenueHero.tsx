import Link from 'next/link';
import { Calendar } from 'lucide-react';
import styles from './VenueHero.module.css';

export function VenueHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.label}>Facility Rentals</span>
                <h1 className={styles.title}>Gather in Barakah</h1>
                <p className={styles.subtitle}>
                    Beautiful, versatile spaces for your events. From intimate nikkahs to community banquets, we have the perfect venue for your gathering.
                </p>

                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>3</span>
                        <span className={styles.statLabel}>Unique Venues</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>500+</span>
                        <span className={styles.statLabel}>Max Capacity</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>100%</span>
                        <span className={styles.statLabel}>Halal Environment</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
