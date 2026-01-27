'use client';

import { useEffect, useState } from 'react';
import styles from '../_styles/PrayerTable.module.css';

interface PrayerTime {
    name: string;
    arabic: string;
    adhan: string;
    iqama: string;
}

const mockPrayerTimes: PrayerTime[] = [
    { name: 'Fajr', arabic: 'الفجر', adhan: '5:45 AM', iqama: '6:00 AM' },
    { name: 'Dhuhr', arabic: 'الظهر', adhan: '1:15 PM', iqama: '1:30 PM' },
    { name: 'Asr', arabic: 'العصر', adhan: '4:30 PM', iqama: '4:45 PM' },
    { name: 'Maghrib', arabic: 'المغرب', adhan: '6:45 PM', iqama: '6:50 PM' },
    { name: 'Isha', arabic: 'العشاء', adhan: '8:15 PM', iqama: '8:30 PM' },
];

export function PrayerTimesTable() {
    const [mounted, setMounted] = useState(false);
    const [currentPrayer] = useState(1);

    useEffect(() => {
        setMounted(true);
    }, []);

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    if (!mounted) {
        return <section className={styles.prayerSection} />;
    }

    return (
        <section className={styles.prayerSection}>
            <div className={styles.prayerContainer}>
                <div className={styles.prayerHeader}>
                    <h2 className={styles.prayerTitle}>Daily Prayer Schedule</h2>
                    <div className={styles.prayerDate}>
                        <div>{today}</div>
                        <div className={styles.hijriDate}>15 Rajab 1447 AH</div>
                    </div>
                </div>

                <table className={styles.prayerTable}>
                    <thead>
                        <tr>
                            <th>Prayer</th>
                            <th>Adhan</th>
                            <th>Iqama</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockPrayerTimes.map((prayer, index) => (
                            <tr key={prayer.name} className={index === currentPrayer ? styles.activeRow : ''}>
                                <td>
                                    <span className={styles.prayerName}>
                                        {prayer.name}
                                        <span className={styles.prayerArabic}>{prayer.arabic}</span>
                                    </span>
                                    {index === currentPrayer && (
                                        <span className={styles.nextPrayerBadge}>Next</span>
                                    )}
                                </td>
                                <td className={styles.prayerTime}>{prayer.adhan}</td>
                                <td className={styles.prayerTime}>{prayer.iqama}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={styles.jummahCallout}>
                    <span className={styles.jummahLabel}>Jumu&apos;ah (Friday Prayer)</span>
                    <div className={styles.jummahTimes}>
                        <div className={styles.jummahTime}>
                            <div className={styles.jummahTimeLabel}>First Khutbah</div>
                            <div className={styles.jummahTimeValue}>12:30 PM</div>
                        </div>
                        <div className={styles.jummahTime}>
                            <div className={styles.jummahTimeLabel}>Second Khutbah</div>
                            <div className={styles.jummahTimeValue}>1:30 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
