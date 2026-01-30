'use client';

import { motion } from 'framer-motion';
import { Mic, Calendar, Play } from 'lucide-react';
import type { Khutbah } from '../_data';
import styles from '../Team.module.css';

interface KhutbahsSectionProps {
    khutbahs: Khutbah[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
    },
};

export function KhutbahsSection({ khutbahs }: KhutbahsSectionProps) {
    return (
        <section className={styles.khutbahsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>
                        <Mic size={16} />
                        Listen & Learn
                    </span>
                    <h2 className={styles.sectionTitle}>
                        Friday Khutbahs
                    </h2>
                </div>

                <motion.div
                    className={styles.khutbahsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {khutbahs.map((khutbah) => (
                        <motion.div
                            key={khutbah.id}
                            className={styles.khutbahCard}
                            variants={itemVariants}
                        >
                            <div className={styles.khutbahMeta}>
                                <Calendar size={14} />
                                {khutbah.date} • {khutbah.duration}
                            </div>
                            <h3 className={styles.khutbahTitle}>{khutbah.title}</h3>
                            <p className={styles.khutbahSpeaker}>{khutbah.speaker}</p>
                            <button className={styles.khutbahPlayBtn}>
                                <Play size={14} />
                                Listen Now
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
