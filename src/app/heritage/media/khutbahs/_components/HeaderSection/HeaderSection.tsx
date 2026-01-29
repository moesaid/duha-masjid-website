import Link from 'next/link';
import { Search, ChevronDown, Play, ChevronRight, Clock, ExternalLink, Mic } from 'lucide-react';
import { speakers, years, languages, featuredSeries, latestKhutbah } from '../../_data';
import styles from '../_shared.module.scss';

export function HeaderSection() {
    return (
        <header className={styles.headerSection}>
            <div className={styles.headerContent}>
                <p className={styles.headerCalligraphy}>
                    وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ
                </p>
                <p className={styles.headerVerse}>
                    "And remind, for indeed, the reminder benefits the believers"
                    <span className={styles.verseRef}>— Quran 51:55</span>
                </p>
                <h1 className={styles.headerTitle}>Khutbah Archive</h1>
                <p className={styles.headerSubtitle}>
                    Friday Sermons · Eid Khutbahs · Special Lectures
                </p>
            </div>
        </header>
    );
}
