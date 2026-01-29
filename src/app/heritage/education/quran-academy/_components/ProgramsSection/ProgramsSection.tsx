import { programs } from '../../_data';
import styles from './ProgramsSection.module.scss';

interface ProgramsSectionProps {
    onEnroll: (programId: string) => void;
}

export function ProgramsSection({ onEnroll }: ProgramsSectionProps) {
    return (
        <section className={styles.programsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Programs</span>
                <h2 className={styles.sectionTitle}>Choose Your Path</h2>
            </div>

            <div className={styles.programsGrid}>
                {programs.map((program) => {
                    const IconComponent = program.icon;
                    return (
                        <div key={program.id} className={styles.programCard}>
                            <div className={styles.programIcon}>
                                <IconComponent size={28} />
                            </div>
                            <h3>{program.title}</h3>
                            <p className={styles.ageGroup}>{program.ageGroup}</p>
                            <p className={styles.description}>{program.description}</p>
                            <div className={styles.schedule}>
                                <span>{program.schedule}</span>
                            </div>
                            <button className={styles.enrollBtn} onClick={() => onEnroll(program.id)}>
                                Enroll Now
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
