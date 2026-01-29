import { SocialEvent } from '../_data';
import styles from '../SistersPage.module.scss';

interface SocialSectionProps {
    events: SocialEvent[];
}

export function SocialSection({ events }: SocialSectionProps) {
    return (
        <section className={styles.socialSection}>
            <div className={styles.sectionIntro}>
                <span className={styles.sectionLabel}>Community</span>
                <h2 className={styles.sectionTitle}>Social & Service</h2>
                <p className={styles.sectionDescription}>
                    Beyond learning, we build bonds and serve those in need.
                </p>
            </div>

            <div className={styles.socialGrid}>
                {events.map((event) => {
                    const IconComponent = event.icon;
                    return (
                        <div key={event.title} className={styles.socialCard}>
                            <IconComponent className={styles.socialIcon} />
                            <h3 className={styles.socialTitle}>{event.title}</h3>
                            <p className={styles.socialDescription}>{event.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
