import Image from 'next/image';
import { Calendar } from 'lucide-react';
import styles from './HeroSection.module.scss';

export function HeroSection() {
    return (
        <section className={styles.weeklyHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/weekly.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.weeklyIcon}><Calendar size={32} /></div>
                <span className={styles.arabicTitle}>الفَعَالِيَات</span>
                <h1 className={styles.heroTitle}>Weekly Programs</h1>
                <p className={styles.heroTagline}>Join our regular gatherings for knowledge, worship, and community</p>
            </div>
        </section>
    );
}
