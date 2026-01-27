'use client';

import React, { useState, useEffect } from 'react';
import styles from '../_styles/PrayerHUD.module.css';

interface PrayerTime {
    name: string;
    time: string;
    isNext?: boolean;
}

const mockPrayerTimes: PrayerTime[] = [
    { name: 'Fajr', time: '5:45 AM' },
    { name: 'Sunrise', time: '7:12 AM' },
    { name: 'Dhuhr', time: '12:30 PM', isNext: true },
    { name: 'Asr', time: '3:45 PM' },
    { name: 'Maghrib', time: '6:18 PM' },
    { name: 'Isha', time: '7:45 PM' },
];

export function PrayerHUD() {
    const [minimized, setMinimized] = useState(false);
    const [countdown, setCountdown] = useState('2h 34m');

    const nextPrayer = mockPrayerTimes.find((p) => p.isNext);

    useEffect(() => {
        // Simulated countdown - in real app, calculate from actual time
        const interval = setInterval(() => {
            // This would calculate real countdown
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`${styles.prayerHUD} ${minimized ? styles.prayerHUDMinimized : ''}`}
        >
            <button
                className={styles.hudToggle}
                onClick={() => setMinimized(!minimized)}
                aria-label={minimized ? 'Expand' : 'Minimize'}
            >
                {minimized ? '↗' : '↙'}
            </button>

            {!minimized && (
                <div className={styles.hudHeader}>
                    <span className={styles.hudTitle}>Prayer Times</span>
                    <span className={styles.hudDate}>
                        {new Date().toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                        })}
                    </span>
                </div>
            )}

            {nextPrayer && (
                <div className={styles.nextPrayer}>
                    <div className={styles.nextPrayerLabel}>Next Prayer</div>
                    <div className={styles.nextPrayerName}>{nextPrayer.name}</div>
                    <div className={styles.nextPrayerTime}>{nextPrayer.time}</div>
                    {!minimized && (
                        <div className={styles.nextPrayerCountdown}>in {countdown}</div>
                    )}
                </div>
            )}

            {!minimized && (
                <div className={styles.prayerList}>
                    {mockPrayerTimes.filter((p) => !p.isNext).map((prayer) => (
                        <div key={prayer.name} className={styles.prayerItem}>
                            <span className={styles.prayerName}>{prayer.name}</span>
                            <span className={styles.prayerTime}>{prayer.time}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
