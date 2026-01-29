import Link from 'next/link';
import { Project } from '../../_data';
import styles from './ProjectsSection.module.scss';

interface ProjectsSectionProps {
    projects: (string | Project)[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section className={styles.section}>
            <h2>Current Projects</h2>
            <div className={styles.projectsGrid}>
                {projects.map((project, idx) => {
                    const isStructured = typeof project === 'object' && project !== null;

                    if (isStructured) {
                        return (
                            <Link
                                key={project.id}
                                href={`/heritage/projects/${project.id}`}
                                className={`${styles.projectCard} ${styles.clickable}`}
                            >
                                <span className={styles.projectNumber}>{idx + 1}</span>
                                <div className={styles.projectInfo}>
                                    <span className={styles.projectName}>{project.name}</span>
                                    <span className={styles.projectStatus}>{project.status}</span>
                                    <div className={styles.projectProgress}>
                                        <div
                                            className={styles.projectProgressFill}
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </Link>
                        );
                    }

                    return (
                        <div key={idx} className={styles.projectCard}>
                            <span className={styles.projectNumber}>{idx + 1}</span>
                            <span className={styles.projectName}>{project}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
