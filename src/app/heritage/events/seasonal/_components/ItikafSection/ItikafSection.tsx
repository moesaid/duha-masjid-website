import Link from 'next/link';
import { Star, Moon, ChevronRight } from 'lucide-react';
import styles from './ItikafSection.module.scss';

export function ItikafSection() {
    return (
        <section className={styles.itikafSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>The Last Ten Nights</span>
                <h2 className={styles.sectionTitle}>I'tikaf & Laylatul Qadr</h2>
            </div>
            <div className={styles.itikafGrid}>
                <div className={styles.itikafCard}>
                    <div className={styles.itikafHeader}>
                        <Star size={24} />
                        <h3>I'tikaf Registration</h3>
                    </div>
                    <p className={styles.itikafText}>
                        Seclude yourself in the Masjid during the blessed last ten nights.
                        Space is limited — register early to secure your spot.
                    </p>
                    <Link href="/heritage/join/register?program=itikaf" className={styles.registerBtn}>
                        Register for I'tikaf
                        <ChevronRight size={16} />
                    </Link>
                </div>
                <div className={styles.itikafCard}>
                    <div className={styles.itikafHeader}>
                        <Moon size={24} />
                        <h3>The 27th Night (Khatm)</h3>
                    </div>
                    <span className={styles.itikafHighlight}>
                        "Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni"
                        <br />
                        (O Allah, You are Forgiving and love forgiveness, so forgive me)
                    </span>
                    <p className={styles.itikafText}>
                        Special Qiyam program with Khatm al-Quran completion.
                        Program begins after Isha and continues until Fajr.
                    </p>
                </div>
            </div>
        </section>
    );
}
