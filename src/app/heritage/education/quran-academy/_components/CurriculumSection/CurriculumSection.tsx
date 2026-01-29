import { Check } from 'lucide-react';
import { curriculumHighlights } from '../../_data';
import styles from './CurriculumSection.module.scss';

export function CurriculumSection() {
    return (
        <section className={styles.curriculumSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>What We Offer</span>
                <h2 className={styles.sectionTitle}>Program Highlights</h2>
            </div>

            <div className={styles.highlightsGrid}>
                {curriculumHighlights.map((highlight, idx) => (
                    <div key={idx} className={styles.highlightCard}>
                        <Check size={20} className={styles.checkIcon} />
                        <span>{highlight}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
