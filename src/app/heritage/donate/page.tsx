// Donate Page - "The Giving Portal"
// Design: Emerald Green + Gold + White (Generous palette)
'use client';

import Link from 'next/link';
import {
    Heart,
    ArrowRight,
    Building2,
    Coins,
    Wheat,
    BookOpen,
    Shield,
    BadgeCheck,
    FileText,
    Users,
    LogIn
} from 'lucide-react';
import styles from './DonatePage.module.scss';

// ========================================
// DATA
// ========================================
const featuredCampaign = {
    title: 'Phase 2: The Expansion Project',
    raised: 1200000,
    goal: 2000000,
    percentage: 60
};

const categories = [
    {
        id: 1,
        title: 'Zakat al-Maal',
        tag: 'Obligatory',
        stat: 'Purify your wealth',
        icon: Coins,
        action: 'Calculate & Pay'
    },
    {
        id: 2,
        title: 'The Food Pantry',
        tag: 'Sadaqah',
        stat: 'Feed a family for $50',
        icon: Wheat,
        action: 'Donate Now'
    },
    {
        id: 3,
        title: 'Quran Academy',
        tag: 'Education',
        stat: 'Sponsor a Student ($100/mo)',
        icon: BookOpen,
        action: 'Sponsor'
    }
];

const trustStats = [
    {
        stat: '100%',
        label: 'of Zakat goes directly to recipients',
        icon: Shield
    },
    {
        stat: '$500K',
        label: 'distributed in 2025',
        icon: Users
    },
    {
        stat: '501(c)(3)',
        label: 'Tax Deductible',
        icon: BadgeCheck
    },
    {
        stat: 'Audited',
        label: 'Financials Available',
        icon: FileText
    }
];

export default function DonatePage() {
    const formatCurrency = (amount: number) => {
        if (amount >= 1000000) {
            return `$${(amount / 1000000).toFixed(1)}M`;
        }
        return `$${(amount / 1000).toFixed(0)}K`;
    };

    return (
        <div className={styles.donatePage}>
            {/* 1. INVEST HERO */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <p className={styles.heroCalligraphy}>
                        مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً
                    </p>
                    <h1 className={styles.heroTitle}>Build Your Legacy</h1>
                    <p className={styles.heroSubtitle}>
                        Your contributions sustain the house of Allah and serve His creation. Every dollar is an investment in the hereafter.
                    </p>
                    <button className={styles.heroCta}>
                        <Heart size={20} />
                        Donate to General Fund
                    </button>
                </div>
            </section>

            {/* 2. FEATURED CAMPAIGN */}
            <section className={styles.featuredSection}>
                <div className={styles.featuredCard}>
                    <div className={styles.featuredVisual}>
                        <Building2 size={80} className={styles.buildingIcon} />
                    </div>
                    <div className={styles.featuredContent}>
                        <span className={styles.urgentBadge}>Urgent Appeal</span>
                        <h2 className={styles.featuredTitle}>{featuredCampaign.title}</h2>!

                        <div className={styles.progressContainer}>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{ width: `${featuredCampaign.percentage}%` }}
                                />
                            </div>
                            <div className={styles.progressStats}>
                                <div>
                                    <span className={styles.raisedAmount}>
                                        {formatCurrency(featuredCampaign.raised)}
                                    </span>
                                    <span className={styles.goalAmount}>
                                        {' '}of {formatCurrency(featuredCampaign.goal)} Goal
                                    </span>
                                </div>
                                <span className={styles.percentage}>
                                    {featuredCampaign.percentage}%
                                </span>
                            </div>
                        </div>

                        <Link href="/heritage/donate/expansion" className={styles.featuredCta}>
                            View Campaign Details <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. CAMPAIGN CATEGORIES */}
            <section className={styles.categoriesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Ways to Give</h2>
                    <p className={styles.sectionSubtitle}>Choose the cause closest to your heart</p>
                </div>

                <div className={styles.categoryGrid}>
                    {categories.map((category) => (
                        <div key={category.id} className={styles.categoryCard}>
                            <div className={styles.categoryIcon}>
                                <category.icon size={28} />
                            </div>
                            <span className={styles.categoryTag}>{category.tag}</span>
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <p className={styles.categoryStat}>{category.stat}</p>
                            <button className={styles.categoryBtn}>
                                {category.action} <ArrowRight size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. TRANSPARENCY & TRUST */}
            <section className={styles.trustSection}>
                <div className={styles.trustGrid}>
                    {trustStats.map((item, idx) => (
                        <div key={idx} className={styles.trustItem}>
                            <div className={styles.trustIcon}>
                                <item.icon size={22} />
                            </div>
                            <div className={styles.trustStat}>{item.stat}</div>
                            <div className={styles.trustLabel}>{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. DONOR PORTAL FOOTER */}
            <section className={styles.portalSection}>
                <div className={styles.portalContent}>
                    <div className={styles.portalText}>
                        <h3 className={styles.portalTitle}>Already a donor?</h3>
                        <p className={styles.portalSubtitle}>
                            Log in to view your tax receipts and donation history.
                        </p>
                    </div>
                    <button className={styles.portalBtn}>
                        <LogIn size={18} />
                        Donor Portal Login
                    </button>
                </div>
            </section>
        </div>
    );
}
