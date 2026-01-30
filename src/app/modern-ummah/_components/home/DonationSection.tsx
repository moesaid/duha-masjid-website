'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../_styles/HomePage.module.css';

interface DonationSectionProps {
    templateId: string;
}

// Mock donation data
const DONATION_DATA = {
    current: 47500,
    goal: 75000,
    campaign: 'Building Expansion Fund',
};

export function DonationSection({ templateId }: DonationSectionProps) {
    const [progress, setProgress] = useState(0);
    const percentage = (DONATION_DATA.current / DONATION_DATA.goal) * 100;

    // Animate progress bar on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(percentage);
        }, 500);
        return () => clearTimeout(timer);
    }, [percentage]);

    return (
        <section className={styles.donationSection}>
            <div className={styles.container}>
                <div className={styles.donationContent}>
                    <div className={styles.donationIcon}>
                        <HeartIcon />
                    </div>

                    <h2 className={styles.donationTitle}>
                        Leave a Legacy of Light
                    </h2>

                    <p className={styles.donationSubtitle}>
                        Your Sadaqah Jariyah illuminates paths for generations.
                        Every contribution builds a home for faith that endures beyond our lifetimes.
                    </p>

                    {/* Progress Bar */}
                    <div className={styles.donationProgress}>
                        <div className={styles.donationProgressLabel}>
                            <span className={styles.donationProgressCurrent}>
                                ${DONATION_DATA.current.toLocaleString()}
                            </span>
                            <span className={styles.donationProgressGoal}>
                                Goal: ${DONATION_DATA.goal.toLocaleString()}
                            </span>
                        </div>
                        <div className={styles.donationProgressBar}>
                            <div
                                className={styles.donationProgressFill}
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    <Link href={`/${templateId}/donate`} className={styles.donationBtn}>
                        <span>Give Now</span>
                        <HeartHandIcon />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function HeartIcon() {
    return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
    );
}

function HeartHandIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
            <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
            <path d="m2 15 6 6" />
            <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
        </svg>
    );
}
