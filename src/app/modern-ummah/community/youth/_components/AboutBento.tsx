'use client';

import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Handshake } from 'lucide-react';
import styles from '../Youth.module.css';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export function AboutBento() {
    return (
        <section className={styles.bentoSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Our Promise to You</span>
                    <h2 className={styles.sectionTitle}>A Place Where You Belong</h2>
                </div>

                <motion.div
                    className={styles.bentoGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {/* Welcome Card */}
                    <motion.div className={`${styles.bentoCard} ${styles.large} ${styles.accent}`} custom={0} variants={cardVariants}>
                        <BookOpen size={32} style={{ marginBottom: '12px' }} />
                        <h3 className={styles.bentoTitle}>Learn Your Deen</h3>
                        <p className={styles.bentoText}>
                            Explore Islam in a way that makes sense. Ask the questions you&apos;ve
                            always wondered about. No judgment, just genuine learning together.
                        </p>
                    </motion.div>

                    {/* Stat Card */}
                    <motion.div className={styles.bentoCard} custom={1} variants={cardVariants}>
                        <span className={styles.bentoStat}>150+</span>
                        <span className={styles.bentoLabel}>Youth in Our Family</span>
                    </motion.div>

                    {/* Tall Card - Brotherhood */}
                    <motion.div className={`${styles.bentoCard} ${styles.tall}`} custom={2} variants={cardVariants}>
                        <Users size={28} style={{ marginBottom: '12px', color: 'var(--youth-accent)' }} />
                        <h3 className={styles.bentoTitle}>Find Your People</h3>
                        <p className={styles.bentoText}>
                            Being a young Muslim isn&apos;t always easy. Here, you&apos;ll find friends
                            who understand your struggles and celebrate your wins. Real
                            brotherhood. Real sisterhood.
                        </p>
                    </motion.div>

                    {/* Mentorship */}
                    <motion.div className={styles.bentoCard} custom={3} variants={cardVariants}>
                        <Handshake size={24} style={{ marginBottom: '8px', color: 'var(--youth-accent)' }} />
                        <h3 className={styles.bentoTitle}>Mentors Who Care</h3>
                        <p className={styles.bentoText}>
                            Adults who listen, not lecture. They&apos;ve been where you are.
                        </p>
                    </motion.div>

                    {/* Community Card */}
                    <motion.div className={`${styles.bentoCard} ${styles.large}`} custom={4} variants={cardVariants}>
                        <Heart size={28} style={{ marginBottom: '12px', color: 'var(--youth-accent)' }} />
                        <h3 className={styles.bentoTitle}>Serve Together</h3>
                        <p className={styles.bentoText}>
                            The Prophet ﷺ said the best of people are those who benefit others.
                            Join us in feeding the hungry, helping neighbors, and making a
                            real difference in our community.
                        </p>
                    </motion.div>

                    {/* Stat Card */}
                    <motion.div className={styles.bentoCard} custom={5} variants={cardVariants}>
                        <span className={styles.bentoStat}>Fri</span>
                        <span className={styles.bentoLabel}>Weekly Halaqas</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
