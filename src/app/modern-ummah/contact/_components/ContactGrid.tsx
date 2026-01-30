'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import type { ContactInfo } from '../_data';
import styles from '../Contact.module.css';

interface ContactGridProps {
    contactInfo: ContactInfo;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
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

export function ContactGrid({ contactInfo }: ContactGridProps) {
    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.contactGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {/* Visit Us */}
                    <motion.div className={styles.contactCard} variants={itemVariants}>
                        <div className={styles.contactIconWrapper}>
                            <MapPin />
                        </div>
                        <h3 className={styles.contactCardTitle}>Visit Us</h3>
                        <p className={styles.contactCardText}>
                            {contactInfo.address.street}<br />
                            {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                        </p>
                        <a
                            href={contactInfo.address.directionsUrl}
                            className={styles.contactCardLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Directions <ArrowRight size={14} />
                        </a>
                    </motion.div>

                    {/* Call Us */}
                    <motion.div className={styles.contactCard} variants={itemVariants}>
                        <div className={styles.contactIconWrapper}>
                            <Phone />
                        </div>
                        <h3 className={styles.contactCardTitle}>Call Us</h3>
                        <p className={styles.contactCardText}>
                            Office: {contactInfo.phone.office}<br />
                            Emergency Janazah: {contactInfo.phone.emergency}
                        </p>
                        <a
                            href={`tel:${contactInfo.phone.office.replace(/[^0-9]/g, '')}`}
                            className={styles.contactCardLink}
                        >
                            Call Now <ArrowRight size={14} />
                        </a>
                    </motion.div>

                    {/* Email Us */}
                    <motion.div className={styles.contactCard} variants={itemVariants}>
                        <div className={styles.contactIconWrapper}>
                            <Mail />
                        </div>
                        <h3 className={styles.contactCardTitle}>Email Us</h3>
                        <p className={styles.contactCardText}>
                            General Inquiries<br />
                            {contactInfo.email}
                        </p>
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className={styles.contactCardLink}
                        >
                            Send Email <ArrowRight size={14} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
