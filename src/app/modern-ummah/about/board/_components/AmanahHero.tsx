import styles from '../Board.module.css';

export function AmanahHero() {
    return (
        <section className={styles.hero}>
            {/* Geometric balance watermark */}
            <div className={styles.heroGeometric}>
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Balance/Scale symbol */}
                    <circle cx="200" cy="100" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                    <line x1="200" y1="140" x2="200" y2="200" stroke="currentColor" strokeWidth="2" />
                    <line x1="100" y1="200" x2="300" y2="200" stroke="currentColor" strokeWidth="2" />
                    <line x1="100" y1="200" x2="80" y2="260" stroke="currentColor" strokeWidth="2" />
                    <line x1="300" y1="200" x2="320" y2="260" stroke="currentColor" strokeWidth="2" />
                    {/* Left pan */}
                    <path d="M60 260 Q80 280 100 260 Q120 280 140 260" stroke="currentColor" strokeWidth="2" fill="none" />
                    {/* Right pan */}
                    <path d="M260 260 Q280 280 300 260 Q320 280 340 260" stroke="currentColor" strokeWidth="2" fill="none" />
                    {/* Connecting chains */}
                    <path d="M100 200 L80 220 L100 220 L80 240 L100 240 L80 260" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M300 200 L320 220 L300 220 L320 240 L300 240 L320 260" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    {/* Geometric knot below */}
                    <circle cx="200" cy="320" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
                    <path d="M150 320 Q200 270 250 320 Q200 370 150 320" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M200 270 Q150 320 200 370 Q250 320 200 270" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
            </div>

            <div className={styles.heroContent}>
                <span className={styles.heroBadge}>
                    <TrustIcon />
                    Amanah &middot; Trust
                </span>
                <h1 className={styles.heroTitle}>Servants of the House</h1>
                <p className={styles.heroSubtitle}>
                    Meet the team dedicated to the strategic vision and governance of our community.
                    Guided by faith, accountability, and a commitment to service.
                </p>
            </div>
        </section>
    );
}

function TrustIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}
