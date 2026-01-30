'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import styles from '../Youth.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroMesh} />
            <div className={styles.heroGrid} />

            <motion.div
                className={styles.heroContent}
                initial="hidden"
                animate="visible"
            >
                <motion.span className={styles.heroBadge} custom={0} variants={fadeUp}>
                    بسم الله الرحمن الرحيم
                </motion.span>

                <motion.h1 className={styles.heroTitle} custom={1} variants={fadeUp}>
                    <span className={styles.heroTitleLine}>Welcome to Your</span>
                    <span className={styles.heroTitleLine}>Second Home</span>
                </motion.h1>

                <motion.p className={styles.heroSubtitle} custom={2} variants={fadeUp}>
                    This is a place where you belong. Where you can ask the hard questions,
                    find real friends who share your values, and grow closer to Allah
                    alongside brothers and sisters who get it.
                </motion.p>

                <motion.div custom={3} variants={fadeUp}>
                    <Link href="#join" className={styles.heroCta}>
                        Come Join Us
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </motion.div>

            <div className={styles.heroScroll}>
                <span>See What We Do</span>
                <ChevronDown size={18} />
            </div>
        </section>
    );
}
