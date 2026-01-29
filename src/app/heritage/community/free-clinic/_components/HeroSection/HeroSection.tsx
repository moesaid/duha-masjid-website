'use client';

import { Calendar, Phone } from 'lucide-react';
import styles from './HeroSection.module.scss';

interface HeroSectionProps {
    onBookAppointment?: () => void;
}

export function HeroSection({ onBookAppointment }: HeroSectionProps) {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.statusBadge}>
                    <span className={styles.statusDot} />
                    <span className={styles.statusText}>Now Accepting Patients</span>
                </div>

                <p className={styles.heroCalligraphy}>
                    &ldquo;And when I am ill, it is He who cures me.&rdquo;
                </p>
                <span className={styles.heroRef}>— Quran 26:80</span>

                <h1 className={styles.heroTitle}>Al-Shifa Community Clinic</h1>
                <p className={styles.heroSubtitle}>
                    Free, compassionate healthcare for the uninsured and underinsured.
                    Serving our community with dignity and excellence.
                </p>

                <div className={styles.heroCta}>
                    <button
                        className={`${styles.heroBtn} ${styles.primary}`}
                        onClick={onBookAppointment}
                    >
                        <Calendar size={18} />
                        Book Appointment
                    </button>
                    <a
                        href="tel:+15551234567"
                        className={`${styles.heroBtn} ${styles.secondary}`}
                    >
                        <Phone size={18} />
                        (555) 123-4567
                    </a>
                </div>
            </div>
        </section>
    );
}
