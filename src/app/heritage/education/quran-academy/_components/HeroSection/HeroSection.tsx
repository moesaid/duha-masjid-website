import Image from 'next/image';
import { BookOpen } from 'lucide-react';
import styles from './HeroSection.module.scss';

export function HeroSection() {
    return (
        <section className={styles.guardiansHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/quran-book.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.guardiansBadge}>
                    <BookOpen size={28} />
                    <span>حافظ القرآن</span>
                </div>
                <h1 className={styles.heroTitle}>Quran Academy</h1>
                <p className={styles.heroTagline}>
                    Guardians of the Quran &mdash; Preserving the Divine Words
                </p>
                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>150+</span>
                        <span className={styles.statLabel}>Students</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>12</span>
                        <span className={styles.statLabel}>Huffaz Graduated</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
