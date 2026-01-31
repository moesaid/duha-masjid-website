'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Heart } from 'lucide-react';
import styles from '../Mission.module.css';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

export function CTABanner() {
    return (
        <section className={styles.ctaSection}>
            <motion.div
                className={styles.ctaContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeIn}
            >
                <h2 className={styles.ctaTitle}>This vision needs your hands.</h2>
                <p className={styles.ctaSubtitle}>
                    Whether you have time, talent, or treasure to share—there&apos;s a
                    place for you in building this community.
                </p>
                <div className={styles.ctaButtons}>
                    <Link href="/modern-ummah/community/volunteers">
                        <motion.button
                            className={`${styles.ctaButton} ${styles.primary}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Users size={18} />
                            Volunteer
                        </motion.button>
                    </Link>
                    <Link href="/modern-ummah/donate">
                        <motion.button
                            className={`${styles.ctaButton} ${styles.outline}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Heart size={18} />
                            Donate
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
