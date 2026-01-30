'use client';

import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';
import type { PrayerTime } from '../_data';
import styles from '../Prayer.module.css';

interface PrayerTimesWidgetProps {
    prayers: PrayerTime[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

// Custom SVG icons for each prayer time
function FajrIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="16" r="4" />
            <path d="M12 4v3" />
            <path d="M6.5 7.5l2 2" />
            <path d="M17.5 7.5l-2 2" />
            <path d="M3 20h18" />
            <path d="M19 12l1.5-1" />
            <path d="M5 12l-1.5-1" />
        </svg>
    );
}

function DhuhrIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M4.93 4.93l1.41 1.41" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M6.34 17.66l-1.41 1.41" />
            <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
    );
}

function AsrIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 4v2" />
            <path d="M12 18v2" />
            <path d="M6 6l1.5 1.5" />
            <path d="M16.5 16.5L18 18" />
            <path d="M4 12h2" />
            <path d="M18 12h2" />
            <path d="M6 18l1.5-1.5" />
            <path d="M16.5 7.5L18 6" />
        </svg>
    );
}

function MaghribIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 17h18" />
            <path d="M12 17V7" />
            <circle cx="12" cy="7" r="3" />
            <path d="M6 14l2-2" />
            <path d="M18 14l-2-2" />
        </svg>
    );
}

function IshaIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            <circle cx="17" cy="5" r="1" fill="currentColor" />
            <circle cx="19" cy="9" r="0.5" fill="currentColor" />
            <circle cx="15" cy="3" r="0.5" fill="currentColor" />
        </svg>
    );
}

const iconMap: Record<string, React.FC> = {
    fajr: FajrIcon,
    dhuhr: DhuhrIcon,
    asr: AsrIcon,
    maghrib: MaghribIcon,
    isha: IshaIcon,
};

export function PrayerTimesWidget({ prayers }: PrayerTimesWidgetProps) {
    return (
        <div className={styles.prayerTimesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>
                    <Clock size={16} />
                    Daily Prayers
                </span>
                <h2 className={styles.sectionTitle}>Today&apos;s Prayer Times</h2>
                <p className={styles.sectionSubtitle}>
                    Stand with your community in worship. The illuminated prayer
                    indicates the current congregational prayer.
                </p>
            </div>

            <div className={styles.prayerTimesContainer}>
                {/* Golden timeline track */}
                <div className={styles.timelineTrack} />

                <motion.div
                    className={styles.prayerTimesGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {prayers.map((prayer) => {
                        const IconComponent = iconMap[prayer.id] || Clock;

                        return (
                            <motion.div
                                key={prayer.id}
                                variants={itemVariants}
                                className={`${styles.prayerCard} ${prayer.isActive ? styles.active : ''}`}
                            >
                                <div className={styles.prayerCardIcon}>
                                    {prayer.isActive ? (
                                        <Users size={28} />
                                    ) : (
                                        <IconComponent />
                                    )}
                                </div>
                                <h3 className={styles.prayerCardName}>{prayer.name}</h3>
                                <p className={styles.prayerCardArabic}>{prayer.arabicName}</p>
                                <div className={styles.prayerCardTimes}>
                                    <div className={styles.timeBlock}>
                                        <span className={styles.timeBlockLabel}>Adhan</span>
                                        <span className={styles.timeBlockValue}>{prayer.adhan}</span>
                                    </div>
                                    <div className={styles.timeBlock}>
                                        <span className={styles.timeBlockLabel}>Iqamah</span>
                                        <span className={`${styles.timeBlockValue} ${styles.iqamah}`}>
                                            {prayer.iqamah}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
