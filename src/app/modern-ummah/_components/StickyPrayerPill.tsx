'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../_styles/PrayerPill.module.css';

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

interface StickyPrayerPillProps {
    templateId: string;
}

export function StickyPrayerPill({ templateId }: StickyPrayerPillProps) {
    const [mounted, setMounted] = useState(false);
    const [currentPrayer, setCurrentPrayer] = useState(1);
    const [countdown, setCountdown] = useState('2h 34m');

    useEffect(() => {
        setMounted(true);
        // In production, calculate actual next prayer and countdown
    }, []);

    if (!mounted) {
        return null;
    }

    const nextPrayer = mockPrayerTimes[currentPrayer];

    return (
        <div className={styles.prayerPill}>
            <span className={styles.pillLabel}>Next</span>

            <div className={styles.pillPrayer}>
                <span className={styles.pillPrayerName}>{nextPrayer.name}</span>
                <span className={styles.pillPrayerTime}>{nextPrayer.time}</span>
            </div>

            <div className={styles.pillDivider} />

            <span className={styles.pillCountdown}>
                in <span className={styles.pillCountdownValue}>{countdown}</span>
            </span>

            <Link href={`/${templateId}/prayer`} className={styles.pillExpandBtn} aria-label="View all prayer times">
                <ChevronIcon />
            </Link>
        </div>
    );
}

function ChevronIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 18l6-6-6-6" />
        </svg>
    );
}

// Full prayer times panel for the prayer times page
export function PrayerTimesPanel() {
    const [currentPrayer] = useState(1);

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className={styles.prayerPanel}>
            <div className={styles.panelHeader}>
                <h2 className={styles.panelTitle}>Prayer Times</h2>
                <span className={styles.panelDate}>{today}</span>
            </div>

            <div className={styles.prayerList}>
                {mockPrayerTimes.map((prayer, index) => (
                    <div
                        key={prayer.name}
                        className={`${styles.prayerRow} ${index === currentPrayer ? styles.prayerRowActive : ''}`}
                    >
                        <span className={styles.prayerName}>{prayer.name}</span>
                        <span className={styles.prayerTime}>{prayer.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
