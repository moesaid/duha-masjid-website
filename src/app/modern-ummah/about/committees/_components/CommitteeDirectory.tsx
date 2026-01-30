'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users2, Calendar } from 'lucide-react';
import { committees, categoryLabels, type Committee, type CommitteeCategory } from '../_data';
import styles from '../Committees.module.css';

const categories: CommitteeCategory[] = ['all', 'governance', 'programs', 'services', 'outreach'];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
} as const;

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
} as const;

function getStatusClass(status: Committee['status']): string {
    switch (status) {
        case 'open':
            return styles.statusOpen;
        case 'active':
            return styles.statusActive;
        case 'full':
            return styles.statusFull;
    }
}

export function CommitteeDirectory() {
    const [activeCategory, setActiveCategory] = useState<CommitteeCategory>('all');

    const filteredCommittees = activeCategory === 'all'
        ? committees
        : committees.filter((c) => c.category === activeCategory);

    return (
        <section className={styles.directorySection}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Our Task Forces</span>
                    <h2 className={styles.sectionTitle}>Committee Directory</h2>
                    <p className={styles.sectionDescription}>
                        Dedicated volunteers working together to serve our community through specialized committees.
                    </p>
                </div>

                {/* Category Tabs - Pill Style */}
                <div className={styles.tabsContainer}>
                    <div className={styles.tabsList}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`${styles.tabsTrigger} ${activeCategory === cat ? styles.tabsActive : ''}`}
                            >
                                {categoryLabels[cat]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Committee Grid - New Card Design */}
                <motion.div
                    className={styles.committeeGrid}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeCategory}
                >
                    {filteredCommittees.map((committee) => (
                        <motion.div key={committee.id} variants={cardVariants}>
                            <Link href={`/modern-ummah/about/committees/${committee.id}`} className={styles.cardLink}>
                                <article className={styles.committeeCard}>
                                    {/* Gradient Accent Strip */}
                                    <div
                                        className={styles.cardAccent}
                                        style={{
                                            background: `linear-gradient(135deg, ${committee.iconColor}, oklch(0.55 0.15 175))`
                                        }}
                                    />

                                    {/* Card Body */}
                                    <div className={styles.cardBody}>
                                        {/* Icon + Status Row */}
                                        <div className={styles.cardTopRow}>
                                            <div
                                                className={styles.iconCircle}
                                                style={{ background: committee.iconColor }}
                                            >
                                                <committee.icon size={22} />
                                            </div>
                                            <span className={`${styles.statusBadge} ${getStatusClass(committee.status)}`}>
                                                {committee.statusLabel}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className={styles.cardTitle}>{committee.name}</h3>

                                        {/* Description */}
                                        <p className={styles.cardDescription}>{committee.description}</p>

                                        {/* Meta Row */}
                                        <div className={styles.cardMeta}>
                                            <div className={styles.metaItem}>
                                                <Users2 size={14} />
                                                <span>{committee.chair}</span>
                                            </div>
                                            <div className={styles.metaItem}>
                                                <Calendar size={14} />
                                                <span>{committee.meetingSchedule.split(',')[0]}</span>
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className={styles.cardFooterRow}>
                                            <span className={styles.memberCount}>
                                                {committee.members.length + 1} members
                                            </span>
                                            <span className={styles.viewLink}>
                                                Explore <ArrowUpRight size={16} />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
