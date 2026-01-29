import { ChevronRight } from 'lucide-react';
import { AcademicLevel } from '../_data';
import styles from '../FullTimeSchoolPage.module.scss';

interface AcademicLevelsSectionProps {
    levels: AcademicLevel[];
}

export function AcademicLevelsSection({ levels }: AcademicLevelsSectionProps) {
    return (
        <section className={styles.levelsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>The Academic Journey</span>
                <h2 className={styles.sectionTitle}>Programs of Study</h2>
            </div>

            <div className={styles.levelsGrid}>
                {levels.map((level) => {
                    const IconComponent = level.icon;
                    return (
                        <div
                            key={level.id}
                            className={styles.levelCard}
                            style={{ '--accent-color': level.color } as React.CSSProperties}
                        >
                            <div className={styles.levelHeader}>
                                <IconComponent size={28} />
                                <span className={styles.levelGrades}>{level.grades}</span>
                            </div>
                            <h3 className={styles.levelTitle}>{level.title}</h3>
                            <span className={styles.levelSubtitle}>{level.subtitle}</span>
                            <p className={styles.levelDescription}>{level.description}</p>
                            <ul className={styles.levelHighlights}>
                                {level.highlights.map((item) => (
                                    <li key={item}>
                                        <ChevronRight size={14} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
