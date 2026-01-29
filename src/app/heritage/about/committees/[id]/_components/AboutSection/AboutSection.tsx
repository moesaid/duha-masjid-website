import styles from './AboutSection.module.scss';

interface AboutSectionProps {
    fullDescription: string;
}

export function AboutSection({ fullDescription }: AboutSectionProps) {
    return (
        <section className={styles.section}>
            <h2>About This Committee</h2>
            <p>{fullDescription}</p>
        </section>
    );
}
