'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users } from 'lucide-react';
import type { TeamMember } from '../_data';
import styles from '../Team.module.css';

interface ResidentScholarsProps {
    scholars: TeamMember[];
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

export function ResidentScholars({ scholars }: ResidentScholarsProps) {
    return (
        <section className={styles.scholarsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>
                        <Users size={16} />
                        Our Team
                    </span>
                    <h2 className={styles.sectionTitle}>
                        Resident Scholars & Instructors
                    </h2>
                </div>

                <motion.div
                    className={styles.scholarsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {scholars.map((scholar) => (
                        <motion.div
                            key={scholar.id}
                            className={styles.scholarCard}
                            variants={itemVariants}
                        >
                            <div className={styles.scholarImageWrapper}>
                                <Image
                                    src={scholar.image}
                                    alt={scholar.name}
                                    fill
                                    className={styles.scholarImage}
                                />
                            </div>
                            <div className={styles.scholarContent}>
                                <h3 className={styles.scholarName}>{scholar.name}</h3>
                                <p className={styles.scholarRole}>{scholar.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
