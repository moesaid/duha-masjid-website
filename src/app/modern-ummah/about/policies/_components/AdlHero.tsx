import styles from '../Policies.module.css';

export function AdlHero() {
    return (
        <section className={styles.hero}>
            {/* Geometric scales pattern */}
            <div className={styles.heroPattern}>
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Interlocking scales/justice pattern */}
                    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="100" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="300" cy="100" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="150" cy="180" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="250" cy="180" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="100" cy="260" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="260" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="300" cy="260" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="150" cy="340" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="250" cy="340" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
            </div>

            <div className={styles.heroContent}>
                <span className={styles.heroBadge}>
                    <ScaleIcon />
                    Adl &middot; Justice
                </span>
                <h1 className={styles.heroTitle}>Standards of Community</h1>
                <p className={styles.heroSubtitle}>
                    Our bylaws, codes of conduct, and financial policies are open for all to review.
                    Transparency is the foundation of trust.
                </p>
            </div>
        </section>
    );
}

function ScaleIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 3v18M3 7h18M5 7l2 8h-4M19 7l-2 8h4M5 15h4M15 15h4" />
        </svg>
    );
}
