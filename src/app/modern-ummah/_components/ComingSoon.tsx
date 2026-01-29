'use client';

import styles from '../_styles/ComingSoon.module.css';

interface ComingSoonProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
}

export function ComingSoon({
    title,
    description = "We're working hard to bring you this feature. Check back soon!",
    icon
}: ComingSoonProps) {
    return (
        <section className={styles.comingSoon}>
            <div className={styles.container}>
                <div className={styles.card}>
                    {/* Decorative Islamic pattern */}
                    <div className={styles.pattern} />

                    {/* Icon */}
                    <div className={styles.iconWrapper}>
                        {icon || <DefaultIcon />}
                    </div>

                    {/* Content */}
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>

                    {/* Status badge */}
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        Coming Soon
                    </div>

                    {/* Decorative elements */}
                    <div className={styles.crescentAccent} />
                </div>
            </div>
        </section>
    );
}

function DefaultIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3C8 3 5 6 5 10v11h14V10c0-4-3-7-7-7z" />
            <path d="M12 3v3" />
            <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none" />
            <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
            <path d="M5 14h14" />
        </svg>
    );
}
