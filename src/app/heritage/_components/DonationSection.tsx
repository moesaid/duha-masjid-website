'use client';

import Link from 'next/link';
import styles from '../_styles/DonationSection.module.scss';

interface GivingLevel {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export function DonationSection() {
    const givingLevels: GivingLevel[] = [
        {
            id: 'general',
            title: 'General Fund',
            description: 'Support daily operations, utilities, and maintenance of the masjid.',
            icon: '🏛️',
        },
        {
            id: 'zakat',
            title: 'Zakat',
            description: 'Fulfill your obligation. 100% distributed to eligible recipients.',
            icon: '🤲',
        },
        {
            id: 'construction',
            title: 'Expansion Fund',
            description: 'Help us grow. Contribute to our new community center project.',
            icon: '🏗️',
        },
    ];

    return (
        <section className={styles.donationSection}>
            {/* Parallax background with pattern */}
            <div className={styles.parallaxBackground} aria-hidden="true" />

            <div className={styles.donationContainer}>
                {/* Section Header */}
                <p className={styles.sectionLabel}>Sadaqah Jariyah</p>
                <h2 className={styles.sectionTitle}>Support Your Masjid</h2>
                <p className={styles.sectionSubtitle}>
                    &ldquo;The believer&apos;s shade on the Day of Resurrection will be their charity.&rdquo;
                    <br />— Prophet Muhammad ﷺ
                </p>

                {/* Giving Levels */}
                <div className={styles.givingLevels}>
                    {givingLevels.map((level) => (
                        <Link
                            key={level.id}
                            href={`/heritage/donate?fund=${level.id}`}
                            className={styles.givingTile}
                        >
                            <span className={styles.givingIcon}>{level.icon}</span>
                            <h3 className={styles.givingTitle}>{level.title}</h3>
                            <p className={styles.givingDescription}>{level.description}</p>
                        </Link>
                    ))}
                </div>

                {/* Main Donate Button */}
                <Link href="/heritage/donate" className={styles.donateButton}>
                    Donate Now
                </Link>
            </div>
        </section>
    );
}
