'use client';

import { motion } from 'framer-motion';
import styles from '../Mission.module.css';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

// Geometric wireframe SVG
function GeometricWireframe() {
    return (
        <svg
            className={styles.heroGeometric}
            viewBox="0 0 400 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
        >
            {/* Outer octagon */}
            <polygon points="200,20 340,80 380,200 340,320 200,380 60,320 20,200 60,80" />
            {/* Inner octagon */}
            <polygon points="200,80 280,120 310,200 280,280 200,320 120,280 90,200 120,120" />
            {/* Cross lines */}
            <line x1="200" y1="20" x2="200" y2="380" />
            <line x1="20" y1="200" x2="380" y2="200" />
            <line x1="60" y1="80" x2="340" y2="320" />
            <line x1="340" y1="80" x2="60" y2="320" />
            {/* Center details */}
            <circle cx="200" cy="200" r="40" />
            <circle cx="200" cy="200" r="15" />
        </svg>
    );
}

export function NorthStarHero() {
    return (
        <section className={styles.hero}>
            <GeometricWireframe />

            <motion.div
                className={styles.heroContent}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <span className={styles.heroBadge}>Est. 2026</span>
                <h1 className={styles.heroTitle}>
                    Cultivating a Community<br />
                    of Prophetic Excellence.
                </h1>
                <p className={styles.heroSubtitle}>
                    We exist to nurture faith, empower minds, and serve humanity—
                    building a vibrant Muslim community rooted in tradition and
                    engaged with the modern world.
                </p>
            </motion.div>
        </section>
    );
}
