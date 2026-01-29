import { FileText, Eye, Download, Sparkle } from 'lucide-react';
import { Resource } from '../../_data';
import styles from './ResourcesSection.module.scss';

interface ResourcesSectionProps {
    resources: Resource[];
}

export function ResourcesSection({ resources }: ResourcesSectionProps) {
    return (
        <section className={styles.resourcesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Free Downloads</span>
                <h2 className={styles.sectionTitle}>Resources for Neighbors</h2>
                <p className={styles.sectionSubtitle}>Thoughtfully prepared guides to help you learn more</p>
            </div>

            <div className={styles.resourcesGrid}>
                {resources.map((resource) => (
                    <div key={resource.title} className={`${styles.resourceCard} ${styles[resource.color]}`}>
                        <div className={styles.bookSpine} />
                        <div className={styles.bookCover}>
                            <div className={styles.bookDecor}>
                                <Sparkle size={14} />
                            </div>
                            <h4 className={styles.bookTitle}>{resource.title}</h4>
                            <p className={styles.bookSubtitle}>{resource.subtitle}</p>
                            <div className={styles.bookMeta}>
                                <FileText size={14} />
                                <span>{resource.pages}</span>
                            </div>
                        </div>
                        <div className={styles.bookActions}>
                            <button className={styles.previewBtn}>
                                <Eye size={16} />
                                Preview
                            </button>
                            <button className={styles.downloadBtn}>
                                <Download size={16} />
                                Download PDF
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
