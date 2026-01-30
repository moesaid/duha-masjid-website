'use client';

import { motion } from 'framer-motion';
import { Heart, Moon, Star, Sun, Bell, Calendar } from 'lucide-react';
import type { SpecialPrayer } from '../_data';
import styles from '../Prayer.module.css';

interface SpecialPrayersGridProps {
    prayers: SpecialPrayer[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

const iconMap = {
    heart: Heart,
    moon: Moon,
    star: Star,
    sun: Sun,
};

const themeClassMap = {
    minimal: styles.themeMinimal,
    night: styles.themeNight,
    festive: styles.themeFestive,
};

export function SpecialPrayersGrid({ prayers }: SpecialPrayersGridProps) {
    return (
        <div className={styles.specialSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>
                    <Star size={16} />
                    Special Prayers
                </span>
                <h2 className={styles.sectionTitle}>Sacred Occasions</h2>
                <p className={styles.sectionSubtitle}>
                    From moments of remembrance to celebrations of faith,
                    we gather for life&apos;s most significant spiritual milestones.
                </p>
            </div>

            <div className={styles.specialContainer}>
                <motion.div
                    className={styles.specialGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {prayers.map((prayer) => {
                        const Icon = iconMap[prayer.icon];
                        const themeClass = themeClassMap[prayer.theme];

                        return (
                            <motion.div
                                key={prayer.id}
                                variants={itemVariants}
                                className={`${styles.specialCard} ${themeClass}`}
                                whileHover={{ y: -6 }}
                            >
                                <div className={styles.specialCardIcon}>
                                    <Icon size={32} />
                                </div>
                                <h3 className={styles.specialCardName}>{prayer.name}</h3>
                                <p className={styles.specialCardArabic}>{prayer.arabicName}</p>
                                <p className={styles.specialCardDesc}>{prayer.description}</p>

                                {prayer.schedule && (
                                    <span className={styles.specialCardSchedule}>
                                        <Calendar size={14} />
                                        {prayer.schedule}
                                    </span>
                                )}

                                {prayer.hasNotification && (
                                    <motion.div
                                        className={styles.notificationToggle}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Bell size={18} />
                                        <span className={styles.notificationToggleText}>
                                            Get Notified
                                        </span>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
