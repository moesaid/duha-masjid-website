'use client';

import { Users } from 'lucide-react';
import styles from '../Committees.module.css';

export function ShuraHero() {
    return (
        <section className={styles.hero}>
            {/* Interlocking circles geometric pattern */}
            <div className={styles.heroGeometric}>
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Central overlapping circles - representing unity */}
                    <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="140" cy="200" r="80" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="260" cy="200" r="80" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="140" r="80" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="260" r="80" stroke="currentColor" strokeWidth="1" fill="none" />
                    {/* Outer ring */}
                    <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    {/* Connection points */}
                    <circle cx="200" cy="40" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="360" cy="200" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="360" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="40" cy="200" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
                    {/* Radial lines */}
                    <line x1="200" y1="48" x2="200" y2="100" stroke="currentColor" strokeWidth="0.75" />
                    <line x1="352" y1="200" x2="300" y2="200" stroke="currentColor" strokeWidth="0.75" />
                    <line x1="200" y1="352" x2="200" y2="300" stroke="currentColor" strokeWidth="0.75" />
                    <line x1="48" y1="200" x2="100" y2="200" stroke="currentColor" strokeWidth="0.75" />
                </svg>
            </div>

            <div className={styles.heroContent}>
                <span className={styles.heroBadge}>
                    <Users size={16} />
                    Shura · Consultation
                </span>
                <h1 className={styles.heroTitle}>Driven by the Community</h1>
                <p className={styles.heroSubtitle}>
                    Our committees are the engines of our Masjid, powered by the diverse
                    talents and dedication of our members.
                </p>
            </div>
        </section>
    );
}
