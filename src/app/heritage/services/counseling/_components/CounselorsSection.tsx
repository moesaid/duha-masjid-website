import { User, Award } from 'lucide-react';
import { Counselor } from '../_data';
import styles from '../CounselingPage.module.scss';

interface CounselorsSectionProps {
    counselors: Counselor[];
}

export function CounselorsSection({ counselors }: CounselorsSectionProps) {
    return (
        <section className={styles.counselorsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Meet the Team</span>
                <h2 className={styles.sectionTitle}>Our Counselors</h2>
            </div>

            <div className={styles.counselorsRow}>
                {counselors.map((counselor) => (
                    <div key={counselor.id} className={styles.counselorCard}>
                        <div className={styles.counselorAvatar}>
                            <User size={48} />
                        </div>
                        <div className={styles.counselorInfo}>
                            <h3>{counselor.name}</h3>
                            <span className={styles.counselorTitle}>{counselor.title}</span>

                            <div className={styles.credentials}>
                                {counselor.credentials.map((cred, idx) => (
                                    <span key={idx} className={styles.credential}>
                                        <Award size={12} />
                                        {cred}
                                    </span>
                                ))}
                            </div>

                            <div className={styles.specialties}>
                                {counselor.specialties.map((spec, idx) => (
                                    <span key={idx} className={styles.specialty}>
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
