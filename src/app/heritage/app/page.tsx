// App Download Page - HERITAGE ALIGNED
// Design: Modern app showcase with download links
'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './AppPage.module.scss';
import { Smartphone, Bell, Clock, Calendar, MessageCircle, Heart, CheckCircle } from 'lucide-react';

// App Features
const features = [
    {
        icon: Clock,
        title: 'Prayer Times',
        description: 'Accurate prayer times with customizable notifications and Qibla direction.'
    },
    {
        icon: Calendar,
        title: 'Events Calendar',
        description: 'Stay updated on all masjid programs, classes, and community events.'
    },
    {
        icon: Bell,
        title: 'Push Notifications',
        description: 'Receive important announcements, schedule changes, and reminders.'
    },
    {
        icon: MessageCircle,
        title: 'Community Feed',
        description: 'Connect with fellow community members and stay informed.'
    },
    {
        icon: Heart,
        title: 'Easy Donations',
        description: 'Support the masjid with secure, one-tap donations directly from the app.'
    }
];

// Screenshots (placeholder descriptions)
const screenshots = [
    { id: 1, alt: 'Prayer times screen', src: '/images/heritage/mosque-dome.jpg' },
    { id: 2, alt: 'Events calendar screen', src: '/images/heritage/mosque-interior.jpg' },
    { id: 3, alt: 'Donation screen', src: '/images/heritage/shykh.jpg' }
];

export default function AppPage() {
    return (
        <main className={styles.appPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroPattern} />
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <span className={styles.heroBadge}>Now Available</span>
                        <h1 className={styles.heroTitle}>Al-Noor Masjid App</h1>
                        <p className={styles.heroSubtitle}>
                            Your connection to the masjid, right in your pocket. Prayer times, events,
                            donations, and more — all in one beautiful app.
                        </p>
                        <div className={styles.downloadButtons}>
                            <Link href="#" className={styles.downloadBtn}>
                                <AppleIcon />
                                <span>
                                    <small>Download on the</small>
                                    App Store
                                </span>
                            </Link>
                            <Link href="#" className={styles.downloadBtn}>
                                <PlayStoreIcon />
                                <span>
                                    <small>Get it on</small>
                                    Google Play
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroPhone}>
                        <div className={styles.phoneFrame}>
                            <div className={styles.phoneScreen}>
                                <Smartphone size={120} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.featuresSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Everything You Need</h2>
                    <p className={styles.sectionSubtitle}>Features designed to keep you connected</p>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feature, idx) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={idx} className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <IconComponent size={24} />
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Screenshots Section */}
            <section className={styles.screenshotsSection}>
                <h2 className={styles.screenshotsTitle}>See It in Action</h2>
                <div className={styles.screenshotsGrid}>
                    {screenshots.map((screenshot) => (
                        <div key={screenshot.id} className={styles.screenshotWrapper}>
                            <Image
                                src={screenshot.src}
                                alt={screenshot.alt}
                                fill
                                className={styles.screenshotImage}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContent}>
                    <h2 className={styles.benefitsTitle}>Why Use Our App?</h2>
                    <ul className={styles.benefitsList}>
                        <li>
                            <CheckCircle size={20} />
                            Never miss a prayer with accurate, location-based prayer times
                        </li>
                        <li>
                            <CheckCircle size={20} />
                            Get instant notifications for important announcements
                        </li>
                        <li>
                            <CheckCircle size={20} />
                            RSVP for events and manage your registrations
                        </li>
                        <li>
                            <CheckCircle size={20} />
                            Support the masjid with secure, hassle-free donations
                        </li>
                        <li>
                            <CheckCircle size={20} />
                            Access khutbah recordings and educational content
                        </li>
                        <li>
                            <CheckCircle size={20} />
                            Connect with community members in a safe environment
                        </li>
                    </ul>
                </div>
            </section>

            {/* Download CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Download Today</h2>
                    <p className={styles.ctaText}>
                        Join thousands of community members already using the Al-Noor Masjid app.
                    </p>
                    <div className={styles.downloadButtons}>
                        <Link href="#" className={styles.downloadBtn}>
                            <AppleIcon />
                            <span>
                                <small>Download on the</small>
                                App Store
                            </span>
                        </Link>
                        <Link href="#" className={styles.downloadBtn}>
                            <PlayStoreIcon />
                            <span>
                                <small>Get it on</small>
                                Google Play
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Store Icons
function AppleIcon() {
    return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    );
}

function PlayStoreIcon() {
    return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
    );
}
