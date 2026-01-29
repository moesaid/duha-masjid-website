'use client';

import Image from 'next/image';
import { Calendar } from 'lucide-react';
import styles from './HeroSection.module.scss';

export function HeroSection() {
    return (
        <section className={styles.almanacHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/calendar-pattern.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.calendarIcon}>
                    <Calendar size={32} />
                </div>
                <h1 className={styles.heroTitle}>Community Almanac</h1>
                <p className={styles.heroTagline}>Stay connected with all masjid events, classes, and gatherings</p>
            </div>
        </section>
    );
}
