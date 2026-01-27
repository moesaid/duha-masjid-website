'use client';

import { useEffect, useState } from 'react';
import styles from '../_styles/Dashboard.module.css';

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

const mockHours = [
    { day: 'Mon-Thu', time: '6am - 10pm' },
    { day: 'Friday', time: '6am - 11pm' },
    { day: 'Sat-Sun', time: '7am - 10pm' },
];

export function TodayDashboard() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className={styles.dashboard} />;
    }

    const nextPrayer = mockPrayerTimes[1]; // Mock: Dhuhr

    return (
        <aside className={styles.dashboard}>
            <h2 className={styles.dashboardTitle}>Today&apos;s Status</h2>

            {/* Prayer Times Section */}
            <div className={styles.prayerSection}>
                <span className={styles.sectionLabel}>Prayer Times</span>

                <div className={styles.nextPrayer}>
                    <p className={styles.nextPrayerName}>{nextPrayer.name}</p>
                    <p className={styles.nextPrayerTime}>{nextPrayer.time}</p>
                    <p className={styles.nextPrayerCountdown}>in 2h 34m</p>
                </div>

                <div className={styles.prayerGrid}>
                    {mockPrayerTimes.map((prayer) => (
                        <div key={prayer.name} className={styles.prayerItem}>
                            <span className={styles.prayerName}>{prayer.name}</span>
                            <span className={styles.prayerTime}>{prayer.time}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Next Event Section */}
            <div className={styles.eventSection}>
                <span className={styles.sectionLabel}>Next Event</span>

                <div className={styles.eventCard}>
                    <div className={styles.eventImage}>📚</div>
                    <div className={styles.eventInfo}>
                        <h3 className={styles.eventName}>Youth Quran Circle</h3>
                        <p className={styles.eventTime}>Today at 7:00 PM</p>
                    </div>
                </div>
            </div>

            {/* Open Hours Section */}
            <div className={styles.hoursSection}>
                <span className={styles.sectionLabel}>Open Hours</span>

                <div className={styles.hoursList}>
                    {mockHours.map((item) => (
                        <div key={item.day} className={styles.hoursRow}>
                            <span className={styles.hoursDay}>{item.day}</span>
                            <span className={styles.hoursTime}>{item.time}</span>
                        </div>
                    ))}
                </div>

                <span className={styles.openNow}>Open Now</span>
            </div>
        </aside>
    );
}
