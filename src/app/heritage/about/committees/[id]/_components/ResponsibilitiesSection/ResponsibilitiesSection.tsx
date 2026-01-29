import styles from './ResponsibilitiesSection.module.scss';

interface ResponsibilitiesSectionProps {
    responsibilities: string[];
}

export function ResponsibilitiesSection({ responsibilities }: ResponsibilitiesSectionProps) {
    return (
        <section className={styles.section}>
            <h2>Key Responsibilities</h2>
            <ul className={styles.responsibilitiesList}>
                {responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </section>
    );
}
