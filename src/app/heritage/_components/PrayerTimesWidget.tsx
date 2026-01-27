'use client';

import { useState, useEffect } from 'react';
import styles from '../_styles/PrayerTimesWidget.module.scss';

// Types for prayer schedule
interface Prayer {
    name: string;
    athan?: string;
    iqamah?: string;
    time?: string;
    is_next?: boolean;
}

interface PrayerSchedule {
    date: string;
    next_prayer: string;
    prayers: Prayer[];
}

interface PrayerApiResponse {
    prayer_schedule: PrayerSchedule;
}

// Simulated API call
async function fetchPrayerTimes(): Promise<PrayerApiResponse> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    return {
        prayer_schedule: {
            date: 'Monday, Rajab 14, 1447',
            next_prayer: 'Asr',
            prayers: [
                { name: 'Fajr', athan: '5:45 AM', iqamah: '6:15 AM' },
                { name: 'Sunrise', time: '7:12 AM' },
                { name: 'Dhuhr', athan: '12:15 PM', iqamah: '1:00 PM' },
                { name: 'Asr', athan: '2:45 PM', iqamah: '3:30 PM', is_next: true },
                { name: 'Maghrib', athan: '5:20 PM', iqamah: '5:30 PM' },
                { name: 'Isha', athan: '6:45 PM', iqamah: '7:30 PM' },
                { name: 'Jumuah', time: '1:00 PM & 2:00 PM' },
            ],
        },
    };
}

// Prayer icons mapping
const prayerIcons: Record<string, string> = {
    Fajr: '🌙',
    Sunrise: '🌅',
    Dhuhr: '☀️',
    Asr: '🌤️',
    Maghrib: '🌇',
    Isha: '🌃',
    Jumuah: '🕌',
};

export function PrayerTimesWidget() {
    const [schedule, setSchedule] = useState<PrayerSchedule | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPrayerTimes()
            .then((data) => {
                setSchedule(data.prayer_schedule);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Failed to fetch prayer times:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className={styles.prayerWidget}>
                <div className={styles.widgetContainer}>
                    <div className={styles.loading}>Loading prayer times...</div>
                </div>
            </section>
        );
    }

    if (!schedule) {
        return null;
    }

    // Separate Jumuah from regular prayers
    const regularPrayers = schedule.prayers.filter((p) => p.name !== 'Jumuah');
    const jumuah = schedule.prayers.find((p) => p.name === 'Jumuah');

    // Parse date for display
    const [dayName, hijriDate] = schedule.date.split(', ');
    const gregorianDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <section className={styles.prayerWidget}>
            <div className={styles.widgetContainer}>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>Daily Salah Schedule</p>
                    <h2 className={styles.sectionTitle}>Prayer Times</h2>
                    <p className={styles.sectionDate}>
                        {gregorianDate} · <span className={styles.hijriDate}>{hijriDate}</span>
                    </p>
                </div>

                {/* Prayer Table */}
                <div className={styles.tableCard}>
                    {/* Table Header */}
                    <div className={styles.tableHeader}>
                        <span className={styles.tableHeaderCell}>Prayer</span>
                        <span className={styles.tableHeaderCell}>Athan</span>
                        <span className={styles.tableHeaderCell}>Iqamah</span>
                    </div>

                    {/* Regular Prayers */}
                    {regularPrayers.map((prayer) => (
                        <div
                            key={prayer.name}
                            className={`${styles.prayerRow} ${prayer.is_next ? styles.prayerRowActive : ''}`}
                        >
                            <div className={styles.prayerName}>
                                <span className={styles.prayerIcon}>
                                    {prayerIcons[prayer.name] || '🕐'}
                                </span>
                                {prayer.name}
                                {prayer.is_next && (
                                    <span className={styles.nextBadge}>Next</span>
                                )}
                            </div>
                            <div className={styles.prayerTime}>
                                {prayer.athan ? (
                                    <>
                                        <span className={styles.timeLabel}>Athan</span>
                                        <span className={styles.timeValue}>{prayer.athan}</span>
                                    </>
                                ) : (
                                    <span className={styles.timeValue}>{prayer.time}</span>
                                )}
                            </div>
                            <div className={styles.prayerTime}>
                                {prayer.iqamah && (
                                    <>
                                        <span className={styles.timeLabel}>Iqamah</span>
                                        <span className={styles.timeValue}>{prayer.iqamah}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Jumuah Row */}
                    {jumuah && (
                        <div className={`${styles.prayerRow} ${styles.jumuahRow}`}>
                            <div className={styles.prayerName}>
                                <span className={styles.prayerIcon}>{prayerIcons.Jumuah}</span>
                                Jumu&apos;ah Prayer
                            </div>
                            <div className={styles.prayerTime}>
                                <span className={styles.timeValue}>{jumuah.time}</span>
                            </div>
                            <div className={styles.prayerTime} />
                        </div>
                    )}
                </div>

                {/* Footer Links */}
                <div className={styles.widgetFooter}>
                    <a href="#" className={styles.footerLink}>
                        <CalendarIcon className={styles.footerIcon} />
                        View Monthly Calendar
                    </a>
                    <a href="#" className={styles.footerLink}>
                        <BellIcon className={styles.footerIcon} />
                        Subscribe to Reminders
                    </a>
                    <a href="#" className={styles.footerLink}>
                        <DownloadIcon className={styles.footerIcon} />
                        Download PDF
                    </a>
                </div>
            </div>
        </section>
    );
}

// Icons
function CalendarIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

function BellIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
    );
}

function DownloadIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}
