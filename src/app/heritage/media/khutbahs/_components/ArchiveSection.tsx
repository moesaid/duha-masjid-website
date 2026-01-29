import { Play, Clock, User, MoreVertical, Download, Share2, Loader2 } from 'lucide-react';
import { Khutbah, latestKhutbah } from '../_data';
import styles from '../KhutbahsPage.module.scss';

interface ArchiveSectionProps {
    displayedKhutbahs: Khutbah[];
    hasMore: boolean;
    isLoading: boolean;
    loadMoreRef: React.RefObject<HTMLButtonElement | null>;
    loadMore: () => void;
    onPlay: (khutbah: typeof latestKhutbah) => void;
}

export function ArchiveSection({
    displayedKhutbahs,
    hasMore,
    isLoading,
    loadMoreRef,
    loadMore,
    onPlay
}: ArchiveSectionProps) {
    return (
        <section className={styles.archiveSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>All Khutbahs</h2>
                    <p className={styles.archiveNote}>
                        <Clock size={14} /> Khutbahs are uploaded every Friday by 5:00 PM
                    </p>
                </div>

                <div className={styles.archiveList}>
                    {displayedKhutbahs.map((khutbah) => (
                        <div key={khutbah.id} className={styles.episodeCard}>
                            <div className={styles.dateLeaf}>
                                <span className={styles.dateGregorian}>
                                    {khutbah.date.split(' ')[1].replace(',', '')}
                                </span>
                                <span className={styles.dateMonth}>
                                    {khutbah.date.split(' ')[0]}
                                </span>
                                <span className={styles.dateHijri}>
                                    {khutbah.hijriDate.split(' ')[1]}
                                </span>
                            </div>

                            <div className={styles.episodeInfo}>
                                <h3 className={styles.episodeTitle}>{khutbah.title}</h3>
                                <p className={styles.episodeSpeaker}>
                                    <User size={12} /> delivered by {khutbah.speaker}
                                </p>
                                <div className={styles.episodeTags}>
                                    {khutbah.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>#{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.episodeActions}>
                                <button
                                    className={styles.playBtn}
                                    onClick={() => onPlay({
                                        id: khutbah.id,
                                        title: khutbah.title,
                                        speaker: khutbah.speaker,
                                        date: khutbah.date,
                                        hijriDate: khutbah.hijriDate,
                                        duration: khutbah.duration,
                                        audioUrl: khutbah.audioUrl
                                    })}
                                    aria-label="Play"
                                >
                                    <Play size={20} />
                                </button>
                                <span className={styles.duration}>
                                    <Clock size={12} /> {khutbah.duration}
                                </span>
                                <div className={styles.moreMenu}>
                                    <button className={styles.moreBtn} aria-label="More options">
                                        <MoreVertical size={18} />
                                    </button>
                                    <div className={styles.moreDropdown}>
                                        <button><Download size={14} /> Download MP3</button>
                                        <button><Share2 size={14} /> Share</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <button
                        ref={loadMoreRef}
                        className={styles.loadMoreBtn}
                        onClick={loadMore}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <><Loader2 size={18} className={styles.spinner} /> Loading...</>
                        ) : (
                            'Load More Khutbahs'
                        )}
                    </button>
                )}

                {!hasMore && displayedKhutbahs.length > 0 && (
                    <p className={styles.endMessage}>You've reached the beginning of our archive</p>
                )}
            </div>
        </section>
    );
}
