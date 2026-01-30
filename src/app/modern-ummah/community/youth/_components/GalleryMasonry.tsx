'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../Youth.module.css';

const images = [
    { src: '/images/youth-1.jpg', caption: 'Friday Halaqa' },
    { src: '/images/youth-2.jpg', caption: 'Sports Day' },
    { src: '/images/youth-3.jpg', caption: 'Community Service' },
    { src: '/images/youth-4.jpg', caption: 'Eid Celebration' },
    { src: '/images/youth-5.jpg', caption: 'Brotherhood' },
];

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export function GalleryMasonry() {
    return (
        <section className={styles.gallerySection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Memories</span>
                    <h2 className={styles.sectionTitle}>Moments Together</h2>
                </div>

                <motion.div
                    className={styles.galleryGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {images.map((image, i) => (
                        <motion.div
                            key={image.src}
                            className={styles.galleryItem}
                            custom={i}
                            variants={itemVariants}
                        >
                            <Image
                                src={image.src}
                                alt={image.caption}
                                fill
                                sizes="(max-width: 768px) 100vw, 25vw"
                                className={styles.galleryImage}
                            />
                            <div className={styles.galleryOverlay}>
                                <span className={styles.galleryCaption}>{image.caption}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
