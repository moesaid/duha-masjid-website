'use client';

import Link from 'next/link';
import styles from '../_styles/Hero.module.css';

interface HeroProps {
    title?: string;
    subtitle?: string;
    templateId: string;
}

export function Hero({
    title = 'Welcome to Al-Noor Masjid',
    subtitle = 'A sacred space for worship, learning, and community. Join us in building a stronger ummah together.',
    templateId,
}: HeroProps) {
    return (
        <section className={styles.hero}>
            {/* Multi-layer background patterns */}
            <div className={styles.heroBackground} aria-hidden="true" />

            {/* Decorative corner ornaments */}
            <div className={`${styles.cornerOrnament} ${styles.cornerTopLeft}`} aria-hidden="true" />
            <div className={`${styles.cornerOrnament} ${styles.cornerTopRight}`} aria-hidden="true" />
            <div className={`${styles.cornerOrnament} ${styles.cornerBottomLeft}`} aria-hidden="true" />
            <div className={`${styles.cornerOrnament} ${styles.cornerBottomRight}`} aria-hidden="true" />

            {/* Main content */}
            <div className={styles.heroContent}>
                {/* Bismillah in Arabic */}
                <p className={styles.bismillah} lang="ar" dir="rtl">
                    بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </p>

                {/* Welcome label with decorative lines */}
                <p className={styles.welcomeLabel}>Welcome to Our Community</p>

                {/* Main title with accent */}
                <h1 className={styles.heroTitle}>
                    {title.split(' ').slice(0, 2).join(' ')}
                    <span className={styles.heroTitleAccent}>
                        {' '}{title.split(' ').slice(2).join(' ') || 'Al-Noor Masjid'}
                    </span>
                </h1>

                {/* Decorative divider */}
                <div className={styles.heroDivider} aria-hidden="true">
                    <span className={styles.dividerDiamond} />
                </div>

                {/* Subtitle */}
                <p className={styles.heroSubtitle}>{subtitle}</p>

                {/* Call-to-action buttons */}
                <div className={styles.heroActions}>
                    <Link href={`/${templateId}/donate`} className={styles.btnPrimary}>
                        Donate
                    </Link>
                    <Link href={`/${templateId}/new-here`} className={styles.btnSecondary}>
                        New Here?
                    </Link>
                </div>
            </div>

            {/* Islamic arch frame at bottom */}
            <div className={styles.heroArchContainer} aria-hidden="true">
                <div className={styles.heroArch}>
                    <div className={`${styles.archPillar} ${styles.archPillarLeft}`} />
                    <div className={`${styles.archPillar} ${styles.archPillarRight}`} />
                </div>
            </div>

            {/* Scroll hint inside arch */}
            <div className={styles.scrollHint}>
                <span className={styles.scrollHintText}>Explore</span>
                <ChevronDownIcon className={styles.scrollHintIcon} />
            </div>
        </section>
    );
}

function ChevronDownIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}
