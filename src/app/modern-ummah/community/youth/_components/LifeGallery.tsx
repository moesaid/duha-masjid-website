'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../Youth.module.css';

const images = [
    {
        src: '/images/youth-learning.jpg',
        caption: 'Halaqas & Learning',
        shape: 'pill',
        size: 'large',
    },
    {
        src: '/images/halaqa-circle.jpg',
        caption: 'Study Circles',
        shape: 'squircle',
        size: 'medium',
    },
    {
        src: '/images/mosque-community.jpg',
        caption: 'Community Service',
        shape: 'oval',
        size: 'medium',
    },
    {
        src: '/images/sisters-gathering.jpg',
        caption: 'Sisters\' Gatherings',
        shape: 'squircle',
        size: 'large',
    },
    {
        src: '/images/future-generations.jpg',
        caption: 'Building Future Leaders',
        shape: 'pill',
        size: 'medium',
    },
];

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export function LifeGallery() {
    return (
        <section className={styles.gallerySection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>📸 Real Moments</span>
                    <h2 className={styles.sectionTitle}>Life at the Youth Center</h2>
                </div>

                <motion.div
                    className={styles.masonryGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {images.map((image, i) => (
                        <motion.div
                            key={image.src}
                            className={`${styles.masonryItem} ${styles[image.shape]} ${styles[image.size]}`}
                            custom={i}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                        >
                            <Image
                                src={image.src}
                                alt={image.caption}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className={styles.masonryImage}
                            />
                            <div className={styles.masonryOverlay}>
                                <span className={styles.masonryCaption}>{image.caption}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
