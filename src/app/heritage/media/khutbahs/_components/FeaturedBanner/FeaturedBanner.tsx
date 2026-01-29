import { Play, ChevronRight } from 'lucide-react';
import { latestKhutbah } from '../../_data';
import styles from '../_shared.module.scss';

interface FeaturedBannerProps {
    onPlay: () => void;
}

export function FeaturedBanner({ onPlay }: FeaturedBannerProps) {
    return (
        <section className={styles.featuredBanner}>
            <div className={styles.container}>
                <button className={styles.featuredPlayBtn} onClick={onPlay}>
                    <div className={styles.playIcon}><Play size={24} /></div>
                    <div className={styles.playInfo}>
                        <span className={styles.playLabel}>Latest Khutbah</span>
                        <span className={styles.playTitle}>{latestKhutbah.title}</span>
                        <span className={styles.playMeta}>{latestKhutbah.speaker} • {latestKhutbah.date}</span>
                    </div>
                    <ChevronRight size={20} className={styles.playArrow} />
                </button>
            </div>
        </section>
    );
}
