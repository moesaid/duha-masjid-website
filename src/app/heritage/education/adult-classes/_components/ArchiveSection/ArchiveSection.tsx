import { Play, Download, ExternalLink, Headphones } from 'lucide-react';
import { archiveRecordings } from '../../_data';
import styles from './ArchiveSection.module.scss';

export function ArchiveSection() {
    return (
        <section className={styles.archiveSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Missed a Class?</span>
                <h2 className={styles.sectionTitle}>The &apos;Ilm Archive</h2>
                <p className={styles.sectionSubtitle}>
                    Access recordings of past lessons anytime, anywhere
                </p>
            </div>

            <div className={styles.archiveList}>
                {archiveRecordings.map((recording) => (
                    <div key={recording.id} className={styles.archiveRow}>
                        <button className={styles.playBtn} aria-label="Play recording">
                            <Play size={18} />
                        </button>

                        <div className={styles.recordingInfo}>
                            <span className={styles.recordingSeries}>{recording.series}</span>
                            <h4>{recording.title}</h4>
                            <span className={styles.recordingDuration}>{recording.duration}</span>
                        </div>

                        <div className={styles.recordingActions}>
                            {recording.hasNotes && (
                                <button className={styles.notesBtn} aria-label="Download notes">
                                    <Download size={16} />
                                    <span>PDF Notes</span>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.archiveLinks}>
                <a href="#" className={styles.archiveLink}>
                    <ExternalLink size={16} />
                    View Full Archive on YouTube
                </a>
                <a href="#" className={styles.archiveLink}>
                    <Headphones size={16} />
                    Visit Duha Academy
                </a>
            </div>
        </section>
    );
}
