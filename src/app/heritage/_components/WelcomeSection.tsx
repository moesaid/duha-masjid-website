'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../_styles/WelcomeSection.module.scss';

export function WelcomeSection() {
    const [imageError, setImageError] = useState(false);

    return (
        <section className={styles.welcomeSection}>
            <div className={styles.welcomeContainer}>
                {/* Left: Arch-shaped image */}
                <div className={styles.imageColumn}>
                    <div className={styles.archFrame}>
                        {imageError ? (
                            <div className={styles.archImagePlaceholder}>
                                <span className={styles.placeholderIcon}>🕌</span>
                            </div>
                        ) : (
                            <Image
                                src="/images/shykh.jpg"
                                alt="Sheikh Ahmad Hassan - Imam & Director"
                                className={styles.archImage}
                                width={480}
                                height={640}
                                priority
                                onError={() => setImageError(true)}
                            />
                        )}
                    </div>
                </div>

                {/* Right: Text content */}
                <div className={styles.textColumn}>


                    <p className={styles.sectionLabel}>Who We Are</p>
                    <h2 className={styles.sectionTitle}>
                        A Sanctuary of Peace,<br />
                        Prayer &amp; Community
                    </h2>

                    <p className={styles.dropCapParagraph}>
                        Welcome to Al-Noor Masjid, where we have been serving our beloved community
                        since 1985. Our doors are open to all who seek spiritual growth, knowledge,
                        and a sense of belonging in the path of Islam.
                    </p>

                    <p className={styles.paragraph}>
                        Whether you are a lifelong Muslim or someone curious about our faith,
                        we invite you to experience the warmth of our community. From daily prayers
                        to educational programs, from family services to youth activities, Al-Noor
                        Masjid is more than a place of worship – it is a home for your soul.
                    </p>

                    <p className={styles.paragraph}>
                        We believe in building bridges, nurturing hearts, and strengthening the bonds
                        of brotherhood and sisterhood that unite us as one Ummah.
                    </p>

                    {/* Signature */}
                    <div className={styles.signature}>
                        <p className={styles.signatureName}>Sheikh Ahmad Hassan</p>
                        <p className={styles.signatureTitle}>Imam &amp; Director</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
