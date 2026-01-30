'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import styles from '../Contact.module.css';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

export function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}>
                <Mail className={styles.heroIcon} />
            </div>

            <div className={styles.container}>
                <motion.div
                    className={styles.heroContent}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <h1 className={styles.heroTitle}>Let&apos;s Connect.</h1>
                    <p className={styles.heroSubtitle}>
                        Whether you have a question about prayer times, need spiritual
                        counseling, or just want to say salam, we are here.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
