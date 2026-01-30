'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Car, Footprints, Baby, Droplets } from 'lucide-react';
import type { FacilityInfo } from '../_data';
import styles from '../Prayer.module.css';

interface FacilitiesAccordionProps {
    facilities: FacilityInfo[];
}

const iconMap: Record<string, React.ReactNode> = {
    parking: <Car size={20} />,
    shoes: <Footprints size={20} />,
    children: <Baby size={20} />,
    wudu: <Droplets size={20} />,
};

const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

export function FacilitiesAccordion({ facilities }: FacilitiesAccordionProps) {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className={styles.facilitiesSection}>
            {/* Full-width background image */}
            <div className={styles.facilitiesImageWrapper}>
                <Image
                    src="/images/sunlight-archway.jpg"
                    alt="Masjid archway with sunlight"
                    fill
                    className={styles.facilitiesImage}
                />
                <div className={styles.facilitiesOverlay} />
            </div>

            {/* Floating accordion card */}
            <div className={styles.facilitiesContent}>
                <motion.div
                    className={styles.facilitiesCard}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInRight}
                >
                    <div className={styles.facilitiesHeader}>
                        <h2 className={styles.facilitiesTitle}>Facilities & Etiquette</h2>
                        <p className={styles.facilitiesSubtitle}>
                            Everything you need for a peaceful visit
                        </p>
                    </div>

                    <div className={styles.accordionContainer}>
                        {facilities.map((facility) => (
                            <div
                                key={facility.id}
                                className={`${styles.accordionItem} ${openId === facility.id ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.accordionTrigger}
                                    onClick={() => toggleItem(facility.id)}
                                    aria-expanded={openId === facility.id}
                                >
                                    <span className={styles.accordionTriggerIcon}>
                                        {iconMap[facility.id] || <Droplets size={20} />}
                                    </span>
                                    <span className={styles.accordionTitle}>{facility.title}</span>
                                    <ChevronDown className={styles.accordionChevron} />
                                </button>
                                <AnimatePresence initial={false}>
                                    {openId === facility.id && (
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
                                                <p className={styles.accordionText}>{facility.content}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
