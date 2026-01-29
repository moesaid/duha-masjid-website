import Image from 'next/image';
import { Headphones } from 'lucide-react';
import styles from './HeroSection.module.scss';

export function HeroSection() {
    return (
        <section className={styles.seekersHero}>
            <div className={styles.heroBackground}>
                <Image
                    src="/images/halaqa-circle.jpg"
                    alt=""
                    fill
                    priority
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.wisdomCalligraphy}>
                    <span className={styles.arabicWisdom}>
                        اطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى اللَّحْدِ
                    </span>
                    <span className={styles.wisdomTranslation}>
                        &quot;Seek knowledge from the cradle to the grave&quot;
                    </span>
                </div>

                <h1 className={styles.heroTitle}>Lifelong Learning</h1>
                <p className={styles.heroTagline}>
                    Daily and weekly circles to nourish the soul and sharpen the mind
                </p>

                <div className={styles.heroBadge}>
                    <Headphones size={16} />
                    <span>All classes broadcast live on YouTube &amp; Mixlr</span>
                </div>
            </div>
        </section>
    );
}
