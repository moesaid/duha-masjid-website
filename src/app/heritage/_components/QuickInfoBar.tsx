'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../_styles/QuickInfoBar.module.css';

interface PrayerTime {
    name: string;
    time: string;
    icon: string;
}

interface QuickInfoBarProps {
    templateId: string;
}

// Simulated API call
async function fetchPrayerTimes(): Promise<{ prayers: PrayerTime[]; hijriDate: string; nextPrayer: string }> {
    await new Promise((resolve) => setTimeout(resolve, 150));

    return {
        prayers: [
            { name: 'Fajr', time: '5:45 AM', icon: '🌙' },
            { name: 'Sunrise', time: '7:12 AM', icon: '🌅' },
            { name: 'Dhuhr', time: '12:15 PM', icon: '☀️' },
            { name: 'Asr', time: '3:30 PM', icon: '🌤️' },
            { name: 'Maghrib', time: '5:20 PM', icon: '🌇' },
            { name: 'Isha', time: '7:30 PM', icon: '🌃' },
        ],
        hijriDate: 'Rajab 26, 1447',
        nextPrayer: 'Asr',
    };
}

export function QuickInfoBar({ templateId }: QuickInfoBarProps) {
    const [data, setData] = useState<{ prayers: PrayerTime[]; hijriDate: string; nextPrayer: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPrayerTimes()
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    return (
        <section className={styles.quickInfoSection}>
            <div className={styles.quickInfoContainer}>
                {/* Main Prayer Times Card */}
                <div className={styles.prayerCard}>
                    <div className={styles.prayerCardHeader}>
                        <h2 className={styles.prayerCardTitle}>Today&apos;s Prayer Times</h2>
                        <div className={styles.prayerCardDate}>
                            {today} · <span className={styles.hijriDate}>{data?.hijriDate || 'Loading...'}</span>
                        </div>
                    </div>

                    {loading ? (
                        <div className={styles.loading}>Loading prayer times...</div>
                    ) : (
                        <div className={styles.prayerTimesGrid}>
                            {data?.prayers.map((prayer) => (
                                <div
                                    key={prayer.name}
                                    className={`${styles.prayerTimeCell} ${prayer.name === data.nextPrayer ? styles.nextPrayer : ''}`}
                                >
                                    <div className={styles.prayerName}>
                                        <span className={styles.prayerIcon}>{prayer.icon}</span>
                                        {prayer.name}
                                        {prayer.name === data.nextPrayer && (
                                            <span className={styles.nextBadge}>Next</span>
                                        )}
                                    </div>
                                    <div className={styles.prayerTime}>{prayer.time}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sidebar Stack */}
                <div className={styles.sidebarStack}>
                    {/* Announcement Card */}
                    <div className={styles.announcementCard}>
                        <p className={styles.announcementLabel}>📢 Announcement</p>
                        <h3 className={styles.announcementTitle}>
                            Weekend School Registration Now Open
                        </h3>
                        <p className={styles.announcementMeta}>
                            Classes begin Feb 1st · Ages 5-16
                        </p>
                    </div>

                    {/* Jumu'ah Card */}
                    <div className={styles.jumuahCard}>
                        <p className={styles.jumuahLabel}>🕌 Jumu&apos;ah</p>
                        <h3 className={styles.jumuahTitle}>Friday Prayer</h3>
                        <p className={styles.jumuahTimes}>
                            1st Khutbah: <span className={styles.jumuahTime}>1:00 PM</span>
                            <br />
                            2nd Khutbah: <span className={styles.jumuahTime}>2:00 PM</span>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.quickLinksCard}>
                        <div className={styles.quickLinksList}>
                            <Link href={`/${templateId}/donate`} className={styles.quickLink}>
                                <span className={styles.quickLinkIcon}>💝</span>
                                Donate Now
                            </Link>
                            <Link href={`/${templateId}/events`} className={styles.quickLink}>
                                <span className={styles.quickLinkIcon}>📅</span>
                                Upcoming Events
                            </Link>
                            <Link href={`/${templateId}/contact`} className={styles.quickLink}>
                                <span className={styles.quickLinkIcon}>📍</span>
                                Get Directions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
