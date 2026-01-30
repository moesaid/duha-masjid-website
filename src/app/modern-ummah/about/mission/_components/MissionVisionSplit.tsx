'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import styles from '../Mission.module.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export function MissionVisionSplit() {
    return (
        <section className={styles.splitSection}>
            <div className={styles.splitContainer}>
                <motion.div
                    className={styles.splitGrid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Mission Card */}
                    <motion.div
                        className={`${styles.splitCard} ${styles.missionCard}`}
                        variants={fadeInUp}
                    >
                        <span className={styles.splitCardLabel}>
                            <Target size={16} />
                            Our Mission — Today
                        </span>
                        <h2 className={styles.splitCardTitle}>
                            To serve the spiritual, educational, and social needs of our neighbors.
                        </h2>
                        <p className={styles.splitCardText}>
                            We are committed to providing a welcoming space for worship,
                            fostering Islamic education for all ages, and extending a helping
                            hand to those in need—regardless of faith, race, or background.
                            Our doors are open to anyone seeking knowledge, community, or support.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        className={`${styles.splitCard} ${styles.visionCard}`}
                        variants={fadeInUp}
                    >
                        <span className={styles.splitCardLabel}>
                            <Eye size={16} />
                            Our Vision — Tomorrow
                        </span>
                        <h2 className={styles.splitCardTitle}>
                            To be the leading model of Islamic civilization in the West.
                        </h2>
                        <p className={styles.splitCardText}>
                            We envision a future where our community exemplifies the
                            Prophetic tradition of excellence—known for our scholarly
                            contributions, humanitarian impact, and interfaith leadership.
                            A community that future generations are proud to inherit.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
