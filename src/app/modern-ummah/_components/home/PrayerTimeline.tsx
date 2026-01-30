'use client';

import { useState, useEffect } from 'react';
import styles from '../../_styles/HomePage.module.css';

interface Prayer {
    name: string;
    arabicName: string;
    time: string;
    type: 'fardh' | 'jummah' | 'sunrise';
}

// Mock prayer times - in production, fetch from API/calculation
const DAILY_PRAYERS: Prayer[] = [
    { name: 'Fajr', arabicName: 'الفجر', time: '5:45 AM', type: 'fardh' },
    { name: 'Sunrise', arabicName: 'الشروق', time: '7:12 AM', type: 'sunrise' },
    { name: 'Dhuhr', arabicName: 'الظهر', time: '12:30 PM', type: 'fardh' },
    { name: 'Asr', arabicName: 'العصر', time: '3:45 PM', type: 'fardh' },
    { name: 'Maghrib', arabicName: 'المغرب', time: '6:18 PM', type: 'fardh' },
    { name: 'Isha', arabicName: 'العشاء', time: '7:48 PM', type: 'fardh' },
];

const JUMMAH_PRAYERS: Prayer[] = [
    { name: 'Jummah 1', arabicName: 'الجمعة ١', time: '12:15 PM', type: 'jummah' },
    { name: 'Jummah 2', arabicName: 'الجمعة ٢', time: '1:30 PM', type: 'jummah' },
];

export function PrayerTimeline() {
    const [activePrayer, setActivePrayer] = useState(2); // Dhuhr as default
    const [currentTime, setCurrentTime] = useState('');
    const today = new Date();
    const isFriday = today.getDay() === 5;

    // Update current time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    // Determine active prayer based on current time
    useEffect(() => {
        const now = new Date();
        const currentHour = now.getHours();

        if (currentHour < 6) setActivePrayer(0);       // Fajr
        else if (currentHour < 8) setActivePrayer(1);  // Sunrise
        else if (currentHour < 14) setActivePrayer(2); // Dhuhr
        else if (currentHour < 17) setActivePrayer(3); // Asr
        else if (currentHour < 19) setActivePrayer(4); // Maghrib
        else setActivePrayer(5);                        // Isha
    }, []);

    return (
        <section className={styles.prayerSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.prayerHeader}>
                    <div className={styles.prayerHeaderLeft}>
                        <h2 className={styles.prayerSectionTitle}>Prayer Times</h2>
                        <p className={styles.prayerDate}>
                            {today.toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>
                    <div className={styles.prayerCurrentTime}>
                        <span className={styles.currentTimeLabel}>Current Time</span>
                        <span className={styles.currentTimeValue}>{currentTime}</span>
                    </div>
                </div>

                {/* Daily Prayers Grid */}
                <div className={styles.prayerGrid}>
                    {DAILY_PRAYERS.map((prayer, index) => (
                        <div
                            key={prayer.name}
                            className={`${styles.prayerCard} ${index === activePrayer ? styles.activePrayer : ''} ${prayer.type === 'sunrise' ? styles.sunrisePrayer : ''}`}
                        >
                            {index === activePrayer && (
                                <span className={styles.prayerNowBadge}>Now</span>
                            )}
                            <span className={styles.prayerArabic}>{prayer.arabicName}</span>
                            <span className={styles.prayerName}>{prayer.name}</span>
                            <span className={styles.prayerTime}>{prayer.time}</span>
                        </div>
                    ))}
                </div>

                {/* Jummah Section - Always visible but highlighted on Friday */}
                <div className={`${styles.jummahSection} ${isFriday ? styles.jummahToday : ''}`}>
                    <div className={styles.jummahHeader}>
                        <div className={styles.jummahIcon}>
                            <MosqueIcon />
                        </div>
                        <div>
                            <h3 className={styles.jummahTitle}>Jummah Prayer</h3>
                            <p className={styles.jummahSubtitle}>
                                {isFriday ? 'Today is Jummah!' : 'Every Friday'}
                            </p>
                        </div>
                    </div>
                    <div className={styles.jummahTimes}>
                        {JUMMAH_PRAYERS.map((jummah) => (
                            <div key={jummah.name} className={styles.jummahTimeCard}>
                                <span className={styles.jummahTimeName}>{jummah.name}</span>
                                <span className={styles.jummahTimeValue}>{jummah.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function MosqueIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3c-1.5 2-3 3.5-3 5.5a3 3 0 0 0 6 0C15 6.5 13.5 5 12 3Z" />
            <path d="M4 21V11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" />
            <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
            <path d="M3 21h18" />
        </svg>
    );
}
