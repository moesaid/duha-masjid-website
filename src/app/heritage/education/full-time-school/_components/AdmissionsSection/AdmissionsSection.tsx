import { ChevronRight } from 'lucide-react';
import { AdmissionStep } from '../../_data';
import styles from './AdmissionsSection.module.scss';

interface AdmissionsSectionProps {
    steps: AdmissionStep[];
    onApply: () => void;
}

export function AdmissionsSection({ steps, onApply }: AdmissionsSectionProps) {
    return (
        <section className={styles.admissionsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Getting Started</span>
                <h2 className={styles.sectionTitle}>Admissions Process</h2>
            </div>

            <div className={styles.admissionsTimeline}>
                {steps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                        <div key={step.step} className={styles.timelineStep}>
                            <div className={styles.stepCircle}>
                                <IconComponent size={20} />
                            </div>
                            {index < steps.length - 1 && (
                                <div className={styles.stepConnector} />
                            )}
                            <div className={styles.stepContent}>
                                <span className={styles.stepNumber}>Step {step.step}</span>
                                <h4>{step.title}</h4>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles.admissionsCta}>
                <button onClick={onApply} className={styles.primaryBtn}>
                    Begin Application
                    <ChevronRight size={18} />
                </button>
            </div>
        </section>
    );
}
