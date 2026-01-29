import { Shield, Compass, Clock, CheckCircle } from 'lucide-react';
import { ProgramTrack } from '../_data';
import styles from '../YouthPage.module.scss';

interface TracksSectionProps {
    tracks: ProgramTrack[];
    activeTrack: string;
    currentTrack: ProgramTrack;
    onSelectTrack: (trackId: string) => void;
}

export function TracksSection({ tracks, activeTrack, currentTrack, onSelectTrack }: TracksSectionProps) {
    return (
        <section className={styles.tracksSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Find Your Group</span>
                <h2 className={styles.sectionTitle}>Program Tracks</h2>
            </div>

            <div className={styles.trackTabs}>
                {tracks.map((track) => (
                    <button
                        key={track.id}
                        className={`${styles.trackTab} ${activeTrack === track.id ? styles.active : ''}`}
                        onClick={() => onSelectTrack(track.id)}
                        style={{ '--track-color': track.color } as React.CSSProperties}
                    >
                        <Shield size={16} />
                        {track.badge}
                    </button>
                ))}
            </div>

            <div
                className={styles.trackCard}
                style={{ '--track-color': currentTrack.color } as React.CSSProperties}
            >
                <div className={styles.trackBadge}>
                    <Shield size={40} />
                    <div>
                        <h3>{currentTrack.badge}</h3>
                        <span>{currentTrack.ageGroup}</span>
                    </div>
                </div>

                <div className={styles.trackContent}>
                    <div className={styles.trackFocus}>
                        <Compass size={18} />
                        <strong>Focus:</strong> {currentTrack.focus}
                    </div>
                    <p className={styles.trackDescription}>{currentTrack.description}</p>

                    <div className={styles.trackActivities}>
                        <h4>What We Do:</h4>
                        <ul>
                            {currentTrack.activities.map((activity, idx) => (
                                <li key={idx}>
                                    <CheckCircle size={14} />
                                    {activity}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.trackMeeting}>
                        <Clock size={16} />
                        <span>{currentTrack.meeting}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
