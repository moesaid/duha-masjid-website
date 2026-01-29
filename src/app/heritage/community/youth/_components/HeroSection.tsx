import Link from 'next/link';
import { Users, FileText } from 'lucide-react';
import styles from '../YouthPage.module.scss';

export function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroOverlay} />
            <div className={styles.heroContent}>
                <p className={styles.heroVerse}>
                    &ldquo;They were youths who believed in their Lord, and We increased them in guidance.&rdquo;
                </p>
                <span className={styles.verseRef}>— Quran 18:13</span>

                <h1 className={styles.heroTitle}>
                    Cultivating the Leaders of Tomorrow
                </h1>
                <p className={styles.heroSubtitle}>
                    Building brotherhood and sisterhood through Faith, Fun, and Service.
                </p>

                <div className={styles.heroCtas}>
                    <Link href="/heritage/community" className={styles.primaryCta}>
                        <Users size={20} />
                        Join Duha Circle
                    </Link>
                    <Link href="/forms/youth-waiver" className={styles.secondaryCta}>
                        <FileText size={20} />
                        Parent Waiver Form
                    </Link>
                </div>
            </div>
        </section>
    );
}
