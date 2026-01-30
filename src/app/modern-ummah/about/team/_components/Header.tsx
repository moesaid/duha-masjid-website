'use client';

import { Users } from 'lucide-react';
import styles from '../Team.module.css';

export function Header() {
    return (
        <section className={styles.hero}>
            {/* Geometric background -- interlocking circles representing unity */}
            <div className={styles.heroGeometric}>
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Central star pattern */}
                    <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="200" cy="200" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                    {/* Satellite circles representing community */}
                    <circle cx="200" cy="60" r="25" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="320" cy="140" r="25" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="320" cy="260" r="25" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="200" cy="340" r="25" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="80" cy="260" r="25" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="80" cy="140" r="25" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    {/* Connecting lines */}
                    <line x1="200" y1="85" x2="200" y2="160" stroke="currentColor" strokeWidth="1" />
                    <line x1="200" y1="240" x2="200" y2="315" stroke="currentColor" strokeWidth="1" />
                    <line x1="105" y1="140" x2="160" y2="175" stroke="currentColor" strokeWidth="1" />
                    <line x1="295" y1="140" x2="240" y2="175" stroke="currentColor" strokeWidth="1" />
                    <line x1="105" y1="260" x2="160" y2="225" stroke="currentColor" strokeWidth="1" />
                    <line x1="295" y1="260" x2="240" y2="225" stroke="currentColor" strokeWidth="1" />
                </svg>
            </div>

            <div className={styles.heroContent}>
                <span className={styles.heroBadge}>
                    <Users size={16} />
                    Ilm · Knowledge
                </span>
                <h1 className={styles.heroTitle}>Our Religious Leaders</h1>
                <p className={styles.heroSubtitle}>
                    Meet the scholars and teachers dedicated to guiding our community
                    with wisdom, compassion, and the light of Islamic knowledge.
                </p>
            </div>
        </section>
    );
}
