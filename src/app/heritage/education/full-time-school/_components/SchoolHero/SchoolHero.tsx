import Link from 'next/link';
import { Download, Shield } from 'lucide-react';
import styles from './SchoolHero.module.scss';

export function SchoolHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroOverlay} />
            <div className={styles.heroContent}>
                <div className={styles.schoolCrest}>
                    <Shield size={48} />
                    <span>Est. 2008</span>
                </div>
                <h1 className={styles.heroTitle}>Excellence in Faith & Academics</h1>
                <p className={styles.heroSubtitle}>
                    A fully accredited K-12 institution nurturing the leaders of tomorrow
                </p>
                <Link href="#" className={styles.heroCta}>
                    <Download size={18} />
                    Download 2026 Prospectus
                </Link>
            </div>
        </section>
    );
}
