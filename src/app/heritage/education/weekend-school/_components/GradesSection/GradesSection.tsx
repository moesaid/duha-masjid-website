import { Check } from 'lucide-react';
import { gradeLevels, GradeLevel } from '../../_data';
import styles from './GradesSection.module.scss';

interface GradesSectionProps {
    onEnroll: (gradeId: string) => void;
}

export function GradesSection({ onEnroll }: GradesSectionProps) {
    return (
        <section className={styles.gradesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Program</span>
                <h2 className={styles.sectionTitle}>Grade Levels</h2>
            </div>

            <div className={styles.gradesGrid}>
                {gradeLevels.map((grade: GradeLevel) => (
                    <div key={grade.id} className={styles.gradeCard}>
                        <div className={styles.gradeHeader}>
                            <span className={styles.arabicName}>{grade.arabicName}</span>
                            <h3>{grade.name}</h3>
                            <span className={styles.ageRange}>{grade.ageRange}</span>
                        </div>
                        <p className={styles.gradeDesc}>{grade.description}</p>
                        <div className={styles.subjects}>
                            <h4>Subjects</h4>
                            <ul>
                                {grade.subjects.map((subject, idx) => (
                                    <li key={idx}>
                                        <Check size={14} />
                                        <span>{subject}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className={styles.enrollBtn} onClick={() => onEnroll(grade.id)}>
                            Enroll Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
