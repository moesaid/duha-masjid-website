import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { Feature, Screenshot } from '../_data';
import { DownloadButtons } from './HeroSection';
import styles from '../AppPage.module.scss';

interface FeaturesSectionProps {
    features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
    return (
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
    );
}

interface ScreenshotsSectionProps {
    screenshots: Screenshot[];
}

export function ScreenshotsSection({ screenshots }: ScreenshotsSectionProps) {
    return (
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
    );
}

interface BenefitsSectionProps {
    benefits: string[];
}

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
    return (
        <section className={styles.benefitsSection}>
            <div className={styles.benefitsContent}>
                <h2 className={styles.benefitsTitle}>Why Use Our App?</h2>
                <ul className={styles.benefitsList}>
                    {benefits.map((benefit, idx) => (
                        <li key={idx}>
                            <CheckCircle size={20} />
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function CtaSection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Download Today</h2>
                <p className={styles.ctaText}>
                    Join thousands of community members already using the Al-Noor Masjid app.
                </p>
                <DownloadButtons />
            </div>
        </section>
    );
}
