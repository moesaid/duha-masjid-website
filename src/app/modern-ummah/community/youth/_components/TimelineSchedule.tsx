'use client';

import { motion } from 'framer-motion';
import styles from '../Youth.module.css';

const schedule = [
    {
        day: 'Friday',
        event: 'Youth Halaqa',
        time: 'After Maghrib',
        description: 'Our weekly gathering. Islamic reminders, group discussions, and time to connect over snacks.',
    },
    {
        day: 'Saturday',
        event: 'Fajr & Hike',
        time: '5:30 AM (Monthly)',
        description: 'Start the day right — Fajr prayer together, then watch the sunrise on a morning hike.',
    },
    {
        day: 'Saturday',
        event: 'Sports & Games',
        time: '4:00 PM',
        description: 'Basketball, soccer, volleyball. Come play, have fun, and make memories.',
    },
    {
        day: 'Sunday',
        event: 'Open Hours',
        time: '2:00 PM - 5:00 PM',
        description: 'Drop in anytime. Study, hang out, or just be with your community.',
    },
];

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export function TimelineSchedule() {
    return (
        <section className={styles.scheduleSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>When to Find Us</span>
                    <h2 className={styles.sectionTitle}>Weekly Schedule</h2>
                </div>

                <motion.div
                    className={styles.timeline}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    <div className={styles.timelineLine} />

                    {schedule.map((item, i) => (
                        <motion.div
                            key={`${item.day}-${item.event}`}
                            className={styles.timelineItem}
                            custom={i}
                            variants={itemVariants}
                        >
                            <div className={styles.timelineDot} />
                            <span className={styles.timelineDay}>{item.day}</span>
                            <div className={styles.timelineCard}>
                                <h3 className={styles.timelineEvent}>{item.event}</h3>
                                <p className={styles.timelineTime}>{item.time}</p>
                                <p className={styles.timelineDesc}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
