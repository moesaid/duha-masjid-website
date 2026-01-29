import Image from 'next/image';
import { BookOpen } from 'lucide-react';
import { schoolStats } from '../../_data';
import styles from './HeroSection.module.scss';

export function HeroSection() {
    return (
        <section className={styles.madrasahHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/weekend-school.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.schoolIcon}>
                    <BookOpen size={32} />
                </div>
                <span className={styles.arabicTitle}>المَدْرَسَة</span>
                <h1 className={styles.heroTitle}>Weekend Madrasah</h1>
                <p className={styles.heroTagline}>Nurturing the next generation of Muslim leaders</p>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{schoolStats.students}</span>
                        <span className={styles.statLabel}>Students Enrolled</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{schoolStats.yearsRunning}</span>
                        <span className={styles.statLabel}>Years of Excellence</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
