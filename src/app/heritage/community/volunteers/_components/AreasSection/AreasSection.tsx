import { volunteerAreas, VolunteerArea } from '../../_data';
import styles from './AreasSection.module.scss';

interface AreasSectionProps {
    onSignUp: (areaId: string) => void;
}

export function AreasSection({ onSignUp }: AreasSectionProps) {
    return (
        <section className={styles.areasSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Get Involved</span>
                <h2 className={styles.sectionTitle}>Volunteer Opportunities</h2>
            </div>

            <div className={styles.areasGrid}>
                {volunteerAreas.map((area: VolunteerArea) => {
                    const IconComponent = area.icon;
                    return (
                        <div key={area.id} className={styles.areaCard}>
                            <div className={styles.areaIcon}>
                                <IconComponent size={28} />
                            </div>
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                            <span className={styles.commitment}>{area.commitment}</span>
                            <button className={styles.signUpBtn} onClick={() => onSignUp(area.id)}>
                                Sign Up
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
