import Image from 'next/image';
import type { Advisor } from '../_data';
import styles from '../Board.module.css';

interface AdvisoryCouncilProps {
    advisors: Advisor[];
}

export function AdvisoryCouncil({ advisors }: AdvisoryCouncilProps) {
    return (
        <section className={styles.advisorySection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>
                        <ShuraIcon />
                        Shura
                    </span>
                    <h2 className={styles.sectionTitle}>Advisory Council</h2>
                    <p className={styles.sectionSubtitle}>
                        Distinguished scholars and community elders who provide wisdom and guidance to our board.
                    </p>
                </div>

                <div className={styles.advisoryGrid}>
                    {advisors.map((advisor) => (
                        <div key={advisor.id} className={styles.advisorCard}>
                            <div className={styles.advisorImageWrapper}>
                                <Image
                                    src={advisor.image}
                                    alt={advisor.name}
                                    fill
                                    sizes="100px"
                                    className={styles.advisorImage}
                                />
                            </div>
                            <h4 className={styles.advisorName}>{advisor.name}</h4>
                            <span className={styles.advisorTitle}>{advisor.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ShuraIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
    );
}
