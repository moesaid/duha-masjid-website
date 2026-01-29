import { Clock, Shield } from 'lucide-react';
import { WeeklyProgram } from '../_data';
import styles from '../SistersPage.module.scss';

interface ProgramsSectionProps {
    programs: WeeklyProgram[];
}

export function ProgramsSection({ programs }: ProgramsSectionProps) {
    return (
        <section id="programs" className={styles.programsSection}>
            <div className={styles.sectionIntro}>
                <span className={styles.sectionLabel}>The Rhythm</span>
                <h2 className={styles.sectionTitle}>Weekly Gatherings</h2>
                <p className={styles.sectionDescription}>
                    Join us for regular programs designed to nurture the mind, body, and soul.
                </p>
            </div>

            <div className={styles.programsGrid}>
                {programs.map((program) => {
                    const IconComponent = program.icon;
                    return (
                        <article key={program.title} className={styles.programCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIconCircle}>
                                    <IconComponent size={24} />
                                </div>
                                <span className={styles.sistersOnlyTag}>
                                    <Shield size={12} />
                                    Sisters Only
                                </span>
                            </div>
                            <h3 className={styles.cardTitle}>{program.title}</h3>
                            <p className={styles.cardDescription}>{program.description}</p>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardTime}>
                                    <Clock size={14} />
                                    <span>{program.time}</span>
                                </div>
                                <span className={styles.cardInstructor}>
                                    with {program.instructor}
                                </span>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
