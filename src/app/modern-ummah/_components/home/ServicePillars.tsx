import Link from 'next/link';
import styles from '../../_styles/HomePage.module.css';

interface ServicePillarsProps {
    templateId: string;
}

const SERVICES = [
    {
        title: 'Prayer Services',
        description: 'Daily prayers, Jummah, and special congregational services in a welcoming atmosphere.',
        icon: 'prayer',
        href: '/services/prayer',
    },
    {
        title: 'Education',
        description: 'Quran classes, Islamic studies, and youth programs for continuous spiritual growth.',
        icon: 'education',
        href: '/education',
    },
    {
        title: 'Community',
        description: 'Connect with fellow Muslims through events, gatherings, and support networks.',
        icon: 'community',
        href: '/community',
    },
    {
        title: 'Support',
        description: 'Counseling, financial aid, and resources for those in need within our ummah.',
        icon: 'support',
        href: '/services/counseling',
    },
];

export function ServicePillars({ templateId }: ServicePillarsProps) {
    return (
        <section className={styles.servicePillarsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Our Services</span>
                    <h2 className={styles.sectionTitle}>Pillars of Service</h2>
                    <p className={styles.sectionSubtitle}>
                        Building a stronger community through faith, education, and compassionate support.
                    </p>
                </div>

                <div className={styles.pillarsGrid}>
                    {SERVICES.map((service) => (
                        <article key={service.title} className={styles.pillarCard}>
                            <div className={styles.pillarPattern} />
                            <div className={styles.pillarIcon}>
                                <ServiceIcon type={service.icon} />
                            </div>
                            <h3 className={styles.pillarTitle}>{service.title}</h3>
                            <p className={styles.pillarDescription}>{service.description}</p>
                            <Link href={`/${templateId}${service.href}`} className={styles.pillarLink}>
                                Learn More <ArrowIcon />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceIcon({ type }: { type: string }) {
    switch (type) {
        case 'prayer':
            return (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M12 3c-1.5 2-3 3.5-3 5.5a3 3 0 0 0 6 0C15 6.5 13.5 5 12 3Z" />
                    <path d="M4 21V11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" />
                    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
                    <path d="M3 21h18" />
                </svg>
            );
        case 'education':
            return (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    <path d="M8 7h8M8 11h6" />
                </svg>
            );
        case 'community':
            return (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M18 21a8 8 0 0 0-16 0" />
                    <circle cx="10" cy="8" r="4" />
                    <path d="M22 21a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
                </svg>
            );
        case 'support':
            return (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
            );
        default:
            return null;
    }
}

function ArrowIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}
