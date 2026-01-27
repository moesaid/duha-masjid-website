import Link from 'next/link';
import styles from '../_styles/Hero.module.css';

interface HeroProps {
    title?: string;
    subtitle?: string;
    templateId: string;
}

export function Hero({
    title = 'Welcome to Your Community Hub!',
    subtitle = 'Where families connect, youth thrive, and everyone belongs. Join us for prayers, programs, sports, and so much more!',
    templateId,
}: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.heroShapes} aria-hidden="true" />

            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <span className={styles.heroLabel}>
                        🌟 Something for Everyone
                    </span>

                    <h1 className={styles.heroTitle}>{title}</h1>

                    <p className={styles.heroSubtitle}>{subtitle}</p>

                    <div className={styles.heroActions}>
                        <Link href={`/${templateId}/events`} className={styles.btnPrimary}>
                            See What&apos;s Happening
                        </Link>
                        <Link href={`/${templateId}/programs`} className={styles.btnSecondary}>
                            Our Programs
                        </Link>
                    </div>
                </div>

                <div className={styles.heroImage} aria-hidden="true">
                    👨‍👩‍👧‍👦
                </div>
            </div>
        </section>
    );
}
