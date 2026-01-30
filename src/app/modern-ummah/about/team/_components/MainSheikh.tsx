'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Check, Calendar, Clock } from 'lucide-react';
import type { TeamMember, ScheduleItem } from '../_data';
import styles from '../Team.module.css';

interface MainSheikhProps {
    imam: TeamMember;
    schedule: ScheduleItem[];
}

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
    },
};

export function MainSheikh({ imam, schedule }: MainSheikhProps) {
    return (
        <section className={styles.mainSheikhSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.mainSheikhGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeIn}
                >
                    {/* Left: Image with decorative frame */}
                    <div className={styles.sheikhImageContainer}>
                        <div className={styles.sheikhImageFrame}>
                            <div className={styles.sheikhImageDecoration} />
                            <div className={styles.sheikhImageWrapper}>
                                <Image
                                    src={imam.image}
                                    alt={imam.name}
                                    fill
                                    className={styles.sheikhImage}
                                />
                            </div>
                        </div>
                        <div className={styles.sheikhNameCard}>
                            <h1 className={styles.sheikhName}>{imam.name}</h1>
                            <p className={styles.sheikhRole}>{imam.role}</p>
                        </div>
                    </div>

                    {/* Right: Bio, Credentials & Schedule */}
                    <div className={styles.sheikhContent}>
                        <p className={styles.sheikhBio}>{imam.bio}</p>

                        <div className={styles.credentialsSection}>
                            <h3>
                                <GraduationCap size={18} />
                                Credentials & Experience
                            </h3>
                            <div className={styles.credentialsList}>
                                {imam.credentials?.map((cred, i) => (
                                    <div key={i} className={styles.credentialItem}>
                                        <Check size={16} className={styles.credentialCheck} />
                                        <span>{cred}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Weekly Schedule Card */}
                        <div className={styles.scheduleCard}>
                            <div className={styles.scheduleHeader}>
                                <Calendar size={18} />
                                <span>Weekly Schedule</span>
                            </div>
                            <div className={styles.scheduleGrid}>
                                {schedule.map((item, i) => (
                                    <div key={i} className={styles.scheduleItem}>
                                        <p className={styles.scheduleDay}>{item.day}</p>
                                        <p className={styles.scheduleTime}>
                                            <Clock size={14} />
                                            {item.time}
                                        </p>
                                        <p className={styles.scheduleActivity}>{item.activity}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
