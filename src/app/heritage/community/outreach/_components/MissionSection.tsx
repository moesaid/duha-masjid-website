import { Globe } from 'lucide-react';
import { Activity } from '../_data';
import styles from '../OutreachPage.module.scss';

interface MissionSectionProps {
    activities: Activity[];
}

export function MissionSection({ activities }: MissionSectionProps) {
    return (
        <section className={styles.missionSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>The Approach</span>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
            </div>

            <div className={styles.missionLayout}>
                <div className={styles.missionContent}>
                    <p className={styles.missionPhilosophy}>
                        The Masjid is more than just a place of worship — it is a community hub
                        that welcomes all. Our outreach program exists to dispel misconceptions,
                        foster genuine friendships, and serve as a bridge between our congregation
                        and the broader Springfield community.
                    </p>

                    <div className={styles.missionQuote}>
                        <span>&ldquo;The best among you are those who are most beneficial to others.&rdquo;</span>
                        <cite>— Prophetic Teaching (Hadith)</cite>
                    </div>

                    <div className={styles.activitiesGrid}>
                        {activities.map((activity) => {
                            const IconComponent = activity.icon;
                            return (
                                <div key={activity.label} className={styles.activityItem}>
                                    <IconComponent size={16} />
                                    <span>{activity.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.missionVisual}>
                    <div className={styles.visualPlaceholder}>
                        <Globe size={64} />
                        <span>Unity in Diversity</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
