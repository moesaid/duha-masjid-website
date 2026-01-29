import { MentorshipTrack } from '../_data';
import styles from '../SistersPage.module.scss';

interface MentorshipSectionProps {
    tracks: MentorshipTrack[];
}

export function MentorshipSection({ tracks }: MentorshipSectionProps) {
    return (
        <section className={styles.mentorshipSection}>
            <div className={styles.sectionIntro}>
                <span className={styles.sectionLabel}>Guidance</span>
                <h2 className={styles.sectionTitle}>Mentorship & Support</h2>
                <p className={styles.sectionDescription}>
                    Every woman&apos;s journey is unique. We meet you where you are.
                </p>
            </div>

            <div className={styles.mentorshipGrid}>
                {tracks.map((track) => {
                    const IconComponent = track.icon;
                    return (
                        <div key={track.title} className={styles.mentorshipCard}>
                            <IconComponent className={styles.mentorshipIcon} />
                            <h4 className={styles.mentorshipTitle}>{track.title}</h4>
                            <p className={styles.mentorshipDescription}>{track.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
