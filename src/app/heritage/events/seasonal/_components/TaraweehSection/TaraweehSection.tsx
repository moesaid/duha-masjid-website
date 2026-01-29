import { Moon } from 'lucide-react';
import { taraweehInfo } from '../../_data';
import styles from './TaraweehSection.module.scss';

export function TaraweehSection() {
    return (
        <section className={styles.taraweehSection}>
            <div className={styles.taraweehCard}>
                <div className={styles.taraweehHeader}>
                    <Moon size={28} />
                    <h2 className={styles.taraweehTitle}>
                        Qiyam al-Layl
                        <span className={styles.taraweehArabic}>قيام الليل</span>
                    </h2>
                </div>
                <div className={styles.taraweehGrid}>
                    <div className={styles.taraweehItem}>
                        <span className={styles.taraweehLabel}>Start Time</span>
                        <span className={styles.taraweehValue}>{taraweehInfo.startTime}</span>
                    </div>
                    <div className={styles.taraweehItem}>
                        <span className={styles.taraweehLabel}>Reciters</span>
                        <span className={styles.taraweehValue}>{taraweehInfo.reciters}</span>
                    </div>
                    <div className={styles.taraweehItem}>
                        <span className={styles.taraweehLabel}>Tonight</span>
                        <span className={styles.taraweehValue}>Juz {taraweehInfo.currentJuz}</span>
                    </div>
                </div>
                <div className={styles.juzProgress}>
                    <div className={styles.juzLabel}>
                        <span>Khatm Progress</span>
                        <span>{taraweehInfo.currentJuz} / {taraweehInfo.totalJuz} Juz</span>
                    </div>
                    <div className={styles.juzBar}>
                        <div className={styles.juzFill} style={{ width: `${(taraweehInfo.currentJuz / taraweehInfo.totalJuz) * 100}%` }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
