'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Layers } from 'lucide-react';
import type { StrategicPillar } from '../_data';
import styles from '../Mission.module.css';

interface StrategicPillarsAccordionProps {
    pillars: StrategicPillar[];
}

export function StrategicPillarsAccordion({ pillars }: StrategicPillarsAccordionProps) {
    const [openId, setOpenId] = useState<string | null>(pillars[0]?.id || null);

    const toggleItem = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className={styles.pillarsSection}>
            <div className={styles.pillarsContainer}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>
                        <Layers size={16} />
                        Strategic Pillars
                    </span>
                    <h2 className={styles.sectionTitle}>How We Achieve This</h2>
                    <p className={styles.sectionSubtitle}>
                        Our mission comes to life through focused areas of work.
                    </p>
                </div>

                <div className={styles.accordionContainer}>
                    {pillars.map((pillar, index) => (
                        <div
                            key={pillar.id}
                            className={`${styles.accordionItem} ${openId === pillar.id ? styles.open : ''}`}
                        >
                            <button
                                className={styles.accordionTrigger}
                                onClick={() => toggleItem(pillar.id)}
                                aria-expanded={openId === pillar.id}
                            >
                                <div className={styles.accordionTriggerContent}>
                                    <span className={styles.accordionNumber}>{index + 1}</span>
                                    <span className={styles.accordionTitle}>{pillar.title}</span>
                                </div>
                                <ChevronDown className={styles.accordionChevron} />
                            </button>
                            <AnimatePresence initial={false}>
                                {openId === pillar.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.35,
                                            ease: [0.25, 0.4, 0.25, 1]
                                        }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div className={styles.accordionContent}>
                                            <p className={styles.accordionDesc}>{pillar.description}</p>
                                            <ul className={styles.initiativesList}>
                                                {pillar.initiatives.map((initiative, i) => (
                                                    <li key={i} className={styles.initiativeItem}>
                                                        <span className={styles.initiativeBullet} />
                                                        {initiative}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
