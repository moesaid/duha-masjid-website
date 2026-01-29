import Link from 'next/link';
import Image from 'next/image';
import { Flower2, Diamond, Sparkles, ChevronRight } from 'lucide-react';
import styles from './HeroSection.module.scss';

export function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroPattern} />

            {/* Arch-Masked Image */}
            <div className={styles.heroImageContainer}>
                <div className={styles.archMask}>
                    <Image
                        src="/images/sisters-gathering.jpg"
                        alt="Sisters gathering at the masjid"
                        fill
                        className={styles.heroPhoto}
                    />
                    <div className={styles.imageOverlay} />
                </div>
            </div>

            <div className={styles.headerContent}>
                <span className={styles.headerBadge}>
                    <Flower2 size={14} />
                    Sisters Committee
                </span>

                <p className={styles.bismillah}>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>

                <h1 className={styles.heroTitle}>
                    A Sanctuary of <span className={styles.titleAccent}>Sisterhood</span>
                </h1>

                <p className={styles.heroQuote}>
                    &ldquo;The believing men and believing women are allies of one another.&rdquo;
                </p>
                <span className={styles.quoteRef}>— Quran 9:71</span>

                <p className={styles.heroDescription}>
                    Where women grow in faith, forge lifelong bonds,
                    and serve the community with grace and purpose.
                </p>

                <div className={styles.divider}>
                    <Diamond className={styles.dividerIcon} />
                </div>

                <div className={styles.heroActions}>
                    <Link href="/contact" className={styles.primaryCta}>
                        <Sparkles size={18} />
                        Join Our Circle
                    </Link>
                    <Link href="#programs" className={styles.secondaryCta}>
                        Explore Programs
                        <ChevronRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
