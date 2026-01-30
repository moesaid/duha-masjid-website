'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Instagram } from 'lucide-react';
import styles from '../Youth.module.css';

const mentors = [
    { name: 'Br. Ahmed', role: 'Youth Director', image: '/images/arab-men-1.jpg' },
    { name: 'Sr. Fatima', role: 'Sisters\' Lead', image: '/images/arab-women-1.jpg' },
    { name: 'Br. Omar', role: 'High School', image: '/images/arab-men-2.jpg' },
    { name: 'Sr. Sarah', role: 'College Lead', image: '/images/arab-women-2.jpg' },
    { name: 'Br. Yusuf', role: 'Sports & Activities', image: '/images/arab-men-3.jpg' },
];

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export function Mentorship() {
    return (
        <section id="join" className={styles.mentorshipSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.mentorshipContent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeIn}
                >
                    <div className={styles.mentorshipText}>
                        <span className={styles.sectionLabel}>💚 Led by Mentors Who Care</span>
                        <h2 className={styles.mentorshipTitle}>
                            Big Brothers & Big Sisters
                        </h2>
                        <p className={styles.mentorshipDesc}>
                            Our mentors are here to listen, guide, and support—no judgment,
                            just genuine care. They've been where you are and want to help
                            you navigate life as a young Muslim.
                        </p>

                        <div className={styles.mentorAvatars}>
                            {mentors.map((mentor, i) => (
                                <div
                                    key={mentor.name}
                                    className={styles.mentorAvatar}
                                    style={{ zIndex: mentors.length - i }}
                                    title={`${mentor.name} - ${mentor.role}`}
                                >
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        fill
                                        className={styles.mentorImage}
                                    />
                                </div>
                            ))}
                            <span className={styles.mentorCount}>+5 more</span>
                        </div>
                    </div>

                    <div className={styles.connectCard}>
                        <h3 className={styles.connectTitle}>Stay Connected</h3>
                        <p className={styles.connectDesc}>
                            Join our group chat for announcements, memes, and
                            last-minute hangout plans.
                        </p>

                        <div className={styles.connectButtons}>
                            <a href="#" className={styles.whatsappBtn}>
                                <MessageCircle size={18} />
                                WhatsApp Group
                            </a>
                            <a href="#" className={styles.instagramBtn}>
                                <Instagram size={18} />
                                @UmmahYouth
                            </a>
                        </div>

                        <div className={styles.connectNote}>
                            <Heart size={14} />
                            <span>We can't wait to meet you!</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
