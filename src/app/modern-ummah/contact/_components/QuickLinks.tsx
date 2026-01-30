'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Users, HandHeart, ArrowRight } from 'lucide-react';
import styles from '../Contact.module.css';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const links = [
    {
        href: '/modern-ummah/services/counseling',
        label: 'Book an Imam',
        description: 'Schedule private counseling',
        icon: Calendar,
    },
    {
        href: '/modern-ummah/contact',
        label: 'Hall Rental',
        description: 'Weddings & events',
        icon: Users,
    },
    {
        href: '/modern-ummah/join/volunteer',
        label: 'Volunteer',
        description: 'Join our team',
        icon: HandHeart,
    },
];

export function QuickLinks() {
    return (
        <section className={styles.quickLinks}>
            <div className={styles.container}>
                <div className={styles.quickLinksHeader}>
                    <h2 className={styles.quickLinksTitle}>Looking for something else?</h2>
                    <p className={styles.quickLinksSubtitle}>Here are some common requests</p>
                </div>

                <motion.div
                    className={styles.quickLinksGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {links.map((link) => {
                        const Icon = link.icon;
                        return (
                            <motion.div key={link.href} variants={fadeIn}>
                                <Link href={link.href} className={styles.quickLinkCard}>
                                    <div className={styles.quickLinkIcon}>
                                        <Icon />
                                    </div>
                                    <div className={styles.quickLinkContent}>
                                        <span className={styles.quickLinkLabel}>{link.label}</span>
                                        <span className={styles.quickLinkDesc}>{link.description}</span>
                                    </div>
                                    <ArrowRight className={styles.quickLinkArrow} />
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
