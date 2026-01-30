'use client';

import { TrendingUp } from 'lucide-react';
import { monthlyHighlights } from '../_data';
import styles from '../Committees.module.css';

export function MonthlyHighlights() {
    return (
        <section className={styles.highlightsSection}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.highlightsHeader}>
                    <TrendingUp size={20} className={styles.highlightsIcon} />
                    <h2 className={styles.highlightsTitle}>What we achieved this month</h2>
                </div>

                {/* Horizontal Scroll */}
                <div className={styles.highlightsScroll}>
                    {monthlyHighlights.map((highlight) => (
                        <div key={highlight.id} className={styles.highlightCard}>
                            <div className={styles.highlightIconWrapper}>
                                <highlight.icon size={20} className={styles.highlightCardIcon} />
                            </div>
                            <div className={styles.highlightContent}>
                                <span className={styles.highlightCommittee}>{highlight.committee}</span>
                                <p className={styles.highlightText}>{highlight.achievement}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
