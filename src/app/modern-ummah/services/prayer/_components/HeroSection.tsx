'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Compass } from 'lucide-react';
import styles from '../Prayer.module.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.3,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

type TimeOfDay = 'dawn' | 'day' | 'dusk' | 'night';

function getTimeOfDay(hour: number): TimeOfDay {
    if (hour >= 5 && hour < 7) return 'dawn';
    if (hour >= 7 && hour < 17) return 'day';
    if (hour >= 17 && hour < 19) return 'dusk';
    return 'night';
}

function getNextPrayer(hour: number): { name: string; timeRemaining: string; progress: number } {
    // Simplified logic based on approximate prayer times
    const prayers = [
        { name: 'Fajr', hour: 6 },
        { name: 'Dhuhr', hour: 13 },
        { name: 'Asr', hour: 16 },
        { name: 'Maghrib', hour: 18 },
        { name: 'Isha', hour: 20 },
    ];

    for (const prayer of prayers) {
        if (hour < prayer.hour) {
            const hoursLeft = prayer.hour - hour;
            const progress = ((24 - hoursLeft) / 24) * 100;
            return {
                name: prayer.name,
                timeRemaining: `${hoursLeft}h`,
                progress: Math.min(progress, 100),
            };
        }
    }

    // After Isha, next is Fajr
    const hoursUntilFajr = 24 - hour + 6;
    return {
        name: 'Fajr',
        timeRemaining: `${hoursUntilFajr}h`,
        progress: 85,
    };
}

export function HeroSection() {
    const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('day');
    const [nextPrayer, setNextPrayer] = useState({ name: 'Maghrib', timeRemaining: '2h 34m', progress: 65 });

    useEffect(() => {
        const hour = new Date().getHours();
        setTimeOfDay(getTimeOfDay(hour));
        setNextPrayer(getNextPrayer(hour));
    }, []);

    return (
        <section className={styles.hero}>
            {/* Animated sky gradient */}
            <div className={`${styles.heroSkyGradient} ${styles[timeOfDay]}`} />

            {/* Silhouette layer */}
            <div className={styles.heroSilhouette} />

            {/* Photo layer */}
            <div className={styles.heroImageLayer}>
                <Image
                    src="/images/quran-book.jpg"
                    alt="Prayer hall"
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroImageOverlay} />
            </div>

            {/* Content */}
            <div className={styles.heroContent}>
                <motion.div
                    className={styles.glassCard}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <p className={styles.heroArabic}>حَيَّ عَلَى الصَّلَاة</p>
                    <span className={styles.heroLabel}>
                        <Compass size={14} />
                        Prayer Services
                    </span>
                    <h1 className={styles.heroTitle}>
                        Come to Prayer,<br />
                        Come to Success.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Join us for daily congregational prayers in a space designed
                        for deep focus and spiritual connection. Experience the sacred
                        rhythm of the Ummah as we stand together in worship.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.countdownBadge}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <span className={styles.countdownLabel}>Next Prayer</span>
                    <span className={styles.countdownPrayer}>{nextPrayer.name}</span>
                    <span className={styles.countdownTime}>{nextPrayer.timeRemaining}</span>
                    <div
                        className={styles.countdownProgress}
                        style={{ width: `${nextPrayer.progress}%` }}
                    />
                </motion.div>
            </div>

            {/* Wave edge */}
            <div className={styles.waveEdge}>
                <svg
                    className={styles.waveSvg}
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
                        fill="var(--color-background)"
                    />
                </svg>
            </div>
        </section>
    );
}
