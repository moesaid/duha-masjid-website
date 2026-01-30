'use client';

import { motion } from 'framer-motion';
import { Star, BookOpen, HeartHandshake, Link, Shield, Compass, Sparkles } from 'lucide-react';
import type { CoreValue } from '../_data';
import styles from '../Mission.module.css';

interface CoreValuesGridProps {
    values: CoreValue[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    star: Star,
    book: BookOpen,
    heart: HeartHandshake,
    link: Link,
    shield: Shield,
    compass: Compass,
};

export function CoreValuesGrid({ values }: CoreValuesGridProps) {
    return (
        <section className={styles.valuesSection}>
            <div className={styles.valuesContainer}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>
                        <Sparkles size={16} />
                        Core Values
                    </span>
                    <h2 className={styles.sectionTitle}>The Principles We Live By</h2>
                    <p className={styles.sectionSubtitle}>
                        These values guide every decision we make and every service we provide.
                    </p>
                </div>

                <motion.div
                    className={styles.valuesGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {values.map((value) => {
                        const Icon = iconMap[value.icon];

                        return (
                            <motion.div
                                key={value.id}
                                className={styles.valueCard}
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                            >
                                {/* Watermark icon */}
                                <div className={styles.valueCardWatermark}>
                                    <Icon size={140} strokeWidth={0.5} />
                                </div>

                                <div className={styles.valueCardIcon}>
                                    <Icon size={28} />
                                </div>
                                <h3 className={styles.valueCardName}>{value.name}</h3>
                                <p className={styles.valueCardArabic}>{value.arabicName}</p>
                                <p className={styles.valueCardDesc}>{value.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
