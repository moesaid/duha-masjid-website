'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, CalendarPlus } from 'lucide-react';
import type { JumuahInfo } from '../_data';
import styles from '../Prayer.module.css';

interface JumuahCardProps {
    info: JumuahInfo;
}

const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

export function JumuahCard({ info }: JumuahCardProps) {
    return (
        <div className={styles.jumuahSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>
                    <Users size={16} />
                    Friday Prayer
                </span>
                <h2 className={styles.sectionTitle}>Jumu&apos;ah</h2>
                <p className={styles.sectionSubtitle}>
                    The weekly gathering that unites our community in remembrance,
                    reflection, and renewed purpose.
                </p>
            </div>

            <div className={styles.jumuahContainer}>
                <motion.div
                    className={styles.jumuahCard}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInScale}
                >
                    {/* Khateeb spotlight with rotating ring */}
                    <div className={styles.khateebSpotlight}>
                        <div className={styles.khateebRing} />
                        <div className={styles.khateebImageWrapper}>
                            <Image
                                src={info.khateeb.image}
                                alt={info.khateeb.name}
                                width={120}
                                height={120}
                                className={styles.khateebImage}
                            />
                        </div>
                    </div>

                    <p className={styles.khateebName}>{info.khateeb.name}</p>
                    <p className={styles.khateebTitle}>{info.khateeb.title}</p>

                    <p className={styles.jumuahTopicLabel}>This Week&apos;s Khutbah</p>
                    <h3 className={styles.jumuahTopic}>{info.topic}</h3>
                    <p className={styles.jumuahTopicArabic}>الصبر في الشدائد</p>

                    {/* Animated timeline */}
                    <div className={styles.timeline}>
                        <div className={styles.timelineStep}>
                            <div className={styles.timelineDot} />
                            <span className={styles.timelineTime}>{info.khutbahTime}</span>
                            <span className={styles.timelineLabel}>Khutbah</span>
                        </div>
                        <div className={styles.timelineLine} />
                        <div className={styles.timelineStep}>
                            <div className={styles.timelineDot} />
                            <span className={styles.timelineTime}>{info.salahTime}</span>
                            <span className={styles.timelineLabel}>Salah</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.button
                        className={styles.jumuahCta}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            marginTop: '2rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.5rem',
                            background: 'linear-gradient(135deg, oklch(0.65 0.15 175), oklch(0.55 0.15 175))',
                            color: 'white',
                            border: 'none',
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            boxShadow: '0 4px 16px oklch(0.65 0.15 175 / 0.3)',
                        }}
                    >
                        <CalendarPlus size={16} />
                        Add to Calendar
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}
