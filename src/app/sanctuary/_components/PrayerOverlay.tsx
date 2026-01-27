'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../_styles/PrayerOverlay.module.css';

interface PrayerTime {
    name: string;
    time: string;
}

const mockPrayerTimes: PrayerTime[] = [
    { name: 'Fajr', time: '5:45 AM' },
    { name: 'Dhuhr', time: '1:15 PM' },
    { name: 'Asr', time: '4:30 PM' },
    { name: 'Maghrib', time: '6:45 PM' },
    { name: 'Isha', time: '8:15 PM' },
];

interface PrayerOverlayProps {
    templateId: string;
}

export function PrayerOverlay({ templateId }: PrayerOverlayProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const nextPrayer = mockPrayerTimes[1]; // Mock next prayer

    return (
        <div className={styles.prayerOverlay}>
            <span className={styles.prayerOverlayLabel}>Next Prayer</span>

            <div className={styles.prayerNext}>
                <span className={styles.prayerNextName}>{nextPrayer.name}</span>
                <span className={styles.prayerNextTime}>{nextPrayer.time}</span>
            </div>

            <div className={styles.prayerDivider} />

            <span className={styles.prayerCountdown}>in 2h 34m</span>

            <Link href={`/${templateId}/prayer-times`} className={styles.prayerViewAll}>
                View All →
            </Link>
        </div>
    );
}

export function PrayerTimesPage() {
    const [mounted, setMounted] = useState(false);
    const [currentPrayer] = useState(1);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <section className={styles.prayerPage} />;
    }

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    return (
        <section className={styles.prayerPage}>
            <div className={styles.prayerPageInner}>
                <h1 className={styles.prayerPageTitle}>Prayer Times</h1>
                <p className={styles.prayerPageDate}>{today}</p>

                <div className={styles.prayerList}>
                    {mockPrayerTimes.map((prayer, index) => (
                        <div
                            key={prayer.name}
                            className={`${styles.prayerItem} ${index === currentPrayer ? styles.prayerItemActive : ''}`}
                        >
                            <span className={styles.prayerName}>{prayer.name}</span>
                            <span className={styles.prayerTime}>{prayer.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
