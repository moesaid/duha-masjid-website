import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from './index';
import styles from '../_styles/Hero.module.css';

interface HeroProps {
    title?: string;
    subtitle?: string;
    templateId: string;
}

export function Hero({
    title = 'Your Community, Simplified.',
    subtitle = 'A welcoming space for everyone. Find prayer times, join programs, and connect with your local Muslim community.',
    templateId,
}: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <span className={styles.heroLabel}>Welcome to Ummah Center</span>

                <h1 className={styles.heroTitle}>
                    Your Community, <span className={styles.heroHighlight}>Simplified.</span>
                </h1>

                <p className={styles.heroSubtitle}>{subtitle}</p>

                <div className={styles.heroActions}>
                    <Button href={`/${templateId}/programs`} variant="primary">
                        Explore Programs
                        <ArrowRight size={16} />
                    </Button>
                    <Button href={`/${templateId}/about`} variant="secondary">
                        Learn More
                    </Button>
                </div>

                <div className={styles.features}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <ClockIcon />
                        </div>
                        <h3 className={styles.featureTitle}>Prayer Times</h3>
                        <p className={styles.featureDesc}>Accurate times updated daily for your location</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <CalendarIcon />
                        </div>
                        <h3 className={styles.featureTitle}>Events</h3>
                        <p className={styles.featureDesc}>Stay connected with community gatherings</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <BookIcon />
                        </div>
                        <h3 className={styles.featureTitle}>Learn</h3>
                        <p className={styles.featureDesc}>Classes for all ages and skill levels</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


function ClockIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
    );
}

function BookIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    );
}
