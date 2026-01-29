import { BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { programTracks } from '../../_data';
import styles from './ProgramsSection.module.scss';

export function ProgramsSection() {
    return (
        <section className={styles.programSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Weekly Curriculum</span>
                <h2 className={styles.sectionTitle}>The Knowledge Tracks</h2>
                <p className={styles.sectionSubtitle}>
                    Structured learning paths for seekers at every level
                </p>
            </div>

            <div className={styles.tracksGrid}>
                {programTracks.map((track) => {
                    const IconComponent = track.icon;
                    return (
                        <div
                            key={track.id}
                            className={`${styles.trackCard} ${styles[track.color]}`}
                        >
                            <div className={styles.trackSpine} />
                            <div className={styles.trackContent}>
                                <span className={styles.trackLabel}>{track.track}</span>
                                <div className={styles.trackIcon}>
                                    <IconComponent size={24} />
                                </div>
                                <h3>{track.title}</h3>
                                <span className={styles.trackArabic}>{track.arabicTitle}</span>
                                <p className={styles.trackSubtitle}>{track.subtitle}</p>
                                <p className={styles.trackDescription}>{track.description}</p>

                                <div className={styles.trackMeta}>
                                    <div className={styles.metaItem}>
                                        <GraduationCap size={14} />
                                        <span>{track.instructor}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <Calendar size={14} />
                                        <span>{track.schedule}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles.hadithNote}>
                <BookOpen size={18} />
                <p>
                    &quot;Whoever travels a path in search of knowledge, Allah will make easy
                    for him a path to Paradise.&quot;
                </p>
            </div>
        </section>
    );
}
