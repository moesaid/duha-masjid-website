'use client';

import { motion } from 'framer-motion';
import { Tent, Pizza, Moon, Palette, Dumbbell, BookOpen } from 'lucide-react';
import styles from '../Youth.module.css';

const hangouts = [
    {
        id: 1,
        month: 'JAN',
        day: '31',
        title: 'Friday Night Live',
        description: 'Games, Pizza, & Chill',
        icon: Pizza,
        type: 'brothers',
    },
    {
        id: 2,
        month: 'FEB',
        day: '02',
        title: 'Sisters\' Paint Night',
        description: 'Art & Chai',
        icon: Palette,
        type: 'sisters',
    },
    {
        id: 3,
        month: 'FEB',
        day: '08',
        title: 'Brothers\' Qiyam',
        description: 'Night Prayer & Suhoor',
        icon: Moon,
        type: 'brothers',
    },
    {
        id: 4,
        month: 'FEB',
        day: '15',
        title: 'Outdoor Hiking',
        description: 'Nature & Brotherhood',
        icon: Tent,
        type: 'everyone',
    },
    {
        id: 5,
        month: 'FEB',
        day: '22',
        title: 'Sports Day',
        description: 'Basketball Tournament',
        icon: Dumbbell,
        type: 'everyone',
    },
    {
        id: 6,
        month: 'MAR',
        day: '01',
        title: 'Study Circle',
        description: 'Tafsir & Discussion',
        icon: BookOpen,
        type: 'everyone',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export function UpcomingHangouts() {
    return (
        <section id="hangouts" className={styles.hangoutsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>🗓️ Mark Your Calendar</span>
                    <h2 className={styles.sectionTitle}>Upcoming Hangouts</h2>
                </div>
            </div>

            <motion.div
                className={styles.hangoutsScroll}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
            >
                {hangouts.map((hangout, i) => {
                    const Icon = hangout.icon;
                    return (
                        <motion.div
                            key={hangout.id}
                            className={`${styles.ticketCard} ${styles[hangout.type]}`}
                            custom={i}
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div className={styles.ticketDate}>
                                <span className={styles.ticketMonth}>{hangout.month}</span>
                                <span className={styles.ticketDay}>{hangout.day}</span>
                            </div>

                            <div className={styles.ticketDivider} />

                            <div className={styles.ticketContent}>
                                <div className={styles.ticketIcon}>
                                    <Icon size={20} />
                                </div>
                                <h3 className={styles.ticketTitle}>{hangout.title}</h3>
                                <p className={styles.ticketDesc}>{hangout.description}</p>
                            </div>

                            <button className={styles.rsvpBtn}>RSVP</button>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
