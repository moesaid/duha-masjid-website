'use client';

import Link from 'next/link';
import styles from '../_styles/ServicesGrid.module.scss';

interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
}

export function ServicesGrid() {
    const services: Service[] = [
        {
            id: 'daily-prayers',
            title: 'Daily Prayers',
            description: 'Join us for the five daily prayers in congregation. Experience the spiritual upliftment of praying together as one community.',
            icon: <PrayerIcon />,
            href: '/heritage/prayer-times',
        },
        {
            id: 'weekend-school',
            title: 'Weekend School',
            description: 'Comprehensive Islamic education for children and youth. Quran, Arabic, and Islamic studies every Saturday and Sunday.',
            icon: <BookIcon />,
            href: '/heritage/education',
        },
        {
            id: 'counseling',
            title: 'Family Counseling',
            description: 'Confidential spiritual and family counseling services provided by our trained staff and Imam.',
            icon: <HeartIcon />,
            href: '/heritage/services/counseling',
        },
        {
            id: 'nikah',
            title: 'Nikah Services',
            description: 'Complete matrimonial services including pre-marital counseling, nikah ceremonies, and wedding facilities.',
            icon: <RingsIcon />,
            href: '/heritage/services/nikah',
        },
        {
            id: 'funeral',
            title: 'Janazah Services',
            description: 'Compassionate funeral and burial services following Islamic traditions. Available 24/7 for our community.',
            icon: <MoonIcon />,
            href: '/heritage/services/funeral',
        },
        {
            id: 'zakat',
            title: 'Zakat Distribution',
            description: 'Transparent collection and distribution of Zakat to eligible recipients within our community and beyond.',
            icon: <HandsIcon />,
            href: '/heritage/services/zakat',
        },
    ];

    return (
        <section className={styles.servicesSection}>
            <div className={styles.servicesContainer}>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>What We Offer</p>
                    <h2 className={styles.sectionTitle}>Our Pillars of Service</h2>
                    <p className={styles.sectionSubtitle}>
                        Serving our community with dedication, compassion, and excellence in all aspects of Islamic life.
                    </p>
                </div>

                {/* Services Grid */}
                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                            <Link href={service.href} className={styles.serviceLink}>
                                Learn More <span className={styles.serviceLinkArrow}>→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Icons (line-art style)
function PrayerIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L12 6M12 18L12 22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12L6 12M18 12L22 12M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
            <circle cx="12" cy="12" r="4" />
        </svg>
    );
}

function BookIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <path d="M8 7h8M8 11h6" />
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    );
}

function RingsIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="12" r="5" />
            <circle cx="15" cy="12" r="5" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

function HandsIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v0" />
            <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6" />
            <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
    );
}
