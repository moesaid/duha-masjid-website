'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Coffee, Zap, Briefcase } from 'lucide-react';
import styles from '../Youth.module.css';

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const tracks = [
    {
        id: 'high-school',
        title: 'High School (YM)',
        ageRange: 'Grades 9-12',
        icon: Gamepad2,
        accentIcon: Zap,
        color: 'cyan',
        features: [
            'Weekly Halaqas (Sundays)',
            'FIFA & Gaming Tournaments',
            'Lock-ins & Movie Nights',
            'Summer Camp Adventures',
        ],
        vibe: 'Learn your deen while having the most fun. We don\'t do boring here.',
    },
    {
        id: 'college',
        title: 'College & Young Professionals',
        ageRange: 'Ages 18-30',
        icon: Coffee,
        accentIcon: Briefcase,
        color: 'lime',
        features: [
            'Career Networking Events',
            'Spiritual Mentorship',
            'Chai Nights & Deep Talks',
            'Professional Development',
        ],
        vibe: 'Navigate life after high school with your Muslim community by your side.',
    },
];

export function ProgramTracks() {
    return (
        <section className={styles.programTracksSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Find Your Crew</span>
                    <h2 className={styles.sectionTitle}>Program Tracks</h2>
                    <p className={styles.sectionSubtitle}>
                        Different ages, different vibes, same family.
                    </p>
                </div>

                <motion.div
                    className={styles.tracksGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {tracks.map((track, i) => {
                        const Icon = track.icon;
                        const AccentIcon = track.accentIcon;
                        return (
                            <motion.div
                                key={track.id}
                                className={`${styles.trackCard} ${styles[track.color]}`}
                                custom={i}
                                variants={cardVariants}
                                whileHover={{ scale: 1.03, y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className={styles.trackIconCircle}>
                                    <Icon size={28} />
                                    <AccentIcon size={14} className={styles.trackAccentIcon} />
                                </div>

                                <div className={styles.trackHeader}>
                                    <h3 className={styles.trackTitle}>{track.title}</h3>
                                    <span className={styles.trackAge}>{track.ageRange}</span>
                                </div>

                                <p className={styles.trackVibe}>{track.vibe}</p>

                                <ul className={styles.trackFeatures}>
                                    {track.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
