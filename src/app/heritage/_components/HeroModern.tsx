'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../_styles/HeroModern.module.css';

interface PrayerTime {
    name: string;
    time: string;
}

interface HeroModernProps {
    templateId: string;
}

// Simulated API call for prayer times
async function fetchPrayerTimes(): Promise<{ prayers: PrayerTime[]; hijriDate: string; nextPrayer: string }> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return {
        prayers: [
            { name: 'Fajr', time: '5:45 AM' },
            { name: 'Sunrise', time: '7:12 AM' },
            { name: 'Dhuhr', time: '12:15 PM' },
            { name: 'Asr', time: '3:30 PM' },
            { name: 'Maghrib', time: '5:20 PM' },
            { name: 'Isha', time: '7:30 PM' },
        ],
        hijriDate: 'Rajab 26, 1447',
        nextPrayer: 'Asr',
    };
}

export function HeroModern({ templateId }: HeroModernProps) {
    const [prayerData, setPrayerData] = useState<{
        prayers: PrayerTime[];
        hijriDate: string;
        nextPrayer: string;
    } | null>(null);

    useEffect(() => {
        fetchPrayerTimes().then(setPrayerData);
    }, []);

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    return (
        <section className={styles.heroSection}>
            {/* Gradient mesh background */}
            <div className={styles.heroBackground} aria-hidden="true" />

            <div className={styles.heroContent}>
                {/* Left Column - The Message */}
                <div className={styles.messageColumn}>
                    {/* Subtle Bismillah */}
                    <p className={styles.bismillah} lang="ar" dir="rtl">
                        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                    </p>

                    {/* Large headline */}
                    <h1 className={styles.headline}>
                        A Sanctuary<br />for the Soul
                    </h1>

                    {/* Sub-headline */}
                    <p className={styles.subheadline}>
                        Cultivating faith, community, and service in the heart of the city.
                    </p>

                    {/* CTA Button */}
                    <Link href={`/${templateId}/new-here`} className={styles.ctaButton}>
                        Plan Your Visit
                    </Link>
                </div>

                {/* Right Column - Prayer Time Dock */}
                <div className={styles.dockColumn}>
                    <div className={styles.prayerDock}>
                        {/* Dock Header */}
                        <div className={styles.dockHeader}>
                            <h2 className={styles.dockTitle}>Today&apos;s Prayers</h2>
                            <p className={styles.dockDate}>
                                {today}
                                <span className={styles.hijriDate}>
                                    · {prayerData?.hijriDate || 'Loading...'}
                                </span>
                            </p>
                        </div>

                        {/* Prayer List */}
                        <div className={styles.prayerList}>
                            {prayerData?.prayers.map((prayer) => (
                                <div
                                    key={prayer.name}
                                    className={`${styles.prayerItem} ${prayer.name === prayerData.nextPrayer ? styles.active : ''}`}
                                >
                                    <span className={styles.prayerName}>
                                        {prayer.name === prayerData.nextPrayer && (
                                            <span className={styles.activeIndicator} />
                                        )}
                                        {prayer.name}
                                    </span>
                                    <span className={styles.prayerTime}>{prayer.time}</span>
                                </div>
                            ))}

                            {/* Jumu'ah */}
                            <div className={`${styles.prayerItem} ${styles.jumuahItem}`}>
                                <span className={styles.prayerName}>
                                    Jumu&apos;ah
                                    <span className={styles.jumuahBadge}>Friday</span>
                                </span>
                                <span className={styles.prayerTime}>1:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
