import Link from 'next/link';
import styles from '../_styles/Hero.module.css';

interface HeroProps {
    title?: string;
    subtitle?: string;
    templateId: string;
}

export function Hero({
    title = 'Find Your Peace',
    subtitle = 'Step away from the noise of daily life. Our sanctuary offers a space for quiet reflection, spiritual growth, and connection with the Divine.',
    templateId,
}: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.heroWaves} aria-hidden="true" />

            <div className={styles.heroContent}>
                <div className={styles.heroIcon}>🕊️</div>

                <h1 className={styles.heroTitle}>
                    {title.split(' ').map((word, i) => (
                        i === title.split(' ').length - 1 ? (
                            <span key={i} className={styles.heroTitleHighlight}> {word}</span>
                        ) : (
                            <span key={i}>{word} </span>
                        )
                    ))}
                </h1>

                <p className={styles.heroSubtitle}>{subtitle}</p>

                <div className={styles.heroActions}>
                    <Link href={`/${templateId}/prayer-times`} className={styles.btnPrimary}>
                        View Prayer Times
                    </Link>
                    <Link href={`/${templateId}/visit`} className={styles.btnSecondary}>
                        Plan Your Visit
                    </Link>
                </div>

                <div className={styles.heroQuote}>
                    <p className={styles.heroQuoteText}>
                        &quot;Verily, in the remembrance of Allah do hearts find rest.&quot;
                    </p>
                    <p className={styles.heroQuoteSource}>— Surah Ar-Ra&apos;d 13:28</p>
                </div>
            </div>
        </section>
    );
}
