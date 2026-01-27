import React from 'react';
import Link from 'next/link';
import styles from '../_styles/Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            {/* Atmospheric background with luminous orbs */}
            <div className={styles.heroBackground} />

            <div className={styles.heroContent}>
                <span className={styles.heroLabel}>Welcome to Our Community</span>

                <h1 className={styles.heroTitle}>
                    Experience{' '}
                    <span className={styles.heroTitleHighlight}>Sacred Light</span>
                </h1>

                <p className={styles.heroSubtitle}>
                    A space where technology meets tranquility. Join our community for
                    prayer, learning, and spiritual growth in an atmosphere of peace.
                </p>

                <div className={styles.heroActions}>
                    <Link href="/qiyam/prayer-times" className={styles.btnPrimary}>
                        View Prayer Times
                    </Link>
                    <Link href="/qiyam/programs" className={styles.btnSecondary}>
                        Explore Programs
                    </Link>
                </div>

                {/* Floating verse card */}
                <div className={styles.heroVerse}>
                    <p className={styles.heroVerseText}>
                        &ldquo;Allah is the Light of the heavens and the earth.&rdquo;
                    </p>
                    <span className={styles.heroVerseSource}>— Surah An-Nur 24:35</span>
                </div>
            </div>
        </section>
    );
}
