import styles from './HeroSection.module.scss';

export function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <p className={styles.heroCalligraphy}>
                    &ldquo;He is not a believer whose stomach is filled while the neighbor to his side goes hungry.&rdquo;
                </p>
                <span className={styles.heroRef}>— Prophetic Hadith (Authenticated)</span>

                <h1 className={styles.heroTitle}>The Community Pantry</h1>
                <p className={styles.heroSubtitle}>
                    Providing fresh, halal, and nutritious food to our neighbors in need, regardless of faith.
                </p>
            </div>
        </section>
    );
}
