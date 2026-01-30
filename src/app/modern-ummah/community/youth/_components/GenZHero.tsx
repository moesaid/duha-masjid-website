'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import styles from '../Youth.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const floatIn = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export function GenZHero() {
    return (
        <section className={styles.genZHero}>
            {/* Background Image with Noise Overlay */}
            <div className={styles.heroImageWrapper}>
                <Image
                    src="/images/youth-learning.jpg"
                    alt="Youth group learning together"
                    fill
                    priority
                    className={styles.heroImage}
                />
                <div className={styles.heroNoise} />
                <div className={styles.heroGradient} />
            </div>

            {/* Memphis-style floating shapes */}
            <div className={styles.memphisShapes}>
                <div className={styles.memphisCircle} />
                <div className={styles.memphisStar} />
                <div className={styles.memphisSquiggle} />
            </div>

            <div className={`${styles.container} ${styles.heroContent}`}>
                <motion.div
                    className={styles.heroText}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span className={styles.heroTagline} custom={0} variants={fadeUp}>
                        ✨ For Muslim Youth, By Muslim Youth
                    </motion.span>

                    <motion.h1 className={styles.heroHeadline} custom={1} variants={fadeUp}>
                        <span>Faith.</span>
                        <span>Friendship.</span>
                        <span>Future.</span>
                    </motion.h1>

                    <motion.p className={styles.heroSubtext} custom={2} variants={fadeUp}>
                        Your tribe is here. Whether you need real friends, want to level up your
                        deen, or just need a halal place to hang — we got you.
                    </motion.p>

                    <motion.div className={styles.heroCtas} custom={3} variants={fadeUp}>
                        <Link href="#join" className={styles.primaryBtn}>
                            <MessageCircle size={18} />
                            Join the WhatsApp Group
                        </Link>
                        <Link href="#hangouts" className={styles.secondaryBtn}>
                            See Upcoming Events
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Floating glassmorphism event badge */}
                <motion.div
                    className={styles.floatingBadge}
                    initial="hidden"
                    animate="visible"
                    variants={floatIn}
                >
                    <div className={styles.badgeIcon}>
                        <Calendar size={20} />
                    </div>
                    <div className={styles.badgeContent}>
                        <span className={styles.badgeLabel}>Next Event</span>
                        <span className={styles.badgeTitle}>Friday Night Live</span>
                        <span className={styles.badgeTime}>This Friday @ 7PM</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
