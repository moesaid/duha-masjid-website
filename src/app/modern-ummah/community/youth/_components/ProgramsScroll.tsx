'use client';

import { motion } from 'framer-motion';
import { Book, Users, Gamepad2, Heart, Compass, MessageCircle, type LucideIcon } from 'lucide-react';
import styles from '../Youth.module.css';

interface Program {
    icon: LucideIcon;
    title: string;
    ageGroup: string;
    description: string;
}

const programs: Program[] = [
    {
        icon: Compass,
        title: 'Explorers Circle',
        ageGroup: 'Ages 11-13',
        description: 'Fun activities, games, and stories from the Seerah. Build your Islamic identity while making awesome friends.',
    },
    {
        icon: Book,
        title: 'Young Believers',
        ageGroup: 'Ages 14-17',
        description: 'Real talk about faith, life, and everything in between. A safe space to ask questions and grow together.',
    },
    {
        icon: Users,
        title: 'Young Adults',
        ageGroup: 'Ages 18-25',
        description: 'Navigate college, careers, and life while staying connected to your deen and community.',
    },
    {
        icon: Heart,
        title: 'Community Service',
        ageGroup: 'All Ages',
        description: 'Feed the hungry, help neighbors, visit the sick. Follow the Prophetic example of serving others.',
    },
    {
        icon: Gamepad2,
        title: 'Sports & Recreation',
        ageGroup: 'All Ages',
        description: 'Basketball, soccer, hiking, and more. Stay healthy, have fun, and bond with your brothers.',
    },
    {
        icon: MessageCircle,
        title: 'Peer Support',
        ageGroup: 'Ages 14+',
        description: 'Trained youth mentors who listen without judgment. You don\'t have to face challenges alone.',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export function ProgramsScroll() {
    return (
        <section className={styles.programsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>What We Do Together</span>
                    <h2 className={styles.sectionTitle}>Programs for Every Age</h2>
                </div>
            </div>

            <motion.div
                className={styles.programsScroll}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
            >
                {programs.map((program, i) => {
                    const Icon = program.icon;
                    return (
                        <motion.div
                            key={program.title}
                            className={styles.programCard}
                            custom={i}
                            variants={cardVariants}
                        >
                            <div className={styles.programIcon}>
                                <Icon size={28} />
                            </div>
                            <h3 className={styles.programTitle}>{program.title}</h3>
                            <span className={styles.programAge}>{program.ageGroup}</span>
                            <p className={styles.programDesc}>{program.description}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
