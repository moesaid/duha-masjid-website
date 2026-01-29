import Image from 'next/image';
import styles from '../CounselingPage.module.scss';

interface TranquilityHeroProps {
    arabicVerse: string;
    verseReference: string;
    title: string;
    tagline: string;
    backgroundImage?: string;
}

export function TranquilityHero({
    arabicVerse,
    verseReference,
    title,
    tagline,
    backgroundImage = '/images/heritage/islamic-wood-pattern.jpg'
}: TranquilityHeroProps) {
    return (
        <section className={styles.tranquilityHero}>
            <div className={styles.heroBackground}>
                <Image
                    src={backgroundImage}
                    alt=""
                    fill
                    priority
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.calligraphy}>
                    <span className={styles.arabicVerse}>{arabicVerse}</span>
                    <span className={styles.verseReference}>{verseReference}</span>
                </div>
                <h1 className={styles.heroTitle}>{title}</h1>
                <p className={styles.heroTagline}>{tagline}</p>
            </div>
        </section>
    );
}
